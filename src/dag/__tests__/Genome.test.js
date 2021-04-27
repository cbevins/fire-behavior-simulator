import { CompiledGenome } from '../../fire-behavior-genome/index.js'

test('1: Imported CompiledGenome properties', () => {
  expect(Array.isArray(CompiledGenome.literalArgsArray)).toEqual(true)
  expect(CompiledGenome.literalArgsArray).toHaveLength(71) // NOTE: this will change when the genome changes!!
  expect(Array.isArray(CompiledGenome.methodRefsArray)).toEqual(true)
  expect(CompiledGenome.methodRefsArray).toHaveLength(228) // NOTE: this will change when the genome changes!!
  expect(Array.isArray(CompiledGenome.genesArray)).toEqual(true)
  expect(CompiledGenome.genesArray).toHaveLength(1253) // NOTE: this will change when the genome changes!!
})
