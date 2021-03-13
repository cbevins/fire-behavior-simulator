/**
 * @file Integer Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Numeric } from './_Numeric.js'
import { ValidationResult } from './ValidationResult.js'
import { filterInteger } from './filters.js'

/**
 * Integer is a Numeric Variant whose value is an integer.
 */
export class Integer extends _Numeric {
  constructor (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1) {
    const signature = `new Integer(${key}, ${defaultValue}, ${minValue}, ${maxValue}, ${stepValue})`
    if (typeof defaultValue !== 'number' || Number.isInteger(defaultValue) === false) {
      throw new Error(signature + ' requires arg 2 \'defaultValue\' to be an integer')
    } else if (typeof minValue !== 'number' || Number.isInteger(minValue) === false) {
      throw new Error(signature + ' requires arg 3 \'minValue\' to be an integer')
    } else if (typeof maxValue !== 'number' || Number.isInteger(maxValue) === false) {
      throw new Error(signature + ' requires arg 4 \'maxValue\' to be an integer')
    } else if (typeof stepValue !== 'number' || Number.isInteger(stepValue) === false) {
      throw new Error(signature + ' requires arg 5 \'stepValue\' to be an integer')
    }
    super(key, defaultValue, minValue, maxValue, stepValue)
  }

  _formatValue (value) {
    const int = Math.round(value)
    // Decorate with commas, prefix, suffix...
    return int.toString()
  }

  displayString (nativeValue) { return this.displayValue(nativeValue) }

  displayValue (nativeValue) { return this._formatValue(nativeValue) }

  validateDisplayValue (inputText) {
    // filter invalid characters from input text
    const filtered = filterInteger(inputText)
    // cast from text to number, boolean, object, or some other string
    const inputValue = parseInt(filtered)
    if (isNaN(inputValue)) {
      return new ValidationResult(false, filtered, 'Not a valid number')
    }
    // Now we have a number value to convert to native units
    return this.validateNativeValue(inputValue)
  }
}
