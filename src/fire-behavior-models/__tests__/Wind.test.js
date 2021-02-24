import { Wind } from '../index.js'

test('1: Wind.speedAt20ftFromMidflame (wsmid, mwaf) edge cases', () => {
  expect(Wind.speedAt20ftFromMidflame(100, 1)).toEqual(100)
  expect(Wind.speedAt20ftFromMidflame(100, 0)).toEqual(100)
  expect(Wind.speedAt20ftFromMidflame(100, -1)).toEqual(100)
})
