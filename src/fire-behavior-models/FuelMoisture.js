/**
 * @file Fuel moisture estimates based on Fosberg and used by National Wildfire Coordinmating Group
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

// Fosberg's Table A - Reference Fuel Moisture
export const FosbergA = [
// 4  9 14 19 24 29 34 39 44 49 54 59 64 69  74  79  84  89  94  99 100 Relative Humidity
  [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 9, 10, 11, 12, 12, 13, 13, 14], // db < 30
  [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 10, 10, 11, 12, 13, 13, 13], // 30 <= db < 50
  [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12, 12, 12, 13], // 50 <= db < 70
  [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 13], // 70 <= db < 90
  [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 13], // 90 <= db < 109
  [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 12] // 109 <= db < 200
]

// Fosberg's Table B. 1-h Fuel Moisture Corrections - May, Jun, Jul
export const FosbergBExposed = [
  // 0800-0959  1000-1159   1200-1359 1400-1559  1600-1759  1800-1959
  [ // 0 = north
    [[2, 3, 4], [1, 1, 1], [0, 0, 1], [0, 0, 1], [1, 1, 1], [2, 3, 4]], // N <= 30%
    [[3, 4, 4], [1, 2, 2], [1, 1, 2], [1, 1, 2], [1, 2, 2], [3, 4, 4]] // N > 30%
  ], [ // 1 = east
    [[2, 2, 3], [1, 1, 1], [0, 0, 1], [0, 0, 1], [1, 1, 2], [3, 4, 4]], // E <= 30%
    [[1, 2, 2], [0, 0, 1], [0, 0, 1], [1, 1, 2], [2, 3, 4], [4, 5, 6]] // E > 30%
  ], [ // 2 = south
    [[2, 3, 3], [1, 1, 1], [0, 0, 1], [0, 0, 1], [1, 1, 1], [2, 3, 3]], // S <= 30%
    [[2, 3, 3], [1, 1, 2], [0, 1, 1], [0, 1, 1], [1, 1, 2], [2, 3, 3]] // S > 30%
  ], [ // 3 = west
    [[2, 3, 4], [1, 1, 2], [0, 0, 1], [0, 0, 1], [0, 1, 1], [2, 3, 3]], // W <= 30%
    [[4, 5, 6], [2, 3, 4], [1, 1, 2], [0, 0, 1], [0, 0, 1], [1, 2, 2]] // W > 30%
  ]
]
export const FosbergBShaded = [
// 0800-0959  1000-1159   1200-1359 1400-1559  1600-1759  1800-1959
  [[[4, 5, 5], [3, 4, 5], [3, 3, 4], [3, 3, 4], [3, 4, 5], [4, 5, 5]]], // N
  [[[4, 4, 5], [3, 4, 5], [3, 3, 4], [3, 4, 4], [3, 4, 5], [4, 5, 6]]], // S
  [[[4, 4, 5], [3, 4, 5], [3, 3, 4], [3, 3, 4], [3, 4, 5], [4, 5, 5]]], // E
  [[[4, 5, 6], [3, 4, 5], [3, 3, 4], [3, 3, 4], [3, 4, 5], [4, 4, 5]]] // W
]

// Fosberg's Table C. 1-h Fuel Moisture Corrections - Feb, Mar, Apr and Aug, Sep, oct
export const FosbergCExposed = [
  [ // 0 = north
  // 0800-0959  1000-1159  1200-1359  1400-1559  1600-1759  1800-1959
    [[3, 4, 5], [1, 2, 3], [1, 1, 2], [1, 1, 2], [1, 2, 3], [3, 4, 5]], // N <= 30%
    [[3, 4, 5], [3, 3, 4], [2, 3, 4], [2, 3, 4], [3, 3, 4], [3, 4, 5]] // N > 30%
  ], [ // 1 = east
    [[3, 4, 5], [1, 2, 3], [1, 1, 1], [1, 1, 2], [1, 2, 4], [3, 4, 5]], // E <= 30%
    [[3, 3, 4], [1, 1, 1], [1, 1, 1], [1, 2, 3], [3, 4, 5], [4, 5, 6]] // E > 30%
  ], [ // 2 = south
    [[3, 4, 5], [1, 2, 2], [1, 1, 1], [1, 1, 1], [1, 2, 3], [3, 4, 5]], // S <= 30%
    [[3, 4, 5], [1, 2, 2], [0, 1, 1], [0, 1, 1], [1, 2, 2], [3, 4, 5]] // S > 30%
  ], [ // 3 = west
    [[3, 4, 5], [1, 2, 3], [1, 1, 1], [1, 1, 1], [1, 2, 3], [3, 4, 5]], // W <= 30%
    [[4, 5, 6], [3, 4, 5], [1, 2, 3], [1, 1, 1], [1, 1, 1], [3, 3, 4]] // W > 30%
  ]
]
export const FosbergCShaded = [
// 0800-0959  1000-1159   1200-1359 1400-1559  1600-1759  1800-1959
  [[[4, 5, 6], [4, 5, 5], [3, 4, 5], [3, 4, 5], [4, 5, 5], [4, 5, 6]]], // N
  [[[4, 5, 6], [3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5, 6], [4, 5, 6]]], // S
  [[[4, 5, 6], [3, 4, 5], [3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5, 6]]], // E
  [[[4, 5, 6], [4, 5, 6], [3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5, 6]]] // W
]

// Fosberg's Table D. 1-h Fuel Moisture Corrections - Nov, Dec, Jan
export const FosbergDExposed = [
  [ // 0 = north
  // 0800-0959  1000-1159  1200-1359  1400-1559  1600-1759  1800-1959
    [[4, 5, 6], [3, 4, 5], [2, 3, 4], [2, 3, 4], [3, 4, 5], [4, 5, 6]], // N <= 30%
    [[4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6]] // N > 30%
  ], [ // 1 = east
    [[4, 5, 6], [3, 4, 4], [2, 3, 3], [2, 3, 3], [3, 4, 5], [4, 5, 6]], // E <= 30%
    [[4, 5, 6], [2, 3, 4], [2, 2, 3], [3, 4, 4], [4, 5, 6], [4, 5, 6]] // E > 30%
  ], [ // 2 = south
    [[4, 5, 6], [3, 4, 5], [2, 3, 3], [2, 2, 3], [3, 4, 4], [4, 5, 6]], // S <= 30%
    [[4, 5, 6], [2, 3, 3], [1, 1, 2], [1, 1, 2], [2, 3, 3], [4, 5, 6]] // S > 30%
  ], [ // 3 = west
    [[4, 5, 6], [3, 4, 5], [2, 3, 3], [2, 3, 3], [3, 4, 4], [4, 5, 6]], // W <= 30%
    [[4, 5, 6], [4, 5, 6], [3, 4, 4], [2, 2, 3], [2, 3, 4], [4, 5, 6]] // W > 30%
  ]
]
export const FosbergDShaded = [
// 0800-0959  1000-1159   1200-1359 1400-1559  1600-1759  1800-1959
  [[[4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 5], [4, 5, 6]]], // N
  [[[4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 5], [4, 5, 6]]], // E
  [[[4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 5], [4, 5, 6]]], // S
  [[[4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 5], [4, 5, 6]]] // W
]

const Correction = [
  [FosbergBExposed, FosbergBShaded], // 0 = Table B, May, Jun, Jul
  [FosbergCExposed, FosbergCShaded], // 1 = Table C, Feb, Mar, Apr and Aug, Sep, Oct
  [FosbergDExposed, FosbergDShaded] // 2 = Table D, Nov, Dec, Jan
]

// Mapping from compass quadrant to aspect index
const Aspect = [0, 1, 1, 2, 2, 3, 3, 4, 4, 0] // N=0, E=1, S=2, W=3

// Mapping from month to correction table index
//             x, J, F, M, A, M, J, J, A, S, O, N, D
const Month = [2, 2, 1, 1, 1, 0, 0, 0, 1, 1, 1, 2, 2]

/**
 * Estimates 1-h fuel moisture from Fosberg's tables
 * @param {number} db Dry bulb temperature (oF)
 * @param {number} rh Relative humidity (ratio)
 * @param {number} month Month number (Jan=1, Dec = 12)
 * @param {number} shading Shading of surface fuels (shaded fraction)
 * @param {number} aspect Aspect (degrees from north)
 * @param {number} slope Slope steepness (ratio of rise / reach)
 * @param {number} hour Hour of the day (midnight=0, 6am=6, noon=12, 6pm = 18)
 * @param {number} elevDiff Elevation diff from db & rh obs to site (+- ft)
 * @returns {number} 1-h fuel moisture correction (ratio)
 */
