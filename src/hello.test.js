import { hello, world } from './index.js'

test('Returns the const string \'World\'', () => {
  expect(world).toEqual('World')
})

test('Returns the constructed string \'Hello, World!\'', () => {
  expect(hello()).toEqual('Hello, World!')
})
