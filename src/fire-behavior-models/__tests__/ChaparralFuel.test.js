import { Sim } from '../../index.js'
import * as DagJest from './matchers.js'
import * as Chaparral from '../ChaparralFuel.js'

const value = DagJest.value
const sig = DagJest.sig
expect.extend({ sig, value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([
  ['configure.fuel.primary', 'chaparral'],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][1]]
])

const parms = 'surface.primary.fuel.model.chaparral.parms.'
const parmsType = dag.get(parms + 'chaparralType')
const parmsDeadFraction = dag.get(parms + 'observed.deadFuelFraction')
const parmsDepth = dag.get(parms + 'observed.depth')
const observedTotalLoad = dag.get(parms + 'observed.totalLoad')
const appliedTotalLoad = dag.get(parms + 'applied.totalLoad')

const derived = 'surface.primary.fuel.model.chaparral.derived.'
const derivedAge = dag.get(derived + 'age')
// const averageMortality = dag.get(derived + 'averageMortality')
// const severeMortality = dag.get(derived + 'severeMortality')
// const derivedDepth = dag.get(derived + 'depth')
const derivedTotalLoad = dag.get(derived + 'totalLoad')

const deadLoad = dag.get(derived + 'deadLoad')
const deadFineLoad = dag.get(derived + 'deadFineLoad')
const deadSmallLoad = dag.get(derived + 'deadSmallLoad')
const deadMediumLoad = dag.get(derived + 'deadMediumLoad')
const deadLargeLoad = dag.get(derived + 'deadLargeLoad')

const liveLoad = dag.get(derived + 'liveLoad')
const liveFineLoad = dag.get(derived + 'liveFineLoad')
const liveSmallLoad = dag.get(derived + 'liveSmallLoad')
const liveMediumLoad = dag.get(derived + 'liveMediumLoad')
const liveLargeLoad = dag.get(derived + 'liveLargeLoad')
const liveLeafLoad = dag.get(derived + 'liveLeafLoad')

const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

const chamise = [
  [parmsDepth, 6.0],
  [parmsDeadFraction, 0.5],
  [derivedAge, 33.0830062109],
  [derivedTotalLoad, 0.5855947273],
  [appliedTotalLoad, 0.5855947273],
  [deadLoad, 0.2927973636],
  [liveLoad, 0.2927973636],
  [deadFineLoad, 0.1016006852],
  [deadSmallLoad, 0.1065782404],
  [deadMediumLoad, 0.0606090543],
  [deadLargeLoad, 0.0240093838],
  [liveFineLoad, 0.066523561],
  [liveSmallLoad, 0.0373609436],
  [liveMediumLoad, 0.1404256156],
  [liveLeafLoad, 0.0252976922],
  [liveLargeLoad, 0.0231895512] // 0.02728871429],
]
const mixed = [
  [parmsDepth, 6.0],
  [parmsDeadFraction, 0.5],
  [derivedAge, 20.7022002273],
  [derivedTotalLoad, 1.135841012],
  [appliedTotalLoad, 1.135841012],
  [deadLoad, 0.567920506],
  [liveLoad, 0.567920506],
  [deadFineLoad, 0.1970684156],
  [deadSmallLoad, 0.2067230642],
  [deadMediumLoad, 0.1175595447],
  [deadLargeLoad, 0.0465694815],
  [liveFineLoad, 0.129031539],
  [liveSmallLoad, 0.0724666566],
  [liveMediumLoad, 0.2723746747],
  [liveLeafLoad, 0.0490683317],
  [liveLargeLoad, 0.0449793041]
]

test('1: Chaparral fuel library - chamise', () => {
  dag.configure([
    ['configure.fuel.primary', 'chaparral'],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][1]]
  ])
  expect(dag.get('configure.fuel.primary').value()).toEqual('chaparral')
  expect(dag.get('configure.fuel.chaparralTotalLoad').value()).toEqual('estimated')

  dag.select(chamise.map(node => node[0]))
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(parmsDepth)
  expect(inputNodes).toContain(parmsDeadFraction)
  expect(inputNodes).toContain(parmsType)

  dag.input([
    [parmsType, Chaparral.TypeChamise],
    [parmsDepth, 6],
    [parmsDeadFraction, 0.5]
  ]).run()

  const sumDead =
    deadFineLoad.value() +
    deadSmallLoad.value() +
    deadMediumLoad.value() +
    deadLargeLoad.value()
  expect(deadLoad.value()).toEqual(sumDead)

  const sumLive =
    liveFineLoad.value() +
    liveSmallLoad.value() +
    liveMediumLoad.value() +
    liveLargeLoad.value() +
    liveLeafLoad.value()
  expect(liveLoad.value()).toEqual(sumLive)

  chamise.forEach(pair => {
    const [node, expected] = pair
    expect(node.value()).sig(expected, 8, node.key)
  })
  expect(observedTotalLoad.value()).sig(0, 12, observedTotalLoad.key)
})

