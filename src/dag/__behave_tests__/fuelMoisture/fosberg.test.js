import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

test('1: Fosberg Fuel Moisture Tables', () => {
  const sim = new Sim('fosberg')
  const dag = sim.getDag('fosberg')
  dag.configure([['configure.fuel.moisture', 'fosberg']])
  dag.select(['site.moisture.dead.fosberg.reference'])

  // Get required inputs
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(2)
  expect(requiredInputs).toContain(dag.node('site.temperature.air'))
  expect(requiredInputs).toContain(dag.node('site.temperature.relativeHumidity'))

  dag.input([
    ['site.temperature.air', [60]],
    ['site.temperature.relativeHumidity', [0.54]]
  ]).run()
  expect(dag.node('site.moisture.dead.fosberg.reference').value()).toEqual(0.07)
})

test('2: Fosberg Fuel Moisture Tables', () => {
  const sim = new Sim('fosberg')
  const dag = sim.getDag('fosberg')

  dag.select(['site.moisture.dead.fosberg.correction'])
  const requiredInputs = dag.requiredInputNodes()
  console.log(requiredInputs.map(node => node.key()))
  expect(requiredInputs).toHaveLength(6)
  expect(requiredInputs).toContain(dag.node('site.temperature.shading'))
  expect(requiredInputs).toContain(dag.node('site.slope.direction.aspect'))
  expect(requiredInputs).toContain(dag.node('site.slope.steepness.ratio'))
  expect(requiredInputs).toContain(dag.node('site.date.month'))
  expect(requiredInputs).toContain(dag.node('site.time.hour'))
  expect(requiredInputs).toContain(dag.node('site.location.elevation.diff'))

  dag.input([
    ['site.date.month', [2]],
    ['site.temperature.shading', [0.1]],
    ['site.slope.direction.aspect', [180]],
    ['site.slope.steepness.ratio', [0.2]],
    ['site.time.hour', [13]],
    ['site.location.elevation.diff', [0]]
  ]).run()
  expect(dag.node('site.moisture.dead.fosberg.correction').value()).toEqual(0.01)
})

test('3: Fosberg Fuel Moisture Tables - fm1', () => {
  const sim = new Sim('fosberg')
  const dag = sim.getDag('fosberg')

  dag.select([
    'site.moisture.dead.fosberg.reference',
    'site.moisture.dead.fosberg.correction',
    'site.moisture.dead.fosberg.tl1h',
    'site.moisture.dead.fosberg.tl10h',
    'site.moisture.dead.fosberg.tl100h'
  ])
  const requiredInputs = dag.requiredInputNodes()
  console.log(requiredInputs.map(node => node.key()))
  expect(requiredInputs).toHaveLength(8)
  expect(requiredInputs).toContain(dag.node('site.temperature.air'))
  expect(requiredInputs).toContain(dag.node('site.temperature.relativeHumidity'))
  expect(requiredInputs).toContain(dag.node('site.temperature.shading'))
  expect(requiredInputs).toContain(dag.node('site.slope.direction.aspect'))
  expect(requiredInputs).toContain(dag.node('site.slope.steepness.ratio'))
  expect(requiredInputs).toContain(dag.node('site.date.month'))
  expect(requiredInputs).toContain(dag.node('site.time.hour'))
  expect(requiredInputs).toContain(dag.node('site.location.elevation.diff'))

  dag.input([
    ['site.temperature.air', [60]],
    ['site.temperature.relativeHumidity', [0.54]],
    ['site.date.month', [11]],
    ['site.temperature.shading', [0.9]],
    ['site.slope.direction.aspect', [0]],
    ['site.slope.steepness.ratio', [0.4]],
    ['site.time.hour', [8]],
    ['site.location.elevation.diff', [1001]]
  ]).run()
  expect(dag.node('site.moisture.dead.fosberg.reference').value()).toEqual(0.07)
  expect(dag.node('site.moisture.dead.fosberg.correction').value()).toEqual(0.06)
  expect(dag.node('site.moisture.dead.fosberg.tl1h').value()).toEqual(0.13)
  expect(dag.node('site.moisture.dead.fosberg.tl10h').value()).toEqual(0.15)
  expect(dag.node('site.moisture.dead.fosberg.tl100h').value()).toEqual(0.17)
})
