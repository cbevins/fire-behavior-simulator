import * as V from './index.js'
import { ArrayIndex, Bool, Config, Count, Float, Fraction, Obj, Option, Quantity, Text } from '../variant/index.js'
import { VariantMap } from './VariantMap.js'

test('Abstract Factor and NonNegativeFactor', () => {
  expect(new V.Factor('factor') instanceof Float).toEqual(true)
  expect(new V.NonNegativeFactor('NonNegativeFactor') instanceof Float).toEqual(true)
})

test('Option constructors', () => {
  expect(new V.ChaparralTypeOption() instanceof Option).toEqual(true)
  expect(new V.CrownFireInitiationTypeOption() instanceof Option).toEqual(true)
  expect(new V.FuelModelDomainOption() instanceof Option).toEqual(true)
  expect(new V.FuelModelKeyOption() instanceof Option).toEqual(true)
  expect(new V.IgnitionFuelTypeOption() instanceof Option).toEqual(true)
  expect(new V.IgnitionLightningChargeOption() instanceof Option).toEqual(true)
  expect(new V.SpottingSourceLocationOption() instanceof Option).toEqual(true)
  expect(new V.TorchingTreeSpeciesOption() instanceof Option).toEqual(true)
  expect(new V.TreeSpeciesFofem6Option() instanceof Option).toEqual(true)
  expect(new V.WesternAspenTypeOption() instanceof Option).toEqual(true)
})

test('Config constructors', () => {
  expect(new V.ConfigChaparralTotalLoad() instanceof Config).toEqual(true)
  expect(new V.ConfigChaparralTotalLoad() instanceof Option).toEqual(true)
  expect(new V.ConfigCuredHerbFraction() instanceof Config).toEqual(true)
  expect(new V.ConfigPrimaryFuels() instanceof Config).toEqual(true)
  expect(new V.ConfigSecondaryFuels() instanceof Config).toEqual(true)
  expect(new V.ConfigMoistureContents() instanceof Config).toEqual(true)
  expect(new V.ConfigWindSpeedAdjustmentFactor() instanceof Config).toEqual(true)
  expect(new V.ConfigSlopeSteepness() instanceof Config).toEqual(true)
  expect(new V.ConfigWindDirection() instanceof Config).toEqual(true)
  expect(new V.ConfigWindSpeed() instanceof Config).toEqual(true)
  expect(new V.ConfigFirelineIntensity() instanceof Config).toEqual(true)
  expect(new V.ConfigFireLengthToWidthRatio() instanceof Config).toEqual(true)
  expect(new V.ConfigEffectiveWindSpeedLimit() instanceof Config).toEqual(true)
  expect(new V.ConfigFireWeightingMethod() instanceof Config).toEqual(true)
  expect(new V.ConfigFireVector() instanceof Config).toEqual(true)
})

test('Bool constructors', () => {
  expect(new V.DownWindCanopyIsOpen() instanceof Bool).toEqual(true)
  expect(new V.EffectiveWindSpeedLimitIsExceeded() instanceof Bool).toEqual(true)
  expect(new V.FireSpreadRateLimitIsExceeded() instanceof Bool).toEqual(true)
  expect(new V.FuelIsSheltered() instanceof Bool).toEqual(true)
  expect(new V.NoYes() instanceof Bool).toEqual(true)
})

