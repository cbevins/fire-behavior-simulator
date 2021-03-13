import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { configDefault } from '../../utils/configs.js'

const value = DagJest.value
expect.extend({ value })

test('1: Slope direction and steepness', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(configDefault)

  const cfgSlp = dag.get('configure.slope.steepness')
  const aspect = dag.get('site.slope.direction.aspect')
  const upslope = dag.get('site.slope.direction.upslope')
  const ratio = dag.get('site.slope.steepness.ratio')
  const degrees = dag.get('site.slope.steepness.degrees')
  const scale = dag.get('site.map.scale')
  const interval = dag.get('site.map.interval')
  const contours = dag.get('site.map.contours')
  const distance = dag.get('site.map.distance')

  // Start with just aspect selected
  dag.select([aspect])
  let selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(1)
  expect(selectedNodes).toContain(aspect)

  let configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(0)

  let requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(1)
  expect(requiredNodes).toContain(aspect)

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toContain(aspect)

  // Add upslope to selected list
  dag.select([upslope])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(2)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(2)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(aspect)
  dag.input([[aspect, 45]]).run()
  expect(upslope.value()).toEqual(225)

  // Add ratio to selected list
  dag.select([ratio])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(3)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(4)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)
  expect(requiredNodes).toContain(ratio)
  expect(requiredNodes).toContain(cfgSlp)

  configNodes = dag.requiredConfigNodes()
  expect(cfgSlp._is._required).toEqual(true)
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSlp)
  expect(cfgSlp.value()).toEqual('ratio')

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(ratio)
  dag.input([
    [aspect, 90],
    [ratio, 1.0]
  ]).run()
  expect(aspect.value()).toEqual(90)
  expect(upslope.value()).toEqual(270)
  expect(ratio.value()).toEqual(1)

  // Add degrees to selected list
  dag.select([degrees])
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(5)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(upslope)
  expect(requiredNodes).toContain(ratio)
  expect(requiredNodes).toContain(cfgSlp)
  expect(requiredNodes).toContain(degrees)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSlp)
  expect(cfgSlp.value()).toEqual('ratio')

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(ratio)
  dag.input([
    [aspect, 270],
    [ratio, 1.0]
  ]).run()
  expect(aspect.value()).toEqual(270)
  expect(upslope.value()).toEqual(90)
  expect(ratio.value()).toEqual(1)
  expect(degrees.value()).toEqual(45)

  // Configure for degrees input
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  dag.configure([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][1]]
  ])
  expect(cfgSlp.value()).toEqual('degrees')
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(degrees)
  dag.input([
    [aspect, 270],
    [degrees, 45]
  ]).run()
  expect(aspect.value()).toEqual(270)
  expect(upslope.value()).toEqual(90)
  expect(degrees.value()).toEqual(45)
  expect(ratio.value()).toBeCloseTo(1, 12)

  // Configure for map input
  dag.configure([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][2]]
  ])
  expect(cfgSlp.value()).toEqual('map')

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)

  requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Required Nodes'))

  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Input Nodes'))

  expect(inputNodes).toHaveLength(5)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(scale)
  expect(inputNodes).toContain(interval)
  expect(inputNodes).toContain(contours)
  expect(inputNodes).toContain(distance)
  dag.input([
    [aspect, 270],
    [scale, 24000],
    [interval, 20],
    [contours, 5],
    [distance, 1 / 12]
  ]).run()
  expect(aspect.value()).toEqual(270)
  expect(upslope.value()).toEqual(90)
  expect(scale.value()).toEqual(24000)
  expect(interval.value()).toEqual(20)
  expect(contours.value()).toEqual(5)
  expect(distance.value()).toEqual(1 / 12)
  expect(ratio.value()).toBeCloseTo(0.05, 12)
  expect(degrees.value()).toBeCloseTo(2.862405226, 9)
})

test('2: Slope from map', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(configDefault)
  dag.configure([
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][2]]
  ])
  const cfgSlp = dag.get('configure.slope.steepness')
  const aspect = dag.get('site.slope.direction.aspect')
  const upslope = dag.get('site.slope.direction.upslope')
  const ratio = dag.get('site.slope.steepness.ratio')
  const degrees = dag.get('site.slope.steepness.degrees')
  const scale = dag.get('site.map.scale')
  const interval = dag.get('site.map.interval')
  const contours = dag.get('site.map.contours')
  const distance = dag.get('site.map.distance')

  expect(cfgSlp.value()).toEqual('map')
  dag.select([
    ratio,
    aspect,
    upslope,
    degrees
  ])
  const selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(ratio)
  expect(selectedNodes).toContain(degrees)
  // const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Required Nodes'))

  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Input Nodes'))
  expect(inputNodes).toHaveLength(5)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(scale)
  expect(inputNodes).toContain(interval)
  expect(inputNodes).toContain(contours)
  expect(inputNodes).toContain(distance)
  dag.input([
    [aspect, 270],
    [scale, 24000],
    [interval, 20],
    [contours, 5],
    [distance, 1 / 12]
  ]).run()
  expect(aspect.value()).toEqual(270)
  expect(upslope.value()).toEqual(90)
  expect(scale.value()).toEqual(24000)
  expect(interval.value()).toEqual(20)
  expect(contours.value()).toEqual(5)
  expect(distance.value()).toEqual(1 / 12)
  expect(ratio.value()).toBeCloseTo(0.05, 12)
  expect(degrees.value()).toBeCloseTo(2.862405226, 9)

  const requiredConfigNodes = dag.requiredConfigNodes()
  expect(requiredConfigNodes).toHaveLength(1)
  expect(requiredConfigNodes).toContain(cfgSlp)
})
