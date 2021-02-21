/**
 * @file Exported WFSP wind functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

export function speedAt10m (ws20ft) {
  return 1.13 * ws20ft
}

export function speedAt20ft (ws10m) {
  return ws10m / 1.13
}

export function speedAt20ftFromMidflame (wsmid, mwaf) {
  return mwaf > 0 ? Calc.divide(wsmid, mwaf) : wsmid
}

export function speedAtMidflame (ws20ft, mwaf) {
  return mwaf * ws20ft
}
