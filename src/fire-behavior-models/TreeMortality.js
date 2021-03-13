/* eslint-disable brace-style */
/**
 * @file Tree mortality equations as implemented by BehavePlus V6 and FOFEM v6.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */

import * as Mortality from './TreeMortalityData.js'
import * as Calc from './Calc.js'

// ------------------------------------------------------------------------------
/*! \brief Calculates the aspen mortality rate.
 *
 *  \param severity Fire severity level: 0 = low severity, 1= moderate+ severity
 *  \param flameLength Flame length of the fire at the tree (ft).
 *  \param dbh          Aspen diameter at breast height (in).
 *
 *  \return Aspen mortality rate (fraction).
 */
export function aspenMortality (severity, flameLength, dbh) {
  const ch = flameLength / 1.8
  return severity < 1
    ? Calc.fraction(1 / (1 + Math.exp(-4.407 + 0.638 * dbh - 2.134 * ch)))
    : Calc.fraction(1 / (1 + Math.exp(-2.157 + 0.218 * dbh - 3.6 * ch)))
}

export function barkThickness (fofem6Code, dbh) {
  ensureFofem6Code(fofem6Code)
  const equationIdx = Mortality.data[fofem6Code].barkEq
  ensureEquationIdx(fofem6Code, equationIdx)
  // In FOFEM 6, longleaf pine has its own bark thickness formula and uses dbh in cm
  if (equationIdx === 40) {
    const dbhCm = 2.54 * dbh // dbh in cm
    const barkCm = 0.435 + 0.031 * dbhCm // bark thickness in cm
    return barkCm / 2.54 // bark thickness in inches
  }
  return Mortality.fofemSingleBarkThicknessFactor[equationIdx] * dbh
}

/**
 * Calculates fraction of crown length scorched.
 * @param {real} treeHt Tree height (ft)
 * @param {real} baseHt Tree crown base height (ft)
 * @param {real} scorchHt Scorch height (ft)
 * @return {real} Fraction of crown length that was scorched (ft/ft)
 */
export function crownLengthScorched (treeHt, baseHt, scorchHt) {
  // Tree crown length (ft) and base height (ft)
  const crownLength = treeHt - baseHt
  // Tree crown length scorched (ft)
  const scorchLength = Calc.positive(Math.min(scorchHt, treeHt) - baseHt)
  // Fraction of the crown length scorched (ft/ft)
  return Calc.divide(scorchLength, crownLength)
}

/**
 * Calculates fraction of crown volume scorched.
 * @param {real} treeHt Tree height (ft)
 * @param {real} baseHt Tree crown base height (ft)
 * @param {real} scorchHt Scorch height (ft)
 * @return {real} Fraction of crown volume that was scorched (ft3/ft3)
 */
export function crownVolumeScorched (treeHt, baseHt, scorchHt) {
  // Tree crown length (ft) and base height (ft)
  const crownLength = treeHt - baseHt
  // Tree crown length scorched (ft)
  const scorchLength = Calc.positive(Math.min(scorchHt, treeHt) - baseHt)
  // Fraction of the crown volume scorched (ft3/ft3)
  return Calc.divide(
    scorchLength * (2 * crownLength - scorchLength),
    crownLength * crownLength
  )
}

export function ensureEquationIdx (fofem6Code, equationIdx) {
  if (
    equationIdx < 0 ||
    equationIdx >= Mortality.fofemSingleBarkThicknessFactor.length
  ) {
    throw new Error(
      `Tree Mortality Fofem6 species code '${fofem6Code}' bark thickness index '${equationIdx}' is invalid`
    )
  }
}

export function ensureFofem6Code (fofem6Code) {
  if (!hasFofem6Code(fofem6Code)) {
    throw new Error(`Tree Mortality Fofem6 species code '${fofem6Code}' is invalid`)
  }
}

export function commonNames () {
  return fofem6Codes().map(key => Mortality.data[key].common)
}

export function fofem5Codes () {
  return fofem6Codes().map(key => Mortality.data[key].fofem5)
}

export function fofem6Codes () {
  return Object.keys(Mortality.data)
}

export function scientificNames () {
  return fofem6Codes().map(key => Mortality.data[key].scientific)
}

export function hasFofem6Code (fofem6Code) {
  return Object.prototype.hasOwnProperty.call(Mortality.data, 'fofem6Code')
  // return Mortality.data.hasOwnProperty(fofem6Code)
}

