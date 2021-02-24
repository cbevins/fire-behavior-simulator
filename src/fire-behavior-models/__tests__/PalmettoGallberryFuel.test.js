import { Sim } from '../../index.js'
import * as DagJest from './matchers.js'

const value = DagJest.value
const sig = DagJest.sig
expect.extend({ sig, value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([['configure.fuel.primary', 'palmettoGallberry']])

const parms = 'surface.primary.fuel.model.palmettoGallberry.parms.'
const age = dag.get(parms + 'age')
const basal = dag.get(parms + 'basalArea')
const cover = dag.get(parms + 'cover')
const height = dag.get(parms + 'height')
const derived = 'surface.primary.fuel.model.palmettoGallberry.derived.'
const depth = dag.get(derived + 'depth')
const deadFineLoad = dag.get(derived + 'deadFineLoad')
const deadSmallLoad = dag.get(derived + 'deadSmallLoad')
const deadFoliageLoad = dag.get(derived + 'deadFoliageLoad')
const deadLitterLoad = dag.get(derived + 'deadLitterLoad')
const liveFineLoad = dag.get(derived + 'liveFineLoad')
const liveSmallLoad = dag.get(derived + 'liveSmallLoad')
const liveFoliageLoad = dag.get(derived + 'liveFoliageLoad')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

test('1 Palmetto-Gallberry library', () => {
  dag.configure([['configure.fuel.primary', 'palmettoGallberry']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('palmettoGallberry')

  dag.select([
    depth,
    deadFineLoad,
    deadSmallLoad,
    deadFoliageLoad,
    deadLitterLoad,
    liveFineLoad,
    liveSmallLoad,
    liveFoliageLoad
  ])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(age) // required by all loads
  expect(inputNodes).toContain(basal) // required by litter load
  expect(inputNodes).toContain(cover) // deadSmallLoad, deadFoliageLoad, liveFoliageLoad
  expect(inputNodes).toContain(height) // required depth, deadFineLoad, liveFineLoad, liveSmallLoad, liveFoliage

  dag.input([
    [age, 10],
    [cover, 0.5],
    [height, 6],
    [basal, 80]
  ]).run()
  expect(age.value()).toEqual(10)
  expect(basal.value()).toEqual(80)
  expect(cover.value()).toEqual(0.5)
  expect(height.value()).toEqual(6)

  // Calculate derived fuel particle properties
  const d1 =
    -0.00121 +
    0.00379 * Math.log(age.value()) +
    0.00118 * height.value() * height.value()
  expect(deadFineLoad.value()).toEqual(d1)

  const d2 = Math.max(0,
    -0.00775 +
      0.00021 * cover.value() +
      0.00007 * age.value() * age.value()
  )
  expect(deadSmallLoad.value()).toEqual(d2)

  const dfol =
    0.00221 *
    Math.pow(age.value(), 0.51263) *
    Math.exp(0.02482 * cover.value())
  expect(deadFoliageLoad.value()).toEqual(dfol)

  const dlit =
    (0.03632 + 0.0005336 * basal.value()) *
    (1.0 - Math.pow(0.25, age.value()))
  expect(deadLitterLoad.value()).toEqual(dlit)

  const lfol =
    -0.0036 +
    0.00253 * age.value() +
    0.00049 * cover.value() +
    0.00282 * height.value() * height.value()
  expect(liveFoliageLoad.value()).toEqual(lfol)

  const l1 =
    0.00546 +
    0.00092 * age.value() +
    0.00212 * height.value() * height.value()
  expect(liveFineLoad.value()).toEqual(l1)

  const l2 =
    -0.02128 +
    0.00014 * age.value() * age.value() +
    0.00314 * height.value() * height.value()
  expect(liveSmallLoad.value()).toEqual(l2)

  expect(depth.value()).toEqual((2 * height.value()) / 3)
})

test('2: Palmetto-Gallberry constants', () => {
  dag.configure([['configure.fuel.primary', 'palmettoGallberry']]).run()
  expect(dag.get('configure.fuel.primary').value()).toEqual('palmettoGallberry')

  //      heat dens stot  seff    Foliage savr = 2000
  // Live 8300   46 0.03 0.015    0-0.25  savr = 350
  // Dead 8300   30 0.03 0.010    .25-1.0 savr = 140

  const data = [
    // ['surface.primary.fuel.bed.dead.particle.class1.label', 'Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 350],
    ['surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.dead.particle.class1.fiberDensity', 30],
    ['surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', 0.01],
    ['surface.primary.fuel.bed.dead.particle.class1.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.dead.particle.class2.label', 'Dead 10-h time-lag (0.25 to 1 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 140],
    ['surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.dead.particle.class2.fiberDensity', 30],
    ['surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', 0.01],
    ['surface.primary.fuel.bed.dead.particle.class2.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.dead.particle.class3.label', 'Dead foliage'],
    ['surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 2000],
    ['surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.dead.particle.class3.fiberDensity', 30],
    ['surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', 0.01],
    ['surface.primary.fuel.bed.dead.particle.class3.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.dead.particle.class4.label', 'Litter layer'],
    ['surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 2000],
    ['surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.dead.particle.class4.fiberDensity', 30],
    ['surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', 0.01],
    ['surface.primary.fuel.bed.dead.particle.class4.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.live.particle.class1.label', 'Live 0 to 0.25 inch diameter stem wood'],
    ['surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 350],
    ['surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.live.particle.class1.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class1.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.live.particle.class2.label', 'Live 0.25 to 1 inch diameter stem wood'],
    ['surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 140],
    ['surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.live.particle.class2.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class2.total.mineralContent', 0.03],

    // ['surface.primary.fuel.bed.live.particle.class3.label', 'Live foliage'],
    ['surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', 8300],
    ['surface.primary.fuel.bed.live.particle.class3.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class3.total.mineralContent', 0.03],
    ['surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 2000],
    ['surface.primary.fuel.bed.dead.extinction.moistureContent', 0.4]

  ]

  dag.select(data.map(node => node[0])).run()
  data.forEach(datum => {
    const [key, value] = datum
    expect(dag.get(key).value()).sig(value, 10, key)
  })
})

test('3: Palmetto-Gallberry catalog', () => {
  dag.clearSelected()
  dag.configure([['configure.fuel.primary', 'catalog']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('catalog')

  dag.select([
    depth,
    deadFineLoad,
    deadSmallLoad,
    deadFoliageLoad,
    deadLitterLoad,
    liveFineLoad,
    liveSmallLoad,
    liveFoliageLoad,
  ]).run()

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(catalogKey)
  dag.input([[catalogKey, 'pg/age=20/basal=120/cover=.8/height=5']]).run()

  expect(age.value()).toEqual(20)
  expect(basal.value()).toEqual(120)
  expect(cover.value()).toEqual(0.8)
  expect(height.value()).toEqual(5)

  // Calculate derived fuel particle properties
  const d1 =
    -0.00121 +
    0.00379 * Math.log(age.value()) +
    0.00118 * height.value() * height.value()
  expect(deadFineLoad.value()).toEqual(d1)

  const d2 = Math.max(
    0,
    -0.00775 +
      0.00021 * cover.value() +
      0.00007 * age.value() * age.value()
  )
  expect(deadSmallLoad.value()).toEqual(d2)

  const dfol =
    0.00221 *
    Math.pow(age.value(), 0.51263) *
    Math.exp(0.02482 * cover.value())
  expect(deadFoliageLoad.value()).toEqual(dfol)

  const dlit =
    (0.03632 + 0.0005336 * basal.value()) *
    (1.0 - Math.pow(0.25, age.value()))
  expect(deadLitterLoad.value()).toEqual(dlit)

  const lfol =
    -0.0036 +
    0.00253 * age.value() +
    0.00049 * cover.value() +
    0.00282 * height.value() * height.value()
  expect(liveFoliageLoad.value()).toEqual(lfol)

  const l1 =
    0.00546 +
    0.00092 * age.value() +
    0.00212 * height.value() * height.value()
  expect(liveFineLoad.value()).toEqual(l1)

  const l2 =
    -0.02128 +
    0.00014 * age.value() * age.value() +
    0.00314 * height.value() * height.value()
  expect(liveSmallLoad.value()).toEqual(l2)

  expect(depth.value()).toEqual((2 * height.value()) / 3)
})
