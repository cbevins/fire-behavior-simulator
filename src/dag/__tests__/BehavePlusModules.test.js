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

  // Ensure deactivateAll() then activateAll() restores state
  const allNodes = dag.nodes().length
  mod.deactivateAll()
  mod.moduleKeys().forEach(key => { expect(dag.get(key).value()).toEqual('inactive') })
  mod.linkKeys().forEach(key => { expect(dag.get(key).value()).toEqual('standAlone') })

  mod.activateAll()
  mod.moduleKeys().forEach(key => { expect(dag.get(key).value()).toEqual('active') })
  mod.linkKeys().forEach(key => { expect(dag.get(key).value()).not.toEqual('standAlone') })
  expect(dag.enabledNodes()).toHaveLength(allNodes)

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

  // Activating surfaceSpot enables a 7 more Nodes with no additional links
  mod.activate(['module.surfaceSpot'])
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(119)

  // Activating surfaceFire enables 686 more Nodes
  // and links it with surfaceSpot, scorchHeight and treeMortality
  mod.activate('module.surfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(805)

  // Activating crownFire enables 320 more Nodes and links it with surfaceFire
  mod.activate('module.crownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1125)

  // Activating crownSpot enables 8 more Nodes and links it with crownFire
  mod.activate('module.crownSpot')
  expect(dag.get('module.crownSpot').value()).toEqual('active')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1133)

  // Activating spotting enables 19 more Nodes and no new links
  mod.activate('module.spotting')
  expect(dag.get('module.spotting').value()).toEqual('active')
  expect(dag.get('module.crownSpot').value()).toEqual('active')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1152)

  // Activating fireEllipse enables 67 more Nodes and links it to surfaceFire
  mod.activate('module.fireEllipse')
  expect(dag.get('module.fireEllipse').value()).toEqual('active')
  expect(dag.get('link.fireEllipse').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.spotting').value()).toEqual('active')
  expect(dag.get('module.crownSpot').value()).toEqual('active')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1219)

  // Activating ignitionProbability enables 5 more Nodes and no new links
  mod.activate('module.ignitionProbability')
  expect(dag.get('module.ignitionProbability').value()).toEqual('active')
  expect(dag.get('module.fireEllipse').value()).toEqual('active')
  expect(dag.get('link.fireEllipse').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.spotting').value()).toEqual('active')
  expect(dag.get('module.crownSpot').value()).toEqual('active')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1224)

  // Activating fireContain enables 0 more Nodes and links it to fireEllipse
  mod.activate('module.fireContain')
  expect(dag.get('module.fireContain').value()).toEqual('active')
  expect(dag.get('link.fireContain').value()).toEqual('linkedToFireEllipse')
  expect(dag.get('module.ignitionProbability').value()).toEqual('active')
  expect(dag.get('module.fireEllipse').value()).toEqual('active')
  expect(dag.get('link.fireEllipse').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.spotting').value()).toEqual('active')
  expect(dag.get('module.crownSpot').value()).toEqual('active')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(1224)

  // De-activating ignitionProbability disables 5 Nodes and affects no links
  mod.deactivate(['module.ignitionProbability'])
  expect(dag.enabledNodes(dag)).toHaveLength(1219)

  // De-activating spotting disables 19 Nodes and affects no links
  mod.deactivate(['module.spotting'])
  expect(dag.enabledNodes(dag)).toHaveLength(1200)

  // De-activating fireContain disables 0 Nodes and affects 1 link to fireEllipse
  mod.deactivate('module.fireContain')
  expect(dag.get('module.fireContain').value()).toEqual('inactive')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.enabledNodes(dag)).toHaveLength(1200)

  // De-activating surface fire disables 686 Nodes and 4 links to surfaceFire
  mod.deactivate('module.surfaceFire')
  expect(dag.enabledNodes(dag)).toHaveLength(514)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')

  // De-activating scorch height disables 1 Nodes and 1 link
  mod.deactivate('module.scorchHeight')
  expect(dag.enabledNodes(dag)).toHaveLength(513)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating fire ellipse disables 67 Nodes
  mod.deactivate('module.fireEllipse')
  expect(dag.enabledNodes(dag)).toHaveLength(446)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating crown fire disables 320 Nodes and 1 link
  mod.deactivate(['module.crownFire'])
  expect(dag.enabledNodes(dag)).toHaveLength(126)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('standAlone')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating crown spotting disables 8 Nodes and no links
  mod.deactivate(['module.crownSpot'])
  expect(dag.enabledNodes(dag)).toHaveLength(118)

  // De-activating surface spotting disables 7 Nodes and no links
  mod.deactivate('module.surfaceSpot')
  expect(dag.enabledNodes(dag)).toHaveLength(111)

  // De-activating tree mortality disables 4 Nodes and no links
  mod.deactivate('module.treeMortality')
  expect(dag.enabledNodes(dag)).toHaveLength(107)
})

test('5: Module selection', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const mod = new BehavePlusModules(dag)
  dag.configure(config) // Standard configuration

  mod.deactivateAll()
  expect(dag.enabledNodes(dag)).toHaveLength(107)

  // Part 1: activating surface fire spotting enables 7 Nodes in standAlone mode
  mod.activate('module.surfaceSpot')
  expect(dag.enabledNodes(dag)).toHaveLength(114)

  dag.select(['spotting.surfaceFire.spotDistance.mountainTerrain'])
    .run()
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(8)
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.node('site.fire.observed.flameLength'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
  expect(inputNodes).toContain(dag.node('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.node('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))

  // Part 2: activating surface fire link to surface spotting
  dag.select(['surface.primary.fuel.fire.spreadRate'])
    .run()
  // nothing changes since we haven't activated Surface Fire yet!
  expect(dag.requiredNodes()).toHaveLength(21)
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(8)

  mod.activate(['module.surfaceFire'])
  dag.run()
  inputNodes = dag.requiredInputNodes()
  // console.log(inputNodes.reduce((acc, node) => acc + node.key + '\n', ''))
  // We have to add 1 fuel key, 5 moistures, 1 slope,
  // But, no longer need to input surface fire flameLength
  expect(inputNodes).toHaveLength(14)
  expect(inputNodes).not.toContain(dag.get('site.fire.observed.flameLength'))
})
