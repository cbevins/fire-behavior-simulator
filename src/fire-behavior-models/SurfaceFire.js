/**
 * @file Surface fire functions as described by Rothermel 1972.
 *
 * Library of algorithms implementing the Rothermel (1972) mathematical model
 * of surface fire spread rate and direction of maximum spread from upslope.
 *
 * It also includes a few of the fundamental Byram and Thomas equations for
 * fireline intensity, flame length, and scorch height.  All equations
 * relating to fire elliptical growth are in BpxLibFireEllipse.
 *
 * All algorithms in this class are implemented as pure export function methods,
 * returning a single property.
 *
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 **/

export function arithmeticMeanSpreadRate (cover1, ros1, ros2) {
  return cover1 * ros1 + (1 - cover1) * ros2
}

/**
 * Calculate the `effective wind speed` of a combined slope-plus-wind spread rate coefficient.
 *
 * The `effective` wind speed is the theoretical wind speed that yields the same
 * spread rate coefficient as the combined slope-plus-wind spread rate coefficient.
 *
 * @param phiew The sum of the slope and wind coefficients.
 * @param windB Fuel bed wind factor B.
 * @param windI Fuel bed wind factor I.
 * @return The effective wind speed for the slope-plus-wind coefficient (ft+1 min-1).
 */
export function effectiveWindSpeed (phiew, windB, windI) {
  let ews = 0
  if (phiew > 0 && windB > 0 && windI > 0) {
    const a = phiew * windI
    const b = 1.0 / windB
    ews = Math.pow(a, b)
  }
  return ews
}

/**
 * Calculate the effective wind speed (ft+1 min-1) from the length-to-width ratio.
 *
 * This uses Anderson's (1983) equation.
 *
 * @param lwr The fire ellipse length-to-width ratio (ratio).
 * @return The effective wind speed (ft+1 min-1).
 */
export function effectiveWindSpeedFromLwr (lwr) {
  return 88 * (4 * (lwr - 1))
}

/**
 * Calculate the maximum effective wind speed limit
 * as per Rothermel (1972) equation 86 on page 33.
 *
 * @param rxi Fire reaction intensity (btu+1 ft-2 min-1).
 * @return The maximum effective wind speed limit (ft+1 min-1).
 */
export function effectiveWindSpeedLimit (rxi) {
  return 0.9 * rxi
}

export function expectedValueSpreadRateMOCK (cover1, ros1, ros2) {
  return (
    0.5 *
    (arithmeticMeanSpreadRate(cover1, ros1, ros2) +
      harmonicMeanSpreadRate(cover1, ros1, ros2))
  )
}

/**
 * Calculate the fire heading direction (degrees clockwise from north).
 *
 * @param upslopeFromNorth Upslope direction (degrees clockwise from north).
 * @param headingFromUpslope Fire heading direction (degrees clockwise from the upslope direction).
 * @return The fire heading direction (degrees clockwise from north).
 */
// export function headingFromNorth(upslopeFromNorth, headingFromUpslope) {
//   return compass.constrain(upslopeFromNorth + headingFromUpslope)
// }

/**
 * Calculate the fireline intensity (btu+1 ft-1 s-1) from spread rate,
 * reaction intensity, and residence time.
 *
 * @param ros The fire spread rate (ft+1 min-1).
 * @param rxi The reaction intensity (btu+1 ft-2 min-1).
 * @param taur The flame residence time (min+1)
 * @return The fireline intensity (btu+1 ft-1 s-1).
 */
export function firelineIntensity (ros, rxi, taur) {
  return (ros * rxi * taur) / 60
}

/**
 * Calculate the fireline intensity (btu+1 ft-1 s-1) from flame length.
 *
 * @param flame The flame length (ft+1).
 * @return The fireline intensity (btu+1 ft-1 s-1).
 */
export function firelineIntensityFromFlameLength (flame) {
  return flame <= 0 ? 0 : Math.pow(flame / 0.45, 1 / 0.46)
}

/**
 * Calculate Byram's (1959) flame length (ft+1) given a fireline intensity.
 *
 * @param fli Fireline intensity (btu+1 ft-1 s-1).
 * @return Byram's (1959) flame length (ft+1).
 */
