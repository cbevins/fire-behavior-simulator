/**
 * @file Obj Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Variant } from './_Variant.js'
import { ValidationResult } from './ValidationResult.js'

/**
 * Obj is a generic Object that should be subclassed for every instance.
 */
export class Obj extends _Variant {
  /**
   * @param {bool} defaultValue
   */
  constructor (key, defaultValue={}) {
    const signature = `new Obj(${key}, ${defaultValue}) `
    if (typeof defaultValue !== 'object') {
      throw new Error(signature + `arg 2 'defaultValue' must be an Object` )
    }
    super(key, defaultValue)
  }

  defaultDisplayString() { return this.displayString(this.defaultValue()) }
  defaultDisplayValue() { return this.displayValue(this.defaultValue()) }

  displayString(obj) { return this.displayValue(obj) }
  displayValue(obj) { return JSON.stringify(obj) }

  inputHint() { return '' }

  isValidValue(obj) {
    return (typeof obj === 'object' )
  }

  maximumDisplayValue() { return this.defaultDisplayValue() }
  minimumDisplayValue() { return this.defaultDisplayValue() }

  stepValue() { return null }
  stepDisplayValue() { return '' }
}
