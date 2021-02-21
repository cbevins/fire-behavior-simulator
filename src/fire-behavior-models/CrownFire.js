/**
 * @file Crown fire functions as described by Rothermel () and by Scott & Reinhardt ()
 * and as implemented by BehavePlus v6.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */

import * as Calc from './Calc.js'

export const ACTIVE = 'Active'
export const CONDITIONAL = 'Conditional'
export const PASSIVE = 'Passive'
export const SURFACE = 'Surface'
export const InitiationTypes = [ACTIVE, CONDITIONAL, PASSIVE, SURFACE]

/**
 * Calculate the crown fire active ratio.
 *
 * @param rActive Actual active crown fire spread rate (ft+1 min-1)
 * @param rPrime Crown spread rate required to maintain active crowning (ft+1 min-1)
 * @return Scott & Reinhardt's active crowning ratio.
 */
export function activeRatio (rActive, rPrime) {
  return rPrime <= 0 ? 0 : rActive / rPrime
}

/**
 * Crown fire area per Rothermel (1991) equation 11 (p 16)
 *
 * @param dist Crown fire spread distance (ft+1)
 * @param lwr Crown fire length-to-width ratio
 * @return Crown fire area (ft+2)
 */
export function area (dist, lwr) {
  return (Math.PI * dist * dist) / (4 * lwr)
}

export function canTransition (transRatio) {
  return transRatio >= 1
}

/**
 * Calculates the crown fraction burned as per Scott & Reinhardt (2001).
 *
 * @param rSurface Actual surface fire spread rate [Rsurface] (ft+1 min-1).
 * @param rInit Surface fire spread rate required to
 *  initiate torching/crowning [R'initiation] (ft+1 min-1).
 * @param rSa Surface fire spread rate [R'sa] (ft+1 min-1)
 *   at which the active crown fire spread rate is fully achieved
 *   and the crown fraction burned is 1.
 * @return The crown fraction burned (fraction).
 */
export function crownFractionBurned (rSurface, rInit, rSa) {
  const numer = rSurface - rInit // Rsurface - R'init
  const denom = rSa - rInit // R'sa - R'init
  return Calc.fraction(Calc.divide(numer, denom))
}

/**
 * Calculate the Scott & Reinhardt 'crowning index' (O'active),
 * the 20-ft wind speed at which the crown canopy becomes fully available
 * for active fire spread (and the crown fraction burned approaches 1).
 *
 * @param oActive Open wind speed sufficient for active xcrown fire (ft+1 min-1)
 * @return The Scott & Reinhardt Crowning Index (km+1 h-1).
 */
export function crowningIndex (oActive) {
  return oActive / 54.680665 // CI in km/h
}

/**
 *
 * @param crownHpua Crown fire (surface plus canopy fuel) heat per unit area (Btu+1 ft-2)
 * @param rActive Active crown fire spread rate (ft+1 min-1)
 * @return Active crown fire fireline intensity (BTU+1 ft-1 s-1)
 */
export function fliActive (crownHpua, rActive) {
  return (rActive / 60) * crownHpua
}

export function fliFinal (rFinal, cfb, cpyHpua, surfHpua) {
  return (rFinal * (surfHpua + cfb * cpyHpua)) / 60
}

/**
 * Calculate the critical surface fire intensity (I'initiation)
 * sufficient to drive off canopy foliar moisture and initiate a
 * passive or active crown fire.
 *
 * This is Scott & Reinhardt (2001) equation 11 (p 13).
 *
 * @param folMois Canopy foliar moisture content (ratio).
 * @param cpyBase Crown canopy base height (ft+1).
 * @return The critical surface fireline intensity (btu+1 ft-1 s-1)
 *  required to initiate a passive or active crown fire.
 */
export function fliInit (folMois, cpyBase) {
  const fmc = Math.max(30, 100 * folMois) // convert to percent with 30% min
  const cbh = Math.max(0.1, 0.3048 * cpyBase) // convert to meters with 10 cm min
  const kwm = Math.pow(0.01 * cbh * (460 + 25.9 * fmc), 1.5) // (kW/m)
  return kwm * 0.288672 // return as Btu/ft/s
}

/**
 * Calculate Thomas's (1963) flame length (ft+1) given a fireline intensity.
 *
 * @param fli Fireline intensity (Btu+1 ft-1 s-1).
 * @return Thomas' (1963) flame length (ft+1).
 */
export function flameLengthThomas (fli) {
  return fli <= 0 ? 0 : 0.2 * Math.pow(fli, 2 / 3)
}

// Active crown fire heat per unit area,
// sum of the surface fire HPUA and the entire active canopy HPUA
// (i.e., the canopy load * canopy heat content,
// and NOT the canopy fuel model 10 HPUA)
export function hpuaActive (surfHpua, cpyHpua) {
  return surfHpua + cpyHpua
}

export function isActive (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === ACTIVE
}

