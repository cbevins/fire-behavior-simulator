/**
 * @file Float Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Numeric } from './_Numeric.js'

/**
 * Float adds the notion of a 'displayValue' to floating point numbers, including
 * - display mode; 'toFixed(), toExponential(), or toPrecision()
 * - display decimal places
 *
 * New Methods:
 * - _setDisplayMode(mode, decimals) {
 * - _formatValue(value)
 * - displayString(nativeValue)
 * - displayValue(nativeValue)
 * - setDisplayDecimals(decimals)
 * - setDisplayToExponential(decimals=null)
 * - setDisplayToFixed(decimals=null)
 * - setDisplayToPrecision(decimals=null)
 * - maximumDisplayValue()
 * - minimumDisplayValue()
 * - stepDisplayValue()
 *
 * Overrides methods:
 * - inputHint()
 */
export class Float extends _Numeric {
  constructor(key, defaultValue=0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue=1) {
    super(key, defaultValue, minValue, maxValue, stepValue)
    this._display = {
      _mode: 'fixed',
      _decimals: 2
    }
  }

  _formatValue(value) {
    let str
    if (this._display._mode === 'precision' ) {
      str = value.toPrecision(Math.max(1, this._display._decimals))
    } else if (this._display._mode === 'exponential' ) {
      str = value.toExponential(this._display._decimals)
    } else {
      str = value.toFixed(this._display._decimals)
    }
    // Decorate with commas, prefix, suffix...
    return str
  }

  _setDisplayMode(mode, decimals) {
    this._display._mode = mode
    if (typeof decimals === 'number') {
      this._display._decimals = Math.max(Math.min(decimals, 16), 0)
    }
    return this
  }

  defaultDisplayValue() { return this._formatValue(this._value._default) }

  displayString(nativeValue) { return this.displayValue(nativeValue) }

  displayValue(nativeValue) { return this._formatValue(nativeValue) }

  displayValueToNativeValue(displayValue) { return parseFloat(displayValue) }

  nativeValueToDisplayValue(nativeValue) { return this.displayValue(nativeValue) }

  // Overrides Numeric.inputHint() to perform floating point formatting
  inputHint() { return `${this.minimumDisplayValue()} - ${this.maximumDisplayValue()}` }

  maximumDisplayValue() { return this._formatValue(this._value._maximum) }

  minimumDisplayValue() { return this._formatValue(this._value._minimum) }

  stepDisplayValue() { return this._formatValue(this._value._step) }

  setDisplayDecimals(decimals) { return this._setDisplayMode(this._display._mode, decimals) }

  setDisplayToExponential(decimals=null) { return this._setDisplayMode('exponential', decimals) }

  setDisplayToFixed(decimals=null) { return this._setDisplayMode('fixed', decimals) }

  setDisplayToPrecision(decimals=null) { return this._setDisplayMode('precision', decimals) }
}