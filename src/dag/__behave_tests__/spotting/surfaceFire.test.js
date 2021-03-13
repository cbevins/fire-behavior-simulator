import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { Spotting } from '../../../fire-behavior-models/index.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
  ['configure.wind.direction', 'sourceFromNorth']
])

test('1: Surface fire spotting', () => {
  dag.clearSelected()
  dag.configure([['link.surfaceSpot', 'standAlone']])

  // When linked to surfaceFire, bound to 'surface.weighted.fire.firelineIntensity'
  // Currently in stand-alone mode, so linked to 'site.fire.observed.firelineIntensity'
  dag.select(['spotting.surfaceFire.firelineIntensity'])
  let inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'INPUTS:'))
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  // Linking to surfaceFire requires a lot more inputs
  dag.configure([['link.surfaceSpot', 'linkedToSurfaceFire']])
  inputNodes = dag.requiredInputNodes()
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

test('7: Validate stand-alone surface fire spotting with flameLength input results against BP6', () => {
  dag.clearSelected()
  dag.configure([
    ['link.surfaceSpot', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.select(['spotting.surfaceFire.spotDistance.mountainTerrain'])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(7)
  // console.log(DagJest.arrayList(inputNodes, 'Test 6 Input Nodes'))
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  // Always (except crown fire spotting) downwind canopy parms
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  // Surface fire spotting requires firelineIntensity or flameLength
  expect(inputNodes).toContain(dag.get('site.fire.observed.flameLength'))

  // Validate results
  const location = dag.get('site.terrain.spotSourceLocation')
  // const isOpen = dag.get('site.canopy.downwind.isOpen')
  dag.input([
    // Inputs arranged in BP6 order...
    // Fuel/Vegetation, Overstory
    ['site.canopy.downwind.height', [60]],
    // Weather
    ['site.wind.speed.at20ft', [88 * 10]],
    // Terrain
    ['site.terrain.ridgeValleyElevation', [1000]],
    ['site.terrain.ridgeValleyDistance', [5280]],
    // Fire
    ['site.fire.observed.flameLength', [10]]
  ])

  const results = {
    surfaceFire: {
      ridgeTop: { closed: 1155.470325, open: 1346.573583 },
      midslopeWindward: { closed: 1082.484627, open: 1271.729868 },
      valleyBottom: { closed: 958.108061, open: 1121.831362 },
      midslopeLeeward: { closed: 1018.864376, open: 1185.746013 }
    }
  }

  // surfaceFire
  Object.keys(results).forEach(nodeKey => {
    const node = dag.get(`spotting.${nodeKey}.spotDistance.mountainTerrain`)
    // 'ridgeTop', 'midslopeWindward', 'valleyBottom', 'midslopeLeeward'
    Object.keys(results[nodeKey]).forEach(locationKey => {
      dag.input([[location, [locationKey]]])
      // isOpen true or false
      Object.keys(results[nodeKey][locationKey]).forEach(openKey => {
        dag.input([['site.canopy.downwind.isOpen', [openKey === 'open']]]).run()
        expect(node.value()).toBeCloseTo(
          results[nodeKey][locationKey][openKey], 2,
          `'${nodeKey}'-'${locationKey}'-'${openKey}'`)
      })
    })
  })

  // Coverage test
  expect(Spotting.surfaceFireFirebrandHeight(0.0001, 0.0001)).toBeCloseTo(277.2528, 2)
  expect(Spotting.surfaceFireFirebrandHeight(10000, 0.0001)).toBeCloseTo(2772528.906, 2)
})
