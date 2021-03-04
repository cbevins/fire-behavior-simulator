import { Integer } from './index.js'

const signature = 'new Integer(key, defaultValue, minValue, maxValue, stepValue)'
test(signature + ' requires arg 1 key to be a non-empty string', () => {
  expect(()=>new Integer()).toThrow()
  expect(()=>new Integer(1)).toThrow()
  expect(()=>new Integer(null)).toThrow()
  expect(()=>new Integer({})).toThrow()
  expect(()=>new Integer(true)).toThrow()
  expect(()=>new Integer('')).toThrow()
})

test(signature + ' requires arg 2 defaultValue to be of type integer', () => {
  expect(()=>new Integer('FireSpreadRate', '1')).toThrow()
  expect(()=>new Integer('FireSpreadRate', true)).toThrow()
  expect(()=>new Integer('FireSpreadRate', {})).toThrow()
  expect(()=>new Integer('FireSpreadRate', 1.23)).toThrow()
})

test(signature + ' requires arg 3 minValue to be of type number', () => {
  expect(()=>new Integer('FireSpreadRate', 5, '0')).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, true)).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, {})).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 1.23)).toThrow()
})

test(signature + ' requires arg 4 maxValue to be of type number', () => {
  expect(()=>new Integer('FireSpreadRate', 5, 0, '100')).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, true)).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, {})).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, 1.23)).toThrow()
})

test(signature + ' requires arg 5 stepValue to be of type number', () => {
  expect(()=>new Integer('FireSpreadRate', 5, 0, 100, '1')).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, 100, true)).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, 100, {})).toThrow()
  expect(()=>new Integer('FireSpreadRate', 5, 0, 100, 1.23)).toThrow()
})

test(signature + ' sets and gets its default arguments', () => {
  const v = new Integer('FireSpreadRate')
  expect(v.defaultValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(1 - Number.MAX_VALUE)
  expect(v.maximumValue()).toEqual(Number.MAX_VALUE)
  expect(v.stepValue()).toEqual(1)
})

test(signature + ' requires minValue > maxValue and defaultValue to be in range', () => {
  expect(()=>new Integer('FireSpreadRate', 5, 100, 0, 5)).toThrow()
  expect(()=>new Integer('FireSpreadRate', 1234, 0, 100, 5)).toThrow()
  expect(()=>new Integer('FireSpreadRate', -1, 0, 100, 5)).toThrow()
})

test(signature + ' sets and gets passed arguments', () => {
  const v = new Integer('FireSpreadRate', 5, 1, 100, 5)
  expect(v.defaultValue()).toEqual(5)
  expect(v.minimumValue()).toEqual(1)
  expect(v.maximumValue()).toEqual(100)
  expect(v.stepValue()).toEqual(5)
})

test('Integer value accessors', () => {
  const v = new Integer('FireSpreadRate', 5, 1, 100, 5)
  expect(v.defaultValue()).toEqual(5)
  expect(v.displayValue(1.23)).toEqual('1')
  expect(v.inputHint()).toEqual('1 - 100')
})

test('Integer value validation', () => {
  const v = new Integer('FireSpreadRate', 5, 1, 100, 5)
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

  expect(v.isValidValue(0)).toEqual(false)
  expect(v.isValidValue(101)).toEqual(false)
  expect(v.isValidValue(50)).toEqual(true)
})

test('Integer text input validation - INVALID strings', () => {
  const v = new Integer('FireSpreadRate', 0, -100, 100, 5)
  const strings = [
    '',
    'abcdef',
    '{foo: bar}',
    'e',
    '-e',
    {},
    true]
    let result
  strings.forEach(str => {
    // console.log(str)
    result = v.validateDisplayValue(str)
    expect(result.valid).toEqual(false)
    expect(result.value).toEqual('')
    expect(result.message).toEqual('Not a valid number')
    expect(v.isValidInput(str)).toEqual(false)
  })
  let str = '1,234,567'
  result = v.validateDisplayValue(str)
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(1234567)
  expect(result.message).toEqual('Greater than maximum value of 100')
  expect(v.isValidInput(str)).toEqual(false)

  str = '-1,234,567'
  result = v.validateDisplayValue(str)
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(-1234567)
  expect(result.message).toEqual('Less than minimum value of -100')
  expect(v.isValidInput(str)).toEqual(false)
})

test('Integer text input validation -- VALID strings', () => {
  const v = new Integer('FireSpreadRate', 0, -10000, 10000, 5)
  const strings = [
    ['1', 1],
    ['1.', 1],
    ['1.0', 1],
    ['1.23', 1],
    ['1e2', 12],
    ['1e-2', 12],
    ['1,234', 1234],
    ['-1,234', -1234],
    ['-1', -1],
    ['-1e2', -12],
    ['-1e-2', -12],
    ['abc1def', 1],
    ['abc1def2ghi-jkl', 12],
    ['abc1def-ghi2jkl', 12],
    ['{a: 1, b: 2}', 12],
    ['{mantissa: 1, exponent: -2}', 12],
    ['e-2', -2]
  ]
  let result
  strings.forEach(str => {
    // console.log(str[0])
    result = v.validateDisplayValue(str[0])
    expect(result.valid).toEqual(true)
    expect(result.value).toEqual(str[1])
    expect(result.message).toEqual('')
    expect(v.isValidInput(str[0])).toEqual(true)
  })
})

test('isValidValue()', () => {
  const v = new Integer('SomeNumber', 50, 0, 100)
  expect(v.isValidValue({})).toEqual(false)
  expect(v.isValidValue([])).toEqual(false)
  expect(v.isValidValue('')).toEqual(false)
  expect(v.isValidValue(false)).toEqual(false)
  expect(v.isValidValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Integer('SomeNumber', 1234, -1234, 5678, 5)
  expect(v.key()).toEqual('SomeNumber')
  expect(v.label()).toEqual('Some Number')
  expect(v.defaultValue()).toEqual(1234)
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayString()).toEqual('1234')
  expect(v.defaultDisplayValue()).toEqual('1234')
  expect(v.displayString(123.456)).toEqual('123')
  expect(v.displayValue(123.456)).toEqual('123')
  expect(v.inputHint()).toEqual('-1234 - 5678')
  expect(v.isValidInput('anythingAtAll')).toEqual(false)
  expect(v.isValidInput(true)).toEqual(false)
  expect(v.isValidInput('1.23')).toEqual(true)
  expect(v.isValidValue(1.23)).toEqual(true)
  expect(v.isValidValue(-9999)).toEqual(false)
  expect(v.isValidValue(9999)).toEqual(false)
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
