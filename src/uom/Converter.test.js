import { Converter } from './index.js'

test('1 Converter.hasSignature()', () => {
  const converter = new Converter()
  expect(converter.hasSignature('m')).toEqual(true)
  expect(converter.getSignature('m')).toEqual(
    { coeff: 1, _d: 1, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
})

test('2 Converter.convertible()', () => {
  const converter = new Converter()
  expect(converter.convertible('ft', 'foot')).toEqual(true)
  expect(converter.convertible('ft', 'm')).toEqual(true)
  expect(converter.convertible('in', 'm')).toEqual(true)
  expect(converter.convertible('kg', 'm')).toEqual(false)
  expect(converter.convertible('W', 'J/s')).toEqual(true)
})

test('3 Converter.convert()', () => {
  const converter = new Converter()
  expect(converter.factorToBase('m')).toEqual(1)
  expect(converter.factorToBase('ft')).toEqual(0.3048)
  expect(converter.factorFromInto('m', 'ft')).toEqual(1 / 0.3048)
  expect(converter.factorFromInto('ft', 'm')).toEqual(0.3048)
  expect(converter.convert(1.23, 'm', 'ft')).toEqual(1.23 / 0.3048)
  expect(converter.convert(1.23, 'ft', 'm')).toEqual(1.23 * 0.3048)
})

test('4 Converter.convert() dimensionless', () => {
  const converter = new Converter()
  expect(converter.convertible('dl', 'dl')).toEqual(true)
  expect(converter.convertible('dl', 'percent')).toEqual(true)
  expect(converter.convert(1.23, 'dl', 'percent')).toEqual(123)
  expect(converter.convertible('dl', 'pct')).toEqual(true)
  expect(converter.convert(1.23, 'dl', 'pct')).toEqual(123)
  expect(converter.convert(50, 'pct', '')).toEqual(0.5)
  expect(converter.convertible('dl', '%')).toEqual(true)
  expect(converter.convert(1.23, 'dl', '%')).toEqual(123)
})

test('5 Converter.convert() equivalent units', () => {
  const converter = new Converter()
  expect(converter.convert(1, 'Pa', 'N/m2')).toEqual(1)
  expect(converter.convert(1, 'J', 'N m')).toEqual(1)
  expect(converter.convert(1, 'J', 'Pa m3')).toEqual(1)
  expect(converter.convert(1, 'W', 'J/s')).toEqual(1)
  expect(converter.convert(1, 'C', 's A')).toEqual(1)
  expect(converter.convert(1, 'V', 'W/A')).toEqual(1)
  expect(converter.convert(1, 'V', 'J/C')).toEqual(1)
  expect(converter.convert(1, 'F', 'C/V')).toEqual(1)
  expect(converter.convert(1, 'ohm', 'V/A')).toEqual(1)
  expect(converter.convert(1, '\u2126', 'V/A')).toEqual(1)
  expect(converter.convert(1, 'S', 'ohm/A')).toEqual(1)
  expect(converter.convert(1, 'S', '\u2126/A')).toEqual(1)
  expect(converter.convert(1, 'Wb', 'V s')).toEqual(1)
  expect(converter.convert(1, 'T', 'Wb/m2')).toEqual(1)
  expect(converter.convert(1, 'H', 'Wb/A')).toEqual(1)
  expect(converter.convert(1, 'lm', 'cd sr')).toEqual(1)
  expect(converter.convert(1, 'lx', 'lm/m2')).toEqual(1)
  expect(converter.convert(1, 'Gy', 'J/kg')).toEqual(1)
  expect(converter.convert(1, 'Sv', 'J/kg')).toEqual(1)
  expect(converter.convert(1, 'Btu/ft/s', 'W/m')).toBeCloseTo(1055.87 / 0.3048)
})

test('6 Converter.getQuantity()', () => {
  const converter = new Converter()
  expect(converter.quantity('m')).toEqual('distance, length')
  expect(converter.quantity('ha')).toEqual('area')
  expect(converter.quantity('')).toEqual('dimensionless')
  expect(converter.quantity('rad')).toEqual('plane angle, solid angle')
  expect(converter.quantity('J')).toEqual('energy, work, heat, moment of force')
})

test('7 Temperature scale conversion', () => {
  const unicodeC = '\u2103'
  const unicodeF = '\u2109'
  const unicodeK = '\u212a'
  const converter = new Converter()
  expect(converter.convert(1, 'oF/m', 'oF/m')).toEqual(1)
  expect(converter.convert(1, 'oF/m', 'oC/m')).toEqual(5 / 9)
  expect(converter.convert(1, 'oF/m', 'oK/m')).toEqual(5 / 9)
  expect(converter.convert(1, 'oC/m', 'oC/m')).toEqual(1)
  expect(converter.convert(1, 'oC/m', 'oK/m')).toEqual(1)
  expect(converter.convert(1, 'oC/m', 'oF/m')).toBeCloseTo(9 / 5, 12)
  expect(converter.convert(1, 'oK/m', 'oK/m')).toEqual(1)
  expect(converter.convert(1, 'oK/m', 'oC/m')).toEqual(1)
  expect(converter.convert(1, 'oK/m', 'oF/m')).toBeCloseTo(9 / 5, 12)

  expect(converter._c2f(10)).toEqual(50)
  expect(converter._c2k(10)).toEqual(283.15)
  expect(converter._f2c(50)).toEqual(10)
  expect(converter._f2k(50)).toEqual(283.15)
  expect(converter._k2c(283.15)).toEqual(10)
  expect(converter._k2f(283.15)).toEqual(50)

  expect(converter.convert(10, 'oC', 'oC')).toEqual(10)
  expect(converter.convert(10, 'celsius', 'oC')).toEqual(10)
  expect(converter.convert(10, unicodeC, 'oC')).toEqual(10)
  expect(converter.convert(10, unicodeC, unicodeC)).toEqual(10)

  expect(converter.convert(10, 'oC', 'oK')).toEqual(283.15)
  expect(converter.convert(10, 'oC', unicodeK)).toEqual(283.15)
  expect(converter.convert(10, 'oC', 'oF')).toEqual(50)
  expect(converter.convert(10, unicodeC, 'oF')).toEqual(50)
  expect(converter.convert(10, unicodeC, unicodeF)).toEqual(50)

  expect(converter.convert(50, 'oF', 'oF')).toEqual(50)
  expect(converter.convert(50, 'oF', 'oC')).toEqual(10)
  expect(converter.convert(50, unicodeF, 'oC')).toEqual(10)
  expect(converter.convert(50, 'oF', 'oK')).toEqual(283.15)
  expect(converter.convert(50, unicodeF, unicodeK)).toEqual(283.15)

  expect(converter.convert(283.15, 'oK', 'oK')).toEqual(283.15)
  expect(converter.convert(283.15, 'oK', unicodeK)).toEqual(283.15)
  expect(converter.convert(283.15, 'oK', 'oC')).toEqual(10)
  expect(converter.convert(283.15, 'oK', unicodeC)).toEqual(10)
  expect(converter.convert(283.15, 'oK', 'oF')).toEqual(50)
  expect(converter.convert(283.15, 'oK', unicodeF)).toEqual(50)

  expect(converter.convert(1, 'deg', 'rad')).toEqual(Math.PI / 180)
  expect(converter.convert(1, 'rad', 'deg')).toEqual(180 / Math.PI)
})

test('9 README units examples', () => {
  const converter = new Converter()
  expect(converter.convert(1, 'ft', 'm')).toEqual(0.3048)
  expect(converter.convert(1, 'ft2', 'm2')).toEqual(0.3048 ** 2)
  expect(converter.convert(1, 'lb', 'kg')).toEqual(1 / 2.20462262184878)
  const terms = [
    'lb/ft2',
    'lb / ft2',
    'lb1 / ft2',
    'lb1/ ft2',
    'lb1 /ft2',
    'lb+1ft-2',
    'pound 1 foot -2',
    'feet-2 pounds+1',
    'feet-2pounds+1']
  terms.forEach(term => {
    expect(converter.convert(1, term, 'kg/m2'))
      .toEqual(1 / (2.20462262184878 * (0.3048 ** 2)))
  })
})

test('8 Converter.quantity()', () => {
  const converter = new Converter()
  expect(converter.convert(1, 'Btu/ft s', 'W/m')).toEqual(1055.87 / 0.3048)
  expect(converter.quantity('Btu/ft2')).toEqual('fire heat per unit area, surface tension')
  expect(converter.quantity('Btu/ft2/min')).toEqual('fire reaction intensity, heat flux density, irradiance, radiance')
  expect(converter.quantity('Btu/ft/s')).toEqual('fireline intensity')
  expect(converter.quantity('W/m')).toEqual('fireline intensity')
  expect(converter.quantity('ft2/ft3')).toEqual('surface area-to-volume ratio, wavenumber, vergence (optics)')
  expect(converter.quantity('mol/ft')).toEqual('unknown')
})
