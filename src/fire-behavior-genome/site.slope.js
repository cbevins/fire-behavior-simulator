/**
 * @file Site SLope genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.slope.direction.aspect', [['CompassAzimuth'], [
    ['finally', 'Dag.input']]]
  ],

  ['site.slope.direction.upslope', [['CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.slope.direction.aspect']]]
  ],
  // end 'site.slope.direction'

  ['site.slope.steepness.degrees', [['SlopeSteepnessDegrees'], [
    ['when', 'configure.slope.steepness', 'equals', 'degrees', 'Dag.input'],
    ['when', 'configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.degrees'],
    ['finally', 'Compass.slopeDegrees', 'site.slope.steepness.ratio']]]
  ],

  ['site.slope.steepness.ratio', [['SlopeSteepnessRatio'], [
    ['when', 'configure.slope.steepness', 'equals', 'degrees', 'Compass.slopeRatio',
      'site.slope.steepness.degrees'],
    ['when', 'configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.ratio'],
    ['finally', 'Dag.input']]]
  ]
  // end 'site.slope.steepness'
  // end 'site.slope'
]
