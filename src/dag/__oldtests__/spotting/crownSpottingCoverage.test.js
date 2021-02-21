import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { CrownSpotting } from '@cbevins/fire-behavior-models'

const value = DagJest.value
expect.extend({ value })

test('1: Crown fire with zero flame length', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const store = new StorageNodeMap(dag)
  dag.setStorageClass(store)

  dag.configure([
    ['link.crownSpot', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength'],
    ['configure.wind.speed', 'at20ft']
  ])

  const node = dag.get('spotting.crownFire.spotDistance.mountainTerrain')
  dag.select(['spotting.crownFire.spotDistance.mountainTerrain'])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  // Always require the site.terrain inputs
  expect(inputNodes).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyElevation'))
  expect(inputNodes).toContain(dag.get('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.get('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.get('site.fire.crown.flameLength'))

  // Zero canopy height
  dag.input([
    // Inputs arranged in BP6 order...
    ['site.canopy.crown.totalHeight', [0]],
    ['site.wind.speed.at20ft', [88 * 10]],
    ['site.terrain.ridgeValleyElevation', [1000]],
    ['site.terrain.ridgeValleyDistance', [5280]],
    ['site.terrain.spotSourceLocation', ['ridgeTop', 'midslopeWindward', 'valleyBottom', 'midslopeLeeward']],
    ['site.fire.crown.flameLength', [40]]
  ]).run()
  expect(store.get(node, 0)).toBeCloseTo(0, 12)
  expect(store.get(node, 1)).toBeCloseTo(0, 12)
  expect(store.get(node, 2)).toBeCloseTo(0, 12)
  expect(store.get(node, 3)).toBeCloseTo(0, 12)

  // Zero flame length
  dag.input([
    ['site.canopy.crown.totalHeight', [80]],
    ['site.wind.speed.at20ft', [880]],
    ['site.fire.crown.flameLength', [0]]
  ]).run()
  expect(store.get(node, 0)).toBeCloseTo(0, 12)
  expect(store.get(node, 1)).toBeCloseTo(0, 12)
  expect(store.get(node, 2)).toBeCloseTo(0, 12)
  expect(store.get(node, 3)).toBeCloseTo(0, 12)

  // Zero wind speed
  dag.input([
    ['site.canopy.crown.totalHeight', [80]],
    ['site.wind.speed.at20ft', [0]],
    ['site.fire.crown.flameLength', [40]]
  ]).run()
  expect(store.get(node, 0)).toBeCloseTo(0, 12)
  expect(store.get(node, 1)).toBeCloseTo(0, 12)
  expect(store.get(node, 2)).toBeCloseTo(0, 12)
  expect(store.get(node, 3)).toBeCloseTo(0, 12)
})

test('2: drift()', () => {
  expect(CrownSpotting.drift(0, 1, 2)).toEqual(0)
  expect(CrownSpotting.drift(1, 0, 2)).toEqual(0)
  expect(CrownSpotting.drift(1, 2, 0)).toEqual(0)
})

test('3: dropout()', () => {
  expect(() => { CrownSpotting.dropout(0, 10, 10) }).toThrow('dropout() exceeded 50000 layers')
  expect(() => { CrownSpotting.dropout(10, 0, 10) }).toThrow('dropout() exceeded 50000 layers')
  expect(CrownSpotting.dropout(10, 10, 0)).toEqual([
    39.97370284280681, 2783.1059454742726, 13222])
  // if eta >= 1944, plume cannot lift particle of that size
  expect(CrownSpotting.dropout(10, 10, 1944)).toEqual([0, 0, 0])
})

test('4: fireIntensityAlbini()', () => {
  expect(CrownSpotting.fireIntensityAlbini(0, 10, 10)).toEqual(0)
  expect(CrownSpotting.fireIntensityAlbini(10, 0, 10)).toEqual(0)
  expect(CrownSpotting.fireIntensityAlbini(10, 10, 0)).toEqual(0)
  expect(CrownSpotting.fireIntensityAlbini(10, 10, 10)).toBeCloseTo(69342.2160, 2)
})

test('5: flameLengthThomas()', () => {
  expect(CrownSpotting.flameLengthThomas(0)).toEqual(0)
  expect(CrownSpotting.flameLengthThomas(100)).toBeCloseTo(4.308869380063768, 2)
})

test('6: flameHeightAlbini()', () => {
  expect(CrownSpotting.flameHeightAlbini(1001, 0.11, 0.11)).toBeCloseTo(4.901349909, 2)
  expect(CrownSpotting.flameHeightAlbini(1001, 0.10, 0.10)).toBeCloseTo(5.227671269, 2)
  expect(CrownSpotting.flameHeightAlbini(1001, 0.001, 0.001)).toBeCloseTo(199.702, 2)
  expect(CrownSpotting.flameHeightAlbini(1001, 0.00001, 0.00001)).toBeCloseTo(12063.386, 2)
})
