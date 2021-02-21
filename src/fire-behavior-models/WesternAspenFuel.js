/**
 * @file Exported WFSP western aspen dynamic fuel model equations
 * as described by Brown and Simmerman (1986) and implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */
import * as Calc from './Calc.js'

const ppsf = 2000 / 43560

// Array curing levels are [0, 0.3, 0.5, 0.7 0.9, 1]
const Table = {
  aspenShrub: {
    depth: 0.65,
    dead1Load: [0.8, 0.893, 1.056, 1.218, 1.379, 1.4595],
    dead1Savr: [1440.0, 1620.0, 1910.0, 2090.0, 2220.0, 2285.0],
    dead10Load: 0.975,
    liveHerbLoad: [0.335, 0.234, 0.167, 0.1, 0.033, 0.0],
    liveStemLoad: [0.403, 0.403, 0.333, 0.283, 0.277, 0.274],
    liveStemSavr: [2440.0, 2440.0, 2310.0, 2090.0, 1670.0, 1670.0]
  },
  aspenTallForb: {
    depth: 0.3,
    dead1Load: [0.738, 0.93, 1.056, 1.183, 1.309, 1.372],
    dead1Savr: [1480.0, 1890.0, 2050.0, 2160.0, 2240.0, 2280.0],
    dead10Load: 0.475,
    liveHerbLoad: [0.665, 0.465, 0.332, 0.199, 0.067, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  },
  aspenLowForb: {
    depth: 0.18,
    dead1Load: [0.601, 0.645, 0.671, 0.699, 0.73, 0.7455],
    dead1Savr: [1400.0, 1540.0, 1620.0, 1690.0, 1750.0, 1780.0],
    dead10Load: 1.035,
    liveHerbLoad: [0.15, 0.105, 0.075, 0.045, 0.015, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  },
  mixedShrub: {
    depth: 0.5,
    dead1Load: [0.88, 0.906, 1.037, 1.167, 1.3, 1.3665],
    dead1Savr: [1350.0, 1420.0, 1710.0, 1910.0, 2060.0, 2135.0],
    dead10Load: 1.34,
    liveHerbLoad: [0.1, 0.07, 0.05, 0.03, 0.01, 0.0],
    liveStemLoad: [0.455, 0.455, 0.364, 0.29, 0.261, 0.2465],
    liveStemSavr: [2530.0, 2530.0, 2410.0, 2210.0, 1800.0, 1800.0]
  },
  mixedForb: {
    depth: 0.18,
    dead1Load: [0.754, 0.797, 0.825, 0.854, 0.884, 0.899],
    dead1LoadDEPRECATED: [0.754, 0.797, 0.825, 1.167, 0.884, 0.899],
    dead1Savr: [1420.0, 1540.0, 1610.0, 1670.0, 1720.0, 1745.0],
    dead10Load: 1.115,
    liveHerbLoad: [0.15, 0.105, 0.075, 0.045, 0.015, 0.0],
    liveStemLoad: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    liveStemSavr: [2440.0, 2440.0, 2440.0, 2440.0, 2440.0, 2440.0]
  }
}

export const Types = Object.keys(Table)

export function interpolate (curingLevel, valueAtLevel) {
  const Curing = [0.0, 0.3, 0.5, 0.7, 0.9, 1.000000001]
  const cl = Calc.fraction(curingLevel)
  let fraction = 0
  for (let idx = 1; idx <= 4; idx += 1) {
    if (cl <= Curing[idx]) {
      fraction = 1 - (Curing[idx] - cl) / (Curing[idx] - Curing[idx - 1])
      return (
        valueAtLevel[idx - 1] +
        fraction * (valueAtLevel[idx] - valueAtLevel[idx - 1])
      )
    }
  }
  return valueAtLevel[5]
}

export function deadMext () {
  return 0.25
}

export function has (fuelType) {
  return Object.keys(Table).includes(fuelType)
}

export function depth (fuelType) {
  return has(fuelType) ? Table[fuelType].depth : 0.01
}

export function deadFineLoad (fuelType, curingLevel) {
  return has(fuelType)
    ? ppsf * interpolate(curingLevel, Table[fuelType].dead1Load)
    : 0
}

export function deadFineSavr (fuelType, curingLevel) {
  return has(fuelType) ? interpolate(curingLevel, Table[fuelType].dead1Savr) : 1
}

export function deadSmallLoad (fuelType) {
  return has(fuelType) ? ppsf * Table[fuelType].dead10Load : 0
}

export function fuelTypes () {
  return Object.keys(Table)
}

// Live herb
export function liveHerbLoad (fuelType, curingLevel) {
  return has(fuelType)
    ? ppsf * interpolate(curingLevel, Table[fuelType].liveHerbLoad)
    : 0
}

// Live stem
export function liveStemLoad (fuelType, curingLevel) {
  return has(fuelType)
    ? ppsf * interpolate(curingLevel, Table[fuelType].liveStemLoad)
    : 0
}

export function liveStemSavr (fuelType, curingLevel) {
  return has(fuelType)
    ? interpolate(curingLevel, Table[fuelType].liveStemSavr)
    : 1
}
