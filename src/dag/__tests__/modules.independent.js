import { Sim } from '../index.js'
import * as DagJest from '../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

// Module [<moduleKey>, [<nodePrefix>], <linksToModule>]
const modules = new Map([
  ['configure', {prefix: ['configure.', 'link.', 'module.'], link: null}],
  ['surfaceFire', {prefix: ['surface.primary', 'surface.secondary', 'surface.weighted'], link: null}],
  ['surfaceSpot', {prefix: ['spotting.surfaceFire'], link: 'surfaceFire'}],
  ['crownFire', {prefix: ['crown.'], link: 'surfaceFire'}],
  ['crownSpot', {prefix: ['spotting.crownFire.'], link: 'crownFire'}],
  ['fireEllipse', {prefix: ['surface.fire.ellipse.'], link: 'surfaceFire'}],
  ['fireContain', {prefix: ['contain'], link: 'fireEllipse'}],
  ['scorchHeight', {prefix: ['scorch.'], link: 'surfaceFire'}],
  ['treeMortality', {prefix: ['mortality.'], link: 'scorchHeight'}],
  ['spotting', {prefix: ['spotting.burningPile', 'spotting.torchingTrees'], link: null}],
  ['ignitionProbability', {prefix: ['ignition.'], link: null}],
  ['docs', {prefix: ['docs.'], link: null}],
  ['siteDocs', {prefix: ['site.doc'], link: null}],
  ['siteCanopy', {prefix: ['site.canopy.'], link: null}],
  ['siteFire', {prefix: ['site.fire.'], link: null}],
  ['siteMap', {prefix: ['site.map.'], link: null}],
  ['siteMoisture', {prefix: ['site.moisture.'], link: null}],
  ['siteSlope', {prefix: ['site.slope.'], link: null}],
  ['siteTerrain', {prefix: ['site.terrain.'], link: null}],
  ['siteTemperature', {prefix: ['site.temperature.'], link: null}],
  ['siteWind', {prefix: ['site.wind.', 'site.windSpeed'], link: null}],
])

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

const inputs = [
  ['site.fire.time.sinceIgnition', [60]],
  ['site.fire.vector.fromNorth', [45]],
  ['site.map.scale', [24000]],
  ['site.moisture.dead.tl1h', [0.01, 0.02, 0.03, 0.04, 0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.dead.category', [0.05]],
  ['site.moisture.live.herb', [0.5, 1, 1.5]],
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
  ['surface.primary.fuel.model.catalogKey', ['10', '124']],
  ['surface.secondary.fuel.model.catalogKey', ['124']],
  ['surface.weighted.fire.primaryCover', [0.6]]
]

const moduleKeys = [
  'module.surfaceFire',
  'module.surfaceSpot',
  'module.crownFire',
  'module.crownSpot',
  'module.fireEllipse',
  'module.fireContain',
  'module.scorchHeight',
  'module.treeMortality',
  'module.spotting',
  'module.ignitionProbability'
]

const linkKeys = [
  'link.crownFire', // 'standAlone' or 'linkedToSurfaceFire'
  'link.crownSpot', // 'standAlone' or 'linkedToCrownFire'
  'link.fireEllipse', // 'standAlone' or 'linkedToSurfaceFire'
  'link.fireContain', // 'standAlone' or 'linkedToFireEllipse'
  'link.scorchHeight', // 'standAlone' or 'linkedToSurfaceFire'
  'link.surfaceSpot', // 'standAlone' or 'linkedToSurfaceFire'
  'link.treeMortality' // 'standAlone' or 'linkedToScorchHeight'
]

// CONVENIENCE
function setModules (dag, value) { dag.setModules(moduleKeys.map(key => [key, value])) }
const nodeCount = 1224

function nodesThatStartWith(dag, prefixes) {
  let n = 0
  dag._node.forEach(node => {
    const key = node.key()
    for(let idx=0; idx<prefixes.length; idx++) {
      if (key.startsWith(prefixes[idx])) {
        n++
        break
      }
    }
  })
  return n
}

test('1: Default Module and Link values', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(config)
  moduleKeys.forEach(key => { expect(dag.node(key).value()).toEqual('active') })
  linkKeys.forEach(key => { expect(dag.node(key).value()).not.toEqual('standAlone') })
})

test('2: Module DagNode counts', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(dag.enabledNodes().length).toEqual(dag._node.length)

  let str = 'Module              :  Nodes\n'
  let total = 0
  modules.forEach((module, key) => {
    module.nodes = nodesThatStartWith(dag, module.prefix)
    total += module.nodes
    str += `${key.padEnd(20, ' ')}: ${module.nodes.toString().padStart(6, ' ')}\n`
    // disable this module's nodes
    dag.setEnabled(module.prefix, false)
  })
  // console.log(str)

  // list remaining nodes
  // str = 'Enabled Nodes\n'
  // dag.enabledNodes().forEach(node => { str += `${node.key()}\n` })
  // console.log(str)
  expect(total).toEqual(dag._node.length)
})

