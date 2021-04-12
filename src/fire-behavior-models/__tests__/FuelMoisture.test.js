import { fosbergDead1h, fosbergDead10h, fosbergDead100h, fosbergReference, fosbergCorrection } from '../FuelMoisture.js'

const Obs = {
  db: 60,
  rh: 0.54,
  mon: 7,
  shd: 0.1,
  asp: 180,
  slp: 0.2,
  hr: 13,
  pos: 0
}

test('Fosberg Table A, Reference Fuel Moisture', () => {
  const obs = { ...Obs }
  expect(fosbergReference(obs.db, obs.rh)).toEqual(0.07)
  obs.rh = 0.55
  expect(fosbergReference(obs.db, obs.rh)).toEqual(0.08)
  obs.db = 0
  obs.rh = -0.1
  expect(fosbergReference(obs.db, obs.rh)).toEqual(0.01)
  obs.db = 89.9999
  obs.rh = 0.749999
  expect(fosbergReference(obs.db, obs.rh)).toEqual(0.09)
})

test('Fosberg Table B, Correction for May, Jun, Jul', () => {
  const o = { ...Obs }
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(5, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(6, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(7, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)

  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, 0, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, 1, o.asp, o.slp, o.hr, o.pos)).toEqual(0.03)

  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 13, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 12, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 14, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 16, o.pos)).toEqual(0.01)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 18, o.pos)).toEqual(0.03)
  // Night-time
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 20, o.pos)).toEqual(0.05)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 21, o.pos)).toEqual(0.05)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 23, o.pos)).toEqual(0.05)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 0, o.pos)).toEqual(0.04)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 6, o.pos)).toEqual(0.04)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 7, o.pos)).toEqual(0.04)
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, 8, o.pos)).toEqual(0.03)

  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(o.mon, 0.8, 180, o.slp, 16, -1001)).toEqual(0.03)
  expect(fosbergCorrection(o.mon, 0.8, 180, o.slp, 16, 0)).toEqual(0.04)
  expect(fosbergCorrection(o.mon, 0.8, 180, o.slp, 16, 1001)).toEqual(0.05)
  expect(fosbergCorrection(o.mon, 0.8, 180, o.slp, 16, 'junk')).toEqual(0.04)
})

test('Fosberg Table C, Correction for Feb, Mar, Apr and Aug, Sep, Oct', () => {
  const o = { ...Obs }
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(2, 0.1, 180, 0.2, 13, 0)).toEqual(0.01)
  // Exposed, north, steep, morning
  expect(fosbergCorrection(3, 0.1, 0, 0.4, 8, -1001)).toEqual(0.03)
  expect(fosbergCorrection(3, 0.1, 0, 0.4, 8, 0)).toEqual(0.04)
  expect(fosbergCorrection(3, 0.1, 0, 0.4, 8, 1001)).toEqual(0.05)
  expect(fosbergCorrection(3, 0.1, 0, 0.4, 8, 'junk')).toEqual(0.04)
  // Shaded, north, steep, morning
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 8, -1001)).toEqual(0.04)
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 8, 0)).toEqual(0.05)
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 8, 1001)).toEqual(0.06)
  // Shaded, north, steep, night-time
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(3, 0.9, 0, 0.4, 23, 1001)).toEqual(0.06)

  // Exposed, north, steep, night-time
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 23, 1001)).toEqual(0.06)
  // Shaded north, steep, night-time
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 23, 1001)).toEqual(0.06)

  // Exposed, north, steep, day-time
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 13, -1001)).toEqual(0.02)
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 13, 0)).toEqual(0.03)
  expect(fosbergCorrection(4, 0.1, 0, 0.4, 13, 1001)).toEqual(0.04)
  // Shaded north, steep, day-time
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 13, -1001)).toEqual(0.03)
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 13, 0)).toEqual(0.04)
  expect(fosbergCorrection(4, 0.9, 0, 0.4, 13, 1001)).toEqual(0.05)
})

test('Fosberg Table D, Correction for Nov, Dec, Jan', () => {
  const o = { ...Obs }
  expect(fosbergCorrection(o.mon, o.shd, o.asp, o.slp, o.hr, o.pos)).toEqual(0)
  expect(fosbergCorrection(12, 0.1, 180, 0.2, 13, 0)).toEqual(0.03)
  // Exposed, west, steep, morning
  expect(fosbergCorrection(11, 0.1, 270, 0.4, 8, -1001)).toEqual(0.04)
  expect(fosbergCorrection(11, 0.1, 270, 0.4, 8, 0)).toEqual(0.05)
  expect(fosbergCorrection(11, 0.1, 270, 0.4, 8, 1001)).toEqual(0.06)
  expect(fosbergCorrection(11, 0.1, 270, 0.4, 8, 'junk')).toEqual(0.05)
  // Shaded, west, steep, flat, morning
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 8, -1001)).toEqual(0.04)
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 8, 0)).toEqual(0.05)
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 8, 1001)).toEqual(0.06)
  // Shaded, west, steep, night-time
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(11, 0.9, 0, 0.4, 23, 1001)).toEqual(0.06)

  // Exposed, west, steep, night-time
  expect(fosbergCorrection(1, 0.1, 270, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(1, 0.1, 270, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(1, 0.1, 270, 0.4, 23, 1001)).toEqual(0.06)
  // Shaded west, steep, night-time
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 23, -1001)).toEqual(0.04)
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 23, 0)).toEqual(0.05)
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 23, 1001)).toEqual(0.06)

  // Exposed, west, steep, day-time
  expect(fosbergCorrection(12, 0.1, 270, 0.4, 13, -1001)).toEqual(0.03)
  expect(fosbergCorrection(12, 0.1, 270, 0.4, 13, 0)).toEqual(0.04)
  expect(fosbergCorrection(12, 0.1, 270, 0.4, 13, 1001)).toEqual(0.04)
  // Shaded, west, steep, day-time
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 13, -1001)).toEqual(0.04)
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 13, 0)).toEqual(0.05)
  expect(fosbergCorrection(1, 0.9, 270, 0.4, 13, 1001)).toEqual(0.06)
})

test('Fosberg fuel moisture', () => {
  const ref = fosbergReference(95, 0.05)
  expect(ref).toEqual(0.01)

  const cor = fosbergCorrection(1, 0.9, 270, 0.4, 23, 0)
  expect(cor).toEqual(0.05)

  const tl1h = fosbergDead1h(ref, cor)
  expect(tl1h).toBeCloseTo(0.06, 12)

  expect(fosbergDead10h(tl1h)).toBeCloseTo(0.08, 12)
  expect(fosbergDead100h(tl1h)).toBeCloseTo(0.1, 12)
})
