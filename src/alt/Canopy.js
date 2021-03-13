import * as Calc from './Calc.js'

export function crownFillFraction (canopyCoverFraction, canopyBaseHeight, canopyTotalHeight) {
    return Calc.fraction(crownRatio(canopyBaseHeight, canopyTotalHeight))
      * Calc.fraction(canopyCoverFraction) / 3
}

export function crownLength (crownBaseHeight, crownTotalHeight) {
  return Calc.positive(crownTotalHeight - crownBaseHeight)
}

export function crownRatio (crownBaseHeight, crownTotalHeight) {
  return Calc.fraction(Calc.divide(crownLength(crownBaseHeight, crownTotalHeight), crownTotalHeight))
}

export function sheltersFuelFromWind (canopyCoverFraction, canopyTotalHeight, canopyFillFraction) {
  return canopyCoverFraction >= 0.01 && canopyFillFraction >= 0.05 && canopyTotalHeight >= 6
}