export function fosbergDead1h (reference, correction) {
  return reference + correction
}

export function fosbergDead10h (fm1) { return fm1 + 0.02 }

export function fosbergDead100h (fm1) { return fm1 + 0.04 }

/**
 * Returns Fosberg's 'Reference Fuel Moisture'
 * @param {number} db Dry bulb temperature (oF)
 * @param {number} rh Relative humidity (ratio)
 * @returns {number} Reference fuel moisture (ratio)
 */
export function fosbergReference (db, rh) {
  const dbIdx = Math.min(Math.max(0, Math.floor((db - 10) / 20)), 5)
  const rhIdx = Math.min(Math.max(0, Math.floor(100 * rh / 5)), 19)
  // console.log('dbIdx', dbIdx, 'rhIdx', rhIdx)
  return 0.01 * FosbergA[dbIdx][rhIdx]
}

/**
 * Returns Fosberg's 1-hr Fuel Moisture correction
 * @param {number} month Month number (Jan=1, Dec = 12)
 * @param {number} shading Shading of surface fuels (shaded fraction)
 * @param {number} aspect Aspect (degrees from north)
 * @param {number} slope Slope steepness (ratio of rise / reach)
 * @param {number} hour Hour of the day (midnight=0, 6am=6, noon=12, 6pm = 18)
 * @param {number} elevDiff Elevation diff from db & rh obs to site (+- ft)
 * @returns {number} 1-h fuel moisture correction (ratio)
 */
