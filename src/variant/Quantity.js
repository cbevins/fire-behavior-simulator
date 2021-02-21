/**
 * @file Quantity Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
  */
import { Float } from './Float.js'
import { Uom } from '@cbevins/uom'
import { ValidationResult } from './ValidationResult.js'
import { filterNonNegativeNumeric } from './filters.js'

/**
 * Quantity class extends Float by adding units-of-measure to the native value, including
 * - conversion of input/display text/values to native units-of-measure
 * - conversion of native value to display units-of-measure
 *
 * New Methods:
 * - _ensureValidUnits(units)
 * - displayValueToNativeValue(displayValue)
 * - nativeValueToDisplayValue(nativeValue)
 * - nativeUnits()
 * - setDisplayUnits(units)
 * - unitsOptions()

 *
 Overridden Methods:
 * - displayString(nativeValue)
 * - displayUnits()
 * - displayValue()
 * - inputHint()
 * - maximumDisplayValue()
 * - minimumDisplayValue()
 * - validateInput(inputText)
 * - validateValue(displayValue, nativeValue)
 */

export class Quantity extends Float {
  /**
   * @param {string} key Unique key for this Variant (i.e., 'FireLineIntensity' or 'WindSpeed')
   * @param {string[]} unitsOptions Array of allowed units-of-measure (i.e., ['lb/ft2', 't/ac', 'kg/m2', 'T/ha'] )
   * @param {number} maxValue Maximum allowed *client/user/display input* value
   * @param {number} defaultValue  If omitted, set to 0
   * @param {number} minValue Minimum allowed *client/user/display input* value
   * @param {number} stepValue Step value for input sliders
   */
  constructor(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 ) {
    super(key, defaultValue, minValue, maxValue, stepValue)
    if (!(unitsOptions instanceof Array)) {
      throw new Error(`Quantity() arg 2 expects an array, but got '${typeof unitsOptions}'`)
    }
    // Throw an Error if units-of-measure terms are not valid or compatible
    unitsOptions.forEach(uom => {
      Uom.convert(1, uom, uom)
      if (! Uom.convertible(unitsOptions[0], uom)) {
        throw new Error(`Quantity '${this._key}' units '${uom}' is not convertible to ${unitsOptions[0]}`)
      }
    })

    this._units = {
      _display: unitsOptions[0],
      _native: unitsOptions[0],
      _options: unitsOptions
    }
  }

  _ensureValidUnits(units) {
    if (! this._units._options.includes(units)) {
      throw new Error(`Quantity '${this._key}' has no units of '${units}'`)
    }
    return units
  }

  defaultDisplayString() { return this.displayString(this.defaultValue()) }

  defaultDisplayValue() { return this.displayValue(this.defaultValue()) }

  // Overrides Numeric.displayValue() to perform conversions to display units
  displayString(nativeValue) {
    return `${this.displayValue(nativeValue)} ${this.displayUnits()}`
  }

  displayUnits() { return this._units._display }

  // Overrides Float.displayValue() to perform conversion to display units
  displayValue(nativeValue) {
    return this._formatValue(this.nativeValueToDisplayValue(nativeValue))
  }

  displayValueToNativeValue(displayValue) {
    return Uom.convert(displayValue, this._units._display, this._units._native)
  }

  // Overrides Float.inputHint() to perform conversion to display units and add display uom
  inputHint() {
    return `${this.minimumDisplayValue()} - ${this.maximumDisplayValue()} ${this._units._display}`
  }

  isValidInput(inputText) { return this.validateInput(inputText).valid }

  isValidValue(value) {
    if (typeof value !== 'number') return false
    return this.validateValue(value).valid
  }

  // Overrides Numeric version to perform conversion to display units-of-measure
  maximumDisplayValue() {
    return this._formatValue(Uom.convert(this._value._maximum, this._units._native, this._units._display))
  }
  maximumDisplayString() { return `${this.maximumDisplayValue()} ${this._units._display}` }

  // Overrides Numeric version to perform conversion to display units-of-measure
  minimumDisplayValue() {
    return this._formatValue(Uom.convert(this._value._minimum, this._units._native, this._units._display))
  }
  minimumDisplayString() { return `${this.minimumDisplayValue()} ${this._units._display}` }

  nativeUnits() { return this._units._native }

  nativeValueToDisplayValue(nativeValue) {
    return Uom.convert(nativeValue, this._units._native, this._units._display)
  }

  setDisplayUnits(units) {
    this._units._display = this._ensureValidUnits(units)
    return this
  }

  // Overrides Numeric version to perform conversion to display units-of-measure
  stepDisplayValue() {
    return this._formatValue(Uom.convert(this._value._step, this._units._native, this._units._display))
  }
  stepDisplayString() { return `${this.stepDisplayValue()} ${this._units._display}` }

  unitsOptions() { return this._units._options }

  // Overrides Float.validateInput() to apply filterNonNegativeNumeric()
  // AND convert from display (input) units to native units before validating
  validateInput(inputText) {
    const text = inputText.toString()
    // filter invalid characters from input text
    const filtered = filterNonNegativeNumeric(text)
    // cast from text to number, boolean, object, or some other string
    const displayValue = parseFloat(filtered)
    if (isNaN(displayValue)) {
      return new ValidationResult(false, filtered, 'Not a valid number string')
    }
    // convert quantity from display to native units
    const nativeValue = this.displayValueToNativeValue(displayValue)
    // validate native units
    return this.validateValue(nativeValue, displayValue)
  }

  validateValue(nativeValue) {
    if (typeof nativeValue === 'undefined' ) {
      throw new Error('Quantity.validateValue() requires native value arg')
    } else if (nativeValue < this._value._minimum) {
      return new ValidationResult(false, this.displayValue(nativeValue),
        `Less than minimum value of ${this.minimumDisplayString()} ` +
        `(${this._formatValue(this._value._minimum)} ${this.nativeUnits()})`)
    } else if (nativeValue > this._value._maximum) {
      return new ValidationResult(false, this.displayValue(nativeValue),
        `Greater than maximum value of ${this.maximumDisplayString()} ` +
        `(${this._formatValue(this._value._maximum)} ${this.nativeUnits()})`)
    }
    return new ValidationResult(true, nativeValue)
  }
}
