/* eslint-disable no-unused-vars */
import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { FuelMoisture } from '../../../fire-behavior-models/index.js'

const value = DagJest.value
expect.extend({ value })

test('1: Fosberg Fuel Moisture Tables', () => {
  const sim = new Sim('fosberg')
  const dag = sim.getDag('fosberg')

  // Step 1 - configuration
  dag.configure([['configure.fuel.moisture', 'fosberg']])

  // Step 2 - selection
  dag.select([
    'site.moisture.dead.fosberg.tl1h'
  ])
  // Get required inputs
  const requiredInputs = dag.requiredInputNodes()
  console.log(requiredInputs.map(node => node.key()))
  expect(requiredInputs).toHaveLength(8)
  expect(requiredInputs).toContain(dag.node('site.temperature.air'))
  expect(requiredInputs).toContain(dag.node('site.temperature.relativeHumidity'))
})