export function flameLength (fli) {
  return fli <= 0 ? 0 : 0.45 * Math.pow(fli, 0.46)
}

export function harmonicMeanSpreadRate (cover1, ros1, ros2) {
  if (cover1 === 0 || ros1 === 0) {
    return ros2
  } else if (ros2 === 0) {
    return ros1
  }
  return 1 / (cover1 / ros1 + (1 - cover1) / ros2)
}

/**
 * Calculate the fire ellipse length-to-width ratio from the
 * effective wind speed (ft+1 min-1).
 *
 * This uses Anderson's (1983) equation.
 *
 * @param effectiveWindSpeed The effective wind speed (ft+1 min-1).
 * @return The fire ellipse length-to-width ratio (ratio).
 */
export function lengthToWidthRatio (effectiveWindSpeed) {
  // Wind speed MUST be in miles per hour
  return 1 + 0.25 * (effectiveWindSpeed / 88)
}

/**
 * Calculate the maximum fire spread rate under slope & wind conditions.
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param phiEw Rothermel's (1972) `phiEw` wind-slope coefficient (ratio).
 * @return The maximum fire spread rate (ft+1 min-1).
 */
export function maximumSpreadRate (ros0, phiEw) {
  return ros0 * (1 + phiEw)
}

/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the individual slope (phiS) and wind (phiW) coefficients.
 *
 * @param phiW Rothermel (1972) wind coefficient `phiW` (ratio)
 * @param phiS Rothermel (1972) slope coefficient `phiS` (ratio)
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */
export function phiEffectiveWind (phiW, phiS) {
  return phiW + phiS
}

/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the no-wind, no-slope spread rate and an actual spread rate.
 *
 * There are 3 ways to calculate the wind-slope coefficient `phiEw`:
 * - from `phiS` and `phiW`: see phiEw(phiS,phiW)
 * - from `ros0` and `rosHead`: see phiEwInferred(ros0,rosHead)
 * - from `ews`, `windB`, and `windK`: see phiEwFromEws(ews, windB, windK)
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param rosHead The actual spread rate (ft+1 min-1) at the fire head
 *    (possibly under cross-slope wind conditions).
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */
export function phiEffectiveWindInferred (ros0, rosHead) {
  return ros0 <= 0 ? 0 : rosHead / ros0 - 1
}

/**
 * Calculate the wind-slope coefficient (phiEw = phiW + phiS)
 * from the effective wind speed.
 *
 * There are 3 ways to calculate the wind-slope coefficient `phiEw`:
 * - from `phiS` and `phiW`: see phiEw(phiS,phiW)
 * - from `ros0` and `rosHead`: see phiEwInferred(ros0,rosHead)
 * - from `ews`, `windB`, and `windK`: see phiEwFromEws(ews, windB, windK)
 *
 * @param ews The theoretical wind speed that produces
 *  the same spread rate coefficient as the current slope-wind combination.
 * @param windB
 * @param windK
 * @return Rothermel's (1972) wind-slope coefficient `phiEw` (ratio).
 */
export function phiEwFromEws (ews, windB, windK) {
  return ews <= 0 ? 0 : windK * ews ** windB
}

/** Calculate the fire spread rate slope coefficient (ratio).
 *
 * This returns Rothermel's (1972) `phiS' as per equation 51 (p 24, 26).
 *
 * @param slopeRatio Slope steepness ratio (vertical rise / horizontal reach).
 * @param slopeK Fuel Bed slope factor.
 * @return The fire spread rate slope coefficient (ratio).
 */
export function phiSlope (slopeRatio, slopeK) {
  return slopeK * slopeRatio * slopeRatio
}

/** Calculate the fire spread rate wind coefficient (ratio).
 *
 * This returns Rothermel's (1972) `phiW' as per equation 47 (p 23, 26).
 *
 * @param midflameWind Wind speed at midflame height (ft+1 min-1).
 * @param windB Fuel Bed wind factor `B`.
 * @param windK Fuel Bed wind factor `K`.
 * @return The fire spread rate wind coefficient (ratio).
 */
export function phiWind (midflameWind, windB, windK) {
  return midflameWind <= 0 ? 0 : windK * Math.pow(midflameWind, windB)
}

