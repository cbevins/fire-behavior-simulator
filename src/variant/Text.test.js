import { Text } from './index.js'

test('new Text() construtor validation', () => {
  expect(() => new Text()).toThrow()
  expect(() => new Text('FuelModelKey')).not.toThrow()
  expect(() => new Text('', 'defaultString')).toThrow()
  expect(() => new Text('FuelModelKey', 1)).toThrow()
  expect(() => new Text('FuelModelKey', true)).toThrow()
  expect(() => new Text('FuelModelKey', {})).toThrow()
  // arg 3 minLength must be a number
  expect(() => new Text('FuelModelKey', 'a', {}, 10)).toThrow()
  expect(() => new Text('FuelModelKey', 'a', '', 10)).toThrow()
  expect(() => new Text('FuelModelKey', 'a', true, 10)).toThrow()
  // arg 4 maxLength must be a number
  expect(() => new Text('FuelModelKey', 'a', 4, {})).toThrow()
  expect(() => new Text('FuelModelKey', 'a', 4, '')).toThrow()
  expect(() => new Text('FuelModelKey', 'a', 4, false)).toThrow()
  expect(() => new Text('FuelModelKey', 'a', 4, {})).toThrow()
  // arg 3 minLength must be <= arg 4 maxLength
  expect(() => new Text('FuelModelKey', 'a', 10, 1)).toThrow()
  // arg 2 defaultValue must be within arg 3 minLength and arg 4 maxLength
  expect(() => new Text('FuelModelKey', 'a', 4, 10)).toThrow()
  expect(() => new Text('FuelModelKey', 'abcdefghijklmnop', 4, 10)).toThrow()
})

test('new Text() default construtor', () => {
  const v = new Text('FuelModelKey')
  expect(v.key()).toEqual('FuelModelKey')
  expect(v.label()).toEqual('Fuel Model Key')
  expect(v.defaultValue()).toEqual('')
  expect(v.defaultDisplayValue()).toEqual('')
  expect(v.defaultDisplayString()).toEqual('')
  expect(v.displayValue('x')).toEqual('x')
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(999999)
  expect(v.inputHint()).toEqual('0 - 999999 chars')
})

test('new Text() custom construtor', () => {
  const v = new Text('FuelModelKey', 'gs1', 1, 16, 'Enter valid fuel model key')
  expect(v.key()).toEqual('FuelModelKey')
  expect(v.label()).toEqual('Fuel Model Key')
  expect(v.defaultValue()).toEqual('gs1')
  expect(v.defaultDisplayValue()).toEqual('gs1')
  expect(v.defaultDisplayString()).toEqual('gs1')
  expect(v.displayValue('tu5')).toEqual('tu5')
  expect(v.minimumValue()).toEqual(1)
  expect(v.maximumValue()).toEqual(16)
  expect(v.inputHint()).toEqual('1 - 16 chars')
})

test('Text validation', () => {
  const v = new Text('FuelModelKey', 'gs1', 1, 16, 'Enter valid fuel model key')
  expect(v.isValidDisplayValue(12345678)).toEqual(false)
  expect(v.validateDisplayValue('12345678').message).toEqual('')
  expect(v.isValidDisplayValue('12345678')).toEqual(true)
  expect(v.isValidDisplayValue('')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue({})).toEqual(false)
  expect(v.isValidDisplayValue('1234567890abvdefghijklm')).toEqual(false)

  expect(v.isValidNativeValue(12345678)).toEqual(false)
  expect(v.validateNativeValue('12345678').message).toEqual('')
  expect(v.isValidNativeValue('12345678')).toEqual(true)
  expect(v.isValidNativeValue('')).toEqual(false)
  expect(v.isValidNativeValue(true)).toEqual(false)
  expect(v.isValidNativeValue({})).toEqual(false)
  expect(v.isValidNativeValue('1234567890abvdefghijklm')).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Text('FuelModelKey', 'gs1', 1, 16, 'Enter valid fuel model key')
  expect(v.key()).toEqual('FuelModelKey')
  expect(v.label()).toEqual('Fuel Model Key')
  expect(v.defaultValue()).toEqual('gs1')
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayString()).toEqual('gs1')
  expect(v.defaultDisplayValue()).toEqual('gs1')
  expect(v.displayString(123.456)).toEqual('123.456')
  expect(v.displayValue(123.456)).toEqual('123.456')
  expect(v.inputHint()).toEqual('1 - 16 chars')
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(true)
  expect(v.isValidDisplayValue({})).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('1.23')).toEqual(true)
  expect(v.isValidNativeValue(1.23)).toEqual(false)
  expect(v.isValidNativeValue(-9999)).toEqual(false)
  expect(v.isValidNativeValue(9999)).toEqual(false)
  expect(v.isValidNativeValue('bjr')).toEqual(true)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(16)
  expect(v.minimumValue()).toEqual(1)
  expect(v.stepValue()).toEqual(1)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('16')
  expect(v.minimumDisplayValue()).toEqual('1')
  expect(v.stepDisplayValue()).toEqual('1')
  expect(v.setDisplayDecimals(9876)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('')
  expect(v.displayValueToNativeValue(1)).toEqual(1)
  expect(v.maximumDisplayString()).toEqual('16')
  expect(v.minimumDisplayString()).toEqual('1')
  expect(v.nativeUnits()).toEqual('')
  expect(v.nativeValueToDisplayValue(1)).toEqual(1)
  expect(v.setDisplayUnits()).toEqual(v)
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText('cdb')).toEqual('')
  expect(v.optionTexts()).toEqual([])
})
