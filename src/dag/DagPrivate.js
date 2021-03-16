/**
 * @file DagPrivate class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

import { DagNode } from './DagNode.js'
import * as Lib from '../fire-behavior-models/index.js'
import { VariantMap } from '../fire-behavior-variants/index.js'

export class DagPrivate {
  constructor (sim) {
    this._input = new Map() // Map of input DagNode refs => array of input values
    this._node = [] // array of DagNode references in Genome index order
    this._configureClass = null
    this._runLimit = 1000000
    this._selected = new Set() // Set of selected DagNode references (needed?)
    this._sim = sim // reference to the master Sim (and its Genome and literals)
    this._sortedNodes = [] // array of topologically ordered DagNode references
    this._storageClass = null // StorageAbstract derived instance (set by new Dag())
    this._updateClass = null // UpdateAbstract derived instance (set by new Dag())
    this._variantMap = new VariantMap() // private VariantMap to be manipulated by this Dag
    const variantsArray = Array.from(this._variantMap.values()) // used below to convert Variant indices to references
    sim.genes().forEach(gene => {
      const variantRef = variantsArray[gene[2]] // reference to this DagNode's Variant
      const value = variantRef.defaultValue() // DagNode's actual value
      this._node.push(new DagNode(gene, variantRef, value))
    })
    this.setTopology()
  }

  // Returns an array of references to ALL Config Nodes that may be used by `node`
  // Called only by Dag.setNodeEdges()
  _nodeConfigs (node) {
    const configs = new Set()
    node.updaters().forEach(updater => {
      if (updater[0].length) { configs.add(this._node[updater[0][0]]) }
    })
    return Array.from(configs)
  }

  // Repackages an array of [<DagNode|key|index>] an array of [<DagNode>]
  _refs (nodeRefKeyIdx, name) {
    const refs = []
    if (!Array.isArray(nodeRefKeyIdx)) {
      throw new Error(`${name}(DagNodes|keys|indices) arg must be an Array`)
    }
    nodeRefKeyIdx.forEach(ref => { refs.push(this.get(ref)) })
    return refs
  }

  // Repackages an array of [<DagNode|key|index>, <value>] pairs as an array of [<DagNode>, <value>] pairs
  _refVals (pairs, name) {
    const refVals = []
    if (!Array.isArray(pairs)) {
      throw new Error(`${name}(keyValuePairs) arg must be an Array of 2-element arrays`)
    }
    pairs.forEach((pair, idx) => {
      if (!Array.isArray(pair) || pair.length !== 2) {
        throw new Error(`${name}(keyValuesPair[${idx}]) [<node|key|index>, <value>] must be a 2-element Array`)
      }
      refVals.push([this.get(pair[0]), pair[1]])
    })
    return refVals
  }

  // Returns the DagNode's updater array under the current configuration,
  // but with the configIdx replaced with its Config DagNode reference
  findNodeUpdater (node) {
    for (let idx = 0; idx < node.updaters().length; idx++) {
      const updater = node.updater(idx)
      const [condition, method] = updater
      if (!condition.length) return [[null, null], method] // if no conditions, then this IS the current updater

      const [configIdx, valueIdx] = condition
      const configNode = this.get(configIdx)
      const configValue = configNode.value() // current value of the Config DagNode
      const testValue = this._sim.literal(valueIdx) // comparison value to active this updater
      if (configValue === testValue) return [[configNode, testValue], method] // If there is a match, this IS the current updater
    }
    // The following line should never be executed, but then....
    throw new Error(`DagNode '${node.key()}' has no active updater condition`)
  }

  /**
   * Returns a reference to a DagNode given its reference, genome key, or genome numeric index
   *
   * @param {DagNode|string|number} something A DagNode reference, key, or Genome index
   * @returns {DagNode} Reference to the passed node locator.
   */
  get (something) {
    if (something instanceof DagNode) {
      return something
    } else if (this._sim._geneKeyIdxMap.has(something)) {
      return this._node[this._sim._geneKeyIdxMap.get(something)]
    } else if (typeof something === 'number' && something >= 0 && something < this._node.length) {
      return this._node[something]
    }
    throw new Error(`Unable to resolve a Node reference from arg '${something}'`)
  }

  // Returns the literal string, number, or object given its genome index
  literal (literalIdx) { return this._sim.literal(literalIdx) }

  /**
   * @returns {Array} An array of references to all required update DagNodes in topological order.
   */
  requiredUpdateNodes () {
    const nodes = []
    this._sortedNodes.forEach(node => {
      if (node._is._enabled && node._is._required && !node._is._config) {
        nodes.push(node)
      }
    })
    return nodes
  }

  /**
   * Called by setTopology() to return the DagNode's depth, calculating it first if necessary
   * (Its OK to determine depths of disabled Nodes)
   * @param {DagNode} Reference to the DagNode
   * @param {Set<DagNode>} visited The Set of DagNode keys that have been traversed from the start of the chain
   */
  setNodeDepth (node, visited) {
    // If this Node doesn't yet have a depth, derive it
    if (!node._dag._depth) {
      let maxDepth = 0
      node._dag._consumers.forEach(consumer => {
        const consumerKey = consumer.key()
        if (visited.has(consumerKey)) { // oops, this DagNode was already visited
          // The following lines should never be executed, but then...
          visited.add(consumerKey)
          throw new Error(`Cyclical dependency detected:\n${Array.from(visited).join(' required by ->\n')}`)
        }
        visited.add(consumerKey) // add this consumer to the Visited Set
        const depth = this.setNodeDepth(consumer, visited) // recurse to get depth of this consumer
        visited.delete(consumerKey) // remove the consumer from the Visited Set
        maxDepth = Math.max(depth, maxDepth)
      })
      node._dag._depth = maxDepth + 1 // *this* DagNode's depth  must be greater
    }
    return node._dag._depth
  }

  // Called by setTopology() to set each DagNode's:
  // - update method and parms,
  // - producer (in) DagNodes, and
  // - consumer (out) DagNodes.
  setNodeEdges (node) {
    const [condition, methodInfo] = this.findNodeUpdater(node)
    const configNode = condition[0]
    const [methodIdx, ...parms] = methodInfo
    const [file, func] = this._sim.method(methodIdx).split('.')
    node._update._method = (file === 'Math') ? Math[func] : Lib[file][func]

    // Add all Config nodes referenced by node to the Required Set
    node._update._configs = this._nodeConfigs(node)
    node._update._configs.forEach(config => { config._dag._consumers.push(node) })
    node._update._config = configNode

    // eslint-disable-next-line dot-notation
    node._is._input = (node._update._method === Lib['Dag']['input'])
    node._update._parms = []
    parms.forEach(parm => {
      const [isLiteral, idx] = parm
      if (isLiteral) { // parm is a literal number, string, or object
        node._update._parms.push([isLiteral, this.literal(idx)])
      } else { // parm is a DagNode reference
        const producer = this.get(idx) // get reference to this DagNode parm
        node._update._parms.push([isLiteral, producer])
        node._dag._producers.push(producer) // add producer to *this* node's producer array
        producer._dag._consumers.push(node) // add *this* node to producer's consumer array
      }
    })
  }

  setRequiredNodes () {
    // Unrequire ALL nodes while building array of all selected nodes
    const selected = []
    this._sortedNodes.forEach(node => {
      node._is._required = false
      if (node._is._selected && node._is._enabled) selected.push(node)
    })
    selected.forEach(node => { this.setRequiredRecursive(node) })
  }

  // Recursively requires all producers of this DagNode
  setRequiredRecursive (node) {
    if (!node._is._required) { // Nothing more to do if this DagNode is already required
      node._is._required = true
      // Require this DagNode's Config DagNode
      node._update._configs.forEach(config => { config._is._required = true })
      // Require all this DagNode's producer DagNodes
      node._dag._producers.forEach(producer => {
        if (!producer._is._enabled) {
          throw new Error(`Node '${node.key()}' has disabled producer '${producer.key()}'`)
        }
        this.setRequiredRecursive(producer)
      })
    }
  }

  /**
   * Updates all the DagNode updater methods and args based on current config Nodes,
   * then determines DagNode depths and topological order
   */
  setTopology () {
    // clear each DagNode's consumers[], producers[], depth, order
    this._node.forEach(node => { node.reset() })
    // set each DagNode's updater methods, parms, consumers, and producers
    this._node.forEach(node => { this.setNodeEdges(node) })
    // set each DagNode's topological depth in the consumer chain
    let maxDepth = 0
    this._node.forEach((node) => {
      const visited = new Set([node.key()])
      maxDepth = Math.max(maxDepth, this.setNodeDepth(node, visited))
    })
    // create this._sortedNodes[]
    this.sortNodes()
  }

  /**
     * Returns a topologically sorted array of the DagNodes, where:
     *  - *input* DagNodes are deferred to the greatest depth allowed by their consumers (out-edges)
     *  - *fixed* DagNodes are run first and just once
     * Its OK to determine depths of disabled Nodes
     */
  sortNodes () {
    this._sortedNodes = []
    this._node.forEach(node => {
      // Ensure input DagNodes are processed after all other DagNodes at the same depth
      // - non-input DagNodes have an odd numbered level = 2 * depth - 1
      // - input DagNodes have an even numbered level = 2 * depth
      node._dag._depth = node._is._input ? 2 * node._dag._depth - 1 : 2 * node._dag._depth
      this._sortedNodes.push(node)
    })

    // topologically sort the DagNode array
    this._sortedNodes.sort((node1, node2) => node2._dag._depth - node1._dag._depth)
    this._sortedNodes.forEach((node, order) => { node._dag._order = order })
  }
}
