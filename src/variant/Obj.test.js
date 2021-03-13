import { Obj } from './index.js'

test('new Obj() constructor args', () => {
  expect(() => new Obj()).toThrow()
  // arg 2 defaultValue must be an Object
  expect(() => new Obj('Firebrand')).not.toThrow()
  expect(() => new Obj('Firebrand', [])).not.toThrow() // Array is an Object
  expect(() => new Obj('Firebrand', { ht: 0, dist: 0 })).not.toThrow()
  expect(() => new Obj('Firebrand', '')).toThrow()
  expect(() => new Obj('Firebrand', true)).toThrow()
  expect(() => new Obj('Firebrand', '1')).toThrow()
})

test('new Obj() default constructor', () => {
  const v = new Obj('Firebrand')
  expect(v.key()).toEqual('Firebrand')
  expect(v.label()).toEqual('Firebrand')
  expect(v.inputHint()).toEqual('')
  expect(v.defaultValue()).toEqual({})
  expect(v.defaultDisplayValue()).toEqual('{}')
  expect(v.defaultDisplayString()).toEqual('{}')
})

test('new Obj() custom constructor', () => {
  const v = new Obj('Firebrand', { ht: 0, dist: 0 })
  expect(v.key()).toEqual('Firebrand')
  expect(v.label()).toEqual('Firebrand')
  expect(v.inputHint()).toEqual('')
  expect(v.defaultValue()).toEqual({ ht: 0, dist: 0 })
  expect(v.defaultDisplayValue()).toEqual('{"ht":0,"dist":0}')
  expect(v.defaultDisplayString()).toEqual('{"ht":0,"dist":0}')
  expect(v.displayValue({ foo: 'foo', bar: 'bar' })).toEqual('{"foo":"foo","bar":"bar"}')
  expect(v.displayString({ foo: 'foo', bar: 'bar' })).toEqual('{"foo":"foo","bar":"bar"}')
})

test('isValidNativeValue()', () => {
  const v = new Obj('Firebrand', { ht: 0, dist: 0 })
  expect(v.isValidNativeValue({})).toEqual(true)
  expect(v.isValidNativeValue([])).toEqual(true) // Array is an Object
  expect(v.isValidNativeValue(1)).toEqual(false)
  expect(v.isValidNativeValue('')).toEqual(false)
  expect(v.isValidNativeValue(false)).toEqual(false)
  expect(v.isValidNativeValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Obj('Firebrand', { ht: 0, dist: 0 })
  expect(v.key()).toEqual('Firebrand')
  expect(v.label()).toEqual('Firebrand')
  expect(v.defaultValue()).toEqual({ ht: 0, dist: 0 })
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayValue()).toEqual('{"ht":0,"dist":0}')
  expect(v.defaultDisplayString()).toEqual('{"ht":0,"dist":0}')
  expect(v.displayValue({ foo: 'foo', bar: 'bar' })).toEqual('{"foo":"foo","bar":"bar"}')
  expect(v.displayString({ foo: 'foo', bar: 'bar' })).toEqual('{"foo":"foo","bar":"bar"}')

  expect(v.inputHint()).toEqual('')
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('Applied')).toEqual(false)
  expect(v.isValidDisplayValue(false)).toEqual(false)
  expect(v.isValidDisplayValue('Not Applied')).toEqual(false)
  expect(v.isValidDisplayValue('1.23')).toEqual(false)

  expect(v.isValidNativeValue(1.23)).toEqual(false)
  expect(v.isValidNativeValue(-9999)).toEqual(false)
  expect(v.isValidNativeValue(9999)).toEqual(false)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual({ ht: 0, dist: 0 })
  expect(v.minimumValue()).toEqual({ ht: 0, dist: 0 })
  expect(v.stepValue()).toBeNull()
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('{"ht":0,"dist":0}')
  expect(v.minimumDisplayValue()).toEqual('{"ht":0,"dist":0}')
  expect(v.stepDisplayValue()).toEqual('')
  expect(v.stepValue()).toBeNull()
  expect(v.setDisplayDecimals(9876)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('')
  expect(v.displayValueToNativeValue(1)).toEqual(1)
  expect(v.maximumDisplayString()).toEqual('{"ht":0,"dist":0}')
  expect(v.minimumDisplayString()).toEqual('{"ht":0,"dist":0}')
  expect(v.nativeUnits()).toEqual('')
  expect(v.nativeValueToDisplayValue(1)).toEqual(1)
  expect(v.setDisplayUnits()).toEqual(v)
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText(false)).toEqual('')
  expect(v.optionText(true)).toEqual('')
  expect(v.optionTexts()).toEqual([])
})
