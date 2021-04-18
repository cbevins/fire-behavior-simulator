/**
 * @file Top-level site genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as Canopy from './site.canopy.js'
import * as DateTime from './site.date-time.js'
import * as Doc from './site.doc.js'
import * as Fire from './site.fire.js'
import * as Location from './site.location.js'
import * as Maps from './site.map.js'
import * as Moisture from './site.moisture.js'
import * as Slope from './site.slope.js'
import * as Temperature from './site.temperature.js'
import * as Wind from './site.wind.js'

export const genome = [
  ...Canopy.genome,
  ...DateTime.genome,
  ...Doc.genome,
  ...Fire.genome,
  ...Location.genome,
  ...Maps.genome,
  ...Moisture.genome,
  ...Slope.genome,
  ...Temperature.genome,
  ...Wind.genome
]
