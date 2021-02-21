/* eslint-disable no-undef, no-prototype-builtins */
import { Calc } from '../index.js'

test('1: Calc divide()', () => {
  expect(Calc.divide()).toEqual(NaN)
  expect(Calc.divide(null)).toEqual(NaN)
  expect(Calc.divide(0)).toEqual(0)
  expect(Calc.divide(0, 0)).toEqual(0)
  expect(Calc.divide(1)).toEqual(1)
  expect(Calc.divide(1, 0)).toEqual(0)
  expect(Calc.divide(-1)).toEqual(-1)
  expect(Calc.divide(-1, 0)).toEqual(0)
  expect(Calc.divide(4, 2)).toEqual(2)
  expect(Calc.divide(120, 4, 3, 2, 1)).toEqual(5)
  expect(Calc.divide(120, 4, 3, 2, 1, 0)).toEqual(0)
})

test('Calc fraction()', () => {
  expect(Calc.fraction(0)).toEqual(0)
  expect(Calc.fraction(1)).toEqual(1)
  expect(Calc.fraction(-0)).toEqual(0)
  expect(Calc.fraction(0.5)).toEqual(0.5)
  expect(Calc.fraction(2)).toEqual(1)
  expect(Calc.fraction(-1)).toEqual(0)
})

test('2: Calc greaterThan()', () => {
  expect(Calc.greaterThan(1, 2)).toEqual(false)
  expect(Calc.greaterThan(3, 2)).toEqual(true)
  expect(Calc.greaterThan(2, 2)).toEqual(false)
})

test('3: Calc multiply()', () => {
  expect(Calc.multiply()).toEqual(1)
  expect(Calc.multiply(0)).toEqual(0)
  expect(Calc.multiply(null)).toEqual(0)
  expect(Calc.multiply(1)).toEqual(1)
  expect(Calc.multiply(-1)).toEqual(-1)
  expect(Calc.multiply(2, 3)).toEqual(6)
  expect(Calc.multiply(1, 2, 3, 4, 5)).toEqual(120)
  expect(Calc.multiply(1, 2, 3, 4, 5, 0)).toEqual(0)
})

test('4: Calc or()', () => {
  expect(Calc.or(true, true)).toEqual(true)
  expect(Calc.or(true, false)).toEqual(true)
  expect(Calc.or(false, true)).toEqual(true)
  expect(Calc.or(false, false)).toEqual(false)
})

test('5: Calc positive()', () => {
  expect(Calc.positive(-1)).toEqual(0)
  expect(Calc.positive(0)).toEqual(0)
  expect(Calc.positive(1)).toEqual(1)
  expect(Calc.positive(99)).toEqual(99)
})

test('6: Calc subtract()', () => {
  expect(Calc.subtract()).toEqual(NaN)
  expect(Calc.subtract(0)).toEqual(0)
  expect(Calc.subtract(null)).toEqual(0)
  expect(Calc.subtract(1)).toEqual(1)
  expect(Calc.subtract(-1)).toEqual(-1)
  expect(Calc.subtract(1, 2)).toEqual(-1)
  expect(Calc.subtract(1, 2, 3, 4, 5)).toEqual(-13)
  expect(Calc.subtract(1, -2)).toEqual(3)
})

test('7: Calc sum()', () => {
  expect(Calc.sum()).toEqual(0)
  expect(Calc.sum(0)).toEqual(0)
  expect(Calc.sum(null)).toEqual(0)
  expect(Calc.sum(1)).toEqual(1)
  expect(Calc.sum(-1)).toEqual(-1)
  expect(Calc.sum(1, 2)).toEqual(3)
  expect(Calc.sum(1, 2, 3, 4, 5)).toEqual(15)
})

test('8: Calc sumOfProducts()', () => {
  expect(Calc.sumOfProducts()).toEqual(0)
  expect(Calc.sumOfProducts(0)).toEqual(0)
  expect(Calc.sumOfProducts(null)).toEqual(0)
  expect(Calc.sumOfProducts(1)).toEqual(0)
  expect(Calc.sumOfProducts(-1)).toEqual(0)
  expect(Calc.sumOfProducts(1, 2)).toEqual(2)
  expect(Calc.sumOfProducts(1, 2, 3, 4)).toEqual(11) // 1*3 + 2*4
  expect(Calc.sumOfProducts(1, 2, 3, 4, 5)).toEqual(11) // 1*3 + 2*4
  expect(Calc.sumOfProducts(1, 2, 3, 4, 5, 6)).toEqual(32) // 1*4 + 2*5 + 3*6
  expect(Calc.sumOfProducts(1, 2, 3, 0, 4, 5, 6, 99)).toEqual(32) // 1*4 + 2*5 + 3*6 + 0*99
})
