import { Sim } from '../index.js'
import { CompiledGenome as Genome } from '../../fire-behavior-genome/index.js'

const nodeLength = Genome.genesArray.length // 1224

test('new Dag()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(dag.requiredConfigNodes()).toEqual([])
  expect(dag.requiredInputNodes()).toEqual([])
  expect(dag.requiredNodes()).toEqual([])
  expect(dag.selectedNodes()).toEqual([])
  expect(dag.sortedNodes().length).toEqual(nodeLength)
})
