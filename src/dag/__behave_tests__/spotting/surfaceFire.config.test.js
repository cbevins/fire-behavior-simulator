import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
  ['configure.wind.direction', 'sourceFromNorth']
])

test('1. Surface fire spotting', () => {
  dag.clearSelected()
  dag.configure([['link.surfaceSpot', 'standAlone']])

  // When linked to surfaceFire, bound to 'surface.weighted.fire.firelineIntensity'
  // Currently in stand-alone mode, so linked to 'site.fire.observed.firelineIntensity'
  dag.select(['spotting.surfaceFire.firelineIntensity'])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // Linking to surfaceFire requires a lot more inputs
  dag.configure([['link.surfaceSpot', 'linkedToSurfaceFire']])
  inputNodes = dag.requiredInputNodes()
  // let str=''; inputNodes.forEach(node => {str += `${node.key()}\n`}); console.log(str)
  expect(inputNodes).toHaveLength(12)
  expect(inputNodes).toContain(dag.get('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.get('site.moisture.dead.tl1h'))

  // Back to stand-alone
  dag.configure([['link.surfaceSpot', 'standAlone']])

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // firebrand.height requires 'spotting.surfaceFire.firelineIntensity', 'site.wind.speed.at20ft'
  dag.select(['spotting.surfaceFire.firebrand.height'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // firebrand.drift requires 'spotting.surfaceFire.firebrand.height', 'site.wind.speed.at20ft',
  // but no new inputs
  dag.select(['spotting.surfaceFire.firebrand.drift'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Requires 'spotting.surfaceFire.firebrand.height',  'site.canopy.downwind.appliedHeight',
  // the letter which requires site.canopy.downwind.{height|isOpen}
  dag.select(['spotting.surfaceFire.firebrand.criticalCoverHeight'])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toHaveLength(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // spotDistance.flatTerrain requires 'spotting.surfaceFire.firebrand.height',
  // 'spotting.surfaceFire.firebrand.criticalCoverHeight', and 'site.wind.speed.at20ft',
  // but no new inputs
  dag.select(['spotting.surfaceFire.spotDistance.flatTerrain'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Requires 'spotting.surfaceFire.spotDistance.flatTerrain', 'spotting.surfaceFire.firebrand.drift',
  // but no new inputs
  dag.select(['spotting.surfaceFire.spotDistance.flatTerrainWithDrift'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.select(['spotting.surfaceFire.spotDistance.mountainTerrain'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(7)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
