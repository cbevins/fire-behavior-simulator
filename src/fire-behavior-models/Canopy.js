/**
 * @file Exported WFSP canopy functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

// Canopy volumetric fill ratio the volume under the canopy top that
// is filled with tree crowns (division by 3 assumes conical crown shapes).
export function crownFill (cover, cratio) {
  return (Calc.fraction(cratio) * Calc.fraction(cover)) / 3
}

// Crown length
export function crownLength (baseHt, ht) {
  return Calc.positive(ht - baseHt)
}

// // Crown length from crown ratio and canopy height
// export function crownLengthFromRatio(crownRatio, ht) {
//   return crownRatio * ht
// }

// Crown ratio
export function crownRatio (length, ht) {
  return Calc.fraction(Calc.divide(length, ht))
}

// Canopy fuel load
export function fuelLoad (bulk, length) {
  return Calc.positive(bulk * length)
}

// Canopy heat per unit area
export function heatPerUnitArea (load, heat) {
  return Calc.positive(load * heat)
}

// Returns true if canopy effectively shelters the fuel from wind
export function sheltersFuelFromWind (cover, ht, fill) {
  return cover >= 0.01 && fill >= 0.05 && ht >= 6
}

// Canopy induced midflame windspeed adjustment factor
export function windSpeedAdjustmentFactor (cover, ht, fill) {
  let waf = 1
  if (sheltersFuelFromWind(cover, ht, fill)) {
    waf =
      0.555 / (Math.sqrt(fill * ht) * Math.log((20 + 0.36 * ht) / (0.13 * ht)))
  }
  return Calc.fraction(waf)
}
