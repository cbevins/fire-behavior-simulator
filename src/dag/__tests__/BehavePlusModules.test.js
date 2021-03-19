/* eslint-disable jest/prefer-to-have-length */
import { Sim, BehavePlusModules } from '../index.js'
import * as DagJest from '../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const config = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
]

// const inputs = [
//   ['site.fire.time.sinceIgnition', [60]],
//   ['site.fire.vector.fromNorth', [45]],
//   ['site.map.scale', [24000]],
//   ['site.moisture.dead.tl1h', [0.01, 0.02, 0.03, 0.04, 0.05]],
//   ['site.moisture.dead.tl10h', [0.07]],
//   ['site.moisture.dead.tl100h', [0.09]],
//   ['site.moisture.dead.category', [0.05]],
//   ['site.moisture.live.herb', [0.5, 1, 1.5]],
//   ['site.moisture.live.stem', [1.5]],
//   ['site.moisture.live.category', [1.5]],
//   ['site.slope.direction.aspect', [180]],
//   ['site.slope.steepness.ratio', [0.25]],
//   ['site.temperature.air', [95]],
//   ['site.terrain.spotSourceLocation', ['ridgeTop']],
//   ['site.terrain.ridgeValleyDistance', [5000]],
//   ['site.terrain.ridgeValleyElevation', [1000]],
//   ['site.wind.direction.source.fromNorth', [270]],
//   ['site.windSpeedAdjustmentFactor', [0.5]],
//   ['site.wind.speed.atMidflame', [880]],
//   ['surface.primary.fuel.model.catalogKey', ['10', '124']],
//   ['surface.secondary.fuel.model.catalogKey', ['124']],
//   ['surface.weighted.fire.primaryCover', [0.6]]
// ]

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
// Impose the BehavePlus v6 Module system
const mod = new BehavePlusModules(dag)

test('1: By default, all module.* are \'active\' and no link.* are \'standAlone\'', () => {
  mod.moduleNodes().forEach(node => { expect(node.value()).toEqual('active') })
  mod.linkNodes().forEach(node => { expect(node.value()).not.toEqual('standAlone') })
  expect(dag.enabledNodes()).toHaveLength(dag.nodes().length)
})

test('2: moduleMembers()', () => {
  expect(mod.moduleMembers('junk')).toEqual([])
  expect(mod.moduleMembers('module.surfaceFire').length).toBeGreaterThan(100)
})

test('3: deactivate() then activate() restores state', () => {
  const allNodes = dag.nodes().length
  const surfaceFireNodes = mod.moduleMembers('module.surfaceFire').length
  const crownFireNodes = mod.moduleMembers('module.crownFire').length
  expect(dag.enabledNodes()).toHaveLength(allNodes)

  mod.deactivate(['module.surfaceFire'])
  expect(dag.node('module.surfaceFire').value()).toEqual('inactive')
  expect(dag.node('module.crownFire').value()).toEqual('active')
  expect(dag.node('surface.primary.fuel.model.catalogKey').isEnabled()).toEqual(false)
  expect(dag.enabledNodes().length).toEqual(allNodes - surfaceFireNodes)

  mod.activate(['module.surfaceFire'])
  expect(dag.node('module.surfaceFire').value()).toEqual('active')
  expect(dag.node('module.crownFire').value()).toEqual('active')
  expect(dag.node('surface.primary.fuel.model.catalogKey').isEnabled()).toEqual(true)
  expect(dag.enabledNodes()).toHaveLength(allNodes)

  mod.deactivate(['module.crownFire'])
  expect(dag.node('module.crownFire').value()).toEqual('inactive')
  expect(dag.node('module.surfaceFire').value()).toEqual('active')
  expect(dag.node('surface.primary.fuel.model.catalogKey').isEnabled()).toEqual(true)
  expect(dag.enabledNodes().length).toEqual(allNodes - crownFireNodes)

  mod.activate('module.crownFire', true)
  expect(dag.node('module.crownFire').value()).toEqual('active')
  expect(dag.node('module.surfaceFire').value()).toEqual('active')
  expect(dag.node('surface.primary.fuel.model.catalogKey').isEnabled()).toEqual(true)
  expect(dag.enabledNodes()).toHaveLength(allNodes)
})

test('4: deactivateAll(), then indivudally activate()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const mod = new BehavePlusModules(dag)
  dag.configure(config) // Standard configuration
  mod.moduleKeys().forEach(key => { expect(dag.get(key).value()).toEqual('active') })
  mod.linkKeys().forEach(key => { expect(dag.get(key).value()).not.toEqual('standAlone') })

  // Start with no active modules
  mod.deactivateAll()
  mod.moduleKeys().forEach(key => { expect(dag.get(key).value()).toEqual('inactive') })

  // Only 71 site.*, 4 docs.*, 5 site.doc.*, 10 configure.*, 7 link.*, and 10 module.* Nodes should be enabled
  expect(dag.enabledNodes()).toHaveLength(107)

  // What about linkages?
  mod.linkKeys().forEach(key => { expect(dag.get(key).value()).toEqual('standAlone') })

  // Activating tree mortality enables 4 additional Nodes
  mod.activate(['module.treeMortality'])
  mod.activate('module.treeMortality')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')
  expect(dag.get('scorch.height').isEnabled()).toEqual(false)
  expect(dag.enabledNodes()).toHaveLength(111)

  // Activating scorchHeight enables 1 additional Node and auto-links with treeMortality
  mod.activate('module.scorchHeight')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes()).toHaveLength(112)
})
