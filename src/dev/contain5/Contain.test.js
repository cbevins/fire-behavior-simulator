import { Contain, Flank, Status, Tactic } from './Contain.js'
import { ContainForce } from './ContainForce.js'

test('1: new Contain()', () => {
  const force = new ContainForce()
  force.addResource('Hand Crew 1', 10, 2000, 8 * 60, 1000, 2000)
  force.addResource('Hand Crew 2', 10, 2000, 8 * 60, 1000, 2000)
  force.addResource('Hand Crew 3', 10, 2000, 8 * 60, 1000, 2000)
  const reportSize = 1
  const reportRate = 0.5
  const lwRatio = 2
  const attackDist = 0
  const attackTime = 60
  const maxSteps = 1000
  const distStep = force.exhausted(Flank.Left) * (reportRate / 60) / (maxSteps - 2)
  const limitDist = 1000000
  const contain = new Contain(reportSize, reportRate, lwRatio, force, Tactic.Head, attackDist,
    attackTime, distStep, limitDist, Flank.Left)
  expect(contain instanceof Contain).toEqual(true)

  let str = ''
  while (contain._status !== Status.Overrun &&
        contain._status !== Status.Contained &&
        contain._status !== Status.LimitDist &&
        contain._step < maxSteps) {
    // Store angle and head position in the proper array element
    contain.step()
    str += `Step ${contain._step}, u=${contain._u} h=${contain._h} elapsed=${contain._time}\n`
  }
  str += `Status = ${contain._status}`
  console.log(str)
})
