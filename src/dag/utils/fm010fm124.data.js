/**
 * @file BehavePlus v6 SurfaceFire benchmark results data used by tests
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
/**
 * SurfaceFire test data for the following scenario:
 * - Weighted Behave fuel models '10' (60%) and '124' (40%)
 * - Covers surface.primary.*, surface.secondary.*, and surface.weighted.*
 */

// Key should be prefixed with 'surface.primary.fuel.', 'surface.secondary.fuel.',
// 'surface.weighted', etc
const parms = 'model.behave.parms.'
const dead = 'bed.dead.'
const dp = 'bed.dead.particle.class'
const d1 = dp + '1.'
const d2 = dp + '2.'
const d3 = dp + '3.'
const d4 = dp + '4.'
const d5 = dp + '5.'
const live = 'bed.live.'
const lp = 'bed.live.particle.class'
const l1 = lp + '1.'
const l2 = lp + '2.'
const l3 = lp + '3.'
const l4 = lp + '4.'
const l5 = lp + '5.'

const SurfaceFireData = [
  ['model.catalogKey', { fm010: '10', fm124: '124', prec: null }],
  ['model.behave.domain', { fm010: 'behave', fm124: 'behave', prec: null }],
  [parms + 'depth', { fm010: 1, prec: 12 }],
  [parms + 'dead.extinction.moistureContent', { fm010: 0.25, prec: 12 }],
  [parms + 'dead.tl1h.ovendryLoad', { fm010: 0.138, prec: 12 }],
  [parms + 'dead.tl1h.surfaceAreaToVolumeRatio', { fm010: 2000, prec: 12 }],
  [parms + 'cured.herb.fraction', { fm010: 0.778, prec: 12 }],
  [
    d1 + 'effectiveFuel.heatingNumber',
    { fm010: 0.93332668007820196, prec: 12 }
  ],
  [d1 + 'ovendryLoad', { fm010: 0.138, prec: 12 }],
  [d1 + 'sizeClass.weightingFactor', { fm010: 0.94221105527638194, prec: 12 }],
  [d1 + 'surfaceAreaToVolumeRatio', { fm010: 2000, prec: 12 }],
  [
    d1 + 'surfaceArea.weightingFactor',
    { fm010: 0.94221105527638194, prec: 12 }
  ],
  [d1 + 'surfaceArea', { fm010: 8.625, prec: 12 }],
  [
    d2 + 'effectiveFuel.heatingNumber',
    { fm010: 0.28194167776446499, prec: 12 }
  ],
  [d2 + 'sizeClass.weightingFactor', { fm010: 0.034233668341708545, prec: 12 }],
  [d2 + 'surfaceArea', { fm010: 0.313375, prec: 12 }],
  [
    d2 + 'surfaceArea.weightingFactor',
    { fm010: 0.034233668341708545, prec: 12 }
  ],
  [
    d3 + 'effectiveFuel.heatingNumber',
    { fm010: 0.010051835744633586, prec: 12 }
  ],
  [d3 + 'sizeClass.weightingFactor', { fm010: 0.023555276381909549, prec: 12 }],
  [d3 + 'surfaceArea', { fm010: 0.215625, prec: 12 }],
  [
    d3 + 'surfaceArea.weightingFactor',
    { fm010: 0.023555276381909549, prec: 12 }
  ],
  [d4 + 'ovendryLoad', { fm010: 0, prec: 12 }],
  [dead + 'extinction.moistureContent', { fm010: 0.25, fm124: 0.4, prec: 12 }],
  [dead + 'heatOfCombustion', { fm010: 8000, fm124: 8000, prec: 10 }],
  [
    dead + 'effectiveFuel.ovendryLoad',
    { fm010: 0.15704963842638839, prec: 10 }
  ],
  [
    dead + 'effectiveFuel.moistureContent',
    { fm010: 0.05389207884883955, fm124: 0.050405399380187531, prec: 10 }
  ],
  [
    dead + 'effectiveFuel.waterLoad',
    { fm010: 0.008463731497256665, fm124: 0.0098866289779641001, prec: 10 }
  ],
  [
    dead + 'mineralDamping',
    { fm010: 0.41739692790939131, fm124: 0.41739692790939131, prec: 10 }
  ],
  [
    dead + 'moistureContent',
    { fm010: 0.051626884422110553, fm124: 0.050100676116867547, prec: 10 }
  ],
  [
    dead + 'moistureDamping',
    { fm010: 0.65206408989980214, fm124: 0.74884711762612932, prec: 10 }
  ],
  [dead + 'ovendryLoad', { fm010: 0.46, prec: 12 }],
  [dead + 'surfaceArea', { fm010: 9.154, fm124: 11.030790863177224, prec: 12 }],
  [
    dead + 'surfaceAreaToVolumeRatio',
    { fm010: 1888.8602386934672, fm124: 1682.0151742581315, prec: 12 }
  ],
  [
    dead + 'surfaceArea.weightingFactor',
    { fm010: 0.67976088812980362, fm124: 0.37954847277556436, prec: 10 }
  ],
  // volume: null,
  // heatOfPreignition: null,
  [
    dead + 'reactionIntensity',
    { fm010: 3612.4074071954024, fm124: 7316.0935560142625, prec: 10 }
  ],
  [
    dead + 'reactionIntensityDry',
    { fm010: 5539.9575948899355, fm124: 9769.8093293148086, prec: 10 }
  ],
  [dead + 'effective.mineralContent', { fm010: 0.01, fm124: 0.01, prec: 10 }],
  // sizeClass.weightingFactor: null,
  [
    dead + 'net.ovendryLoad',
    {
      fm010: (1 - 0.0555) * 0.13859233668341708,
      fm124: (1 - 0.0555) * 0.20777819078484744,
      prec: 10
    }
  ],

  [
    live + 'extinction.moistureContentFactor',
    { fm010: 6.908948234294801, fm124: 2.1558023634049093, prec: 12 }
  ],
  [
    live + 'extinction.moistureContent',
    { fm010: 5.1935979022741359, fm124: 1.6581421656244677, prec: 12 }
  ],
  [live + 'heatOfCombustion', { fm010: 8000, fm124: 8000, prec: 10 }],
  [
    live + 'effectiveFuel.ovendryLoad',
    { fm010: 0.065920880572788609, prec: 10 }
  ],
  [
    live + 'mineralDamping',
    { fm010: 0.41739692790939131, fm124: 0.41739692790939131, prec: 10 }
  ],
  [
    live + 'moistureContent',
    { fm010: 1.5, fm124: 1.4039058919386871, prec: 10 }
  ],
  [
    live + 'moistureDamping',
    { fm010: 0.59341294014849078, fm124: 0.33380976126895767, prec: 10 }
  ],
  [
    live + 'ovendryLoad',
    { fm010: 0.092, fm124: 0.36064279155188239, prec: 12 }
  ],
  [
    live + 'surfaceArea',
    { fm010: 4.3125, fm124: 18.032139577594119, prec: 12 }
  ],
  [live + 'surfaceAreaToVolumeRatio', { fm010: 1500, fm124: 1600, prec: 12 }],
  [
    live + 'surfaceArea.weightingFactor',
    { fm010: 0.32023911187019644, fm124: 0.62045152722443553, prec: 10 }
  ],
  // volume: null,
  // heatOfPreignition: null,
  [
    live + 'reactionIntensity',
    { fm010: 2182.287993033714, fm124: 5660.5993324823157, prec: 10 }
  ],
  [
    live + 'reactionIntensityDry',
    { fm010: 3677.5200629895871, fm124: 16957.560830348066, prec: 10 }
  ],
  [live + 'effective.mineralContent', { fm010: 0.01, fm124: 0.01, prec: 10 }],
  // sizeClass.weightingFactor: null,
  [
    live + 'net.ovendryLoad',
    {
      fm010: (1 - 0.0555) * 0.092,
      fm124: (1 - 0.0555) * 0.36064279155188239,
      prec: 10
    }
  ],
  // fm124 load: 0.034655647382920124,

  [
    l1 + 'effectiveFuel.heatingNumber',
    { fm010: 0.91210514954509037, prec: 12 }
  ],
  [l1 + 'ovendryLoad', { fm010: 0, fm124: 0.034655647382920124, prec: 12 }],
  [l1 + 'surfaceAreaToVolumeRatio', { fm010: 1500, fm124: 1600, prec: 12 }],
  [
    l1 + 'surfaceArea.weightingFactor',
    { fm010: 0, fm124: 0.096094108061312897, prec: 12 }
  ],
  [
    l2 + 'effectiveFuel.heatingNumber',
    { fm010: 0.91210514954509037, prec: 12 }
  ],
  [l2 + 'ovendryLoad', { fm010: 0.092, fm124: (7.1 * 2000) / 43560, prec: 12 }],
  [l2 + 'surfaceAreaToVolumeRatio', { fm010: 1500, fm124: 1600, prec: 12 }],
  [
    l2 + 'surfaceArea.weightingFactor',
    { fm010: 1, fm124: 0.9039058919386872, prec: 12 }
  ],
  ['bed.surfaceArea', { fm010: 13.4665, fm124: 29.062930440771346, prec: 12 }],
  ['bed.bulkDensity', { fm010: 0.552, fm124: 0.27985482530937067, prec: 12 }],
  ['bed.depth', { fm010: 1.0, fm124: 2.1, prec: 12 }],
  [
    'bed.heatOfPreignition',
    {
      fm010: 746.993428042342,
      fm124: 319.21640437931171 / 0.27985482530937067,
      prec: 12
    }
  ],
  [
    'bed.heatSink',
    { fm010: 412.34037227937284, fm124: 319.21640437931171, prec: 12 }
  ],
  ['bed.ovendryLoad', { fm010: 0.552, prec: 12 }],
  [
    'bed.open.windSpeedAdjustmentFactor',
    { fm010: 0.36210426360602416, prec: 12 }
  ],
  [
    'bed.packingRatio',
    { fm010: 0.01725, fm124: 0.0087454632909178334, prec: 12 }
  ],
  [
    'bed.packingRatio.optimum',
    { fm010: 0.0073478593798598172, fm124: 0.0078357185983373434, prec: 12 }
  ],
  [
    'bed.packingRatio.ratio',
    { fm010: 2.3476224990480286, fm124: 1.11610226696675, prec: 12 }
  ],
  [
    'bed.propagatingFluxRatio',
    { fm010: 0.048317062998571636, fm124: 0.035258653482453904, prec: 12 }
  ],
  [
    'bed.reactionVelocityExponent',
    { fm010: 0.35878365060452616, fm124: 0.38177694461561407, prec: 12 }
  ],
  [
    'bed.reactionVelocityMaximum',
    { fm010: 15.13331887756658, fm124: 14.944549319976806, prec: 12 }
  ],
  [
    'bed.reactionVelocityOptimum',
    { fm010: 12.674359628667819, fm124: 14.908876941781589, prec: 12 }
  ],
  [
    'bed.reactionIntensity',
    { fm010: 5794.6954002291168, fm124: 12976.692888496578, prec: 12 }
  ],
  [
    'bed.noWindNoSlope.spreadRate',
    { fm010: 0.67900860922904482, fm124: 1.4333245773924823, prec: 12 }
  ],
  [
    'bed.surfaceAreaToVolumeRatio',
    { fm010: 1764.3319812126388, fm124: 1631.1287341340956, prec: 12 }
  ],
  ['bed.savr15', { fm010: 74108.915800396862, prec: 12 }],
  [
    'fire.effectiveWindSpeed',
    { fm010: 880.55194372010692, fm124: 880.5568433322004, prec: 7 }
  ],
  ['fire.limit.effectiveWindSpeed.exceeded', { fm010: false, fm124: false }],
  [
    'fire.flameResidenceTime',
    { fm010: 0.21764611427384198, fm124: 0.23541979977677915, prec: 12 }
  ],
  [
    'fire.firelineIntensity',
    { fm010: 389.95413667947145, fm124: 2467.928645, prec: 8 }
  ],
  [
    'fire.flameLength',
    { fm010: 6.9996889013229229, fm124: 16.35631663, prec: 10 }
  ],
  [
    'fire.heading.fromUpslope',
    { fm010: 87.573367385837855, fm124: 87.613728665173383, prec: 9 }
  ],
  [
    'fire.heatPerUnitArea',
    {
      fm010: 1261.1929372603729,
      fm124: 12976.692888496578 * 0.23541979977677915,
      prec: 12
    }
  ],
  [
    'fire.lengthToWidthRatio',
    { fm010: 3.5015680219321221, fm124: 3.501581941, prec: 10 }
  ],
  [
    'fire.limit.effectiveWindSpeed',
    { fm010: 5215.2258602062057, fm124: 11679.02359964692, prec: 12 }
  ],
  [
    'fire.maximumDirection.spreadRate',
    { fm010: 17.872671716374864, fm124: 47.037101416598077, prec: 10 }
  ],
  [
    'fire.maximumDirection.xComponent',
    { fm010: 0.75673013692577218, fm124: 1.9584486126230398, prec: 8 }
  ],
  [
    'fire.maximumDirection.yComponent',
    { fm010: 17.856644527335789, fm124: 46.996312501163828, prec: 12 }
  ],
  [
    'fire.noWindNoSlope.spreadRate',
    { fm010: 0.67900860922904482, fm124: 1.4333245773924823, prec: 12 }
  ],
  [
    'fire.phiEffectiveWind',
    { fm010: 26.321715915373524, fm124: 32.816782854703028, prec: 9 }
  ],
  [
    'fire.reactionIntensity',
    { fm010: 5794.6954002291168, fm124: 12976.692888496578, prec: 12 }
  ],
  [
    'fire.spreadRate',
    { fm010: 18.551680325448835, fm124: 48.47042599399056, prec: 9 }
  ],
  ['fire.scorchHeight', { fm010: 39.580182, fm124: 215.682771, prec: 8 }]
]

