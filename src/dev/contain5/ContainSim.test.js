import { Status, Tactic } from './ContainSegment.js'
import { ContainForce } from './ContainForce.js'
import { ContainSim } from './ContainSim.js'

const reportRate = 10 // ch/h
const reportSize = 1 // ac
const lwRatio = 2
const tactic = Tactic.HeadAttack
const attackDist = 0

const arrival = 60
const prodRate = 100 // ch/h
const duration = 8 * 60
const baseCost = 1000
const hourCost = 2000

test('1: new ContainSim() Baseline 1 [5: More Precision, 6:Contained', () => {
  const force = new ContainForce()
  // force.addResource(key, arrival, production, duration, baseCost, hourCost, flank)
  force.addResource('Hand Crew 1', arrival, prodRate, duration, baseCost, hourCost)
  const sim = new ContainSim(reportSize, reportRate, lwRatio, force, tactic, attackDist)
  expect(sim instanceof ContainSim).toEqual(true)
  sim.run()
  expect(sim._left._status).toEqual(Status.Contained)
  expect(sim._finalTime).toBeCloseTo(60 * 1.403422, 4)
  expect(sim._finalLine).toBeCloseTo(40.332478, 6) // ch
  expect(sim._finalSize).toBeCloseTo(11.372836, 6) // ac
  expect(sim._finalCost).toBeCloseTo(1806.84367, 4)
  expect(sim._pass).toEqual(1) // 0=first pass, 1=second pass, ...
  expect(sim._left._step + 1).toEqual(779)
  expect(sim._left._distStep).toBeCloseTo(0.005185, 5) // ch
})
