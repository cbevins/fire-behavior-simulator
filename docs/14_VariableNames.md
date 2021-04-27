# ![](favicon.png) 14 Variable Names

| Prev:  [13 Release Notes](./13_RELEASE_NOTES.md) | Next: [15 Standard Fuel Models](./15_StandardFuelModels.md) |  [Table of Contents](../README.md) |

---

<a id='top'></a>

# ![](favicon.png) Top-level Names

This section lists all the *fire-behavior-simulator* variable names, also known as *keys*, along with their Variant type and, for Quantity Variants, their native units-of-measure.  This section is divided into the following subsections:

- [**configure**.* Variables](#configure-variables)
- [**crown.canopy**.* Variables](#crown-canopy-variables)
- [**crown.fire**.* Variables](#crown-fire-variables)
- [**docs**.* Variables](#docs-variables)
- [**ignition**.* Variables](#ignition-variables)
- [**link**.* Variables](#link-variables)
- [**module**.* Variables](#module-variables)
- [**mortality**.* Variables](#mortality-variables)
- [**scorch**.* Variables](#scorch-variables)
- [**site**.* Variables](#site-variables)
- [**spotting**.* Variables](#spotting-variables)
- [**surface.fire.ellipse**.* Variables](#surface-fire-ellipse-variables)
- [**surface.primary**.* Variables](#surface-primary-variables)
- [**surface.secondary**.* Variables](#surface-secondary-variables)
- [**surface.weighted**.* Variables](#surface-weighted-variables)

---
<a id='configure-variables'></a>

## ![](favicon.png) **configure**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 1 | configure.fire.effectiveWindSpeedLimit | ConfigEffectiveWindSpeedLimit |  |
  | 2 | configure.fire.firelineIntensity | ConfigFirelineIntensity |  |
  | 3 | configure.fire.lengthToWidthRatio | ConfigFireLengthToWidthRatio |  |
  | 4 | configure.fire.vector | ConfigFireVector |  |
  | 5 | configure.fire.weightingMethod | ConfigFireWeightingMethod |  |
  | 6 | configure.fuel.chaparralTotalLoad | ConfigChaparralTotalLoad |  |
  | 7 | configure.fuel.curedHerbFraction | ConfigCuredHerbFraction |  |
  | 8 | configure.fuel.moisture | ConfigMoistureContents |  |
  | 9 | configure.fuel.primary | ConfigPrimaryFuels |  |
  | 10 | configure.fuel.secondary | ConfigSecondaryFuels |  |
  | 11 | configure.fuel.windSpeedAdjustmentFactor | ConfigWindSpeedAdjustmentFactor |  |
  | 12 | configure.slope.steepness | ConfigSlopeSteepness |  |
  | 13 | configure.temperature.humidity | ConfigTemperatureHumidity |  |
  | 14 | configure.wind.direction | ConfigWindDirection |  |
  | 15 | configure.wind.speed | ConfigWindSpeed |  |

---
<a id='crown-canopy-variables'></a>

## ![](favicon.png) **crown.canopy**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 16 | crown.canopy.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 17 | crown.canopy.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 18 | crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 19 | crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 20 | crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 21 | crown.canopy.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 22 | crown.canopy.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 23 | crown.canopy.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 24 | crown.canopy.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 25 | crown.canopy.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 26 | crown.canopy.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 27 | crown.canopy.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 28 | crown.canopy.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 29 | crown.canopy.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 30 | crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 31 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 32 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 33 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 34 | crown.canopy.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 35 | crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 36 | crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 37 | crown.canopy.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 38 | crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 39 | crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 40 | crown.canopy.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 41 | crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 42 | crown.canopy.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 43 | crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 44 | crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 45 | crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 46 | crown.canopy.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 47 | crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 48 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 49 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 50 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 51 | crown.canopy.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 52 | crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 53 | crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 54 | crown.canopy.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 55 | crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 56 | crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 57 | crown.canopy.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 58 | crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 59 | crown.canopy.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 60 | crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 61 | crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 62 | crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 63 | crown.canopy.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 64 | crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 65 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 66 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 67 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 68 | crown.canopy.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 69 | crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 70 | crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 71 | crown.canopy.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 72 | crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 73 | crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 74 | crown.canopy.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 75 | crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 76 | crown.canopy.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 77 | crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 78 | crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 79 | crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 80 | crown.canopy.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 81 | crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 82 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 83 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 84 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 85 | crown.canopy.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 86 | crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 87 | crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 88 | crown.canopy.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 89 | crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 90 | crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 91 | crown.canopy.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 92 | crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 93 | crown.canopy.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 94 | crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 95 | crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 96 | crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 97 | crown.canopy.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 98 | crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 99 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 100 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 101 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 102 | crown.canopy.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 103 | crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 104 | crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 105 | crown.canopy.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 106 | crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 107 | crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 108 | crown.canopy.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 109 | crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 110 | crown.canopy.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 111 | crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 112 | crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 113 | crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 114 | crown.canopy.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 115 | crown.canopy.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 116 | crown.canopy.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 117 | crown.canopy.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 118 | crown.canopy.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 119 | crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 120 | crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 121 | crown.canopy.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 122 | crown.canopy.fuel.bed.depth | FuelBedDepth | ft |
  | 123 | crown.canopy.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 124 | crown.canopy.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 125 | crown.canopy.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 126 | crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 127 | crown.canopy.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 128 | crown.canopy.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 129 | crown.canopy.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 130 | crown.canopy.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 131 | crown.canopy.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 132 | crown.canopy.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 133 | crown.canopy.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 134 | crown.canopy.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 135 | crown.canopy.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 136 | crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 137 | crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 138 | crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 139 | crown.canopy.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 140 | crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 141 | crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 142 | crown.canopy.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 143 | crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 144 | crown.canopy.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 145 | crown.canopy.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 146 | crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 147 | crown.canopy.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 148 | crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 149 | crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 150 | crown.canopy.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 151 | crown.canopy.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 152 | crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 153 | crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 154 | crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 155 | crown.canopy.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 156 | crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 157 | crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 158 | crown.canopy.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 159 | crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 160 | crown.canopy.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 161 | crown.canopy.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 162 | crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 163 | crown.canopy.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 164 | crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 165 | crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 166 | crown.canopy.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 167 | crown.canopy.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 168 | crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 169 | crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 170 | crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 171 | crown.canopy.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 172 | crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 173 | crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 174 | crown.canopy.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 175 | crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 176 | crown.canopy.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 177 | crown.canopy.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 178 | crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 179 | crown.canopy.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 180 | crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 181 | crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 182 | crown.canopy.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 183 | crown.canopy.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 184 | crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 185 | crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 186 | crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 187 | crown.canopy.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 188 | crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 189 | crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 190 | crown.canopy.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 191 | crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 192 | crown.canopy.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 193 | crown.canopy.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 194 | crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 195 | crown.canopy.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 196 | crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 197 | crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 198 | crown.canopy.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 199 | crown.canopy.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 200 | crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 201 | crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 202 | crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 203 | crown.canopy.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 204 | crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 205 | crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 206 | crown.canopy.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 207 | crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 208 | crown.canopy.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 209 | crown.canopy.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 210 | crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 211 | crown.canopy.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 212 | crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 213 | crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 214 | crown.canopy.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 215 | crown.canopy.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 216 | crown.canopy.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 217 | crown.canopy.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 218 | crown.canopy.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 219 | crown.canopy.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 220 | crown.canopy.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 221 | crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 222 | crown.canopy.fuel.bed.live.volume | FuelBedDepth | ft |
  | 223 | crown.canopy.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 224 | crown.canopy.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 225 | crown.canopy.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 226 | crown.canopy.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 227 | crown.canopy.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 228 | crown.canopy.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 229 | crown.canopy.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 230 | crown.canopy.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 231 | crown.canopy.fuel.bed.reactionVelocityExponent | Factor |  |
  | 232 | crown.canopy.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 233 | crown.canopy.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 234 | crown.canopy.fuel.bed.savr15 | Factor |  |
  | 235 | crown.canopy.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 236 | crown.canopy.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 237 | crown.canopy.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 238 | crown.canopy.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 239 | crown.canopy.fuel.fire.flameLength | FireFlameLength | ft |
  | 240 | crown.canopy.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 241 | crown.canopy.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 242 | crown.canopy.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 243 | crown.canopy.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 244 | crown.canopy.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 245 | crown.canopy.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 246 | crown.canopy.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 247 | crown.canopy.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 248 | crown.canopy.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 249 | crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 250 | crown.canopy.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 251 | crown.canopy.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 252 | crown.canopy.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 253 | crown.canopy.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 254 | crown.canopy.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 255 | crown.canopy.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 256 | crown.canopy.fuel.fire.phiEffectiveWind | Factor |  |
  | 257 | crown.canopy.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 258 | crown.canopy.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 259 | crown.canopy.fuel.fire.slope.k | Factor |  |
  | 260 | crown.canopy.fuel.fire.slope.phi | Factor |  |
  | 261 | crown.canopy.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 262 | crown.canopy.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 263 | crown.canopy.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 264 | crown.canopy.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 265 | crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 266 | crown.canopy.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 267 | crown.canopy.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 268 | crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 269 | crown.canopy.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 270 | crown.canopy.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 271 | crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 272 | crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 273 | crown.canopy.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 274 | crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 275 | crown.canopy.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 276 | crown.canopy.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 277 | crown.canopy.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 278 | crown.canopy.fuel.fire.wind.factor.b | Factor |  |
  | 279 | crown.canopy.fuel.fire.wind.factor.c | Factor |  |
  | 280 | crown.canopy.fuel.fire.wind.factor.e | Factor |  |
  | 281 | crown.canopy.fuel.fire.wind.factor.i | Factor |  |
  | 282 | crown.canopy.fuel.fire.wind.factor.k | Factor |  |
  | 283 | crown.canopy.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 284 | crown.canopy.fuel.fire.wind.phi | Factor |  |
  | 285 | crown.canopy.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 286 | crown.canopy.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |

---
<a id='crown-fire-variables'></a>

## ![](favicon.png) **crown.fire**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 287 | crown.fire.active.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 288 | crown.fire.active.flameLength | FireFlameLength | ft |
  | 289 | crown.fire.active.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 290 | crown.fire.active.isPlumeDominated | NoYes |  |
  | 291 | crown.fire.active.isWindDriven | NoYes |  |
  | 292 | crown.fire.active.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 293 | crown.fire.active.map.area | MapArea | in2 |
  | 294 | crown.fire.active.map.length | MapDistance | in |
  | 295 | crown.fire.active.map.perimeter | MapDistance | in |
  | 296 | crown.fire.active.map.width | MapDistance | in |
  | 297 | crown.fire.active.powerOfTheFire | FirePower | btu/min |
  | 298 | crown.fire.active.powerOfTheWind | FirePower | btu/min |
  | 299 | crown.fire.active.powerRatio | FirePowerRatio |  |
  | 300 | crown.fire.active.size.area | FireArea | ft2 |
  | 301 | crown.fire.active.size.length | FireSpreadDistance | ft |
  | 302 | crown.fire.active.size.perimeter | FireSpreadDistance | ft |
  | 303 | crown.fire.active.size.width | FireSpreadDistance | ft |
  | 304 | crown.fire.active.spreadRate | FireSpreadRate | ft/min |
  | 305 | crown.fire.final.crownFractionBurned | CrownFireBurnedFraction | ratio |
  | 306 | crown.fire.final.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 307 | crown.fire.final.flameLength | FireFirelineIntensity | btu/ft/s |
  | 308 | crown.fire.final.map.area | MapArea | in2 |
  | 309 | crown.fire.final.map.length | MapDistance | in |
  | 310 | crown.fire.final.map.perimeter | MapDistance | in |
  | 311 | crown.fire.final.map.width | MapDistance | in |
  | 312 | crown.fire.final.rSa | FireSpreadRate | ft/min |
  | 313 | crown.fire.final.size.area | FireArea | ft2 |
  | 314 | crown.fire.final.size.length | FireSpreadDistance | ft |
  | 315 | crown.fire.final.size.perimeter | FireSpreadDistance | ft |
  | 316 | crown.fire.final.size.width | FireSpreadDistance | ft |
  | 317 | crown.fire.final.spreadRate | FireSpreadRate | ft/min |
  | 318 | crown.fire.initiation.activeRatio | CrownFireActiveRatio |  |
  | 319 | crown.fire.initiation.canTransition | NoYes |  |
  | 320 | crown.fire.initiation.crowningIndex | Factor |  |
  | 321 | crown.fire.initiation.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 322 | crown.fire.initiation.flameLength | FireFlameLength | ft |
  | 323 | crown.fire.initiation.isActiveCrownFire | NoYes |  |
  | 324 | crown.fire.initiation.isConditionalCrownFire | NoYes |  |
  | 325 | crown.fire.initiation.isCrownFire | NoYes |  |
  | 326 | crown.fire.initiation.isPassiveCrownFire | NoYes |  |
  | 327 | crown.fire.initiation.isSurfaceFire | NoYes |  |
  | 328 | crown.fire.initiation.oActive | WindSpeed | ft/min |
  | 329 | crown.fire.initiation.rPrime | FireSpreadRate | ft/min |
  | 330 | crown.fire.initiation.spreadRate | FireSpreadRate | ft/min |
  | 331 | crown.fire.initiation.transitionRatio | CrownTransitionRatio |  |
  | 332 | crown.fire.initiation.type | CrownFireInitiationTypeOption |  |
  | 333 | crown.fire.surface.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 334 | crown.fire.surface.flameLength | FireFlameLength | ft |
  | 335 | crown.fire.surface.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |

---
<a id='docs-variables'></a>

## ![](favicon.png) **docs**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 336 | docs.run.description | Documentation |  |
  | 337 | docs.run.mainTitle | Documentation |  |
  | 338 | docs.run.subTitle | Documentation |  |
  | 339 | docs.run.userName | Documentation |  |

---
<a id='ignition-variables'></a>

## ![](favicon.png) **ignition**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 340 | ignition.firebrand.probability | IgnitionProbability | ratio |
  | 341 | ignition.lightningStrike.charge | IgnitionLightningChargeOption |  |
  | 342 | ignition.lightningStrike.fuel.depth | IgnitionFuelDepth | in |
  | 343 | ignition.lightningStrike.fuel.type | IgnitionFuelTypeOption |  |
  | 344 | ignition.lightningStrike.probability | IgnitionProbability | ratio |

---
<a id='link-variables'></a>

## ![](favicon.png) **link**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 345 | link.crownFire | ConfigLinkSurfaceFire |  |
  | 346 | link.crownSpot | ConfigLinkCrownFire |  |
  | 347 | link.fireContain | ConfigLinkFireEllipse |  |
  | 348 | link.fireEllipse | ConfigLinkSurfaceFire |  |
  | 349 | link.scorchHeight | ConfigLinkSurfaceFire |  |
  | 350 | link.surfaceSpot | ConfigLinkSurfaceFire |  |
  | 351 | link.treeMortality | ConfigLinkScorchHeight |  |

---
<a id='module-variables'></a>

## ![](favicon.png) **module**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 352 | module.crownFire | ConfigModuleActive |  |
  | 353 | module.crownSpot | ConfigModuleActive |  |
  | 354 | module.fireContain | ConfigModuleActive |  |
  | 355 | module.fireEllipse | ConfigModuleActive |  |
  | 356 | module.ignitionProbability | ConfigModuleActive |  |
  | 357 | module.scorchHeight | ConfigModuleActive |  |
  | 358 | module.spotting | ConfigModuleActive |  |
  | 359 | module.surfaceFire | ConfigModuleActive |  |
  | 360 | module.surfaceSpot | ConfigModuleActive |  |
  | 361 | module.treeMortality | ConfigModuleActive |  |

---
<a id='mortality-variables'></a>

## ![](favicon.png) **mortality**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 362 | mortality.crownLengthScorched | MortalityFraction | ratio |
  | 363 | mortality.crownVolumeScorched | MortalityFraction | ratio |
  | 364 | mortality.rate | MortalityFraction | ratio |
  | 365 | mortality.scorchHeight | FireScorchHeight | ft |

---
<a id='scorch-variables'></a>

## ![](favicon.png) **scorch**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 366 | scorch.height | FireScorchHeight | ft |

---
<a id='site-variables'></a>

## ![](favicon.png) **site**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 367 | site.canopy.cover | FuelCoverFraction | ratio |
  | 368 | site.canopy.crown.baseHeight | TreeHeight | ft |
  | 369 | site.canopy.crown.fill | CrownFillFraction | ratio |
  | 370 | site.canopy.crown.length | TreeHeight | ft |
  | 371 | site.canopy.crown.ratio | CrownRatioFraction | ratio |
  | 372 | site.canopy.crown.totalHeight | TreeHeight | ft |
  | 373 | site.canopy.downwind.appliedHeight | TreeHeight | ft |
  | 374 | site.canopy.downwind.height | TreeHeight | ft |
  | 375 | site.canopy.downwind.isOpen | DownWindCanopyIsOpen |  |
  | 376 | site.canopy.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 377 | site.canopy.fuel.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 378 | site.canopy.fuel.foliar.moistureContent | FuelMoistureContent | ratio |
  | 379 | site.canopy.fuel.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 380 | site.canopy.fuel.isSheltered | FuelIsSheltered |  |
  | 381 | site.canopy.fuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 382 | site.canopy.fuel.shading | FuelCoverFraction | ratio |
  | 383 | site.canopy.sheltered.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 384 | site.canopy.tree.barkThickness | TreeBarkThickness | in |
  | 385 | site.canopy.tree.dbh | TreeDbh | in |
  | 386 | site.canopy.tree.species.fofem6.code | TreeSpeciesFofem6Option |  |
  | 387 | site.date.dayOfMonth | DateDayOfMonth |  |
  | 388 | site.date.dayOfYear | DateDayOfYear |  |
  | 389 | site.date.julian | DateJulian |  |
  | 390 | site.date.month | DateMonth |  |
  | 391 | site.date.year | DateYear |  |
  | 392 | site.doc.date | Documentation |  |
  | 393 | site.doc.id | Documentation |  |
  | 394 | site.doc.location | Documentation |  |
  | 395 | site.doc.station | Documentation |  |
  | 396 | site.doc.time | Documentation |  |
  | 397 | site.fire.crown.flameLength | FireFlameLength | ft |
  | 398 | site.fire.observed.effectiveWindSpeed | WindSpeed | ft/min |
  | 399 | site.fire.observed.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 400 | site.fire.observed.flameLength | FireFlameLength | ft |
  | 401 | site.fire.observed.heading.fromNorth | CompassAzimuth | deg |
  | 402 | site.fire.observed.heading.fromUpslope | CompassAzimuth | deg |
  | 403 | site.fire.observed.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 404 | site.fire.observed.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 405 | site.fire.observed.scorchHeight | FireScorchHeight | ft |
  | 406 | site.fire.observed.spreadRate | FireSpreadRate | ft/min |
  | 407 | site.fire.time.sinceIgnition | FireElapsedTime | min |
  | 408 | site.fire.vector.fromHead | CompassAzimuth | deg |
  | 409 | site.fire.vector.fromNorth | CompassAzimuth | deg |
  | 410 | site.fire.vector.fromUpslope | CompassAzimuth | deg |
  | 411 | site.location.elevation | Elevation | ft |
  | 412 | site.location.elevation.diff | ElevationDiff | ft |
  | 413 | site.location.gmtDiff | GmtDiff |  |
  | 414 | site.location.latitude.degrees | Latitude | deg |
  | 415 | site.location.latitude.ns | NorthSouthOption |  |
  | 416 | site.location.longitude.degrees | Longitude | deg |
  | 417 | site.location.longitude.ew | EastWestOption |  |
  | 418 | site.map.contours | MapContoursCount |  |
  | 419 | site.map.distance | FireSpreadDistance | ft |
  | 420 | site.map.factor | MapFactor |  |
  | 421 | site.map.interval | FireSpreadDistance | ft |
  | 422 | site.map.reach | FireSpreadDistance | ft |
  | 423 | site.map.rise | FireSpreadDistance | ft |
  | 424 | site.map.scale | MapScale |  |
  | 425 | site.map.slope.degrees | SlopeSteepnessDegrees | deg |
  | 426 | site.map.slope.ratio | SlopeSteepnessRatio | ratio |
  | 427 | site.moisture.dead.category | FuelMoistureContent | ratio |
  | 428 | site.moisture.dead.fosberg.correction | FuelMoistureContent | ratio |
  | 429 | site.moisture.dead.fosberg.reference | FuelMoistureContent | ratio |
  | 430 | site.moisture.dead.fosberg.tl100h | FuelMoistureContent | ratio |
  | 431 | site.moisture.dead.fosberg.tl10h | FuelMoistureContent | ratio |
  | 432 | site.moisture.dead.fosberg.tl1h | FuelMoistureContent | ratio |
  | 433 | site.moisture.dead.tl100h | FuelMoistureContent | ratio |
  | 434 | site.moisture.dead.tl10h | FuelMoistureContent | ratio |
  | 435 | site.moisture.dead.tl1h | FuelMoistureContent | ratio |
  | 436 | site.moisture.live.category | FuelMoistureContent | ratio |
  | 437 | site.moisture.live.herb | FuelMoistureContent | ratio |
  | 438 | site.moisture.live.stem | FuelMoistureContent | ratio |
  | 439 | site.slope.direction.aspect | CompassAzimuth | deg |
  | 440 | site.slope.direction.upslope | CompassAzimuth | deg |
  | 441 | site.slope.steepness.degrees | SlopeSteepnessDegrees | deg |
  | 442 | site.slope.steepness.ratio | SlopeSteepnessRatio | ratio |
  | 443 | site.temperature.air | AirTemperature | oF |
  | 444 | site.temperature.dewPoint | AirTemperature | oF |
  | 445 | site.temperature.dryBulb | AirTemperature | oF |
  | 446 | site.temperature.fuel | AirTemperature | oF |
  | 447 | site.temperature.relativeHumidity | RelativeHumidity | ratio |
  | 448 | site.temperature.shading | ShadingFraction | ratio |
  | 449 | site.temperature.wetBulb | AirTemperature | oF |
  | 450 | site.temperature.wetBulbDepression | AirTemperature | oF |
  | 451 | site.terrain.ridgeValleyDistance | FireSpotDistance | ft |
  | 452 | site.terrain.ridgeValleyElevation | FireSpreadDistance | ft |
  | 453 | site.terrain.spotSourceLocation | SpottingSourceLocationOption |  |
  | 454 | site.time.hour | TimeHour |  |
  | 455 | site.time.minute | TimeMinute |  |
  | 456 | site.time.second | TimeSecond |  |
  | 457 | site.time.sunrise | TimeStamp |  |
  | 458 | site.time.sunset | TimeStamp |  |
  | 459 | site.wind.direction.heading.fromNorth | CompassAzimuth | deg |
  | 460 | site.wind.direction.heading.fromUpslope | CompassAzimuth | deg |
  | 461 | site.wind.direction.source.fromNorth | CompassAzimuth | deg |
  | 462 | site.wind.direction.source.fromUpslope | CompassAzimuth | deg |
  | 463 | site.wind.speed.at10m | WindSpeed | ft/min |
  | 464 | site.wind.speed.at20ft | WindSpeed | ft/min |
  | 465 | site.wind.speed.atMidflame | WindSpeed | ft/min |
  | 466 | site.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |

---
<a id='spotting-variables'></a>

## ![](favicon.png) **spotting**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 467 | spotting.burningPile.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 468 | spotting.burningPile.firebrand.drift | FireSpotDistance | ft |
  | 469 | spotting.burningPile.firebrand.height | TreeHeight | ft |
  | 470 | spotting.burningPile.flameHeight | FireFlameLength | ft |
  | 471 | spotting.burningPile.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 472 | spotting.burningPile.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 473 | spotting.burningPile.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 474 | spotting.crownFire.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 475 | spotting.crownFire.firebrand.drift | FireSpotDistance | ft |
  | 476 | spotting.crownFire.firebrand.height | TreeHeight | ft |
  | 477 | spotting.crownFire.firebrandObject | SpottingFirebrandObject |  |
  | 478 | spotting.crownFire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 479 | spotting.crownFire.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 480 | spotting.crownFire.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 481 | spotting.crownFire.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 482 | spotting.surfaceFire.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 483 | spotting.surfaceFire.firebrand.drift | FireSpotDistance | ft |
  | 484 | spotting.surfaceFire.firebrand.height | TreeHeight | ft |
  | 485 | spotting.surfaceFire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 486 | spotting.surfaceFire.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 487 | spotting.surfaceFire.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 488 | spotting.surfaceFire.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 489 | spotting.torchingTrees.count | TreeCount |  |
  | 490 | spotting.torchingTrees.dbh | TreeDbh | in |
  | 491 | spotting.torchingTrees.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 492 | spotting.torchingTrees.firebrand.drift | FireSpotDistance | ft |
  | 493 | spotting.torchingTrees.firebrand.height | TreeHeight | ft |
  | 494 | spotting.torchingTrees.flameDuration | FireFlameDuration | min |
  | 495 | spotting.torchingTrees.flameHeight | FireFlameLength | ft |
  | 496 | spotting.torchingTrees.height | TreeHeight | ft |
  | 497 | spotting.torchingTrees.species | TorchingTreeSpeciesOption |  |
  | 498 | spotting.torchingTrees.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 499 | spotting.torchingTrees.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 500 | spotting.torchingTrees.spotDistance.mountainTerrain | FireSpotDistance | ft |

---
<a id='surface-fire-ellipse-variables'></a>

## ![](favicon.png) **surface.fire.ellipse**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 501 | surface.fire.ellipse.axis.eccentricity | FireLengthToWidthRatio |  |
  | 502 | surface.fire.ellipse.axis.effectiveWindSpeed | WindSpeed | ft/min |
  | 503 | surface.fire.ellipse.axis.f.spreadRate | FireSpreadRate | ft/min |
  | 504 | surface.fire.ellipse.axis.g.spreadRate | FireSpreadRate | ft/min |
  | 505 | surface.fire.ellipse.axis.h.spreadRate | FireSpreadRate | ft/min |
  | 506 | surface.fire.ellipse.axis.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 507 | surface.fire.ellipse.axis.major.spreadRate | FireSpreadRate | ft/min |
  | 508 | surface.fire.ellipse.axis.minor.spreadRate | FireSpreadRate | ft/min |
  | 509 | surface.fire.ellipse.back.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 510 | surface.fire.ellipse.back.flameLength | FireFlameLength | ft |
  | 511 | surface.fire.ellipse.back.mapDistance | MapDistance | in |
  | 512 | surface.fire.ellipse.back.scorchHeight | FireScorchHeight | ft |
  | 513 | surface.fire.ellipse.back.spreadDistance | FireSpreadDistance | ft |
  | 514 | surface.fire.ellipse.back.spreadRate | FireSpreadRate | ft/min |
  | 515 | surface.fire.ellipse.back.treeMortality | MortalityFraction | ratio |
  | 516 | surface.fire.ellipse.beta.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 517 | surface.fire.ellipse.beta.flameLength | FireFlameLength | ft |
  | 518 | surface.fire.ellipse.beta.mapDistance | MapDistance | in |
  | 519 | surface.fire.ellipse.beta.psi | CompassAzimuth | deg |
  | 520 | surface.fire.ellipse.beta.psiSpreadRate | FireSpreadRate | ft/min |
  | 521 | surface.fire.ellipse.beta.scorchHeight | FireScorchHeight | ft |
  | 522 | surface.fire.ellipse.beta.spreadDistance | FireSpreadDistance | ft |
  | 523 | surface.fire.ellipse.beta.spreadRate | FireSpreadRate | ft/min |
  | 524 | surface.fire.ellipse.beta.theta | CompassAzimuth | deg |
  | 525 | surface.fire.ellipse.beta.treeMortality | MortalityFraction | ratio |
  | 526 | surface.fire.ellipse.beta5.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 527 | surface.fire.ellipse.beta5.flameLength | FireFlameLength | ft |
  | 528 | surface.fire.ellipse.beta5.mapDistance | MapDistance | in |
  | 529 | surface.fire.ellipse.beta5.scorchHeight | FireScorchHeight | ft |
  | 530 | surface.fire.ellipse.beta5.spreadDistance | FireSpreadDistance | ft |
  | 531 | surface.fire.ellipse.beta5.spreadRate | FireSpreadRate | ft/min |
  | 532 | surface.fire.ellipse.beta5.treeMortality | MortalityFraction | ratio |
  | 533 | surface.fire.ellipse.flank.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 534 | surface.fire.ellipse.flank.flameLength | FireFlameLength | ft |
  | 535 | surface.fire.ellipse.flank.mapDistance | MapDistance | in |
  | 536 | surface.fire.ellipse.flank.scorchHeight | FireScorchHeight | ft |
  | 537 | surface.fire.ellipse.flank.spreadDistance | FireSpreadDistance | ft |
  | 538 | surface.fire.ellipse.flank.spreadRate | FireSpreadRate | ft/min |
  | 539 | surface.fire.ellipse.flank.treeMortality | MortalityFraction | ratio |
  | 540 | surface.fire.ellipse.head.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 541 | surface.fire.ellipse.head.flameLength | FireFlameLength | ft |
  | 542 | surface.fire.ellipse.head.mapDistance | MapDistance | in |
  | 543 | surface.fire.ellipse.head.scorchHeight | FireScorchHeight | ft |
  | 544 | surface.fire.ellipse.head.spreadDistance | FireSpreadDistance | ft |
  | 545 | surface.fire.ellipse.head.spreadRate | FireSpreadRate | ft/min |
  | 546 | surface.fire.ellipse.head.treeMortality | MortalityFraction | ratio |
  | 547 | surface.fire.ellipse.heading.fromNorth | CompassAzimuth | deg |
  | 548 | surface.fire.ellipse.heading.fromUpslope | CompassAzimuth | deg |
  | 549 | surface.fire.ellipse.map.area | MapArea | in2 |
  | 550 | surface.fire.ellipse.map.length | MapDistance | in |
  | 551 | surface.fire.ellipse.map.perimeter | MapDistance | in |
  | 552 | surface.fire.ellipse.map.width | MapDistance | in |
  | 553 | surface.fire.ellipse.psi.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 554 | surface.fire.ellipse.psi.flameLength | FireFlameLength | ft |
  | 555 | surface.fire.ellipse.psi.mapDistance | MapDistance | in |
  | 556 | surface.fire.ellipse.psi.scorchHeight | FireScorchHeight | ft |
  | 557 | surface.fire.ellipse.psi.spreadDistance | FireSpreadDistance | ft |
  | 558 | surface.fire.ellipse.psi.spreadRate | FireSpreadRate | ft/min |
  | 559 | surface.fire.ellipse.psi.treeMortality | MortalityFraction | ratio |
  | 560 | surface.fire.ellipse.size.area | FireArea | ft2 |
  | 561 | surface.fire.ellipse.size.length | FireSpreadDistance | ft |
  | 562 | surface.fire.ellipse.size.perimeter | FireSpreadDistance | ft |
  | 563 | surface.fire.ellipse.size.width | FireSpreadDistance | ft |
  | 564 | surface.fire.ellipse.vector.fromHead | CompassAzimuth | deg |
  | 565 | surface.fire.ellipse.vector.fromNorth | CompassAzimuth | deg |
  | 566 | surface.fire.ellipse.vector.fromUpslope | CompassAzimuth | deg |
  | 567 | surface.fire.ellipse.wind.speed.atMidflame | WindSpeed | ft/min |

---
<a id='surface-primary-variables'></a>

## ![](favicon.png) **surface.primary**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 568 | surface.primary.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 569 | surface.primary.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 570 | surface.primary.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 571 | surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 572 | surface.primary.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 573 | surface.primary.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 574 | surface.primary.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 575 | surface.primary.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 576 | surface.primary.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 577 | surface.primary.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 578 | surface.primary.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 579 | surface.primary.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 580 | surface.primary.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 581 | surface.primary.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 582 | surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 583 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 584 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 585 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 586 | surface.primary.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 587 | surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 588 | surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 589 | surface.primary.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 590 | surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 591 | surface.primary.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 592 | surface.primary.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 593 | surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 594 | surface.primary.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 595 | surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 596 | surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 597 | surface.primary.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 598 | surface.primary.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 599 | surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 600 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 601 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 602 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 603 | surface.primary.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 604 | surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 605 | surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 606 | surface.primary.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 607 | surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 608 | surface.primary.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 609 | surface.primary.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 610 | surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 611 | surface.primary.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 612 | surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 613 | surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 614 | surface.primary.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 615 | surface.primary.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 616 | surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 617 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 618 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 619 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 620 | surface.primary.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 621 | surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 622 | surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 623 | surface.primary.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 624 | surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 625 | surface.primary.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 626 | surface.primary.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 627 | surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 628 | surface.primary.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 629 | surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 630 | surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 631 | surface.primary.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 632 | surface.primary.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 633 | surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 634 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 635 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 636 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 637 | surface.primary.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 638 | surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 639 | surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 640 | surface.primary.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 641 | surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 642 | surface.primary.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 643 | surface.primary.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 644 | surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 645 | surface.primary.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 646 | surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 647 | surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 648 | surface.primary.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 649 | surface.primary.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 650 | surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 651 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 652 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 653 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 654 | surface.primary.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 655 | surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 656 | surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 657 | surface.primary.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 658 | surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 659 | surface.primary.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 660 | surface.primary.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 661 | surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 662 | surface.primary.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 663 | surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 664 | surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 665 | surface.primary.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 666 | surface.primary.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 667 | surface.primary.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 668 | surface.primary.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 669 | surface.primary.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 670 | surface.primary.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 671 | surface.primary.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 672 | surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 673 | surface.primary.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 674 | surface.primary.fuel.bed.depth | FuelBedDepth | ft |
  | 675 | surface.primary.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 676 | surface.primary.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 677 | surface.primary.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 678 | surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 679 | surface.primary.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 680 | surface.primary.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 681 | surface.primary.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 682 | surface.primary.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 683 | surface.primary.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 684 | surface.primary.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 685 | surface.primary.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 686 | surface.primary.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 687 | surface.primary.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 688 | surface.primary.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 689 | surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 690 | surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 691 | surface.primary.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 692 | surface.primary.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 693 | surface.primary.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 694 | surface.primary.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 695 | surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 696 | surface.primary.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 697 | surface.primary.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 698 | surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 699 | surface.primary.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 700 | surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 701 | surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 702 | surface.primary.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 703 | surface.primary.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 704 | surface.primary.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 705 | surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 706 | surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 707 | surface.primary.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 708 | surface.primary.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 709 | surface.primary.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 710 | surface.primary.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 711 | surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 712 | surface.primary.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 713 | surface.primary.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 714 | surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 715 | surface.primary.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 716 | surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 717 | surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 718 | surface.primary.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 719 | surface.primary.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 720 | surface.primary.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 721 | surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 722 | surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 723 | surface.primary.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 724 | surface.primary.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 725 | surface.primary.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 726 | surface.primary.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 727 | surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 728 | surface.primary.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 729 | surface.primary.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 730 | surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 731 | surface.primary.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 732 | surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 733 | surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 734 | surface.primary.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 735 | surface.primary.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 736 | surface.primary.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 737 | surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 738 | surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 739 | surface.primary.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 740 | surface.primary.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 741 | surface.primary.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 742 | surface.primary.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 743 | surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 744 | surface.primary.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 745 | surface.primary.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 746 | surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 747 | surface.primary.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 748 | surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 749 | surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 750 | surface.primary.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 751 | surface.primary.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 752 | surface.primary.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 753 | surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 754 | surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 755 | surface.primary.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 756 | surface.primary.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 757 | surface.primary.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 758 | surface.primary.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 759 | surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 760 | surface.primary.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 761 | surface.primary.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 762 | surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 763 | surface.primary.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 764 | surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 765 | surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 766 | surface.primary.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 767 | surface.primary.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 768 | surface.primary.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 769 | surface.primary.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 770 | surface.primary.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 771 | surface.primary.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 772 | surface.primary.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 773 | surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 774 | surface.primary.fuel.bed.live.volume | FuelBedDepth | ft |
  | 775 | surface.primary.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 776 | surface.primary.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 777 | surface.primary.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 778 | surface.primary.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 779 | surface.primary.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 780 | surface.primary.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 781 | surface.primary.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 782 | surface.primary.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 783 | surface.primary.fuel.bed.reactionVelocityExponent | Factor |  |
  | 784 | surface.primary.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 785 | surface.primary.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 786 | surface.primary.fuel.bed.savr15 | Factor |  |
  | 787 | surface.primary.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 788 | surface.primary.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 789 | surface.primary.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 790 | surface.primary.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 791 | surface.primary.fuel.fire.flameLength | FireFlameLength | ft |
  | 792 | surface.primary.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 793 | surface.primary.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 794 | surface.primary.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 795 | surface.primary.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 796 | surface.primary.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 797 | surface.primary.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 798 | surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 799 | surface.primary.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 800 | surface.primary.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 801 | surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 802 | surface.primary.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 803 | surface.primary.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 804 | surface.primary.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 805 | surface.primary.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 806 | surface.primary.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 807 | surface.primary.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 808 | surface.primary.fuel.fire.phiEffectiveWind | Factor |  |
  | 809 | surface.primary.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 810 | surface.primary.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 811 | surface.primary.fuel.fire.slope.k | Factor |  |
  | 812 | surface.primary.fuel.fire.slope.phi | Factor |  |
  | 813 | surface.primary.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 814 | surface.primary.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 815 | surface.primary.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 816 | surface.primary.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 817 | surface.primary.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 818 | surface.primary.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 819 | surface.primary.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 820 | surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 821 | surface.primary.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 822 | surface.primary.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 823 | surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 824 | surface.primary.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 825 | surface.primary.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 826 | surface.primary.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 827 | surface.primary.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 828 | surface.primary.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 829 | surface.primary.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 830 | surface.primary.fuel.fire.wind.factor.b | Factor |  |
  | 831 | surface.primary.fuel.fire.wind.factor.c | Factor |  |
  | 832 | surface.primary.fuel.fire.wind.factor.e | Factor |  |
  | 833 | surface.primary.fuel.fire.wind.factor.i | Factor |  |
  | 834 | surface.primary.fuel.fire.wind.factor.k | Factor |  |
  | 835 | surface.primary.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 836 | surface.primary.fuel.fire.wind.phi | Factor |  |
  | 837 | surface.primary.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 838 | surface.primary.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 839 | surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 840 | surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 841 | surface.primary.fuel.model.behave.domain | FuelModelDomainOption |  |
  | 842 | surface.primary.fuel.model.behave.parms.cured.herb.fraction | FuelDeadFraction | ratio |
  | 843 | surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 844 | surface.primary.fuel.model.behave.parms.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 845 | surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 846 | surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 847 | surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 848 | surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 849 | surface.primary.fuel.model.behave.parms.depth | FuelBedDepth | ft |
  | 850 | surface.primary.fuel.model.behave.parms.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 851 | surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 852 | surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 853 | surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 854 | surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 855 | surface.primary.fuel.model.catalogKey | FuelModelKeyOption |  |
  | 856 | surface.primary.fuel.model.chaparral.derived.age | FuelAge | y |
  | 857 | surface.primary.fuel.model.chaparral.derived.averageMortality | MortalityFraction | ratio |
  | 858 | surface.primary.fuel.model.chaparral.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 859 | surface.primary.fuel.model.chaparral.derived.deadLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 860 | surface.primary.fuel.model.chaparral.derived.deadLoad | FuelOvendryLoad | lb/ft2 |
  | 861 | surface.primary.fuel.model.chaparral.derived.deadMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 862 | surface.primary.fuel.model.chaparral.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 863 | surface.primary.fuel.model.chaparral.derived.depth | FuelBedDepth | ft |
  | 864 | surface.primary.fuel.model.chaparral.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 865 | surface.primary.fuel.model.chaparral.derived.liveLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 866 | surface.primary.fuel.model.chaparral.derived.liveLeafLoad | FuelOvendryLoad | lb/ft2 |
  | 867 | surface.primary.fuel.model.chaparral.derived.liveLoad | FuelOvendryLoad | lb/ft2 |
  | 868 | surface.primary.fuel.model.chaparral.derived.liveMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 869 | surface.primary.fuel.model.chaparral.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 870 | surface.primary.fuel.model.chaparral.derived.severeMortality | MortalityFraction | ratio |
  | 871 | surface.primary.fuel.model.chaparral.derived.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 872 | surface.primary.fuel.model.chaparral.domain | FuelModelDomainOption |  |
  | 873 | surface.primary.fuel.model.chaparral.parms.applied.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 874 | surface.primary.fuel.model.chaparral.parms.chaparralType | ChaparralTypeOption |  |
  | 875 | surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction | FuelDeadFraction | ratio |
  | 876 | surface.primary.fuel.model.chaparral.parms.observed.depth | FuelBedDepth | ft |
  | 877 | surface.primary.fuel.model.chaparral.parms.observed.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 878 | surface.primary.fuel.model.domain | FuelModelDomainOption |  |
  | 879 | surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 880 | surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 881 | surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad | FuelOvendryLoad | lb/ft2 |
  | 882 | surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 883 | surface.primary.fuel.model.palmettoGallberry.derived.depth | FuelBedDepth | ft |
  | 884 | surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 885 | surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 886 | surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 887 | surface.primary.fuel.model.palmettoGallberry.domain | FuelModelDomainOption |  |
  | 888 | surface.primary.fuel.model.palmettoGallberry.parms.age | FuelAge | y |
  | 889 | surface.primary.fuel.model.palmettoGallberry.parms.basalArea | FuelBasalArea | ft2 |
  | 890 | surface.primary.fuel.model.palmettoGallberry.parms.cover | FuelCoverFraction | ratio |
  | 891 | surface.primary.fuel.model.palmettoGallberry.parms.height | FuelBedDepth | ft |
  | 892 | surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 893 | surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 894 | surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 895 | surface.primary.fuel.model.westernAspen.derived.depth | FuelBedDepth | ft |
  | 896 | surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 897 | surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 898 | surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 899 | surface.primary.fuel.model.westernAspen.domain | FuelModelDomainOption |  |
  | 900 | surface.primary.fuel.model.westernAspen.parms.aspenType | WesternAspenTypeOption |  |
  | 901 | surface.primary.fuel.model.westernAspen.parms.curingLevel | FuelDeadFraction | ratio |

---
<a id='surface-secondary-variables'></a>

## ![](favicon.png) **surface.secondary**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 902 | surface.secondary.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 903 | surface.secondary.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 904 | surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 905 | surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 906 | surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 907 | surface.secondary.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 908 | surface.secondary.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 909 | surface.secondary.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 910 | surface.secondary.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 911 | surface.secondary.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 912 | surface.secondary.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 913 | surface.secondary.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 914 | surface.secondary.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 915 | surface.secondary.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 916 | surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 917 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 918 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 919 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 920 | surface.secondary.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 921 | surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 922 | surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 923 | surface.secondary.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 924 | surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 925 | surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 926 | surface.secondary.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 927 | surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 928 | surface.secondary.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 929 | surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 930 | surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 931 | surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 932 | surface.secondary.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 933 | surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 934 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 935 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 936 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 937 | surface.secondary.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 938 | surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 939 | surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 940 | surface.secondary.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 941 | surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 942 | surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 943 | surface.secondary.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 944 | surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 945 | surface.secondary.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 946 | surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 947 | surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 948 | surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 949 | surface.secondary.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 950 | surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 951 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 952 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 953 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 954 | surface.secondary.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 955 | surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 956 | surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 957 | surface.secondary.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 958 | surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 959 | surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 960 | surface.secondary.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 961 | surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 962 | surface.secondary.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 963 | surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 964 | surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 965 | surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 966 | surface.secondary.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 967 | surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 968 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 969 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 970 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 971 | surface.secondary.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 972 | surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 973 | surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 974 | surface.secondary.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 975 | surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 976 | surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 977 | surface.secondary.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 978 | surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 979 | surface.secondary.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 980 | surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 981 | surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 982 | surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 983 | surface.secondary.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 984 | surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 985 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 986 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 987 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 988 | surface.secondary.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 989 | surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 990 | surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 991 | surface.secondary.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 992 | surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 993 | surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 994 | surface.secondary.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 995 | surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 996 | surface.secondary.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 997 | surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 998 | surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 999 | surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1000 | surface.secondary.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 1001 | surface.secondary.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1002 | surface.secondary.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 1003 | surface.secondary.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1004 | surface.secondary.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 1005 | surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1006 | surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1007 | surface.secondary.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 1008 | surface.secondary.fuel.bed.depth | FuelBedDepth | ft |
  | 1009 | surface.secondary.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 1010 | surface.secondary.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 1011 | surface.secondary.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1012 | surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1013 | surface.secondary.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 1014 | surface.secondary.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 1015 | surface.secondary.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1016 | surface.secondary.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1017 | surface.secondary.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 1018 | surface.secondary.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 1019 | surface.secondary.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 1020 | surface.secondary.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1021 | surface.secondary.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1022 | surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1023 | surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1024 | surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1025 | surface.secondary.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1026 | surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1027 | surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1028 | surface.secondary.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 1029 | surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1030 | surface.secondary.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1031 | surface.secondary.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 1032 | surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1033 | surface.secondary.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 1034 | surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1035 | surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1036 | surface.secondary.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1037 | surface.secondary.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 1038 | surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1039 | surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1040 | surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1041 | surface.secondary.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1042 | surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1043 | surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1044 | surface.secondary.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 1045 | surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1046 | surface.secondary.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1047 | surface.secondary.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 1048 | surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1049 | surface.secondary.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 1050 | surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1051 | surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1052 | surface.secondary.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1053 | surface.secondary.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 1054 | surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1055 | surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1056 | surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1057 | surface.secondary.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1058 | surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1059 | surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1060 | surface.secondary.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 1061 | surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1062 | surface.secondary.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1063 | surface.secondary.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 1064 | surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1065 | surface.secondary.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 1066 | surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1067 | surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1068 | surface.secondary.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1069 | surface.secondary.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 1070 | surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1071 | surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1072 | surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1073 | surface.secondary.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1074 | surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1075 | surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1076 | surface.secondary.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 1077 | surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1078 | surface.secondary.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1079 | surface.secondary.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 1080 | surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1081 | surface.secondary.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 1082 | surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1083 | surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1084 | surface.secondary.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1085 | surface.secondary.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 1086 | surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1087 | surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1088 | surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1089 | surface.secondary.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1090 | surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1091 | surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1092 | surface.secondary.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 1093 | surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1094 | surface.secondary.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1095 | surface.secondary.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 1096 | surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1097 | surface.secondary.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 1098 | surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1099 | surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1100 | surface.secondary.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1101 | surface.secondary.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 1102 | surface.secondary.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1103 | surface.secondary.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 1104 | surface.secondary.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1105 | surface.secondary.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 1106 | surface.secondary.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1107 | surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1108 | surface.secondary.fuel.bed.live.volume | FuelBedDepth | ft |
  | 1109 | surface.secondary.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 1110 | surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 1111 | surface.secondary.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1112 | surface.secondary.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 1113 | surface.secondary.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 1114 | surface.secondary.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 1115 | surface.secondary.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 1116 | surface.secondary.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1117 | surface.secondary.fuel.bed.reactionVelocityExponent | Factor |  |
  | 1118 | surface.secondary.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 1119 | surface.secondary.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 1120 | surface.secondary.fuel.bed.savr15 | Factor |  |
  | 1121 | surface.secondary.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 1122 | surface.secondary.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1123 | surface.secondary.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 1124 | surface.secondary.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 1125 | surface.secondary.fuel.fire.flameLength | FireFlameLength | ft |
  | 1126 | surface.secondary.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 1127 | surface.secondary.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 1128 | surface.secondary.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 1129 | surface.secondary.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 1130 | surface.secondary.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 1131 | surface.secondary.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 1132 | surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 1133 | surface.secondary.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 1134 | surface.secondary.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 1135 | surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 1136 | surface.secondary.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 1137 | surface.secondary.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 1138 | surface.secondary.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 1139 | surface.secondary.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 1140 | surface.secondary.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 1141 | surface.secondary.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 1142 | surface.secondary.fuel.fire.phiEffectiveWind | Factor |  |
  | 1143 | surface.secondary.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1144 | surface.secondary.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 1145 | surface.secondary.fuel.fire.slope.k | Factor |  |
  | 1146 | surface.secondary.fuel.fire.slope.phi | Factor |  |
  | 1147 | surface.secondary.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 1148 | surface.secondary.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 1149 | surface.secondary.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 1150 | surface.secondary.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 1151 | surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 1152 | surface.secondary.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 1153 | surface.secondary.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 1154 | surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 1155 | surface.secondary.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 1156 | surface.secondary.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 1157 | surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 1158 | surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 1159 | surface.secondary.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 1160 | surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 1161 | surface.secondary.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 1162 | surface.secondary.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 1163 | surface.secondary.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 1164 | surface.secondary.fuel.fire.wind.factor.b | Factor |  |
  | 1165 | surface.secondary.fuel.fire.wind.factor.c | Factor |  |
  | 1166 | surface.secondary.fuel.fire.wind.factor.e | Factor |  |
  | 1167 | surface.secondary.fuel.fire.wind.factor.i | Factor |  |
  | 1168 | surface.secondary.fuel.fire.wind.factor.k | Factor |  |
  | 1169 | surface.secondary.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 1170 | surface.secondary.fuel.fire.wind.phi | Factor |  |
  | 1171 | surface.secondary.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 1172 | surface.secondary.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 1173 | surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1174 | surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1175 | surface.secondary.fuel.model.behave.domain | FuelModelDomainOption |  |
  | 1176 | surface.secondary.fuel.model.behave.parms.cured.herb.fraction | FuelDeadFraction | ratio |
  | 1177 | surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 1178 | surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1179 | surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1180 | surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1181 | surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1182 | surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1183 | surface.secondary.fuel.model.behave.parms.depth | FuelBedDepth | ft |
  | 1184 | surface.secondary.fuel.model.behave.parms.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1185 | surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1186 | surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1187 | surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1188 | surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1189 | surface.secondary.fuel.model.catalogKey | FuelModelKeyOption |  |
  | 1190 | surface.secondary.fuel.model.chaparral.derived.age | FuelAge | y |
  | 1191 | surface.secondary.fuel.model.chaparral.derived.averageMortality | MortalityFraction | ratio |
  | 1192 | surface.secondary.fuel.model.chaparral.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1193 | surface.secondary.fuel.model.chaparral.derived.deadLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 1194 | surface.secondary.fuel.model.chaparral.derived.deadLoad | FuelOvendryLoad | lb/ft2 |
  | 1195 | surface.secondary.fuel.model.chaparral.derived.deadMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 1196 | surface.secondary.fuel.model.chaparral.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1197 | surface.secondary.fuel.model.chaparral.derived.depth | FuelBedDepth | ft |
  | 1198 | surface.secondary.fuel.model.chaparral.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1199 | surface.secondary.fuel.model.chaparral.derived.liveLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 1200 | surface.secondary.fuel.model.chaparral.derived.liveLeafLoad | FuelOvendryLoad | lb/ft2 |
  | 1201 | surface.secondary.fuel.model.chaparral.derived.liveLoad | FuelOvendryLoad | lb/ft2 |
  | 1202 | surface.secondary.fuel.model.chaparral.derived.liveMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 1203 | surface.secondary.fuel.model.chaparral.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1204 | surface.secondary.fuel.model.chaparral.derived.severeMortality | MortalityFraction | ratio |
  | 1205 | surface.secondary.fuel.model.chaparral.derived.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1206 | surface.secondary.fuel.model.chaparral.domain | FuelModelDomainOption |  |
  | 1207 | surface.secondary.fuel.model.chaparral.parms.applied.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1208 | surface.secondary.fuel.model.chaparral.parms.chaparralType | ChaparralTypeOption |  |
  | 1209 | surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction | FuelDeadFraction | ratio |
  | 1210 | surface.secondary.fuel.model.chaparral.parms.observed.depth | FuelBedDepth | ft |
  | 1211 | surface.secondary.fuel.model.chaparral.parms.observed.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1212 | surface.secondary.fuel.model.domain | FuelModelDomainOption |  |
  | 1213 | surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1214 | surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 1215 | surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad | FuelOvendryLoad | lb/ft2 |
  | 1216 | surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1217 | surface.secondary.fuel.model.palmettoGallberry.derived.depth | FuelBedDepth | ft |
  | 1218 | surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1219 | surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 1220 | surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1221 | surface.secondary.fuel.model.palmettoGallberry.domain | FuelModelDomainOption |  |
  | 1222 | surface.secondary.fuel.model.palmettoGallberry.parms.age | FuelAge | y |
  | 1223 | surface.secondary.fuel.model.palmettoGallberry.parms.basalArea | FuelBasalArea | ft2 |
  | 1224 | surface.secondary.fuel.model.palmettoGallberry.parms.cover | FuelCoverFraction | ratio |
  | 1225 | surface.secondary.fuel.model.palmettoGallberry.parms.height | FuelBedDepth | ft |
  | 1226 | surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1227 | surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 1228 | surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1229 | surface.secondary.fuel.model.westernAspen.derived.depth | FuelBedDepth | ft |
  | 1230 | surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1231 | surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1232 | surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 1233 | surface.secondary.fuel.model.westernAspen.domain | FuelModelDomainOption |  |
  | 1234 | surface.secondary.fuel.model.westernAspen.parms.aspenType | WesternAspenTypeOption |  |
  | 1235 | surface.secondary.fuel.model.westernAspen.parms.curingLevel | FuelDeadFraction | ratio |

---
<a id='surface-weighted-variables'></a>

## ![](favicon.png) **surface.weighted**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 1236 | surface.weighted.fire.arithmeticMean.spreadRate | FireSpreadRate | ft/min |
  | 1237 | surface.weighted.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 1238 | surface.weighted.fire.expectedValue.spreadRate | FireSpreadRate | ft/min |
  | 1239 | surface.weighted.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 1240 | surface.weighted.fire.flameLength | FireFlameLength | ft |
  | 1241 | surface.weighted.fire.harmonicMean.spreadRate | FireSpreadRate | ft/min |
  | 1242 | surface.weighted.fire.heading.fromNorth | CompassAzimuth | deg |
  | 1243 | surface.weighted.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 1244 | surface.weighted.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 1245 | surface.weighted.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 1246 | surface.weighted.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 1247 | surface.weighted.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 1248 | surface.weighted.fire.primaryCover | FuelCoverFraction | ratio |
  | 1249 | surface.weighted.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1250 | surface.weighted.fire.scorchHeight | FireScorchHeight | ft |
  | 1251 | surface.weighted.fire.spreadRate | FireSpreadRate | ft/min |
  | 1252 | surface.weighted.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 1253 | surface.weighted.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
