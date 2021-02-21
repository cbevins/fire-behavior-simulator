/**
 * @file Exported WFSP compass functions as implemented by BehavePlus v6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */

/**
 * Constrain compass degrees to the azimuth range [0 <= degrees < 360].
 *
 * @param float degrees The compass azimuth (degrees).
 *
 * @return float The compass azimuth constrained to the range [0 <= azimuth < 360] degrees.
 */
export function constrain (degrees) {
  while (degrees >= 360) {
    degrees -= 360
  }
  while (degrees < 0) {
    degrees += 360
  }
  return degrees
}

/**
 * Calculate compass degrees (azimuth, clockwise from north) from radians.
 *
 * @param float radians Compass azimuth expressed in radians.
 *
 * @return float Compass azimuth expressed in degrees.
 */
export function degrees (radians) {
  return (radians * 180) / Math.PI
}

export function diff (x, y) {
  return constrain(x - y)
}

/**
 * Get the opposite azimuth from degrees.
 *
 * @param float deg A compass azimuth (degrees).
 *
 * @return float The opposite compass azimuth from dgrees.
 */
export function opposite (degrees) {
  return constrain(degrees - 180)
}

/**
 * Calculate the radians of the compass azimuth (clockwise from north).
 *
 * @param float degrees  Compass azimuth (degrees clockwise from north).
 *
 * @return float The compass azimuth expressed in radians.
 */
export function radians (degrees) {
  return (degrees * Math.PI) / 180
}

/**
 * Calculate the slope steepness in degrees from the slope vertical rise / horizontal reach ratio.
 *
 * @param float ratio Ratio of the slope vertical rise / horizontal reach (fraction).
 *
 * @return float Slope steepness expressed in degrees.
 */
export function slopeDegrees (ratio) {
  const radians = Math.atan(ratio)
  return degrees(radians)
}

/**
 * Calculate slope steepness degrees from map measurements.
 *
 * @param float mapScale Map scale factor (Greater than 1, i.e., 24000)
 * @param float contourInterval Map contour interval (in same units-of-measure as distance)
 * @param float contours Number of contours crossed in the measurement
 * @param float mapDistance Map distance covered in the measurement
 *
 * @return float Slope steepness degrees
 */
export function slopeDegreesMap (
  mapScale,
  contourInterval,
  contours,
  mapDistance
) {
  const ratio = slopeRatioMap(mapScale, contourInterval, contours, mapDistance)
  return slopeDegrees(ratio)
}

/**
 * Calculate the slope vertical rise / horizontal reach ratio from its steepness in degrees.
 *
 * @param float degrees  Slope steepness in degrees.
 *
 * @return float Slope vertical rise / horizontal reach ratio (fraction).
 */
export function slopeRatio (degrees) {
  const rad = radians(constrain(degrees))
  return Math.tan(rad)
}

/**
 * Calculate slope steepness ratio from map measurements.
 *
 * @param float mapScale Map sacle factor (Greater than 1, i.e., 24000)
 * @param float contourInterval Map contour interval (in same units-of-measure as distance)
 * @param float contours Number of contours crossed in the measurement
 * @param float mapDistance Map distance covered in the measurement
 *
 * @return float Slope steepness ratio
 */
export function slopeRatioMap (
  mapScale,
  contourInterval,
  contours,
  mapDistance
) {
  const reach = mapScale * mapDistance
  const rise = contours * contourInterval
  return reach <= 0 ? 0 : rise / reach
}

export function sum (x, y) {
  return constrain(x + y)
}
