import { VariantMap } from './VariantMap.js'

test('VariantMap()', () => {
  const vmap = new VariantMap()
  expect(vmap.size).toEqual(128) // NOTE: this will change when the genome changes!!
})
