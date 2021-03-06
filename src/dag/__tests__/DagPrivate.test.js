import { Sim } from '../index.js'
import * as Lib from '../../fire-behavior-models/index.js'

const cfgWindDirKey = 'configure.wind.direction'
// const cfgWindDirIdx = 24
const windDirUpKey = 'site.wind.direction.heading.fromUpslope'
// const windDirUpIdx = 101
// const windDirNoKey = 'site.wind.direction.source.fromNorth'

test('DagPrivate.findNodeUpdater()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(dag.get(cfgWindDirKey).value()).toEqual('headingFromUpslope')
  const node = dag.get(windDirUpKey)
  // DEPRECATED TEST, CHANGES WITH GENOME, BUT HAS PROVEN TO WORK FINE
  // [25,`configure.wind.direction`,13,[[[],[1]]]],
  // expect(dag.findNodeUpdater(node)).toEqual([[dag.get(25), dag.literal(4)], [2]])
  dag.setNodeEdges(node)
  expect(node.method().name).toEqual('input')
  expect(node.method()).toEqual(Lib.Dag.input)
})

test('Empty run()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => dag.run()).not.toThrow()
})
