import { TemperatureHumidity as T } from '../index.js'

test('1 dewPoint(), relativeHumidity(), reaRh(), and reaDewPoint()', () => {
  let dp = T.dewPoint(80, 60, 0)
  let rh = T.relativeHumidity(80, dp)
  expect(dp).toEqual(44.82398987900015)
  expect(rh).toEqual(0.2890303643500842)
  expect(T.reaRh(80, dp)).toBeCloseTo(rh, 5)
  expect(T.reaDewPoint(80, rh)).toBeCloseTo(dp, 1)

  dp = T.dewPoint(90, 60, 0)
  rh = T.relativeHumidity(90, dp)
  expect(dp).toEqual(32.840736794428075)
  expect(rh).toEqual(0.13126403584785518)
  expect(T.reaRh(90, dp)).toBeCloseTo(rh, 4)
  expect(T.reaDewPoint(90, rh)).toBeCloseTo(dp, 1)

  dp = T.dewPoint(90, 55, 0)
  rh = T.relativeHumidity(90, dp)
  expect(dp).toEqual(0.6631788009199404)
  expect(rh).toEqual(0.03239387639520112)
  expect(T.reaRh(90, dp)).toBeCloseTo(rh, 3)
  expect(T.reaDewPoint(90, rh)).toBeCloseTo(dp, 1)

  dp = T.dewPoint(90, 55, 10000)
  rh = T.relativeHumidity(90, dp)
  expect(dp).toEqual(30.230182815267927)
  expect(rh).toEqual(0.11809965668845734)
  expect(T.reaRh(90, dp)).toBeCloseTo(rh, 4)
  expect(T.reaDewPoint(90, rh)).toBeCloseTo(dp, 1)

  dp = T.dewPoint(50, 60)
  rh = T.relativeHumidity(50, dp)
  expect(dp).toEqual(50)
  expect(rh).toEqual(1)
  expect(T.reaRh(50, dp)).toBeCloseTo(rh, 4)
  expect(T.reaDewPoint(50, rh)).toBeCloseTo(dp, 1)

  dp = T.dewPoint(-50, -60)
  rh = T.relativeHumidity(-50, dp)
  expect(dp).toEqual(-40)
  expect(rh).toEqual(1)
  expect(T.reaRh(-50, dp)).toBeCloseTo(rh, 5)
  expect(T.reaDewPoint(-50, rh)).toBeCloseTo(dp, 1)
})

test('2 windChill()', () => {
  expect(T.windChill(40, 10)).toEqual(33.64254827558847)
  expect(T.windChill(0, 35)).toEqual(-27.403250268727305)
  expect(T.windChill(0, 0)).toEqual(35.74) // 35.74 + 0.6215 * at
  expect(T.windChill(-40, 50)).toEqual(-87.9480422758242)
})

test('3 heatIndex()', () => {
  expect(T.heatIndex(80, 40)).toBeCloseTo(80, 0)
  expect(T.heatIndex(90, 70)).toBeCloseTo(105, -1)
  expect(T.heatIndex(80, 100)).toBeCloseTo(87, -1)
  expect(T.heatIndex(110, 40)).toBeCloseTo(136, 0)
  expect(T.heatIndex(100, 80)).toBeCloseTo(158, 0)
  expect(T.heatIndex(90, 10)).toBeCloseTo(85, 0)
})

test('4 summerSimmerIndex()', () => {
  expect(T.summerSimmerIndex(100, 80)).toEqual(132.0224)
})
