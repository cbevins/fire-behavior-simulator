/**
 * @file Text Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { _Variant } from './_Variant.js'
import { ValidationResult } from './ValidationResult.js'

/**
 * Text is a Variant whose value is a Javascript string primitive.
 */
export class Text extends _Variant {
  constructor (key, defaultValue = '', minLength = 0, maxLength = 999999) {
    const signature = `new Text('${key}', '${defaultValue}', ${minLength}, ${maxLength}) `
    if (typeof defaultValue !== 'string') {
      throw new Error(signature + `arg 2 'defaultValue' must be a 'string'` )
    } else if (typeof minLength !== 'number') {
      throw new Error(signature + `arg 3 'minLength' must be a 'number', but received a ${typeof minLength}`)
    } else if (typeof maxLength !== 'number') {
      throw new Error(signature + `arg 4 'maxLength' must be a 'number', but received a ${typeof maxLength}`)
    } else if (minLength > maxLength) {
      throw new Error(signature + `arg 3 'minLength' exceeds arg 4 'maxLength'`)
    } else if (defaultValue.length < minLength) {
      throw new Error(signature + `arg 2 'defaultValue' length is less than arg 3 'minLength'`)
    } else if (defaultValue.length > maxLength) {
      throw new Error(signature + `arg 2 defaultValue length exceeds arg 4 'maxLength'`)
    }
    super(key, defaultValue)
    this._value._minimumLength = minLength
    this._value._maximumLength = maxLength
  }

  inputHint() { return `${this.minimumValue()} - ${this.maximumValue()} chars` }

  isValidDisplayValue(inputText) { return this.validateDisplayValue(inputText).valid }
  isValidNativeValue(value) {
    if (typeof value !== 'string') return false
    return this.validateNativeValue(value).valid
  }

  maximumValue() { return this._value._maximumLength }
  minimumValue() { return this._value._minimumLength }
  stepValue() { return 1 }

  validateDisplayValue(inputText) { return this.validateNativeValue(inputText) }

  validateNativeValue(text) {
    if (typeof text !== 'string') {
      return new ValidationResult(false, text, 'Must be a string')
    } else if (text.length < this.minimumValue()) {
      return new ValidationResult(false, text, `Must have ${this.minimumValue()} or more chars`)
    } else if (text.length > this.maximumValue()) {
      return new ValidationResult(false, text, `Must have ${this.maximumValue()} or less chars`)
    }
    return new ValidationResult(true, text)
  }
}
