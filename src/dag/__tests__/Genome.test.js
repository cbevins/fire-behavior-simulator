import { CompiledGenome as Genome } from '@cbevins/fire-behavior-genome'

test('1: Imported CompiledGenome properties', () => {
  expect(Array.isArray(Genome.literalArgsArray)).toEqual(true)
  expect(Genome.literalArgsArray.length).toEqual(68)
  expect(Array.isArray(Genome.methodRefsArray)).toEqual(true)
  expect(Genome.methodRefsArray.length).toEqual(219)
  expect(Array.isArray(Genome.genesArray)).toEqual(true)
  expect(Genome.genesArray.length).toEqual(1224)
})
