/* eslint-disable indent */
/**
 * @file Site Temperature genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.temperature.air', [['AirTemperature'], [['finally', 'Dag.input']]]],

  ['site.temperature.dewPoint', [['AirTemperature'], [
    ['when', 'configure.temperature.humidity', 'equals', 'humidity',
      'TemperatureHumidity.reaDewPoint',
        'site.temperature.dryBulb',
        'site.temperature.relativeHumidity'],
    ['when', 'configure.temperature.humidity', 'equals', 'wetBulb',
      'TemperatureHumidity.dewPoint',
        'site.temperature.dryBulb',
        'site.temperature.wetBulb',
        'site.location.elevation'],
    ['finally', 'Dag.input']]] // dewPoint
  ],

  ['site.temperature.dryBulb', [['AirTemperature'], [
    ['finally', 'Dag.bind', 'site.temperature.air']]]
  ],

  ['site.temperature.fuel', [['AirTemperature'], [
    ['finally', 'IgnitionProbability.fuelTemperature',
      'site.temperature.air',
      'site.canopy.fuel.shading']]]
  ],

  ['site.temperature.relativeHumidity', [['RelativeHumidity'], [
    ['when', 'configure.temperature.humidity', 'equals', 'humidity', 'Dag.input'],
    ['finally', 'TemperatureHumidity.relativeHumidity',
      'site.temperature.dryBulb',
      'site.temperature.dewPoint']]]
  ],

  ['site.temperature.shading', [['ShadingFraction'], [['finally', 'Dag.input']]]],

  ['site.temperature.wetBulb', [['AirTemperature'], [['finally', 'Dag.input']]]],

  ['site.temperature.wetBulbDepression', [['AirTemperature'], [
    ['finally', 'TemperatureHumidity.wetBulbDepression',
      'site.temperature.dryBulb',
      'site.temperature.wetBulb']]]
  ]
]
