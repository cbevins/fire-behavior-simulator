/**
 * @file Site Wind genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.wind.direction.heading.fromUpslope', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth',
      'Compass.diff',
      'site.wind.direction.heading.fromNorth',
      'site.slope.direction.upslope'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Dag.fixed', 0],
    ['finally', 'Dag.fixed', 0]]]
  ],
  ['site.wind.direction.source.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.wind.direction.heading.fromUpslope']]]
  ],
  ['site.wind.direction.source.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope',
      'Compass.opposite', 'site.wind.direction.heading.fromNorth'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth',
      'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'upslope',
      'Compass.opposite', 'site.slope.direction.upslope'],
    ['finally', 'Compass.opposite', 'site.slope.direction.upslope']]]
  ],
  ['site.wind.direction.heading.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope',
      'Compass.sum',
      'site.wind.direction.heading.fromUpslope',
      'site.slope.direction.upslope'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth',
      'Compass.opposite', 'site.wind.direction.source.fromNorth'],
    ['when', 'configure.wind.direction', 'equals', 'upslope',
      'Dag.bind', 'site.slope.direction.upslope'],
    ['finally', 'Dag.bind', 'site.slope.direction.upslope']]]
  ],
  // end 'site.wind.direction'
  ['site.wind.speed.at10m', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at10m', 'Dag.input'],
    ['finally', 'Wind.speedAt10m', 'site.wind.speed.at20ft']]]
  ],
  ['site.wind.speed.at20ft', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at20ft', 'Dag.input'],
    ['when', 'configure.wind.speed', 'equals', 'at10m',
      'Wind.speedAt20ft', 'site.wind.speed.at10m'],
    ['finally', 'Wind.speedAt20ftFromMidflame',
      'site.wind.speed.atMidflame',
      'site.windSpeedAdjustmentFactor']]]
  ],
  ['site.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.input'],
    ['finally', 'Wind.speedAtMidflame',
      'site.wind.speed.at20ft',
      'site.windSpeedAdjustmentFactor']]]
  ],
  ['site.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'],
    [['finally', 'Dag.input']]]
  ]
  // end 'site.wind.speed'
  // end 'site.wind'
]
