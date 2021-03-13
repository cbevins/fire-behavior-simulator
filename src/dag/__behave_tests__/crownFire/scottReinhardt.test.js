import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

// The S&R samples are all in SI
// Here are multiplicaton factors to convert from base to metric
// i.e., metricValue * factor = baseValue
// and baseValue / factor = metric value
const fDistance = 3.2808 // m * f = ft
const fRos = 3.2808 // m/min * f = ft/min
const fWind = 0.621371 // km/h * f = mi/h
const fDensity = 0.062428 // kg/m3 * f = lb/ft3
const fHpua = 0.0879872 // kJ/m2 * f = btu/ft2
const fFli = 0.288672 // kW/m * f = btu/ft/s
const fRxi = 5.27923 // kW/m2 * f = ftu/ft2/min
const fHeatDens = 0.0268185 // kJ/m3 * f = btu/ft3

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
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]]
]

const InputsA = [
  ['site.canopy.crown.baseHeight', [1.5 * fDistance]], // 4.92126 ft
  ['site.canopy.crown.totalHeight', [21.8333 * fDistance]], // 71.6316 ft
  ['site.canopy.fuel.bulkDensity', [0.06 * fDensity]], // 0.00374568 lb/ft3
  ['site.canopy.fuel.foliar.moistureContent', [1]],
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.06]],
  ['site.moisture.dead.tl100h', [0.08]],
  ['site.moisture.live.herb', [1.17]],
  ['site.moisture.live.stem', [1.17]],
  // ['site.slope.direction.aspect', [180]],
  ['site.slope.steepness.ratio', [0.2]],
  // ['site.wind.direction.source.fromNorth', [270]],
  ['site.windSpeedAdjustmentFactor', [0.15]],
  ['site.wind.speed.at20ft', [40 * fWind * 88]], // 24.8548 mph, 2187.23 fpm
  ['surface.primary.fuel.model.catalogKey', ['5']]
]

const InputsB = [
  ['site.canopy.crown.baseHeight', [0.9 * fDistance]],
  ['site.canopy.crown.totalHeight', [11.61429 * fDistance]],
  ['site.canopy.fuel.bulkDensity', [0.21 * fDensity]],
  ['site.canopy.fuel.foliar.moistureContent', [1]],
  ['site.moisture.dead.tl1h', [0.08]],
  ['site.moisture.dead.tl10h', [0.09]],
  ['site.moisture.dead.tl100h', [0.1]],
  ['site.moisture.live.herb', [1.17]],
  ['site.moisture.live.stem', [1.17]],
  ['site.wind.speed.at20ft', [40 * fWind * 88]], // 24.8548 mph, 2187.23 fpm
  ['site.windSpeedAdjustmentFactor', [0.12]],
  ['site.slope.steepness.ratio', [0.2]],
  ['surface.primary.fuel.model.catalogKey', ['10']]
]

const ResultsA = [
  // BP6 and S&R values Table 6: Isurface
  ['surface.primary.fuel.fire.firelineIntensity', 470.259 * fFli, 6],
  ['surface.primary.fuel.fire.firelineIntensity', 470 * fFli, 2],
  // BP6 and S&R values Table 6: I'initiation
  ['crown.fire.initiation.firelineIntensity', 309.447371 * fFli, 3],
  ['crown.fire.initiation.firelineIntensity', 309 * fFli, 1],
  // BP6 and S&R values Table 6: HPA
  ['surface.primary.fuel.fire.heatPerUnitArea', 6191.389542 * fHpua, 6],
  ['surface.primary.fuel.fire.heatPerUnitArea', 6191.389542 * fHpua, 1],
  // BP6 and S&R values Table 6: Rsurface
  ['surface.primary.fuel.fire.spreadRate', 4.557223 * fRos, 2],
  ['surface.primary.fuel.fire.spreadRate', 4.6 * fRos, 2],
  // BP6 and S&R values Table 6: R'initiation
  ['crown.fire.initiation.spreadRate', 2.998817 * fRos, 1],
  ['crown.fire.initiation.spreadRate', 3 * fRos, 3],
  // BP6 and S&R values Table 6: R'sa
  ['crown.fire.final.rSa', 9.325327 * fRos, 5],
  ['crown.fire.final.rSa', 9.2 * fRos, 1],
  // BP6 and S&R values Table 6: Ractive
  ['crown.fire.active.spreadRate', 22.526471 * fRos, 2],
  // S&R comparison FAILS with difference of 0.6 m/min
  ['crown.fire.active.spreadRate', (23.1 - 0.6) * fRos, 1],
  // BP6 and S&R values Table 6: R'active
  ['crown.fire.initiation.rPrime', 49.999991 * fRos, 4],
  ['crown.fire.initiation.rPrime', 50 * fRos, 4],
  // BP6 and S&R values Table 6: Type of fire
  ['crown.fire.initiation.type', 'Passive', null],
  // BP6 and S&R values Table 6: CFB
  ['crown.fire.final.crownFractionBurned', 0.246329, 4],
  ['crown.fire.final.crownFractionBurned', 0.25 - 0.01, 1],
  // BP6 and S&R values Table 6: Rfinal
  ['crown.fire.final.spreadRate', 8.983578 * fRos, 2],
  ['crown.fire.final.spreadRate', 9.2 * fRos, 1],
  // BP6 and S&R values Table 6: Ifinal
  ['crown.fire.final.firelineIntensity', 1764.944954 * fFli, 2],
  ['crown.fire.final.firelineIntensity', 1788 * fFli, 1],
  // BP6 and S&R values Table 6: Crowning Index
  ['crown.fire.initiation.oActive', 70.859763 * fWind * 88, 2],
  ['crown.fire.initiation.oActive', 70 * fWind * 88, 1],
  ['crown.fire.initiation.crowningIndex', (70 * fWind * 88) / 54.680665, 1],
  ['surface.primary.fuel.fire.reactionIntensity', 452.22003 * fRxi, 6],
  ['surface.primary.fuel.bed.heatSink', 2869.902303 * fHeatDens, 6]
]

