import { CompiledGenome } from '../../fire-behavior-genome/index.js'

test('1: Imported CompiledGenome properties', () => {
  expect(Array.isArray(CompiledGenome.literalArgsArray)).toEqual(true)
  expect(CompiledGenome.literalArgsArray.length).toEqual(68)
  expect(Array.isArray(CompiledGenome.methodRefsArray)).toEqual(true)
  expect(CompiledGenome.methodRefsArray.length).toEqual(219)
  expect(Array.isArray(CompiledGenome.genesArray)).toEqual(true)
  expect(CompiledGenome.genesArray.length).toEqual(1224)
})
