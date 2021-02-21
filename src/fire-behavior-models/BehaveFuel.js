/**
 * @file Standard Behave fuel model equations as implemented by BehavePlus v6.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

export function curedHerbFraction (liveHerbMc) {
  const fraction = 1.333 - 1.11 * liveHerbMc
  return Calc.fraction(fraction)
}

export function deadHerbLoad (totalHerbLoad, curedHerbFraction) {
  return totalHerbLoad * curedHerbFraction
}

export function liveHerbLoad (totalHerbLoad, curedHerbFraction) {
  return totalHerbLoad * (1 - curedHerbFraction)
}
