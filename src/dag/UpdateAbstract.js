/**
 * @file UpdateAbstract is a do-nothing Dag updater class from which other updater classes are derived.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

export class UpdateAbstract {
  constructor (dag) {
    if (typeof dag !== 'object') {
      throw new Error(`Dag Update<Something>() class constructors require arg 1 to be an instance of the Dag class`)
    }
    this._dag = dag
  }
  update() {}
}
