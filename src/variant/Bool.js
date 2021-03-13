/**
 * @file Bool Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Variant } from './_Variant.js'
import { ValidationResult } from './ValidationResult.js'

/**
 * Bool is a Variant whose value is a Javascript boolean primitive
 */
export class Bool extends _Variant {
  /**
   * @param {bool} defaultValue
   * @param {string} falseText
   * @param {string} trueText
   * @param {string} prompt Input prompt text
   */
  constructor (key, defaultValue = false, falseText = 'false', trueText = 'true', prompt = '') {
    const signature = `new Bool('${key}', '${defaultValue}', '${falseText}', '${trueText}', '${prompt}') `
    if (typeof defaultValue !== 'boolean') {
      throw new Error(signature + 'arg 2 \'defaultValue\' must be a boolean')
    } else if (typeof falseText !== 'string') {
      throw new Error(signature + 'arg 3 \'falseText\' must be a string')
    } else if (typeof trueText !== 'string') {
      throw new Error(signature + 'arg 4 \'trueText\' must be a string')
    }
    super(key, defaultValue)
    this._value._false = falseText
    this._value._true = trueText
    this._value._prompt = prompt
  }

  defaultDisplayString () { return this.displayString(this.defaultValue()) }
  defaultDisplayValue () { return this.displayValue(this.defaultValue()) }

  displayString (bool) { return this.displayValue(bool) }
  displayValue (bool) { return bool ? this._value._true : this._value._false }

  hasOption (inputText) {
    return (inputText === this._value._false || inputText === this._value._true)
  }

  inputHint () { return `'${this._value._false}' or '${this._value._true}'` }

  isValidDisplayValue (inputText) { return this.validateDisplayValue(inputText).valid }

  isValidNativeValue (value) {
    // For now, allow truthy and falsey
    // if (typeof value !== 'boolean') return false
    return this.validateNativeValue(value).valid
  }

  maximumValue () { return true }
  maximumDisplayValue () { return this._value._true }
  minimumValue () { return false }
  minimumDisplayValue () { return this._value._false }
  stepValue () { return 1 }
  stepDisplayValue () { return '' }

  options () { return [false, true] }

  optionText (bool) { return bool ? this._value._true : this._value._false }

  optionTexts () { return [this._value._false, this._value._true] }

  prompt () { return this._value._prompt }

  validateDisplayValue (inputText) {
    if (!this.hasOption(inputText)) {
      return new ValidationResult(false, inputText, 'Invalid option')
    }
    const bool = (inputText === this._value._true)
    return this.validateNativeValue(bool)
  }

  validateNativeValue (bool) {
    const b = !!bool
    return new ValidationResult(true, b)
  }
}
