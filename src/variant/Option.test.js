import { Config, Option, _Variable } from './index.js'

const options = ['a', 'b', 'c']

test('new Option() arg 2 prompt', () => {
  expect(()=>new Option()).toThrow()
  expect(()=>new Option('PrimaryFuel')).toThrow()
  expect(()=>new Option('PrimaryFuel', 1)).toThrow()
  expect(()=>new Option('PrimaryFuel', true)).toThrow()
  expect(()=>new Option('PrimaryFuel', false)).toThrow()
  expect(()=>new Option('PrimaryFuel', {})).toThrow()
  expect(()=>new Option('PrimaryFuel', [])).toThrow()
})

test('new Option() arg 3 optionValues', () => {
  expect(()=>new Option('PrimaryFuel', 'prompt')).toThrow()
  expect(()=>new Option('PrimaryFuel', 1)).toThrow()
  expect(()=>new Option('PrimaryFuel', true)).toThrow()
  expect(()=>new Option('PrimaryFuel', false)).toThrow()
  expect(()=>new Option('PrimaryFuel', 'string')).toThrow()
  expect(()=>new Option('PrimaryFuel', {})).toThrow()
})

test('new Option() arg 4 defaultIndex', () => {
  expect(()=>new Option('PrimaryFuel', 'prompt', options, -1)).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, 5)).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, '5')).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, true)).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, false)).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, {})).toThrow()
  expect(()=>new Option('PrimaryFuel', 'prompt', options, [])).toThrow()
})

test('new Option() default constructor', () => {
  const v = new Option('PrimaryFuel', '', options)
  expect(v.key()).toEqual('PrimaryFuel')
  expect(v.label()).toEqual('Primary Fuel')
  expect(v.prompt()).toEqual('')
  expect(v.inputHint()).toEqual('')
  expect(v.defaultValue()).toEqual('a')
  expect(v.options()).toEqual(options)
  expect(v.optionTexts()).toEqual(options)
  expect(v.optionText('a')).toEqual('a')
})

test('new Option() custom constructor', () => {
  const v = new Option('MyPeople', 'Select a person',
    [['bjr', 'Barbara'], 'dbr', 'krb', ['cdb', 'Collin']], 3)
  expect(v instanceof Option).toEqual(true)
  expect(v instanceof Config).toEqual(false)
  expect(v.key()).toEqual('MyPeople')
  expect(v.label()).toEqual('My People')
  expect(v.prompt()).toEqual('Select a person')
  expect(v.inputHint()).toEqual('Select a person')
  expect(v.defaultValue()).toEqual('cdb')
  expect(v.defaultDisplayValue()).toEqual('Collin')
  expect(v.defaultDisplayString()).toEqual('Collin')
  expect(v.options()).toEqual(['bjr', 'dbr', 'krb', 'cdb'])
  expect(v.optionTexts()).toEqual(['Barbara', 'dbr', 'krb', 'Collin'])
  expect(v.optionText('cdb')).toEqual('Collin')
  expect(v.displayValue('bjr')).toEqual('Barbara')
  expect(v.displayString('bjr')).toEqual('Barbara')
  expect(()=>v.displayString('jack')).toThrow()
})

test('Option validation', () => {
  const v = new Option('MyPeople', 'Select a person',
    [['bjr', 'Barbara'], 'dbr', 'krb', ['cdb', 'Collin']], 3)
  expect(v.isValidInput('bjr')).toEqual(true)
  expect(v.isValidInput('cdb')).toEqual(true)
  expect(v.isValidInput('krb')).toEqual(true)
  expect(v.isValidInput('dbr')).toEqual(true)
  expect(v.isValidInput('Collin')).toEqual(false)
  expect(v.isValidInput('jack')).toEqual(false)

  expect(v.validateDisplayValue('bjr').valid).toEqual(true)
  expect(v.validateDisplayValue('cdb').valid).toEqual(true)
  expect(v.validateDisplayValue('krb').valid).toEqual(true)
  expect(v.validateDisplayValue('dbr').valid).toEqual(true)
  expect(v.validateDisplayValue('Collin').valid).toEqual(false)
  expect(v.validateDisplayValue('jack').valid).toEqual(false)

  expect(v.isValidValue('bjr')).toEqual(true)
  expect(v.isValidValue('cdb')).toEqual(true)
  expect(v.isValidValue('krb')).toEqual(true)
  expect(v.isValidValue('dbr')).toEqual(true)
})

