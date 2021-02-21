import { VariantMap } from './VariantMap.js'

test('VariantMap()', () => {
  const vmap = new VariantMap()
  expect(vmap.size).toEqual(109)
})