export function isCrown (transRatio, activeRatio) {
  const fireType = type(transRatio, activeRatio)
  return fireType === ACTIVE || fireType === PASSIVE
}

export function isConditional (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === CONDITIONAL
}

export function isPassive (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === PASSIVE
}

export function isSurface (transRatio, activeRatio) {
  return type(transRatio, activeRatio) === SURFACE
}

export function isPlumeDominated (powerRatio) {
  return powerRatio >= 1
}

export function isWindDriven (powerRatio) {
  return powerRatio < 1
}

/**
 * Calculate the crown fire length-to-width ratio given the 20-ft
 * wind speed (Rothermel 1991, Equation 10, p16).
 *
 * @param wspd20 Wind speed at 20-ft (ft+1 min-1).
 * @return The crown fire length-to-width ratio (ratio).
 */
export function lengthToWidthRatio (wspd20) {
  return 1 + 0.125 * (wspd20 / 88) // Wind speed must be in miles per hour
}

/**
 * Calculate the Scott & Reinhardt 'crowning index' (O'active),
 * the 20-ft wind speed at which the crown canopy becomes fully available
 * for active fire spread (and the crown fraction burned approaches 1).
 *
 * @param cpyBulk Crown canopy bulk density (btu+1 ft-3).
 * @param crownRxi Crown fire (fuel model 10) reaction intensity (btu+1 ft-2 min-1).
 * @param crownSink Crown fire (fuel model 10) heat sink (btu+1 ft-3).
 * @param phis Slope coefficient (0 for crown fire)
 * @return The O`active wind speed (ft+1 min-1) or Infinity.
 */
export function oActive (cpyBulk, crownRxi, crownSink, phis) {
  if (cpyBulk === 0 || crownSink === 0) return Infinity
  // In native units
  const cbd = 16.0185 * cpyBulk // Convert from lb/ft3 to kg/m3
  const ractive = 3.28084 * (3 / cbd) // R'active, ft/min
  const r10 = ractive / 3.34 // R'active = 3.324 * r10
  const pflux = 0.048317062998571636 // Fuel model 10 actual propagating flux ratio
  const ros0 = (crownRxi * pflux) / crownSink
  if ((ros0 - 1 - phis) === 0) return Infinity
  const windB = 1.4308256324729873 // Fuel model 10 actual wind factor B
  const windBInv = 1 / windB // Fuel model 10 actual inverse of wind factor B
  const windK = 0.0016102128596515481 // Fuel model 10 actual K = C*pow((beta/betOpt),-E)
  const a = (r10 / ros0 - 1 - phis) / windK
  if (a === 0) return Infinity
  const uMid = Math.pow(a, windBInv)
  const u20 = uMid / 0.4
  return u20
}

/**
 * Crown fire perimeter per Rothermel (1991) equation 13 (p 16).
 *
 * @param dist Crown fire spread distance (ft+1)
 * @param lwr Crown fire length-to-width ratio
 * @return Crown fire perimeter (ft+1)
 */
export function perimeter (dist, lwr) {
  return 0.5 * Math.PI * dist * (1 + 1 / lwr)
}

/**
 * Calculate the crown fire power-of-the-fire(ft+11 lb+1 ft-2 s-1).
 *
 * @param fliActive Crown fire active fireline intensity (Btu+1 ft-1 s-1).
 * @return Rothermel's power of the fire (ft+1 lb+1 ft-2 s-1).
 */
export function powerOfTheFire (fliActive) {
  return fliActive / 129
}

/**
 * Calculate the crown fire power-of-the-wind (ft+1 lb+1 ft-2 s-1).
 *
 * See Rothermel (1991) equations 6 & 7 (p 14).
 *
 * @param wspd20 Wind speed at 20-ft (ft+1 min-1).
 * @param rActive Actiuve crown fire spread rate (ft+1 min-1).
 * @return Rothermel's power of the wind (ft+1 lb+1 ft-2 s-1).
 */
export function powerOfTheWind (wspd20, rActive) {
  // Difference must be in ft+1 s-1
  const diff = Calc.positive((wspd20 - rActive) / 60)
  return 0.00106 * diff * diff * diff
}

/**
 * Calculate the active crown fire spread rate at head [Ractive] (ft+1 min-1)
 * given the corresponding standard fuel model 10 spread rate at head.
 *
 * This is the crown fire spread rate per Rothermel (1991), and which
 * Scott & Reinhardt term `Ractive`
 *
 * @param fm10Ros Standard fuel model 10 spread rate at head (ft+1 min-1).
 *
 * @return The spread rate at head (ft+1 min-1) of the active crown fire.
 */
export function rActive (fm10ros) {
  return 3.34 * fm10ros
}

/**
 * Scott & Reinhardt (2005) final spread rate based on FAH.
 *
 * @param rSurface
 * @param rActive
 * @param cfb Crown fraction burned (fraction).
 * @return float Final crown fire spread rate (ft+1 min-1)
 */
