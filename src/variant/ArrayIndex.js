/**
 * @file ArrayIndex Variant classes
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { Count } from './Count.js'

/**
 * ArrayIndex is an Count Variant whose maximum value is size-1.
 */
export class ArrayIndex extends Count {
  constructor (key, maxSize = 1) {
    super(key, 0, maxSize - 1, 1)
    this._value._maxSize = maxSize
  }
}
