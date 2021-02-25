/**
 * @file Variants.js defines the fire simulator non-Config and non-Option Variants
 * (i.e., all the Quantity, Bool, etc)
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { ArrayIndex, Bool, Count, Float, Fraction, Obj, Quantity, Ratio, Text } from '../variant/index.js'

/**
 * Declares the specialized BehavePlus numeric (Quantity, Float, Integer) Variants.
 *
 * Note that classes derived from Crucible.Variant.Quantity()
 * require an array of valid units-of-measure as its first argument.
 */

// Part 1 - Base Variants for more specialized BehavePlus Variants
// All these MUST take a 'key' argument

export class NoYes extends Bool {
  // Bool(key, defaultValue=false, falseText='false', trueText='true', prompt='') {
  constructor() {
    super('NoYes', false, 'No', 'Yes', '' )
  }
}

export class DownWindCanopyIsOpen extends Bool {
  // Bool(key, defaultValue=false, falseText='false', trueText='true', prompt='') {
  constructor() {
    super('DownWindCanopyIsOpen', false, 'Closed', 'Open', 'The down-wind canopy is' )
  }
}

export class EffectiveWindSpeedLimitIsExceeded extends Bool {
  // Bool(key, defaultValue=false, falseText='false', trueText='true', prompt='') {
  constructor() {
    super('EffectiveWindSpeedLimitIsExceeded', false, 'Not Exceeded', 'Exceeded',
      'The effective wind speed limit is' )
  }
}

export class FireSpreadRateLimitIsExceeded extends Bool {
  // Bool(key, defaultValue=false, falseText='false', trueText='true', prompt='') {
  constructor() {
    super('FireSpreadRateLimitIsExceeded', false, 'Not Exceeded', 'Exceeded',
      'The fire spread rate limit is' )
  }
}

export class FuelIsSheltered extends Bool {
  // Bool(key, defaultValue=false, falseText='false', trueText='true', prompt='') {
  constructor() {
    super('FuelIsSheltered', false, 'Not sheltered', 'Sheltered', 'Is fuel bed sheltered by the canopy?' )
  }
}

export class Factor extends Float {
  constructor(key='Factor', defaultValue=0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue=1) {
    super(key, defaultValue, minValue, maxValue, stepValue)
  }
}

export class NonNegativeFactor extends Factor {
  constructor(key='NonNegativeFactor', defaultValue=0, minValue = 0, maxValue = Number.MAX_VALUE, stepValue=1) {
    super(key, defaultValue, minValue, maxValue, stepValue)
  }
}

// Part 2 - Specialized BehavePlus Variants - All 'key' properties are FIXED

export class AirTemperature extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('AirTemperature', ['oF', 'oC']) }
}

export class CompassAzimuth extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('CompassAzimuth', ['deg'], 360, 0, 0, 5) }
}

export class CrownFillFraction extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor() { super('CrownFillFraction') }
}

export class CrownFireActiveRatio extends NonNegativeFactor {
  constructor() { super('CrownFireActiveRatio') }
}

export class CrownFireBurnedFraction extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor() { super('CrownFireBurnedFraction')}
}

export class CrownRatioFraction extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor() { super('CrownRatioFraction')}
}

export class CrownTransitionRatio extends NonNegativeFactor {
  constructor() { super('CrownTransitionRatio')}
}

export class Documentation extends Text {
  // Text(key, defaultValue = '', minLength = 0, maxLength = 999999)
  constructor () { super('Documentation', '', 0, 80) }
}

export class FireArea extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireArea', ['ft2', 'ac', 'mi2', 'm2', 'ha', 'km2']) }
}

export class FireDampingCoefficient extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor() { super('FireDampingCoefficient') }
}

export class FireElapsedTime extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireElapsedTime', ['min', 'h', 'd']) }
}

export class FireFirelineIntensity extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireFirelineIntensity', ['btu/ft/s', 'J/m/s', 'W/m']) }
}

export class FireFlameDuration extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireFlameDuration', ['min', 's', 'h']) }
}

export class FireFlameLength extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireFlameLength', ['ft', 'm']) }
}