/**
 * Calculate the maximum fire spread rate under cross-slope wind conditions.
 *
 * If the wind is blowing up-slope (or, if there is no slope, or if there is no wind),
 * then spreadRateMaximumUpSlopeWind() == spreadRateMaximumCrossSlopeWind().
 *
 * @param ros0 No-wind, no-slope spread rate (ft+1 min-1).
 * @param spreadDirVectorRate Additional spread reate (ft+1 min-1)
 *    along the cross-slope vector of maximum spread.
 * @return The maximum fire spread rate (ft+1 min-1).
 */
export function spreadRateWithCrossSlopeWind (ros0, spreadDirVectorRate) {
  return ros0 + spreadDirVectorRate
}

/**
 * Calculate the maximum spread rate after applying the effective wind speed limit.
 *
 * If the effective wind speed does not exceed the limit,
 * then spreadRateMaximumCrossSlopeWind() == spreadRateMaximumEffectiveWindSpeedLimitApplied().
 *
 * @param ros0 The no-wind, no-slope spread rate (ft+1 min-1).
 * @param phiEwLimited Rothermel's (1972) `phiEw` wind-slope coefficient (ratio)
 * AFTER applying the effective wind speed limit.
 */
// export function rosMaxEwslApplied(ros0, phiEwLimited) {
//   return ros0 * (1 + phiEwLimited)
// }

/**
 * Calculate the maximum spread rate after applying the effective wind speed upper limit.
 *
 * If the spread rate exceeds the effective wind speed
 * AND the effective wind speed exceeds 1 mph, then the
 * spread rate is reduced back to the effective wind speed.
 *
 * @param rosMax The fire maximum spread rate (ft+1 min-1)
 * @param ews The effective wind speed (ft+1 min-1).
 * @return The maximum spread rate (ft+1 min-1) after applying any effective wind speed limit.
 */
export function spreadRateWithRosLimitApplied (rosMax, ews) {
  return rosMax > ews && ews > 88 ? ews : rosMax
}

/**
 * Calculate the scorch height (ft+1) estimated from Byram's fireline
 * intensity, wind speed, and air temperature.
 *
 * @param fli Byram's fireline intensity (btu+1 ft-1 s-1).
 * @param windSpeed Wind speed (ft+1 min-1).
 * @param airTemp (oF).
 * @return The scorch height (ft+1).
 */
export function scorchHeight (fli, windSpeed, airTemp) {
  const mph = windSpeed / 88
  return fli <= 0
    ? 0
    : ((63 / (140 - airTemp)) * Math.pow(fli, 1.166667)) /
        Math.sqrt(fli + mph * mph * mph)
}

/**
 * Calculate the scorch height (ft+1) estimated from flame length,
 * wind speed, and air temperature.
 *
 * @param flame Flame length (ft+1).
 * @param windSpeed Wind speed (ft+1 min-1).
 * @param airTemp (oF).
 * @return The scorch height (ft+1)
 */
export function scorchHtFromFlame (flame, windSpeed, airTemp) {
  const fli = firelineIntensityFromFlameLength(flame)
  return scorchHeight(fli, windSpeed, airTemp)
}

/**
 * Calculate the direction of maximum spread as degrees clockwise from up-slope.
 *
 * @param xComp Vector x-component returned by spreadDirectionXComponent()
 * @param yComp Vector y-component as returned by spreadDirectionYComponent().
 * @param rosv Spread rate in the vector of maximum spread (ft+1 min-1).
 * @return The direction of maximum fire spread (degrees from upslope)
 */
export function spreadDirectionFromUpslope (xComp, yComp, rosv) {
  const pi = Math.PI
  const al = rosv <= 0 ? 0 : Math.asin(Math.abs(yComp) / rosv)
  const radians =
    xComp >= 0
      ? yComp >= 0
        ? al
        : pi + pi - al
      : yComp >= 0
        ? pi - al
        : pi + al
  const degrees = (radians * 180) / pi
  return degrees
}

/**
 * Calculate the slope contribution to the spread rate.
 *
 * @param ros0 No-wind, no-wlope fire spread rate (ft+1 min-1)
 * @param phiS Slope coefficient (factor)
 * @return The slope contribution to the fire spread rate (ft+1 min-1)
 */
