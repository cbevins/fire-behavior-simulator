/**
 * @file Option Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Variant } from './_Variant.js'
import { ValidationResult } from './ValidationResult.js'

/**
 * Option is a Variant whose value is a Javascript string primitive
 * that is a member of a predefined set of strings.
 */
export class Option extends _Variant {
  /**
   * @param {string} prompt Input prompt text
   * @param {array} optionsArray A simple array, or an array of value-display pairs
   * @param {number} defaultOptionIndex Index of the default option (0 if omitted)
   */
  constructor (key, prompt, optionsArray, defaultOptionIndex = 0) {
    const signature = `new Option(${key}, ${prompt}, ${optionsArray}, ${defaultOptionIndex}) `
    if (typeof prompt !== 'string') {
      throw new Error(signature + 'arg 2 \'prompt\' must be a string')
    } else if (!(optionsArray instanceof Array)) {
      throw new Error(signature + 'arg 2 \'optionasArray\' must be an Array')
    } else if (defaultOptionIndex < 0 || defaultOptionIndex >= optionsArray.length) {
      throw new Error(signature + `arg 3 defaultOptionIndex must be 0 - ${optionsArray.length}`)
    }
    const dflt = optionsArray[defaultOptionIndex]
    super(key, Array.isArray(dflt) ? dflt[0] : dflt)
    const map = new Map()
    optionsArray.forEach(opt => {
      if (Array.isArray(opt)) { map.set(opt[0], opt[1]) } else { map.set(opt, opt) }
    })
    this._value._options = map
    this._value._prompt = prompt
  }

  _ensureOption (optionKey) {
    if (!this.hasOption(optionKey)) {
      throw new Error(`Option '${this.key()}' has no option '${optionKey}'`)
    }
    return this
  }

  defaultDisplayString () { return this.displayString(this.defaultValue()) }
  defaultDisplayValue () { return this.displayValue(this.defaultValue()) }

  displayString (optionKey) { return this.displayValue(optionKey) }
  displayValue (optionKey) {
    this._ensureOption(optionKey)
    return this.optionText(optionKey)
  }

  hasOption (optionKey) { return this._value._options.has(optionKey) }

  inputHint () { return this._value._prompt }

  isValidDisplayValue (inputText) { return this.validateDisplayValue(inputText).valid }

  isValidNativeValue (value) { return this.validateNativeValue(value).valid }

  maximumValue () { return 0 }
  maximumDisplayValue () { return '' }
  minimumValue () { return 0 }
  minimumDisplayValue () { return '' }
  stepValue () { return 1 }
  stepDisplayValue () { return '' }

  options () { return Array.from(this._value._options.keys()) }

  optionText (optionKey) { return this._value._options.get(optionKey) }

  optionTexts () { return Array.from(this._value._options.values()) }

  prompt () { return this._value._prompt }

  validateDisplayValue (optionKey) { return this.validateNativeValue(optionKey) }

  validateNativeValue (optionKey) {
    if (!this.hasOption(optionKey)) {
      return new ValidationResult(false, optionKey, 'Invalid option')
    }
    return new ValidationResult(true, optionKey)
  }
}
