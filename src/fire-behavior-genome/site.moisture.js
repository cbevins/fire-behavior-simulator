/**
 * @file Site Moisture genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

export const genome = [
  ['site.moisture.dead.tl1h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl10h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl100h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
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
