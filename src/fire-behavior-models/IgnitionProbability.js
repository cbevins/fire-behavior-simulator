/**
 * @file Surface fire and lightning strike ignition probability equations
 * as described by Latham () as described by Albini (1998) and
 * as implemented by BehavePlus v6.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import * as Calc from './Calc.js'

/**
 * Calculates the probability of a surface fire firebrand starting a fire.
 *
 * @param {number} fuelTemperature  Dead surface fuel temperature (oF).
 * @param {number} fuelMoisture     Dead 1-hour time-lag surface fuel moisture content (lb/lb).
 * @return Probability of a firebrand starting a fire [0..1].
 */
export function firebrand (fuelTemperature, fuelMoisture) {
  const c = ((fuelTemperature - 32) * 5) / 9
  const qign = Math.min(
    144.51 -
      0.266 * c -
      0.00058 * c * c -
      c * fuelMoisture +
      18.54 * (1 - Math.exp(-15.1 * fuelMoisture)) +
      640 * fuelMoisture,
    400
  )

  const x = 0.1 * (400 - qign)
  return Calc.fraction((0.000048 * Math.pow(x, 4.3)) / 50)
}

/**
 * Calculates the fuel temperature using the BEHAVE FIRE2 subroutine CAIGN() algorithm.
 *
 *  @param airTemp        Air temperature (oF).
 *  @param shadeFraction  Fraction of sun shaded from the fuel.
 *  @return Fuel temperature (oF).
 */
export function fuelTemperature (airTemp, shadeFraction) {
  const xincr = 25 - 20 * shadeFraction
  return airTemp + xincr
}

// Probability of a continuing current by charge type (Latham)
const ccNeg = 0.2
const ccPos = 0.9

export const lightningData = {
  ponderosaPineLitter: {
    label: 'Ponderosa pine litter',
    positive: function (arg) {
      return ccPos * (0.92 * Math.exp(-0.087 * arg.moisture))
    },
    negative: function (arg) {
      return ccNeg * (1.04 * Math.exp(-0.054 * arg.moisture))
    }
  },
  punkyWoodRottenChunky: {
    label: 'Punky wood, rotten, chunky',
    positive: function (arg) {
      return ccPos * (0.44 * Math.exp(-0.11 * arg.moisture))
    },
    negative: function (arg) {
      return ccNeg * (0.59 * Math.exp(-0.094 * arg.moisture))
    }
  },
  punkyWoodPowderDeep: {
    label: 'Punky wood powder, deep (4.8 cm)',
    positive: function (arg) {
      return ccPos * (0.86 * Math.exp(-0.06 * arg.moisture))
    },
    negative: function (arg) {
      return ccNeg * (0.9 * Math.exp(-0.056 * arg.moisture))
    }
  },
  punkyWoodPowderShallow: {
    label: 'Punk wood powder, shallow (2.4 cm)',
    positive: function (arg) {
      return ccPos * (0.6 - 0.011 * arg.moisture)
    },
    negative: function (arg) {
      return ccNeg * (0.73 - 0.011 * arg.moisture)
    }
  },
  lodgepolePineDuff: {
    label: 'Lodgepole pine duff',
    positive: function (arg) {
      return ccPos * (1 / (1 + Math.exp(5.13 - 0.68 * arg.depth)))
    },
    negative: function (arg) {
      return ccNeg * (1 / (1 + Math.exp(3.84 - 0.6 * arg.depth)))
    }
  },
  douglasFirDuff: {
    label: 'Douglas-fir duff',
    positive: function (arg) {
      return ccPos * (1 / (1 + Math.exp(6.69 - 1.39 * arg.depth)))
    },
    negative: function (arg) {
      return ccNeg * (1 / (1 + Math.exp(5.48 - 1.28 * arg.depth)))
    }
  },
  highAltitudeMixed: {
    label: 'High altitude mixed (mainly Engelmann spruce)',
    positive: function (arg) {
      return ccPos * (0.62 * Math.exp(-0.05 * arg.moisture))
    },
    negative: function (arg) {
      return ccNeg * (0.8 - 0.014 * arg.moisture)
    }
  },
  peatMoss: {
    label: 'Peat moss (commercial)',
    positive: function (arg) {
      return ccPos * (0.71 * Math.exp(-0.07 * arg.moisture))
    },
    negative: function (arg) {
      return ccNeg * (0.84 * Math.exp(-0.06 * arg.moisture))
    }
  }
}

export const LightningCharges = ['negative', 'positive', 'unknown']
export const LightningFuels = Object.keys(lightningData)

/**
 * Calculates the probability of a lightning strike starting a fire.
 *
 *  @param fuelType Ignition fuel bed type:
 *  @param depth    Ignition fuel (duff & litter) bed depth (inches).
 *  @param duffMoisture Ignition fuel (duff & litter 100-h) moisture content (lb/lb).
 *  @param chargeType Lightning charge, one of 'positive', 'negative', or 'unknown'
 *  @return Probability of the lightning strike starting a fire [0..1].
 *
 *  \note  The following assumptions are made by Latham:
 *  - 20% of negative flashes have continuing current
 *  - 90% of positive flashes have continuing current
 *  - Latham and Schlieter found a relative frequency of
 *    0.723 negative and 0.277 positive strikes
 *  - Unknown strikes are therefore p = 0.1446 neg + 0.2493 pos
 */
export function lightningStrike (fuelType, depth, moisture, chargeType) {
  // Convert duff depth to cm and restrict to maximum of 10 cm.
  // Convert duff moisture to percent and restrict to maximum of 40%.
  const args = {
    depth: Math.min(30.48 * depth, 10),
    moisture: Math.min(100 * moisture, 40)
  }

  // If 'positive' or 'negative'...
  if (chargeType === 'positive' || chargeType === 'negative') {
    return Calc.fraction(lightningData[fuelType][chargeType](args))
  }
  // Otherwise, return a positive/negative frequency-weighted value using
  // Latham and Schlieter's relative frequency of a continuing current by charge type
  const freqNeg = 0.723
  const freqPos = 0.277
  const pos = Calc.fraction(lightningData[fuelType].positive(args))
  const neg = Calc.fraction(lightningData[fuelType].negative(args))
  return Calc.fraction(freqPos * pos + freqNeg * neg)
}
