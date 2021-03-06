import { Ratio } from './index.js'

test('Default constructor', () => {
  const v = new Ratio('DeadFuelMoisture', 0.5)
  expect(v.maximumValue()).toEqual(0.5)
  expect(v.defaultValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(0)
  expect(v.stepValue()).toEqual(1)
})

test('isValidNativeValue()', () => {
  const v = new Ratio('SomeNumber')
  expect(v.isValidNativeValue({})).toEqual(false)
  expect(v.isValidNativeValue([])).toEqual(false)
  expect(v.isValidNativeValue('')).toEqual(false)
  expect(v.isValidNativeValue(false)).toEqual(false)
  expect(v.isValidNativeValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Ratio('DeadFuelMoisture', 0.5, 0.1, 0.01, 0.02)
    .setDisplayUnits('%')
    .setDisplayDecimals(2)
  expect(v.unitsOptions()).toEqual(['ratio', '%'])
  expect(v.key()).toEqual('DeadFuelMoisture')
  expect(v.label()).toEqual('Dead Fuel Moisture')
  expect(v.defaultValue()).toEqual(0.1)
  expect(v._value._default).toEqual(0.1)
  expect(v.displayValue(0.1)).toEqual('10.00')
  expect(v.displayString(0.1)).toEqual('10.00 %')
  expect(v.displayValue(v.defaultValue())).toEqual('10.00')
  expect(v.displayString(v.defaultValue())).toEqual('10.00 %')

  // Overridden by EVERY _Variant subclass
  v.setDisplayDecimals(0)
  expect(v.defaultDisplayValue()).toEqual('10')
  expect(v.defaultDisplayString()).toEqual('10 %')
  expect(v.displayValue(0.123456)).toEqual('12')
  expect(v.displayString(0.123456)).toEqual('12 %')
  expect(v.inputHint()).toEqual('1 - 50 %')
  // isValidDisplayValue() expects *display* text or number
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('12.3456')).toEqual(true)
  expect(v.isValidDisplayValue(12.3456)).toEqual(true)
  expect(v.isValidDisplayValue('60')).toEqual(false)
  expect(v.isValidDisplayValue('0')).toEqual(false)
  expect(v.isValidDisplayValue('0.1')).toEqual(false)
  expect(v.isValidDisplayValue('1')).toEqual(true)
  // isValidNativeValue() expects *native* value arg
  expect(v.isValidNativeValue(12.3456)).toEqual(false)
  expect(v.isValidNativeValue(0.123456)).toEqual(true)
  expect(v.minimumValue()).toEqual(0.01)
  expect(v.isValidNativeValue(0.001)).toEqual(false)
  expect(v.isValidNativeValue()).toEqual(false)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(0.5)
  expect(v.minimumValue()).toEqual(0.01)
  expect(v.stepValue()).toEqual(0.02)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('50')
  expect(v.minimumDisplayValue()).toEqual('1')
  expect(v.stepDisplayValue()).toEqual('2')
  expect(v.stepDisplayString()).toEqual('2 %')
  expect(v.setDisplayDecimals(2)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.maximumDisplayValue()).toEqual('50.00')
  expect(v.minimumDisplayValue()).toEqual('1.00')
  expect(v.stepDisplayValue()).toEqual('2.00')
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('%')
  expect(v.displayValueToNativeValue('12.3456789')).toEqual(0.123456789)
  expect(v.displayValueToNativeValue(12.3456789)).toEqual(0.123456789)
  expect(v.maximumDisplayString()).toEqual('50.00 %')
  expect(v.minimumDisplayString()).toEqual('1.00 %')
  expect(v.inputHint()).toEqual('1.00 - 50.00 %')
  expect(v.nativeUnits()).toEqual('ratio')
  expect(v.nativeValueToDisplayValue(0.34567)).toEqual(34.567)
  expect(v.setDisplayUnits('ratio')).toEqual(v)
  expect(v.inputHint()).toEqual('0.01 - 0.50 ratio')
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText('optionKey')).toEqual('')
  expect(v.optionTexts()).toEqual([])
  expect(v.prompt()).toEqual('0.01 - 0.50 ratio')
})