test('Variant constructors', () => {
  expect(new V.AirTemperature() instanceof Quantity).toEqual(true)
  expect(new V.CompassAzimuth() instanceof Quantity).toEqual(true)
  expect(new V.CrownFillFraction() instanceof Fraction).toEqual(true)
  expect(new V.CrownFireActiveRatio() instanceof V.NonNegativeFactor).toEqual(true)
  expect(new V.CrownFireBurnedFraction() instanceof Fraction).toEqual(true)
  expect(new V.CrownRatioFraction() instanceof Fraction).toEqual(true)
  expect(new V.CrownTransitionRatio() instanceof V.NonNegativeFactor).toEqual(true)
  expect(new V.Documentation() instanceof Text).toEqual(true)
  expect(new V.FireArea() instanceof Quantity).toEqual(true)
  expect(new V.FireDampingCoefficient() instanceof Fraction).toEqual(true)
  expect(new V.FireElapsedTime() instanceof Quantity).toEqual(true)
  expect(new V.FireFirelineIntensity() instanceof Quantity).toEqual(true)
  expect(new V.FireFlameDuration() instanceof Quantity).toEqual(true)
  expect(new V.FireFlameLength() instanceof Quantity).toEqual(true)
  expect(new V.FireHeatPerUnitArea() instanceof Quantity).toEqual(true)
  expect(new V.FireLengthToWidthRatio() instanceof V.Factor).toEqual(true)
  expect(new V.FirePower() instanceof Quantity).toEqual(true)
  expect(new V.FirePowerRatio() instanceof V.NonNegativeFactor).toEqual(true)
  expect(new V.FirePropagatingFluxRatio() instanceof Fraction).toEqual(true)
  expect(new V.FireReactionIntensity() instanceof Quantity).toEqual(true)
  expect(new V.FireReactionVelocity() instanceof Quantity).toEqual(true)
  expect(new V.FireResidenceTime() instanceof Quantity).toEqual(true)
  expect(new V.FireScorchHeight() instanceof Quantity).toEqual(true)
  expect(new V.FireSpotDistance() instanceof Quantity).toEqual(true)
  expect(new V.FireSpreadDistance() instanceof Quantity).toEqual(true)
  expect(new V.FireSpreadRate() instanceof Quantity).toEqual(true)
  expect(new V.FuelAge() instanceof Quantity).toEqual(true)
  expect(new V.FuelBasalArea() instanceof Quantity).toEqual(true)
  expect(new V.FuelBedBulkDensity() instanceof Quantity).toEqual(true)
  expect(new V.FuelBedDepth() instanceof Quantity).toEqual(true)
  expect(new V.FuelBedHeatOfPreignition() instanceof Quantity).toEqual(true)
  expect(new V.FuelBedPackingRatio() instanceof V.NonNegativeFactor).toEqual(true)
  expect(new V.FuelCoverFraction() instanceof Fraction).toEqual(true)
  expect(new V.FuelCylindricalDiameter() instanceof Quantity).toEqual(true)
  expect(new V.FuelCylindricalVolume() instanceof Quantity).toEqual(true)
  expect(new V.FuelDeadFraction() instanceof Fraction).toEqual(true)
  expect(new V.FuelEffectiveHeatingNumber() instanceof Fraction).toEqual(true)
  expect(new V.FuelEffectiveMineralContent() instanceof Fraction).toEqual(true)
  expect(new V.FuelHeatOfCombustion() instanceof Quantity).toEqual(true)
  expect(new V.FuelHeatOfPreignition() instanceof Quantity).toEqual(true)
  expect(new V.FuelHeatSink() instanceof Quantity).toEqual(true)
  expect(new V.FuelLabelText() instanceof Text).toEqual(true)
  expect(new V.FuelMoistureContent() instanceof Float).toEqual(true)
  expect(new V.FuelMoistureContentDead() instanceof Float).toEqual(true)
  expect(new V.FuelMoistureContentLive() instanceof Float).toEqual(true)
  expect(new V.FuelOvendryLoad() instanceof Quantity).toEqual(true)
  expect(new V.FuelParticleFiberDensity() instanceof Quantity).toEqual(true)
  expect(new V.FuelSizeClassIndex() instanceof ArrayIndex).toEqual(true)
  expect(new V.FuelSurfaceArea() instanceof Quantity).toEqual(true)
  expect(new V.FuelSurfaceAreaToVolumeRatio() instanceof Quantity).toEqual(true)
  expect(new V.FuelSurfaceAreaToVolumeRatio1H() instanceof Quantity).toEqual(true)
  expect(new V.FuelSurfaceAreaToVolumeRatio10H() instanceof Quantity).toEqual(true)
  expect(new V.FuelSurfaceAreaToVolumeRatio100H() instanceof Quantity).toEqual(true)
  expect(new V.FuelTotalMineralContent() instanceof Fraction).toEqual(true)
  expect(new V.FuelVolume() instanceof Quantity).toEqual(true)
  expect(new V.IgnitionFuelDepth() instanceof Quantity).toEqual(true)
  expect(new V.IgnitionProbability() instanceof Fraction).toEqual(true)
  expect(new V.MapArea() instanceof Quantity).toEqual(true)
  expect(new V.MapContoursCount() instanceof Count).toEqual(true)
  expect(new V.MapDistance() instanceof Quantity).toEqual(true)
  expect(new V.MapFactor() instanceof Float).toEqual(true)
  expect(new V.MapScale() instanceof Float).toEqual(true)
  expect(new V.MortalityFraction() instanceof Fraction).toEqual(true)
  expect(new V.SlopeSteepnessDegrees() instanceof Quantity).toEqual(true)
  expect(new V.SlopeSteepnessRatio() instanceof Quantity).toEqual(true)
  expect(new V.SpottingFirebrandObject() instanceof Obj).toEqual(true)
  expect(new V.TreeBarkThickness() instanceof Quantity).toEqual(true)
  expect(new V.TreeCount() instanceof Count).toEqual(true)
  expect(new V.TreeDbh() instanceof Quantity).toEqual(true)
  expect(new V.TreeHeight() instanceof Quantity).toEqual(true)
  expect(new V.WeightingFactor() instanceof Fraction).toEqual(true)
  expect(new V.WindSpeed() instanceof Quantity).toEqual(true)
  expect(new V.WindSpeedAdjustmentFactor() instanceof Fraction).toEqual(true)
})

test('VariantMap', () => {
  const vmap = new VariantMap()
  expect(vmap.size).toEqual(128) // NOTE: this will change when the genome changes!!
  expect(vmap.has('FuelSurfaceAreaToVolumeRatio')).toEqual(true)
  const v = vmap.get('FuelSurfaceAreaToVolumeRatio')
  expect(v.key()).toEqual('FuelSurfaceAreaToVolumeRatio')
})