export class FireHeatPerUnitArea extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireHeatPerUnitArea', ['btu/ft2', 'J/m2']) }
}

export class FireLengthToWidthRatio extends Factor {
  // Factor(key, defaultValue=0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue=1)
  constructor () { super('FireLengthToWidthRatio', 1, 1) }
}

export class FirePower extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FirePower', ['btu/min', 'btu/s', 'J/s', 'J/min', 'W']) }
}

export class FirePowerRatio extends NonNegativeFactor {
  constructor() { super('FirePowerRatio') }
}

export class FirePropagatingFluxRatio extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 )
  constructor() { super('FirePropagatingFluxRatio') }
}

export class FireReactionIntensity extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireReactionIntensity', ['btu/ft2/min', 'J/m2/min']) }
}

export class FireReactionVelocity extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireReactionVelocity', ['min-1', 's-1']) }
}

export class FireResidenceTime extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireResidenceTime', ['min', 's', 'h']) }
}

export class FireScorchHeight extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireScorchHeight', ['ft', 'm']) }
}

export class FireSpotDistance extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireSpotDistance', ['ft', 'm', 'ch', 'mi', 'km']) }
}

export class FireSpreadDistance extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireSpreadDistance', ['ft', 'm', 'ch', 'mi', 'km']) }
}

export class FireSpreadRate extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FireSpreadRate', ['ft/min', 'm/min', 'ch/h', 'mi/h', 'km/h']) }
}

export class FuelAge extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelAge', ['y']) }
}

export class FuelBasalArea extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelBasalArea', ['ft2', 'm2']) }
}

export class FuelBedBulkDensity extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelBedBulkDensity', ['lb/ft3', 'kg/m3']) }
}

export class FuelBedDepth extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelBedDepth', ['ft', 'in', 'm', 'cm'], 0.01) }
}

export class FuelBedHeatOfPreignition extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelBedHeatOfPreignition', ['btu/lb', 'J/kg']) }
}

export class FuelBedPackingRatio extends NonNegativeFactor {
  constructor() { super('FuelBedPackingRatio') }
}

export class FuelCoverFraction extends Fraction {
  constructor() { super('FuelCoverFraction') }
}

export class FuelCylindricalDiameter extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelCylindricalDiameter', ['in', 'cm']) }
}

export class FuelCylindricalVolume extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelCylindricalVolume', ['ft3', 'in3', 'm3', 'cm3', 'mm3']) }
}

export class FuelDeadFraction extends Fraction {
  constructor() { super('FuelDeadFraction') }
}

export class FuelEffectiveHeatingNumber extends Fraction {
  constructor() { super('FuelEffectiveHeatingNumber')}
}

export class FuelEffectiveMineralContent extends Fraction {
  constructor() { super('FuelEffectiveMineralContent')}
}

export class FuelHeatOfCombustion extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelHeatOfCombustion', ['btu/lb', 'J/kg'], 12000, 8000) }
}

export class FuelHeatOfPreignition extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelHeatOfPreignition', ['btu/lb', 'J/kg']) }
}

export class FuelHeatSink extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelHeatSink', ['btu/ft3', 'J/m3']) }
}

export class FuelLabelText extends Text {
  constructor () { super('FuelLabelText', '', 0, 80) }
}

export class FuelMoistureContent extends Ratio {
  // Ratio(key, maxValue, defaultValue=0, minValue = 0, stepValue = 1 ) {
  constructor () { super('FuelMoistureContent', 5, 1, 0.01, 0.01) }
}

export class FuelMoistureContentDead extends Ratio {
  // Ratio(key, maxValue, defaultValue=0, minValue = 0, stepValue = 1 ) {
  constructor () { super('FuelMoistureContentDead', 0.5, 0.1, 0.01, 0.01) }
}

export class FuelMoistureContentLive extends Ratio {
  // Ratio(key, maxValue, defaultValue=0, minValue = 0, stepValue = 1 ) {
  constructor () { super('FuelMoistureContentLive', 5, 1, 0.5, 0.25) }
}

export class FuelOvendryLoad extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelOvendryLoad', ['lb/ft2', 'ton/ac', 'kg/m2', 'tonne/ha'], 10, 0) }
}

