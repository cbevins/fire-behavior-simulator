/**
 * @file Options.js defines the fire simulator Option Variants
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Option } from '../variant/index.js'
import * as Lib from '../fire-behavior-models/index.js'

/**
 * Declares the specialized BehavePlus Option Variants used by nodes and equations.
 *
 * new Option(key, prompt, optionsArray, defaultOptionIndex = 0)
 *
 */

export class ChaparralTypeOption extends Option {
  constructor () {
    super('ChaparralTypeOption', 'Chaparral fuel type', Lib.ChaparralFuel.Types)
  }
}

export class CrownFireInitiationTypeOption extends Option {
  constructor () {
    super('CrownFireInitiationTypeOption', 'Crown fire initiation type', Lib.CrownFire.InitiationTypes)
  }
}

export class EastWestOption extends Option {
  constructor () {
    super('EastWestOption', 'Longitude East or West', ['east', 'west'])
  }
}

export class FuelModelDomainOption extends Option {
  constructor () {
    super('FuelModelDomainOption', 'Fuel model domain', Lib.FuelCatalog.Domains)
  }
}

export class FuelModelKeyOption extends Option {
  constructor () {
    super('FuelModelKeyOption', 'Fuel model key', Lib.FuelCatalog.keys())
    this._value._default = '10'
  }
}

export class IgnitionFuelTypeOption extends Option {
  constructor () {
    super('IgnitionFuelTypeOption', 'Ignition fuel type', Lib.IgnitionProbability.LightningFuels)
  }
}

export class IgnitionLightningChargeOption extends Option {
  constructor () {
    super('IgnitionLightningChargeOption', 'Ignition lightning charge',
      Lib.IgnitionProbability.LightningCharges)
  }
}

export class NorthSouthOption extends Option {
  constructor () {
    super('NorthSouthOption', 'Latitude North or South', ['north', 'south'])
  }
}

export class SpottingSourceLocationOption extends Option {
  constructor () {
    super('SpottingSourceLocationOption', 'Spotting source location', Lib.Spotting.locations())
  }
}

export class TorchingTreeSpeciesOption extends Option {
  constructor () {
    super('TorchingTreeSpeciesOption', 'Species of torching trees', Lib.Spotting.TorchingTreeSpecies)
  }
}

export class TreeSpeciesFofem6Option extends Option {
  constructor () {
    super('TreeSpeciesFofem6Option', 'Tree species (FOFEM 6 code)', Lib.TreeMortality.fofem6Codes())
  }
}

export class WesternAspenTypeOption extends Option {
  constructor () {
    super('WesternAspenTypeOption', 'Western aspen fuel type', Lib.WesternAspenFuel.Types)
  }
}
