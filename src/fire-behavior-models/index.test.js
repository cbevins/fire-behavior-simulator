import { BehaveFuel } from './index.js'
import * as Lib from './index.js'

test('Behave functions', () => {
  const totalLoad = 10
  const curedHerbFraction = BehaveFuel.curedHerbFraction(0.5)
  expect(curedHerbFraction).toBeCloseTo(0.778, 12)
  expect(BehaveFuel.deadHerbLoad(totalLoad, curedHerbFraction)).toBeCloseTo(7.78, 12)
  expect(BehaveFuel.liveHerbLoad(totalLoad, curedHerbFraction)).toBeCloseTo(2.22, 12)
})

test('Lib.BehaveFuel functions', () => {
  const totalLoad = 10
  const curedHerbFraction = Lib.BehaveFuel.curedHerbFraction(0.5)
  expect(curedHerbFraction).toBeCloseTo(0.778, 12)
  expect(Lib.BehaveFuel.deadHerbLoad(totalLoad, curedHerbFraction)).toBeCloseTo(7.78, 12)
  expect(Lib.BehaveFuel.liveHerbLoad(totalLoad, curedHerbFraction)).toBeCloseTo(2.22, 12)
})
