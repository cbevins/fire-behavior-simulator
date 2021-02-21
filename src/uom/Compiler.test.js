import { Compiler } from './Compiler.js'
import { unitDefs } from './unitDefs.js'

const Uom = new Compiler(unitDefs)
const fpm = 1 / 0.3048 // ft/m
const ppk = 2.20462262184878 // lb/kg
const bpj = 1 / 1055.87 // Btu/J

test('1: m, ft', () => {
  expect(Uom.compile([1.23, 'm', 1])).toEqual(
    { coeff: 1.23, _d: 1, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  expect(Uom.compile([1.23, 'ft', 1])).toEqual(
    { coeff: 1.23 / fpm, _d: 1, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
})

test('2: m2, ft2', () => {
  expect(Uom.compile([1.23, 'm', 2])).toEqual(
    { coeff: 1.23, _d: 2, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, 'ft', 2])
  expect(sig.coeff).toBeCloseTo(1.23 / fpm ** 2, 12)
})

test('3: m-2, ft-2', () => {
  expect(Uom.compile([1.23, 'm', -2])).toEqual(
    { coeff: 1.23, _d: -2, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, 'ft', -2])
  expect(sig.coeff).toBeCloseTo(1.23 / fpm ** 2, 12)
})

test('4: kg, lb', () => {
  expect(Uom.compile([1.23, 'kg', 1])).toEqual(
    { coeff: 1.23, _d: 0, _m: 1, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, 'lb', 1])
  expect(sig.coeff).toBeCloseTo(1.23 / ppk, 12)
})

test('5: kg/m2, lb/ft2', () => {
  expect(Uom.compile([1.23, [[1, 'kg', 1], [1, 'm', -2]], 1])).toEqual(
    { coeff: 1.23, _d: -2, _m: 1, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, [[1, 'lb', 1], [1, 'ft', -2]], 1])
  expect(sig.coeff).toBeCloseTo(1.23 * fpm * fpm / ppk, 12)
})

test('6: J/m/s, W/m Btu/ft/s', () => {
  expect(Uom.compile([1.23, [[1, 'J', 1], [1, 'm', -1], [1, 's', -1]], 1]))
    .toEqual({ coeff: 1.23, _d: 1, _m: 1, _T: 0, _t: -3, _r: 0, _e: 0, _i: 0, _s: 0 })
  expect(Uom.compile([1.23, [[1, 'W', 1], [1, 'm', -1]], 1]))
    .toEqual({ coeff: 1.23, _d: 1, _m: 1, _T: 0, _t: -3, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, [[1, 'Btu', 1], [1, 'ft', -1], [1, 's', -1]], 1])
  expect(sig.coeff).toBeCloseTo(1.23 * fpm / bpj)
})

test('7: ha, ac', () => {
  expect(Uom.compile([1.23, 'ha', 1])).toEqual(
    { coeff: 1.23 * 10000, _d: 2, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  expect(Uom.compile([1.23, 'ac', 1])).toEqual(
    { coeff: 1.23 * 66 * 660 / (fpm ** 2), _d: 2, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
})

test('8: ft2/ft3', () => {
  expect(Uom.compile([1.23, [[1, 'm', 2], [1, 'm', -3]], 1])).toEqual(
    { coeff: 1.23, _d: -1, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  expect(Uom.compile([1.23, [[1, 'ft', 2], [1, 'ft', -3]], 1])).toEqual(
    { coeff: 1.23 * fpm, _d: -1, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
})

test('9: oC/m, oF/m, oF/ft', () => {
  expect(Uom.compile([1.23, [[1, 'oC', 1], [1, 'm', -1]], 1])).toEqual(
    { coeff: 1.23, _d: -1, _m: 0, _T: 1, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  let sig = Uom.compile([1.23, [[1, 'oF', 1], [1, 'm', -1]], 1])
  expect(sig.coeff).toBeCloseTo(1.23 * 5 / 9, 12)
  sig = Uom.compile([1.23, [[1, 'oF', 1], [1, 'ft', -1]], 1])
  expect(sig.coeff).toBeCloseTo(1.23 * fpm * 5 / 9, 12)
})

test('10: m/m, ft/ft', () => {
  expect(Uom.compile([1.23, [[1, 'm', 1], [1, 'm', -1]], 1])).toEqual(
    { coeff: 1.23, _d: 0, _m: 0, _T: 0, _t: 0, _r: 0, _e: 0, _i: 0, _s: 0 })
  const sig = Uom.compile([1.23, [[1, 'ft', 1], [1, 'ft', -1]], 1])
  expect(sig.coeff).toBeCloseTo(1.23, 12)
})

test('11: junk 2', () => {
  expect(() => Uom.compile([1.23, 'junk', 2])).toThrow()
})
