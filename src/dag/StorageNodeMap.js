/**
 * @file StorageNodeMap class stores results in a Map(<DagNode> => <valuesArray>)
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { StorageAbstract } from './StorageAbstract.js'

export class StorageNodeMap extends StorageAbstract{
  constructor(dag) {
    super(dag)
    this._nodeArray = [] // Array of references to all DagNodes to be saved
    this._valueTable = [] // first subscript is DagNode idx, second subscript is runIdx
    this._valueMap = new Map() // Map of DagNode reference => run results array
  }

  // Called by Dag UpdaterClass after all runs
  end() {
    // Creates a Map of <dagNode> => <resultsArray>
    for (let idx=0; idx<this._nodeArray.length; idx++) {
      this._valueMap.set(this._nodeArray[idx], this._valueTable[idx])
    }
  }


  /**
   * Returns a reference to a DagNode given its reference, genome key, or genome numeric index
   *
   * @param {DagNode|string|number} something A DagNode reference, key, or Genome index
   * @returns {DagNode} Reference to the passed node locator.
   */
  get (something, idx=-1) {
    const node = this._dag.get(something)
    return (idx>=0) ? this._valueMap.get(node)[idx] : this._valueMap.get(node)
  }

  init() {
    this._valueMap = new Map()
    this._valueTable = [] // first subscript is DagNode idx, second subscript is runIdx
    this._nodeArray = [...this._dag.requiredInputNodes(), ...this._dag.selectedNodes()]
    for (let idx=0; idx<this._nodeArray.length; idx++) { this._valueTable.push([])  }
  }

  // Called by Dag UpdaterClass at the end of each DAG value update traversal
  store() {
    for (let idx=0; idx<this._nodeArray.length; idx++) {
      this._valueTable[idx].push(this._nodeArray[idx].value())
    }
  }
}
