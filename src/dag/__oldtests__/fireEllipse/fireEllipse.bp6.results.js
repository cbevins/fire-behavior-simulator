/* eslint-disable jest/no-export */
/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
/**
 * SurfaceFire test data for the following scenario:
 * - Weighted Behave fuel models '10' (60%) and '124' (40%)
 * - Covers surface.primary.*, surface.secondary.*, and surface.weighted.*
 */
import { SurfaceFire } from '../../../fire-behavior-models'

export const Configs = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][2]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight']
]

export const Inputs = [
  ['site.fire.time.sinceIgnition', [60]],
  ['site.fire.vector.fromNorth', [45]],
  ['site.map.scale', [24000]],
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.dead.category', [0.05]],
  ['site.moisture.live.herb', [0.5]],
  ['site.moisture.live.stem', [1.5]],
  ['site.moisture.live.category', [1.5]],
  ['site.slope.direction.aspect', [180]],
  ['site.slope.steepness.ratio', [0.25]],
  ['site.temperature.air', [95]],
  ['site.terrain.spotSourceLocation', ['ridgeTop']],
  ['site.terrain.ridgeValleyDistance', [5000]],
  ['site.terrain.ridgeValleyElevation', [1000]],
  ['site.wind.direction.source.fromNorth', [270]],
  ['site.windSpeedAdjustmentFactor', [0.5]],
  ['site.wind.speed.atMidflame', [880]],
  ['surface.primary.fuel.model.catalogKey', ['10']],
  ['surface.secondary.fuel.model.catalogKey', ['124']],
  ['surface.weighted.fire.primaryCover', [0.6]]
]

const beta5fli010 =
  (389.95413667947145 * 2.6256648650882601) / 18.551680325448835
const beta5fl010 = 0.45 * Math.pow(beta5fli010, 0.46)
const beta5scht010 = SurfaceFire.scorchHeight(beta5fli010, 880, 95)

const beta5fli124 =
  (2467.9286450361865 * 6.8494531181657319) / 48.47042599399056
const beta5fl124 = 0.45 * Math.pow(beta5fli124, 0.46)
const beta5scht124 = SurfaceFire.scorchHeight(beta5fli124, 880, 95)

const m = 24000
const m2 = m * m