export function primarySelections () {
  return surfaceFireSelections('surface.primary.fuel.')
}
export function secondarySelections () {
  return surfaceFireSelections('surface.secondary.fuel.')
}
function surfaceFireSelections (nodeKeyPrefix) {
  return SurfaceFireData.map(datum => `${nodeKeyPrefix}${datum[0]}`)
}

export function primaryResults () {
  return surfaceFireResults('surface.primary.fuel.', 'fm010')
}
export function secondaryResults () {
  return surfaceFireResults('surface.secondary.fuel.', 'fm124')
}
function surfaceFireResults (nodeKeyPrefix, resultKey) {
  const results = []
  SurfaceFireData.forEach(datum => {
    const [nodeKey, obj] = datum
    if (obj.hasOwnProperty(resultKey)) {
      results.push([`${nodeKeyPrefix}${nodeKey}`, obj[resultKey], obj.prec])
    }
  })
  return results
}

const ros1 = 18.551680325448835
const ros2 = 48.47042599399056
const cover1 = 0.6
const harmonicRos = 1 / (cover1 / ros1 + (1 - cover1) / ros2)
const arithmeticRos = 0.6 * ros1 + 0.4 * ros2
const expectedRos = 0.5 * (harmonicRos + arithmeticRos)
export const WeightedFireData = [
  ['surface.weighted.fire.arithmeticMean.spreadRate', arithmeticRos, 11],
  ['surface.weighted.fire.harmonicMean.spreadRate', harmonicRos, 11],
  ['surface.weighted.fire.expectedValue.spreadRate', expectedRos, 11],
  ['surface.weighted.fire.spreadRate', harmonicRos, 11],
  // These are bound to the primary
  ['surface.weighted.fire.effectiveWindSpeed', 880.55194372010692, 7],
  ['surface.weighted.fire.heading.fromUpslope', 87.573367385837855, 9],
  ['surface.weighted.fire.lengthToWidthRatio', 3.5015680219321221, 10],
  ['surface.weighted.fire.wind.speed.atMidflame', 880, 12],
  ['surface.weighted.fire.windSpeedAdjustmentFactor', 0.5, 12],
  // These use the max (fm124)
  ['surface.weighted.fire.firelineIntensity', 2467.928645, 8],
  ['surface.weighted.fire.flameLength', 16.356317, 7],
  [
    'surface.weighted.fire.heatPerUnitArea',
    12976.692888496578 * 0.23541979977677915,
    12
  ],
  ['surface.weighted.fire.reactionIntensity', 12976.692888496578, 12],
  ['surface.weighted.fire.scorchHeight', 215.682771, 8],
  // This uses the min
  ['surface.weighted.fire.limit.effectiveWindSpeed', 5215.2258602062057, 12],
  // This uses 'or'
  ['surface.weighted.fire.limit.effectiveWindSpeed.exceeded', false, null]
]

export function weightedSelections () {
  return WeightedFireData.map(datum => datum[0])
}
export function weightedResults () {
  return WeightedFireData
}

test('Dummy test to stop failure message', () => {
  expect(true).toEqual(true)
})
