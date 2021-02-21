/**
 * @file Exported WFSP fuel bed equations
 * as described by Rothermel (1972) and as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */

import * as Calc from './Calc.js'

/**
 * Calculate the 'live' fuel category moisture content of extinction.
 *
 * @param real mextk The 'live' fuel category moisture content of extinction factor (ratio).
 * @param real dfmc The 'dead' fuel category fine moisture content (ratio).
 * @param real dmext The 'dead' category moisture content of extinction (ratio).
 * @return real The 'live' fuel category  moisture content of extinction (ratio).
 */
export function extinctionMoistureContent (mextk, dfmc, dmext) {
  const dry = 1 - Calc.divide(dfmc, dmext)
  const lmext = mextk * dry - 0.226
  return Math.max(lmext, dmext)
}

/**
 * Calculate the 'live' fuel category moisture content of extinction factor.
 *
 * This factor is constant for a fuel bed, and represents the ratio
 * of dead-to-live fuel mass that must be raised to ignition.  It
 * is the method described by Rothermel (1972) on page 35 that was
 * subsequently refined in BEHAVE and BehavePlus to use the
 * effective fuel load and effective heating number to determine
 * the ratio of fine dead to fine live fuels.
 *
 * See Rothermel (1972) eq 88 on page 35.
 *
 * @param float defl The 'dead' fuel catagory total fine fuel load (lb+1 ft-2).
 * @param float lefl The 'live' fuel catagory total fine fuel load (lb+1 ft-2).
 *
 * @return float The 'live' fuel category moisture content of extinction factor.
 */
export function extinctionMoistureContentFactor (defl, lefl) {
  return 2.9 * Calc.divide(defl, lefl)
}

/**
 * Calculate the fire heat per unit area.
 *
 * @param real rxi Fire reaction intensity (btu+1 ft-2 min-1).
 * @param real taur The fire/flame residence time (min+1).
 * @return The heat per unit area (btu+1 ft-2).
 */
export function heatPerUnitArea (rxi, taur) {
  return rxi * taur
}

/**
 *
 * @param float qig Fuel bed heat of pre-ignition (btu+1 lb-1)
 * @param float bulk Fuel bed bulk density (lb+1 ft-3)
 * @return float Fuel bed heat sink (btu+1 ft-3)
 */
export function heatSink (qig, bulk) {
  return qig * bulk
}
/**
 * Calculate the dead or live category mineral damping coefficient.
 *
 * @param float lifeCategoryEffectiveMineralContent
 * @return float Dead or live fuel category mineral damping coefficient.
 */
export function mineralDamping (seff) {
  const etas = seff <= 0 ? 1 : 0.174 / seff ** 0.19
  return Calc.fraction(etas)
}

/**
 * Calculate the dead or live life category moisture damping coefficient.
 *
 * @param mois Life fuel category moisture content (ratio).
 * @param mext Life fuel category moisture content of extinction (ratio).
 * @return The life fuel category moisture damping coefficient (fraction).
 */
export function moistureDamping (mois, mext) {
  const r = Calc.divide(mois, mext)
  return Calc.fraction(1 - 2.59 * r + 5.11 * r * r - 3.52 * r * r * r)
}

/**
 * Calculate the no-wind no-slope fire spread rate.
 *
 * @param real rxi The total fire reaction intensity (btu+1 ft-2 min-1).
 * @param real pflx The fuel bed propagating flux ratio (ratio).
 * @param real sink The fuel bed heat sink (btu+1 ft-3).
 * @return The no-wind no-slope fire spread rate (ft+1 min-1).
 */
export function noWindNoSlopeSpreadRate (rxi, pflx, sink) {
  return Calc.positive(Calc.divide(pflx * rxi, sink))
}

/**
 * Calculate the open-canopy midflame wind speed adjustment factor.
 *
 * @param fuelDepth Fuel bed depth (ft+1)
 * @return Wind speed adjustment factor
 */
export function openWindSpeedAdjustmentFactor (fuelDepth) {
  const f = Math.min(6, Math.max(fuelDepth, 0.1))
  return 1.83 / Math.log((20 + 0.36 * f) / (0.13 * f))
}

