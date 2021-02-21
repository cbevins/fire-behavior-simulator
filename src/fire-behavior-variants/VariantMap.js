import * as C from './Configs.js'
import * as O from './Options.js'
import * as V from './Variants.js'

/**
 * VariantMap is a Javascript Map() object containing an instance of each
 * Variant keyed by its Variant.key()
 */
export class VariantMap extends Map {
  constructor() {
    super()
    // Add Config Variants
    Object.keys(C).forEach(Vclass => {
      const v = new C[Vclass]()
      this.set(v.key(), v)
    })
    // Add Option Variants
    Object.keys(O).forEach(Vclass => {
      const v = new O[Vclass]()
      this.set(v.key(), v)
    })
    // Add all other Variants
    Object.keys(V).forEach(Vclass => {
      const v = new V[Vclass]()
      this.set(v.key(), v)
    })
    this._applyInitial()
  }

  // Applies commonly expected display units where they differ from native units
  _applyInitial() {
    this.get('FireArea').setDisplayUnits('ac')
    this.get('FuelMoistureContent').setDisplayUnits('%')
    this.get('FuelMoistureContentDead').setDisplayUnits('%')
    this.get('FuelMoistureContentLive').setDisplayUnits('%')
    this.get('WindSpeed').setDisplayUnits('mi/h')
  }
}
