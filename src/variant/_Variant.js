/**
 * @file Abstract base _Variant class from which _Numeric, Text, and Option classes are extended.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { keyLabel } from './filters.js'
import { ValidationResult } from './ValidationResult.js'

/**
  * _Variant is an ABSTRACT class and should never be instantiated by the client.
  *
  * _Variant is extended by:
  * - _Blob
  * - Bool
  * - _Numeric
  *   - Float
  *     - Quantity
  *   - Integer
  *     - Count
  *     - Size
  * - Option
  *   - Config
  * - Text
  *
  * New Methods:
  * - defaultValue()
  * - key()
  */
export class _Variant {
  constructor (key, defaultValue) {
    const signature = `new _Variant(${key}, ${defaultValue})`
    if (typeof key !== 'string') {
      throw new Error(signature + ' requires arg 1 \'key\' to be of type \'string\'')
    } else if (typeof defaultValue === 'undefined') {
      throw new Error(signature + ' requires arg 2 \'defaultValue\' of \'any\' type')
    } else if (key === '') {
      throw new Error(signature + ' requires arg 1 \'key\' to be non-empty string')
    }
    this._key = key
    this._value = {
      _default: defaultValue
    }
  }

  // FINAL - implemented only here
  key () { return this._key }
  defaultValue () { return this._value._default }

  /**
   * @returns {string} The Variable's label.
   */
  label () { return keyLabel(this._key) }

  // Overridden by EVERY _Variant subclass
  defaultDisplayString () { return this.displayString(this._value._default) }
  defaultDisplayValue () { return this.displayValue(this._value._default) }

  displayString (value) { return value.toString() }
  displayValue (value) { return value.toString() }

  inputHint () { return '' }

  isValidDisplayValue (inputText) { return this.validateDisplayValue(inputText).valid }
  isValidNativeValue (value) { return this.validateNativeValue(value).valid }

  validateDisplayValue (inputText) {
    const inputValue = inputText
    return this.validateNativeValue(inputValue)
  }

  validateNativeValue (value) {
    return new ValidationResult(false, value, 'Must be reimplemented by _Variant subclass')
  }

  // Overriden and final by _Variant => _Numeric
  maximumValue () { return this._value._default }
  minimumValue () { return this._value._default }
  stepValue () { return this._value._default }

  // Overriden and final by _Variant => _Numeric => Float
  maximumDisplayValue () { return this.maximumValue().toString() }
  minimumDisplayValue () { return this.minimumValue().toString() }
  stepDisplayValue () { return this.stepValue().toString() }

  setDisplayDecimals () { return this }
  setDisplayToExponential () { return this }
  setDisplayToFixed () { return this }
  setDisplayToPrecision () { return this }

  // Overriden and final by _Variant => _Numeric => Float => Quantity
  displayUnits () { return '' }
  displayValueToNativeValue (value) { return value }
  maximumDisplayString () { return this.maximumDisplayValue() }
  minimumDisplayString () { return this.minimumDisplayValue() }
  stepDisplayString () { return this.stepDisplayValue() }
  nativeUnits () { return '' }
  nativeValueToDisplayValue (value) { return value }
  setDisplayUnits () { return this }

  // Overridden and final by Option
  hasOption () { return false }
  options () { return [] }
  optionText () { return '' }
  optionTexts () { return [] }
  prompt () { return this.inputHint() }
}
