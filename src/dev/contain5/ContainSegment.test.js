import { ContainSegment, Flank, Status, Tactic } from './ContainSegment.js'
import { ContainForce } from './ContainForce.js'

const reportRate = 10 // ch/h
const reportSize = 1 // ac
const lwRatio = 2
const attackDist = 0
const attackTime = 60
const maxSteps = 1000
const limitDist = 1000000

const arrival = 60
const prodRate = 100 // ch/h
const duration = 8 * 60
const baseCost = 1000
const hourCost = 2000

test('1: new ContainSegment()', () => {
  const force = new ContainForce()
  // force.addResource(key, arrival, production, duration, baseCost, hourCost, flank)
  force.addResource('Hand Crew 1', arrival, prodRate, duration, baseCost, hourCost)
  const distStep = force.exhausted(Flank.Left) * (reportRate / 60) / (maxSteps - 2)
  const segment = new ContainSegment(reportSize, reportRate, lwRatio, force, Tactic.HeadAttack, attackDist,
    attackTime, distStep, limitDist, Flank.Left)
  expect(segment instanceof ContainSegment).toEqual(true)
  expect(segment._reportSize).toEqual(reportSize)
  expect(segment._reportRate).toEqual(reportRate)
  expect(segment._lwRatio).toEqual(lwRatio)
  expect(segment._tactic).toEqual('HeadAttack')
  expect(segment._attackDist).toEqual(attackDist)
  expect(segment._attackTime).toEqual(attackTime)
  expect(segment._distStep).toEqual(distStep)
  expect(segment._limitDist).toEqual(limitDist)
  expect(segment._flank).toEqual('Left')
  expect(segment._status).toEqual('Reported')
})

test('2: segment.run()', () => {
  const force = new ContainForce()
  force.addResource('Hand Crew 1', arrival, prodRate, duration, baseCost, hourCost)
  const distStep = force.exhausted(Flank.Left) * (reportRate / 60) / (maxSteps - 2)
  const segment = new ContainSegment(reportSize, reportRate, lwRatio, force, Tactic.HeadAttack, attackDist,
    attackTime, distStep, limitDist, Flank.Left)
  expect(segment._tactic).toEqual('HeadAttack')
  expect(segment._status).toEqual('Reported')

  let str = ''
  while (segment._status !== Status.Overrun &&
        segment._status !== Status.Contained &&
        segment._status !== Status.LimitDist &&
        segment._step < maxSteps) {
    // Store angle and head position in the proper array element
    segment.step()
    str = `Status = ${segment._status} at Step ${segment._step}, u=${segment._u} h=${segment._h} elapsed=${segment._time}\n`
  }
  console.log(str)
  expect(segment._status).toEqual(Status.Contained)
  expect(segment._u).toEqual(Math.PI)
})
