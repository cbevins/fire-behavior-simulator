import { Sim } from '../../index.js'
import * as DagJest from './matchers.js'
import * as WesternAspen from '../WesternAspenFuel.js'

const value = DagJest.value
const sig = DagJest.sig
expect.extend({ sig, value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([['configure.fuel.primary', 'westernAspen']])
const prefix = 'surface.primary.fuel.model.westernAspen.'
const type = dag.get(prefix + 'parms.aspenType')
const curingLevel = dag.get(prefix + 'parms.curingLevel')
const depth = dag.get(prefix + 'derived.depth')
const dead1Load = dag.get(prefix + 'derived.dead.fine.ovendryLoad')
const dead10Load = dag.get(prefix + 'derived.dead.small.ovendryLoad')
const dead1Savr = dag.get(prefix + 'derived.dead.fine.surfaceAreaToVolumeRatio')
const liveHerbLoad = dag.get(prefix + 'derived.live.herb.ovendryLoad')
const liveStemLoad = dag.get(prefix + 'derived.live.stem.ovendryLoad')
const liveStemSavr = dag.get(
  prefix + 'derived.live.stem.surfaceAreaToVolumeRatio'
)
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

const aspenShrub = [
  [depth, [0.65, 0.65, 0.65, 0.65, 0.65, 0.65]],
  [dead1Load, [0.8, 0.893, 1.056, 1.218, 1.379, 1.4595]],
  [dead1Savr, [1440, 1620, 1910, 2090, 2220, 2285]],
  [dead10Load, [0.975, 0.975, 0.975, 0.975, 0.975, 0.975]],
  [liveHerbLoad, [0.335, 0.234, 0.167, 0.1, 0.033, 0]],
  [liveStemLoad, [0.403, 0.403, 0.333, 0.283, 0.277, 0.274]],
  [liveStemSavr, [2440, 2440, 2310, 2090, 1670, 1670]]
]

const aspenTallForb = [
  [depth, [0.3, 0.3, 0.3, 0.3, 0.3, 0.3]],
  [dead1Load, [0.738, 0.93, 1.056, 1.183, 1.309, 1.372]],
  [dead1Savr, [1480, 1890, 2050, 2160, 2240, 2280]],
  [dead10Load, [0.475, 0.475, 0.475, 0.475, 0.475, 0.475]],
  [liveHerbLoad, [0.665, 0.465, 0.332, 0.199, 0.067, 0]],
  [liveStemLoad, [0, 0, 0, 0, 0, 0]],
  [liveStemSavr, [2440, 2440, 2440, 2440, 2440, 2440]]
]

const aspenLowForb = [
  [depth, [0.18, 0.18, 0.18, 0.18, 0.18, 0.18]],
  [dead1Load, [0.601, 0.645, 0.671, 0.699, 0.73, 0.7455]],
  [dead1Savr, [1400, 1540, 1620, 1690, 1750, 1780]],
  [dead10Load, [1.035, 1.035, 1.035, 1.035, 1.035, 1.035]],
  [liveHerbLoad, [0.15, 0.105, 0.075, 0.045, 0.015, 0]],
  [liveStemLoad, [0, 0, 0, 0, 0, 0]],
  [liveStemSavr, [2440, 2440, 2440, 2440, 2440, 2440]]
]

const mixedShrub = [
  [depth, [0.5, 0.5, 0.5, 0.5, 0.5, 0.5]],
  [dead1Load, [0.88, 0.906, 1.037, 1.167, 1.3, 1.3665]],
  [dead1Savr, [1350, 1420, 1710, 1910, 2060, 2135]],
  [dead10Load, [1.34, 1.34, 1.34, 1.34, 1.34, 1.34]],
  [liveHerbLoad, [0.1, 0.07, 0.05, 0.03, 0.01, 0]],
  [liveStemLoad, [0.455, 0.455, 0.364, 0.29, 0.261, 0.2465]],
  [liveStemSavr, [2530, 2530, 2410, 2210, 1800, 1800]]
]

const mixedForb = [
  [depth, [0.18, 0.18, 0.18, 0.18, 0.18, 0.18]],
  [dead1Load, [0.754, 0.797, 0.825, 0.854, 0.884, 0.899]],
  // [dead1LoadDEPRECATED: [0.754, 0.797, 0.825, 1.167, 0.884, 0.8990]],
  [dead1Savr, [1420.0, 1540.0, 1610.0, 1670.0, 1720.0, 1745.0]],
  [dead10Load, [1.115, 1.115, 1.115, 1.115, 1.115, 1.115]],
  [liveHerbLoad, [0.15, 0.105, 0.075, 0.045, 0.015, 0]],
  [liveStemLoad, [0, 0, 0, 0, 0, 0]],
  [liveStemSavr, [2440, 2440, 2440, 2440, 2440, 2440]]
]

const types = [aspenShrub, aspenTallForb, aspenLowForb, mixedShrub, mixedForb]
const keys = [
  'aspenShrub',
  'aspenTallForb',
  'aspenLowForb',
  'mixedShrub',
  'mixedForb'
]
const ppsf = 2000 / 43560

test('1 Western Aspen fuel library - Table', () => {
  dag.clearSelected()
  dag.configure([['configure.fuel.primary', 'westernAspen']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('westernAspen')

  dag.select(aspenShrub.map(node => node[0])).run()
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(type)
  expect(inputNodes).toContain(curingLevel)

  expect(WesternAspen.deadFineLoad('aspenShrub', 0)).toEqual(ppsf * 0.8)

  const levels = [0, 0.3, 0.5, 0.7, 0.9, 1]
  types.forEach((fuel, fuelIdx) => {
    const key = keys[fuelIdx]
    const aspen = types[fuelIdx]
    levels.forEach((level, idx) => {
      dag.input([
        [type, key],
        [curingLevel, level]
      ]).run()
      expect(depth.value()).sig(aspen[0][1][idx], 12, `${key} ${depth.key} ${level}`)
      expect(dead1Load.value()).sig(ppsf * aspen[1][1][idx], 12, `${key} ${dead1Load.key} ${level}`)
      expect(dead1Savr.value()).sig(aspen[2][1][idx], 12, `${key} ${dead1Savr.key} ${level}`)
      expect(dead10Load.value()).sig(ppsf * aspen[3][1][idx], 12, `${key} ${dead10Load.key} ${level}`)
      expect(liveHerbLoad.value()).sig(ppsf * aspen[4][1][idx], 12, `${key} ${liveHerbLoad.key} ${level}`)
      expect(liveStemLoad.value()).sig(ppsf * aspen[5][1][idx], 12, `${key} ${liveStemLoad.key} ${level}`)
      expect(liveStemSavr.value()).sig(aspen[6][1][idx], 12, `${key} ${liveStemSavr.key} ${level}`)
    })
  })
})

test('2: Western Aspen constants', () => {
  ;['primary', 'secondary'].forEach(fuel => {
    dag.configure([[`configure.fuel.${fuel}`, 'westernAspen']])
    expect(dag.get(`configure.fuel.${fuel}`).value()).toEqual('westernAspen')

    const data = [
      [`surface.${fuel}.fuel.bed.dead.extinction.moistureContent`, 0.25],

      // [`surface.${fuel}.fuel.bed.dead.particle.class1.label`, 'Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood'],
      [`surface.${fuel}.fuel.bed.dead.particle.class1.heatOfCombustion`, 8000],
      [`surface.${fuel}.fuel.bed.dead.particle.class1.fiberDensity`, 32],
      [`surface.${fuel}.fuel.bed.dead.particle.class1.effective.mineralContent`, 0.01],
      [`surface.${fuel}.fuel.bed.dead.particle.class1.total.mineralContent`, 0.055],

      // [`surface.${fuel}.fuel.bed.dead.particle.class2.label`, 'Dead 10-h time-lag (0.25 to 1 inch diameter) stem wood'],
      [`surface.${fuel}.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio`, 109],
      [`surface.${fuel}.fuel.bed.dead.particle.class2.heatOfCombustion`, 8000],
      [`surface.${fuel}.fuel.bed.dead.particle.class2.fiberDensity`, 32],
      [`surface.${fuel}.fuel.bed.dead.particle.class2.effective.mineralContent`, 0.01],
      [`surface.${fuel}.fuel.bed.dead.particle.class2.total.mineralContent`, 0.055],

      // [`surface.${fuel}.fuel.bed.dead.particle.class3.label`, 'unused'],
      // [`surface.${fuel}.fuel.bed.dead.particle.class4.label`, 'unused'],
      // [`surface.${fuel}.fuel.bed.dead.particle.class5.label`, 'unused'],

      // [`surface.${fuel}.fuel.bed.live.particle.class1.label`, 'Live herb'],
      [`surface.${fuel}.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio`, 2800],
      [`surface.${fuel}.fuel.bed.live.particle.class1.heatOfCombustion`, 8000],
      [`surface.${fuel}.fuel.bed.live.particle.class1.fiberDensity`, 32],
      [`surface.${fuel}.fuel.bed.live.particle.class1.effective.mineralContent`, 0.01],
      [`surface.${fuel}.fuel.bed.live.particle.class1.total.mineralContent`, 0.055],

      // [`surface.${fuel}.fuel.bed.live.particle.class2.label`, 'Live woody'],
      [`surface.${fuel}.fuel.bed.live.particle.class2.heatOfCombustion`, 8000],
      [`surface.${fuel}.fuel.bed.live.particle.class2.fiberDensity`, 32],
      [`surface.${fuel}.fuel.bed.live.particle.class2.effective.mineralContent`, 0.01],
      [`surface.${fuel}.fuel.bed.live.particle.class2.total.mineralContent`, 0.055]
      // [`surface.${fuel}.fuel.bed.live.particle.class3.label`, 'unused'],
      // [`surface.${fuel}.fuel.bed.live.particle.class4.label`, 'unused'],
      // [`surface.${fuel}.fuel.bed.live.particle.class5.label`, 'unused'],
    ]

    dag.select(data.map(node => node[0])).run()
    data.forEach(datum => {
      const [key, value] = datum
      expect(dag.get(key).value()).sig(value, 10, key)
    })
  })
})

test('3: Western Aspen interpolation', () => {
  dag.clearSelected()
  dag.configure([['configure.fuel.primary', 'westernAspen']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('westernAspen')

  dag.select(aspenShrub.map(node => node[0]))
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(type)
  expect(inputNodes).toContain(curingLevel)

  const d1l30 = 0.893
  const d1l50 = 1.056
  const d1l40 = d1l30 + 0.5 * (d1l50 - d1l30)
  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, 0.4]
  ]).run()
  expect(dead1Load.value()).toEqual(ppsf * d1l40)

  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, 0]
  ]).run()
  expect(dead1Load.value()).toEqual(ppsf * 0.8)

  // Negative curing level is lower bound to 0
  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, -1]
  ])
  expect(() => dag.run()).not.toThrow()
  expect(dead1Load.value()).toEqual(ppsf * 0.8)

  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, 0]
  ]).run()
  expect(dead1Load.value()).toEqual(ppsf * 0.8)

  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, 1]
  ]).run()
  expect(dead1Load.value()).toEqual(ppsf * 1.4595)

  // Curing level > 1 is upper bound to 1
  dag.input([
    [type, 'aspenShrub'],
    [curingLevel, 2]
  ])
  expect(() => dag.run()).not.toThrow()
  expect(dead1Load.value()).toEqual(ppsf * 1.4595)
})

