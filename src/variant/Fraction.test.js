import { Fraction } from './index.js'

test('Default constructor', () => {
  const v = new Fraction('CanopyCover')
  expect(v.maximumValue()).toEqual(1)
  expect(v.defaultValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(0)
  expect(v.stepValue()).toEqual(0.01)
})

test('isValidNativeValue()', () => {
  const v = new Fraction('SomeNumber')
  expect(v.isValidNativeValue({})).toEqual(false)
  expect(v.isValidNativeValue([])).toEqual(false)
  expect(v.isValidNativeValue('')).toEqual(false)
  expect(v.isValidNativeValue(false)).toEqual(false)
  expect(v.isValidNativeValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Fraction('CanopyCover', 0.5, 0.05)
    .setDisplayUnits('%')
    .setDisplayDecimals(2)
  expect(v.unitsOptions()).toEqual(['ratio', '%'])
  expect(v.key()).toEqual('CanopyCover')
  expect(v.label()).toEqual('Canopy Cover')
  expect(v.defaultValue()).toEqual(0.5)
  expect(v.displayValue(0.1)).toEqual('10.00')
  expect(v.displayString(0.1)).toEqual('10.00 %')
  expect(v.displayValue(v.defaultValue())).toEqual('50.00')
  expect(v.displayString(v.defaultValue())).toEqual('50.00 %')

  // Overridden by EVERY _Variant subclass
  v.setDisplayDecimals(0)
  expect(v.defaultDisplayValue()).toEqual('50')
  expect(v.defaultDisplayString()).toEqual('50 %')
  expect(v.displayValue(0.123456)).toEqual('12')
  expect(v.displayString(0.123456)).toEqual('12 %')
  expect(v.inputHint()).toEqual('0 - 100 %')
  // isValidDisplayValue() expects *display* text or number
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('12.3456')).toEqual(true)
  expect(v.isValidDisplayValue(12.3456)).toEqual(true)
  expect(v.isValidDisplayValue('160')).toEqual(false)
  expect(v.isValidDisplayValue('1')).toEqual(true)
  expect(v.validateDisplayValue('1').value).toEqual(0.01)
  expect(v.validateDisplayValue('-10').value).toEqual(0.1)
  expect(v.isValidDisplayValue('-10')).toEqual(true)
  // isValidNativeValue() expects *native* value arg
  expect(v.isValidNativeValue(12.3456)).toEqual(false)
  expect(v.isValidNativeValue(0.123456)).toEqual(true)
  expect(v.minimumValue()).toEqual(0.0)
  expect(v.isValidNativeValue(0.001)).toEqual(true)
  expect(v.isValidNativeValue()).toEqual(false)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(1)
  expect(v.minimumValue()).toEqual(0)
  expect(v.stepValue()).toEqual(0.05)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('100')
  expect(v.minimumDisplayValue()).toEqual('0')
  expect(v.stepDisplayValue()).toEqual('5')
  expect(v.stepDisplayString()).toEqual('5 %')
  expect(v.setDisplayDecimals(2)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.maximumDisplayValue()).toEqual('100.00')
  expect(v.minimumDisplayValue()).toEqual('0.00')
  expect(v.stepDisplayValue()).toEqual('5.00')
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('%')
  expect(v.displayValueToNativeValue('12.3456789')).toEqual(0.123456789)
  expect(v.displayValueToNativeValue(12.3456789)).toEqual(0.123456789)
  expect(v.maximumDisplayString()).toEqual('100.00 %')
  expect(v.minimumDisplayString()).toEqual('0.00 %')
  expect(v.inputHint()).toEqual('0.00 - 100.00 %')
  expect(v.nativeUnits()).toEqual('ratio')
  expect(v.nativeValueToDisplayValue(0.34567)).toEqual(34.567)
  expect(v.setDisplayUnits('ratio')).toEqual(v)
  expect(v.inputHint()).toEqual('0.00 - 1.00 ratio')
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual([])
  expect(v.optionText('optionKey')).toEqual('')
  expect(v.optionTexts()).toEqual([])
  expect(v.prompt()).toEqual('0.00 - 1.00 ratio')
})

class CanopyCover extends Fraction {
  constructor () {
    super('CanopyCover', 0.5, 0.05)
      .setDisplayUnits('%')
      .setDisplayDecimals(2)
  }
}
test('Example of subclassing Fraction into a specialized CanopyCover class', () => {
  const v = new CanopyCover()
  expect(v.unitsOptions()).toEqual(['ratio', '%'])
  expect(v.key()).toEqual('CanopyCover')
  expect(v.label()).toEqual('Canopy Cover')
  expect(v.defaultValue()).toEqual(0.5)
  expect(v.displayValue(0.1)).toEqual('10.00')
  expect(v.displayString(0.1)).toEqual('10.00 %')
  expect(v.displayValue(v.defaultValue())).toEqual('50.00')
  expect(v.displayString(v.defaultValue())).toEqual('50.00 %')

  // Overridden by EVERY _Variant subclass
  v.setDisplayDecimals(0)
  expect(v.defaultDisplayValue()).toEqual('50')
  expect(v.defaultDisplayString()).toEqual('50 %')
  expect(v.displayValue(0.123456)).toEqual('12')
  expect(v.displayString(0.123456)).toEqual('12 %')
  expect(v.inputHint()).toEqual('0 - 100 %')
  // isValidDisplayValue() expects *display* text or number
  expect(v.isValidDisplayValue('anythingAtAll')).toEqual(false)
  expect(v.isValidDisplayValue(true)).toEqual(false)
  expect(v.isValidDisplayValue('12.3456')).toEqual(true)
  expect(v.isValidDisplayValue(12.3456)).toEqual(true)
  expect(v.isValidDisplayValue('160')).toEqual(false)
  expect(v.isValidDisplayValue('1')).toEqual(true)
  expect(v.validateDisplayValue('1').value).toEqual(0.01)
  expect(v.validateDisplayValue('-10').value).toEqual(0.1)
  expect(v.isValidDisplayValue('-10')).toEqual(true)
  // isValidNativeValue() expects *native* value arg
  expect(v.isValidNativeValue(12.3456)).toEqual(false)
  expect(v.isValidNativeValue(0.123456)).toEqual(true)
  expect(v.minimumValue()).toEqual(0.0)
  expect(v.isValidNativeValue(0.001)).toEqual(true)
  expect(v.isValidNativeValue()).toEqual(false)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(1)
  expect(v.minimumValue()).toEqual(0)
  expect(v.stepValue()).toEqual(0.05)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('100')
  expect(v.minimumDisplayValue()).toEqual('0')
  expect(v.stepDisplayValue()).toEqual('5')
  expect(v.stepDisplayString()).toEqual('5 %')
  expect(v.setDisplayDecimals(2)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.maximumDisplayValue()).toEqual('100.00')
  expect(v.minimumDisplayValue()).toEqual('0.00')
  expect(v.stepDisplayValue()).toEqual('5.00')
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('%')
  expect(v.displayValueToNativeValue('12.3456789')).toEqual(0.123456789)
  expect(v.displayValueToNativeValue(12.3456789)).toEqual(0.123456789)
  expect(v.maximumDisplayString()).toEqual('100.00 %')
  expect(v.minimumDisplayString()).toEqual('0.00 %')
  expect(v.inputHint()).toEqual('0.00 - 100.00 %')
  expect(v.nativeUnits()).toEqual('ratio')
  expect(v.nativeValueToDisplayValue(0.34567)).toEqual(34.567)
  expect(v.setDisplayUnits('ratio')).toEqual(v)
  expect(v.inputHint()).toEqual('0.00 - 1.00 ratio')
})
