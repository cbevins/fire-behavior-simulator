import { VariantMap } from './VariantMap.js'

test('VariantMap()', () => {
  const vmap = new VariantMap()
  expect(vmap.size).toEqual(127) // NOTE: this will change when the genome changes!!
})
