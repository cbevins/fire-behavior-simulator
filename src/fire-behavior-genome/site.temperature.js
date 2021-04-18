/**
 * @file Site Temperature genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.temperature.air', [['AirTemperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.dewPoint', [['AirTemperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.dryBulb', [['AirTemperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.fuel', [['AirTemperature'], [
    ['finally', 'IgnitionProbability.fuelTemperature',
      'site.temperature.air',
      'site.canopy.fuel.shading']]]
  ],
  ['site.temperature.relativeHumidity', [['RelativeHumidity'], [['finally', 'Dag.input']]]],
  ['site.temperature.shading', [['ShadingFraction'], [['finally', 'Dag.input']]]],
  ['site.temperature.wetBulb', [['AirTemperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.wetBulbDepression', [['AirTemperature'], [['finally', 'Dag.input']]]]
]