test('isValidValue()', () => {
  const v = new Option('MyPeople', 'Select a person',
    [['bjr', 'Barbara'], 'dbr', 'krb', ['cdb', 'Collin']], 3)
  expect(v.isValidValue()).toEqual(false)
  expect(v.isValidValue({})).toEqual(false)
  expect(v.isValidValue([])).toEqual(false)
  expect(v.isValidValue('')).toEqual(false)
  expect(v.isValidValue(false)).toEqual(false)
  expect(v.isValidValue(true)).toEqual(false)
})

test('_Variant dummy methods to be reimplemented by subclasses', () => {
  const v = new Option('MyPeople', 'Select a person',
    [['bjr', 'Barbara'], 'dbr', 'krb', ['cdb', 'Collin']], 3)
  expect(v.key()).toEqual('MyPeople')
  expect(v.label()).toEqual('My People')
  expect(v.defaultValue()).toEqual('cdb')
  // Overridden by EVERY _Variant subclass
  expect(v.defaultDisplayString()).toEqual('Collin')
  expect(v.defaultDisplayValue()).toEqual('Collin')
  expect(()=>v.displayString(123.456)).toThrow()
  expect(()=>v.displayValue(123.456)).toThrow()
  expect(v.inputHint()).toEqual('Select a person')
  expect(v.isValidInput('anythingAtAll')).toEqual(false)
  expect(v.isValidInput(true)).toEqual(false)
  expect(v.isValidInput('1.23')).toEqual(false)
  expect(v.isValidValue(1.23)).toEqual(false)
  expect(v.isValidValue(-9999)).toEqual(false)
  expect(v.isValidValue(9999)).toEqual(false)
  expect(v.isValidValue('bjr')).toEqual(true)
  // Overriden and final by _Variant => _Numeric
  expect(v.maximumValue()).toEqual(0)
  expect(v.minimumValue()).toEqual(0)
  expect(v.stepValue()).toEqual(1)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.maximumDisplayValue()).toEqual('')
  expect(v.minimumDisplayValue()).toEqual('')
  expect(v.stepDisplayValue()).toEqual('')
  expect(v.setDisplayDecimals(9876)).toEqual(v)
  expect(v.setDisplayToExponential()).toEqual(v)
  expect(v.setDisplayToFixed()).toEqual(v)
  expect(v.setDisplayToPrecision()).toEqual(v)
  // Overriden and final by _Variant => _Numeric => Float
  expect(v.displayUnits()).toEqual('')
  expect(v.displayValueToNativeValue(1)).toEqual(1)
  expect(v.maximumDisplayString()).toEqual('')
  expect(v.minimumDisplayString()).toEqual('')
  expect(v.nativeUnits()).toEqual('')
  expect(v.nativeValueToDisplayValue(1)).toEqual(1)
  expect(v.setDisplayUnits()).toEqual(v)
  // Overridden and final by Option
  expect(v.hasOption('x')).toEqual(false)
  expect(v.options()).toEqual(['bjr', 'dbr', 'krb', 'cdb'])
  expect(v.optionText('cdb')).toEqual('Collin')
  expect(v.optionTexts()).toEqual(['Barbara', 'dbr', 'krb', 'Collin'])
  expect(v.prompt()).toEqual('Select a person')
})

test('new Config() default constructor', () => {
  const v = new Config('PrimaryFuel', '', options)
  expect(v.key()).toEqual('PrimaryFuel')
  expect(v.label()).toEqual('Primary Fuel')
  expect(v.prompt()).toEqual('')
  expect(v.inputHint()).toEqual('')
  expect(v.defaultValue()).toEqual('a')
  expect(v.options()).toEqual(options)
  expect(v.optionTexts()).toEqual(options)
  expect(v.optionText('a')).toEqual('a')
})

test('newConfig() custom constructor', () => {
  const v = new Config('MyPeople', 'Select a person',
    [['bjr', 'Barbara'], 'dbr', 'krb', ['cdb', 'Collin']], 3)
  expect(v instanceof Option).toEqual(true)
  expect(v instanceof Config).toEqual(true)
  expect(v.key()).toEqual('MyPeople')
  expect(v.label()).toEqual('My People')
  expect(v.prompt()).toEqual('Select a person')
  expect(v.inputHint()).toEqual('Select a person')
  expect(v.defaultValue()).toEqual('cdb')
  expect(v.defaultDisplayValue()).toEqual('Collin')
  expect(v.defaultDisplayString()).toEqual('Collin')
  expect(v.options()).toEqual(['bjr', 'dbr', 'krb', 'cdb'])
  expect(v.optionTexts()).toEqual(['Barbara', 'dbr', 'krb', 'Collin'])
  expect(v.optionText('cdb')).toEqual('Collin')
  expect(v.displayValue('bjr')).toEqual('Barbara')
  expect(v.displayString('bjr')).toEqual('Barbara')
  expect(()=>v.displayString('jack')).toThrow()
})
