import { Status, Tactic } from './ContainSegment.js'
import { ContainForce } from './ContainForce.js'
import { ContainSim } from './ContainSim.js'

const reportRate = 80 // ch/h
const reportSize = 1 // ac
const lwRatio = 2
const tactic = Tactic.HeadAttack
const attackDist = 0

const arrival = 60
const prodRate = 100 // ch/h
const duration = 8 * 60
const baseCost = 1000
const hourCost = 2000

test('1: new ContainSim() Case 3 (Exhausted)', () => {
  const force = new ContainForce()
  // force.addResource(key, arrival, production, duration, baseCost, hourCost, flank)
  force.addResource('Hand Crew 1', arrival, prodRate, duration, baseCost, hourCost)
  const sim = new ContainSim(reportSize, reportRate, lwRatio, force, tactic, attackDist)
  expect(sim instanceof ContainSim).toEqual(true)
  sim.run()
  expect(sim._left._status).toEqual(Status.Exhausted)
  expect(sim._finalTime).toBeCloseTo(60, 4)
  expect(sim._finalLine).toBeCloseTo(0, 6) // ch
  expect(sim._finalSize).toBeCloseTo(0, 6) // ac
  expect(sim._finalCost).toBeCloseTo(0, 4)
  expect(sim._pass).toEqual(0) // 0=first pass, 1=second pass, ...
  expect(sim._left._step + 1).toEqual(2)
  expect(sim._left._distStep).toBeCloseTo(0.721443, 5) // ch
})