/**
 * Calculate the fuel bed optimum packing ratio (fraction).
 *
 * See Rothermel (1972) eq 37 (p 19, 26) and eq 69 (p32).
 *
 * @param float bedSavr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float The fuel bed optimum packing ratio (fraction).
 */
export function optimumPackingRatio (savr) {
  return savr <= 0 ? 0 : 3.348 / savr ** 0.8189
}

export function packingRatio (deadPprc, livePprc, depth) {
  return Calc.divide(deadPprc + livePprc, depth)
}

/**
 * Calculate the no-wind propagating flux ratio (ratio).
 *
 * The propagating flux is the numerator of the Rothermel (1972) spread
 * rate equation 1 and has units of heat per unit area per unit time.
 *
 * See Rothermel (1972) eq 42 (p 20, 26) and eq 76 (p32).
 *
 * @param float savr The fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @param float beta The fuel bed packing ratio (ratio).
 * @return float The fuel bed no-wind propagating flux ratio (ratio).
 */
export function propagatingFluxRatio (savr, beta) {
  return savr <= 0
    ? 0
    : Math.exp((0.792 + 0.681 * Math.sqrt(savr)) * (beta + 0.1)) /
        (192 + 0.2595 * savr)
}

/**
 * Calculate the life fuel category reaction intensity without moisture damping.
 *
 * @param float rxvo Fuel bed optimum reaction velocity (min-1).
 * @param float wnet Life fuel category net ovendry fuel load (lb+1 ft-2).
 * @param float heat Life fuel category heat of combustion (btu+1 lb-1).
 * @param float etas Life fuel category mineral damping coefficient (fraction).
 * @return float The life fuel category reaction intensity (btu+1 ft-2 min-1)
 *      without moisture damping.
 */
export function reactionIntensityDry (rxvo, wnet, heat, etas) {
  return rxvo * wnet * heat * etas
}

/**
 * Calculate the fuel bed reaction velocity exponent 'A'.
 *
 * This is an arbitrary variable 'A'  used to derive the
 * fuel bed optimum reaction velocity.
 * See Rothermel (1972) eq 39 (p19, 26) and 67 (p 31).
 *
 * @param float savr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed reaction velocity exponent 'A' (ratio).
 */
export function reactionVelocityExponent (savr) {
  return savr <= 0 ? 0 : 133 / savr ** 0.7913
}

/**
 * Calculate the fuel bed maximum reaction velocity (min-1).
 *
 * See Rothermel (1972) eq 36 (p 19, 26) and 68 (p 32).
 *
 * @param float bedSavr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed maximum reaction velocity (min-1).
 */
export function reactionVelocityMaximum (sv15) {
  return sv15 <= 0 ? 0 : sv15 / (495 + 0.0594 * sv15)
}

/**
 * Calculate the fuel bed optimum reaction velocity (min-1).
 *
 * See Rothermel (1972) eq 38 (p 19, 26) and eq 67 (p 31).
 *
 * @param float betr Fuel bed packing ratio ratio (ratio).
 * @param float rxvm Fuel bed maximum reaction velocity (min-1).
 * @param float rxve Fuel bed reaction velocity exponent 'A' (ratio).
 * @return float Fuel bed optimum reaction velocity (min-1).
 */
export function reactionVelocityOptimum (betr, rxvm, rxve) {
  return betr <= 0 || betr === 1
    ? 0
    : rxvm * betr ** rxve * Math.exp(rxve * (1 - betr))
}

// DEPRECATED - The size class surface area calculations are now done inside swtg()
// Accumulate fuel particle surface area by size class
// for fuel particles with size class idx
// export function scArea(idx, s1, a1, s2, a2, s3, a3, s4, a4, s5, a5) {
//   let area = 0
//   area += (idx === s1) ? a1 : 0
//   area += (idx === s2) ? a2 : 0
//   area += (idx === s3) ? a3 : 0
//   area += (idx === s4) ? a4 : 0
//   area += (idx === s5) ? a5 : 0
//   return area
// }

/**
 * Calculate the often-used intermediate parameter of the fuel bed's
 * characteristics surface area-to-volume ratio raised to the 1.5 power.
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Fuel bed parameter (ratio).
 */
export function savr15 (savr) {
  return savr ** 1.5
}

