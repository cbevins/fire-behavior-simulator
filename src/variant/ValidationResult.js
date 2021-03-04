/**
 * @file ValidationResult returned by validateNativeValue()
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
export class ValidationResult {
  constructor(valid, value, message='') {
    return {valid: valid, value: value, message: message}
  }
}
