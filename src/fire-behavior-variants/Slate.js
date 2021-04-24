/**
 * @file Slate.js provides a way to apply units-of-measure slates across all Variants.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Quantity } from '../variant/index.js'
/**
 * Experimental approach to setting Variant display units
 *
 * VariantQuantitySlate defines the units-of-measure applied to Quantity Variants
 * under the following slates:
 * - 'si' displays values in SI units nearest their native units scale
 * - 'si_fine' displays values in SI units in a finer units scale
 * - 'si_gross' displays values in SI units in a larger units scale
 * - 'si_w' displays energy Quantity Variants as Watts instead of J/s
 * - 'us' displays values in common (but not necessarily native) US Standard units
 * - 'us_fine' displays values in US Standard units in a finer units scale
 * - 'us_gross' displays values in US Standard units in a larger units scale
 * - 'us_sur' displays spread rate and distances as 'ch' instead of 'ft'
 *
 * A units selection widget may look like:
 * - Overall:               /_/ us     /_/ si     /_/ native
 * - FireArea:              /_/ ac     /_/ ha     /_/ ft2   /_/ m2    /_/ mi2  /_/ km2
 * - FireSpreadDistance:    /_/ ft     /_/ ch     /_/ mi    /_/ m     /_/ km
 * - FireSpreadRate:        /_/ ft/min /_/ ch/h   /_/ mi/h  /_/ m/min /_/ km/h
 * - Fractions
 *  - FuelMoistureContent:  /_/ %      /_/ ratio
 *  - Other Fractions:      /_/ %      /_/ ratio
 * - FuelOvendryLoad:       /_/ lb/ft  /_/ ton/ac /_/ kg/m2 /_/ tonne/ha
 * - SlopeSteepness:        /_/ %      /_/ ratio  /_/ deg
 * - WindSpeed:             /_/ mi/h   /_/ km/h
 */
const VariantQuantitySlate = new Map([
  ['AirTemperature', { us: 'oF', si: 'oC' }],
  ['CompassAzimuth', { us: 'deg', si: 'deg' }],
  ['Elevation', { us: 'ft', si: 'm' }],
  ['ElevationDiff', { us: 'ft', si: 'm' }],
  ['FireArea', { us_fine: 'ft2', us: 'ac', us_gross: 'mi2', si_fine: 'm2', si: 'ha', si_gross: 'km2' }],
  ['FireElapsedTime', { us: 'min', us_gross: 'h', si: 'min', si_gross: 'h' }],
  ['FireFirelineIntensity', { us: 'btu/ft/s', si: 'J/m/s', si_w: 'W/m' }],
  ['FireFlameDuration', { us: 'min', si: 'min' }],
  ['FireFlameLength', { us: 'ft', si: 'm' }],
  ['FireHeatPerUnitArea', { us: 'btu/ft2', si: 'J/m2' }],
  ['FirePower', { us: 'btu/min', us_fine: 'btu/s', si: 'J/s', si_fine: 'J/min', si_w: 'W' }],
  ['FireReactionIntensity', { us: 'btu/ft2/min', si: 'J/m2/min' }],
  ['FireReactionVelocity', { us: 'min-1', us_fine: 's-1', si: 'min-1', si_fine: 's-1' }],
  ['FireResidenceTime', { us: 'min', us_fine: 's', us_gross: 'h', si: 'min', si_fine: 's', si_gross: 'h' }],
  ['FireScorchHeight', { us: 'ft', si: 'm' }],
  ['FireSpotDistance', { us: 'ft', si: 'm', us_sur: 'ch', us_gross: 'mi', si_gross: 'km' }],
  ['FireSpreadDistance', { us: 'ft', si: 'm', us_sur: 'ch', us_gross: 'mi', si_gross: 'km' }],
  ['FireSpreadRate', { us: 'ft/min', si: 'm/min', us_sur: 'ch/h', us_gross: 'mi/h', si_gross: 'km/h' }],
  ['FuelAge', { us: 'y', si: 'y' }],
  ['FuelBasalArea', { us: 'ft2', si: 'm2' }],
  ['FuelBedBulkDensity', { us: 'lb/ft3', si: 'kg/m3' }],
  ['FuelBedDepth', { us: 'ft', us_fine: 'in', si: 'm', si_fine: 'cm' }],
  ['FuelHeatOfPreignition', { us: 'btu/lb', si: 'J/kg' }],
  ['FuelCylindricalDiameter', { us: 'in', si: 'cm' }],
  ['FuelCylindricalVolume', { us: 'ft3', us_fine: 'in3', si: 'm3', si_fine: 'cm3' }],
  ['FuelHeatOfCombustion', { us: 'btu/lb', si: 'J/kg' }],
  ['FuelHeatOfPreignition', { us: 'btu/lb', si: 'J/kg' }],
  ['FuelHeatSink', { us: 'btu/ft3', si: 'J/m3' }],
  ['FuelOvendryLoad', { us: 'lb/ft2', us_gross: 'ton/ac', si: 'kg/m2', si_gross: 'tonne/ha' }],
  ['FuelParticleFiberDensity', { us: 'lb/ft3', si: 'kg/m3' }],
  ['FuelSurfaceArea', { us: 'ft2', si: 'm2' }],
  ['FuelSurfaceAreaToVolumeRatio', { us: 'ft2/ft3', si: 'm2/m3' }],
  ['FuelSurfaceAreaToVolumeRatio1H', { us: 'ft2/ft3', si: 'm2/m3' }],
  ['FuelSurfaceAreaToVolumeRatio10H', { us: 'ft2/ft3', si: 'm2/m3' }],
  ['FuelSurfaceAreaToVolumeRatio100H', { us: 'ft2/ft3', si: 'm2/m3' }],
  ['FuelVolume', { us: 'ft3', si: 'm3' }],
  ['IgnitionFuelDepth', { us: 'in', si: 'cm' }],
  ['MapArea', { us: 'in2', si: 'cm2' }],
  ['MapDistance', { us: 'in', si: 'cm' }],
  ['SlopeSteepnessDegrees', { us: 'deg', si: 'deg' }],
  ['TreeBarkThickness', { us: 'in', si: 'cm' }],
  ['TreeDbh', { us: 'in', si: 'cm' }],
  ['TreeHeight', { us: 'ft', si: 'm' }],
  ['WindSpeed', { us: 'mi/h', us_fine: 'ft/min', si: 'km/h', si_fine: 'm/min' }]
])

