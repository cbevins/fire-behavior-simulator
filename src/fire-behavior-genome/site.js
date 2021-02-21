import * as Canopy from './site.canopy.js'
import * as Doc from './site.doc.js'
import * as Fire from './site.fire.js'
import * as Maps from './site.map.js'
import * as Moisture from './site.moisture.js'
import * as Slope from './site.slope.js'
import * as Wind from './site.wind.js'

export const genome = [
  ...Canopy.genome,
  ...Doc.genome,
  ...Fire.genome,
  ...Maps.genome,
  ...Moisture.genome,
  ...Slope.genome,
  ...Wind.genome
]
