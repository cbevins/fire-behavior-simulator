import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
])

// Wind configuration Nodes
const cfgDirection = dag.get('configure.wind.direction')
const cfgSpeed = dag.get('configure.wind.speed')
const cfgWaf = dag.get('configure.fuel.windSpeedAdjustmentFactor')

// 'site.wind.speed.*' Nodes
const at10m = dag.get('site.wind.speed.at10m')
const at20ft = dag.get('site.wind.speed.at20ft')
const atMidflame = dag.get('site.wind.speed.atMidflame')
const waf = dag.get('site.windSpeedAdjustmentFactor')

// 'site.wind.direction.*' Nodes
const headingFromNorth = dag.get('site.wind.direction.heading.fromNorth')
const headingFromUpslope = dag.get('site.wind.direction.heading.fromUpslope')
const sourceFromNorth = dag.get('site.wind.direction.source.fromNorth')
const sourceFromUpslope = dag.get('site.wind.direction.source.fromUpslope')

// 'site.slope.direction.*' Nodes
const aspect = dag.get('site.slope.direction.aspect')
const upslope = dag.get('site.slope.direction.upslope')

test('1: Wind speed and direction configurations', () => {
  dag.configure([
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
  ])
  expect(dag.get('configure.wind.direction').value()).toEqual('headingFromUpslope')
  expect(dag.get('configure.wind.speed').value()).toEqual('at20ft')

  expect(dag.get('site.wind.direction.heading.fromUpslope').value()).toEqual(0)
  expect(dag.get('site.wind.direction.heading.fromNorth').value()).toEqual(0)
  // Not yet selected, so still 0
  expect(dag.get('site.wind.direction.source.fromNorth').value()).toEqual(0)
  // Not yet selected, so still 0
  expect(dag.get('site.wind.direction.source.fromUpslope').value()).toEqual(0)
  expect(dag.get('site.wind.speed.at10m').value()).toEqual(0)
  expect(dag.get('site.wind.speed.at20ft').value()).toEqual(0)
  expect(dag.get('site.wind.speed.atMidflame').value()).toEqual(0)

  let selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(0)

  // Start with just wind.speed.at20ft selected
  dag.select(['site.wind.speed.at20ft']).run()
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(1)
  expect(selectedNodes).toContain(at20ft)

  let configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  let requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(2)
  expect(requiredNodes).toContain(at20ft)
  expect(requiredNodes).toContain(cfgSpeed)

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toContain(at20ft)

  dag.input([[at20ft, 12.3]]).run()
  expect(at20ft.value()).toEqual(12.3)
  expect(at10m.value()).toEqual(0)

  // Add at10m as selected
  dag.select([at10m]).run()
  expect(at10m.value()).toEqual(12.3 * 1.13)

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(2)
  expect(selectedNodes).toContain(at20ft)
  expect(selectedNodes).toContain(at10m)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(3)
  expect(requiredNodes).toContain(at20ft)
  expect(requiredNodes).toContain(at10m)
  expect(requiredNodes).toContain(cfgSpeed)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(at20ft)

  dag.input([[at20ft, 10]]).run()
  expect(at20ft.value()).toEqual(10)
  expect(at10m.value()).toBeCloseTo(11.3, 12)
  // at10m is NOT an input, so should have no effect
  dag.input([[at10m, 1234]]).run()
  expect(at20ft.value()).toEqual(10)
  expect(at10m.value()).toBeCloseTo(11.3, 12)

  // Change wind speed configuration to 'at10m'
  dag.configure([[cfgSpeed, 'at10m']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(at10m)
  // at10m IS now an input, so should have effect
  dag.input([[at10m, 123]]).run()
  expect(at10m.value()).toEqual(123)
  expect(at20ft.value()).toEqual(123 / 1.13)

  // Add headingFromUpslope as a selected leaf
  dag.select([headingFromUpslope]).run()
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(3)
  expect(selectedNodes).toContain(at20ft)
  expect(selectedNodes).toContain(at10m)
  expect(selectedNodes).toContain(headingFromUpslope)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(2)
  expect(configNodes).toContain(cfgSpeed)
  expect(configNodes).toContain(cfgDirection)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(5)
  expect(requiredNodes).toContain(at20ft)
  expect(requiredNodes).toContain(at10m)
  expect(requiredNodes).toContain(headingFromUpslope)
  expect(requiredNodes).toContain(cfgSpeed)
  expect(requiredNodes).toContain(cfgDirection)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(at10m)

  dag.input([
    [at10m, 11.3],
    [headingFromUpslope, 45]
  ]).run()
  expect(at10m.value()).toEqual(11.3)
  expect(at20ft.value()).toBeCloseTo(10, 12)
  expect(headingFromUpslope.value()).toEqual(45)

  // Add sourceFromUpslope as selected
  dag.select([sourceFromUpslope]).run()
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(at20ft)
  expect(selectedNodes).toContain(at10m)
  expect(selectedNodes).toContain(headingFromUpslope)
  expect(selectedNodes).toContain(sourceFromUpslope)

  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(6)
  expect(requiredNodes).toContain(at20ft)
  expect(requiredNodes).toContain(at10m)
  expect(requiredNodes).toContain(headingFromUpslope)
  expect(requiredNodes).toContain(sourceFromUpslope)
  expect(requiredNodes).toContain(cfgSpeed)
  expect(requiredNodes).toContain(cfgDirection)
  // Still just 2 inputs
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(at10m)
  expect(inputNodes).toContain(headingFromUpslope)

  expect(headingFromUpslope.value()).toEqual(45)
  expect(sourceFromUpslope.value()).toBeCloseTo(225, 12)

  // Change direction config to 'sourceFromNorth'
  dag.configure([[cfgDirection, 'sourceFromNorth']])
  // Still just 4 selected Nodes
  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(4)
  expect(selectedNodes).toContain(at20ft)
  expect(selectedNodes).toContain(at10m)
  expect(selectedNodes).toContain(headingFromUpslope)
  expect(selectedNodes).toContain(sourceFromUpslope)
  // But now sourceFromNorth is required (even if not selected)
  // as is the upslope direction
  requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(10)
  expect(requiredNodes).toContain(at20ft)
  expect(requiredNodes).toContain(at10m)
  expect(requiredNodes).toContain(headingFromUpslope)
  expect(requiredNodes).toContain(sourceFromUpslope)
  expect(requiredNodes).toContain(sourceFromNorth)
  expect(requiredNodes).toContain(headingFromNorth)
  expect(requiredNodes).toContain(upslope)
  expect(requiredNodes).toContain(aspect)
  expect(requiredNodes).toContain(cfgSpeed)
  expect(requiredNodes).toContain(cfgDirection)
  // Now requiredInputNodes 3 inputs
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(at10m)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(sourceFromNorth)
  dag.input([
    [aspect, 225],
    [sourceFromNorth, 90],
    [at10m, 30]
  ]).run()
  expect(aspect.value()).toEqual(225)
  expect(at10m.value()).toEqual(30)
  expect(at20ft.value()).toBeCloseTo(30 / 1.13, 12)
  expect(upslope.value()).toBeCloseTo(45, 12)
  expect(sourceFromNorth.value()).toEqual(90)
  expect(headingFromNorth.value()).toBeCloseTo(270, 12)
  expect(headingFromUpslope.value()).toBeCloseTo(225, 12)
  expect(sourceFromUpslope.value()).toBeCloseTo(45, 12)

  // Select remaining directions
  dag.select([
    aspect,
    sourceFromNorth,
    headingFromNorth
  ]).run()

  // Change wind direction config
  dag.configure([[cfgDirection, 'headingFromUpslope']])
  dag.input([[headingFromUpslope, 45]]).run()

  expect(aspect.value()).toEqual(225)
  expect(upslope.value()).toEqual(45)
  expect(headingFromUpslope.value()).toEqual(45)
  expect(sourceFromUpslope.value()).toBeCloseTo(225, 12)
  expect(headingFromNorth.value()).toBeCloseTo(90, 12)
  expect(sourceFromNorth.value()).toBeCloseTo(270, 12)
})

test('2: Wind directions', () => {
  const data = [
    // asp,  up, hdgUp, srcUp, hdgNo, srcNo
    [0, 180, 0, 180, 180, 0],
    [0, 180, 45, 225, 225, 45],
    [0, 180, 90, 270, 270, 90],
    [0, 180, 135, 315, 315, 135],
    [0, 180, 180, 0, 0, 180],
    [0, 180, 225, 45, 45, 225],
    [0, 180, 270, 90, 90, 270],
    [0, 180, 315, 135, 135, 315],
    [0, 180, 360, 180, 180, 0],

    [45, 225, 0, 180, 225, 45],
    [45, 225, 45, 225, 270, 90],
    [45, 225, 90, 270, 315, 135],
    [45, 225, 135, 315, 0, 180],
    [45, 225, 180, 0, 45, 225],
    [45, 225, 225, 45, 90, 270],
    [45, 225, 270, 90, 135, 315],
    [45, 225, 315, 135, 180, 0],
    [45, 225, 360, 180, 225, 45],

    [90, 270, 0, 180, 270, 90],
    [90, 270, 45, 225, 315, 135],
    [90, 270, 90, 270, 0, 180],
    [90, 270, 135, 315, 45, 225],
    [90, 270, 180, 0, 90, 270],
    [90, 270, 225, 45, 135, 315],
    [90, 270, 270, 90, 180, 0],
    [90, 270, 315, 135, 225, 45],
    [90, 270, 360, 180, 270, 90],

    [135, 315, 0, 180, 315, 135],
    [135, 315, 45, 225, 0, 180],
    [135, 315, 90, 270, 45, 225],
    [135, 315, 135, 315, 90, 270],
    [135, 315, 180, 0, 135, 315],
    [135, 315, 225, 45, 180, 0],
    [135, 315, 270, 90, 225, 45],
    [135, 315, 315, 135, 270, 90],
    [135, 315, 360, 180, 315, 135],

    [180, 0, 0, 180, 0, 180],
    [180, 0, 45, 225, 45, 225],
    [180, 0, 90, 270, 90, 270],
    [180, 0, 135, 315, 135, 315],
    [180, 0, 180, 0, 180, 0],
    [180, 0, 225, 45, 225, 45],
    [180, 0, 270, 90, 270, 90],
    [180, 0, 315, 135, 315, 135],
    [180, 0, 360, 180, 0, 180],
    //    [180, 0, -45, 135, 315, 135],

    [225, 45, 0, 180, 45, 225],
    [225, 45, 45, 225, 90, 270],
    [225, 45, 90, 270, 135, 315],
    [225, 45, 135, 315, 180, 0],
    [225, 45, 180, 0, 225, 45],
    [225, 45, 225, 45, 270, 90],
    [225, 45, 270, 90, 315, 135],
    [225, 45, 315, 135, 0, 180],
    [225, 45, 360, 180, 45, 225],

    [270, 90, 0, 180, 90, 270],
    [270, 90, 45, 225, 135, 315],
    [270, 90, 90, 270, 180, 0],
    [270, 90, 135, 315, 225, 45],
    [270, 90, 180, 0, 270, 90],
    [270, 90, 225, 45, 315, 135],
    [270, 90, 270, 90, 0, 180],
    [270, 90, 315, 135, 45, 225],
    [270, 90, 360, 180, 90, 270],

    [315, 135, 0, 180, 135, 315],
    [315, 135, 45, 225, 180, 0],
    [315, 135, 90, 270, 225, 45],
    [315, 135, 135, 315, 270, 90],
    [315, 135, 180, 0, 315, 135],
    [315, 135, 225, 45, 0, 180],
    [315, 135, 270, 90, 45, 225],
    [315, 135, 315, 135, 90, 270],
    [315, 135, 360, 180, 135, 315],

    [360, 180, 0, 180, 180, 0],
    [360, 180, 45, 225, 225, 45],
    [360, 180, 90, 270, 270, 90],
    [360, 180, 135, 315, 315, 135],
    [360, 180, 180, 0, 0, 180],
    [360, 180, 225, 45, 45, 225],
    [360, 180, 270, 90, 90, 270],
    [360, 180, 315, 135, 135, 315],
    [360, 180, 360, 180, 180, 0]
  ]
  dag.clearSelected()
  dag.configure([[cfgDirection, 'headingFromUpslope']])
  dag.select([
    aspect,
    upslope,
    sourceFromNorth,
    sourceFromUpslope,
    headingFromNorth,
    headingFromUpslope
  ]).run()

  expect(cfgDirection.value()).toEqual('headingFromUpslope')

  const selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(6)
  expect(selectedNodes).toContain(aspect)
  expect(selectedNodes).toContain(upslope)
  expect(selectedNodes).toContain(headingFromUpslope)
  expect(selectedNodes).toContain(headingFromNorth)
  expect(selectedNodes).toContain(sourceFromUpslope)
  expect(selectedNodes).toContain(sourceFromNorth)

  const configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgDirection)

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(headingFromUpslope)

  data.forEach(rec => {
    const [asp, up, hdgUp, srcUp, hdgNo, srcNo] = rec
    // console.log(asp, up, hdgUp, srcUp, hdgNo, srcNo)
    dag.input([
      [aspect, asp],
      [headingFromUpslope, hdgUp]
    ]).run()
    expect(aspect.value()).toBeCloseTo(asp, 12)
    expect(upslope.value()).toBeCloseTo(up, 12)
    expect(headingFromUpslope.value()).toBeCloseTo(hdgUp, 12)
    expect(headingFromNorth.value()).toBeCloseTo(hdgNo, 12)
    expect(sourceFromUpslope.value()).toBeCloseTo(srcUp, 12)
    expect(sourceFromNorth.value()).toBeCloseTo(srcNo, 12)
  })
})

test('3: Midflame wind speed and WAF', () => {
  dag.clearSelected()
  dag.configure([
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
  ])
  expect(cfgDirection.value()).toEqual('headingFromUpslope')
  expect(cfgSpeed.value()).toEqual('atMidflame')
  expect(cfgWaf.value()).toEqual('input')

  // Start with just wind speed at midflame height
  dag.select([atMidflame]).run()

  let selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(1)
  expect(selectedNodes).toContain(atMidflame)

  let configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(atMidflame)

  // If we select at20ft
  dag.select([at20ft]).run()

  selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(2)
  expect(selectedNodes).toContain(atMidflame)
  expect(selectedNodes).toContain(at20ft)

  configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(atMidflame)
  expect(inputNodes).toContain(waf)

  dag.input([
    [atMidflame, 10],
    [waf, 0.5]
  ]).run()
  expect(atMidflame.value()).toEqual(10)
  expect(waf.value()).toEqual(0.5)
  expect(at20ft.value()).toBeCloseTo(20, 12)

  // If we set cfgWaf to estimated, no effect
  dag.configure([[cfgWaf, 'estimated']])

  configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(atMidflame)
  expect(inputNodes).toContain(waf)
})

test('4: Midflame wind speed from input waf and at20ft', () => {
  dag.clearSelected()
  dag.configure([
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
  ])
  expect(cfgSpeed.value()).toEqual('at20ft')
  expect(cfgWaf.value()).toEqual('input')

  // Start with just wind speed at midflame height
  dag.select([atMidflame]).run()

  const selectedNodes = dag.selectedNodes()
  expect(selectedNodes).toHaveLength(1)
  expect(selectedNodes).toContain(atMidflame)

  const configNodes = dag.requiredConfigNodes()
  expect(configNodes).toHaveLength(1)
  expect(configNodes).toContain(cfgSpeed)

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(at20ft)
  expect(inputNodes).toContain(waf)

  dag.input([
    [at20ft, 10],
    [waf, 0.5]
  ]).run()
  expect(at20ft.value()).toEqual(10)
  expect(waf.value()).toEqual(0.5)
  expect(atMidflame.value()).toEqual(5)
})
