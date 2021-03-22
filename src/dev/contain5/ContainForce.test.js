import { ContainForce } from './ContainForce.js'
import { Flank } from './Contain.js'

test('1: new ContainForce(), addResource()', () => {
  const force = new ContainForce()
  const res = force.addResource(60, 20, 8 * 60, Flank.Left, 'Hand Crew 1', 1000, 2000)
  expect(res._arrival).toEqual(60)
  expect(res._production).toEqual(20)
  expect(res._duration).toEqual(8 * 60)
  expect(res._flank).toEqual(Flank.Left)
  expect(res._flank).toEqual('Left')
  expect(res._desc).toEqual('Hand Crew 1')
  expect(res._baseCost).toEqual(1000)
  expect(res._hourCost).toEqual(2000)

  expect(force.resources()).toHaveLength(1)
  force.addResource(120, 40, 8 * 60, Flank.Left, 'Hand Crew 2', 2000, 4000)
  expect(force.resources()).toHaveLength(2)

  expect(() => { force.addResource(60, 20, 8 * 60, 'junk', 'Hand Crew', 1000, 2000) }).toThrow()
})
