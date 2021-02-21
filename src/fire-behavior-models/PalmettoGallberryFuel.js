/**
 * @file Exported WFSP palmetto-gallberry dynamic fuel model equations
 * as described by Hough and Albini (1978) and as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

// dead 0 to 0.25 inch
export function deadFineLoad (age, ht) {
  return Calc.positive(-0.00121 + 0.00379 * Math.log(age) + 0.00118 * ht * ht)
}

// dead 0.25 to 1 inch
export function deadSmallLoad (age, cover) {
  return Calc.positive(-0.00775 + 0.00021 * cover + 0.00007 * age * age)
}

// dead foliage
export function deadFoliageLoad (age, cover) {
  return 0.00221 * age ** 0.51263 * Math.exp(0.02482 * cover)
}

// L layer
export function deadLitterLoad (age, basalArea) {
  return (0.03632 + 0.0005336 * basalArea) * (1.0 - 0.25 ** age)
}

export function fuelDepth (ht) {
  return Math.max(0.01, (2.0 * ht) / 3.0)
}

// live 0 to 0.25 inch
export function liveFineLoad (age, ht) {
  return Calc.positive(0.00546 + 0.00092 * age + 0.00212 * ht * ht)
}

// live 0.25 to 1 inch
export function liveSmallLoad (age, ht) {
  return Calc.positive(-0.02128 + 0.00014 * age * age + 0.00314 * ht * ht)
}

// live foliage
export function liveFoliageLoad (age, cover, ht) {
  return Calc.positive(
    -0.0036 + 0.00253 * age + 0.00049 * cover + 0.00282 * ht * ht
  )
}
