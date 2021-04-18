/*
The new FuelMoisture.js model offers some opportunities to:
- add a 'fosberg' option to estimate dead fuel moistures
- requires additional site inputs
- adds new Variants
*/
import { Fraction, Integer, Option, Quantity } from '../variant/index.js'

export const fosbergFuelMoistureGenome = [
  ['site.moisture.dead.fosberg.reference', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergReference',
      'site.temperature.air',
      'site.temperature.relativeHumidity']
  ]]],
  ['site.moisture.dead.fosberg.correction', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergCorrection',
      'site.date.month',
      'site.temperature.shading',
      'site.slope.direction.aspect',
      'site.slope.steepness.ratio',
      'site.time.hour',
      'site.elevation.diff'
    ]
  ]]],
  ['site.moisture.dead.fosberg.tl1', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead1h',
      'site.moisture.dead.tl1h.fosberg.reference',
      'site.moisture.dead.tl1h.fosberg.correction']
  ]]],
  ['site.moisture.dead.fosberg.tl10h', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead10h', 'site.moisture.dead.fosberg.tl1']
  ]]],
  ['site.moisture.dead.fosberg.tl100h', [['FuelMoistureContent'], [
    ['finally', 'FuelMoisture.fosbergDead100h', 'site.moisture.dead.fosberg.tl1']
  ]]]
]

// DagNodes that require updating
export const updatedFuelMoistureGenome = [
  ['site.moisture.dead.tl1h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category',
      'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl1h'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl10h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category',
      'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl10h'],
    ['finally', 'Dag.input']
  ]]],
  ['site.moisture.dead.tl100h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category',
      'Dag.bind', 'site.moisture.dead.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'fosberg',
      'Dag.bind', 'site.moisture.dead.fosberg.tl100h'],
    ['finally', 'Dag.input']
  ]]]
]

// New stuff
export const newSiteGenome = [
  ['site.date.dayOfMonth', [['DateDayOfMonth'], [['finally', 'Dag.input']]]],
  ['site.date.dayOfYear', [['DateDayOfYear'], [['finally', 'Dag.input']]]],
  ['site.date.julian', [['DateJulian'], [['finally', 'Dag.input']]]],
  ['site.date.month', [['DateMonth'], [['finally', 'Dag.input']]]],
  ['site.date.year', [['DateYear'], [['finally', 'Dag.input']]]],
  ['site.elevation.diff', [['ElevationDiff'], [['finally', 'Dag.input']]]],
  ['site.location.elevation', [['Elevation'], [['finally', 'Dag.input']]]],
  ['site.location.gmtDiff', [['GmtDiff'], [['finally', 'Dag.input']]]],
  ['site.location.latitude.degrees', [['Latitude'], [['finally', 'Dag.input']]]],
  ['site.location.latitude.ns', [['NorthSouthOption'], [['finally', 'Dag.input']]]],
  ['site.location.longitude.degrees', [['Longitude'], [['finally', 'Dag.input']]]],
  ['site.location.longitude.ew', [['EastWestOption'], [['finally', 'Dag.input']]]],
  ['site.temperature.dewPoint', [['Temperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.dryBulb', [['Temperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.wetBulb', [['Temperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.wetBulbDepression', [['Temperature'], [['finally', 'Dag.input']]]],
  ['site.temperature.relativeHumidity', [['RelativeHumidity'], [['finally', 'Dag.input']]]],
  ['site.temperature.shading', [['ShadingFraction'], [['finally', 'Dag.input']]]],
  ['site.time.hour', [['TimeHour'], [['finally', 'Dag.input']]]],
  ['site.time.minute', [['TimeMinute'], [['finally', 'Dag.input']]]],
  ['site.time.second', [['TimeSecond'], [['finally', 'Dag.input']]]],
  ['site.time.sunrise', [['TimeStamp'], [['finally', 'Dag.input']]]],
  ['site.time.sunset', [['TimeStamp'], [['finally', 'Dag.input']]]]
]

export class EastWestOption extends Option {
  constructor () {
    super('EastWestOption', 'Longitude East or West', ['east', 'west'])
  }
}

export class NorthSouthOption extends Option {
  constructor () {
    super('NorthSouthOption', 'Latitude North or South', ['north', 'south'])
  }
}

export class DateDayOfMonth extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('DateDayOfMonth', 1, 1, 31, 1) }
}

export class DateDayOfYear extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('DateDayOfYear', 1, 1, 366, 1) }
}

export class DateJulian extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('DateJulian', 21100, 0, 40000, 1) }
}

export class DateMonth extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('DateMonth', 1, 1, 12, 1) }
}

export class DateYear extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('DateYear', 2020, 1000, 3000, 1) }
}

export class Elevation extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('Elevation', ['ft', 'm'], 30000, 0, -1000, 100) }
}

export class ElevationDiff extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('ElevationDiff', ['ft', 'm'], 5000, 0, -5000, 100) }
}

export class Latitude extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('Latitude', ['deg'], 90, 0, 0, 5) }
}

export class Longitude extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('Longitude', ['deg'], 180, 0, 0, 5) }
}

export class RelativeHumidity extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor () { super('RelativeHumidity') }
}

export class ShadingFraction extends Fraction {
  constructor () { super('ShadingFraction') }
}

export class TimeHour extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('TimeHour', 0, 0, 24, 1) }
}

export class TimeMinute extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('TimeMinute', 0, 0, 60, 1) }
}

export class TimeSecond extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('TimeSecond', 0, 0, 60, 1) }
}

export class TimeStamp extends Integer {
  // (key, defaultValue = 0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue = 1)
  constructor () { super('TimeStamp') }
}