test('4: Western Aspen catalog', () => {
  dag.clearSelected()
  dag.configure([['configure.fuel.primary', 'catalog']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('catalog')

  dag.select(aspenShrub.map(node => node[0]))
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(catalogKey)
  dag.input([[catalogKey, 'aspenShrub50']]).run()

  expect(type.value()).toEqual('aspenShrub')
  expect(curingLevel.value()).toEqual(0.5)
  expect(depth.value()).toEqual(0.65)
  expect(dead1Load.value()).toEqual(ppsf * 1.056)
  expect(dead1Savr.value()).toEqual(1910)
  expect(dead10Load.value()).toEqual(ppsf * 0.975)
  expect(liveHerbLoad.value()).toEqual(ppsf * 0.167)
  expect(liveStemLoad.value()).toEqual(ppsf * 0.333)
  expect(liveStemSavr.value()).toEqual(2310)
})

test('5: Coverage', () => {
  expect(WesternAspen.fuelTypes()).toEqual([
    'aspenShrub',
    'aspenTallForb',
    'aspenLowForb',
    'mixedShrub',
    'mixedForb'
  ])

  expect(WesternAspen.deadMext()).toEqual(0.25)
})

test('6: Edge cases for unknown fuel type', () => {
  const fuelType = 'junk'
  const curingLevel = 0.5
  expect(WesternAspen.depth(fuelType)).toEqual(0.01)
  expect(WesternAspen.deadFineLoad(fuelType, curingLevel)).toEqual(0)
  expect(WesternAspen.deadFineSavr(fuelType, curingLevel)).toEqual(1)
  expect(WesternAspen.deadSmallLoad(fuelType, curingLevel)).toEqual(0)
  expect(WesternAspen.liveHerbLoad(fuelType, curingLevel)).toEqual(0)
  expect(WesternAspen.liveStemLoad(fuelType, curingLevel)).toEqual(0)
  expect(WesternAspen.liveStemSavr(fuelType, curingLevel)).toEqual(1)
})