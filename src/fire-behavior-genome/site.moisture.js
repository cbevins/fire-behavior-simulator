/**
 * @file Site Moisture genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

export const genome = [
  ['site.moisture.dead.fosberg.reference', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergReference',
      'site.temperature.air',
      'site.temperature.relativeHumidity']
  ]]],
  ['site.moisture.dead.fosberg.correction', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergCorrection',
      'site.date.month',
      'site.temperature.shading',
      'site.slope.direction.aspect',
      'site.slope.steepness.ratio',
      'site.time.hour',
      'site.location.elevation.diff'
    ]
  ]]],
  ['site.moisture.dead.fosberg.tl1h', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead1h',
      'site.moisture.dead.fosberg.reference',
      'site.moisture.dead.fosberg.correction']
  ]]],
  ['site.moisture.dead.fosberg.tl10h', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead10h', 'site.moisture.dead.fosberg.tl1h']
  ]]],
  ['site.moisture.dead.fosberg.tl100h', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead100h', 'site.moisture.dead.fosberg.tl1h']
  ]]],
  ['site.moisture.dead.tl1h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category',
      'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl1h'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl10h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category',
      'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl10h'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl100h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl100h'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.category', [['FuelMoistureContent'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.moisture.dead'
  ['site.moisture.live.herb', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.live.stem', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.live.category', [['FuelMoistureContent'], [
    ['finally', 'Dag.input']
  ]]]
  // end 'site.moisture.live'
  // end 'site.moisture'
]