export class FuelParticleFiberDensity extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelParticleFiberDensity', ['lb/ft3', 'kg/m3']) }
}

export class FuelSizeClassIndex extends ArrayIndex {
  constructor () { super('FuelSizeClassIndex', 6) }
}

export class FuelSurfaceArea extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelSurfaceArea', ['ft2', 'm2']) }
}

export class FuelSurfaceAreaToVolumeRatio extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelSurfaceAreaToVolumeRatio', ['ft2/ft3', 'm2/m3', 'cm2/cm3'],
    4000, 1, 1, 100)
  }
}

export class FuelSurfaceAreaToVolumeRatio1H extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelSurfaceAreaToVolumeRatio1H', ['ft2/ft3', 'm2/m3', 'cm2/cm3'],
    4000, 1200, 192, 100)
  }
}

export class FuelSurfaceAreaToVolumeRatio10H extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelSurfaceAreaToVolumeRatio10H', ['ft2/ft3', 'm2/m3', 'cm2/cm3'],
    192, 96, 48, 4)
  }
}

export class FuelSurfaceAreaToVolumeRatio100H extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelSurfaceAreaToVolumeRatio100H', ['ft2/ft3', 'm2/m3', 'cm2/cm3'],
    48, 30, 16, 10)
  }
}

export class FuelTotalMineralContent extends Fraction {
  constructor() { super('FuelTotalMineralContent') }
}

export class FuelVolume extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('FuelVolume', ['ft3', 'm3']) }
}

export class IgnitionFuelDepth extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('IgnitionFuelDepth', ['in', 'cm']) }
}

export class IgnitionProbability extends Fraction {
  constructor() { super('IgnitionProbability') }
}

export class MapArea extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('MapArea', ['in2', 'cm2', 'mm2']) }
}

export class MapContoursCount extends Count {
  constructor () { super('MapContoursCount', 0) }
}

export class MapDistance extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('MapDistance', ['in', 'ft', 'cm', 'mm']) }
}

export class MapFactor extends Factor {
  // Float(key, defaultValue=0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue=1) {
  constructor () { super('MapFactor', 1 / 24000, 1 / 2000000, 1) }
}

export class MapScale extends Factor {
  // Float(key, defaultValue=0, minValue = 1 - Number.MAX_VALUE, maxValue = Number.MAX_VALUE, stepValue=1) {
  constructor () { super('MapScale', 24000, 1, 2000000) }
}

export class MortalityFraction extends Fraction {
  constructor() { super('MortalityFraction') }
}

export class SlopeSteepnessDegrees extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('SlopeSteepnessDegrees', ['deg'], 89, 0, 0, 1) }
}

export class SlopeSteepnessRatio extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor() { super('SlopeSteepnessRatio', ['ratio', '%'], 10, 0, 0, 0.1) }
}

export class SpottingFirebrandObject extends Obj {
  // Crown fire spotting distance
  constructor () {
    super('SpottingFirebrandObject', {
      zdrop: 0,
      xdrop: 0,
      xdrift: 0,
      xspot: 0,
      layer: 0
    })
  }
}

export class TreeBarkThickness extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('TreeBarkThickness', ['in', 'cm', 'mm']) }
}

export class TreeCount extends Count {
  constructor () { super('TreeCount', 0) }
}

export class TreeDbh extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('TreeDbh', ['in', 'ft', 'cm', 'm']) }
}

export class TreeHeight extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('TreeHeight', ['ft', 'm']) }
}

export class WeightingFactor extends Fraction {
  constructor() { super('WeightingFactor') }
}

export class WindSpeed extends Quantity {
  // Quantity(key, unitsOptions, maxValue, defaultValue=0, minValue = 0, stepValue = 1 )
  constructor () { super('WindSpeed', ['ft/min', 'mi/h', 'm/s', 'm/min', 'km/h']) }
}

export class WindSpeedAdjustmentFactor extends Fraction {
  // Fraction(key, defaultValue=0, stepValue = 0.01 ) {
  constructor() { super('WindSpeedAdjustmentFactor', 1, 0.05)}
}
