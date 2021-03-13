/**
 * @file Dag class public implementation
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { DagNode } from './DagNode.js'
import { DagPrivate } from './DagPrivate.js'
import { StorageAbstract } from './StorageAbstract.js'
import { UpdateAbstract } from './UpdateAbstract.js'
import { UpdateOrthogonalStack } from './UpdateOrthogonalStack.js'

export class Dag extends DagPrivate {
  constructor(sim) {
    super(sim)
    this._storageClass = new StorageAbstract(this)
    this._updateClass = new UpdateOrthogonalStack(this)
  }

  clearInputs () {
    this._input = new Map()
    return this
  }

  clearSelected () {
    this._node.forEach(node => {
      node._is._required = false
      node._is._selected = false
    })
    return this
  }

  /**
   * Sets the value of one or more Config DagNodes then calls setTopology()
   * @param {*} nodeValuePairs Array of 2-element arrays where:
   *  - element 0 is a Config DagNode reference, string key, or numeric Genome index, and
   *  - element 1 is the Config option value (usually a string)
   * @returns {Dag} Reference to *this* Dag (so we can chain configure([...]).run() )
   */
  configure (nodeValuePairs) {
    this._refVals(nodeValuePairs, 'configure').forEach(([node, value]) => {
      if (! node._is._config) {
        throw new Error(`configure() node '${node.key()}' is not a COnfig DagNode`)
      }
      if (! node._variant.isValidNativeValue(value)) {
        throw new Error( `Config Node '${node.key()}' value '${value}' is invalid`)
      }
      node._value = value
    })
    this.setTopology()
    this.setRequiredNodes()
    return this
  }

  /**
   * @returns {Array} An array of references to all enabled DagNodes in topological order.
   */
  enabledNodes () { return this._sortedNodes.filter(node => node._is._enabled) }

  /**
   * Adds (or replaces) an array of input values for one or more DagNodes.
   *
   * Note that this function stores the DagNode's input values regardless of whether the
   * DagNode is actually an input under the current configuration-selection.
   * The values remain unchanged until they are reset by the another input() or a clearInputs().
   *
    * @param {*} nodeValuePairs Array of 2-element arrays where
   *  - element 0 is a DagNode reference, string key, or numeric Genome index, and
   *  - element 1 is the array of input *native* values
   * @returns {Dag} Reference to *this* Dag (so we can call chain input([...]).run() )
   */
  input (nodeValuePairs) {
    this._refVals(nodeValuePairs, 'input').forEach(([node, value]) => {
      this._input.set(node, (Array.isArray(value)) ? value : [value])
    })
    return this
  }

  /**
   * Returns a reference to a DagNode given its reference, genome key, or genome numeric index
   *
   * @param {DagNode|string|number} something A DagNode reference, key, or Genome index
   * @returns {DagNode} Reference to the passed node locator.
   */
  node (something) { return this.get(something) }

  /**
   * @returns {Array} An array of references to all required Config DagNodes in topological order.
   */
  requiredConfigNodes () { return this._sortedNodes.filter(node => node._is._config && node._is._required) }

  /**
   * @returns {Array} An array of references to all required DagNodes in topological order.
   */
  requiredNodes () { return this._sortedNodes.filter(node => node._is._required) }

  /**
   * @returns {Array} An array of references to all required input DagNodes in topological order.
   */
  requiredInputNodes () { return this._sortedNodes.filter(node => node._is._input && node._is._required && !node._is._config) }

  run () {
    // Ensure every input DagNode has values in the Input Map
    this._sortedNodes.forEach(node => {
      if (node._is._required && node._is._input) {
        if ((!this._input.has(node)) || this._input.get(node) === []) {
          this._input.set(node, [node.value()])
        }
      }
    })
    return this._updateClass.update()
    // return recursive ? updateOrthogonalStack(this) : updateOrthogonalRecursive(this)
  }

  select (nodeRefsKeysIndices) {
    this._refs(nodeRefsKeysIndices, 'select').forEach(node => { node._is._selected = true })
    this.setRequiredNodes()
    return this
  }

  selectedNodes () {
    const nodes = []
    this._sortedNodes.forEach(node => { if (node._is._selected) nodes.push(node) })
    return nodes
  }

  setEnabled (prefixes, isEnabled) {
    this._node.forEach(node => {
      const key = node.key()
      for(let idx=0; idx<prefixes.length; idx++) {
        if (key.startsWith(prefixes[idx])) {
          node.setEnabled(isEnabled)
          break
        }
      }
    })
    return this
  }

  setRunLimit (runs ) {
    this._runLimit = runs
    return this
  }

  /**
   * Sets the storage class used by the Dag after every update run.
   * @param {StorageAbstract} storageClass Instance of a class derived from StorageAbstract
   */
  setStorageClass(storageClass) {
    if ( ! (storageClass instanceof StorageAbstract)) {
      throw new Error(`setStorageClass() arg 1 must be an instance of StorageAbstract`)
    }
    if (storageClass._dag !== this) {
      throw new Error(`setStorageClass() instance must be set on *this* Dag`)
    }
    this._storageClass = storageClass
    return this
  }

  /**
   * Sets the updater class used by the Dag.
   * @param {UpdateAbstract} updateClass Instance of a class derived from UpdateAbstract
   */
  setUpdateClass(updateClass) {
    if ( ! (updateClass instanceof UpdateAbstract)) {
      throw new Error(`setUpdateClass() arg 1 must be an instance of UpdateAbstract`)
    }
    if (updateClass._dag !== this) {
      throw new Error(`setUpdateClass() instance must be set on *this* Dag`)
    }
    this._updateClass = updateClass
    return this
  }

  sortedNodes () { return this._sortedNodes }

  unselect (nodeRefsKeysIndices) {
    this._refs(nodeRefsKeysIndices, 'unselect').forEach(node => { node._is._selected = false })
    this.setRequiredNodes()
    return this
  }

  /**
   * Validates one or more DagNode display text input sets whose values are strings
   * (usually from a text file or browser input element) that must be translated,
   * cast, and converted into native values, usually prior to calling Dag.input().
   * @param {*} nodeValuePairs
   * @returns An array with one ValidationResult object {valid, value, message, node}
   * for each *raw input text* DagNode value
   */
  validateDisplayInputs(nodeValuePairs) {
    const errors = []
    this._refVals(nodeValuePairs, 'validateDisplayInputs').forEach(([node, value]) => {
      const values = Array.isArray(value) ? value : [value] // ensure values are in an array
      values.forEach(value => {
        const result = node._variant.validateDisplayValue(value)
        // console.log(`Validating '${value}' returned ${JSON.stringify(result)}`)
        if (! result.valid) {
          errors.push(result)
        }
      })
    })
    return errors
  }

  /**
   * Validates one or more DagNode *native value* input sets, usually prior to calling Dag.input().
   * NOTE that the provided values must be of the appropriate type (number, string, etc)
   * and if the node is a Quantity, value must be expressed in the native units-of-measure.
   * @param {*} nodeValuePairs
   * @returns An array with one ValidationResult object {valid, value, message, node}
   * for each *invalid* DagNode value
   */
  validateNativeInputs(nodeValuePairs) {
    const errors = []
    this._refVals(nodeValuePairs, 'validateNativeInputs').forEach(([node, value]) => {
      const values = Array.isArray(value) ? value : [value] // ensure values are in an array
      values.forEach(value => {
        const result = node._variant.validateNativeValue(value)
        if (! result.valid) {
          errors.push(result)
        }
      })
    })
    return errors
  }

  // DEPRECATED - included only for backwards compatability in test files
  // runConfigs(args) {
  //   this.configure(args)
  //   this.run()
  // }
  // setConfigs(args) { this.configure(args) }
  // runInputs(args) {
  //   this.input(args)
  //   this.run()
  // }
  // setInputs(args) { this.input(args) }
  // runSelected(args) {
  //   this.setSelected(args)
  //   this.run()
  // }
  // setSelected(args) {
  //   const a = []
  //   args.forEach(pair => { a.push(pair[0]) })
  //   this.select(a)
  // }
}
