import { ContainResource } from './ContainResource.js'
import { Flank } from './Contain.js'

test('1: new ContainResource()', () => {
  const res = new ContainResource(60, 20, 8 * 60, Flank.Left, 'Hand Crew', 1000, 2000)
  expect(res._arrival).toEqual(60)
  expect(res._production).toEqual(20)
  expect(res._duration).toEqual(8 * 60)
  expect(res._flank).toEqual(Flank.Left)
  expect(res._flank).toEqual('Left')
  expect(res._desc).toEqual('Hand Crew')
  expect(res._baseCost).toEqual(1000)
  expect(res._hourCost).toEqual(2000)

  expect(() => { ContainResource(60, 20, 8 * 60, 'junk', 'Hand Crew', 1000, 2000) }).toThrow()
})
