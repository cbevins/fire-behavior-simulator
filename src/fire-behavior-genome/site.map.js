/**
 * @file Site Map genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.map.scale', [['MapScale'], [
    ['finally', 'Dag.input']]]
  ],
  ['site.map.contours', [['MapContoursCount'], [
    ['finally', 'Dag.input']]]
  ],
  ['site.map.distance', [['FireSpreadDistance'], [
    ['finally', 'Dag.input']]]
  ],
  ['site.map.factor', [['MapFactor'], [
    ['finally', 'Calc.divide', 1, 'site.map.scale']]]
  ],
  ['site.map.interval',
    [['FireSpreadDistance'], [['finally', 'Dag.input']]]
  ],
  ['site.map.reach', [['FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.scale', 'site.map.distance']]]
  ],
  ['site.map.rise', [['FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.interval', 'site.map.contours']]]
  ],
  ['site.map.slope.ratio', [['SlopeSteepnessRatio'], [
    ['finally', 'Compass.slopeRatioMap',
      'site.map.scale',
      'site.map.interval',
      'site.map.contours',
      'site.map.distance']]]
  ],
  ['site.map.slope.degrees', [['SlopeSteepnessDegrees'], [
    ['finally', 'Compass.slopeDegreesMap',
      'site.map.scale',
      'site.map.interval',
      'site.map.contours',
      'site.map.distance'
    ]]]
  ]
]
