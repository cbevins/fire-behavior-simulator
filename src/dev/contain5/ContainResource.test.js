import { ContainResource } from './ContainResource.js'
import { Flank } from './ContainSegment.js'

test('1: new ContainResource()', () => {
  const key = 'Hand Crew'
  const arrival = 60
  const production = 20
  const duration = 8 * 60
  const baseCost = 1000
  const hourCost = 2000
  const flank = Flank.Both
  const res = new ContainResource(key, arrival, production, duration, baseCost, hourCost, flank)
  expect(res._arrival).toEqual(arrival)
  expect(res._arrival).toEqual(60)
  expect(res._production).toEqual(production)
  expect(res._production).toEqual(20)
  expect(res._duration).toEqual(duration)
  expect(res._duration).toEqual(8 * 60)
  expect(res._flank).toEqual(flank)
  expect(res._flank).toEqual('Both')
  expect(res._key).toEqual(key)
  expect(res._key).toEqual('Hand Crew')
  expect(res._baseCost).toEqual(baseCost)
  expect(res._baseCost).toEqual(1000)
  expect(res._hourCost).toEqual(hourCost)
  expect(res._hourCost).toEqual(2000)

  expect(() => new ContainResource(key, arrival, production, duration, baseCost, hourCost, 'junk')).toThrow()
})
