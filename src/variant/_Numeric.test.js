import { _Numeric } from './index.js'

const signature = 'new _Numeric(key, defaultValue, minValue, maxValue, stepValue)'
test(signature + ' requires arg 1 key to be a non-empty string', () => {
  expect(() => new _Numeric()).toThrow()
  expect(() => new _Numeric(1)).toThrow()
  expect(() => new _Numeric(null)).toThrow()
  expect(() => new _Numeric({})).toThrow()
  expect(() => new _Numeric(true)).toThrow()
  expect(() => new _Numeric('')).toThrow()
})

test(signature + ' requires arg 2 defaultValue to be of type number', () => {
  expect(() => new _Numeric('FireSpreadRate', '1')).toThrow()
  expect(() => new _Numeric('FireSpreadRate', true)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', {})).toThrow()
})

test(signature + ' requires arg 3 minValue to be of type number', () => {
  expect(() => new _Numeric('FireSpreadRate', 5, '0')).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, true)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, {})).toThrow()
})

test(signature + ' requires arg 4 maxValue to be of type number', () => {
  expect(() => new _Numeric('FireSpreadRate', 5, 0, '100')).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, 0, true)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, 0, {})).toThrow()
})

test(signature + ' requires arg 5 stepValue to be of type number', () => {
  expect(() => new _Numeric('FireSpreadRate', 5, 0, 100, '1')).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, 0, 100, true)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 5, 0, 100, {})).toThrow()
})

test(signature + ' sets and gets its default arguments', () => {
  const v = new _Numeric('FireSpreadRate')
  expect(v.defaultValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(1 - Number.MAX_VALUE)
  expect(v.maximumValue()).toEqual(Number.MAX_VALUE)
  expect(v.stepValue()).toEqual(1)
})

test(signature + ' requires minValue > maxValue and defaultValue to be in range', () => {
  expect(() => new _Numeric('FireSpreadRate', 5, 100, 0, 5)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', 1234, 0, 100, 5)).toThrow()
  expect(() => new _Numeric('FireSpreadRate', -1, 0, 100, 5)).toThrow()
})

test(signature + ' sets and gets passed arguments', () => {
  const v = new _Numeric('FireSpreadRate', 5, 1, 100, 5)
  expect(v.defaultValue()).toEqual(5)
  expect(v.minimumValue()).toEqual(1)
  expect(v.maximumValue()).toEqual(100)
  expect(v.stepValue()).toEqual(5)
})

test('_Numeric value accessors', () => {
  const v = new _Numeric('FireSpreadRate', 5, 1, 100, 5)
  expect(v.defaultValue()).toEqual(5)
  expect(v.displayValue(1.23)).toEqual('1.23')
  expect(v.displayString(1.23)).toEqual('1.23')
  expect(v.inputHint()).toEqual('1 - 100')
})

test('_Numeric value validation', () => {
  const v = new _Numeric('FireSpreadRate', 5, 1, 100, 5)
  let result = v.validateNativeValue(0)
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(0)
  expect(result.message).toEqual('Less than minimum value of 1')

  result = v.validateNativeValue(101)
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(101)
  expect(result.message).toEqual('Greater than maximum value of 100')

  result = v.validateNativeValue(50)
  expect(result.valid).toEqual(true)
  expect(result.value).toEqual(50)
  expect(result.message).toEqual('')

  expect(v.isValidNativeValue(0)).toEqual(false)
  expect(v.isValidNativeValue(101)).toEqual(false)
  expect(v.isValidNativeValue(50)).toEqual(true)
  expect(v.isValidNativeValue({})).toEqual(false)
})

test('_Numeric text input validation - INVALID strings', () => {
  const v = new _Numeric('FireSpreadRate', 0, 0, 100, 5)
  const strings = [
    '',
    'abcdef',
    '{foo: bar}',
    'e',
    'e-2',
    '-e',
    {},
    true]
  strings.forEach(str => {
    const result = v.validateDisplayValue(str)
    expect(result.valid).toEqual(false)
    expect(result.value).toEqual('')
    expect(result.message).toEqual('Not a valid number')
    expect(v.isValidDisplayValue(str[0])).toEqual(false)
  })
})

test('_Numeric text input validation -- VALID strings', () => {
  const v = new _Numeric('FireSpreadRate', 0, -10000, 10000, 5)
  const strings = [
    ['1', 1],
    ['1.', 1],
    ['1.0', 1],
    ['1.23', 1.23],
    ['1e2', 100],
    ['1e-2', 0.01],
    ['-1', -1],
    ['-1e2', -100],
    ['-1e-2', -0.01],
    ['1,234.56789', 1234.56789],
    ['-1,234.56789', -1234.56789],
    ['abc1def', 1],
    ['abc1def2ghi-jkl', 100],
    ['abc1def-ghi2jkl', 0.01],
    ['{a: 1, b: 2}', 12],
    ['{mantissa: 1, exponent: -2}', 0.01]
  ]
  strings.forEach(str => {
    const result = v.validateDisplayValue(str[0])
    expect(result.valid).toEqual(true)
    expect(result.value).toEqual(str[1])
    expect(result.message).toEqual('')
    expect(v.isValidDisplayValue(str[0])).toEqual(true)
  })
})

test('isValidNativeValue()', () => {
  const v = new _Numeric('SomeNumber', 1234.56, -1234, 5678, 5)
  expect(v.isValidNativeValue({})).toEqual(false)
  expect(v.isValidNativeValue([])).toEqual(false)
  expect(v.isValidNativeValue('')).toEqual(false)
  expect(v.isValidNativeValue(false)).toEqual(false)
  expect(v.isValidNativeValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new _Numeric('SomeNumber', 1234.56, -1234, 5678, 5)
  expect(v.key()).toEqual('SomeNumber')
  expect(v.label()).toEqual('Some Number')
  expect(v.defaultValue()).toEqual(1234.56)
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayString()).toEqual('1234.56')
  expect(v.defaultDisplayValue()).toEqual('1234.56')
  expect(v.displayString(123.456)).toEqual('123.456')
  expect(v.displayValue(123.456)).toEqual('123.456')
  expect(v.inputHint()).toEqual('-1234 - 5678')
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('1.23')).toEqual(true)
  expect(v.isValidNativeValue(1.23)).toEqual(true)
  expect(v.isValidNativeValue(-9999)).toEqual(false)
  expect(v.isValidNativeValue(9999)).toEqual(false)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(5678)
  expect(v.minimumValue()).toEqual(-1234)
  expect(v.stepValue()).toEqual(5)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('5678')
  expect(v.minimumDisplayValue()).toEqual('-1234')
  expect(v.stepDisplayValue()).toEqual('5')
  expect(v.setDisplayDecimals(9876)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('')
  expect(v.displayValueToNativeValue(1)).toEqual(1)
  expect(v.maximumDisplayString()).toEqual('5678')
  expect(v.minimumDisplayString()).toEqual('-1234')
  expect(v.nativeUnits()).toEqual('')
  expect(v.nativeValueToDisplayValue(1)).toEqual(1)
  expect(v.setDisplayUnits()).toEqual(v)
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText('optionKey')).toEqual('')
  expect(v.optionTexts()).toEqual([])
  expect(v.prompt()).toEqual('-1234 - 5678')
})
