import { Quantity } from './index.js'
import { Uom } from '../uom/index.js'

const rosUnits = ['ft/min', 'ch/h', 'mi/h', 'm/min', 'km/h']

test('Quantity constructor', () => {
  expect(() => new Quantity()).toThrow()
  expect(() => new Quantity('FireSpreadRate')).toThrow()
  expect(() => new Quantity('FireSpreadRate', 'string')).toThrow()
  expect(() => new Quantity('FireSpreadRate', 1)).toThrow()
  expect(() => new Quantity('FireSpreadRate', true)).toThrow()
  expect(() => new Quantity('FireSpreadRate', 1)).toThrow()
  expect(() => new Quantity('FireSpreadRate', {})).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 'string')).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, true)).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, {})).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits.concat('ft'), 1000)).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, 'string')).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, true)).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, {})).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, 5, 'string')).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, 5, true)).toThrow()
  expect(() => new Quantity('FireSpreadRate', rosUnits, 1000, 5, {})).toThrow()
})

test('Quantity default constructor', () => {
  const v = new Quantity('FireSpreadRate', rosUnits, 1000)
  expect(v.key()).toEqual('FireSpreadRate')
  expect(v.defaultValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(1000)
  expect(v.stepValue()).toEqual(1)
  expect(v.unitsOptions()).toEqual(rosUnits)
  expect(v.nativeUnits()).toEqual('ft/min')
  expect(v.displayUnits()).toEqual('ft/min')
  expect(() => v.validateNativeValue()).toThrow()
})

test('setDisplayUnits()', () => {
  const v = new Quantity('FireSpreadRate', rosUnits, 1000)
  expect(v.nativeUnits()).toEqual('ft/min')
  expect(v.displayUnits()).toEqual('ft/min')
  expect(v.displayValue(1.23456789)).toEqual('1.23')
  expect(v.displayString(1.23456789)).toEqual('1.23 ft/min')
  expect(v.minimumDisplayValue()).toEqual('0.00')
  expect(v.maximumDisplayValue()).toEqual('1000.00')
  expect(v.inputHint()).toEqual('0.00 - 1000.00 ft/min')

  expect(() => v.setDisplayUnits('junk')).toThrow()

  expect(v.setDisplayUnits('ch/h')).toEqual(v)
  expect(v.nativeUnits()).toEqual('ft/min')
  expect(v.displayUnits()).toEqual('ch/h')
  expect(v.minimumDisplayValue()).toEqual('0.00')
  expect(v.maximumDisplayValue()).toEqual('909.09')
  expect(v.inputHint()).toEqual('0.00 - 909.09 ch/h')

  expect(v.nativeValueToDisplayValue(1000)).toBeCloseTo(909.090909090909, 12)
  expect(v.displayValueToNativeValue(909.0909090909091)).toBeCloseTo(1000, 12)
})

test('Input text validation with units conversion', () => {
  const v = new Quantity('FireSpreadRate', rosUnits, 1000, 5, 5).setDisplayUnits('m/min')
  expect(v.displayUnits()).toEqual('m/min')

  let result = v.validateDisplayValue('5')
  expect(result.valid).toEqual(true)
  expect(result.value).toBeCloseTo(5 / 0.3048, 12)
  expect(result.message).toEqual('')

  result = v.validateDisplayValue('a')
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual('')
  expect(result.message).toEqual('Not a valid number string')

  result = v.validateDisplayValue('-5')
  expect(result.valid).toEqual(true)
  expect(result.value).toBeCloseTo(5 / 0.3048, 12)
  expect(result.message).toEqual('')

  result = v.validateDisplayValue('1')
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(1)
  expect(result.message).toEqual('Less than minimum value of 1.52 m/min (5.00 ft/min)')

  result = v.validateDisplayValue('400')
  expect(result.valid).toEqual(false)
  expect(result.value).toEqual(400)
  expect(result.message).toEqual('Greater than maximum value of 304.80 m/min (1000.00 ft/min)')

  result = v.validateDisplayValue('200')
  expect(result.valid).toEqual(true)
  expect(result.value).toBeCloseTo(200 / 0.3048, 12)
  expect(result.message).toEqual('')
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Quantity('DeadFuelMoisture', ['ratio', '%'], 0.5, 0.1, 0.01, 0.02)
    .setDisplayUnits('%')
    .setDisplayDecimals(2)
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

test('Temperature conversion', () => {
  expect(Uom.convert(10, 'oC', 'oF')).toEqual(50)
  expect(Uom.convert(50, 'oF', 'oC')).toEqual(10)
  expect(Uom.convert(10, 'oF/min', 'oC/min')).toEqual(50 / 9)
  expect(Uom.convert(10, 'oC/min', 'oF/min')).toEqual(18)
})

test('Uom package update tests', () => {
  expect(Uom.convert(1, 'y', 'd')).toEqual(365)
  expect(Uom.convert(1, 'Hertz', 's-1')).toEqual(1)
  expect(Uom.convert(1, 'Hertz', 'min-1')).toEqual(60)
})