test('3: Dag.enabledNodes(), Dag.setEnabled()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(dag.enabledNodes().length).toEqual(dag._node.length)

})

xtest('2: Direct setting of module and link values (dont try this at home)', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.dna.moduleArg = 'independent'
  dag.configure(config) // Standard configuration
  moduleKeys.forEach(key => { dag.get(key).setValue('inactive') })
  moduleKeys.forEach(key => { expect(dag.get(key).value()).toEqual('inactive') })

  moduleKeys.forEach(key => { dag.get(key).setValue('active') })
  moduleKeys.forEach(key => { expect(dag.get(key).value()).toEqual('active') })
})

xtest('3: setModules(dag), Dag.setModules(), Dag.module()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.dna.moduleArg = 'independent'
  dag.configure(config) // Standard configuration
  // Start with no active modules
  setModules(dag, 'inactive')
  moduleKeys.forEach(key => { expect(dag.get(key).value()).toEqual('inactive') })
  linkKeys.forEach(key => { expect(dag.get(key).value()).toEqual('standAlone') })

  // Only 71 site.*, 4 docs.*, 5 site.doc.*, 10 configure.*, 7 link.*, and 10 module.* Nodes should be enabled
  expect(enabledNodes(dag).length).toEqual(107)

  // Activating tree mortality enables 4 additional Nodes
  dag.setModules([['module.treeMortality', 'active']])
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')
  expect(dag.get('scorch.height').isEnabled()).toEqual(false)
  expect(enabledNodes(dag).length).toEqual(111)

  // Activating scorchHeight enables 1 additional Node and links with treeMortality
  dag.setModules([['module.scorchHeight', 'active']])
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(enabledNodes(dag).length).toEqual(112)

  // Activating surfaceSpot enables a 7 more Nodes with no additional links
  dag.setModules([['module.surfaceSpot', 'active']])
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(enabledNodes(dag).length).toEqual(119)

  // Activating surfaceFire enables 686 more Nodes
  // and links it with surfaceSpot, scorchHeight and treeMortality
  dag.setModules([['module.surfaceFire', 'active']])
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(enabledNodes(dag).length).toEqual(805)

  // Activating crownFire enables 320 more Nodes and links it with surfaceFire
  dag.setModules([['module.crownFire', 'active']])
  expect(dag.get('module.crownFire').value()).toEqual('active')
  expect(dag.get('link.crownFire').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.surfaceFire').value()).toEqual('active')
  expect(dag.get('module.surfaceSpot').value()).toEqual('active')
  expect(dag.get('link.surfaceSpot').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.scorchHeight').value()).toEqual('active')
  expect(dag.get('link.scorchHeight').value()).toEqual('linkedToSurfaceFire')
  expect(dag.get('module.treeMortality').value()).toEqual('active')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')
  expect(enabledNodes(dag).length).toEqual(1125)

  // Activating crownSpot enables 8 more Nodes and links it with crownFire
  dag.setModules([['module.crownSpot', 'active']])
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
  expect(enabledNodes(dag).length).toEqual(1133)

  // Activating spotting enables 19 more Nodes and no new links
  dag.setModules([['module.spotting', 'active']])
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
  expect(enabledNodes(dag).length).toEqual(1152)

  // Activating fireEllipse enables 67 more Nodes and links it to surfaceFire
  dag.setModules([['module.fireEllipse', 'active']])
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
  expect(enabledNodes(dag).length).toEqual(1219)

  // Activating ignitionProbability enables 5 more Nodes and no new links
  dag.setModules([['module.ignitionProbability', 'active']])
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
  expect(enabledNodes(dag).length).toEqual(1224)

  // Activating fireContain enables 0 more Nodes and links it to fireEllipse
  dag.setModules([['module.fireContain', 'active']])
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
  expect(enabledNodes(dag).length).toEqual(1224)

  // De-activating ignitionProbability disables 5 Nodes and affects no links
  dag.setModules([['module.ignitionProbability', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(1219)

  // De-activating spotting disables 19 Nodes and affects no links
  dag.setModules([['module.spotting', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(1200)

  // De-activating fireContain disables 0 Nodes and affects 1 link to fireEllipse
  dag.setModules([['module.fireContain', 'inactive']])
  expect(dag.get('module.fireContain').value()).toEqual('inactive')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(enabledNodes(dag).length).toEqual(1200)

  // De-activating surface fire disables 686 Nodes and 4 links to surfaceFire
  dag.setModules([['module.surfaceFire', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(514)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('linkedToScorchHeight')

  // De-activating scorch height disables 1 Nodes and 1 link
  dag.setModules([['module.scorchHeight', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(513)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating fire ellipse disables 67 Nodes
  dag.setModules([['module.fireEllipse', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(446)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('linkedToCrownFire')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating crown fire disables 320 Nodes and 1 link
  dag.setModules([['module.crownFire', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(126)
  expect(dag.get('link.crownFire').value()).toEqual('standAlone')
  expect(dag.get('link.crownSpot').value()).toEqual('standAlone')
  expect(dag.get('link.fireContain').value()).toEqual('standAlone')
  expect(dag.get('link.fireEllipse').value()).toEqual('standAlone')
  expect(dag.get('link.scorchHeight').value()).toEqual('standAlone')
  expect(dag.get('link.surfaceSpot').value()).toEqual('standAlone')
  expect(dag.get('link.treeMortality').value()).toEqual('standAlone')

  // De-activating crown spotting disables 8 Nodes and no links
  dag.setModules([['module.crownSpot', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(118)

  // De-activating surface spotting disables 7 Nodes and no links
  dag.setModules([['module.surfaceSpot', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(111)

  // De-activating tree mortality disables 4 Nodes and no links
  dag.setModules([['module.treeMortality', 'inactive']])
  expect(enabledNodes(dag).length).toEqual(107)
})

xtest('4: Module selection', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.dna.moduleArg = 'independent'
  dag.setConfigs(config) // Standard configuration
  setModules(dag, 'inactive')
  expect(enabledNodes(dag).length).toEqual(107)

  // Part 1: activating surface fire spotting enables 7 Nodes in standAlone mode
  dag.runModules([['module.surfaceSpot', 'active']])
  expect(enabledNodes(dag).length).toEqual(114)

  dag.runSelected([['spotting.surfaceFire.spotDistance.mountainTerrain', true]])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.flameLength'))
  expect(inputNodes).toContain(dag.get('site.windSpeedAdjustmentFactor'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))

  // Part 2: activating surface fire link to surface spotting
  dag.runSelected([['surface.primary.fuel.fire.spreadRate', true]])
  // nothing changes since we haven't activated Surface Fire yet!
  expect(dag.requiredNodes().length).toEqual(21)
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)

  dag.runModules([['module.surfaceFire', 'active']])
  inputNodes = dag.requiredInputNodes()
  // console.log(inputNodes.reduce((acc, node) => acc + node.key + '\n', ''))
  // We have to add 1 fuel key, 5 moistures, 1 slope,
  // But, no longer need to input surface fire flameLength
  expect(inputNodes.length).toEqual(14)
  expect(inputNodes).not.toContain(dag.get('site.fire.observed.flameLength'))
})