// ArrayIndex Variants
// const Variant_ArrayIndexes = [
//   'FuelSizeClassIndex'
// ]

// Bool Variants
// const Variant_Bools = []

// Count Variants
// const Variant_Counts = [
//   'MapContoursCount',
//   'TreeCount'
// ]

// Factor Variants  (do not have 'ratio' or '%' or any other units)
// const Variant_Factor_Slate = [
//   'FireLengthToWidthRatio',
//   'MapFactor',
//   'MapScale'
// ]

// Fraction Variants (have 'ratio' or 'percent' units)
const VariantFractionSlate = [
  'CrownFillFraction',
  'CrownFireBurnedFraction',
  'CrownRatioFraction',
  'FireDampingCoefficient',
  'FirePropagatingFluxRatio',
  'FuelCoverFraction',
  'FuelDeadFraction',
  'FuelEffectiveHeatingNumber',
  'FuelEffectiveMineralContent',
  'FuelMoistureContent',
  'FuelMoistureContentDead',
  'FuelMoistureContentLive',
  'FuelTotalMineralContent',
  'IgnitionProbability',
  'MortalityFraction',
  'SlopeSteepnessRatio',
  'WeightingFactor',
  'WindSpeedAdjustmentFactor'
]

// NonNegativeFactor (do not have 'ratio' or '%' units)
// const Variant_NonNegativeFactor_Slate = [
//   'CrownFireActiveRatio',
//   'CrownTransitionRatio',
//   'FirePowerRatio',
//   'FuelBedPackingRatio'
// ]

// Object Variants
// const Variant_Object_Slate = [
//   'SpottingFirebrandObject'
// ]

// Text Variants
// const Variant_Text_Slate = [
//   'Documentation',
//   'FuelLabelText'
// ]

function applyNative (vmap) {
  vmap.forEach((variant, key) => {
    if (variant instanceof Quantity) {
      variant.setDisplayUnits(variant.nativeUnits())
    }
  })
}

function applyFractions (vmap, slateKey) {
  VariantFractionSlate.forEach(key => {
    // console.log(key)
    // if (!vmap.has(key)) throw new Error(`VariantMap has no key '${key}'`)
    vmap.get(key).setDisplayUnits(slateKey)
  })
}

function applyQuantity (vmap, slateKey) {
  VariantQuantitySlate.forEach((spec, key) => {
    // if (!vmap.has(key)) throw new Error(`VariantMap has no key '${key}'`)
    const variant = vmap.get(key)
    // eslint-disable-next-line no-prototype-builtins
    if (spec.hasOwnProperty(slateKey)) variant.setDisplayUnits(spec[slateKey])
  })
}

export function applySlate (vmap, slate) {
  if (slate === '%' || slate === 'ratio') {
    applyFractions(vmap, slate)
  } else if (slate === 'si' || slate === 'us') {
    applyQuantity(vmap, slate)
  } else if (slate === 'si_fine' || slate === 'si_gross') {
    applyQuantity(vmap, 'si') // first change everything to SI
    applyQuantity(vmap, slate) // then apply the fine or gross UoMs
  } else if (slate === 'us_fine' || slate === 'us_gross' || slate === 'us_sur') {
    applyQuantity(vmap, 'us') // first change everything to US UOM
    applyQuantity(vmap, slate) // then apply the fine, gross, or survey units
  } else {
    applyNative(vmap)
  }
}
