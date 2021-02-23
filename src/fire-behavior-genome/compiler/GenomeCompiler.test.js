import {GenomeCompiler} from './GenomeCompiler.js'
import { Genome } from '../genome.js'
import { dict } from './dictionary.js'

test('GenomeCompiler', () => {
  const compiler = new GenomeCompiler(dict)
  const str = compiler.run(Genome)
  expect(str.length>90000)
})