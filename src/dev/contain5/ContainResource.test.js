import { ContainResource } from './ContainResource.js'
import { Flank } from './Contain.js'

test('1: new ContainResource()', () => {
  const res = new ContainResource('Hand Crew', 60, 20, 8 * 60, 1000, 2000)
  expect(res._arrival).toEqual(60)
  expect(res._production).toEqual(20)
  expect(res._duration).toEqual(8 * 60)
  expect(res._flank).toEqual(Flank.Both)
  expect(res._flank).toEqual('Both')
  expect(res._key).toEqual('Hand Crew')
  expect(res._baseCost).toEqual(1000)
  expect(res._hourCost).toEqual(2000)

  expect(() => { ContainResource('Hand Crew 2', 60, 20, 8 * 60, 1000, 2000, 'BadFlank') }).toThrow()
})
