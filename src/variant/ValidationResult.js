export class ValidationResult {
  constructor(valid, value, message='') {
    return {valid: valid, value: value, message: message}
  }
}
