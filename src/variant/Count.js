/**
 * @file Count Variant classes
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { Integer } from './Integer.js'
/**
 * Count is an Integer Variant whose minimum value is 0.
 */
export class Count extends Integer {
  constructor (key, defaultValue = 0, maxValue = Number.MAX_VALUE, stepValue = 1) {
    super(key, defaultValue, 0, maxValue, stepValue)
  }
}
