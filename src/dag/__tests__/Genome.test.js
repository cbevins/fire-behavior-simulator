import { CompiledGenome } from '../../fire-behavior-genome/index.js'

test('1: Imported CompiledGenome properties', () => {
  expect(Array.isArray(CompiledGenome.literalArgsArray)).toEqual(true)
  expect(CompiledGenome.literalArgsArray).toHaveLength(68)
  expect(Array.isArray(CompiledGenome.methodRefsArray)).toEqual(true)
  expect(CompiledGenome.methodRefsArray).toHaveLength(219)
  expect(Array.isArray(CompiledGenome.genesArray)).toEqual(true)
  expect(CompiledGenome.genesArray).toHaveLength(1224)
})
