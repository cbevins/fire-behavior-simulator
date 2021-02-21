import { Count, Variable } from './index.js'

test('new Count() default constructor', () => {
  const v = new Count('TorchingRrees')
  expect(v.defaultValue()).toEqual(0)
  expect(v.displayString(123)).toEqual('123')
  expect(v.displayValue(123)).toEqual('123')
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(Number.MAX_VALUE)
})

test('new Count() custom constructor', () => {
  const v = new Count('TorchingTrees', 1, 3)
  expect(v.defaultValue()).toEqual(1)
  expect(v.minimumValue()).toEqual(0)
  expect(v.maximumValue()).toEqual(3)
})

test('new Count() Errors', () => {
  expect(() => new Count('TorchingTrees', 'aString')).toThrow()
  expect(() => new Count('TorchingTrees', 1, 'aString')).toThrow()
  expect(() => new Count('TorchingTrees', 1, -1)).toThrow()
  expect(() => new Count('TorchingTrees', -1)).toThrow()
  expect(() => new Count('TorchingTrees', 100, 1)).toThrow()
  expect(() => new Count('TorchingTrees', 1.1)).toThrow()
  expect(() => new Count('TorchingTrees', 1, 10.1)).toThrow()
  expect(() => new Count('TorchingTrees', 1.0, 10.0)).not.toThrow()
})
