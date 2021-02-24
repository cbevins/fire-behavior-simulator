import * as FireEllipse from '../FireEllipse.js'

test('1: FireEllipse.perimeter(len, wid) edge cases', () => {
  expect(FireEllipse.perimeter(0,0)).toEqual(0)
  expect(FireEllipse.perimeter(1,-1)).toEqual(0)
  expect(FireEllipse.perimeter(-1,1)).toEqual(0)
  expect(FireEllipse.perimeter(10,-10)).toEqual(0)
})

