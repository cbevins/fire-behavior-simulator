/**
 * @file StorageAbstract is a do-nothing Dag storage class from which other storage classes are derived.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

export class StorageAbstract {
  constructor (dag) {
    if (typeof dag !== 'object') {
      throw new Error('Dag Storage<Something>() class constructors require arg 1 to be an instance of the Dag class')
    }
    this._dag = dag
  }

  init () {}
  store () {}
  end () {}
}
