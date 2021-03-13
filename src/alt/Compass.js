export function constrain (degrees) {
  while (degrees >= 360) degrees -= 360
  while (degrees < 0) degrees += 360
  return degrees
}

export function diff (x, y) {
  return constrain(x - y)
}

export function opposite (degrees) {
  return constrain(degrees - 180)
}

export function sum (x, y) {
  return constrain(x + y)
}

export function windHeadingFromUpslope (upslopeFromNorth, windSourceFromNorth) {
  const windHeadingFromNorth = opposite(windSourceFromNorth)
  return diff(windHeadingFromNorth, upslopeFromNorth)
}

export function windSourceFromNorth (upslopeFromNorth, windHeadingFromUpslope) {
  const windHeadingFromNorth = sum(upslopeFromNorth, windHeadingFromUpslope)
  return opposite(windHeadingFromNorth)
}
