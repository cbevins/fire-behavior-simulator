/* eslint-disable no-unused-vars */
import { Sim } from '../../index.js'
import * as Test from './fm010fm124.data.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const configFm010Fm124 = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][2]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][1]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
]

const inputFm010Fm124 = [
  ['site.fire.time.sinceIgnition', [60]],
  ['site.fire.vector.fromNorth', [45]],
  ['site.map.scale', [24000]],
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.dead.category', [0.05]],
  ['site.moisture.live.herb', [0.5]],
  ['site.moisture.live.stem', [1.5]],
  ['site.moisture.live.category', [1.5]],
  ['site.slope.direction.aspect', [180]],
  ['site.slope.steepness.ratio', [0.25]],
  ['site.temperature.air', [95]],
  ['site.terrain.spotSourceLocation', ['ridgeTop']],
  ['site.terrain.ridgeValleyDistance', [5000]],
  ['site.terrain.ridgeValleyElevation', [1000]],
  ['site.wind.direction.source.fromNorth', [270]],
  ['site.windSpeedAdjustmentFactor', [0.5]],
  ['site.wind.speed.atMidflame', [880]],
  ['surface.primary.fuel.model.catalogKey', ['10']],
  ['surface.secondary.fuel.model.catalogKey', ['124']],
  ['surface.weighted.fire.primaryCover', [0.6]]
]

test('1: Fm010, FM124, and Weighted results validated against BP6', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Step 1 - configuration
  dag.configure(configFm010Fm124).run() // Standard configuration

  // Step 2 - selection
  dag.select(Test.primarySelections())
  dag.select(Test.secondarySelections())
  dag.select(Test.weightedSelections())

  // Get required inputs and ensure they are included in the provided input array
  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs:'))
  const testInputs = [...inputFm010Fm124] // Array of [<nodeKey>-<true>] pairs
  const testList = testInputs.map(input => dag.get(input[0])) // Simple array of input Node references
  requiredInputs.forEach(requiredInput => {
    // console.log(requiredInput.node.key)
    expect(testList).toContain(requiredInput)
  })

  // Ensure the required configuration nodes are as expected
  const configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(11)
  // console.log(DagJest.arrayList(configNodes, 'Config Nodes'))

  // Set required input values and ensure results are as expected
  dag.input(testInputs).run()

  // Validate FM010 primary fuel results
  const primaryResults = Test.primaryResults()
  primaryResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })

  // Validate FM124 secondary fuel results
  const secondaryResults = Test.secondaryResults()
  secondaryResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })

  // Validate weighted fire results
  const weightedResults = Test.weightedResults()
  weightedResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })
})
