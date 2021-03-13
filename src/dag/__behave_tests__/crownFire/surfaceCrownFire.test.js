import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const Configs = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][2]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight'],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
]

const Inputs1 = [
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.live.herb', [1.5]], // CHANGED FROM 0.5
  ['site.moisture.live.stem', [1.5]],
  ['site.slope.direction.aspect', [180]],
  ['site.slope.steepness.ratio', [0.25]],
  ['site.wind.direction.source.fromNorth', [270]],
  ['site.windSpeedAdjustmentFactor', [0.4]],
  ['site.wind.speed.at20ft', [25 * 88]],
  ['surface.primary.fuel.model.catalogKey', ['124']]
]

const Inputs2 = [
  ['site.canopy.crown.baseHeight', [10]],
  ['site.canopy.crown.totalHeight', [90]], // CHANGED FROM 100
  ['site.canopy.fuel.bulkDensity', [0.005]] // CHANGED FROM 0.02
]

const Inputs3 = [
  ['site.canopy.fuel.foliar.moistureContent', [0.7]] // CHANGED FROM 0.5
]

const Inputs4 = []

// const Inputs5 = [
//   ['site.fire.time.sinceIgnition', [60]],
//   ['site.map.scale', [12000]]
// ]

// const InputsUnused = [
//   ['site.fire.observed.heatPerUnitArea', [3054.970441574617]],
//   ['site.fire.vector.fromNorth', [45]],
//   ['site.temperature.air', [95]]
// ]

// Basic surface fire results to ensure correct values
const surface = 'surface.primary.fuel.fire.' // or 'surface.weighted.fire.'
const Results1 = [
  [surface + 'spreadRate', 8.574903, 6],
  [surface + 'firelineIntensity', 102.375854, 6],
  [surface + 'flameLength', 3.783584, 6],
  [surface + 'reactionIntensity', 3042.822367, 6],
  [surface + 'heatPerUnitArea', 716.340633, 9],
  ['surface.primary.fuel.bed.heatSink', 423.102321, 6]
]

// Rothermel crown fire results
const Results2 = [
  ['site.canopy.fuel.bulkDensity', 0.005, 12],
  ['site.canopy.fuel.ovendryLoad', 0.4, 12],
  ['site.canopy.fire.heatPerUnitArea', 3200, 12],
  ['crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 0.67900860922904482, 12],
  ['crown.canopy.fuel.fire.slope.phi', 0, 12],
  ['crown.canopy.fuel.fire.wind.phi', 26.298112107312534, 12],
  ['crown.canopy.fuel.fire.phiEffectiveWind', 26.298112107312534, 12],
  ['crown.canopy.fuel.fire.spreadRate', 18.535653136564, 12],
  ['crown.canopy.fuel.fire.reactionIntensity', 5794.6954002291168, 12],
  ['crown.fire.active.firelineIntensity', 4040.950855, 9, 12],
  ['crown.fire.active.flameLength', 50.740223, 7, 12],
  ['crown.fire.active.heatPerUnitArea', 3916.340633, 9, 12],
  ['crown.fire.active.isPlumeDominated', false, null],
  ['crown.fire.active.isWindDriven', true, null],
  ['crown.fire.active.lengthToWidthRatio', 4.125, 12],
  ['crown.fire.active.powerOfTheWind', 47.96568165233, 12],
  ['crown.fire.active.powerOfTheFire', 31.3252004271, 9, 12],
  ['crown.fire.active.powerRatio', 0.653075, 6, 12],
  ['crown.fire.active.spreadRate', 61.909081476126, 12],
  ['crown.fire.surface.heatPerUnitArea', 716.340633, 9, 12]
]

// Crown fire initiation results
const Results3 = [
  ['crown.fire.initiation.firelineIntensity', 166.466274, 9],
  ['crown.fire.initiation.spreadRate', 13.943054, 7],
  ['crown.fire.initiation.rPrime', 122.88966339231122],
  ['crown.fire.initiation.transitionRatio', 0.614995, 6],
  ['crown.fire.initiation.activeRatio', 0.5037777772935131, 12],
  ['crown.fire.initiation.canTransition', false, null],
  ['crown.fire.initiation.type', 'Surface', null],
  ['crown.fire.initiation.isActiveCrownFire', false, null],
  ['crown.fire.initiation.isConditionalCrownFire', false, null],
  ['crown.fire.initiation.isCrownFire', false, null],
  ['crown.fire.initiation.isPassiveCrownFire', false, null],
  ['crown.fire.initiation.isSurfaceFire', true, null],
  ['crown.fire.initiation.oActive', 3599.1528163069893, 12]
]

// Final crown fire behavior results
const Results4 = [
  ['crown.fire.final.rSa', 16.93053675249959, 12],
  ['crown.fire.final.crownFractionBurned', 0, 12],
  ['crown.fire.final.spreadRate', 8.574903, 6],
  ['crown.fire.final.firelineIntensity', 102.375854, 9],
  // NOTE that if this is a SURFACE fire,
  // this flame length != the surface fire flame length
  ['surface.primary.fuel.fire.flameLength', 3.783584, 6],
  ['crown.fire.final.flameLength', 4.3768502, 6]
]

/**
 * Note that for the Benchmark124 case,
 * the wind is NOT blowing upslope, so S&R final results are invalid
 */
test('1: Surface-only crown fire per BP6', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(Configs)

  // Start with the basic surface fire behaviors to ensure correct values
  dag.select(Results1.map(node => node[0]))
  let requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(Inputs1.length)
  Inputs1.forEach(input => {
    expect(requiredInputs).toContain(dag.get(input[0]))
  })

  dag.input(Inputs1).run()
  Results1.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })

  // Now request the Rothermel crown fire results
  dag.select(Results2.map(node => node[0]))
  requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(Inputs1.length + Inputs2.length)
  Inputs2.forEach(input => {
    expect(requiredInputs).toContain(dag.get(input[0]))
  })

  dag.input(Inputs2).run()
  let results = [...Results1, ...Results2]
  results.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })

  // Now request crown fire initiation
  dag.select(Results3.map(node => node[0]))
  requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(
    Inputs1.length + Inputs2.length + Inputs3.length
  )
  expect(requiredInputs).toContain(
    dag.get('site.canopy.fuel.foliar.moistureContent')
  )

  dag.input(Inputs3).run()
  results = [...Results1, ...Results2, ...Results3]
  results.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })

  // Final crown fire results (no new inputs required)
  dag.select(Results4.map(node => node[0]))
  requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(
    Inputs1.length + Inputs2.length + Inputs3.length
  )

  dag.input(Inputs4).run()
  results = [...Results1, ...Results2, ...Results3, ...Results4]
  results.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})
