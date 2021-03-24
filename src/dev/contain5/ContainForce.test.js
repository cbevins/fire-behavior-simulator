import { ContainForce } from './ContainForce.js'
import { Flank } from './ContainSegment.js'

const key = 'Hand Crew 1'
const arrival = 60
const production = 20
const duration = 8 * 60
const baseCost = 1000
const hourCost = 2000
const flank = Flank.Both

test('1: new ContainForce(), addResource()', () => {
  const force = new ContainForce()
  const res = force.addResource(key, arrival, production, duration, baseCost, hourCost, flank)

  expect(res._arrival).toEqual(arrival)
  expect(res._arrival).toEqual(60)
  expect(res._production).toEqual(production)
  expect(res._production).toEqual(20)
  expect(res._duration).toEqual(duration)
  expect(res._duration).toEqual(8 * 60)
  expect(res._flank).toEqual(flank)
  expect(res._flank).toEqual('Both')
  expect(res._key).toEqual(key)
  expect(res._key).toEqual('Hand Crew 1')
  expect(res._baseCost).toEqual(baseCost)
  expect(res._baseCost).toEqual(1000)
  expect(res._hourCost).toEqual(hourCost)
  expect(res._hourCost).toEqual(2000)

  expect(force.resources()).toHaveLength(1)

  force.addResource('Hand Crew 2', arrival, production, duration, baseCost, hourCost, flank)
  expect(force.resources()).toHaveLength(2)

  expect(() => { force.addResource('Hand Crew 3', 60, 20, 8 * 60, 1000, 2000, 'BadFlank') }).toThrow()
  expect(force.resources()).toHaveLength(2)
})

test('2: produtionRate()', () => {
  const force = new ContainForce()
  force.addResource('Hand Crew 1', 60, 20, 8 * 60, 1000, 2000)
  force.addResource('Hand Crew 2', 120, 40, 8 * 60, 2000, 4000)
  expect(force.productionRate(30, Flank.Left)).toEqual(0)
  expect(force.productionRate(90, Flank.Left)).toEqual(10) // half of 20
  expect(force.productionRate(150, Flank.Left)).toEqual(30) // half of 20+40
  expect(force.productionRate(60 + 8 * 60 - 1, Flank.Left)).toEqual(30) // half of 20+40
  expect(force.productionRate(60 + 8 * 60 + 1, Flank.Left)).toEqual(20) // res 1 exhausted, half of 40
  expect(force.productionRate(120 + 8 * 60 - 1, Flank.Left)).toEqual(20) // half of 40
  expect(force.productionRate(120 + 8 * 60 + 1, Flank.Left)).toEqual(0) // exhausted
})
