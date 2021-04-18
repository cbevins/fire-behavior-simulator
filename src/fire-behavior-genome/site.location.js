/**
 * @file Site Location genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

export const genome = [
  ['site.location.elevation', [['Elevation'], [['finally', 'Dag.input']]]],
  ['site.location.elevation.diff', [['ElevationDiff'], [['finally', 'Dag.input']]]],
  ['site.location.gmtDiff', [['GmtDiff'], [['finally', 'Dag.input']]]],
  ['site.location.latitude.degrees', [['Latitude'], [['finally', 'Dag.input']]]],
  ['site.location.latitude.ns', [['NorthSouthOption'], [['finally', 'Dag.input']]]],
  ['site.location.longitude.degrees', [['Longitude'], [['finally', 'Dag.input']]]],
  ['site.location.longitude.ew', [['EastWestOption'], [['finally', 'Dag.input']]]]
]
