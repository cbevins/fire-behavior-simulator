import { Sim } from '../index.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'
const catalogKey = 'surface.primary.fuel.model.catalogKey'

test('Dag.input() error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const headRosNode = dag.node(headRosKey)
  dag.select([headRosNode])

  expect(() => dag.input()).toThrow()
  expect(() => dag.input(true)).toThrow()
  expect(() => dag.input(1)).toThrow()
  expect(() => dag.input('string')).toThrow()
  expect(() => dag.input({})).toThrow()

  expect(() => dag.input([])).not.toThrow()
  expect(() => dag.input([1])).toThrow()
  expect(() => dag.input([1, 1])).toThrow()
  expect(() => dag.input([1, [1]])).toThrow()

  expect(dag._input.has(dag.node(catalogKey))).toEqual(false)

  expect(() => dag.input([[catalogKey, ['10']]])).not.toThrow()
  expect(() => dag.input([[catalogKey, '10']])).not.toThrow()

  expect(dag._input.has(dag.node(catalogKey))).toEqual(true)
  expect(dag._input.get(dag.node(catalogKey))).toEqual(['10'])

  expect(() => dag.input([[catalogKey, ['10', 'gs4']]])).not.toThrow()
  expect(dag._input.get(dag.node(catalogKey))).toEqual(['10', 'gs4'])

  dag.clearInputs()
  expect(dag._input.has(dag.node(catalogKey))).toEqual(false)
  expect(dag._input.size).toEqual(0)
})