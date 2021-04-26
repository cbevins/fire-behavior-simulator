/**
 * Calculates the dew point temperature.
 *
 * @param {number} dbf Dry bulb air temperature (oF).
 * @param {number} wbf Wet bulb air temperature (oF).
 * @param {number} elev Elevation above mean sea level (ft).
 * @returns {number} Dew point temperature (oF).
 */
export function dewPoint (dbf, wbf, elev = 0) {
  const dbc = (dbf - 32) * 5 / 9
  const wbc = Math.min(((wbf - 32) * 5 / 9), dbc)
  // const e1 = 6.1121 * Math.exp(17.502 * dbc / (240.97 + dbc))
  const e2 = (wbc < 0)
    ? 6.1115 * Math.exp(22.452 * wbc / (272.55 + wbc))
    : 6.1121 * Math.exp(17.502 * wbc / (240.97 + wbc))
  const p = 1013 * Math.exp(-0.0000375 * elev)
  const d = 0.66 * (1 + 0.00115 * wbc) * (dbc - wbc)
  const e3 = Math.max(0.001, (e2 - d * p / 1000))
  const dpc = -240.97 / (1 - 17.502 / Math.log(e3 / 6.1121))
  const dpf = Math.max(-40, (32 + dpc * 9 / 5))
  return dpf
}

/**
 * Calculates dew point temperature per the REA HVAC site.
 * http://www.reahvac.com/tools/humidity-formulas/
 * @param {number} dbf Dry bulb temperature (oF)
 * @param {number} rh Relative humidity (fraction [0..1])
 * @returns {number} Dew point temperature (oF)
 */
export function reaDewPoint (dbf, rh) {
  const dbc = (dbf - 32) * 5 / 9
  const es = 6.11 * Math.pow(10, ((7.5 * dbc) / (237.3 + dbc)))
  const e = rh * es
  const dpc = (-430.22 + 237.7 * Math.log(e)) / (-Math.log(e) + 19.08)
  const dpf = 32 + dpc * 9 / 5
  return Math.max(-40, dpf)
}

/**
 * Calculates the relative humidity per BehavePlus.
 *
 * @param {number} dbf Dry bulb temperature (oF).
 * @param {number} dpf Dew point temperature (oF).
 * @returns {number} Relative humidity (fraction [0..1]).
 */
export function relativeHumidity (dbf, dpf) {
  return (dpf >= dbf) ? 1 : (Math.exp(-7469 / (dpf + 398) + 7469 / (dbf + 398)))
}

/**
 * Calculates relative humidity per the REA HVAC site.
 * http://www.reahvac.com/tools/humidity-formulas/
 *
 * @param {number} dbf Dry bulb temperature (oF).
 * @param {number} dpf Dew point temperature (oF).
 * @returns {number} Relative humidity (fraction, [0..1])
 */
export function reaRh (dbf, dpf) {
  const dbc = (dbf - 32) * 5 / 9
  const dpc = Math.min(dbc, ((dpf - 32) * 5 / 9))
  const es = 6.11 * Math.pow(10, ((7.5 * dbc) / (237.3 + dbc)))
  const e = 6.11 * Math.pow(10, ((7.5 * dpc) / (237.3 + dpc)))
  const rh = e / es
  return rh
}

/**
 * Calculates the Heat Index per NOAA (https://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml)
 *
 * The Heat Index is the apparent temperature after factoring in humidity under shady, light wind conditions.
 *
 * @param {*} db Air temperature (oF) [80..110]
 * @param {*} rh Relative humidity (%) [40, 100]
 * @returns {number} The heat index (oF). A value above 137 is generally unreliable.
 */
export function heatIndex (db, rh) {
  // The computation of the heat index is a refinement of a result obtained by
  // multiple regression analysis carried out by Lans P. Rothfusz and described in
  // a 1990 National Weather Service (NWS) Technical Attachment (SR 90-23).

  // The Rothfusz regression is not appropriate when conditions of temperature and
  // humidity warrant a heat index value below about 80 degrees F. In those cases,
  // a simpler formula is applied to calculate values consistent with Steadman's results:

  // In practice, the simple formula is computed first and the result averaged with the temperature.
  // If this heat index value is 80 degrees F or higher, the full regression equation
  // along with any adjustment as described below is applied.
  let hi = 0.5 * (db + 61.0 + ((db - 68.0) * 1.2) + (rh * 0.094))
  if ((db + hi) / 2 < 80) {
    return hi
  }

  // The regression equation of Rothfusz is:
  hi = -42.379 +
    2.04901523 * db +
    10.14333127 * rh -
    0.22475541 * db * rh -
    0.00683783 * db * db -
    0.05481717 * rh * rh +
    0.00122874 * db * db * rh +
    0.00085282 * db * rh * rh -
    0.00000199 * db * db * rh * rh

  // hi is the heat index expressed as an apparent temperature in degrees F.
  // If the rh is less than 13% and the temperature is between 80 and 112 degrees F,
  // then the following adjustment is subtracted from the heat index:
  if (rh < 13 && db >= 80 && db <= 112) {
    const less = ((13 - rh) / 4) * Math.sqrt((17 - Math.abs(db - 95)) / 17)
    hi -= less
  }

  // On the other hand, if the rh is greater than 85% and the temperature is between
  // 80 and 87 degrees F, then the following adjustment is added to the heat index:
  if (rh > 85 && db >= 80 && db <= 97) {
    const more = ((rh - 85) / 10) * ((87 - db) / 5)
    hi += more
  }
  return hi
  // The Rothfusz regression is not valid for extreme temperature and relative
  // humidity conditions beyond the range of data considered by Steadman.
}

/**
 * Calculates the summer simmer index (used for overnight low temperatures) using the
 * algorithm from https://ncalculators.com/meteorology/summer-simmer-index-calculator.htm
 *
 * @param {number} at Air temperature (oF).
 * @param {number} rh Relative humidity(%).
 * @returns {number} Summer simmer index (dl).
 */
export function summerSimmerIndex (at, rh) {
  return 1.98 * (at - (0.55 - 0.0055 * rh) * (at - 58)) - 56.83
}

/**
 * Calculates the wind chill temperature.
 *
 * This uses the most recently (Nov 1, 2001) adopted formula
 * used by the US NOAA and Canadian MSC and is now part of AWIPS.
 * A new version in 2002 may add solar radiation effects.
 *
 * @param {number} at Air temperature (oF) [-45..40]
 * @param {number} ws Wind speed at 10m (mi/h) [0..60].
 * @returns {number} Wind chill temperature (oF) [-98 - +36].
 */
export function windChill (at, ws) {
  const ws5 = (ws > 0) ? Math.pow(ws, 0.16) : 0 // wind speed at 5 ft from 33 ft
  const wcf = 35.74 + 0.6215 * at - 35.75 * ws5 + 0.4275 * at * ws5
  return wcf
}