const e = 'surface.fire.ellipse.'
export const FireEllipseBp6Results = [
  [e + 'axis.eccentricity',
    { fm010: 0.95835298387126711, fm124: 0.95835332217217739, prec: 10 }
  ],
  [e + 'axis.lengthToWidthRatio',
    { fm010: 3.5015680219321221, fm124: 3.5015819412846603, prec: 10 }
  ],
  [e + 'axis.major.spreadRate',
    {fm010: 0.39452649041938642 + 18.551680325448835, fm124: 1.0307803973340242 + 48.47042599399056, prec: 10}
  ],
  [e + 'axis.minor.spreadRate',
    { fm010: 2 * 2.7053889424963877, fm124: 2 * 7.0684061120619655, prec: 10 }
  ],
  [e + 'axis.f.spreadRate',
    { fm010: 9.4731034079341114, fm124: 1485.0361917397374 / 60.0, prec: 10 }
  ],
  [e + 'axis.g.spreadRate',
    { fm010: 9.0785769175147255, fm124: 1423.189367899696 / 60.0, prec: 10 }
  ],
  [e + 'axis.h.spreadRate',
    { fm010: 2.7053889424963877, fm124: 424.10436672371787 / 60.0, prec: 9 }
  ],
  [e + 'head.spreadRate',
    { fm010: 18.551680325448835, fm124: 48.47042599399056, prec: 10 }
  ],
  [e + 'head.firelineIntensity',
    { fm010: 389.95413667947145, fm124: 2467.9286450361865, prec: 10 }
  ],
  [e + 'head.flameLength',
    { fm010: 6.9996889013229229, fm124: 16.35631663317114, prec: 10 }
  ],
  [e + 'head.spreadDistance',
    { fm010: 1113.1008195269301, fm124: 2908.2255596394334, prec: 10 }
  ],
  [e + 'head.mapDistance',
    {
      fm010: 1113.1008195269301 / 24000,
      fm124: 2908.2255596394334 / 24000,
      prec: 10
    }
  ],
  [e + 'head.scorchHeight',
    { fm010: 39.580181786322299, fm124: 215.6827714, prec: 10 }
  ],
  [e + 'back.spreadRate',
    { fm010: 0.39452649041938642, fm124: 1.0307803973340242, prec: 10 }
  ],
  [e + 'back.firelineIntensity',
    { fm010: 8.2929003879841954, fm124: 52.483394093499705, prec: 10 }
  ],
  [e + 'back.flameLength',
    { fm010: 1.1907414731175683, fm124: 2.7824194067294856, prec: 10 }
  ],
  [e + 'back.spreadDistance',
    { fm010: 23.671589425163184, fm124: 61.846823840041452, prec: 10 }
  ],
  [e + 'back.mapDistance',
    {fm010: 23.671589425163184 / 24000, fm124: 61.846823840041452 / 24000, prec: 10}
  ],
  [e + 'back.scorchHeight',
    { fm010: 0.52018662032054752, fm124: 4.3824121071933915, prec: 10 }
  ],
  [e + 'flank.spreadRate',
    { fm010: 2.7053889424963877, fm124: 7.0684061120619655, prec: 9 }
  ],
  [e + 'flank.firelineIntensity',
    { fm010: 56.866957074505869, fm124: 359.89619544220318, prec: 8 }
  ],
  [e + 'flank.flameLength',
    { fm010: 2.8870088099013929, fm124: 6.7461198324614715, prec: 9 }
  ],
  [e + 'flank.spreadDistance',
    { fm010: 162.32333654978328, fm124: 424.10436672371793, prec: 9 }
  ],
  [e + 'flank.mapDistance',
    {fm010: 162.32333654978328 / 24000, fm124: 424.10436672371793 / 24000, prec: 9}
  ],
  [e + 'flank.scorchHeight',
    { fm010: 4.8023644521509334, fm124: 36.440372402518008, prec: 8 }
  ],
  [e + 'beta.spreadRate',
    { fm010: 2.6256648650882601, fm124: 6.8494531181657319, prec: 9 }
  ],
  [e + 'beta.firelineIntensity',
    { fm010: 22.809320529051977, fm124: 144.22374220988746, prec: 8 }
  ],
  [e + 'beta.flameLength',
    { fm010: 1.896462213587117, fm124: 4.4296501098298906, prec: 9 }
  ],
  [e + 'beta.spreadDistance',
    { fm010: 60 * 2.6256648650882601, fm124: 60 * 6.8494531181657319, prec: 9 }
  ],
  [e + 'beta.mapDistance',
    {fm010: (60 * 2.6256648650882601) / 24000, fm124: (60 * 6.8494531181657319) / 24000, prec: 9}
  ],
  [e + 'beta.scorchHeight',
    { fm010: 1.6814949065754006, fm124: 13.669401441568459, prec: 8 }
  ],
  [e + 'beta.theta',
    { fm010: 138.95912883244358, fm124: 138.998426267168, prec: 9 }
  ],
  [e + 'beta.psi',
    { fm010: 108.16241745554537, fm124: 108.185867694348, prec: 9 }
  ],
  [e + 'beta5.spreadRate',
    { fm010: 2.6256648650882601, fm124: 6.8494531181657319, prec: 9 }
  ],
  [e + 'beta5.firelineIntensity',
    { fm010: beta5fli010, fm124: beta5fli124, prec: 9 }
  ],
  [e + 'beta5.flameLength', { fm010: beta5fl010, fm124: beta5fl124, prec: 9 }],
  [e + 'beta5.spreadDistance',
    { fm010: 60 * 2.6256648650882601, fm124: 60 * 6.8494531181657319, prec: 9 }
  ],
  [e + 'beta5.mapDistance',
    {fm010: (60 * 2.6256648650882601) / 24000, fm124: (60 * 6.8494531181657319) / 24000, prec: 9}
  ],
  [e + 'beta5.scorchHeight',
    { fm010: beta5scht010, fm124: beta5scht124, prec: 9 }
  ],
  [e + 'psi.spreadRate',
    { fm010: 13.8977795836636, fm124: 36.2892704981354, prec: 9 }
  ],
  [e + 'psi.firelineIntensity',
    { fm010: 292.129690908633, fm124: 1847.71081196849, prec: 9 }
  ],
  [e + 'psi.flameLength',
    { fm010: 6.12882661647451, fm124: 14.3173998471815, prec: 9 }
  ],
  [e + 'psi.spreadDistance',
    { fm010: 60 * 13.8977795836636, fm124: 60 * 36.2892704981354, prec: 9 }
  ],
  [e + 'psi.mapDistance',
    {fm010: (60 * 13.8977795836636) / 24000, fm124: (60 * 36.2892704981354) / 24000, prec: 8}
  ],
  [e + 'psi.scorchHeight',
    { fm010: 29.307635864149884, fm124: 169.80644998818718, prec: 9 }
  ],
  [e + 'vector.fromNorth', { fm010: 45, fm124: 45, prec: 10 }],
  [e + 'vector.fromUpslope', { fm010: 45, fm124: 45, prec: 10 }],
  [e + 'vector.fromHead',
    {fm010: 360 - 42.573367385837855, fm124: 360 - 42.613728665173383, prec: 10}
  ],
  [e + 'size.area',
    {fm010: 289850.691417, fm124: 45.422576205218135 * (66.0 * 660.0), prec: 6}
  ],
  [e + 'size.length',
    { fm010: 1136.7724089520932, fm124: 2970.0723834794749, prec: 9 }
  ],
  [e + 'size.perimeter',
    { fm010: 2476.2400999186934, fm124: 6469.7282289420209, prec: 9 }
  ],
  [e + 'size.width',
    { fm010: 324.64667309956644, fm124: 848.20873344743575, prec: 9 }
  ],
  [e + 'map.area',
    {fm010: 289850.691417 / m2, fm124: (45.422576205218135 * (66 * 660)) / m2, prec: 6}
  ],
  [e + 'map.length',
    { fm010: 1136.7724089520932 / m, fm124: 2970.0723834794749 / m, prec: 9 }
  ],
  [e + 'map.perimeter',
    { fm010: 2476.2400999186934 / m, fm124: 6469.7282289420209 / m, prec: 9 }
  ],
  [e + 'map.width',
    { fm010: 324.64667309956644 / m, fm124: 848.20873344743575 / m, prec: 9 }
  ]
]

export function fireEllipseResults (resultKey) {
  const ar = []
  FireEllipseBp6Results.forEach(result => {
    const [nodeKey, obj] = result
    if (obj.hasOwnProperty(resultKey)) {
      ar.push([`${nodeKey}`, obj[resultKey], obj.prec])
    }
  })
  return ar
}

export function fireEllipseSelections () {
  return FireEllipseBp6Results.map(result => result[0])
}
