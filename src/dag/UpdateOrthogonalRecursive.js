/**
 * @file UpdateOrthogonalRecursive class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

import { UpdateAbstract } from './UpdateAbstract.js'
/**
 * Generates a set of result values for all combinations of the this._dag.input values.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 2 x 3 x 4 = 24 results are generated.
 */
export class UpdateOrthogonalRecursive extends UpdateAbstract {
  constructor (dag) {
    super(dag)
    this._stack = []
    this._inputSet = new Set()
    this._result = {}
  }

  update () {
    this._result = { runs: 0, calls: 0, ok: true, message: '' }
    this._stack = this._dag.requiredUpdateNodes() // All required updteable (non-Config) DagNodes in topo order
    this._inputSet = new Set() // map of input value indices
    this._dag.requiredInputNodes().forEach(node => this._inputSet.add(node))
    this._dag._storageClass.init()
    this.recurse(0)
    this._dag._storageClass.end()
    return this._result
  }

  recurse (stackIdx) {
    if (!this._result.ok) return
    // If at the end of the stack...
    if (stackIdx === this._stack.length) {
      this._dag._storageClass.store()
      this._result.runs += 1
      if (this._result.runs >= this._dag._runLimit) {
        this._result.message = `Run limit of ${this._dag._runLimit} exceeded.`
        this._result.ok = false
      }
      return
    }
    const node = this._stack[stackIdx]
    if (this._inputSet.has(node)) { // this is a required, non-Config input dagNode
      this._dag._input.get(node).forEach(value => { // loop over each input value
        node._value = value
        this.recurse(stackIdx + 1)
      })
    } else {
      node.updateValue()
      this._result.calls++
      this.recurse(stackIdx + 1)
    }
  }
}
