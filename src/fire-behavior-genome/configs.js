const module = [['ConfigModuleActive'], [['finally', 'Dag.module']]]
const config = [['finally', 'Dag.config']]

export const genome = [
  ['module.surfaceFire', module],
  ['module.surfaceSpot', module],
  ['module.crownFire', module],
  ['module.crownSpot', module],
  ['module.fireEllipse', module],
  ['module.fireContain', module],
  ['module.scorchHeight', module],
  ['module.treeMortality', module],
  ['module.spotting', module],
  ['module.ignitionProbability', module],

  ['link.crownFire', [['ConfigLinkSurfaceFire'], config]],
  ['link.crownSpot', [['ConfigLinkCrownFire'], config]],
  ['link.fireContain', [['ConfigLinkFireEllipse'], config]],
  ['link.fireEllipse', [['ConfigLinkSurfaceFire'], config]],
  ['link.scorchHeight', [['ConfigLinkSurfaceFire'], config]],
  ['link.surfaceSpot', [['ConfigLinkSurfaceFire'], config]],
  ['link.treeMortality', [['ConfigLinkScorchHeight'], config]],

  ['configure.fuel.primary', [['ConfigPrimaryFuels'], config]],
  ['configure.fuel.secondary', [['ConfigSecondaryFuels'], config]],
  ['configure.fuel.moisture', [['ConfigMoistureContents'], config]],
  ['configure.fuel.windSpeedAdjustmentFactor', [['ConfigWindSpeedAdjustmentFactor'], config]],
  ['configure.fuel.curedHerbFraction', [['ConfigCuredHerbFraction'], config]],
  ['configure.fuel.chaparralTotalLoad', [['ConfigChaparralTotalLoad'], config]],
  ['configure.slope.steepness', [['ConfigSlopeSteepness'], config]],
  ['configure.wind.direction', [['ConfigWindDirection'], config]],
  ['configure.wind.speed', [['ConfigWindSpeed'], config]],
  ['configure.fire.firelineIntensity', [['ConfigFirelineIntensity'], config]],
  ['configure.fire.lengthToWidthRatio', [['ConfigFireLengthToWidthRatio'], config]],
  ['configure.fire.effectiveWindSpeedLimit', [['ConfigEffectiveWindSpeedLimit'], config]],
  ['configure.fire.weightingMethod', [['ConfigFireWeightingMethod'], config]],
  ['configure.fire.vector', [['ConfigFireVector'], config]]
]
