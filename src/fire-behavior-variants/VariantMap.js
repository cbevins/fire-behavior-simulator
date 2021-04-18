/**
 * @file VariantMap provides a Map() of Variant instances for a Dag.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as C from './Configs.js'
import * as O from './Options.js'
import * as V from './Variants.js'

const vClasses = [
  C.ConfigModuleActive,
  C.ConfigLinkCrownFire,
  C.ConfigLinkFireEllipse,
  C.ConfigLinkScorchHeight,
  C.ConfigLinkSurfaceFire,
  C.ConfigChaparralTotalLoad,
  C.ConfigCuredHerbFraction,
  C.ConfigPrimaryFuels,
  C.ConfigSecondaryFuels,
  C.ConfigMoistureContents,
  C.ConfigWindSpeedAdjustmentFactor,
  C.ConfigSlopeSteepness,
  C.ConfigWindDirection,
  C.ConfigWindSpeed,
  C.ConfigFirelineIntensity,
  C.ConfigFireLengthToWidthRatio,
  C.ConfigEffectiveWindSpeedLimit,
  C.ConfigFireWeightingMethod,
  C.ConfigFireVector,
  O.ChaparralTypeOption,
  O.CrownFireInitiationTypeOption,
  O.EastWestOption,
  O.FuelModelDomainOption,
  O.FuelModelKeyOption,
  O.IgnitionFuelTypeOption,
  O.IgnitionLightningChargeOption,
  O.NorthSouthOption,
  O.SpottingSourceLocationOption,
  O.TorchingTreeSpeciesOption,
  O.TreeSpeciesFofem6Option,
  O.WesternAspenTypeOption,
  V.NoYes,
  V.DownWindCanopyIsOpen,
  V.EffectiveWindSpeedLimitIsExceeded,
  V.FireSpreadRateLimitIsExceeded,
  V.FuelIsSheltered,
  V.Factor,
  V.NonNegativeFactor,
  V.AirTemperature,
  V.CompassAzimuth,
  V.CrownFillFraction,
  V.CrownFireActiveRatio,
  V.CrownFireBurnedFraction,
  V.CrownRatioFraction,
  V.CrownTransitionRatio,
  V.DateDayOfMonth,
  V.DateDayOfYear,
  V.DateJulian,
  V.DateMonth,
  V.DateYear,
  V.Documentation,
  V.Elevation,
  V.ElevationDiff,
  V.FireArea,
  V.FireDampingCoefficient,
  V.FireElapsedTime,
  V.FireFirelineIntensity,
  V.FireFlameDuration,
  V.FireFlameLength,
  V.FireHeatPerUnitArea,
  V.FireLengthToWidthRatio,
  V.FirePower,
  V.FirePowerRatio,
  V.FirePropagatingFluxRatio,
  V.FireReactionIntensity,
  V.FireReactionVelocity,
  V.FireResidenceTime,
  V.FireScorchHeight,
  V.FireSpotDistance,
  V.FireSpreadDistance,
  V.FireSpreadRate,
  V.FuelAge,
  V.FuelBasalArea,
  V.FuelBedBulkDensity,
  V.FuelBedDepth,
  V.FuelBedHeatOfPreignition,
  V.FuelBedPackingRatio,
  V.FuelCoverFraction,
  V.FuelCylindricalDiameter,
  V.FuelCylindricalVolume,
  V.FuelDeadFraction,
  V.FuelEffectiveHeatingNumber,
  V.FuelEffectiveMineralContent,
  V.FuelHeatOfCombustion,
  V.FuelHeatOfPreignition,
  V.FuelHeatSink,
  V.FuelLabelText,
  V.FuelMoistureContent,
  V.FuelMoistureContentDead,
  V.FuelMoistureContentLive,
  V.FuelOvendryLoad,
  V.FuelParticleFiberDensity,
  V.FuelSizeClassIndex,
  V.FuelSurfaceArea,
  V.FuelSurfaceAreaToVolumeRatio,
  V.FuelSurfaceAreaToVolumeRatio1H,
  V.FuelSurfaceAreaToVolumeRatio10H,
  V.FuelSurfaceAreaToVolumeRatio100H,
  V.FuelTotalMineralContent,
  V.FuelVolume,
  V.GmtDiff,
  V.IgnitionFuelDepth,
  V.IgnitionProbability,
  V.Latitude,
  V.Longitude,
  V.MapArea,
  V.MapContoursCount,
  V.MapDistance,
  V.MapFactor,
  V.MapScale,
  V.MortalityFraction,
  V.RelativeHumidity,
  V.ShadingFraction,
  V.SlopeSteepnessDegrees,
  V.SlopeSteepnessRatio,
  V.SpottingFirebrandObject,
  V.TimeHour,
  V.TimeMinute,
  V.TimeSecond,
  V.TimeStamp,
  V.TreeBarkThickness,
  V.TreeCount,
  V.TreeDbh,
  V.TreeHeight,
  V.WeightingFactor,
  V.WindSpeed,
  V.WindSpeedAdjustmentFactor
]

/**
 * VariantMap is a Javascript Map() object containing an instance of each
 * Variant keyed by its Variant.key()
 */
export class VariantMap extends Map {
  constructor () {
    super()
    vClasses.forEach((Vclass, idx) => {
      const v = new Vclass()
      this.set(v.key(), v)
    })
    this._applyInitial()
  }

  // Applies commonly expected display units where they differ from native units
  _applyInitial () {
    this.get('FireArea').setDisplayUnits('ac')
    this.get('FuelMoistureContent').setDisplayUnits('%')
    this.get('FuelMoistureContentDead').setDisplayUnits('%')
    this.get('FuelMoistureContentLive').setDisplayUnits('%')
    this.get('WindSpeed').setDisplayUnits('mi/h')
  }
}
