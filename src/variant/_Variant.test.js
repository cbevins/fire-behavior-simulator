import { _Variant } from './index.js'

test('new _Variant(key, defaultValue) requires a non-empty string key as arg 1', () => {
  expect(()=>new _Variant()).toThrow()
  expect(()=>new _Variant(1)).toThrow()
  expect(()=>new _Variant(null)).toThrow()
  expect(()=>new _Variant({})).toThrow()
  expect(()=>new _Variant(true)).toThrow()
  expect(()=>new _Variant('')).toThrow()
})

test('new _Variant(key, defaultValue) requires a defaultValue of type any as arg 2', () => {
  expect(()=>new _Variant('someKey')).toThrow()
  expect(()=>new _Variant('someKey', undefined)).toThrow()
})

test('new _Variant(key, defaultValue) sets and gets its key and defaultValue args', () => {
  const v = new _Variant('someKey', 'someDefaultValue')
  expect(v.key()).toEqual('someKey')
  expect(v.label()).toEqual('Some Key')
  expect(v.defaultValue()).toEqual('someDefaultValue')
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new _Variant('someKey', 'someDefaultValue')
  expect(v.key()).toEqual('someKey')
  expect(v.defaultValue()).toEqual('someDefaultValue')
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayString()).toEqual('someDefaultValue')
  expect(v.defaultDisplayValue()).toEqual('someDefaultValue')
  expect(v.displayString(123)).toEqual('123')
  expect(v.displayValue(123)).toEqual('123')
  expect(v.inputHint()).toEqual('')
  expect(v.isValidInput('anythingAtAll')).toEqual(false)
  expect(v.isValidValue(1.23)).toEqual(false)
  expect(v.validateDisplayValue('anythingAtAll'))
    .toEqual({valid:false, value: 'anythingAtAll', message: 'Must be reimplemented by _Variant subclass'})
  expect(v.validateNativeValue('anythingAtAll'))
    .toEqual({valid:false, value: 'anythingAtAll', message: 'Must be reimplemented by _Variant subclass'})
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual('someDefaultValue')
  expect(v.minimumValue()).toEqual('someDefaultValue')
  expect(v.stepValue()).toEqual('someDefaultValue')
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('someDefaultValue')
  expect(v.minimumDisplayValue()).toEqual('someDefaultValue')
  expect(v.stepDisplayValue()).toEqual('someDefaultValue')
  expect(v.setDisplayDecimals()).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('')
  expect(v.displayValueToNativeValue(1)).toEqual(1)
  expect(v.maximumDisplayString()).toEqual('someDefaultValue')
  expect(v.minimumDisplayString()).toEqual('someDefaultValue')
  expect(v.stepDisplayString()).toEqual('someDefaultValue')
  expect(v.nativeUnits()).toEqual('')
  expect(v.nativeValueToDisplayValue(1)).toEqual(1)
  expect(v.setDisplayUnits()).toEqual(v)
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText('optionKey')).toEqual('')
  expect(v.optionTexts()).toEqual([])
  expect(v.prompt()).toEqual('')
})