export function rFinal (rSurface, rActive, cfb) {
  return rSurface + cfb * Calc.positive(rActive - rSurface)
}

/**
 * Calculate the critical surface fire spread rate (R'initiation)
 * sufficient to initiate a passive or active crown fire.
 *
 * This is Scott & Reinhardt (2001) equation 12 (p 13).
 *
 * @param critSurfFli Critical surface fireline intensity (btu_1 ft-1 s-1).
 * @param surfHpua Surface fire heat per unit area (Btu+1 ft-2).
 * @return Scott & Reinhardt's critical surface fire spread rate
 *  [R'initiation] (ft+1 min-1)
 */
export function rInit (critSurfFli, surfHpua) {
  return surfHpua <= 0 ? 1.0e12 : (60 * critSurfFli) / surfHpua
}

/**
 * Calculate R'active, the critical crown (minimum) rate of spread for active crowning.
 *
 * Scott & Reinhardt (2001) equation 14, p 14.
 *
 * @param cpyBulk Crown canopy bulk density (lb+1 ft-3).
 * @return The critical crown fire spread rate (ft+1 min-1).
 */
export function rPrimeActive (cpyBulk) {
  const cbdSi = 16.0184663678 * cpyBulk // convert to Kg/m3
  const rosSi = cbdSi <= 0 ? 0 : 3 / cbdSi // m/min
  const rosFpm = rosSi * 3.2808399 // return as ft/min
  return rosFpm
}

/**
 * Scott & Reinhardt (2001) R'sa, the theoretical surface fire spread rate
 * when the 20-ft wind speed equals O'active
 *
 * @param oActive Critical open wind speed (ft+1 min-1) for sustaining fully active crown fire
 * @param surfRos0 Surface fire no-wind no-slope spread rate (ft+1 min-1)
 * @param surfWaf Surface fuel's wind speed adjustment factor to apply to oActive
 * @param surfWindB Surface fuel's wind factor B
 * @param surfWindK Surface fuel's wind factor K
 * @param surfPhiS Surface fuel's slope coefficient
 * @return R'sa The theoretical surface fire spread rate
 * when the 20-ft wind speed equals O'active
 */
export function rSa (
  oActive,
  surfRos0,
  surfWaf,
  surfWindB,
  surfWindK,
  surfPhiS
) {
  if (oActive === Infinity) return Infinity
  const mwspd = surfWaf * oActive
  const surfPhiW = mwspd <= 0 ? 0 : surfWindK * Math.pow(mwspd, surfWindB)
  return surfRos0 * (1 + surfPhiW + surfPhiS)
}

/**
 * Calculate the crown fire transition ratio.
 *
 * @param surfFli Actual surface fire fireline intensity (Btu+1 ft-1 s-1).
 * @param iInit Critical surface fire fireline intensity [I'initiation]
 * required to initiate active or passive crowning (Btu+1 ft-1 s-1).
 * @return Rothermel's crown fire transition ratio.
 */
export function transitionRatio (surfFli, fliInit) {
  return fliInit <= 0 ? 0 : surfFli / fliInit
}

/**
 * Calculate the final fire type.
 *
 *  <table>
 *    <tr>
 *      <td> Transition </td>
 *        <td colspan='2'> Active Ratio </td>
 *    </tr>
 *    <tr>
 *        <td> Ratio </td>
 *        <td> &lt 1 </td>
 *        <td> &gt = 1 </td>
 *    </tr>
 *    <tr>
 *        <td> &lt 1 </td>
 *        <td> 0 : Surface Fire </td>
 *        <td> 2 : Conditional Active Crown Fire </td>
 *    </tr>
 *    <tr>
 *        <td> &gt = 1 </td>
 *        <td> 1 : Passive Crown Fire </td>
 *        <td> 3 : Active Crown Fire </td>
 *    </tr>
 *  </table>
 *
 * @param transRatio The ratio of the surface fireline intensity to the
 * critical surface fireline intensity.
 * @param activeRatio The ratio of the active crown fire spread rate to the
 * critical crown fire spread rate
 * @return One of the following codes:
 *  - 'surface fire' indicates a surface fire with no torching or crowning
 *      (transition ratio < 1 && active ratio < 1)
 * - 'passive crown fire' indicates a passive/torching crown fire
 *      (transition ratio >= 1 && active ratio < 1)
 * - 'conditional surface fire' indicates a surface fire that could conditionally
 *      transition to an active crown fire
 *      (transition ratio < 1 && active ratio >= 1)
 * - 'active crown fire' indicates an active crown fire
 *      (transition ratio >= 1 && active ratio >= 1)
 */
export function type (transRatio, activeRatio) {
  if (transRatio < 1) {
    return activeRatio < 1 ? SURFACE : CONDITIONAL
  } else {
    // ( transRatio >= 1.0 )
    return activeRatio < 1 ? PASSIVE : ACTIVE
  }
}
