/**
 * @file Units-of-measure compiler
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { baseSet, protoSignature } from './unitDefs.js'

export class Compiler {
  /**
   * @param {array} unitDefs The units definitions array
   */
  constructor (unitDefs) {
    this._unitMap = this._createUnitsMap(unitDefs)
  }

  _createUnitsMap (unitDefs) {
    const map = new Map()
    unitDefs.forEach(([key, uom]) => { map.set(key, uom) })
    return map
  }

  /**
   * Compiles a previously parsed and de-aliased units-of-measure triplet into a units Signature.
   *
   * @param {array} triplet [numberf:coeff, string|array:uom, integer:power]
   * @return {object} The units' signature for the triplet
  */
  compile (triplet) {
    let sig = { ...protoSignature }
    const [coeff, uom, power] = triplet
    if (Array.isArray(uom)) {
      // then this is a compound unit-of-measure (such as W = J/s)
      uom.forEach((uomTriplet, idx) => {
        const [, , p] = uomTriplet
        const sig2 = this.compile(uomTriplet)
        baseSet.forEach(base => { sig[base] += sig2[base] })
        sig.coeff *= (p > 0) ? sig2.coeff : 1 / sig2.coeff
      })
      sig.coeff *= coeff
    } else if (baseSet.has(uom)) { // then this is a Base unit
      sig[uom] = sig[uom] + 1
    } else if (this._unitMap.has(uom)) { // then this is a derived unit
      // continue recursing until we reach a base
      sig = this.compile(this._unitMap.get(uom))
      if (power !== 1) {
        baseSet.forEach(base => { if (sig[base]) sig[base] *= power })
        sig.coeff = sig.coeff ** Math.abs(power)
      }
      sig.coeff = sig.coeff * coeff
    } else { // else this is an unknown uom
      throw new Error(`Unknown unit-of-measure '${uom}'`)
    }
    return sig
  }
}
