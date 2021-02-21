import { ArrayIndex, Variable } from './index.js'

test('new Index() default constructor', () => {
  const v = new ArrayIndex('Weights')
  expect(v.defaultValue()).toEqual(0)
  expect(v.displayString(123)).toEqual('123')
  expect(v.displayValue(123)).toEqual('123')
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(0)
})

test('new Index() custom constructor', () => {
  const v = new ArrayIndex('Weights', 6)
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(5)
})

test('new Index() Errors', () => {
  expect(() => new ArrayIndex('Weights', 'aString')).toThrow()
  expect(() => new ArrayIndex('Weights', false)).toThrow()
  expect(() => new ArrayIndex('Weights', -1)).toThrow()
  expect(() => new ArrayIndex('Weights', 3.14159)).toThrow()
})
