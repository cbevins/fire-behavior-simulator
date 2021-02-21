import { Uom, Converter } from '../uom/index.js'

test('1 Uom import direct use by client', () => {
  expect(Uom.convert(1, 'ft', 'm')).toEqual(0.3048)
  expect(Uom.convert(1, 'lb', 'kg')).toEqual(1 / 2.20462262184878)
  expect(Uom.convert(1, 'MJ', 'J')).toEqual(1000000)
  expect(Uom.convert(1, 'lb/ft2', 'kg/m2')).toEqual(4.882427636383041)

  const btu2J = 1.055870000000e+03
  expect(Uom.convert(1, 'Btu', 'J')).toEqual(btu2J)

  expect(Uom.convert(1, 'Btu', 'J')).toEqual(1055.87)
  expect(Uom.convert(1, 'J', 'Btu')).toEqual(1 / 1055.87)
  expect(Uom.convert(1, 'btu/ft/s', 'J/m/s')).toBeCloseTo(3464.14, 2)
})

test('2 Uom Converter instance use', () => {
  const c = new Converter()
  expect(c.convert(1, 'ft', 'm')).toEqual(0.3048)
  expect(c.convert(1, 'lb', 'kg')).toEqual(1 / 2.20462262184878)
  expect(c.convert(1, 'MJ', 'J')).toEqual(1000000)
  expect(c.convert(1, 'lb/ft2', 'kg/m2')).toEqual(4.882427636383041)

  const btu2J = 1.055870000000e+03
  expect(c.convert(1, 'Btu', 'J')).toEqual(btu2J)

  expect(c.convert(1, 'Btu', 'J')).toEqual(1055.87)
  expect(c.convert(1, 'J', 'Btu')).toEqual(1 / 1055.87)
  expect(c.convert(1, 'btu/ft/s', 'J/m/s')).toBeCloseTo(3464.14, 2)
})