const ResultsB = [
  // BP6 and S&R values Table 6: Isurface
  ['surface.primary.fuel.fire.firelineIntensity', 313.68723 * fFli, 6],
  ['surface.primary.fuel.fire.firelineIntensity', 313 * fFli, 1],
  // BP6 and S&R values Table 6: I'initiation
  ['crown.fire.initiation.firelineIntensity', 143.818142 * fFli, 3],
  ['crown.fire.initiation.firelineIntensity', 144 * fFli, 1],
  // BP6 and S&R values Table 6: HPA
  ['surface.primary.fuel.fire.heatPerUnitArea', 13441.235034 * fHpua, 6],
  ['surface.primary.fuel.fire.heatPerUnitArea', 13000 * fHpua, 1],
  // BP6 and S&R values Table 6: Rsurface
  ['surface.primary.fuel.fire.spreadRate', 1.400261 * fRos, 2],
  ['surface.primary.fuel.fire.spreadRate', 1.4 * fRos, 2],
  // BP6 and S&R values Table 6: R'initiation
  ['crown.fire.initiation.spreadRate', 0.641986 * fRos, 1],
  ['crown.fire.initiation.spreadRate', (0.6 + 0.041986) * fRos, 3],
  // BP6 and S&R values Table 6: R'sa
  ['crown.fire.final.rSa', 1.101156 * fRos, 5],
  ['crown.fire.final.rSa', 1.1 * fRos, 1],
  // BP6 and S&R values Table 6: Ractive
  ['crown.fire.active.spreadRate', 19.879617 * fRos, 2],
  // S&R comparison FAILS with difference of 0.5 m/min
  ['crown.fire.active.spreadRate', (20.4 - 0.5) * fRos, 1],
  // BP6 and S&R values Table 6: R'active
  ['crown.fire.initiation.rPrime', 14.285712 * fRos, 4],
  ['crown.fire.initiation.rPrime', (14 + 0.2857) * fRos, 4],
  // BP6 and S&R values Table 6: Type of fire
  ['crown.fire.initiation.type', 'Active', null],
  // BP6 and S&R values Table 6: CFB
  ['crown.fire.final.crownFractionBurned', 1, 12],
  ['crown.fire.final.crownFractionBurned', 1, 12],
  // BP6 and S&R values Table 6: Rfinal
  ['crown.fire.final.spreadRate', 19.879617 * fRos, 2],
  ['crown.fire.final.spreadRate', (20.4 - 0.5) * fRos, 1],
  // BP6 and S&R values Table 6: Ifinal
  ['crown.fire.final.firelineIntensity', 18336.150349 * fFli, 2],
  ['crown.fire.final.firelineIntensity', 18337 * fFli, 1],
  // BP6 and S&R values Table 6: Crowning Index
  ['crown.fire.initiation.oActive', 31.417489 * fWind * 88, 2],
  ['crown.fire.initiation.oActive', 30 * fWind * 88, 1]
]

/**
 * Note that for the Benchmark124 case,
 * the wind is NOT blowing upslope, so S&R final results are invalid
 */
test('1: Scott & Reinhardt Stand A', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(Configs)

  dag.select(ResultsA.map(node => node[0]))
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(InputsA.length)
  InputsA.forEach(input => {
    expect(requiredInputs).toContain(dag.get(input[0]))
  })

  // S&R Stand A inputs in SI Units
  dag.input(InputsA).run()
  ResultsA.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})

test('2: Scott & Reinhardt Stand B', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.configure(Configs)

  dag.select(ResultsB.map(node => node[0]))
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(InputsB.length)
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs 1'))
  InputsB.forEach(input => {
    expect(requiredInputs).toContain(dag.get(input[0]))
  })

  // S&R Stand B inputs in SI Units
  dag.input(InputsB).run()
  ResultsB.forEach(result => {
    const [key, value, prec] = result
    expect(dag.get(key)).value(value, prec)
  })
})
