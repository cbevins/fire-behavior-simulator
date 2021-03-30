import { ContainForce, Flank } from './index.js'

test('new ContainForce()', () => {
  const force = new ContainForce()
  force.addResource('Type I Crew 1', Flank.Left, 30, 60, 20, 480, 1000, 2000)
  expect(force.resources()).toHaveLength(1)
})
