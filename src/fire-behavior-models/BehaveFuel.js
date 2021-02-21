/**
 * @file Exported WFSP standard Behave fuel model equations as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
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
