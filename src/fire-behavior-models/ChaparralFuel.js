/**
 * @file Chaparral dynamic fuel equations as described by Rothermel and Philpot (1973)
 * and as implemented by BehavePlus V6.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

export const TypeChamise = 'chamise'
export const TypeMixedBrush = 'mixedBrush'
export const Types = [TypeChamise, TypeMixedBrush]

/**
 * Estimates the chaparral age (years since last burned)
 * from the chaparral fuel depth and fuel type.
 *
 *  @param {number} depth - Chaparral fuel depth (ft+1)
 *  @param {string} type -  Chaparral fuel type ['chamise' | 'mixedBrush']
 *  @returns {number} Estimated chaparral age (years since last burned).
 */
export function age (depth, type) {
  if (type === TypeChamise) {
    return Math.exp(3.912023 * Math.sqrt(depth / 7.5))
  }
  // else  (type === TypeMixedBrush) {
  return Math.exp(3.912023 * Math.sqrt(depth / 10))
}

/**
 * Estimates the chaparral fuel depth from its age and type.
 *
 * @param {number} age
 * @param {string} type  One of 'chamise' or 'mixedBrush'
 * @returns {number} Estimated fuel bed depth (ft+1)
 */
export function fuelDepth (age, type) {
  // Prevent values of age < 1 from increasing the depth!
  const x = Math.log(Math.max(age, 1.1)) / 3.912023
  return type === TypeChamise ? 7.5 * x * x : 10 * x * x // type === TypeMixedBrush
}

/**
 * @returns {string[]} Array of valid chaparral fuel types.
 */
export function fuelTypes () {
  return Types
}

/**
 *  Estimates the total chaparral fuel load from age and type.
 *
 * NOTE - Rothermel & Philpot (1973) used a factor of 0.0315 for chamise age,
 * while Cohen used 0.0347 in FIRECAST.  According to Faith Ann Heinsch:
 * <i>We are going to use Cohen’s calculation from FIRECAST. The change has to do
 * with the fact that we are creating a proxy age from fuel bed depth rather than
 * using an entered age. He had to make some corrections for that assumption.</i>
 *
 *  @param {number} age - Chaparral age (years since last burned)
 *  @param {string} type -  Chaparral fuel type ['chamise' | 'mixedBrush']
 *  @returns {number} Total fuel load (lb+1 ft-2)
 */
export function totalLoad (age, type) {
  // Total load in tons per acre
  let tpa = 0
  if (type === TypeChamise) {
    // const chamise1 = 0.0315   // Chamise load factor from Rothermel & Philpot (1973)
    const chamise2 = 0.0347 // Chamise load factor from Cohen's FIRECAST code
    tpa = age / (1.4459 + chamise2 * age)
  } else { // if (type === TypeMixedBrush) {
    tpa = age / (0.4849 + 0.017 * age)
  }
  // Return total load in lb/ft2
  return (tpa * 2000) / 43560
}

/**
 * @returns {number} The dead fuel moisture content of extinction (fraction)
 * as used in BehavePlus V6.
 */
export function deadExtinctionMoisture () {
  return 0.3
}

/**
 * Dead fuel fraction from age for AVERAGE mortality level
 *
 * @param {number} age - Chaparral age (years since last burned)
 * @returns {number} Dead fuel fraction assuming avereage mortality.
 */
export function deadFractionAverageMortality (age) {
  return Calc.fraction(0.0694 * Math.exp(0.0402 * age))
}

/**
 * Dead fuel fraction from age for SEVERE mortality level
 *
 * @param {number} age - Chaparral age (years since last burned)
 * @returns {number} Dead fuel fraction assuming severe mortality.
 */
export function deadFractionSevereMortality (age) {
  return Calc.fraction(0.1094 * Math.exp(0.0385 * age))
}

/**
 *  Estimates chaparral dead fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} Chaparral dead fuel load (lb+1 ft-2)
 */
export function deadLoad (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * deadFuelFraction)
}

/**
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead fine (0 to 0.25 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot 1973 Figure 1.
 */
export function deadClass1Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * 0.347 * deadFuelFraction)
}

/**
 *  Estimates chaparral small (0.25-0.5 inch diameter) dead fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead small (0.25 to 0.5 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot 1973 Figure 1.
 */
export function deadClass2Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * 0.364 * deadFuelFraction)
}

/**
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead medium (0.5 to 1 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function deadClass3Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * 0.207 * deadFuelFraction)
}

/**
 * Estimates chaparral large (1 to 3 inch diameter) dead fuel load.
 *
 * Note that the factor of 0.082 varies from the Rothermel & Philpot
 * Figure 1 value of .085, because their factors totaled 1.03 instead of 1.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the dead large (1 to 3 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function deadClass4Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * 0.082 * deadFuelFraction)
}

/**
 *  Estimates chaparral live fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} Chaparral live fuel load (lb+1 ft-2)
 */
export function liveLoad (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * (1 - deadFuelFraction))
}

/**
 *  Estimates live fine (0 to 0.25 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live fine (0 to 0.25 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function liveClass1Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * (0.2416 - 0.256 * deadFuelFraction))
}

/**
 *  Estimates live small (0.25 to 0.5 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live small (0.25 t0 0.5 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function liveClass2Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * (0.1918 - 0.256 * deadFuelFraction))
}

/**
 *  Estimates live medium (0.5 to 1 inch diameter) chaparral stem wood fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live medium (0.5 to 1 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function liveClass3Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * (0.2648 - 0.05 * deadFuelFraction))
}

/**
 *  Estimates live large (1 to 3 inch diameter) chaparral stem wood fuel load.
 *
 * Modified so that thisLoad = live load - (liveLeaf + liveFine + liveSmall + liveMedium)
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live large (1 to 3 inch diameter) chaparral stem wood
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function liveClass4Load (totalFuelLoad, deadFuelFraction) {
  const liveLoad = totalFuelLoad * (1 - deadFuelFraction)
  const l1 = liveClass1Load(totalFuelLoad, deadFuelFraction)
  const l2 = liveClass2Load(totalFuelLoad, deadFuelFraction)
  const l3 = liveClass3Load(totalFuelLoad, deadFuelFraction)
  const l5 = liveClass5Load(totalFuelLoad, deadFuelFraction)
  return Calc.positive(liveLoad - l1 - l2 - l3 - l5)
  // return Calc.positive(totalFuelLoad * (0.1036 - 0.114 * deadFuelFraction))
}

/**
 *  Estimates live chaparral leaf fuel load.
 *
 * @param {number} totalFuelLoad Total chaparral fuel load (lb+1 ft-2)
 * @param {*} deadFuelFraction Dead fuel fraction (fraction)
 * @returns {number} The load (lb+1 ft-2)
 * of the live chaparral leaf
 * as per Rothermel and Philpot (1973) Figure 1.
 */
export function liveClass5Load (totalFuelLoad, deadFuelFraction) {
  return Calc.positive(totalFuelLoad * (0.1957 - 0.305 * deadFuelFraction))
}
