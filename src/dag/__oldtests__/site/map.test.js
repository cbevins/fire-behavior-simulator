import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { configMinimalInput } from '../../utils/configs.js'

const value = DagJest.value
expect.extend({ value })

const Inputs = [
  ['site.map.scale', [24000]],
  ['site.map.interval', [20]],
  ['site.map.contours', [5]],
  ['site.map.distance', [1 / 12]]
]

const Results = [
  ['site.map.factor', 1 / 24000, 12],
  ['site.map.reach', 2000, 12],
  ['site.map.rise', 100, 12],
  ['site.map.slope.ratio', 0.05, 12]
]

test('1: Map test', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(configMinimalInput)

  dag.select(Results.map(node => node[0]))
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs.length).toEqual(Inputs.length)
  Inputs.forEach(input => { expect(requiredInputs).toContain(dag.get(input[0])) })

  dag.input(Inputs).run()
  Results.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})
