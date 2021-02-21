/**
 * @file Units-of-measure converter
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { Compiler } from './Compiler.js'
import { Parser } from './Parser.js'
import { baseSet, quantity, unitDefs } from './unitDefs.js'

export class Converter {
  constructor () {
    this._n = 0
    this._parser = new Parser(unitDefs)
    this._compiler = new Compiler(unitDefs)
    this._signatures = new Map()
    // Do this AFTER signatures map is created on previous line
    this._quantities = this._createQuantityMap(quantity)
    this._temp = this._createTemperatureMap(unitDefs)
  }

  _createQuantityMap (quantity) {
    const map = new Map()
    quantity.forEach(q => {
      const [text, terms] = q
      const sig = this.getSignature(terms[0])
      const sigKey = this._sigKey(sig)
      if (!map.has(sigKey)) {
        map.set(sigKey, [text])
      } else {
        map.get(sigKey).push(text)
      }
    })
    return map
  }

  _createTemperatureMap (unitDefs) {
    const map = new Map()
    unitDefs.forEach(unitDef => {
      const [uom, , aliases] = unitDef
      if (uom === 'oF' || uom === 'oC' || uom === 'oK') {
        map.set(uom, uom)
        aliases.forEach(alias => { map.set(alias, uom) })
      }
    })
    return map
  }

  // Temperature scale conversion
  _c2f (c) { return (c * 9 / 5) + 32 }
  _c2k (c) { return c + 273.15 }
  _f2c (f) { return (f - 32) * 5 / 9 }
  _f2k (f) { return this._c2k(this._f2c(f)) }
  _k2c (k) { return k - 273.15 }
  _k2f (k) { return this._c2f(this._k2c(k)) }

  // Returns a signature key like 'd-2m1' used as Map keys
  _sigKey (sig) {
    let key = ''
    baseSet.forEach(base => { key += base[1] + sig[base] })
    return key
  }

  _convertTemperatureScale (amount, fromT, intoT) {
    const t1 = this._temp.get(fromT)
    const t2 = this._temp.get(intoT)
    if (t1 === t2) return amount
    if (t1 === 'oC') {
      return (t2 === 'oK') ? this._c2k(amount) : this._c2f(amount)
    } else if (t1 === 'oK') {
      return (t2 === 'oC') ? this._k2c(amount) : this._k2f(amount)
    }
    return (t2 === 'oC') ? this._f2c(amount) : this._f2k(amount)
  }

  convert (amount, fromUom, intoUom) {
    this._n++
    if (this._temp.has(fromUom) || this._temp.has(intoUom)) {
      return this._convertTemperatureScale(amount, fromUom, intoUom)
    }
    return amount * this.factorFromInto(fromUom, intoUom)
  }

  convertible (uom1, uom2) {
    const sig1 = this.getSignature(uom1)
    const sig2 = this.getSignature(uom2)
    let ok = true
    baseSet.forEach(basePower => {
      if (sig1[basePower] !== sig2[basePower]) ok = false
    })
    return ok
  }

  factorToBase (uom) {
    const sig = this.getSignature(uom)
    return sig.coeff
  }

  factorFromInto (fromUom, intoUom) {
    const sig1 = this.getSignature(fromUom)
    const sig2 = this.getSignature(intoUom)
    return sig1.coeff / sig2.coeff
  }

  hasSignature (key) { return this._signatures.has(key) }

  quantity (key) {
    const sig = this.getSignature(key)
    const sigKey = this._sigKey(sig)
    const labels = this._quantities.get(sigKey)
    return (labels === undefined) ? 'unknown' : labels.join(', ')
  }

  getSignature (key) {
    if (!this._signatures.has(key)) {
      const tripletsArray = this._parser.parse(key)
      const signature = this._compiler.compile([1, tripletsArray, 1])
      this._signatures.set(key, signature)
    }
    return this._signatures.get(key)
  }
}