export function maximumDirectionSlopeSpreadRate (ros0, phiS) {
  return ros0 * phiS
}

/**
 * Calculate the wind contribution to the spread rate.
 *
 * @param ros0 No-wind, no-wlope fire spread rate (ft+1 min-1)
 * @param phiW Wind coefficient (factor)
 * @return The wind contribution to the fire spread rate (ft+1 min-1)
 */
export function maximumDirectionWindSpreadRate (ros0, phiW) {
  return ros0 * phiW
}

/**
 * Calculate the additional spread rate (ft+1 min-1) in the direction of maximum
 * spread under cross-slope wind condtions.
 *
 * @param xComp Vector x-component returned by spreadDirXComp()
 * @param yComp Vector y-component as returned by spreadDirYComp().
 * @return Cross wind - cross slope spread rate (ft+1 min-1)
 */
export function maximumDirectionSpreadRate (xComp, yComp) {
  return Math.sqrt(xComp * xComp + yComp * yComp)
}

/**
 * Calculate the x-component of the spread rate vector under cross-slope wind conditions.
 *
 * @param windRate
 * @param slopeRate
 * @param windHdgAzUp Wind heading in degrees clockwise from the up-slope direction.
 */
export function maximumDirectionXComponent (windRate, slopeRate, windHdgAzUp) {
  const radians = (windHdgAzUp * Math.PI) / 180
  return slopeRate + windRate * Math.cos(radians)
}

/**
 * Calculate the y-component of the spread rate vector under cross-slope wind conditions.
 *
 * @param windRate
 * @param windHdgAzUp Wind heading in degrees clockwise from the up-slope direction.
 */
export function maximumDirectionYComponent (windRate, windHdgAzUp) {
  const radians = (windHdgAzUp * Math.PI) / 180
  return windRate * Math.sin(radians)
}

/**
 * Calculates the midflame wind speed required to attain a target fire spread rate.
 *
 * @param rosTarget Target fire spread rate (ft+1 min-1)
 * @param ros0 The fuel bed no-wind, no-slope fire spread rate (ft+1 min-1)
 * @param windB The fuel bed wind factor B
 * @param windK The fuel bed wind factor K
 * @param phiS The fuel bed slope coefficient (phi slope)
 * @return The midflame wind speed (ft+1 min-1) required to attain the target fire spread rate.
 */
// export function windSpeedAtRosTarget(rosTarget, ros0, windB, windK, phiS) {
//   if (ros0 <= 0 || windK <= 0) {
//     return 0
//   }
//   const numerator = (rosTarget / ros0) - 1 - phiS
//   const term = numerator / windK
//   return Math.pow(term, (1/windB))
// }

/**
 * Calculates the midflame wind speed required to attain a target fire spread rate.
 *
 * @param rosTarget Target fire spread rate (ft+1 min-1)
 * @param ros0 The fuel bed no-wind, no-slope fire spread rate (ft+1 min-1)
 * @param beta The fuel bed packing ratio
 * @param bedSavr The fuel bed characteristic surface area-to-volume ratio (ft-1)
 * @param slopeRatio The fuel bed slope (ratio)
 * @return The midflame wind speed (ft+1 min-1) required to attain the target fire spread rate.
 */
// export function windSpeedAtRosTarget2(rosTarget, ros0, beta, bedSavr, slopeRatio) {
//   const windB = BpxLibFuelBed.windB(bedSavr)
//   const windC = BpxLibFuelBed.windC(bedSavr)
//   const windE = BpxLibFuelBed.windE(bedSavr)
//   const betaOpt = BpxLibFuelBed.beto(bedSavr)
//   const betaRatio = beta / betaOpt
//   const windK = BpxLibFuelBed.windK(betaRatio, windE, windC)
//   const slopeK = BpxLibFuelBed.slopeK(beta)
//   const phiS = BpxLibSurfaceFire.phiS(slopeRatio, slopeK)
//   return BpxLibSurfaceFire.windSpeedAtRosTarget(rosTarget, ros0, windB, windK, phiS)
// }
