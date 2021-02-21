import * as Configs from './configs.js'
import * as Crown from './crown.js'
import * as Docs from './docs.js'
import * as Ignition from './ignition.js'
import * as Mortality from './mortality.js'
import * as Site from './site.js'
import * as Spotting from './spotting.js'
import * as Surface from './surface.js'

export const Genome = [
  ...Configs.genome,
  ...Docs.genome,
  ...Ignition.genome,
  ...Site.genome,
  ...Surface.genome,
  ...Spotting.genome,
  ...Mortality.genome,
  ...Crown.genome
]