/**
 * Calculate the fuel bed slope coeffient `phiS` slope factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread slope coefficient `phiS`.
 *
 * See Rothermel (1972) eq 51 (p 24, 26) and eq 80 (p 33).
 *
 * @param float packingRatio Fuel bed packing ratio (ratio).
 * @return float Factor used to derive the slope coefficient `phiS' (ratio).
 */
export function slopeK (beta) {
  return beta <= 0 ? 0 : 5.275 * beta ** -0.3
}

// Returns an array of 6 size class area weighting factors
export function sizeClassWeightingFactorArray (
  a1,
  s1,
  a2,
  s2,
  a3,
  s3,
  a4,
  s4,
  a5,
  s5
) {
  const a = [a1, a2, a3, a4, a5]
  const s = [s1, s2, s3, s4, s5]
  let tarea = 0.0
  const scar = [0, 0, 0, 0, 0, 0]
  for (let idx = 0; idx < 5; idx += 1) {
    scar[s[idx]] += a[idx]
    tarea += a[idx]
  }
  const scwt = [0, 0, 0, 0, 0, 0]
  if (tarea > 0.0) {
    for (let idx = 0; idx < 6; idx += 1) {
      scwt[idx] = scar[idx] / tarea
    }
  }
  return scwt
}

/**
 * Calculate the fuel bed flame residence time.
 *
 * \TODO find reference
 *
 * @param float savr Fuel bed surface area-to-volume ratio (ft-1).
 * @return float Fuel bed flame residence time (min+1).
 */
export function taur (savr) {
  return savr <= 0 ? 0 : 384 / savr
}

/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `B`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 49 (p 23, 26) and eq 83 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `B` (ratio).
 */
export function windB (savr) {
  return 0.02526 * savr ** 0.54
}

/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `C`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 48 (p 23, 26) and eq 82 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `C` (ratio).
 */
export function windC (savr) {
  return 7.47 * Math.exp(-0.133 * savr ** 0.55)
}

/**
 * Calculate the fuel bed wind coefficient `phiW` correlation factor `E`.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and is used to derive the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 50 (p 23, 26) and eq 82 (p 33).
 *
 * @param float savr Fuel bed characteristic surface area-to-volume ratio (ft-1).
 * @return float Wind coefficient `phiW` correlation parameter `E` (ratio).
 */
export function windE (savr) {
  return 0.715 * Math.exp(-0.000359 * savr)
}

/**
 * Calculate the fuel bed wind coeffient `phiW` wind factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread wind coefficient `phiW`.
 *
 * See Rothermel (1972) eq 47 (p 23, 26) and eq 79 (p 33).
 *
 * @param float betr Fuel bed packing ratio (ratio).
 * @param float wnde The fuel bed wind coefficient `phiW` correlation factor `E`.
 * @param float wndc The fuel bed wind coefficient `phiW` correlation factor `C`.
 * @return float Factor used to derive the wind coefficient `phiW' (ratio).
 */
export function windK (betr, wnde, wndc) {
  return betr <= 0 ? 0 : wndc * betr ** -wnde
}

/**
 * Calculate the fuel bed wind coeffient `phiW` inverse K wind factor.
 *
 * This factor is an intermediate parameter that is constant for a fuel bed,
 * and used to determine the fire spread wind coefficient `phiW`.
 *
 * It is the inverse of the wind factor 'K', and is used to re-derive
 * effective wind speeds within the BEHAVE fire spread computations.
 *
 * See Rothermel (1972) eq 47 (p 23, 26) and eq 79 (p 33).
 *
 * @param float betr Fuel bed packing ratio ratio (ratio).
 * @param float wnde The fuel bed wind coefficient `phiW` correlation factor `E`.
 * @param float wndc The fuel bed wind coefficient `phiW` correlation factor `C`.
 * @return float Factor used to derive the wind coefficient `phiW' (ratio).
 */
export function windI (betr, wnde, wndc) {
  return betr <= 0.0 || wndc <= 0 ? 0 : betr ** wnde / wndc
}

export function windSpeedAdjustmentFactor (
  fuelSheltered,
  shelteredWaf,
  openWaf
) {
  return fuelSheltered ? Math.min(shelteredWaf, openWaf) : openWaf
}