test('2: Chaparral fuel library - mixed  brush', () => {
  dag.configure([
    ['configure.fuel.primary', 'chaparral']
  ])
  expect(dag.get('configure.fuel.primary').value()).toEqual('chaparral')
  expect(dag.get('configure.fuel.chaparralTotalLoad').value()).toEqual('estimated')

  dag.select(chamise.map(node => node[0]))
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(parmsDepth)
  expect(inputNodes).toContain(parmsDeadFraction)
  expect(inputNodes).toContain(parmsType)

  dag.input([
    [parmsType, Chaparral.TypeMixedBrush],
    [parmsDepth, 6],
    [parmsDeadFraction, 0.5]
  ]).run()

  const sumDead =
    deadFineLoad.value() +
    deadSmallLoad.value() +
    deadMediumLoad.value() +
    deadLargeLoad.value()
  expect(deadLoad.value()).toEqual(sumDead)

  const sumLive =
    liveFineLoad.value() +
    liveSmallLoad.value() +
    liveMediumLoad.value() +
    liveLargeLoad.value() +
    liveLeafLoad.value()
  expect(liveLoad.value()).toEqual(sumLive)

  mixed.forEach(pair => {
    const [node, expected] = pair
    expect(node.value()).sig(expected, 8, node.key)
  })
  expect(observedTotalLoad.value()).sig(0, 12, observedTotalLoad.key)
})