export function fosbergCorrection (month, shading, aspect, slope, hour, elevDiff) {
  // First determine the appropriate seasonal-shading table to apply
  const monthCat = Month[month] // Crosswalk for seasonal correction tables
  // Fine fuel may  be shaded by canopy, cloud cover, or nighttime
  const shadeCat = (shading < 0.5 && hour >= 8 && hour < 20) ? 0 : 1
  const table = Correction[monthCat][shadeCat]

  // Crosswalk from compass quadrant to aspect index
  const quadrant = Math.floor(aspect / 45)
  const aspectCat = Aspect[quadrant]

  // 2 slope categories for exposed, but just 1 for shaded conditions
  const slopeCat = (slope <= 0.3) ? 0 : (shadeCat ? 0 : 1)

  // All hours outside 0800-2000 are assigned to idx 0 (0800-0959)
  const hourCat = Math.min(Math.max(Math.floor((hour - 8) / 2), 0), 5)

  const elevCat = (elevDiff < -1000) ? 0 : ((elevDiff > 1000) ? 2 : 1)
  // console.log(`mon:${month}=${monthCat} shade:${shading}=${shadeCat} asp:${aspect}=${aspectCat} slp:${slope}=${slopeCat} hr:${hour}=${hourCat} elev:${elevDiff}=${elevCat}`)
  return 0.01 * table[aspectCat][slopeCat][hourCat][elevCat]
}
