import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

// These require the minimum set of inputs
const Results1 = [
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 0.94221105527638194, 12],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 0.034233668341708545, 12],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 0.023555276381909549, 12],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 0, 12],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 0, 12],

  ['crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 0.94221105527638194, 12],
  ['crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 0.034233668341708545, 12],
  ['crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 0.023555276381909549, 12],
  ['crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 0.94221105527638194, 12],
  ['crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 0, 12],

  ['crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 0.138, 12],
  ['crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 0.092, 12],
  ['crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 0.23, 12],
  ['crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 0, 12],
  ['crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 0, 12],

  ['crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad', (1 - 0.0555) * 0.138, 12],
  ['crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad', (1 - 0.0555) * 0.092, 12],
  ['crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad', (1 - 0.0555) * 0.23, 12],
  ['crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad', 0, 12],
  ['crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad', 0, 12],

  ['crown.canopy.fuel.bed.dead.particle.class1.moistureContent', 0.05, 12],
  ['crown.canopy.fuel.bed.dead.particle.class2.moistureContent', 0.07, 12],
  ['crown.canopy.fuel.bed.dead.particle.class3.moistureContent', 0.09, 12],
  ['crown.canopy.fuel.bed.dead.particle.class4.moistureContent', 0.05, 12],
  ['crown.canopy.fuel.bed.dead.particle.class5.moistureContent', 5, 12],
  ['crown.canopy.fuel.bed.dead.particle.class1.fiberDensity', 32, 12],
  ['crown.canopy.fuel.bed.live.particle.class1.moistureContent', 0.5, 12],
  ['crown.canopy.fuel.bed.live.particle.class2.moistureContent', 1.5, 12],
  ['crown.canopy.fuel.bed.dead.moistureContent', 0.051626884422110553, 12],
  // dead.reactionIntensity is only 4 significant digits
  ['crown.canopy.fuel.bed.reactionVelocityOptimum', 12.674359628667819, 12],
  ['crown.canopy.fuel.bed.dead.heatOfCombustion', 8000, 12],
  ['crown.canopy.fuel.bed.dead.mineralDamping', 0.41739692790939131, 12],
  ['crown.canopy.fuel.bed.dead.moistureDamping', 0.65206408989980214, 12],
  ['crown.canopy.fuel.bed.dead.ovendryLoad', 0.46, 12],
  ['crown.canopy.fuel.bed.dead.net.ovendryLoad', (1 - 0.0555) * 0.13859233668341708, 12],

  ['crown.canopy.fuel.bed.dead.reactionIntensityDry', 5539.9575948899355, 12],
  ['crown.canopy.fuel.bed.live.reactionIntensityDry', 3677.5200629895871, 12],
  ['crown.canopy.fuel.bed.dead.reactionIntensity', 3612.4074071954024, 12],
  ['crown.canopy.fuel.bed.live.reactionIntensity', 2182.287993033714, 12],
  ['crown.canopy.fuel.bed.surfaceArea', 13.4665, 12],
  ['crown.canopy.fuel.bed.bulkDensity', 0.552, 12],
  ['crown.canopy.fuel.bed.packingRatio', 0.01725, 12],
  ['crown.canopy.fuel.bed.ovendryLoad', 0.552, 12],
  ['crown.canopy.fuel.bed.surfaceAreaToVolumeRatio', 1764.3319812126388, 12],
  ['crown.canopy.fuel.bed.propagatingFluxRatio', 0.048317062998571636, 12],
  ['crown.canopy.fuel.bed.reactionVelocityExponent', 0.35878365060452616, 12],
  ['crown.canopy.fuel.bed.reactionVelocityMaximum', 15.13331887756658, 12],
  ['crown.canopy.fuel.bed.reactionVelocityOptimum', 12.674359628667819, 12],
  ['crown.canopy.fuel.bed.heatOfPreignition', 746.993428042342, 12],
  ['crown.canopy.fuel.bed.reactionIntensity', 5794.6954002291168, 12],
  ['crown.canopy.fuel.bed.heatSink', 412.34037227937284, 12],
  ['crown.canopy.fuel.bed.noWindNoSlope.spreadRate', 0.67900860922904482, 12],
  ['crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 0.67900860922904482, 12],
  ['crown.canopy.fuel.fire.slope.phi', 0, 12],
  ['crown.canopy.fuel.fire.wind.phi', 26.298112107312534, 12],
  ['crown.canopy.fuel.fire.phiEffectiveWind', 26.298112107312534, 12],
  ['crown.canopy.fuel.fire.spreadRate', 18.535653136564, 12],
  ['crown.fire.active.lengthToWidthRatio', 4.125, 12],
  ['crown.fire.active.spreadRate', 3.34 * 18.535653136564832, 12],
  ['crown.fire.active.spreadRate', 61.909081476126, 12],
  ['crown.fire.active.powerOfTheWind', 47.96568165233, 12]
]
// Just 6 inputs because waf, slope, and fuel model are fixed
const Inputs1 = [
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.live.herb', [0.5]],
  ['site.moisture.live.stem', [1.5]],
  ['site.wind.speed.at20ft', [25 * 88]]
]

// By requesting power of the wind (or crown fire intensity), we need a surface fire
const Results2 = [
  ['crown.fire.surface.heatPerUnitArea', 12976.692888496578 * 0.23541979977677915, 12],
  ['crown.fire.surface.heatPerUnitArea', 3054.970441574617, 12],
  //  ['crown.fire.active.heatPerUnitArea', 17454.97044157461, 12],
  ['crown.fire.active.firelineIntensity', 18010.35312051372, 12],
  ['crown.fire.active.flameLength', 137.418376789506, 12],
  ['crown.fire.active.powerOfTheFire', 139.615140469098, 12],
  ['crown.fire.active.powerRatio', 2.9107298314046, 12],
  ['crown.fire.active.isPlumeDominated', true, null],
  ['crown.fire.active.isWindDriven', false, null]
]

const Inputs2 = [
  ['site.canopy.crown.baseHeight', [10]],
  ['site.canopy.crown.totalHeight', [100]],
  ['site.canopy.fuel.bulkDensity', [0.02]],
  ['site.fire.observed.heatPerUnitArea', [3054.970441574617]]
]

const Inputs3 = [
  ['surface.primary.fuel.model.catalogKey', ['124']],
  ['surface.primary.fuel.model.behave.parms.cured.herb.fraction', [0.778]]
]

test('1: Rothermel active crown fire - standAlone 1', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const allInputs = [...Inputs1].map(rec => dag.get(rec[0]))

  // These require the minimum set of inputs
  dag.configure([
    ['link.crownFire', 'standAlone'],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
  ])
  dag.select(Results1.map(node => node[0])).run()

  // Just 6 inputs because crown canopy waf, slope, and fuel model are fixed
  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs 1'))
  expect(requiredInputs.length).toEqual(6)
  requiredInputs.forEach(req => expect(allInputs).toContain(req))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl1h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl10h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl100h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.herb'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.stem'))
  expect(requiredInputs).toContain(dag.get('site.wind.speed.at20ft'))

  dag.input(Inputs1).run()
  Results1.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})

test('2: Rothermel active crown fire - standAlone 2', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const allInputs = [...Inputs1, ...Inputs2].map(rec => dag.get(rec[0]))

  // Same configuration as test 1, but with more selected outputs
  dag.configure([
    ['link.crownFire', 'standAlone'],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
  ])

  // By requesting power of the wind (or crown fire intensity),
  // we need to provide surface fire HPUA and a canopy
  dag.select(Results1.map(node => node[0]))
  dag.select(Results2.map(node => node[0]))

  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs 2'))
  expect(requiredInputs.length).toEqual(10)
  requiredInputs.forEach(req => {
    expect(allInputs).toContain(req)
  })
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl1h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl10h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl100h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.herb'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.stem'))
  expect(requiredInputs).toContain(dag.get('site.wind.speed.at20ft'))
  expect(requiredInputs).toContain(dag.get('site.canopy.crown.baseHeight'))
  expect(requiredInputs).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(requiredInputs).toContain(dag.get('site.canopy.fuel.bulkDensity'))
  expect(requiredInputs).toContain(dag.get('site.fire.observed.heatPerUnitArea'))

  dag.input(Inputs1)
  dag.input(Inputs2).run()
  Results1.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
  Results2.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})

test('3: Rothermel active crown fire - linked to surfaceFire', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const allInputs = [...Inputs1, ...Inputs2, ...Inputs3].map(rec =>
    dag.get(rec[0])
  )

  dag.configure([
    ['link.crownFire', 'linkedToSurfaceFire'],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
  ])

  // By requesting power of the wind (or crown fire intensity),
  // we need to provide surface fire HPUA and a canopy
  dag.select(Results1.map(node => node[0]))
  dag.select(Results2.map(node => node[0]))

  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs 2'))
  expect(requiredInputs.length).toEqual(11)
  requiredInputs.forEach(req => {
    expect(allInputs).toContain(req)
  })
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl1h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl10h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.dead.tl100h'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.herb'))
  expect(requiredInputs).toContain(dag.get('site.moisture.live.stem'))
  expect(requiredInputs).toContain(dag.get('site.wind.speed.at20ft'))
  expect(requiredInputs).toContain(dag.get('site.canopy.crown.baseHeight'))
  expect(requiredInputs).toContain(dag.get('site.canopy.crown.totalHeight'))
  expect(requiredInputs).toContain(dag.get('site.canopy.fuel.bulkDensity'))
  // expect(requiredInputs).toNotContain(dag.get('site.fire.observed.heatPerUnitArea'))
  expect(requiredInputs).toContain(dag.get('surface.primary.fuel.model.catalogKey'))
  expect(requiredInputs).toContain(dag.get('surface.primary.fuel.model.behave.parms.cured.herb.fraction'))

  dag.input(Inputs1)
  dag.input(Inputs2)
  dag.input(Inputs3).run()
  Results1.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
  Results2.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})