/**
 *  Calculates probability of tree mortality using the FOFEM 6.0
 *  equations for trees with dbh >= 1.
 *
 *  This is only a partial implementation of the FOFEM mortality algorithm.
 *  Specifically, it only implements those cases where the tree dbh >= 1".
 *  It also excludes the FOFEM special case of \e Populus \e tremuloides,
 *  which requires additional inputs (namely, flame height and fire severity).
 *
 * @param {string} fofem6Code FOFEM 6 tree species code
 * @param {number} dbh Tree diameter at breast height (in)
 * @param {number} treeHt Tree total height (ft)
 * @param {number} baseHt Tree crown base height (ft)
 * @param {number} scorchHt Scorch height (ft)
 */
export function mortalityRate (fofem6Code, dbh, treeHt, baseHt, scorchHt) {
  const clsFraction = crownLengthScorched(treeHt, baseHt, scorchHt)
  const cvsFraction = crownVolumeScorched(treeHt, baseHt, scorchHt)
  const clsPercent = 100 * clsFraction
  const cvsPercent = 100 * cvsFraction
  const equationId = Mortality.data[fofem6Code].mortEq
  let mr = 0

  // Pat requested that if scorch ht is zero, then mortality is zero
  if (scorchHt <= 0) {
    return mr
  }

  // Equation 5 is specifically for Pinus palustris (longleaf pine)
  // Note that bark thickness is in cm
  if (equationId === 5) {
    // This equation uses crown volume scorched as a scale of 1-10
    const cvsScale = cvsPercent / 10
    const barkCm = 2.54 * barkThickness(fofem6Code, dbh)
    mr =
      0.169 +
      5.136 * barkCm +
      14.492 * barkCm * barkCm -
      0.348 * cvsScale * cvsScale
    mr = 1 / (1 + Math.exp(mr))
  }
  // Equation 10 is specifically for Abies concolor (white fir)
  else if (equationId === 10) {
    mr =
      -3.5083 +
      0.0956 * clsPercent -
      0.00184 * clsPercent * clsPercent +
      0.000017 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 11 is specifically for Abies lasiocarpa (subalpine fir)
  // and Abies grandis (grad fir)
  else if (equationId === 11) {
    mr =
      -1.695 +
      0.2071 * cvsPercent -
      0.0047 * cvsPercent * cvsPercent +
      0.000035 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 12 is specifically for Libocedrus decurrens (incense cedar)
  else if (equationId === 12) {
    mr = -4.2466 + 0.000007172 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 14 is specifically for Larix occidentalis (western larch)
  // Note that this is from Hood, so dbh is in cm
  else if (equationId === 14) {
    mr = -1.6594 + 0.0327 * cvsPercent - 0.0489 * (2.54 * dbh)
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 15 is specifically for Picea engelmannii (Englemann spruce)
  else if (equationId === 15) {
    mr = 0.0845 + 0.0445 * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 16 is specifically for Abies magnifica (red fir)
  else if (equationId === 16) {
    mr = -2.3085 + 0.000004059 * clsPercent * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 17 is specifically for Pinus albicaulis (whitebark pine)
  // and Pinus contorta (lodgepole pine)
  // Note that this is from Hood, so dbh is in cm
  else if (equationId === 17) {
    mr =
      -0.3268 +
      0.1387 * cvsPercent -
      0.0033 * cvsPercent * cvsPercent +
      0.000025 * cvsPercent * cvsPercent * cvsPercent -
      0.0266 * (2.54 * dbh)
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 18 is specifically for Pinus lambertiana (sugar pine)
  else if (equationId === 18) {
    mr = -2.0588 + 0.000814 * clsPercent * clsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 19 is specifically for Pinus ponderosa (ponderosa pine)
  // and Pinus jeffreyi (Jeffry pine)
  else if (equationId === 19) {
    mr = -2.7103 + 0.000004093 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 20 is specifically for Pseudotsuga menziesii (Douglas-fir)
  else if (equationId === 20) {
    mr =
      -2.0346 +
      0.0906 * cvsPercent -
      0.0022 * cvsPercent * cvsPercent +
      0.000019 * cvsPercent * cvsPercent * cvsPercent
    mr = 1 / (1 + Math.exp(-mr))
  }
  // Equation 1 is the default mortality equation for all species with dbh > 1"
  // Equation 3 is for spruce species
  // its the same as Equation 1 but with a minimum value of 0.8
  else { // if (equationId === 1 || equationId === 3) {
    const bark = barkThickness(fofem6Code, dbh)
    mr =
      -1.941 + 6.316 * (1 - Math.exp(-bark)) - 5.35 * cvsFraction * cvsFraction
    mr = 1 / (1 + Math.exp(mr))
    mr = equationId === 3 ? Math.max(0.8, mr) : mr
  }
  return Calc.fraction(mr)
}
