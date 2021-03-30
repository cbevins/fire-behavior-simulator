import { ContainForce, Flank } from './index.js'

const key = 'Type I Crew 1'
const segment = Flank.Both
const arrives = 30
const attacks = 60
const production = 20
const duration = 8 * 60
const baseCost = 1000
const hourCost = 2000

test('1: new ContainForce(), new ContainResource(), addResource()', () => {
  const force = new ContainForce()
  const res = force.addResource(key, segment, arrives, attacks, production, duration, baseCost, hourCost)

  expect(res._arrives).toEqual(arrives)
  expect(res._arrives).toEqual(30)

  expect(res._attacks).toEqual(attacks)
  expect(res._attacks).toEqual(60)

  expect(res._production).toEqual(production)
  expect(res._production).toEqual(20)

  expect(res._duration).toEqual(duration)
  expect(res._duration).toEqual(8 * 60)

  expect(res._segment).toEqual(segment)
  expect(res._segment).toEqual('Both')

  expect(res._key).toEqual(key)
  expect(res._key).toEqual('Type I Crew 1')

  expect(res._baseCost).toEqual(baseCost)
  expect(res._baseCost).toEqual(1000)

  expect(res._hourCost).toEqual(hourCost)
  expect(res._hourCost).toEqual(2000)

  expect(force.resources()).toHaveLength(1)

  force.addResource('Type I Crew 2', segment, arrives, attacks, production, duration, baseCost, hourCost)
  expect(force.resources()).toHaveLength(2)

  expect(() => {
    force.addResource('Type I Crew 3', 'Bad Segment', arrives, attacks, production, duration, baseCost, hourCost)
  }).toThrow()
  expect(force.resources()).toHaveLength(2)
})

test('2: ContainForce.productionRate()', () => {
  const force = new ContainForce()
  force.addResource('Type I Crew 1', segment, 30, 60, 20, duration, baseCost, hourCost)
  force.addResource('Type I Crew 2', segment, 90, 120, 40, duration, baseCost, hourCost)

  // Production rates for 1 flank
  const r1 = 20 / 2
  const r2 = 40 / 2
  // No arrivals until 30 min
  expect(force.productionRate(0, Flank.Left)).toEqual(0)
  expect(force.productionRate(15, Flank.Left)).toEqual(0)
  // Crew 1 arrives at 30 min, but doesn't attack until 60 min
  expect(force.productionRate(45, Flank.Left)).toEqual(0)

  // Crew 1 attacks at 60 min on both flanks, so 20/2 ch/h/flank
  expect(force.productionRate(59.9999, Flank.Left)).toEqual(0)
  expect(force.productionRate(60, Flank.Left)).toEqual(r1)
  expect(force.productionRate(60.0001, Flank.Left)).toEqual(r1)
  expect(force.productionRate(90, Flank.Left)).toEqual(r1)

  // Crew 2 arrives at 90 min, but doesn't attack until 120 min
  expect(force.productionRate(90.0001, Flank.Left)).toEqual(r1)

  // Crew 2 attacks at 120 min on both flanks, adding 40/2 ch/h/flank
  expect(force.productionRate(119.9999, Flank.Left)).toEqual(r1)
  expect(force.productionRate(120, Flank.Left)).toEqual(r1 + r2)
  expect(force.productionRate(120.0001, Flank.Left)).toEqual(r1 + r2)

  // Crew 1 retires 8 hours after attack (60 + 8*60 = 540 min), so now just Crew 2
  expect(force.productionRate(539.9999, Flank.Left)).toEqual(r1 + r2)
  expect(force.productionRate(540, Flank.Left)).toEqual(r1 + r2)
  expect(force.productionRate(540.001, Flank.Left)).toEqual(r2)

  // Crew 2 retires 8 hours after attack (120 + 480 = 600 min)
  expect(force.productionRate(599.9999, Flank.Left)).toEqual(r2)
  expect(force.productionRate(600, Flank.Left)).toEqual(r2)
  expect(force.productionRate(600.0001, Flank.Left)).toEqual(0)
})

test('3: ContainForce.nextBoost()', () => {
  const force = new ContainForce()
  force.addResource('Type I Crew 1', segment, 30, 60, 20, duration, baseCost, hourCost)
  force.addResource('Type I Crew 2', segment, 90, 120, 40, duration, baseCost, hourCost)

  // Next boost after report is Crew 1 attack
  expect(force.nextBoost(0, 9999, Flank.Left)).toEqual(60)

  // Next boost after Crew 1 attack is Crew 2 attack
  expect(force.nextBoost(90, 9999, Flank.Left)).toEqual(120)

  // No boost after Crew 2
  expect(force.nextBoost(480, 9999, Flank.Left)).toEqual(0)
})
