import * as Calc from './Calc.js'

export function at10mFrom20ft (at20ft) {
  return 1.13 * at20ft
}

export function at10mFromMidflame (atMidflame, midflameTo20ftRatio) {
  const at20ft = at20ftFromMidflame(atMidflame, midflameTo20ftRatio)
  return at10mFrom20ft(at20ft)
}

export function at20ftFrom10m (at10m) {
  return at10m / 1.13
}

export function at20ftFromMidflame (atMidflame, midflameTo20ftRatio) {
  return Calc.divide(atMidflame, midflameTo20ftRatio)
}

export function atMidflameFrom10m (at10m, midflameTo20ftRatio) {
  const at20ft = at20ftFrom10m(at10m)
  return atMidflameFrom20ft(at20ft, midflameTo20ftRatio)
}

export function atMidflameFrom20ft (at20ft, midflameTo20ftRatio) {
  return at20ft * midflameTo20ftRatio
}

export function midflameTo20ftRatio (isSheltered, shelteredRatio, unshelteredRatio) {
  return isSheltered ? shelteredRatio : unshelteredRatio
}

export function shelteredMidflameTo20ftRatio (canopyTotalHeight, canopyFillFraction) {
  return (canopyTotalHeight > 0 && canopyFillFraction > 0)
    ? Calc.fraction(0.555 / (Math.sqrt(canopyFillFraction * canopyTotalHeight) *
      Math.log((20 + 0.36 * canopyTotalHeight) / (0.13 * canopyTotalHeight))))
    : 1
}

export function unshelteredMidflameTo20ftRatio (fuelDepth) {
  const depth = Math.min(6, Math.max(fuelDepth, 0.1))
  return 1.83 / Math.log((20 + 0.36 * depth) / (0.13 * depth))
}
