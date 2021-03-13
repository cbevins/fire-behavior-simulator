import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
])

test('1: Burning pile spotting distance configuration', () => {
  // Selecting downwind canopy applied ht requires its 2 inputs
  dag.select(['site.canopy.downwind.appliedHeight'])
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(2)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))

  // Selecting firebrand ht requires burning pile flame ht
  dag.select(['spotting.burningPile.firebrand.height'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Selecting critical cover ht uses firebrand ht, but no new inputs
  dag.select(['spotting.burningPile.firebrand.criticalCoverHeight'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // firbrand drift is fixed, so no new inputs required when it is selected
  dag.select(['spotting.burningPile.firebrand.drift'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))

  // Selecting spotting distance on flat terrain requires wind at 20-ft
  dag.select([
    'spotting.burningPile.spotDistance.flatTerrain',
    'spotting.burningPile.spotDistance.flatTerrainWithDrift'
  ])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(4)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))

  // Selecting spotting distance on mountain terrain requires
  // spot source location, and ridge-to-valley distance and elevation
  dag.select(['spotting.burningPile.spotDistance.mountainTerrain'])
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(7)
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.get('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.get('spotting.burningPile.flameHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
})
