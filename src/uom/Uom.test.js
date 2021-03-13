import { Converter, Uom } from './index.js'

// Tests are performed in reverse order
test('2 Uom', () => {
  const uom3 = Uom
  expect(uom3._n).toEqual(0)
})

test('1 Uom', () => {
  const uom1 = Uom
  // WE can UPDATE Uom...
  expect(uom1._n).toEqual(0)
  uom1.convert(1, 'ft', 'm')
  expect(uom1._n).toEqual(1)
  const uom2 = Uom
  expect(uom2._n).toEqual(1)

  // Cannot RE_ASSIGN Uom
  // eslint-disable-next-line no-import-assign
  expect(() => { Uom = new Converter() }).toThrow()
})

test('3 Uom import direct use by client', () => {
  expect(Uom.convert(1, 'ft', 'm')).toEqual(0.3048)
  expect(Uom.convert(1, 'lb', 'kg')).toEqual(1 / 2.20462262184878)
  expect(Uom.convert(1, 'MJ', 'J')).toEqual(1000000)
  expect(Uom.convert(1, 'lb/ft2', 'kg/m2')).toEqual(4.882427636383041)

  expect(Uom.convert(1, 'y', 'd')).toEqual(365)

  const btu2J = 1.055870000000e+03
  expect(Uom.convert(1, 'Btu', 'J')).toEqual(btu2J)

  expect(Uom.convert(1, 'Btu', 'J')).toEqual(1055.87)
  expect(Uom.convert(1, 'J', 'Btu')).toEqual(1 / 1055.87)
  expect(Uom.convert(1, 'btu/ft/s', 'J/m/s')).toBeCloseTo(3464.14, 2)
})

test('4 README examples', () => {
  expect(Uom.convertible('m', 'ft')).toEqual(true)
  expect(Uom.convertible('m', 's')).toEqual(false)
  expect(Uom.convert(1.23, 'm', 'ft')).toEqual(1.23 / 0.3048)
  expect(Uom.convert(1.23, 'ft', 'm')).toEqual(1.23 * 0.3048)
  expect(Uom.quantity('ha')).toEqual('area')
  expect(Uom.quantity('J')).toEqual('energy, work, heat, moment of force')
})
