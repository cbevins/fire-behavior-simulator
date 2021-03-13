/**
 * @file Abstract _Numeric Variant class from which Float and Integer classes are extended
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { filterNumeric } from './filters.js'
import { ValidationResult } from './ValidationResult.js'
import { _Variant } from './_Variant.js'

/**
 * _Numeric is an ABSTRACT CLASS and should never be instantiated by the client.
 *
 * _Numeric extends _Variant by
 * - enforcing numeric values within a specified range
 * - validating input text as valid numbers
 *
 * New methods:
 * - inputHint()
 * - isValidDisplayValue(inputText)
 * - maximumValue()
 * - minimumValue()
 * - stepValue()
 * - validateDisplayValue(inputText)
 * - validateNativeValue(value)
 */
export class _Numeric extends _Variant {
  constructor (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1) {
    const signature = `new _Numeric(${key}, ${defaultValue}, ${minValue}, ${maxValue}, ${stepValue})`
    if (typeof defaultValue !== 'number') {
      throw new Error(signature + ' requires arg 2 \'defaultValue\' to be a \'number\'')
    } else if (typeof minValue !== 'number') {
      throw new Error(signature + ' requires arg 3 \'minValue\' to be a \'number\'')
    } else if (typeof maxValue !== 'number') {
      throw new Error(signature + ' requires arg 4 \'maxValue\' to be a \'number\'')
    } else if (typeof stepValue !== 'number') {
      throw new Error(signature + ' requires arg 5 \'stepValue\' to be a \'number\'')
    } else if (minValue > maxValue) {
      throw new Error(signature + 'requires arg 3 \'minValue\' to be less than arg 3 \'maxValue\'')
    } else if (defaultValue < minValue) {
      throw new Error(signature + 'requires arg 2 \'defaultValue\' to be greater than arg 3 \'minValue\'')
    } else if (defaultValue > maxValue) {
      throw new Error(signature + 'requires arg 2 \'defaultValue\' to be less than arg 4 \'maxValue\'')
    }
    super(key, defaultValue)
    this._value._minimum = minValue
    this._value._maximum = maxValue
    this._value._step = stepValue
  }

  // defaultDisplayString() { return this.defaultDisplayValue() }

  // defaultDisplayValue() { return this.displayString('Numeric '+this.defaultValue()) }

  displayString (value) { return value.toString() }

  displayValue (value) { return value.toString() }

  inputHint () { return `${this.minimumValue()} - ${this.maximumValue()}` }

  isValidDisplayValue (inputText) { return this.validateDisplayValue(inputText).valid }

  isValidNativeValue (value) {
    if (typeof value !== 'number') return false
    return this.validateNativeValue(value).valid
  }

  maximumValue () { return this._value._maximum }

  minimumValue () { return this._value._minimum }

  stepValue () { return this._value._step }

  validateDisplayValue (inputText) {
    // filter invalid characters from input text
    const filtered = filterNumeric(inputText)
    // cast from text to number, boolean, object, or some other string
    const inputValue = parseFloat(filtered)
    if (isNaN(inputValue)) {
      return new ValidationResult(false, filtered, 'Not a valid number')
    }
    // Now we have a number value to convert to native units
    return this.validateNativeValue(inputValue)
  }

  validateNativeValue (value) {
    if (value < this._value._minimum) {
      return new ValidationResult(false, value, `Less than minimum value of ${this._value._minimum}`)
    } else if (value > this._value._maximum) {
      return new ValidationResult(false, value, `Greater than maximum value of ${this._value._maximum}`)
    }
    return new ValidationResult(true, value)
  }
}
