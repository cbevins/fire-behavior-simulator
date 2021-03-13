/**
 * @file UpdateOrthogonalStack class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

import { UpdateAbstract } from './UpdateAbstract.js'
/**
 * Generates a set of result values for all combinations of the dag.input values.
 *
 * For example, if fuel model has 2 input values, 1-h dead moisture has 3 input values,
 * and wind speed has 4 input values, then 2 x 3 x 4 = 24 results are generated.
 */
export class UpdateOrthogonalStack extends UpdateAbstract {
  // eslint-disable-next-line no-useless-constructor
  constructor (dag) {
    super(dag)
  }

  /**
   * @returns {object} {runs: 0, calls: 0, ok: true, message: ''}
   */
  update () {
    const result = { runs: 0, calls: 0, ok: true, message: '' }
    const ptrMap = new Map() // map of input DagNode value indices
    this._dag.requiredInputNodes().forEach(node => ptrMap.set(node, 0))
    this._dag._storageClass.init()
    const stack = this._dag.requiredUpdateNodes() // All required updteable (non-Config) DagNodes in topo order
    if (stack.length > 0) {
      let delta = 1
      let node
      let stackIdx = 0
      while (stackIdx >= 0) {
        node = stack[stackIdx]
        if (ptrMap.has(node)) { // this is a required, non-Config input dagNode
          if (delta > 0) { // moving down the stack, so start with the first input value
            ptrMap.set(node, 0)
            node._value = this._dag._input.get(node)[0]
          } else { // moving up the stack, so check for another input value
            const iptr = ptrMap.get(node) + 1 // point to its next input value
            const inputs = this._dag._input.get(node) // get all the Node's input values
            ptrMap.set(node, iptr) // set the input value pointer
            if (iptr < inputs.length) { // there is another input value to process...
              node._value = inputs[iptr] // set its next input value
              delta = 1 // and go back down the stack
            }
          }
        } else { // this is NOT an input DagNode
          if (delta > 0) { // if moving down the stack...
            node.updateValue()
            result.calls++
          }
        }
        stackIdx += delta // set the next stack node to be processed (+1 === next, -1 === previous)
        if (stackIdx === stack.length) { // at the end of the stack (must be going down)
          this._dag._storageClass.store()
          result.runs += 1
          if (result.runs >= this._dag._runLimit) {
            result.ok = false
            result.message = `Run limit of ${this._dag._runLimit} exceeded.`
            stackIdx = 0
          }
          delta = -1 // must now go back up the stack
          stackIdx += delta // set the next stack node to process (+1 === next, -1 === previous)
        }
      } // while
    } // if (stack.length > 0)
    this._dag._storageClass.end()
    return result
  }
}
