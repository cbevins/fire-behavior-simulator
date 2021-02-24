import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { SurfaceFire } from '../../../fire-behavior-models/index.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  // NOT AS IMPORTANT
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]
  ],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]]
])

// Selected Nodes
const primaryFli = dag.get('surface.primary.fuel.fire.firelineIntensity')
const primaryScorchHt = dag.get('surface.primary.fuel.fire.scorchHeight')
const headScorchHt = dag.get('surface.fire.ellipse.head.scorchHeight')
const mortScorchHt = dag.get('mortality.scorchHeight')
const scorchHt = dag.get('scorch.height')

// Required Nodes when linked to surfaceFire
const deadMois = dag.get('site.moisture.dead.category')
const liveMois = dag.get('site.moisture.live.category')
const slope = dag.get('site.slope.steepness.ratio')
const airTemp = dag.get('site.temperature.air')
const windSpeed = dag.get('site.wind.speed.atMidflame')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

// Required when linked to fireEllipse or stand-alone
const observedFlame = dag.get('site.fire.observed.flameLength')
const observedFli = dag.get('site.fire.observed.firelineIntensity')

const Inputs = [
  [deadMois, [0.15]],
  [liveMois, [1.5]],
  [slope, [0.25]],
  [airTemp, [95]],
  [windSpeed, [88 * 9]],
  [catalogKey, ['10']]
]

const expectedFlame = 5.4555388385284225
const expectedFli = 226.83330575913166
const expectedSht = 25.36660620754195

test('1: Scorch height as built-in Node of surface fire', () => {
  dag.clearSelected()
  dag.configure([
    // ['link.scorchHeight', 'linkedToSurfaceFire']
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select([primaryScorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(deadMois)
  expect(inputNodes).toContain(liveMois)
  expect(inputNodes).toContain(slope)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(catalogKey)

  dag.input(Inputs).run()
  // The link to surfaceFire is via the surface.weighted.fire.firelineIntensity
  expect(primaryFli.value()).toBeCloseTo(expectedFli, 9)
  expect(dag.get('surface.primary.fuel.fire.firelineIntensity').value()).toBeCloseTo(expectedFli, 9)
  // And NOT through the surface.weighted.fire.scorchHeight
  expect(dag.get('surface.weighted.fire.scorchHeight').isRequired()).toEqual(false)
  expect(dag.get('surface.weighted.fire.scorchHeight').value()).toEqual(0)

  // But if we select the surface.weighted.fire.scorchHeight,
  // it will then get computed and have the same value
  dag.select(['surface.weighted.fire.scorchHeight']).run()
  expect(dag.get('surface.weighted.fire.scorchHeight').isRequired()).toEqual(true)
  expect(dag.get('surface.weighted.fire.scorchHeight').value()).toBeCloseTo(expectedSht, 9)

  dag.select(['surface.weighted.fire.flameLength']).run()
  expect(dag.get('surface.primary.fuel.fire.flameLength').value()).toBeCloseTo(expectedFlame, 9)
})

test('2: Scorch height as standAlone with firelineIntensity input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select([scorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFli)

  dag.input([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFli, [expectedFli]]
  ]).run()
  expect(observedFli.value()).toBeCloseTo(expectedFli, 9)
})

test('3: Scorch height standAlone with flameLength input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.select([scorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  dag.input([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFlame, [expectedFlame]]
  ]).run()
  expect(observedFlame.value()).toBeCloseTo(expectedFlame, 9)
  expect(dag.get('site.fire.observed.firelineIntensity').value()).toBeCloseTo(expectedFli, 11)
  expect(dag.get('scorch.height').value()).toBeCloseTo(expectedSht, 11)
})

test('4: Scorch height standAlone and batched flameLengths', () => {
  dag.clearSelected()
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.select([scorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  const flameLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const windSpeeds = [0, 5 * 88, 10 * 88, 15 * 88, 20 * 88]
  const airTemps = [70, 80, 90, 100]
  dag.input([
    [airTemp, airTemps],
    [windSpeed, windSpeeds],
    [observedFlame, flameLengths]
  ]).run()
  // Fetch all 200 results
  for (let idx = 0; idx < 200; idx += 1) {
    const flame = store.get(observedFlame, idx)
    const air = store.get(airTemp, idx)
    const wind = store.get(windSpeed, idx)
    const expected = SurfaceFire.scorchHtFromFlame(flame, wind, air)
    expect(store.get(scorchHt, idx)).toBeCloseTo(expected, 4, `air=${air}, wind=${wind}, flame=${flame}`)
  }
})

test('5: Scorch height stand-alone with flameLength input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.select([scorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFlame)

  dag.input([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFlame, [expectedFlame]]
  ]).run()
  expect(observedFlame.value()).toBeCloseTo(expectedFlame, 9)
  expect(observedFli.value()).toBeCloseTo(expectedFli, 11)
  expect(scorchHt.value()).toBeCloseTo(expectedSht, 11)
  expect(dag.get('surface.fire.ellipse.head.firelineIntensity').isRequired()).toEqual(false)
  expect(dag.get('surface.fire.ellipse.head.flameLength').isRequired()).toEqual(false)
})

test('6: Scorch height stand-alone with firelineIntensity input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select([scorchHt])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(observedFli)

  dag.input([
    [airTemp, [95]],
    [windSpeed, [88 * 9]],
    [observedFli, [expectedFli]]
  ]).run()
  expect(observedFli.value()).toBeCloseTo(expectedFli, 11)
  expect(scorchHt.value()).toBeCloseTo(expectedSht, 11)
  expect(dag.get('surface.fire.ellipse.head.firelineIntensity').isRequired()).toEqual(false)
  expect(dag.get('surface.fire.ellipse.head.flameLength').isRequired()).toEqual(false)
  expect(observedFlame.isRequired()).toEqual(false)
})
