export const Genome = [
  ['configure.fire.effectiveWindSpeedLimit', [['ConfigEffectiveWindSpeedLimit'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fire.firelineIntensity', [['ConfigFirelineIntensity'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fire.lengthToWidthRatio', [['ConfigFireLengthToWidthRatio'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fire.vector', [['ConfigFireVector'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fire.weightingMethod', [['ConfigFireWeightingMethod'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.chaparralTotalLoad', [['ConfigChaparralTotalLoad'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.curedHerbFraction', [['ConfigCuredHerbFraction'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.moisture', [['ConfigMoistureContents'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.primary', [['ConfigPrimaryFuels'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.secondary', [['ConfigSecondaryFuels'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.fuel.windSpeedAdjustmentFactor', [['ConfigWindSpeedAdjustmentFactor'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.slope.steepness', [['ConfigSlopeSteepness'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.wind.direction', [['ConfigWindDirection'], [
    ['finally', 'Dag.config'],
  ]]],
  ['configure.wind.speed', [['ConfigWindSpeed'], [
    ['finally', 'Dag.config'],
  ]]],
  ['crown.canopy.fuel.bed.bulkDensity', [['FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.ovendryLoad', 'crown.canopy.fuel.bed.depth'],
  ]]],
  ['crown.canopy.fuel.bed.dead.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent', 'crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '0.25'],
  ]]],
  ['crown.canopy.fuel.bed.dead.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion', 'crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion'],
  ]]],
  ['crown.canopy.fuel.bed.dead.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition'],
  ]]],
  ['crown.canopy.fuel.bed.dead.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'crown.canopy.fuel.bed.dead.effective.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'crown.canopy.fuel.bed.dead.moistureContent', 'crown.canopy.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'dead'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class1.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0.138'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '2000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'dead'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class2.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl10h'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0.092'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '109'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'dead'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class3.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl100h'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0.23'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '30'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'dead'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class4.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.dead.tl1h'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1500'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'dead'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.dead.particle.class5.moistureContent', 'crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass', 'crown.canopy.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.dead.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.dead.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.dead.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'crown.canopy.fuel.bed.dead.reactionIntensityDry', 'crown.canopy.fuel.bed.dead.moistureDamping'],
  ]]],
  ['crown.canopy.fuel.bed.dead.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'crown.canopy.fuel.bed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.dead.net.ovendryLoad', 'crown.canopy.fuel.bed.dead.heatOfCombustion', 'crown.canopy.fuel.bed.dead.mineralDamping'],
  ]]],
  ['crown.canopy.fuel.bed.dead.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class1.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.sizeClass', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.sizeClass'],
  ]]],
  ['crown.canopy.fuel.bed.dead.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.dead.surfaceArea', 'crown.canopy.fuel.bed.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.dead.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.particle.class1.volume', 'crown.canopy.fuel.bed.dead.particle.class2.volume', 'crown.canopy.fuel.bed.dead.particle.class3.volume', 'crown.canopy.fuel.bed.dead.particle.class4.volume', 'crown.canopy.fuel.bed.dead.particle.class5.volume'],
  ]]],
  ['crown.canopy.fuel.bed.depth', [['FuelBedDepth'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['crown.canopy.fuel.bed.heatOfPreignition', [['FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.heatOfPreignition', 'crown.canopy.fuel.bed.live.heatOfPreignition'],
  ]]],
  ['crown.canopy.fuel.bed.heatSink', [['FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'crown.canopy.fuel.bed.heatOfPreignition', 'crown.canopy.fuel.bed.bulkDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent', 'crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.live.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'crown.canopy.fuel.bed.live.extinction.moistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent', 'crown.canopy.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad', 'crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.live.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion', 'crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion'],
  ]]],
  ['crown.canopy.fuel.bed.live.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition'],
  ]]],
  ['crown.canopy.fuel.bed.live.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'crown.canopy.fuel.bed.live.effective.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.moistureContent', 'crown.canopy.fuel.bed.live.particle.class2.moistureContent', 'crown.canopy.fuel.bed.live.particle.class3.moistureContent', 'crown.canopy.fuel.bed.live.particle.class4.moistureContent', 'crown.canopy.fuel.bed.live.particle.class5.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'crown.canopy.fuel.bed.live.moistureContent', 'crown.canopy.fuel.bed.live.extinction.moistureContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.live.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'live'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class1.moistureContent', 'crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.herb'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1500'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class1.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'live'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class2.moistureContent', 'crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.bind', 'site.moisture.live.stem'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0.092'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1500'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class2.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'live'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class3.moistureContent', 'crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class3.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'live'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class4.moistureContent', 'crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class4.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'live'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'crown.canopy.fuel.bed.live.particle.class5.moistureContent', 'crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.total.mineralContent'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass', 'crown.canopy.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['crown.canopy.fuel.bed.live.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'crown.canopy.fuel.bed.live.particle.class5.ovendryLoad', 'crown.canopy.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['crown.canopy.fuel.bed.live.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'crown.canopy.fuel.bed.live.reactionIntensityDry', 'crown.canopy.fuel.bed.live.moistureDamping'],
  ]]],
  ['crown.canopy.fuel.bed.live.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'crown.canopy.fuel.bed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.live.net.ovendryLoad', 'crown.canopy.fuel.bed.live.heatOfCombustion', 'crown.canopy.fuel.bed.live.mineralDamping'],
  ]]],
  ['crown.canopy.fuel.bed.live.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class1.sizeClass', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.sizeClass', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.sizeClass', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.sizeClass', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.sizeClass'],
  ]]],
  ['crown.canopy.fuel.bed.live.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.live.surfaceArea', 'crown.canopy.fuel.bed.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.live.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.live.particle.class1.volume', 'crown.canopy.fuel.bed.live.particle.class2.volume', 'crown.canopy.fuel.bed.live.particle.class3.volume', 'crown.canopy.fuel.bed.live.particle.class4.volume', 'crown.canopy.fuel.bed.live.particle.class5.volume'],
  ]]],
  ['crown.canopy.fuel.bed.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'crown.canopy.fuel.bed.reactionIntensity', 'crown.canopy.fuel.bed.propagatingFluxRatio', 'crown.canopy.fuel.bed.heatSink'],
  ]]],
  ['crown.canopy.fuel.bed.open.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'crown.canopy.fuel.bed.depth'],
  ]]],
  ['crown.canopy.fuel.bed.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.ovendryLoad', 'crown.canopy.fuel.bed.live.ovendryLoad'],
  ]]],
  ['crown.canopy.fuel.bed.packingRatio', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'crown.canopy.fuel.bed.dead.volume', 'crown.canopy.fuel.bed.live.volume', 'crown.canopy.fuel.bed.depth'],
  ]]],
  ['crown.canopy.fuel.bed.packingRatio.optimum', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.packingRatio.ratio', [['FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'crown.canopy.fuel.bed.packingRatio', 'crown.canopy.fuel.bed.packingRatio.optimum'],
  ]]],
  ['crown.canopy.fuel.bed.propagatingFluxRatio', [['FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.packingRatio'],
  ]]],
  ['crown.canopy.fuel.bed.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.reactionIntensity', 'crown.canopy.fuel.bed.live.reactionIntensity'],
  ]]],
  ['crown.canopy.fuel.bed.reactionVelocityExponent', [['Factor'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.reactionVelocityMaximum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'crown.canopy.fuel.bed.savr15'],
  ]]],
  ['crown.canopy.fuel.bed.reactionVelocityOptimum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.bed.reactionVelocityMaximum', 'crown.canopy.fuel.bed.reactionVelocityExponent'],
  ]]],
  ['crown.canopy.fuel.bed.savr15', [['Factor'], [
    ['finally', 'FuelBed.savr15', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.bed.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'crown.canopy.fuel.bed.dead.surfaceArea', 'crown.canopy.fuel.bed.live.surfaceArea'],
  ]]],
  ['crown.canopy.fuel.bed.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.live.surfaceArea.weightingFactor', 'crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio', 'crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.fire.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'crown.canopy.fuel.fire.spreadRate', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.fire.flameResidenceTime'],
  ]]],
  ['crown.canopy.fuel.fire.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'crown.canopy.fuel.fire.firelineIntensity'],
  ]]],
  ['crown.canopy.fuel.fire.flameResidenceTime', [['FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.fire.heading.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'crown.canopy.fuel.fire.heading.fromUpslope'],
  ]]],
  ['crown.canopy.fuel.fire.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'crown.canopy.fuel.fire.maximumDirection.xComponent', 'crown.canopy.fuel.fire.maximumDirection.yComponent', 'crown.canopy.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.fire.flameResidenceTime'],
  ]]],
  ['crown.canopy.fuel.fire.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'crown.canopy.fuel.fire.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.limit.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'crown.canopy.fuel.fire.reactionIntensity'],
  ]]],
  ['crown.canopy.fuel.fire.limit.effectiveWindSpeed.exceeded', [['EffectiveWindSpeedLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.limit.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['crown.canopy.fuel.fire.limit.spreadRate.exceeded', [['FireSpreadRateLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Factor'], [
    ['finally', 'SurfaceFire.phiEwFromEws', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.k'],
  ]]],
  ['crown.canopy.fuel.fire.maximumDirection.slope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.slope.phi'],
  ]]],
  ['crown.canopy.fuel.fire.maximumDirection.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'crown.canopy.fuel.fire.maximumDirection.xComponent', 'crown.canopy.fuel.fire.maximumDirection.yComponent'],
  ]]],
  ['crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.wind.phi'],
  ]]],
  ['crown.canopy.fuel.fire.maximumDirection.xComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', 'crown.canopy.fuel.fire.maximumDirection.slope.spreadRate', 'crown.canopy.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['crown.canopy.fuel.fire.maximumDirection.yComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'crown.canopy.fuel.fire.maximumDirection.wind.spreadRate', 'crown.canopy.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['crown.canopy.fuel.fire.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Dag.bind', 'crown.canopy.fuel.bed.noWindNoSlope.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.phiEffectiveWind', [['Factor'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind'],
  ]]],
  ['crown.canopy.fuel.fire.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'crown.canopy.fuel.bed.reactionIntensity'],
  ]]],
  ['crown.canopy.fuel.fire.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'crown.canopy.fuel.fire.firelineIntensity', 'crown.canopy.fuel.fire.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['crown.canopy.fuel.fire.slope.k', [['Factor'], [
    ['finally', 'FuelBed.slopeK', 'crown.canopy.fuel.bed.packingRatio'],
  ]]],
  ['crown.canopy.fuel.fire.slope.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiSlope', 'crown.canopy.fuel.fire.slope.ratio', 'crown.canopy.fuel.fire.slope.k'],
  ]]],
  ['crown.canopy.fuel.fire.slope.ratio', [['SlopeSteepnessRatio'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step1.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step1.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step1.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.phi', 'crown.canopy.fuel.fire.slope.phi'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step1.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step1.phiEffectiveWind'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step2.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step2.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed', 'crown.canopy.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3a.phiEffectiveWind', [['Factor'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.phiEffectiveWind', 'crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3a.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Math.min', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.limit.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step3b.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'crown.canopy.fuel.fire.spread.step2.spreadRate', 'crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'crown.canopy.fuel.fire.spread.step4.phiEffectiveWind', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.i'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step4.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'crown.canopy.fuel.fire.noWindNoSlope.spreadRate', 'crown.canopy.fuel.fire.spread.step4.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.spread.step4.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'crown.canopy.fuel.fire.spread.step3a.spreadRate', 'crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed'],
  ]]],
  ['crown.canopy.fuel.fire.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'crown.canopy.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['crown.canopy.fuel.fire.wind.factor.b', [['Factor'], [
    ['finally', 'FuelBed.windB', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.fire.wind.factor.c', [['Factor'], [
    ['finally', 'FuelBed.windC', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.fire.wind.factor.e', [['Factor'], [
    ['finally', 'FuelBed.windE', 'crown.canopy.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['crown.canopy.fuel.fire.wind.factor.i', [['Factor'], [
    ['finally', 'FuelBed.windI', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.fire.wind.factor.e', 'crown.canopy.fuel.fire.wind.factor.c'],
  ]]],
  ['crown.canopy.fuel.fire.wind.factor.k', [['Factor'], [
    ['finally', 'FuelBed.windK', 'crown.canopy.fuel.bed.packingRatio.ratio', 'crown.canopy.fuel.fire.wind.factor.e', 'crown.canopy.fuel.fire.wind.factor.c'],
  ]]],
  ['crown.canopy.fuel.fire.wind.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['crown.canopy.fuel.fire.wind.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiWind', 'crown.canopy.fuel.fire.wind.speed.atMidflame', 'crown.canopy.fuel.fire.wind.factor.b', 'crown.canopy.fuel.fire.wind.factor.k'],
  ]]],
  ['crown.canopy.fuel.fire.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'crown.canopy.fuel.fire.windSpeedAdjustmentFactor'],
  ]]],
  ['crown.canopy.fuel.fire.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'Dag.fixed', '0.4'],
  ]]],
  ['crown.fire.active.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliActive', 'crown.fire.active.heatPerUnitArea', 'crown.fire.active.spreadRate'],
  ]]],
  ['crown.fire.active.flameLength', [['FireFlameLength'], [
    ['finally', 'CrownFire.flameLengthThomas', 'crown.fire.active.firelineIntensity'],
  ]]],
  ['crown.fire.active.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'CrownFire.hpuaActive', 'site.canopy.fire.heatPerUnitArea', 'crown.fire.surface.heatPerUnitArea'],
  ]]],
  ['crown.fire.active.isPlumeDominated', [['NoYes'], [
    ['finally', 'CrownFire.isPlumeDominated', 'crown.fire.active.powerRatio'],
  ]]],
  ['crown.fire.active.isWindDriven', [['NoYes'], [
    ['finally', 'CrownFire.isWindDriven', 'crown.fire.active.powerRatio'],
  ]]],
  ['crown.fire.active.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['finally', 'CrownFire.lengthToWidthRatio', 'site.wind.speed.at20ft'],
  ]]],
  ['crown.fire.active.map.area', [['MapArea'], [
    ['finally', 'FireEllipse.mapArea', 'crown.fire.active.size.area', 'site.map.scale'],
  ]]],
  ['crown.fire.active.map.length', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.length', 'site.map.scale'],
  ]]],
  ['crown.fire.active.map.perimeter', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.perimeter', 'site.map.scale'],
  ]]],
  ['crown.fire.active.map.width', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.width', 'site.map.scale'],
  ]]],
  ['crown.fire.active.powerOfTheFire', [['FirePower'], [
    ['finally', 'CrownFire.powerOfTheFire', 'crown.fire.active.firelineIntensity'],
  ]]],
  ['crown.fire.active.powerOfTheWind', [['FirePower'], [
    ['finally', 'CrownFire.powerOfTheWind', 'site.wind.speed.at20ft', 'crown.fire.active.spreadRate'],
  ]]],
  ['crown.fire.active.powerRatio', [['FirePowerRatio'], [
    ['finally', 'Calc.divide', 'crown.fire.active.powerOfTheFire', 'crown.fire.active.powerOfTheWind'],
  ]]],
  ['crown.fire.active.size.area', [['FireArea'], [
    ['finally', 'CrownFire.area', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.active.size.length', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'crown.fire.active.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['crown.fire.active.size.perimeter', [['FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.active.size.width', [['FireSpreadDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.active.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.active.spreadRate', [['FireSpreadRate'], [
    ['finally', 'CrownFire.rActive', 'crown.canopy.fuel.fire.spreadRate'],
  ]]],
  ['crown.fire.final.crownFractionBurned', [['CrownFireBurnedFraction'], [
    ['finally', 'CrownFire.crownFractionBurned', 'surface.primary.fuel.fire.spreadRate', 'crown.fire.initiation.spreadRate', 'crown.fire.final.rSa'],
  ]]],
  ['crown.fire.final.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliFinal', 'crown.fire.final.spreadRate', 'crown.fire.final.crownFractionBurned', 'site.canopy.fire.heatPerUnitArea', 'crown.fire.surface.heatPerUnitArea'],
  ]]],
  ['crown.fire.final.flameLength', [['FireFirelineIntensity'], [
    ['finally', 'CrownFire.flameLengthThomas', 'crown.fire.final.firelineIntensity'],
  ]]],
  ['crown.fire.final.map.area', [['MapArea'], [
    ['finally', 'FireEllipse.mapArea', 'crown.fire.final.size.area', 'site.map.scale'],
  ]]],
  ['crown.fire.final.map.length', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.length', 'site.map.scale'],
  ]]],
  ['crown.fire.final.map.perimeter', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.perimeter', 'site.map.scale'],
  ]]],
  ['crown.fire.final.map.width', [['MapDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.width', 'site.map.scale'],
  ]]],
  ['crown.fire.final.rSa', [['FireSpreadRate'], [
    ['finally', 'CrownFire.rSa', 'crown.fire.initiation.oActive', 'surface.primary.fuel.bed.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k', 'surface.primary.fuel.fire.slope.phi'],
  ]]],
  ['crown.fire.final.size.area', [['FireArea'], [
    ['finally', 'CrownFire.area', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.final.size.length', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'crown.fire.final.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['crown.fire.final.size.perimeter', [['FireSpreadDistance'], [
    ['finally', 'CrownFire.perimeter', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.final.size.width', [['FireSpreadDistance'], [
    ['finally', 'Calc.divide', 'crown.fire.final.size.length', 'crown.fire.active.lengthToWidthRatio'],
  ]]],
  ['crown.fire.final.spreadRate', [['FireSpreadRate'], [
    ['finally', 'CrownFire.rFinal', 'surface.primary.fuel.fire.spreadRate', 'crown.fire.active.spreadRate', 'crown.fire.final.crownFractionBurned'],
  ]]],
  ['crown.fire.initiation.activeRatio', [['CrownFireActiveRatio'], [
    ['finally', 'CrownFire.activeRatio', 'crown.fire.active.spreadRate', 'crown.fire.initiation.rPrime'],
  ]]],
  ['crown.fire.initiation.canTransition', [['NoYes'], [
    ['finally', 'CrownFire.canTransition', 'crown.fire.initiation.transitionRatio'],
  ]]],
  ['crown.fire.initiation.crowningIndex', [['Factor'], [
    ['finally', 'CrownFire.crowningIndex', 'crown.fire.initiation.oActive'],
  ]]],
  ['crown.fire.initiation.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'CrownFire.fliInit', 'site.canopy.fuel.foliar.moistureContent', 'site.canopy.crown.baseHeight'],
  ]]],
  ['crown.fire.initiation.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'crown.fire.initiation.firelineIntensity'],
  ]]],
  ['crown.fire.initiation.isActiveCrownFire', [['NoYes'], [
    ['finally', 'CrownFire.isActive', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.initiation.isConditionalCrownFire', [['NoYes'], [
    ['finally', 'CrownFire.isConditional', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.initiation.isCrownFire', [['NoYes'], [
    ['finally', 'CrownFire.isCrown', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.initiation.isPassiveCrownFire', [['NoYes'], [
    ['finally', 'CrownFire.isPassive', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.initiation.isSurfaceFire', [['NoYes'], [
    ['finally', 'CrownFire.isSurface', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.initiation.oActive', [['WindSpeed'], [
    ['finally', 'CrownFire.oActive', 'site.canopy.fuel.bulkDensity', 'crown.canopy.fuel.fire.reactionIntensity', 'crown.canopy.fuel.bed.heatSink', 'crown.canopy.fuel.fire.slope.phi'],
  ]]],
  ['crown.fire.initiation.rPrime', [['FireSpreadRate'], [
    ['finally', 'CrownFire.rPrimeActive', 'site.canopy.fuel.bulkDensity'],
  ]]],
  ['crown.fire.initiation.spreadRate', [['FireSpreadRate'], [
    ['finally', 'CrownFire.rInit', 'crown.fire.initiation.firelineIntensity', 'crown.fire.surface.heatPerUnitArea'],
  ]]],
  ['crown.fire.initiation.transitionRatio', [['CrownTransitionRatio'], [
    ['finally', 'CrownFire.transitionRatio', 'crown.fire.surface.firelineIntensity', 'crown.fire.initiation.firelineIntensity'],
  ]]],
  ['crown.fire.initiation.type', [['CrownFireInitiationTypeOption'], [
    ['finally', 'CrownFire.type', 'crown.fire.initiation.transitionRatio', 'crown.fire.initiation.activeRatio'],
  ]]],
  ['crown.fire.surface.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'link.crownFire', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity'],
  ]]],
  ['crown.fire.surface.flameLength', [['FireFlameLength'], [
    ['when', 'link.crownFire', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength'],
  ]]],
  ['crown.fire.surface.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['when', 'link.crownFire', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.heatPerUnitArea'],
    ['finally', 'Dag.bind', 'site.fire.observed.heatPerUnitArea'],
  ]]],
  ['docs.run.description', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['docs.run.mainTitle', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['docs.run.subTitle', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['docs.run.userName', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['ignition.firebrand.probability', [['IgnitionProbability'], [
    ['finally', 'IgnitionProbability.firebrand', 'site.temperature.fuel', 'site.moisture.dead.tl1h'],
  ]]],
  ['ignition.lightningStrike.charge', [['IgnitionLightningChargeOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['ignition.lightningStrike.fuel.depth', [['IgnitionFuelDepth'], [
    ['finally', 'Dag.input'],
  ]]],
  ['ignition.lightningStrike.fuel.type', [['IgnitionFuelTypeOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['ignition.lightningStrike.probability', [['IgnitionProbability'], [
    ['finally', 'IgnitionProbability.lightningStrike', 'ignition.lightningStrike.fuel.type', 'ignition.lightningStrike.fuel.depth', 'site.moisture.dead.tl100h', 'ignition.lightningStrike.charge'],
  ]]],
  ['link.crownFire', [['ConfigLinkSurfaceFire'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.crownSpot', [['ConfigLinkCrownFire'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.fireContain', [['ConfigLinkFireEllipse'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.fireEllipse', [['ConfigLinkSurfaceFire'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.scorchHeight', [['ConfigLinkSurfaceFire'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.surfaceSpot', [['ConfigLinkSurfaceFire'], [
    ['finally', 'Dag.config'],
  ]]],
  ['link.treeMortality', [['ConfigLinkScorchHeight'], [
    ['finally', 'Dag.config'],
  ]]],
  ['module.crownFire', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.crownSpot', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.fireContain', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.fireEllipse', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.ignitionProbability', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.scorchHeight', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.spotting', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.surfaceFire', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.surfaceSpot', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['module.treeMortality', [['ConfigModuleActive'], [
    ['finally', 'Dag.module'],
  ]]],
  ['mortality.crownLengthScorched', [['MortalityFraction'], [
    ['finally', 'TreeMortality.crownLengthScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight'],
  ]]],
  ['mortality.crownVolumeScorched', [['MortalityFraction'], [
    ['finally', 'TreeMortality.crownVolumeScorched', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight'],
  ]]],
  ['mortality.rate', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'mortality.scorchHeight'],
  ]]],
  ['mortality.scorchHeight', [['FireScorchHeight'], [
    ['when', 'link.treeMortality', 'equals', 'standAlone', 'Dag.bind', 'site.fire.observed.scorchHeight'],
    ['finally', 'Dag.bind', 'scorch.height'],
  ]]],
  ['scorch.height', [['FireScorchHeight'], [
    ['when', 'link.scorchHeight', 'equals', 'standAlone', 'SurfaceFire.scorchHeight', 'site.fire.observed.firelineIntensity', 'site.wind.speed.atMidflame', 'site.temperature.air'],
    ['finally', 'Dag.bind', 'surface.weighted.fire.scorchHeight'],
  ]]],
  ['site.canopy.cover', [['FuelCoverFraction'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.crown.baseHeight', [['TreeHeight'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.crown.fill', [['CrownFillFraction'], [
    ['finally', 'Canopy.crownFill', 'site.canopy.cover', 'site.canopy.crown.ratio'],
  ]]],
  ['site.canopy.crown.length', [['TreeHeight'], [
    ['finally', 'Canopy.crownLength', 'site.canopy.crown.baseHeight', 'site.canopy.crown.totalHeight'],
  ]]],
  ['site.canopy.crown.ratio', [['CrownRatioFraction'], [
    ['finally', 'Canopy.crownRatio', 'site.canopy.crown.length', 'site.canopy.crown.totalHeight'],
  ]]],
  ['site.canopy.crown.totalHeight', [['TreeHeight'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.downwind.appliedHeight', [['TreeHeight'], [
    ['finally', 'Spotting.appliedDownWindCoverHeight', 'site.canopy.downwind.height', 'site.canopy.downwind.isOpen'],
  ]]],
  ['site.canopy.downwind.height', [['TreeHeight'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.downwind.isOpen', [['DownWindCanopyIsOpen'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.fire.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'Canopy.heatPerUnitArea', 'site.canopy.fuel.ovendryLoad', 'site.canopy.fuel.heatOfCombustion'],
  ]]],
  ['site.canopy.fuel.bulkDensity', [['FuelBedBulkDensity'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.fuel.foliar.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.fuel.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['site.canopy.fuel.isSheltered', [['FuelIsSheltered'], [
    ['finally', 'Canopy.sheltersFuelFromWind', 'site.canopy.cover', 'site.canopy.crown.totalHeight', 'site.canopy.crown.fill'],
  ]]],
  ['site.canopy.fuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Canopy.fuelLoad', 'site.canopy.fuel.bulkDensity', 'site.canopy.crown.length'],
  ]]],
  ['site.canopy.fuel.shading', [['FuelCoverFraction'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.sheltered.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'Canopy.windSpeedAdjustmentFactor', 'site.canopy.cover', 'site.canopy.crown.totalHeight', 'site.canopy.crown.fill'],
  ]]],
  ['site.canopy.tree.barkThickness', [['TreeBarkThickness'], [
    ['finally', 'TreeMortality.barkThickness', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh'],
  ]]],
  ['site.canopy.tree.dbh', [['TreeDbh'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.canopy.tree.species.fofem6.code', [['TreeSpeciesFofem6Option'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.doc.date', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.doc.id', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.doc.location', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.doc.station', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.doc.time', [['Documentation'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.crown.flameLength', [['FireFlameLength'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'configure.fire.lengthToWidthRatio', 'equals', 'lengthToWidthRatio', 'SurfaceFire.effectiveWindSpeedFromLwr', 'site.fire.observed.lengthToWidthRatio'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'flameLength', 'SurfaceFire.firelineIntensityFromFlameLength', 'site.fire.observed.flameLength'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.flameLength', [['FireFlameLength'], [
    ['when', 'configure.fire.firelineIntensity', 'equals', 'firelineIntensity', 'SurfaceFire.flameLength', 'site.fire.observed.firelineIntensity'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.heading.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth', 'Dag.input'],
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'site.fire.observed.heading.fromUpslope'],
  ]]],
  ['site.fire.observed.heading.fromUpslope', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Dag.input'],
    ['finally', 'Compass.diff', 'site.fire.observed.heading.fromNorth', 'site.slope.direction.upslope'],
  ]]],
  ['site.fire.observed.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['when', 'configure.fire.lengthToWidthRatio', 'equals', 'effectiveWindSpeed', 'SurfaceFire.lengthToWidthRatio', 'site.fire.observed.effectiveWindSpeed'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.observed.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.time.sinceIgnition', [['FireElapsedTime'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.vector.fromHead', [['CompassAzimuth'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.vector.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.fire.vector.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.map.contours', [['MapContoursCount'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.map.distance', [['FireSpreadDistance'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.map.factor', [['MapFactor'], [
    ['finally', 'Calc.divide', '1', 'site.map.scale'],
  ]]],
  ['site.map.interval', [['FireSpreadDistance'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.map.reach', [['FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.scale', 'site.map.distance'],
  ]]],
  ['site.map.rise', [['FireSpreadDistance'], [
    ['finally', 'Calc.multiply', 'site.map.interval', 'site.map.contours'],
  ]]],
  ['site.map.scale', [['MapScale'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.map.slope.degrees', [['SlopeSteepnessDegrees'], [
    ['finally', 'Compass.slopeDegreesMap', 'site.map.scale', 'site.map.interval', 'site.map.contours', 'site.map.distance'],
  ]]],
  ['site.map.slope.ratio', [['SlopeSteepnessRatio'], [
    ['finally', 'Compass.slopeRatioMap', 'site.map.scale', 'site.map.interval', 'site.map.contours', 'site.map.distance'],
  ]]],
  ['site.moisture.dead.category', [['FuelMoistureContent'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.dead.tl100h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.dead.tl10h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.dead.tl1h', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.dead.category'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.live.category', [['FuelMoistureContent'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.live.herb', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.moisture.live.stem', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.moisture', 'equals', 'category', 'Dag.bind', 'site.moisture.live.category'],
    ['when', 'configure.fuel.moisture', 'equals', 'liveCategory', 'Dag.bind', 'site.moisture.live.category'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.slope.direction.aspect', [['CompassAzimuth'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.slope.direction.upslope', [['CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.slope.direction.aspect'],
  ]]],
  ['site.slope.steepness.degrees', [['SlopeSteepnessDegrees'], [
    ['when', 'configure.slope.steepness', 'equals', 'degrees', 'Dag.input'],
    ['when', 'configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.degrees'],
    ['finally', 'Compass.slopeDegrees', 'site.slope.steepness.ratio'],
  ]]],
  ['site.slope.steepness.ratio', [['SlopeSteepnessRatio'], [
    ['when', 'configure.slope.steepness', 'equals', 'degrees', 'Compass.slopeRatio', 'site.slope.steepness.degrees'],
    ['when', 'configure.slope.steepness', 'equals', 'map', 'Dag.bind', 'site.map.slope.ratio'],
    ['finally', 'Dag.input'],
  ]]],
  ['site.temperature.air', [['AirTemperature'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.temperature.fuel', [['AirTemperature'], [
    ['finally', 'IgnitionProbability.fuelTemperature', 'site.temperature.air', 'site.canopy.fuel.shading'],
  ]]],
  ['site.terrain.ridgeValleyDistance', [['FireSpotDistance'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.terrain.ridgeValleyElevation', [['FireSpreadDistance'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.terrain.spotSourceLocation', [['SpottingSourceLocationOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['site.wind.direction.heading.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Compass.sum', 'site.wind.direction.heading.fromUpslope', 'site.slope.direction.upslope'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth', 'Compass.opposite', 'site.wind.direction.source.fromNorth'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Dag.bind', 'site.slope.direction.upslope'],
    ['finally', 'Dag.bind', 'site.slope.direction.upslope'],
  ]]],
  ['site.wind.direction.heading.fromUpslope', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth', 'Compass.diff', 'site.wind.direction.heading.fromNorth', 'site.slope.direction.upslope'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Dag.fixed', '0'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['site.wind.direction.source.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.wind.direction', 'equals', 'headingFromUpslope', 'Compass.opposite', 'site.wind.direction.heading.fromNorth'],
    ['when', 'configure.wind.direction', 'equals', 'sourceFromNorth', 'Dag.input'],
    ['when', 'configure.wind.direction', 'equals', 'upslope', 'Compass.opposite', 'site.slope.direction.upslope'],
    ['finally', 'Compass.opposite', 'site.slope.direction.upslope'],
  ]]],
  ['site.wind.direction.source.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Compass.opposite', 'site.wind.direction.heading.fromUpslope'],
  ]]],
  ['site.wind.speed.at10m', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at10m', 'Dag.input'],
    ['finally', 'Wind.speedAt10m', 'site.wind.speed.at20ft'],
  ]]],
  ['site.wind.speed.at20ft', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'at20ft', 'Dag.input'],
    ['when', 'configure.wind.speed', 'equals', 'at10m', 'Wind.speedAt20ft', 'site.wind.speed.at10m'],
    ['finally', 'Wind.speedAt20ftFromMidflame', 'site.wind.speed.atMidflame', 'site.windSpeedAdjustmentFactor'],
  ]]],
  ['site.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.input'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'site.windSpeedAdjustmentFactor'],
  ]]],
  ['site.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.burningPile.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.burningPile.firebrand.height', 'site.canopy.downwind.appliedHeight'],
  ]]],
  ['spotting.burningPile.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['spotting.burningPile.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.burningPileFirebrandHeight', 'spotting.burningPile.flameHeight'],
  ]]],
  ['spotting.burningPile.flameHeight', [['FireFlameLength'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.burningPile.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain', 'spotting.burningPile.firebrand.height', 'spotting.burningPile.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft'],
  ]]],
  ['spotting.burningPile.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift', 'spotting.burningPile.spotDistance.flatTerrain', 'spotting.burningPile.firebrand.drift'],
  ]]],
  ['spotting.burningPile.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain', 'spotting.burningPile.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation'],
  ]]],
  ['spotting.crownFire.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['spotting.crownFire.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrift', 'spotting.crownFire.firebrandObject'],
  ]]],
  ['spotting.crownFire.firebrand.height', [['TreeHeight'], [
    ['finally', 'CrownSpotting.zdrop', 'spotting.crownFire.firebrandObject'],
  ]]],
  ['spotting.crownFire.firebrandObject', [['SpottingFirebrandObject'], [
    ['finally', 'CrownSpotting.flatDistance', 'site.canopy.crown.totalHeight', 'site.wind.speed.at20ft', 'spotting.crownFire.firelineIntensity'],
  ]]],
  ['spotting.crownFire.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'link.crownSpot', 'equals', 'linkedToCrownFire', 'Dag.bind', 'crown.fire.active.firelineIntensity'],
    ['finally', 'CrownSpotting.firelineIntensityThomas', 'site.fire.crown.flameLength'],
  ]]],
  ['spotting.crownFire.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrop', 'spotting.crownFire.firebrandObject'],
  ]]],
  ['spotting.crownFire.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xspot', 'spotting.crownFire.firebrandObject'],
  ]]],
  ['spotting.crownFire.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain', 'spotting.crownFire.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation'],
  ]]],
  ['spotting.surfaceFire.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.surfaceFire.firebrand.height', 'site.canopy.downwind.appliedHeight'],
  ]]],
  ['spotting.surfaceFire.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Spotting.surfaceFireFirebrandDrift', 'spotting.surfaceFire.firebrand.height', 'site.wind.speed.at20ft'],
  ]]],
  ['spotting.surfaceFire.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.surfaceFireFirebrandHeight', 'spotting.surfaceFire.firelineIntensity', 'site.wind.speed.at20ft'],
  ]]],
  ['spotting.surfaceFire.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'link.surfaceSpot', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity'],
  ]]],
  ['spotting.surfaceFire.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain', 'spotting.surfaceFire.firebrand.height', 'spotting.surfaceFire.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft'],
  ]]],
  ['spotting.surfaceFire.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift', 'spotting.surfaceFire.spotDistance.flatTerrain', 'spotting.surfaceFire.firebrand.drift'],
  ]]],
  ['spotting.surfaceFire.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain', 'spotting.surfaceFire.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation'],
  ]]],
  ['spotting.torchingTrees.count', [['TreeCount'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.torchingTrees.dbh', [['TreeDbh'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.torchingTrees.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight', 'spotting.torchingTrees.firebrand.height', 'site.canopy.downwind.appliedHeight'],
  ]]],
  ['spotting.torchingTrees.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['spotting.torchingTrees.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.torchingTreesFirebrandHeight', 'spotting.torchingTrees.height', 'spotting.torchingTrees.flameHeight', 'spotting.torchingTrees.flameDuration'],
  ]]],
  ['spotting.torchingTrees.flameDuration', [['FireFlameDuration'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameDuration', 'spotting.torchingTrees.species', 'spotting.torchingTrees.dbh', 'spotting.torchingTrees.count'],
  ]]],
  ['spotting.torchingTrees.flameHeight', [['FireFlameLength'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameHeight', 'spotting.torchingTrees.species', 'spotting.torchingTrees.dbh', 'spotting.torchingTrees.count'],
  ]]],
  ['spotting.torchingTrees.height', [['TreeHeight'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.torchingTrees.species', [['TorchingTreeSpeciesOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['spotting.torchingTrees.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain', 'spotting.torchingTrees.firebrand.height', 'spotting.torchingTrees.firebrand.criticalCoverHeight', 'site.wind.speed.at20ft'],
  ]]],
  ['spotting.torchingTrees.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift', 'spotting.torchingTrees.spotDistance.flatTerrain', 'spotting.torchingTrees.firebrand.drift'],
  ]]],
  ['spotting.torchingTrees.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain', 'spotting.torchingTrees.spotDistance.flatTerrainWithDrift', 'site.terrain.spotSourceLocation', 'site.terrain.ridgeValleyDistance', 'site.terrain.ridgeValleyElevation'],
  ]]],
  ['surface.fire.ellipse.axis.eccentricity', [['FireLengthToWidthRatio'], [
    ['finally', 'FireEllipse.eccentricity', 'surface.fire.ellipse.axis.lengthToWidthRatio'],
  ]]],
  ['surface.fire.ellipse.axis.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'site.fire.observed.effectiveWindSpeed'],
  ]]],
  ['surface.fire.ellipse.axis.f.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.fSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate'],
  ]]],
  ['surface.fire.ellipse.axis.g.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.gSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate', 'surface.fire.ellipse.back.spreadRate'],
  ]]],
  ['surface.fire.ellipse.axis.h.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.hSpreadRate', 'surface.fire.ellipse.axis.minor.spreadRate'],
  ]]],
  ['surface.fire.ellipse.axis.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.lengthToWidthRatio'],
    ['finally', 'Dag.bind', 'site.fire.observed.lengthToWidthRatio'],
  ]]],
  ['surface.fire.ellipse.axis.major.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.majorSpreadRate', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.back.spreadRate'],
  ]]],
  ['surface.fire.ellipse.axis.minor.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.minorSpreadRate', 'surface.fire.ellipse.axis.major.spreadRate', 'surface.fire.ellipse.axis.lengthToWidthRatio'],
  ]]],
  ['surface.fire.ellipse.back.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.back.spreadRate'],
  ]]],
  ['surface.fire.ellipse.back.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.fire.ellipse.back.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.back.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.back.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.back.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.back.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.back.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.back.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.back.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.backingSpreadRate', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.axis.eccentricity'],
  ]]],
  ['surface.fire.ellipse.back.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.back.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.beta.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.beta.psiSpreadRate'],
  ]]],
  ['surface.fire.ellipse.beta.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.fire.ellipse.beta.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.beta.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.beta.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.beta.psi', [['CompassAzimuth'], [
    ['finally', 'FireEllipse.psiFromTheta', 'surface.fire.ellipse.beta.theta', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate'],
  ]]],
  ['surface.fire.ellipse.beta.psiSpreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate', 'surface.fire.ellipse.beta.psi', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate'],
  ]]],
  ['surface.fire.ellipse.beta.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.beta.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.beta.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.beta.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.beta.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.betaSpreadRate', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.axis.eccentricity'],
  ]]],
  ['surface.fire.ellipse.beta.theta', [['CompassAzimuth'], [
    ['finally', 'FireEllipse.thetaFromBeta', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate'],
  ]]],
  ['surface.fire.ellipse.beta.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.beta.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.beta5.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.beta.spreadRate'],
  ]]],
  ['surface.fire.ellipse.beta5.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.fire.ellipse.beta5.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.beta5.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.beta5.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.beta5.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.beta5.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.beta5.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.beta5.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.beta5.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.fire.ellipse.beta.spreadRate'],
  ]]],
  ['surface.fire.ellipse.beta5.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.beta5.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.flank.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.flank.spreadRate'],
  ]]],
  ['surface.fire.ellipse.flank.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.fire.ellipse.flank.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.flank.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.flank.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.flank.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.flank.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.flank.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.flank.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.flank.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.flankingSpreadRate', 'surface.fire.ellipse.axis.minor.spreadRate'],
  ]]],
  ['surface.fire.ellipse.flank.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.flank.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.head.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.head.flameLength', [['FireFlameLength'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.flameLength'],
    ['finally', 'Dag.bind', 'site.fire.observed.flameLength'],
  ]]],
  ['surface.fire.ellipse.head.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.head.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.head.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.head.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.head.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.head.spreadRate', [['FireSpreadRate'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.spreadRate'],
    ['finally', 'Dag.bind', 'site.fire.observed.spreadRate'],
  ]]],
  ['surface.fire.ellipse.head.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.head.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.heading.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.fire.ellipse.heading.fromUpslope'],
  ]]],
  ['surface.fire.ellipse.heading.fromUpslope', [['CompassAzimuth'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.heading.fromUpslope'],
    ['finally', 'Dag.bind', 'site.fire.observed.heading.fromUpslope'],
  ]]],
  ['surface.fire.ellipse.map.area', [['MapArea'], [
    ['finally', 'FireEllipse.mapArea', 'surface.fire.ellipse.size.area', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.map.length', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.length', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.map.perimeter', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.perimeter', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.map.width', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.size.width', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.psi.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'FireEllipse.fliAtAzimuth', 'surface.fire.ellipse.head.firelineIntensity', 'surface.fire.ellipse.head.spreadRate', 'surface.fire.ellipse.psi.spreadRate'],
  ]]],
  ['surface.fire.ellipse.psi.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.fire.ellipse.psi.firelineIntensity'],
  ]]],
  ['surface.fire.ellipse.psi.mapDistance', [['MapDistance'], [
    ['finally', 'Calc.divide', 'surface.fire.ellipse.psi.spreadDistance', 'site.map.scale'],
  ]]],
  ['surface.fire.ellipse.psi.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.fire.ellipse.psi.firelineIntensity', 'surface.fire.ellipse.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.fire.ellipse.psi.spreadDistance', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.psi.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.psi.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FireEllipse.psiSpreadRate', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.axis.f.spreadRate', 'surface.fire.ellipse.axis.g.spreadRate', 'surface.fire.ellipse.axis.h.spreadRate'],
  ]]],
  ['surface.fire.ellipse.psi.treeMortality', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate', 'site.canopy.tree.species.fofem6.code', 'site.canopy.tree.dbh', 'site.canopy.crown.totalHeight', 'site.canopy.crown.baseHeight', 'surface.fire.ellipse.psi.scorchHeight'],
  ]]],
  ['surface.fire.ellipse.size.area', [['FireArea'], [
    ['finally', 'FireEllipse.area', 'surface.fire.ellipse.size.length', 'surface.fire.ellipse.axis.lengthToWidthRatio'],
  ]]],
  ['surface.fire.ellipse.size.length', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.axis.major.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.size.perimeter', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.perimeter', 'surface.fire.ellipse.size.length', 'surface.fire.ellipse.size.width'],
  ]]],
  ['surface.fire.ellipse.size.width', [['FireSpreadDistance'], [
    ['finally', 'FireEllipse.spreadDistance', 'surface.fire.ellipse.axis.minor.spreadRate', 'site.fire.time.sinceIgnition'],
  ]]],
  ['surface.fire.ellipse.vector.fromHead', [['CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Dag.bind', 'site.fire.vector.fromHead'],
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Compass.diff', 'surface.fire.ellipse.vector.fromUpslope', 'surface.fire.ellipse.heading.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'surface.fire.ellipse.heading.fromNorth'],
    ['finally', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'surface.fire.ellipse.heading.fromNorth'],
  ]]],
  ['surface.fire.ellipse.vector.fromNorth', [['CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Dag.bind', 'site.fire.vector.fromNorth'],
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Compass.sum', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.heading.fromNorth'],
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Compass.sum', 'surface.fire.ellipse.vector.fromUpslope', 'site.slope.direction.upslope'],
    ['finally', 'Compass.sum', 'surface.fire.ellipse.vector.fromUpslope', 'site.slope.direction.upslope'],
  ]]],
  ['surface.fire.ellipse.vector.fromUpslope', [['CompassAzimuth'], [
    ['when', 'configure.fire.vector', 'equals', 'fromUpslope', 'Dag.bind', 'site.fire.vector.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromHead', 'Compass.sum', 'surface.fire.ellipse.vector.fromHead', 'surface.fire.ellipse.heading.fromUpslope'],
    ['when', 'configure.fire.vector', 'equals', 'fromNorth', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'site.slope.direction.upslope'],
    ['finally', 'Compass.diff', 'surface.fire.ellipse.vector.fromNorth', 'site.slope.direction.upslope'],
  ]]],
  ['surface.fire.ellipse.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'link.fireEllipse', 'equals', 'linkedToSurfaceFire', 'Dag.bind', 'surface.weighted.fire.wind.speed.atMidflame'],
    ['finally', 'Dag.bind', 'site.wind.speed.atMidflame'],
  ]]],
  ['surface.primary.fuel.bed.bulkDensity', [['FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.ovendryLoad', 'surface.primary.fuel.bed.depth'],
  ]]],
  ['surface.primary.fuel.bed.dead.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', 'surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.dead.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent', '0.3', '0.4', '0.25'],
  ]]],
  ['surface.primary.fuel.bed.dead.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', 'surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion'],
  ]]],
  ['surface.primary.fuel.bed.dead.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition'],
  ]]],
  ['surface.primary.fuel.bed.dead.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.primary.fuel.bed.dead.effective.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.primary.fuel.bed.dead.moistureContent', 'surface.primary.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'dead'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class1.moistureContent', 'surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadFineLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad', 'surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', '640', '350', 'surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'dead'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class2.moistureContent', 'surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad', 'surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '109', '127', '140', '109'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'dead'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class3.moistureContent', 'surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl1h', '5'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadMediumLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', '0'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '30', '61', '2000', '1'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'dead'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class4.moistureContent', 'surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl100h', '5'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.deadLargeLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad', '0'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', '27', '2000', '1'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'dead'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.dead.particle.class5.moistureContent', 'surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass', 'surface.primary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.primary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['surface.primary.fuel.bed.dead.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.dead.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.primary.fuel.bed.dead.reactionIntensityDry', 'surface.primary.fuel.bed.dead.moistureDamping'],
  ]]],
  ['surface.primary.fuel.bed.dead.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.primary.fuel.bed.reactionVelocityOptimum', 'surface.primary.fuel.bed.dead.net.ovendryLoad', 'surface.primary.fuel.bed.dead.heatOfCombustion', 'surface.primary.fuel.bed.dead.mineralDamping'],
  ]]],
  ['surface.primary.fuel.bed.dead.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class1.sizeClass', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.sizeClass', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.sizeClass', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.sizeClass', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.sizeClass'],
  ]]],
  ['surface.primary.fuel.bed.dead.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.dead.surfaceArea', 'surface.primary.fuel.bed.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.dead.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.particle.class1.volume', 'surface.primary.fuel.bed.dead.particle.class2.volume', 'surface.primary.fuel.bed.dead.particle.class3.volume', 'surface.primary.fuel.bed.dead.particle.class4.volume', 'surface.primary.fuel.bed.dead.particle.class5.volume'],
  ]]],
  ['surface.primary.fuel.bed.depth', [['FuelBedDepth'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.depth', 'surface.primary.fuel.model.chaparral.parms.observed.depth', 'surface.primary.fuel.model.palmettoGallberry.derived.depth', 'surface.primary.fuel.model.westernAspen.derived.depth'],
  ]]],
  ['surface.primary.fuel.bed.heatOfPreignition', [['FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.heatOfPreignition', 'surface.primary.fuel.bed.live.heatOfPreignition'],
  ]]],
  ['surface.primary.fuel.bed.heatSink', [['FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'surface.primary.fuel.bed.heatOfPreignition', 'surface.primary.fuel.bed.bulkDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class4.effective.mineralContent', 'surface.primary.fuel.bed.live.particle.class5.effective.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'surface.primary.fuel.bed.live.extinction.moistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.moistureContent', 'surface.primary.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.live.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class4.heatOfCombustion', 'surface.primary.fuel.bed.live.particle.class5.heatOfCombustion'],
  ]]],
  ['surface.primary.fuel.bed.live.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class2.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class3.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class4.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class5.heatOfPreignition'],
  ]]],
  ['surface.primary.fuel.bed.live.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.primary.fuel.bed.live.effective.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.moistureContent', 'surface.primary.fuel.bed.live.particle.class2.moistureContent', 'surface.primary.fuel.bed.live.particle.class3.moistureContent', 'surface.primary.fuel.bed.live.particle.class4.moistureContent', 'surface.primary.fuel.bed.live.particle.class5.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.live.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.primary.fuel.bed.live.moistureContent', 'surface.primary.fuel.bed.live.extinction.moistureContent'],
  ]]],
  ['surface.primary.fuel.bed.live.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'live'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', '10500', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class1.moistureContent', 'surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.live.herb', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.herb'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.liveFineLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad', 'surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class1.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', '640', '350', '2800'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'live'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class2.moistureContent', 'surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad', 'surface.primary.fuel.model.chaparral.derived.liveSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad', 'surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class2.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', '127', '140', 'surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'live'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class3.moistureContent', 'surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '5', 'site.moisture.live.stem', 'site.moisture.live.stem', '5'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0', 'surface.primary.fuel.model.chaparral.derived.liveMediumLoad', 'surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', '0'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class3.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '1', '61', '2000', '1'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'live'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class4.moistureContent', 'surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '5', 'site.moisture.live.stem', '5', '5'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0', 'surface.primary.fuel.model.chaparral.derived.liveLargeLoad', '0', '0'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class4.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '1', '27', '1', '1'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.01', '0.035', '0.015', '0.01'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'live'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '32', '32', '46', '32'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion', '10500', '8300', '8000'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.primary.fuel.bed.live.particle.class5.moistureContent', 'surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '5', 'site.moisture.live.herb', '5', '5'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.total.mineralContent'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0', 'surface.primary.fuel.model.chaparral.derived.liveLeafLoad', '0', '0'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.primary.fuel.bed.live.particle.class5.sizeClass', 'surface.primary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '1', '2200', '1', '1'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.primary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.primary.fuel.bed.live.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.primary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.primary.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['surface.primary.fuel.bed.live.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.primary.fuel.bed.live.reactionIntensityDry', 'surface.primary.fuel.bed.live.moistureDamping'],
  ]]],
  ['surface.primary.fuel.bed.live.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.primary.fuel.bed.reactionVelocityOptimum', 'surface.primary.fuel.bed.live.net.ovendryLoad', 'surface.primary.fuel.bed.live.heatOfCombustion', 'surface.primary.fuel.bed.live.mineralDamping'],
  ]]],
  ['surface.primary.fuel.bed.live.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.particle.class1.sizeClass', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.sizeClass', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.sizeClass', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.sizeClass', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.sizeClass'],
  ]]],
  ['surface.primary.fuel.bed.live.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.live.surfaceArea', 'surface.primary.fuel.bed.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.live.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.live.particle.class1.volume', 'surface.primary.fuel.bed.live.particle.class2.volume', 'surface.primary.fuel.bed.live.particle.class3.volume', 'surface.primary.fuel.bed.live.particle.class4.volume', 'surface.primary.fuel.bed.live.particle.class5.volume'],
  ]]],
  ['surface.primary.fuel.bed.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'surface.primary.fuel.bed.reactionIntensity', 'surface.primary.fuel.bed.propagatingFluxRatio', 'surface.primary.fuel.bed.heatSink'],
  ]]],
  ['surface.primary.fuel.bed.open.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'surface.primary.fuel.bed.depth'],
  ]]],
  ['surface.primary.fuel.bed.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.ovendryLoad', 'surface.primary.fuel.bed.live.ovendryLoad'],
  ]]],
  ['surface.primary.fuel.bed.packingRatio', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'surface.primary.fuel.bed.dead.volume', 'surface.primary.fuel.bed.live.volume', 'surface.primary.fuel.bed.depth'],
  ]]],
  ['surface.primary.fuel.bed.packingRatio.optimum', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.packingRatio.ratio', [['FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'surface.primary.fuel.bed.packingRatio', 'surface.primary.fuel.bed.packingRatio.optimum'],
  ]]],
  ['surface.primary.fuel.bed.propagatingFluxRatio', [['FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.packingRatio'],
  ]]],
  ['surface.primary.fuel.bed.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.reactionIntensity', 'surface.primary.fuel.bed.live.reactionIntensity'],
  ]]],
  ['surface.primary.fuel.bed.reactionVelocityExponent', [['Factor'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.reactionVelocityMaximum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'surface.primary.fuel.bed.savr15'],
  ]]],
  ['surface.primary.fuel.bed.reactionVelocityOptimum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.bed.reactionVelocityMaximum', 'surface.primary.fuel.bed.reactionVelocityExponent'],
  ]]],
  ['surface.primary.fuel.bed.savr15', [['Factor'], [
    ['finally', 'FuelBed.savr15', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.bed.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.primary.fuel.bed.dead.surfaceArea', 'surface.primary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.primary.fuel.bed.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.primary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio', 'surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.fire.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'surface.primary.fuel.fire.spreadRate', 'surface.primary.fuel.fire.reactionIntensity', 'surface.primary.fuel.fire.flameResidenceTime'],
  ]]],
  ['surface.primary.fuel.fire.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.primary.fuel.fire.firelineIntensity'],
  ]]],
  ['surface.primary.fuel.fire.flameResidenceTime', [['FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.fire.heading.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.primary.fuel.fire.heading.fromUpslope'],
  ]]],
  ['surface.primary.fuel.fire.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'surface.primary.fuel.fire.maximumDirection.xComponent', 'surface.primary.fuel.fire.maximumDirection.yComponent', 'surface.primary.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'surface.primary.fuel.fire.reactionIntensity', 'surface.primary.fuel.fire.flameResidenceTime'],
  ]]],
  ['surface.primary.fuel.fire.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'surface.primary.fuel.fire.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.limit.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'surface.primary.fuel.fire.reactionIntensity'],
  ]]],
  ['surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded', [['EffectiveWindSpeedLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.primary.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.limit.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['surface.primary.fuel.fire.limit.spreadRate.exceeded', [['FireSpreadRateLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Factor'], [
    ['finally', 'SurfaceFire.phiEwFromEws', 'surface.primary.fuel.fire.limit.effectiveWindSpeed', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k'],
  ]]],
  ['surface.primary.fuel.fire.maximumDirection.slope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.slope.phi'],
  ]]],
  ['surface.primary.fuel.fire.maximumDirection.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'surface.primary.fuel.fire.maximumDirection.xComponent', 'surface.primary.fuel.fire.maximumDirection.yComponent'],
  ]]],
  ['surface.primary.fuel.fire.maximumDirection.wind.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.wind.phi'],
  ]]],
  ['surface.primary.fuel.fire.maximumDirection.xComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'surface.primary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.primary.fuel.fire.maximumDirection.slope.spreadRate', 'surface.primary.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['surface.primary.fuel.fire.maximumDirection.yComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'surface.primary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.primary.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['surface.primary.fuel.fire.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.bed.noWindNoSlope.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.phiEffectiveWind', [['Factor'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.phiEffectiveWind'],
  ]]],
  ['surface.primary.fuel.fire.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.bed.reactionIntensity'],
  ]]],
  ['surface.primary.fuel.fire.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.primary.fuel.fire.firelineIntensity', 'surface.primary.fuel.fire.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.primary.fuel.fire.slope.k', [['Factor'], [
    ['finally', 'FuelBed.slopeK', 'surface.primary.fuel.bed.packingRatio'],
  ]]],
  ['surface.primary.fuel.fire.slope.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiSlope', 'surface.primary.fuel.fire.slope.ratio', 'surface.primary.fuel.fire.slope.k'],
  ]]],
  ['surface.primary.fuel.fire.slope.ratio', [['SlopeSteepnessRatio'], [
    ['finally', 'Dag.bind', 'site.slope.steepness.ratio'],
  ]]],
  ['surface.primary.fuel.fire.spread.step1.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step1.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.primary.fuel.fire.spread.step1.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'surface.primary.fuel.fire.wind.phi', 'surface.primary.fuel.fire.slope.phi'],
  ]]],
  ['surface.primary.fuel.fire.spread.step1.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step1.phiEffectiveWind'],
  ]]],
  ['surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.primary.fuel.fire.spread.step2.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step2.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.spread.step2.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.primary.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3a.phiEffectiveWind', [['Factor'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3a.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Math.min', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.limit.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step3b.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3b.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.spread.step3b.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.primary.fuel.fire.spread.step2.spreadRate', 'surface.primary.fuel.fire.spread.step2.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.spread.step4.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.primary.fuel.fire.spread.step4.phiEffectiveWind', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.primary.fuel.fire.spread.step4.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.primary.fuel.fire.noWindNoSlope.spreadRate', 'surface.primary.fuel.fire.spread.step4.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.spread.step4.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.primary.fuel.fire.spread.step3a.spreadRate', 'surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed'],
  ]]],
  ['surface.primary.fuel.fire.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.primary.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.primary.fuel.fire.wind.factor.b', [['Factor'], [
    ['finally', 'FuelBed.windB', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.fire.wind.factor.c', [['Factor'], [
    ['finally', 'FuelBed.windC', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.fire.wind.factor.e', [['Factor'], [
    ['finally', 'FuelBed.windE', 'surface.primary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.primary.fuel.fire.wind.factor.i', [['Factor'], [
    ['finally', 'FuelBed.windI', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.fire.wind.factor.e', 'surface.primary.fuel.fire.wind.factor.c'],
  ]]],
  ['surface.primary.fuel.fire.wind.factor.k', [['Factor'], [
    ['finally', 'FuelBed.windK', 'surface.primary.fuel.bed.packingRatio.ratio', 'surface.primary.fuel.fire.wind.factor.e', 'surface.primary.fuel.fire.wind.factor.c'],
  ]]],
  ['surface.primary.fuel.fire.wind.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Dag.bind', 'site.wind.direction.heading.fromUpslope'],
  ]]],
  ['surface.primary.fuel.fire.wind.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiWind', 'surface.primary.fuel.fire.wind.speed.atMidflame', 'surface.primary.fuel.fire.wind.factor.b', 'surface.primary.fuel.fire.wind.factor.k'],
  ]]],
  ['surface.primary.fuel.fire.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor'],
  ]]],
  ['surface.primary.fuel.fire.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['when', 'configure.fuel.windSpeedAdjustmentFactor', 'equals', 'input', 'Dag.bind', 'site.windSpeedAdjustmentFactor'],
    ['finally', 'FuelBed.windSpeedAdjustmentFactor', 'site.canopy.fuel.isSheltered', 'site.canopy.sheltered.windSpeedAdjustmentFactor', 'surface.primary.fuel.bed.open.windSpeedAdjustmentFactor'],
  ]]],
  ['surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'BehaveFuel.deadHerbLoad', 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.primary.fuel.model.behave.parms.cured.herb.fraction'],
  ]]],
  ['surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'BehaveFuel.liveHerbLoad', 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.primary.fuel.model.behave.parms.cured.herb.fraction'],
  ]]],
  ['surface.primary.fuel.model.behave.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'behave'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.cured.herb.fraction', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.curedHerbFraction', 'equals', 'estimated', 'BehaveFuel.curedHerbFraction', 'site.moisture.live.herb'],
    ['finally', 'Dag.input'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDeadMext', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.25'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead100Load', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead10Load', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Load', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.depth', [['FuelBedDepth'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveDepth', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.live.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.catalogKey', [['FuelModelKeyOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.age', [['FuelAge'], [
    ['finally', 'ChaparralFuel.age', 'surface.primary.fuel.model.chaparral.parms.observed.depth', 'surface.primary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.averageMortality', [['MortalityFraction'], [
    ['finally', 'ChaparralFuel.deadFractionAverageMortality', 'surface.primary.fuel.model.chaparral.derived.age'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.deadFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass1Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.deadLargeLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass4Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.deadLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadLoad', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.deadMediumLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass3Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.deadSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass2Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.depth', [['FuelBedDepth'], [
    ['finally', 'ChaparralFuel.fuelDepth', 'surface.primary.fuel.model.chaparral.derived.age', 'surface.primary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass1Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLargeLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass4Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLeafLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass5Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveLoad', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveMediumLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass3Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.liveSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass2Load', 'surface.primary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.severeMortality', [['MortalityFraction'], [
    ['finally', 'ChaparralFuel.deadFractionSevereMortality', 'surface.primary.fuel.model.chaparral.derived.age'],
  ]]],
  ['surface.primary.fuel.model.chaparral.derived.totalLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.totalLoad', 'surface.primary.fuel.model.chaparral.derived.age', 'surface.primary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.primary.fuel.model.chaparral.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'chaparral'],
  ]]],
  ['surface.primary.fuel.model.chaparral.parms.applied.totalLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.chaparralTotalLoad', 'equals', 'estimated', 'Dag.bind', 'surface.primary.fuel.model.chaparral.derived.totalLoad'],
    ['finally', 'Dag.bind', 'surface.primary.fuel.model.chaparral.parms.observed.totalLoad'],
  ]]],
  ['surface.primary.fuel.model.chaparral.parms.chaparralType', [['ChaparralTypeOption'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralFuelType', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 'chamise'],
  ]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.depth', [['FuelBedDepth'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralDepth', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.primary.fuel.model.chaparral.parms.observed.totalLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.chaparralTotalLoad', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.domain', [['FuelModelDomainOption'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.domain', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'behave', 'Dag.fixed', 'behave'],
    ['when', 'configure.fuel.primary', 'equals', 'chaparral', 'Dag.fixed', 'chaparral'],
    ['when', 'configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.fixed', 'palmettoGallberry'],
    ['when', 'configure.fuel.primary', 'equals', 'westernAspen', 'Dag.fixed', 'westernAspen'],
    ['finally', 'Dag.fixed', 'none'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadFineLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadFoliageLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadLitterLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.basalArea'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.depth', [['FuelBedDepth'], [
    ['finally', 'PalmettoGallberryFuel.fuelDepth', 'surface.primary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveFineLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveFoliageLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.cover', 'surface.primary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveSmallLoad', 'surface.primary.fuel.model.palmettoGallberry.parms.age', 'surface.primary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'palmettoGallberry'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.age', [['FuelAge'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryAge', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.basalArea', [['FuelBasalArea'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryBasalArea', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.cover', [['FuelCoverFraction'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryCover', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.primary.fuel.model.palmettoGallberry.parms.height', [['FuelBedDepth'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryHeight', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadFineLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadFineSavr', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadSmallLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.depth', [['FuelBedDepth'], [
    ['finally', 'WesternAspenFuel.depth', 'surface.primary.fuel.model.westernAspen.parms.aspenType'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveHerbLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveStemLoad', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveStemSavr', 'surface.primary.fuel.model.westernAspen.parms.aspenType', 'surface.primary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'westernAspen'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.parms.aspenType', [['WesternAspenTypeOption'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 'aspenShrub'],
  ]]],
  ['surface.primary.fuel.model.westernAspen.parms.curingLevel', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.primary', 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel', 'surface.primary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.primary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.bed.bulkDensity', [['FuelBedBulkDensity'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.ovendryLoad', 'surface.secondary.fuel.bed.depth'],
  ]]],
  ['surface.secondary.fuel.bed.dead.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent', 'surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent', '0.3', '0.4', '0.25'],
  ]]],
  ['surface.secondary.fuel.bed.dead.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion', 'surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion'],
  ]]],
  ['surface.secondary.fuel.bed.dead.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition'],
  ]]],
  ['surface.secondary.fuel.bed.dead.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.secondary.fuel.bed.dead.effective.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.secondary.fuel.bed.dead.moistureContent', 'surface.secondary.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'dead'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class1.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl1h'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad', 'surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', '640', '350', 'surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class1.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'dead'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class2.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl10h'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad', 'surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '109', '127', '140', '109'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class2.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'dead'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class3.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl10h', 'site.moisture.dead.tl1h', '5'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadMediumLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', '0'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '30', '61', '2000', '1'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class3.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.01', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'dead'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '30', '32'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', '8000', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class4.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.dead.tl1h', 'site.moisture.dead.tl100h', 'site.moisture.dead.tl100h', '5'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.deadLargeLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad', '0'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', '27', '2000', '1'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class4.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'dead'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelWaterLoad', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'Dag.fixed', '32'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.dead.particle.class5.moistureContent', 'surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.fixed', '5'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass', 'surface.secondary.fuel.bed.dead.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.dead.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'Dag.fixed', '0.0555'],
  ]]],
  ['surface.secondary.fuel.bed.dead.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.dead.particle.class5.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.dead.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.secondary.fuel.bed.dead.reactionIntensityDry', 'surface.secondary.fuel.bed.dead.moistureDamping'],
  ]]],
  ['surface.secondary.fuel.bed.dead.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.secondary.fuel.bed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.dead.net.ovendryLoad', 'surface.secondary.fuel.bed.dead.heatOfCombustion', 'surface.secondary.fuel.bed.dead.mineralDamping'],
  ]]],
  ['surface.secondary.fuel.bed.dead.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class1.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.sizeClass', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.sizeClass'],
  ]]],
  ['surface.secondary.fuel.bed.dead.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.dead.surfaceArea', 'surface.secondary.fuel.bed.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.dead.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.particle.class1.volume', 'surface.secondary.fuel.bed.dead.particle.class2.volume', 'surface.secondary.fuel.bed.dead.particle.class3.volume', 'surface.secondary.fuel.bed.dead.particle.class4.volume', 'surface.secondary.fuel.bed.dead.particle.class5.volume'],
  ]]],
  ['surface.secondary.fuel.bed.depth', [['FuelBedDepth'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.depth', 'surface.secondary.fuel.model.chaparral.parms.observed.depth', 'surface.secondary.fuel.model.palmettoGallberry.derived.depth', 'surface.secondary.fuel.model.westernAspen.derived.depth'],
  ]]],
  ['surface.secondary.fuel.bed.heatOfPreignition', [['FuelBedHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.heatOfPreignition', 'surface.secondary.fuel.bed.live.heatOfPreignition'],
  ]]],
  ['surface.secondary.fuel.bed.heatSink', [['FuelHeatSink'], [
    ['finally', 'FuelBed.heatSink', 'surface.secondary.fuel.bed.heatOfPreignition', 'surface.secondary.fuel.bed.bulkDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent', 'surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.extinction.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelBed.extinctionMoistureContent', 'surface.secondary.fuel.bed.live.extinction.moistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent', 'surface.secondary.fuel.bed.dead.extinction.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.extinction.moistureContentFactor', [['Factor'], [
    ['finally', 'FuelBed.extinctionMoistureContentFactor', 'surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad', 'surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion', 'surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion'],
  ]]],
  ['surface.secondary.fuel.bed.live.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition'],
  ]]],
  ['surface.secondary.fuel.bed.live.mineralDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.mineralDamping', 'surface.secondary.fuel.bed.live.effective.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.moistureContent', 'surface.secondary.fuel.bed.live.particle.class2.moistureContent', 'surface.secondary.fuel.bed.live.particle.class3.moistureContent', 'surface.secondary.fuel.bed.live.particle.class4.moistureContent', 'surface.secondary.fuel.bed.live.particle.class5.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.moistureDamping', [['FireDampingCoefficient'], [
    ['finally', 'FuelBed.moistureDamping', 'surface.secondary.fuel.bed.live.moistureContent', 'surface.secondary.fuel.bed.live.extinction.moistureContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'live'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', '10500', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class1.moistureContent', 'surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.live.herb', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.herb'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.liveFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad', 'surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', '640', '350', '2800'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class1.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class1.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class1.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'live'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class2.moistureContent', 'surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem', 'site.moisture.live.stem'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad', 'surface.secondary.fuel.model.chaparral.derived.liveSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad', 'surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', '127', '140', 'surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class2.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class2.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class2.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'live'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class3.moistureContent', 'surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '5', 'site.moisture.live.stem', 'site.moisture.live.stem', '5'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0', 'surface.secondary.fuel.model.chaparral.derived.liveMediumLoad', 'surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', '0'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '1', '61', '2000', '1'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class3.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class3.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class3.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.015', '0.015', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'live'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '46', '46', '32'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', '9550', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class4.moistureContent', 'surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '5', 'site.moisture.live.stem', '5', '5'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0', 'surface.secondary.fuel.model.chaparral.derived.liveLargeLoad', '0', '0'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '1', '27', '1', '1'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class4.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class4.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class4.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent', [['FuelEffectiveMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.01', '0.035', '0.015', '0.01'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber', [['FuelEffectiveHeatingNumber'], [
    ['finally', 'FuelParticle.effectiveHeatingNumber', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.effectiveFuelLoad', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'live'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.fiberDensity', [['FuelParticleFiberDensity'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '32', '32', '46', '32'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', 'surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', '10500', '8300', '8000'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition', [['FuelHeatOfPreignition'], [
    ['finally', 'FuelParticle.heatOfPreignition', 'surface.secondary.fuel.bed.live.particle.class5.moistureContent', 'surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '5', 'site.moisture.live.herb', '5', '5'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.netOvendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.total.mineralContent'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0', 'surface.secondary.fuel.model.chaparral.derived.liveLeafLoad', '0', '0'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.sizeClass', [['FuelSizeClassIndex'], [
    ['finally', 'FuelParticle.sizeClass', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.sizeClassWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass', 'surface.secondary.fuel.bed.live.sizeClass.weightingFactor'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'FuelParticle.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelParticle.surfaceAreaWeightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '1', '2200', '1', '1'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.total.mineralContent', [['FuelTotalMineralContent'], [
    ['finally', 'FuelParticle.selectByDomain', 'surface.secondary.fuel.model.domain', '0.0555', '0.055', '0.03', '0.055'],
  ]]],
  ['surface.secondary.fuel.bed.live.particle.class5.volume', [['FuelVolume'], [
    ['finally', 'FuelParticle.volume', 'surface.secondary.fuel.bed.live.particle.class5.ovendryLoad', 'surface.secondary.fuel.bed.live.particle.class5.fiberDensity'],
  ]]],
  ['surface.secondary.fuel.bed.live.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.multiply', 'surface.secondary.fuel.bed.live.reactionIntensityDry', 'surface.secondary.fuel.bed.live.moistureDamping'],
  ]]],
  ['surface.secondary.fuel.bed.live.reactionIntensityDry', [['FireReactionIntensity'], [
    ['finally', 'FuelBed.reactionIntensityDry', 'surface.secondary.fuel.bed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.live.net.ovendryLoad', 'surface.secondary.fuel.bed.live.heatOfCombustion', 'surface.secondary.fuel.bed.live.mineralDamping'],
  ]]],
  ['surface.secondary.fuel.bed.live.sizeClass.weightingFactor', [['WeightingFactor'], [
    ['finally', 'FuelBed.sizeClassWeightingFactorArray', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class1.sizeClass', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.sizeClass', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.sizeClass', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.sizeClass', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.sizeClass'],
  ]]],
  ['surface.secondary.fuel.bed.live.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', [['WeightingFactor'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.live.surfaceArea', 'surface.secondary.fuel.bed.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.live.volume', [['FuelBedDepth'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.live.particle.class1.volume', 'surface.secondary.fuel.bed.live.particle.class2.volume', 'surface.secondary.fuel.bed.live.particle.class3.volume', 'surface.secondary.fuel.bed.live.particle.class4.volume', 'surface.secondary.fuel.bed.live.particle.class5.volume'],
  ]]],
  ['surface.secondary.fuel.bed.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'FuelBed.noWindNoSlopeSpreadRate', 'surface.secondary.fuel.bed.reactionIntensity', 'surface.secondary.fuel.bed.propagatingFluxRatio', 'surface.secondary.fuel.bed.heatSink'],
  ]]],
  ['surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'FuelBed.openWindSpeedAdjustmentFactor', 'surface.secondary.fuel.bed.depth'],
  ]]],
  ['surface.secondary.fuel.bed.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.ovendryLoad', 'surface.secondary.fuel.bed.live.ovendryLoad'],
  ]]],
  ['surface.secondary.fuel.bed.packingRatio', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.packingRatio', 'surface.secondary.fuel.bed.dead.volume', 'surface.secondary.fuel.bed.live.volume', 'surface.secondary.fuel.bed.depth'],
  ]]],
  ['surface.secondary.fuel.bed.packingRatio.optimum', [['FuelBedPackingRatio'], [
    ['finally', 'FuelBed.optimumPackingRatio', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.packingRatio.ratio', [['FuelBedPackingRatio'], [
    ['finally', 'Calc.divide', 'surface.secondary.fuel.bed.packingRatio', 'surface.secondary.fuel.bed.packingRatio.optimum'],
  ]]],
  ['surface.secondary.fuel.bed.propagatingFluxRatio', [['FirePropagatingFluxRatio'], [
    ['finally', 'FuelBed.propagatingFluxRatio', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.packingRatio'],
  ]]],
  ['surface.secondary.fuel.bed.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.reactionIntensity', 'surface.secondary.fuel.bed.live.reactionIntensity'],
  ]]],
  ['surface.secondary.fuel.bed.reactionVelocityExponent', [['Factor'], [
    ['finally', 'FuelBed.reactionVelocityExponent', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.reactionVelocityMaximum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityMaximum', 'surface.secondary.fuel.bed.savr15'],
  ]]],
  ['surface.secondary.fuel.bed.reactionVelocityOptimum', [['FireReactionVelocity'], [
    ['finally', 'FuelBed.reactionVelocityOptimum', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.bed.reactionVelocityMaximum', 'surface.secondary.fuel.bed.reactionVelocityExponent'],
  ]]],
  ['surface.secondary.fuel.bed.savr15', [['Factor'], [
    ['finally', 'FuelBed.savr15', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.bed.surfaceArea', [['FuelSurfaceArea'], [
    ['finally', 'Calc.sum', 'surface.secondary.fuel.bed.dead.surfaceArea', 'surface.secondary.fuel.bed.live.surfaceArea'],
  ]]],
  ['surface.secondary.fuel.bed.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['finally', 'Calc.sumOfProducts', 'surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.live.surfaceArea.weightingFactor', 'surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio', 'surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.fire.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.firelineIntensity', [['FireFirelineIntensity'], [
    ['finally', 'SurfaceFire.firelineIntensity', 'surface.secondary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.flameResidenceTime'],
  ]]],
  ['surface.secondary.fuel.fire.flameLength', [['FireFlameLength'], [
    ['finally', 'SurfaceFire.flameLength', 'surface.secondary.fuel.fire.firelineIntensity'],
  ]]],
  ['surface.secondary.fuel.fire.flameResidenceTime', [['FireResidenceTime'], [
    ['finally', 'FuelBed.taur', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.fire.heading.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Compass.sum', 'site.slope.direction.upslope', 'surface.secondary.fuel.fire.heading.fromUpslope'],
  ]]],
  ['surface.secondary.fuel.fire.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'SurfaceFire.spreadDirectionFromUpslope', 'surface.secondary.fuel.fire.maximumDirection.xComponent', 'surface.secondary.fuel.fire.maximumDirection.yComponent', 'surface.secondary.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['finally', 'FuelBed.heatPerUnitArea', 'surface.secondary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.flameResidenceTime'],
  ]]],
  ['surface.secondary.fuel.fire.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['finally', 'SurfaceFire.lengthToWidthRatio', 'surface.secondary.fuel.fire.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.limit.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeedLimit', 'surface.secondary.fuel.fire.reactionIntensity'],
  ]]],
  ['surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded', [['EffectiveWindSpeedLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.limit.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['surface.secondary.fuel.fire.limit.spreadRate.exceeded', [['FireSpreadRateLimitIsExceeded'], [
    ['finally', 'Calc.greaterThan', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient', [['Factor'], [
    ['finally', 'SurfaceFire.phiEwFromEws', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.k'],
  ]]],
  ['surface.secondary.fuel.fire.maximumDirection.slope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSlopeSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.slope.phi'],
  ]]],
  ['surface.secondary.fuel.fire.maximumDirection.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionSpreadRate', 'surface.secondary.fuel.fire.maximumDirection.xComponent', 'surface.secondary.fuel.fire.maximumDirection.yComponent'],
  ]]],
  ['surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumDirectionWindSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.wind.phi'],
  ]]],
  ['surface.secondary.fuel.fire.maximumDirection.xComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionXComponent', 'surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.secondary.fuel.fire.maximumDirection.slope.spreadRate', 'surface.secondary.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['surface.secondary.fuel.fire.maximumDirection.yComponent', [['Factor'], [
    ['finally', 'SurfaceFire.maximumDirectionYComponent', 'surface.secondary.fuel.fire.maximumDirection.wind.spreadRate', 'surface.secondary.fuel.fire.wind.heading.fromUpslope'],
  ]]],
  ['surface.secondary.fuel.fire.noWindNoSlope.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Dag.bind', 'surface.secondary.fuel.bed.noWindNoSlope.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.phiEffectiveWind', [['Factor'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.phiEffectiveWind'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind'],
  ]]],
  ['surface.secondary.fuel.fire.reactionIntensity', [['FireReactionIntensity'], [
    ['finally', 'Dag.bind', 'surface.secondary.fuel.bed.reactionIntensity'],
  ]]],
  ['surface.secondary.fuel.fire.scorchHeight', [['FireScorchHeight'], [
    ['finally', 'SurfaceFire.scorchHeight', 'surface.secondary.fuel.fire.firelineIntensity', 'surface.secondary.fuel.fire.wind.speed.atMidflame', 'site.temperature.air'],
  ]]],
  ['surface.secondary.fuel.fire.slope.k', [['Factor'], [
    ['finally', 'FuelBed.slopeK', 'surface.secondary.fuel.bed.packingRatio'],
  ]]],
  ['surface.secondary.fuel.fire.slope.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiSlope', 'surface.secondary.fuel.fire.slope.ratio', 'surface.secondary.fuel.fire.slope.k'],
  ]]],
  ['surface.secondary.fuel.fire.slope.ratio', [['SlopeSteepnessRatio'], [
    ['finally', 'Dag.bind', 'site.slope.steepness.ratio'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step1.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step1.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step1.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.phi', 'surface.secondary.fuel.fire.slope.phi'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step1.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.maximumSpreadRate', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step1.phiEffectiveWind'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step2.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step2.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithCrossSlopeWind', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.maximumDirection.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3a.phiEffectiveWind', [['Factor'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.phiEffectiveWind', 'surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3a.spreadRate', [['FireSpreadRate'], [
    ['finally', 'Math.min', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.limit.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step3b.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.secondary.fuel.fire.spread.step2.spreadRate', 'surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'SurfaceFire.effectiveWindSpeed', 'surface.secondary.fuel.fire.spread.step4.phiEffectiveWind', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.i'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step4.phiEffectiveWind', [['Factor'], [
    ['finally', 'SurfaceFire.phiEffectiveWindInferred', 'surface.secondary.fuel.fire.noWindNoSlope.spreadRate', 'surface.secondary.fuel.fire.spread.step4.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.spread.step4.spreadRate', [['FireSpreadRate'], [
    ['finally', 'SurfaceFire.spreadRateWithRosLimitApplied', 'surface.secondary.fuel.fire.spread.step3a.spreadRate', 'surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed'],
  ]]],
  ['surface.secondary.fuel.fire.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fire.effectiveWindSpeedLimit', 'equals', 'applied', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step4.spreadRate'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.fire.spread.step3b.spreadRate'],
  ]]],
  ['surface.secondary.fuel.fire.wind.factor.b', [['Factor'], [
    ['finally', 'FuelBed.windB', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.fire.wind.factor.c', [['Factor'], [
    ['finally', 'FuelBed.windC', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.fire.wind.factor.e', [['Factor'], [
    ['finally', 'FuelBed.windE', 'surface.secondary.fuel.bed.surfaceAreaToVolumeRatio'],
  ]]],
  ['surface.secondary.fuel.fire.wind.factor.i', [['Factor'], [
    ['finally', 'FuelBed.windI', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.fire.wind.factor.e', 'surface.secondary.fuel.fire.wind.factor.c'],
  ]]],
  ['surface.secondary.fuel.fire.wind.factor.k', [['Factor'], [
    ['finally', 'FuelBed.windK', 'surface.secondary.fuel.bed.packingRatio.ratio', 'surface.secondary.fuel.fire.wind.factor.e', 'surface.secondary.fuel.fire.wind.factor.c'],
  ]]],
  ['surface.secondary.fuel.fire.wind.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Dag.bind', 'site.wind.direction.heading.fromUpslope'],
  ]]],
  ['surface.secondary.fuel.fire.wind.phi', [['Factor'], [
    ['finally', 'SurfaceFire.phiWind', 'surface.secondary.fuel.fire.wind.speed.atMidflame', 'surface.secondary.fuel.fire.wind.factor.b', 'surface.secondary.fuel.fire.wind.factor.k'],
  ]]],
  ['surface.secondary.fuel.fire.wind.speed.atMidflame', [['WindSpeed'], [
    ['when', 'configure.wind.speed', 'equals', 'atMidflame', 'Dag.bind', 'site.wind.speed.atMidflame'],
    ['finally', 'Wind.speedAtMidflame', 'site.wind.speed.at20ft', 'surface.secondary.fuel.fire.windSpeedAdjustmentFactor'],
  ]]],
  ['surface.secondary.fuel.fire.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['when', 'configure.fuel.windSpeedAdjustmentFactor', 'equals', 'input', 'Dag.bind', 'site.windSpeedAdjustmentFactor'],
    ['finally', 'FuelBed.windSpeedAdjustmentFactor', 'site.canopy.fuel.isSheltered', 'site.canopy.sheltered.windSpeedAdjustmentFactor', 'surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor'],
  ]]],
  ['surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'BehaveFuel.deadHerbLoad', 'surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.secondary.fuel.model.behave.parms.cured.herb.fraction'],
  ]]],
  ['surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'BehaveFuel.liveHerbLoad', 'surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', 'surface.secondary.fuel.model.behave.parms.cured.herb.fraction'],
  ]]],
  ['surface.secondary.fuel.model.behave.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'behave'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.cured.herb.fraction', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.curedHerbFraction', 'equals', 'estimated', 'BehaveFuel.curedHerbFraction', 'site.moisture.live.herb'],
    ['finally', 'Dag.input'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent', [['FuelMoistureContent'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDeadMext', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.25'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead100Load', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead10Load', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Load', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.depth', [['FuelBedDepth'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveDepth', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.live.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '8000'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio', [['FuelSurfaceAreaToVolumeRatio'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '1'],
  ]]],
  ['surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.catalogKey', [['FuelModelKeyOption'], [
    ['finally', 'Dag.input'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.age', [['FuelAge'], [
    ['finally', 'ChaparralFuel.age', 'surface.secondary.fuel.model.chaparral.parms.observed.depth', 'surface.secondary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.averageMortality', [['MortalityFraction'], [
    ['finally', 'ChaparralFuel.deadFractionAverageMortality', 'surface.secondary.fuel.model.chaparral.derived.age'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass1Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadLargeLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass4Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadLoad', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadMediumLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass3Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.deadSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.deadClass2Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.depth', [['FuelBedDepth'], [
    ['finally', 'ChaparralFuel.fuelDepth', 'surface.secondary.fuel.model.chaparral.derived.age', 'surface.secondary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass1Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLargeLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass4Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLeafLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass5Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveLoad', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveMediumLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass3Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.liveSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.liveClass2Load', 'surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', 'surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.severeMortality', [['MortalityFraction'], [
    ['finally', 'ChaparralFuel.deadFractionSevereMortality', 'surface.secondary.fuel.model.chaparral.derived.age'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.derived.totalLoad', [['FuelOvendryLoad'], [
    ['finally', 'ChaparralFuel.totalLoad', 'surface.secondary.fuel.model.chaparral.derived.age', 'surface.secondary.fuel.model.chaparral.parms.chaparralType'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'chaparral'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.parms.applied.totalLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.chaparralTotalLoad', 'equals', 'estimated', 'Dag.bind', 'surface.secondary.fuel.model.chaparral.derived.totalLoad'],
    ['finally', 'Dag.bind', 'surface.secondary.fuel.model.chaparral.parms.observed.totalLoad'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.parms.chaparralType', [['ChaparralTypeOption'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralFuelType', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', 'chamise'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.depth', [['FuelBedDepth'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralDepth', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.secondary.fuel.model.chaparral.parms.observed.totalLoad', [['FuelOvendryLoad'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.chaparralTotalLoad', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'chaparral', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.domain', [['FuelModelDomainOption'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.domain', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'behave', 'Dag.fixed', 'behave'],
    ['when', 'configure.fuel.secondary', 'equals', 'chaparral', 'Dag.fixed', 'chaparral'],
    ['when', 'configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.fixed', 'palmettoGallberry'],
    ['when', 'configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.fixed', 'westernAspen'],
    ['finally', 'Dag.fixed', 'none'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadFoliageLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadLitterLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.basalArea'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.deadSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.depth', [['FuelBedDepth'], [
    ['finally', 'PalmettoGallberryFuel.fuelDepth', 'surface.secondary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveFineLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveFoliageLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.cover', 'surface.secondary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad', [['FuelOvendryLoad'], [
    ['finally', 'PalmettoGallberryFuel.liveSmallLoad', 'surface.secondary.fuel.model.palmettoGallberry.parms.age', 'surface.secondary.fuel.model.palmettoGallberry.parms.height'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'palmettoGallberry'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.age', [['FuelAge'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryAge', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.basalArea', [['FuelBasalArea'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryBasalArea', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.cover', [['FuelCoverFraction'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryCover', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.secondary.fuel.model.palmettoGallberry.parms.height', [['FuelBedDepth'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.palmettoGallberryHeight', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'palmettoGallberry', 'Dag.input'],
    ['finally', 'Dag.fixed', '0.01'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadFineLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadFineSavr', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.deadSmallLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.depth', [['FuelBedDepth'], [
    ['finally', 'WesternAspenFuel.depth', 'surface.secondary.fuel.model.westernAspen.parms.aspenType'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveHerbLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveStemLoad', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio', [['FuelOvendryLoad'], [
    ['finally', 'WesternAspenFuel.liveStemSavr', 'surface.secondary.fuel.model.westernAspen.parms.aspenType', 'surface.secondary.fuel.model.westernAspen.parms.curingLevel'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.domain', [['FuelModelDomainOption'], [
    ['finally', 'Dag.fixed', 'westernAspen'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.parms.aspenType', [['WesternAspenTypeOption'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', 'aspenShrub'],
  ]]],
  ['surface.secondary.fuel.model.westernAspen.parms.curingLevel', [['FuelDeadFraction'], [
    ['when', 'configure.fuel.secondary', 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel', 'surface.secondary.fuel.model.catalogKey'],
    ['when', 'configure.fuel.secondary', 'equals', 'westernAspen', 'Dag.input'],
    ['finally', 'Dag.fixed', '0'],
  ]]],
  ['surface.weighted.fire.arithmeticMean.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'SurfaceFire.arithmeticMeanSpreadRate', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate'],
  ]]],
  ['surface.weighted.fire.effectiveWindSpeed', [['WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.effectiveWindSpeed'],
  ]]],
  ['surface.weighted.fire.expectedValue.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'SurfaceFire.expectedValueSpreadRateMOCK', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate'],
  ]]],
  ['surface.weighted.fire.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.firelineIntensity'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.firelineIntensity', 'surface.secondary.fuel.fire.firelineIntensity'],
  ]]],
  ['surface.weighted.fire.flameLength', [['FireFlameLength'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.flameLength'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.flameLength', 'surface.secondary.fuel.fire.flameLength'],
  ]]],
  ['surface.weighted.fire.harmonicMean.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.spreadRate'],
    ['finally', 'SurfaceFire.harmonicMeanSpreadRate', 'surface.weighted.fire.primaryCover', 'surface.primary.fuel.fire.spreadRate', 'surface.secondary.fuel.fire.spreadRate'],
  ]]],
  ['surface.weighted.fire.heading.fromNorth', [['CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromNorth'],
  ]]],
  ['surface.weighted.fire.heading.fromUpslope', [['CompassAzimuth'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.heading.fromUpslope'],
  ]]],
  ['surface.weighted.fire.heatPerUnitArea', [['FireHeatPerUnitArea'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.heatPerUnitArea'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.heatPerUnitArea', 'surface.secondary.fuel.fire.heatPerUnitArea'],
  ]]],
  ['surface.weighted.fire.lengthToWidthRatio', [['FireLengthToWidthRatio'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.lengthToWidthRatio'],
  ]]],
  ['surface.weighted.fire.limit.effectiveWindSpeed', [['WindSpeed'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed'],
    ['finally', 'Math.min', 'surface.primary.fuel.fire.limit.effectiveWindSpeed', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed'],
  ]]],
  ['surface.weighted.fire.limit.effectiveWindSpeed.exceeded', [['EffectiveWindSpeedLimitIsExceeded'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded'],
    ['finally', 'Calc.or', 'surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded', 'surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded'],
  ]]],
  ['surface.weighted.fire.primaryCover', [['FuelCoverFraction'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.fixed', '1'],
    ['finally', 'Dag.input'],
  ]]],
  ['surface.weighted.fire.reactionIntensity', [['FireReactionIntensity'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.reactionIntensity'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.reactionIntensity', 'surface.secondary.fuel.fire.reactionIntensity'],
  ]]],
  ['surface.weighted.fire.scorchHeight', [['FireScorchHeight'], [
    ['when', 'configure.fuel.secondary', 'equals', 'none', 'Dag.bind', 'surface.primary.fuel.fire.scorchHeight'],
    ['finally', 'Math.max', 'surface.primary.fuel.fire.scorchHeight', 'surface.secondary.fuel.fire.scorchHeight'],
  ]]],
  ['surface.weighted.fire.spreadRate', [['FireSpreadRate'], [
    ['when', 'configure.fire.weightingMethod', 'equals', 'expected', 'Dag.bind', 'surface.weighted.fire.expectedValue.spreadRate'],
    ['when', 'configure.fire.weightingMethod', 'equals', 'harmonic', 'Dag.bind', 'surface.weighted.fire.harmonicMean.spreadRate'],
    ['finally', 'Dag.bind', 'surface.weighted.fire.arithmeticMean.spreadRate'],
  ]]],
  ['surface.weighted.fire.wind.speed.atMidflame', [['WindSpeed'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.wind.speed.atMidflame'],
  ]]],
  ['surface.weighted.fire.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'Dag.bind', 'surface.primary.fuel.fire.windSpeedAdjustmentFactor'],
  ]]],
]