test('3 Chaparral constants', () => {
  dag.configure([['configure.fuel.primary', 'chaparral']])
  expect(dag.get('configure.fuel.primary').value()).toEqual('chaparral')

  // Table 1      Savr   Seff   Dens
  // 0.0 - 0.25"   640  0.015   46
  // .25 - 0.50"   127  0.015   46
  // 0.5 - 1.00"    61  0.015   46
  // 1.0 - 3.00"    27  0.015   46
  // Leaves       2200  0.035   32

  const data = [
    ['surface.primary.fuel.bed.dead.extinction.moistureContent', 0.3],

    // ['surface.primary.fuel.bed.dead.particle.class1.label', 'Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio',
      640],
    ['surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', 8000],
    ['surface.primary.fuel.bed.dead.particle.class1.fiberDensity', 46],
    ['surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', 0.015],
    [
      'surface.primary.fuel.bed.dead.particle.class1.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.dead.particle.class2.label', 'Dead small 10-h time-lag (0.25 to 0.5 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 127],
    ['surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', 8000],
    ['surface.primary.fuel.bed.dead.particle.class2.fiberDensity', 46],
    ['surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.dead.particle.class2.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.dead.particle.class3.label', 'Dead medium 10-h time-lag (0.5 to 1 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 61],
    ['surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', 8000],
    ['surface.primary.fuel.bed.dead.particle.class3.fiberDensity', 46],
    ['surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.dead.particle.class3.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.dead.particle.class4.label', 'Dead 100-h time-lag (1 to 3 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 27],
    ['surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', 8000],
    ['surface.primary.fuel.bed.dead.particle.class4.fiberDensity', 46],
    ['surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.dead.particle.class4.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.live.particle.class1.label', 'Live fine (0 to 0.25 inch diameter) stem wood',],
    ['surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 640],
    ['surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', 10500],
    ['surface.primary.fuel.bed.live.particle.class1.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class1.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.live.particle.class2.label', 'Live small (0.25 to 0.5 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 127],
    ['surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', 9550],
    ['surface.primary.fuel.bed.live.particle.class2.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class2.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.live.particle.class3.label', 'Live medium (0.5 to 1 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 61],
    ['surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', 9550],
    ['surface.primary.fuel.bed.live.particle.class3.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class3.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.live.particle.class4.label', 'Live large (1 to 3 inch diameter) stem wood'],
    ['surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 27],
    ['surface.primary.fuel.bed.live.particle.class4.heatOfCombustion', 9550],
    ['surface.primary.fuel.bed.live.particle.class4.fiberDensity', 46],
    ['surface.primary.fuel.bed.live.particle.class4.effective.mineralContent', 0.015],
    ['surface.primary.fuel.bed.live.particle.class4.total.mineralContent', 0.055],

    // ['surface.primary.fuel.bed.live.particle.class5.label', 'Live leaves'],
    ['surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 2200],
    ['surface.primary.fuel.bed.live.particle.class5.heatOfCombustion', 10500],
    ['surface.primary.fuel.bed.live.particle.class5.fiberDensity', 32],
    ['surface.primary.fuel.bed.live.particle.class5.effective.mineralContent', 0.035],
    ['surface.primary.fuel.bed.live.particle.class5.total.mineralContent', 0.055]
  ]

  dag.select(data.map(node => node[0])).run()
  data.forEach(datum => {
    const [key, value] = datum
    expect(dag.get(key).value()).sig(value, 10, key)
  })
})

test('4: Chaparral fuel catalog with estimated total load', () => {
  dag.configure([
    ['configure.fuel.primary', 'catalog'],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][1]]
  ])
  expect(dag.get('configure.fuel.primary').value()).toEqual('catalog')

  dag.select(chamise.map(node => node[0])).run()
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(catalogKey)
  dag.input([
    [catalogKey, 'chaparral/type=chamise/depth=6/deadFraction=0.5']
  ]).run()

  expect(parmsDepth.value()).toEqual(6)
  expect(parmsDeadFraction.value()).toEqual(0.5)
  expect(derivedTotalLoad.value()).toBeCloseTo(0.5855947273, 8)
  expect(appliedTotalLoad.value()).toBeCloseTo(0.5855947273, 8)
  expect(deadLoad.value()).toBeCloseTo(0.5 * 0.5855947273, 8)

  expect(observedTotalLoad.value()).toEqual(0)
  dag.select([observedTotalLoad]).run()
  inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(catalogKey)
  expect(observedTotalLoad.value()).toEqual(1)

  const sumDead =
    deadFineLoad.value() +
    deadSmallLoad.value() +
    deadMediumLoad.value() +
    deadLargeLoad.value()
  expect(deadLoad.value()).toBeCloseTo(sumDead, 12)

  const sumLive =
    liveFineLoad.value() +
    liveSmallLoad.value() +
    liveMediumLoad.value() +
    liveLargeLoad.value() +
    liveLeafLoad.value()
  expect(liveLoad.value()).toEqual(sumLive)

  chamise.forEach(pair => {
    const [node, expected] = pair
    expect(node.value()).sig(expected, 8, node.key)
  })
})

test('5: Chaparral fuel catalog with observed total load', () => {
  dag.configure([
    ['configure.fuel.primary', 'catalog'],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]]
  ])
  expect(dag.get('configure.fuel.primary').value()).toEqual('catalog')

  dag.select(chamise.map(node => node[0]))
  dag.select([observedTotalLoad]).run()
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(1)
  expect(inputNodes).toContain(catalogKey)
  dag.input([
    [catalogKey, 'chaparral/type=chamise/depth=6/deadFraction=0.5']
  ]).run()

  expect(parmsDepth.value()).toEqual(6)
  expect(parmsDeadFraction.value()).toEqual(0.5)
  expect(observedTotalLoad.value()).toEqual(1)
  expect(derivedTotalLoad.value()).toBeCloseTo(0.5855947273, 8)
  expect(appliedTotalLoad.value()).toEqual(1)
  expect(deadLoad.value()).toBeCloseTo(0.5, 8)
})

test('6: Coverage', () => {
  const age = 20
  const x = Math.log(Math.max(age, 1.1)) / 3.912023
  expect(Chaparral.fuelDepth(age, Chaparral.TypeChamise)).toEqual(7.5 * x * x)
  expect(Chaparral.fuelDepth(age, Chaparral.TypeMixedBrush)).toEqual(10 * x * x)

  expect(Chaparral.deadFractionAverageMortality(age))
    .toEqual(0.0694 * Math.exp(0.0402 * age))

  expect(Chaparral.deadFractionSevereMortality(age))
    .toEqual(0.1094 * Math.exp(0.0385 * age))

  expect(Chaparral.deadExtinctionMoisture()).toEqual(0.3)

  expect(Chaparral.fuelTypes()).toEqual(['chamise', 'mixedBrush'])
})
