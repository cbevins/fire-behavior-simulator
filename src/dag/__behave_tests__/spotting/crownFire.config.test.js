import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['link.crownSpot', 'linkedToCrownFire'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
])

test('1. Crown fire spotting', () => {
  dag.clearSelected()
  dag.configure([['link.crownSpot', 'standAlone']])
  // Critical cover height is fixed at 0
  dag.select(['spotting.crownFire.firebrand.criticalCoverHeight'])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(0)

  // Currently in stand-alone mode
  dag.select(['spotting.crownFire.firelineIntensity'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))

  // Linking to crownFire requires a lot more inputs
  dag.configure([['link.crownSpot', 'linkedToCrownFire']])
  inputNodes = dag.requiredInputNodes()
  // console.log(inputNodes.map(node => node.key))
  expect(inputNodes).toHaveLength(11)

  // Linking to surfaceFire requires a lot more inputs
  dag.configure([
    ['link.crownFire', 'linkedToSurfaceFire'],
    ['link.crownSpot', 'linkedToCrownFire']
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(11)

  // Back to stand-alone
  dag.configure([['link.crownSpot', 'standAlone']])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))

  dag.select(['spotting.crownFire.firebrandObject'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Firebrand height, drift, and distance over flat terrain need the firebrandObject, but no new inputs
  dag.select([
    'spotting.crownFire.firebrand.height',
    'spotting.crownFire.firebrand.drift',
    'spotting.crownFire.spotDistance.flatTerrain',
    'spotting.crownFire.spotDistance.flatTerrainWithDrift'
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.select(['spotting.crownFire.spotDistance.mountainTerrain'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(6)
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
