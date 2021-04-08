# ![](favicon.png) 14 cbevins/fire-behavior-simulator Variable Names

| Prev: [12 Author](./12_Author.md) | Next: [14 Table of Variables](./14_VariableNames.md) |  [Table of Contents](../README.md) |

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
  | 13 | configure.wind.direction | ConfigWindDirection |  |
  | 14 | configure.wind.speed | ConfigWindSpeed |  |

---
<a id='crown-canopy-variables'></a>

## ![](favicon.png) **crown.canopy**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 15 | crown.canopy.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 16 | crown.canopy.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 17 | crown.canopy.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 18 | crown.canopy.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 19 | crown.canopy.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 20 | crown.canopy.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 21 | crown.canopy.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 22 | crown.canopy.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 23 | crown.canopy.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 24 | crown.canopy.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 25 | crown.canopy.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 26 | crown.canopy.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 27 | crown.canopy.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 28 | crown.canopy.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 29 | crown.canopy.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 30 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 31 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 32 | crown.canopy.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 33 | crown.canopy.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 34 | crown.canopy.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 35 | crown.canopy.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 36 | crown.canopy.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 37 | crown.canopy.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 38 | crown.canopy.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 39 | crown.canopy.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 40 | crown.canopy.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 41 | crown.canopy.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 42 | crown.canopy.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 43 | crown.canopy.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 44 | crown.canopy.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 45 | crown.canopy.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 46 | crown.canopy.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 47 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 48 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 49 | crown.canopy.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 50 | crown.canopy.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 51 | crown.canopy.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 52 | crown.canopy.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 53 | crown.canopy.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 54 | crown.canopy.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 55 | crown.canopy.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 56 | crown.canopy.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 57 | crown.canopy.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 58 | crown.canopy.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 59 | crown.canopy.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 60 | crown.canopy.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 61 | crown.canopy.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 62 | crown.canopy.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 63 | crown.canopy.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 64 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 65 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 66 | crown.canopy.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 67 | crown.canopy.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 68 | crown.canopy.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 69 | crown.canopy.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 70 | crown.canopy.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 71 | crown.canopy.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 72 | crown.canopy.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 73 | crown.canopy.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 74 | crown.canopy.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 75 | crown.canopy.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 76 | crown.canopy.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 77 | crown.canopy.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 78 | crown.canopy.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 79 | crown.canopy.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 80 | crown.canopy.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 81 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 82 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 83 | crown.canopy.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 84 | crown.canopy.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 85 | crown.canopy.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 86 | crown.canopy.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 87 | crown.canopy.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 88 | crown.canopy.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 89 | crown.canopy.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 90 | crown.canopy.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 91 | crown.canopy.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 92 | crown.canopy.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 93 | crown.canopy.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 94 | crown.canopy.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 95 | crown.canopy.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 96 | crown.canopy.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 97 | crown.canopy.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 98 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 99 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 100 | crown.canopy.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 101 | crown.canopy.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 102 | crown.canopy.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 103 | crown.canopy.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 104 | crown.canopy.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 105 | crown.canopy.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 106 | crown.canopy.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 107 | crown.canopy.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 108 | crown.canopy.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 109 | crown.canopy.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 110 | crown.canopy.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 111 | crown.canopy.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 112 | crown.canopy.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 113 | crown.canopy.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 114 | crown.canopy.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 115 | crown.canopy.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 116 | crown.canopy.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 117 | crown.canopy.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 118 | crown.canopy.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 119 | crown.canopy.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 120 | crown.canopy.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 121 | crown.canopy.fuel.bed.depth | FuelBedDepth | ft |
  | 122 | crown.canopy.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 123 | crown.canopy.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 124 | crown.canopy.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 125 | crown.canopy.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 126 | crown.canopy.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 127 | crown.canopy.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 128 | crown.canopy.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 129 | crown.canopy.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 130 | crown.canopy.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 131 | crown.canopy.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 132 | crown.canopy.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 133 | crown.canopy.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 134 | crown.canopy.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 135 | crown.canopy.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 136 | crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 137 | crown.canopy.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 138 | crown.canopy.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 139 | crown.canopy.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 140 | crown.canopy.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 141 | crown.canopy.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 142 | crown.canopy.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 143 | crown.canopy.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 144 | crown.canopy.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 145 | crown.canopy.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 146 | crown.canopy.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 147 | crown.canopy.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 148 | crown.canopy.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 149 | crown.canopy.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 150 | crown.canopy.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 151 | crown.canopy.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 152 | crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 153 | crown.canopy.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 154 | crown.canopy.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 155 | crown.canopy.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 156 | crown.canopy.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 157 | crown.canopy.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 158 | crown.canopy.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 159 | crown.canopy.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 160 | crown.canopy.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 161 | crown.canopy.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 162 | crown.canopy.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 163 | crown.canopy.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 164 | crown.canopy.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 165 | crown.canopy.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 166 | crown.canopy.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 167 | crown.canopy.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 168 | crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 169 | crown.canopy.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 170 | crown.canopy.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 171 | crown.canopy.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 172 | crown.canopy.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 173 | crown.canopy.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 174 | crown.canopy.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 175 | crown.canopy.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 176 | crown.canopy.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 177 | crown.canopy.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 178 | crown.canopy.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 179 | crown.canopy.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 180 | crown.canopy.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 181 | crown.canopy.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 182 | crown.canopy.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 183 | crown.canopy.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 184 | crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 185 | crown.canopy.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 186 | crown.canopy.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 187 | crown.canopy.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 188 | crown.canopy.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 189 | crown.canopy.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 190 | crown.canopy.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 191 | crown.canopy.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 192 | crown.canopy.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 193 | crown.canopy.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 194 | crown.canopy.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 195 | crown.canopy.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 196 | crown.canopy.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 197 | crown.canopy.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 198 | crown.canopy.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 199 | crown.canopy.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 200 | crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 201 | crown.canopy.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 202 | crown.canopy.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 203 | crown.canopy.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 204 | crown.canopy.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 205 | crown.canopy.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 206 | crown.canopy.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 207 | crown.canopy.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 208 | crown.canopy.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 209 | crown.canopy.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 210 | crown.canopy.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 211 | crown.canopy.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 212 | crown.canopy.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 213 | crown.canopy.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 214 | crown.canopy.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 215 | crown.canopy.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 216 | crown.canopy.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 217 | crown.canopy.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 218 | crown.canopy.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 219 | crown.canopy.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 220 | crown.canopy.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 221 | crown.canopy.fuel.bed.live.volume | FuelBedDepth | ft |
  | 222 | crown.canopy.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 223 | crown.canopy.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 224 | crown.canopy.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 225 | crown.canopy.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 226 | crown.canopy.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 227 | crown.canopy.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 228 | crown.canopy.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 229 | crown.canopy.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 230 | crown.canopy.fuel.bed.reactionVelocityExponent | Factor |  |
  | 231 | crown.canopy.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 232 | crown.canopy.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 233 | crown.canopy.fuel.bed.savr15 | Factor |  |
  | 234 | crown.canopy.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 235 | crown.canopy.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 236 | crown.canopy.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 237 | crown.canopy.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 238 | crown.canopy.fuel.fire.flameLength | FireFlameLength | ft |
  | 239 | crown.canopy.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 240 | crown.canopy.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 241 | crown.canopy.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 242 | crown.canopy.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 243 | crown.canopy.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 244 | crown.canopy.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 245 | crown.canopy.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 246 | crown.canopy.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 247 | crown.canopy.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 248 | crown.canopy.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 249 | crown.canopy.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 250 | crown.canopy.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 251 | crown.canopy.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 252 | crown.canopy.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 253 | crown.canopy.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 254 | crown.canopy.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 255 | crown.canopy.fuel.fire.phiEffectiveWind | Factor |  |
  | 256 | crown.canopy.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 257 | crown.canopy.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 258 | crown.canopy.fuel.fire.slope.k | Factor |  |
  | 259 | crown.canopy.fuel.fire.slope.phi | Factor |  |
  | 260 | crown.canopy.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 261 | crown.canopy.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 262 | crown.canopy.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 263 | crown.canopy.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 264 | crown.canopy.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 265 | crown.canopy.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 266 | crown.canopy.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 267 | crown.canopy.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 268 | crown.canopy.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 269 | crown.canopy.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 270 | crown.canopy.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 271 | crown.canopy.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 272 | crown.canopy.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 273 | crown.canopy.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 274 | crown.canopy.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 275 | crown.canopy.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 276 | crown.canopy.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 277 | crown.canopy.fuel.fire.wind.factor.b | Factor |  |
  | 278 | crown.canopy.fuel.fire.wind.factor.c | Factor |  |
  | 279 | crown.canopy.fuel.fire.wind.factor.e | Factor |  |
  | 280 | crown.canopy.fuel.fire.wind.factor.i | Factor |  |
  | 281 | crown.canopy.fuel.fire.wind.factor.k | Factor |  |
  | 282 | crown.canopy.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 283 | crown.canopy.fuel.fire.wind.phi | Factor |  |
  | 284 | crown.canopy.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 285 | crown.canopy.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |

---
<a id='crown-fire-variables'></a>

## ![](favicon.png) **crown.fire**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 286 | crown.fire.active.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 287 | crown.fire.active.flameLength | FireFlameLength | ft |
  | 288 | crown.fire.active.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 289 | crown.fire.active.isPlumeDominated | NoYes |  |
  | 290 | crown.fire.active.isWindDriven | NoYes |  |
  | 291 | crown.fire.active.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 292 | crown.fire.active.map.area | MapArea | in2 |
  | 293 | crown.fire.active.map.length | MapDistance | in |
  | 294 | crown.fire.active.map.perimeter | MapDistance | in |
  | 295 | crown.fire.active.map.width | MapDistance | in |
  | 296 | crown.fire.active.powerOfTheFire | FirePower | btu/min |
  | 297 | crown.fire.active.powerOfTheWind | FirePower | btu/min |
  | 298 | crown.fire.active.powerRatio | FirePowerRatio |  |
  | 299 | crown.fire.active.size.area | FireArea | ft2 |
  | 300 | crown.fire.active.size.length | FireSpreadDistance | ft |
  | 301 | crown.fire.active.size.perimeter | FireSpreadDistance | ft |
  | 302 | crown.fire.active.size.width | FireSpreadDistance | ft |
  | 303 | crown.fire.active.spreadRate | FireSpreadRate | ft/min |
  | 304 | crown.fire.final.crownFractionBurned | CrownFireBurnedFraction | ratio |
  | 305 | crown.fire.final.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 306 | crown.fire.final.flameLength | FireFirelineIntensity | btu/ft/s |
  | 307 | crown.fire.final.map.area | MapArea | in2 |
  | 308 | crown.fire.final.map.length | MapDistance | in |
  | 309 | crown.fire.final.map.perimeter | MapDistance | in |
  | 310 | crown.fire.final.map.width | MapDistance | in |
  | 311 | crown.fire.final.rSa | FireSpreadRate | ft/min |
  | 312 | crown.fire.final.size.area | FireArea | ft2 |
  | 313 | crown.fire.final.size.length | FireSpreadDistance | ft |
  | 314 | crown.fire.final.size.perimeter | FireSpreadDistance | ft |
  | 315 | crown.fire.final.size.width | FireSpreadDistance | ft |
  | 316 | crown.fire.final.spreadRate | FireSpreadRate | ft/min |
  | 317 | crown.fire.initiation.activeRatio | CrownFireActiveRatio |  |
  | 318 | crown.fire.initiation.canTransition | NoYes |  |
  | 319 | crown.fire.initiation.crowningIndex | Factor |  |
  | 320 | crown.fire.initiation.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 321 | crown.fire.initiation.flameLength | FireFlameLength | ft |
  | 322 | crown.fire.initiation.isActiveCrownFire | NoYes |  |
  | 323 | crown.fire.initiation.isConditionalCrownFire | NoYes |  |
  | 324 | crown.fire.initiation.isCrownFire | NoYes |  |
  | 325 | crown.fire.initiation.isPassiveCrownFire | NoYes |  |
  | 326 | crown.fire.initiation.isSurfaceFire | NoYes |  |
  | 327 | crown.fire.initiation.oActive | WindSpeed | ft/min |
  | 328 | crown.fire.initiation.rPrime | FireSpreadRate | ft/min |
  | 329 | crown.fire.initiation.spreadRate | FireSpreadRate | ft/min |
  | 330 | crown.fire.initiation.transitionRatio | CrownTransitionRatio |  |
  | 331 | crown.fire.initiation.type | CrownFireInitiationTypeOption |  |
  | 332 | crown.fire.surface.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 333 | crown.fire.surface.flameLength | FireFlameLength | ft |
  | 334 | crown.fire.surface.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |

---

<a id='docs-variables'></a>

## ![](favicon.png) **docs**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 335 | docs.run.description | Documentation |  |
  | 336 | docs.run.mainTitle | Documentation |  |
  | 337 | docs.run.subTitle | Documentation |  |
  | 338 | docs.run.userName | Documentation |  |

---

<a id='ignition-variables'></a>

## ![](favicon.png) **ignition**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 339 | ignition.firebrand.probability | IgnitionProbability | ratio |
  | 340 | ignition.lightningStrike.charge | IgnitionLightningChargeOption |  |
  | 341 | ignition.lightningStrike.fuel.depth | IgnitionFuelDepth | in |
  | 342 | ignition.lightningStrike.fuel.type | IgnitionFuelTypeOption |  |
  | 343 | ignition.lightningStrike.probability | IgnitionProbability | ratio |

---

<a id='link-variables'></a>

## ![](favicon.png) **link**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 344 | link.crownFire | ConfigLinkSurfaceFire |  |
  | 345 | link.crownSpot | ConfigLinkCrownFire |  |
  | 346 | link.fireContain | ConfigLinkFireEllipse |  |
  | 347 | link.fireEllipse | ConfigLinkSurfaceFire |  |
  | 348 | link.scorchHeight | ConfigLinkSurfaceFire |  |
  | 349 | link.surfaceSpot | ConfigLinkSurfaceFire |  |
  | 350 | link.treeMortality | ConfigLinkScorchHeight |  |

---

<a id='module-variables'></a>

## ![](favicon.png) **module**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 351 | module.crownFire | ConfigModuleActive |  |
  | 352 | module.crownSpot | ConfigModuleActive |  |
  | 353 | module.fireContain | ConfigModuleActive |  |
  | 354 | module.fireEllipse | ConfigModuleActive |  |
  | 355 | module.ignitionProbability | ConfigModuleActive |  |
  | 356 | module.scorchHeight | ConfigModuleActive |  |
  | 357 | module.spotting | ConfigModuleActive |  |
  | 358 | module.surfaceFire | ConfigModuleActive |  |
  | 359 | module.surfaceSpot | ConfigModuleActive |  |
  | 360 | module.treeMortality | ConfigModuleActive |  |

---

<a id='mortality-variables'></a>

## ![](favicon.png) **mortality**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 361 | mortality.crownLengthScorched | MortalityFraction | ratio |
  | 362 | mortality.crownVolumeScorched | MortalityFraction | ratio |
  | 363 | mortality.rate | MortalityFraction | ratio |
  | 364 | mortality.scorchHeight | FireScorchHeight | ft |

---

<a id='scorch-variables'></a>

## ![](favicon.png) **scorch**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 365 | scorch.height | FireScorchHeight | ft |

---

<a id='site-variables'></a>

## ![](favicon.png) **site**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 366 | site.canopy.cover | FuelCoverFraction | ratio |
  | 367 | site.canopy.crown.baseHeight | TreeHeight | ft |
  | 368 | site.canopy.crown.fill | CrownFillFraction | ratio |
  | 369 | site.canopy.crown.length | TreeHeight | ft |
  | 370 | site.canopy.crown.ratio | CrownRatioFraction | ratio |
  | 371 | site.canopy.crown.totalHeight | TreeHeight | ft |
  | 372 | site.canopy.downwind.appliedHeight | TreeHeight | ft |
  | 373 | site.canopy.downwind.height | TreeHeight | ft |
  | 374 | site.canopy.downwind.isOpen | DownWindCanopyIsOpen |  |
  | 375 | site.canopy.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 376 | site.canopy.fuel.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 377 | site.canopy.fuel.foliar.moistureContent | FuelMoistureContent | ratio |
  | 378 | site.canopy.fuel.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 379 | site.canopy.fuel.isSheltered | FuelIsSheltered |  |
  | 380 | site.canopy.fuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 381 | site.canopy.fuel.shading | FuelCoverFraction | ratio |
  | 382 | site.canopy.sheltered.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 383 | site.canopy.tree.barkThickness | TreeBarkThickness | in |
  | 384 | site.canopy.tree.dbh | TreeDbh | in |
  | 385 | site.canopy.tree.species.fofem6.code | TreeSpeciesFofem6Option |  |
  | 386 | site.doc.date | Documentation |  |
  | 387 | site.doc.id | Documentation |  |
  | 388 | site.doc.location | Documentation |  |
  | 389 | site.doc.station | Documentation |  |
  | 390 | site.doc.time | Documentation |  |
  | 391 | site.fire.crown.flameLength | FireFlameLength | ft |
  | 392 | site.fire.observed.effectiveWindSpeed | WindSpeed | ft/min |
  | 393 | site.fire.observed.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 394 | site.fire.observed.flameLength | FireFlameLength | ft |
  | 395 | site.fire.observed.heading.fromNorth | CompassAzimuth | deg |
  | 396 | site.fire.observed.heading.fromUpslope | CompassAzimuth | deg |
  | 397 | site.fire.observed.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 398 | site.fire.observed.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 399 | site.fire.observed.scorchHeight | FireScorchHeight | ft |
  | 400 | site.fire.observed.spreadRate | FireSpreadRate | ft/min |
  | 401 | site.fire.time.sinceIgnition | FireElapsedTime | min |
  | 402 | site.fire.vector.fromHead | CompassAzimuth | deg |
  | 403 | site.fire.vector.fromNorth | CompassAzimuth | deg |
  | 404 | site.fire.vector.fromUpslope | CompassAzimuth | deg |
  | 405 | site.map.contours | MapContoursCount |  |
  | 406 | site.map.distance | FireSpreadDistance | ft |
  | 407 | site.map.factor | MapFactor |  |
  | 408 | site.map.interval | FireSpreadDistance | ft |
  | 409 | site.map.reach | FireSpreadDistance | ft |
  | 410 | site.map.rise | FireSpreadDistance | ft |
  | 411 | site.map.scale | MapScale |  |
  | 412 | site.map.slope.degrees | SlopeSteepnessDegrees | deg |
  | 413 | site.map.slope.ratio | SlopeSteepnessRatio | ratio |
  | 414 | site.moisture.dead.category | FuelMoistureContent | ratio |
  | 415 | site.moisture.dead.tl100h | FuelMoistureContent | ratio |
  | 416 | site.moisture.dead.tl10h | FuelMoistureContent | ratio |
  | 417 | site.moisture.dead.tl1h | FuelMoistureContent | ratio |
  | 418 | site.moisture.live.category | FuelMoistureContent | ratio |
  | 419 | site.moisture.live.herb | FuelMoistureContent | ratio |
  | 420 | site.moisture.live.stem | FuelMoistureContent | ratio |
  | 421 | site.slope.direction.aspect | CompassAzimuth | deg |
  | 422 | site.slope.direction.upslope | CompassAzimuth | deg |
  | 423 | site.slope.steepness.degrees | SlopeSteepnessDegrees | deg |
  | 424 | site.slope.steepness.ratio | SlopeSteepnessRatio | ratio |
  | 425 | site.temperature.air | AirTemperature | oF |
  | 426 | site.temperature.fuel | AirTemperature | oF |
  | 427 | site.terrain.ridgeValleyDistance | FireSpotDistance | ft |
  | 428 | site.terrain.ridgeValleyElevation | FireSpreadDistance | ft |
  | 429 | site.terrain.spotSourceLocation | SpottingSourceLocationOption |  |
  | 430 | site.wind.direction.heading.fromNorth | CompassAzimuth | deg |
  | 431 | site.wind.direction.heading.fromUpslope | CompassAzimuth | deg |
  | 432 | site.wind.direction.source.fromNorth | CompassAzimuth | deg |
  | 433 | site.wind.direction.source.fromUpslope | CompassAzimuth | deg |
  | 434 | site.wind.speed.at10m | WindSpeed | ft/min |
  | 435 | site.wind.speed.at20ft | WindSpeed | ft/min |
  | 436 | site.wind.speed.atMidflame | WindSpeed | ft/min |
  | 437 | site.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |

---

<a id='spotting-variables'></a>

## ![](favicon.png) **spotting**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 438 | spotting.burningPile.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 439 | spotting.burningPile.firebrand.drift | FireSpotDistance | ft |
  | 440 | spotting.burningPile.firebrand.height | TreeHeight | ft |
  | 441 | spotting.burningPile.flameHeight | FireFlameLength | ft |
  | 442 | spotting.burningPile.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 443 | spotting.burningPile.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 444 | spotting.burningPile.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 445 | spotting.crownFire.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 446 | spotting.crownFire.firebrand.drift | FireSpotDistance | ft |
  | 447 | spotting.crownFire.firebrand.height | TreeHeight | ft |
  | 448 | spotting.crownFire.firebrandObject | SpottingFirebrandObject |  |
  | 449 | spotting.crownFire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 450 | spotting.crownFire.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 451 | spotting.crownFire.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 452 | spotting.crownFire.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 453 | spotting.surfaceFire.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 454 | spotting.surfaceFire.firebrand.drift | FireSpotDistance | ft |
  | 455 | spotting.surfaceFire.firebrand.height | TreeHeight | ft |
  | 456 | spotting.surfaceFire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 457 | spotting.surfaceFire.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 458 | spotting.surfaceFire.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 459 | spotting.surfaceFire.spotDistance.mountainTerrain | FireSpotDistance | ft |
  | 460 | spotting.torchingTrees.count | TreeCount |  |
  | 461 | spotting.torchingTrees.dbh | TreeDbh | in |
  | 462 | spotting.torchingTrees.firebrand.criticalCoverHeight | TreeHeight | ft |
  | 463 | spotting.torchingTrees.firebrand.drift | FireSpotDistance | ft |
  | 464 | spotting.torchingTrees.firebrand.height | TreeHeight | ft |
  | 465 | spotting.torchingTrees.flameDuration | FireFlameDuration | min |
  | 466 | spotting.torchingTrees.flameHeight | FireFlameLength | ft |
  | 467 | spotting.torchingTrees.height | TreeHeight | ft |
  | 468 | spotting.torchingTrees.species | TorchingTreeSpeciesOption |  |
  | 469 | spotting.torchingTrees.spotDistance.flatTerrain | FireSpotDistance | ft |
  | 470 | spotting.torchingTrees.spotDistance.flatTerrainWithDrift | FireSpotDistance | ft |
  | 471 | spotting.torchingTrees.spotDistance.mountainTerrain | FireSpotDistance | ft |

---

<a id='surface-fire-ellipse-variables'></a>

## ![](favicon.png) **surface.fire.ellipse**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 472 | surface.fire.ellipse.axis.eccentricity | FireLengthToWidthRatio |  |
  | 473 | surface.fire.ellipse.axis.effectiveWindSpeed | WindSpeed | ft/min |
  | 474 | surface.fire.ellipse.axis.f.spreadRate | FireSpreadRate | ft/min |
  | 475 | surface.fire.ellipse.axis.g.spreadRate | FireSpreadRate | ft/min |
  | 476 | surface.fire.ellipse.axis.h.spreadRate | FireSpreadRate | ft/min |
  | 477 | surface.fire.ellipse.axis.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 478 | surface.fire.ellipse.axis.major.spreadRate | FireSpreadRate | ft/min |
  | 479 | surface.fire.ellipse.axis.minor.spreadRate | FireSpreadRate | ft/min |
  | 480 | surface.fire.ellipse.back.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 481 | surface.fire.ellipse.back.flameLength | FireFlameLength | ft |
  | 482 | surface.fire.ellipse.back.mapDistance | MapDistance | in |
  | 483 | surface.fire.ellipse.back.scorchHeight | FireScorchHeight | ft |
  | 484 | surface.fire.ellipse.back.spreadDistance | FireSpreadDistance | ft |
  | 485 | surface.fire.ellipse.back.spreadRate | FireSpreadRate | ft/min |
  | 486 | surface.fire.ellipse.back.treeMortality | MortalityFraction | ratio |
  | 487 | surface.fire.ellipse.beta.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 488 | surface.fire.ellipse.beta.flameLength | FireFlameLength | ft |
  | 489 | surface.fire.ellipse.beta.mapDistance | MapDistance | in |
  | 490 | surface.fire.ellipse.beta.psi | CompassAzimuth | deg |
  | 491 | surface.fire.ellipse.beta.psiSpreadRate | FireSpreadRate | ft/min |
  | 492 | surface.fire.ellipse.beta.scorchHeight | FireScorchHeight | ft |
  | 493 | surface.fire.ellipse.beta.spreadDistance | FireSpreadDistance | ft |
  | 494 | surface.fire.ellipse.beta.spreadRate | FireSpreadRate | ft/min |
  | 495 | surface.fire.ellipse.beta.theta | CompassAzimuth | deg |
  | 496 | surface.fire.ellipse.beta.treeMortality | MortalityFraction | ratio |
  | 497 | surface.fire.ellipse.beta5.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 498 | surface.fire.ellipse.beta5.flameLength | FireFlameLength | ft |
  | 499 | surface.fire.ellipse.beta5.mapDistance | MapDistance | in |
  | 500 | surface.fire.ellipse.beta5.scorchHeight | FireScorchHeight | ft |
  | 501 | surface.fire.ellipse.beta5.spreadDistance | FireSpreadDistance | ft |
  | 502 | surface.fire.ellipse.beta5.spreadRate | FireSpreadRate | ft/min |
  | 503 | surface.fire.ellipse.beta5.treeMortality | MortalityFraction | ratio |
  | 504 | surface.fire.ellipse.flank.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 505 | surface.fire.ellipse.flank.flameLength | FireFlameLength | ft |
  | 506 | surface.fire.ellipse.flank.mapDistance | MapDistance | in |
  | 507 | surface.fire.ellipse.flank.scorchHeight | FireScorchHeight | ft |
  | 508 | surface.fire.ellipse.flank.spreadDistance | FireSpreadDistance | ft |
  | 509 | surface.fire.ellipse.flank.spreadRate | FireSpreadRate | ft/min |
  | 510 | surface.fire.ellipse.flank.treeMortality | MortalityFraction | ratio |
  | 511 | surface.fire.ellipse.head.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 512 | surface.fire.ellipse.head.flameLength | FireFlameLength | ft |
  | 513 | surface.fire.ellipse.head.mapDistance | MapDistance | in |
  | 514 | surface.fire.ellipse.head.scorchHeight | FireScorchHeight | ft |
  | 515 | surface.fire.ellipse.head.spreadDistance | FireSpreadDistance | ft |
  | 516 | surface.fire.ellipse.head.spreadRate | FireSpreadRate | ft/min |
  | 517 | surface.fire.ellipse.head.treeMortality | MortalityFraction | ratio |
  | 518 | surface.fire.ellipse.heading.fromNorth | CompassAzimuth | deg |
  | 519 | surface.fire.ellipse.heading.fromUpslope | CompassAzimuth | deg |
  | 520 | surface.fire.ellipse.map.area | MapArea | in2 |
  | 521 | surface.fire.ellipse.map.length | MapDistance | in |
  | 522 | surface.fire.ellipse.map.perimeter | MapDistance | in |
  | 523 | surface.fire.ellipse.map.width | MapDistance | in |
  | 524 | surface.fire.ellipse.psi.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 525 | surface.fire.ellipse.psi.flameLength | FireFlameLength | ft |
  | 526 | surface.fire.ellipse.psi.mapDistance | MapDistance | in |
  | 527 | surface.fire.ellipse.psi.scorchHeight | FireScorchHeight | ft |
  | 528 | surface.fire.ellipse.psi.spreadDistance | FireSpreadDistance | ft |
  | 529 | surface.fire.ellipse.psi.spreadRate | FireSpreadRate | ft/min |
  | 530 | surface.fire.ellipse.psi.treeMortality | MortalityFraction | ratio |
  | 531 | surface.fire.ellipse.size.area | FireArea | ft2 |
  | 532 | surface.fire.ellipse.size.length | FireSpreadDistance | ft |
  | 533 | surface.fire.ellipse.size.perimeter | FireSpreadDistance | ft |
  | 534 | surface.fire.ellipse.size.width | FireSpreadDistance | ft |
  | 535 | surface.fire.ellipse.vector.fromHead | CompassAzimuth | deg |
  | 536 | surface.fire.ellipse.vector.fromNorth | CompassAzimuth | deg |
  | 537 | surface.fire.ellipse.vector.fromUpslope | CompassAzimuth | deg |
  | 538 | surface.fire.ellipse.wind.speed.atMidflame | WindSpeed | ft/min |

---

<a id='surface-primary-variables'></a>

## ![](favicon.png) **surface.primary**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 539 | surface.primary.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 540 | surface.primary.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 541 | surface.primary.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 542 | surface.primary.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 543 | surface.primary.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 544 | surface.primary.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 545 | surface.primary.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 546 | surface.primary.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 547 | surface.primary.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 548 | surface.primary.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 549 | surface.primary.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 550 | surface.primary.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 551 | surface.primary.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 552 | surface.primary.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 553 | surface.primary.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 554 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 555 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 556 | surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 557 | surface.primary.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 558 | surface.primary.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 559 | surface.primary.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 560 | surface.primary.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 561 | surface.primary.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 562 | surface.primary.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 563 | surface.primary.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 564 | surface.primary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 565 | surface.primary.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 566 | surface.primary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 567 | surface.primary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 568 | surface.primary.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 569 | surface.primary.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 570 | surface.primary.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 571 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 572 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 573 | surface.primary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 574 | surface.primary.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 575 | surface.primary.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 576 | surface.primary.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 577 | surface.primary.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 578 | surface.primary.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 579 | surface.primary.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 580 | surface.primary.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 581 | surface.primary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 582 | surface.primary.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 583 | surface.primary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 584 | surface.primary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 585 | surface.primary.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 586 | surface.primary.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 587 | surface.primary.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 588 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 589 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 590 | surface.primary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 591 | surface.primary.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 592 | surface.primary.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 593 | surface.primary.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 594 | surface.primary.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 595 | surface.primary.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 596 | surface.primary.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 597 | surface.primary.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 598 | surface.primary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 599 | surface.primary.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 600 | surface.primary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 601 | surface.primary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 602 | surface.primary.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 603 | surface.primary.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 604 | surface.primary.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 605 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 606 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 607 | surface.primary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 608 | surface.primary.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 609 | surface.primary.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 610 | surface.primary.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 611 | surface.primary.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 612 | surface.primary.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 613 | surface.primary.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 614 | surface.primary.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 615 | surface.primary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 616 | surface.primary.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 617 | surface.primary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 618 | surface.primary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 619 | surface.primary.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 620 | surface.primary.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 621 | surface.primary.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 622 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 623 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 624 | surface.primary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 625 | surface.primary.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 626 | surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 627 | surface.primary.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 628 | surface.primary.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 629 | surface.primary.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 630 | surface.primary.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 631 | surface.primary.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 632 | surface.primary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 633 | surface.primary.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 634 | surface.primary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 635 | surface.primary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 636 | surface.primary.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 637 | surface.primary.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 638 | surface.primary.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 639 | surface.primary.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 640 | surface.primary.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 641 | surface.primary.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 642 | surface.primary.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 643 | surface.primary.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 644 | surface.primary.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 645 | surface.primary.fuel.bed.depth | FuelBedDepth | ft |
  | 646 | surface.primary.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 647 | surface.primary.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 648 | surface.primary.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 649 | surface.primary.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 650 | surface.primary.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 651 | surface.primary.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 652 | surface.primary.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 653 | surface.primary.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 654 | surface.primary.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 655 | surface.primary.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 656 | surface.primary.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 657 | surface.primary.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 658 | surface.primary.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 659 | surface.primary.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 660 | surface.primary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 661 | surface.primary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 662 | surface.primary.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 663 | surface.primary.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 664 | surface.primary.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 665 | surface.primary.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 666 | surface.primary.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 667 | surface.primary.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 668 | surface.primary.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 669 | surface.primary.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 670 | surface.primary.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 671 | surface.primary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 672 | surface.primary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 673 | surface.primary.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 674 | surface.primary.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 675 | surface.primary.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 676 | surface.primary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 677 | surface.primary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 678 | surface.primary.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 679 | surface.primary.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 680 | surface.primary.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 681 | surface.primary.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 682 | surface.primary.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 683 | surface.primary.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 684 | surface.primary.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 685 | surface.primary.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 686 | surface.primary.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 687 | surface.primary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 688 | surface.primary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 689 | surface.primary.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 690 | surface.primary.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 691 | surface.primary.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 692 | surface.primary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 693 | surface.primary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 694 | surface.primary.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 695 | surface.primary.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 696 | surface.primary.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 697 | surface.primary.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 698 | surface.primary.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 699 | surface.primary.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 700 | surface.primary.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 701 | surface.primary.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 702 | surface.primary.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 703 | surface.primary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 704 | surface.primary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 705 | surface.primary.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 706 | surface.primary.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 707 | surface.primary.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 708 | surface.primary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 709 | surface.primary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 710 | surface.primary.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 711 | surface.primary.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 712 | surface.primary.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 713 | surface.primary.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 714 | surface.primary.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 715 | surface.primary.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 716 | surface.primary.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 717 | surface.primary.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 718 | surface.primary.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 719 | surface.primary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 720 | surface.primary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 721 | surface.primary.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 722 | surface.primary.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 723 | surface.primary.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 724 | surface.primary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 725 | surface.primary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 726 | surface.primary.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 727 | surface.primary.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 728 | surface.primary.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 729 | surface.primary.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 730 | surface.primary.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 731 | surface.primary.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 732 | surface.primary.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 733 | surface.primary.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 734 | surface.primary.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 735 | surface.primary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 736 | surface.primary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 737 | surface.primary.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 738 | surface.primary.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 739 | surface.primary.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 740 | surface.primary.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 741 | surface.primary.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 742 | surface.primary.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 743 | surface.primary.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 744 | surface.primary.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 745 | surface.primary.fuel.bed.live.volume | FuelBedDepth | ft |
  | 746 | surface.primary.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 747 | surface.primary.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 748 | surface.primary.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 749 | surface.primary.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 750 | surface.primary.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 751 | surface.primary.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 752 | surface.primary.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 753 | surface.primary.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 754 | surface.primary.fuel.bed.reactionVelocityExponent | Factor |  |
  | 755 | surface.primary.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 756 | surface.primary.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 757 | surface.primary.fuel.bed.savr15 | Factor |  |
  | 758 | surface.primary.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 759 | surface.primary.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 760 | surface.primary.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 761 | surface.primary.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 762 | surface.primary.fuel.fire.flameLength | FireFlameLength | ft |
  | 763 | surface.primary.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 764 | surface.primary.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 765 | surface.primary.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 766 | surface.primary.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 767 | surface.primary.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 768 | surface.primary.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 769 | surface.primary.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 770 | surface.primary.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 771 | surface.primary.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 772 | surface.primary.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 773 | surface.primary.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 774 | surface.primary.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 775 | surface.primary.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 776 | surface.primary.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 777 | surface.primary.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 778 | surface.primary.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 779 | surface.primary.fuel.fire.phiEffectiveWind | Factor |  |
  | 780 | surface.primary.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 781 | surface.primary.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 782 | surface.primary.fuel.fire.slope.k | Factor |  |
  | 783 | surface.primary.fuel.fire.slope.phi | Factor |  |
  | 784 | surface.primary.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 785 | surface.primary.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 786 | surface.primary.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 787 | surface.primary.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 788 | surface.primary.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 789 | surface.primary.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 790 | surface.primary.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 791 | surface.primary.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 792 | surface.primary.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 793 | surface.primary.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 794 | surface.primary.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 795 | surface.primary.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 796 | surface.primary.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 797 | surface.primary.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 798 | surface.primary.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 799 | surface.primary.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 800 | surface.primary.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 801 | surface.primary.fuel.fire.wind.factor.b | Factor |  |
  | 802 | surface.primary.fuel.fire.wind.factor.c | Factor |  |
  | 803 | surface.primary.fuel.fire.wind.factor.e | Factor |  |
  | 804 | surface.primary.fuel.fire.wind.factor.i | Factor |  |
  | 805 | surface.primary.fuel.fire.wind.factor.k | Factor |  |
  | 806 | surface.primary.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 807 | surface.primary.fuel.fire.wind.phi | Factor |  |
  | 808 | surface.primary.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 809 | surface.primary.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 810 | surface.primary.fuel.model.behave.derived.dead.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 811 | surface.primary.fuel.model.behave.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 812 | surface.primary.fuel.model.behave.domain | FuelModelDomainOption |  |
  | 813 | surface.primary.fuel.model.behave.parms.cured.herb.fraction | FuelDeadFraction | ratio |
  | 814 | surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 815 | surface.primary.fuel.model.behave.parms.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 816 | surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 817 | surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 818 | surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 819 | surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 820 | surface.primary.fuel.model.behave.parms.depth | FuelBedDepth | ft |
  | 821 | surface.primary.fuel.model.behave.parms.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 822 | surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 823 | surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 824 | surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 825 | surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 826 | surface.primary.fuel.model.catalogKey | FuelModelKeyOption |  |
  | 827 | surface.primary.fuel.model.chaparral.derived.age | FuelAge | y |
  | 828 | surface.primary.fuel.model.chaparral.derived.averageMortality | MortalityFraction | ratio |
  | 829 | surface.primary.fuel.model.chaparral.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 830 | surface.primary.fuel.model.chaparral.derived.deadLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 831 | surface.primary.fuel.model.chaparral.derived.deadLoad | FuelOvendryLoad | lb/ft2 |
  | 832 | surface.primary.fuel.model.chaparral.derived.deadMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 833 | surface.primary.fuel.model.chaparral.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 834 | surface.primary.fuel.model.chaparral.derived.depth | FuelBedDepth | ft |
  | 835 | surface.primary.fuel.model.chaparral.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 836 | surface.primary.fuel.model.chaparral.derived.liveLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 837 | surface.primary.fuel.model.chaparral.derived.liveLeafLoad | FuelOvendryLoad | lb/ft2 |
  | 838 | surface.primary.fuel.model.chaparral.derived.liveLoad | FuelOvendryLoad | lb/ft2 |
  | 839 | surface.primary.fuel.model.chaparral.derived.liveMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 840 | surface.primary.fuel.model.chaparral.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 841 | surface.primary.fuel.model.chaparral.derived.severeMortality | MortalityFraction | ratio |
  | 842 | surface.primary.fuel.model.chaparral.derived.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 843 | surface.primary.fuel.model.chaparral.domain | FuelModelDomainOption |  |
  | 844 | surface.primary.fuel.model.chaparral.parms.applied.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 845 | surface.primary.fuel.model.chaparral.parms.chaparralType | ChaparralTypeOption |  |
  | 846 | surface.primary.fuel.model.chaparral.parms.observed.deadFuelFraction | FuelDeadFraction | ratio |
  | 847 | surface.primary.fuel.model.chaparral.parms.observed.depth | FuelBedDepth | ft |
  | 848 | surface.primary.fuel.model.chaparral.parms.observed.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 849 | surface.primary.fuel.model.domain | FuelModelDomainOption |  |
  | 850 | surface.primary.fuel.model.palmettoGallberry.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 851 | surface.primary.fuel.model.palmettoGallberry.derived.deadFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 852 | surface.primary.fuel.model.palmettoGallberry.derived.deadLitterLoad | FuelOvendryLoad | lb/ft2 |
  | 853 | surface.primary.fuel.model.palmettoGallberry.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 854 | surface.primary.fuel.model.palmettoGallberry.derived.depth | FuelBedDepth | ft |
  | 855 | surface.primary.fuel.model.palmettoGallberry.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 856 | surface.primary.fuel.model.palmettoGallberry.derived.liveFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 857 | surface.primary.fuel.model.palmettoGallberry.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 858 | surface.primary.fuel.model.palmettoGallberry.domain | FuelModelDomainOption |  |
  | 859 | surface.primary.fuel.model.palmettoGallberry.parms.age | FuelAge | y |
  | 860 | surface.primary.fuel.model.palmettoGallberry.parms.basalArea | FuelBasalArea | ft2 |
  | 861 | surface.primary.fuel.model.palmettoGallberry.parms.cover | FuelCoverFraction | ratio |
  | 862 | surface.primary.fuel.model.palmettoGallberry.parms.height | FuelBedDepth | ft |
  | 863 | surface.primary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 864 | surface.primary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 865 | surface.primary.fuel.model.westernAspen.derived.dead.small.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 866 | surface.primary.fuel.model.westernAspen.derived.depth | FuelBedDepth | ft |
  | 867 | surface.primary.fuel.model.westernAspen.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 868 | surface.primary.fuel.model.westernAspen.derived.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 869 | surface.primary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 870 | surface.primary.fuel.model.westernAspen.domain | FuelModelDomainOption |  |
  | 871 | surface.primary.fuel.model.westernAspen.parms.aspenType | WesternAspenTypeOption |  |
  | 872 | surface.primary.fuel.model.westernAspen.parms.curingLevel | FuelDeadFraction | ratio |

---

<a id='surface-secondary-variables'></a>

## ![](favicon.png) **surface.secondary**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 873 | surface.secondary.fuel.bed.bulkDensity | FuelBedBulkDensity | lb/ft3 |
  | 874 | surface.secondary.fuel.bed.dead.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 875 | surface.secondary.fuel.bed.dead.effectiveFuel.moistureContent | FuelMoistureContent | ratio |
  | 876 | surface.secondary.fuel.bed.dead.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 877 | surface.secondary.fuel.bed.dead.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 878 | surface.secondary.fuel.bed.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 879 | surface.secondary.fuel.bed.dead.extinction.moistureContentFactor | Factor |  |
  | 880 | surface.secondary.fuel.bed.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 881 | surface.secondary.fuel.bed.dead.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 882 | surface.secondary.fuel.bed.dead.mineralDamping | FireDampingCoefficient | ratio |
  | 883 | surface.secondary.fuel.bed.dead.moistureContent | FuelMoistureContent | ratio |
  | 884 | surface.secondary.fuel.bed.dead.moistureDamping | FireDampingCoefficient | ratio |
  | 885 | surface.secondary.fuel.bed.dead.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 886 | surface.secondary.fuel.bed.dead.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 887 | surface.secondary.fuel.bed.dead.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 888 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 889 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 890 | surface.secondary.fuel.bed.dead.particle.class1.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 891 | surface.secondary.fuel.bed.dead.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 892 | surface.secondary.fuel.bed.dead.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 893 | surface.secondary.fuel.bed.dead.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 894 | surface.secondary.fuel.bed.dead.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 895 | surface.secondary.fuel.bed.dead.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 896 | surface.secondary.fuel.bed.dead.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 897 | surface.secondary.fuel.bed.dead.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 898 | surface.secondary.fuel.bed.dead.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 899 | surface.secondary.fuel.bed.dead.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 900 | surface.secondary.fuel.bed.dead.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 901 | surface.secondary.fuel.bed.dead.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 902 | surface.secondary.fuel.bed.dead.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 903 | surface.secondary.fuel.bed.dead.particle.class1.volume | FuelVolume | ft3 |
  | 904 | surface.secondary.fuel.bed.dead.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 905 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 906 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 907 | surface.secondary.fuel.bed.dead.particle.class2.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 908 | surface.secondary.fuel.bed.dead.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 909 | surface.secondary.fuel.bed.dead.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 910 | surface.secondary.fuel.bed.dead.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 911 | surface.secondary.fuel.bed.dead.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 912 | surface.secondary.fuel.bed.dead.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 913 | surface.secondary.fuel.bed.dead.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 914 | surface.secondary.fuel.bed.dead.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 915 | surface.secondary.fuel.bed.dead.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 916 | surface.secondary.fuel.bed.dead.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 917 | surface.secondary.fuel.bed.dead.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 918 | surface.secondary.fuel.bed.dead.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 919 | surface.secondary.fuel.bed.dead.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 920 | surface.secondary.fuel.bed.dead.particle.class2.volume | FuelVolume | ft3 |
  | 921 | surface.secondary.fuel.bed.dead.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 922 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 923 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 924 | surface.secondary.fuel.bed.dead.particle.class3.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 925 | surface.secondary.fuel.bed.dead.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 926 | surface.secondary.fuel.bed.dead.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 927 | surface.secondary.fuel.bed.dead.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 928 | surface.secondary.fuel.bed.dead.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 929 | surface.secondary.fuel.bed.dead.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 930 | surface.secondary.fuel.bed.dead.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 931 | surface.secondary.fuel.bed.dead.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 932 | surface.secondary.fuel.bed.dead.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 933 | surface.secondary.fuel.bed.dead.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 934 | surface.secondary.fuel.bed.dead.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 935 | surface.secondary.fuel.bed.dead.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 936 | surface.secondary.fuel.bed.dead.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 937 | surface.secondary.fuel.bed.dead.particle.class3.volume | FuelVolume | ft3 |
  | 938 | surface.secondary.fuel.bed.dead.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 939 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 940 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 941 | surface.secondary.fuel.bed.dead.particle.class4.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 942 | surface.secondary.fuel.bed.dead.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 943 | surface.secondary.fuel.bed.dead.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 944 | surface.secondary.fuel.bed.dead.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 945 | surface.secondary.fuel.bed.dead.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 946 | surface.secondary.fuel.bed.dead.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 947 | surface.secondary.fuel.bed.dead.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 948 | surface.secondary.fuel.bed.dead.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 949 | surface.secondary.fuel.bed.dead.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 950 | surface.secondary.fuel.bed.dead.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 951 | surface.secondary.fuel.bed.dead.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 952 | surface.secondary.fuel.bed.dead.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 953 | surface.secondary.fuel.bed.dead.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 954 | surface.secondary.fuel.bed.dead.particle.class4.volume | FuelVolume | ft3 |
  | 955 | surface.secondary.fuel.bed.dead.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 956 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 957 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 958 | surface.secondary.fuel.bed.dead.particle.class5.effectiveFuel.waterLoad | FuelOvendryLoad | lb/ft2 |
  | 959 | surface.secondary.fuel.bed.dead.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 960 | surface.secondary.fuel.bed.dead.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 961 | surface.secondary.fuel.bed.dead.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 962 | surface.secondary.fuel.bed.dead.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 963 | surface.secondary.fuel.bed.dead.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 964 | surface.secondary.fuel.bed.dead.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 965 | surface.secondary.fuel.bed.dead.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 966 | surface.secondary.fuel.bed.dead.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 967 | surface.secondary.fuel.bed.dead.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 968 | surface.secondary.fuel.bed.dead.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 969 | surface.secondary.fuel.bed.dead.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 970 | surface.secondary.fuel.bed.dead.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 971 | surface.secondary.fuel.bed.dead.particle.class5.volume | FuelVolume | ft3 |
  | 972 | surface.secondary.fuel.bed.dead.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 973 | surface.secondary.fuel.bed.dead.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 974 | surface.secondary.fuel.bed.dead.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 975 | surface.secondary.fuel.bed.dead.surfaceArea | FuelSurfaceArea | ft2 |
  | 976 | surface.secondary.fuel.bed.dead.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 977 | surface.secondary.fuel.bed.dead.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 978 | surface.secondary.fuel.bed.dead.volume | FuelBedDepth | ft |
  | 979 | surface.secondary.fuel.bed.depth | FuelBedDepth | ft |
  | 980 | surface.secondary.fuel.bed.heatOfPreignition | FuelBedHeatOfPreignition | btu/lb |
  | 981 | surface.secondary.fuel.bed.heatSink | FuelHeatSink | btu/ft3 |
  | 982 | surface.secondary.fuel.bed.live.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 983 | surface.secondary.fuel.bed.live.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 984 | surface.secondary.fuel.bed.live.extinction.moistureContent | FuelMoistureContent | ratio |
  | 985 | surface.secondary.fuel.bed.live.extinction.moistureContentFactor | Factor |  |
  | 986 | surface.secondary.fuel.bed.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 987 | surface.secondary.fuel.bed.live.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 988 | surface.secondary.fuel.bed.live.mineralDamping | FireDampingCoefficient | ratio |
  | 989 | surface.secondary.fuel.bed.live.moistureContent | FuelMoistureContent | ratio |
  | 990 | surface.secondary.fuel.bed.live.moistureDamping | FireDampingCoefficient | ratio |
  | 991 | surface.secondary.fuel.bed.live.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 992 | surface.secondary.fuel.bed.live.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 993 | surface.secondary.fuel.bed.live.particle.class1.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 994 | surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 995 | surface.secondary.fuel.bed.live.particle.class1.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 996 | surface.secondary.fuel.bed.live.particle.class1.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 997 | surface.secondary.fuel.bed.live.particle.class1.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 998 | surface.secondary.fuel.bed.live.particle.class1.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 999 | surface.secondary.fuel.bed.live.particle.class1.moistureContent | FuelMoistureContent | ratio |
  | 1000 | surface.secondary.fuel.bed.live.particle.class1.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1001 | surface.secondary.fuel.bed.live.particle.class1.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1002 | surface.secondary.fuel.bed.live.particle.class1.sizeClass | FuelSizeClassIndex |  |
  | 1003 | surface.secondary.fuel.bed.live.particle.class1.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1004 | surface.secondary.fuel.bed.live.particle.class1.surfaceArea | FuelSurfaceArea | ft2 |
  | 1005 | surface.secondary.fuel.bed.live.particle.class1.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1006 | surface.secondary.fuel.bed.live.particle.class1.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1007 | surface.secondary.fuel.bed.live.particle.class1.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1008 | surface.secondary.fuel.bed.live.particle.class1.volume | FuelVolume | ft3 |
  | 1009 | surface.secondary.fuel.bed.live.particle.class2.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1010 | surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1011 | surface.secondary.fuel.bed.live.particle.class2.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1012 | surface.secondary.fuel.bed.live.particle.class2.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1013 | surface.secondary.fuel.bed.live.particle.class2.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1014 | surface.secondary.fuel.bed.live.particle.class2.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1015 | surface.secondary.fuel.bed.live.particle.class2.moistureContent | FuelMoistureContent | ratio |
  | 1016 | surface.secondary.fuel.bed.live.particle.class2.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1017 | surface.secondary.fuel.bed.live.particle.class2.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1018 | surface.secondary.fuel.bed.live.particle.class2.sizeClass | FuelSizeClassIndex |  |
  | 1019 | surface.secondary.fuel.bed.live.particle.class2.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1020 | surface.secondary.fuel.bed.live.particle.class2.surfaceArea | FuelSurfaceArea | ft2 |
  | 1021 | surface.secondary.fuel.bed.live.particle.class2.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1022 | surface.secondary.fuel.bed.live.particle.class2.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1023 | surface.secondary.fuel.bed.live.particle.class2.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1024 | surface.secondary.fuel.bed.live.particle.class2.volume | FuelVolume | ft3 |
  | 1025 | surface.secondary.fuel.bed.live.particle.class3.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1026 | surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1027 | surface.secondary.fuel.bed.live.particle.class3.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1028 | surface.secondary.fuel.bed.live.particle.class3.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1029 | surface.secondary.fuel.bed.live.particle.class3.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1030 | surface.secondary.fuel.bed.live.particle.class3.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1031 | surface.secondary.fuel.bed.live.particle.class3.moistureContent | FuelMoistureContent | ratio |
  | 1032 | surface.secondary.fuel.bed.live.particle.class3.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1033 | surface.secondary.fuel.bed.live.particle.class3.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1034 | surface.secondary.fuel.bed.live.particle.class3.sizeClass | FuelSizeClassIndex |  |
  | 1035 | surface.secondary.fuel.bed.live.particle.class3.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1036 | surface.secondary.fuel.bed.live.particle.class3.surfaceArea | FuelSurfaceArea | ft2 |
  | 1037 | surface.secondary.fuel.bed.live.particle.class3.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1038 | surface.secondary.fuel.bed.live.particle.class3.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1039 | surface.secondary.fuel.bed.live.particle.class3.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1040 | surface.secondary.fuel.bed.live.particle.class3.volume | FuelVolume | ft3 |
  | 1041 | surface.secondary.fuel.bed.live.particle.class4.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1042 | surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1043 | surface.secondary.fuel.bed.live.particle.class4.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1044 | surface.secondary.fuel.bed.live.particle.class4.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1045 | surface.secondary.fuel.bed.live.particle.class4.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1046 | surface.secondary.fuel.bed.live.particle.class4.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1047 | surface.secondary.fuel.bed.live.particle.class4.moistureContent | FuelMoistureContent | ratio |
  | 1048 | surface.secondary.fuel.bed.live.particle.class4.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1049 | surface.secondary.fuel.bed.live.particle.class4.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1050 | surface.secondary.fuel.bed.live.particle.class4.sizeClass | FuelSizeClassIndex |  |
  | 1051 | surface.secondary.fuel.bed.live.particle.class4.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1052 | surface.secondary.fuel.bed.live.particle.class4.surfaceArea | FuelSurfaceArea | ft2 |
  | 1053 | surface.secondary.fuel.bed.live.particle.class4.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1054 | surface.secondary.fuel.bed.live.particle.class4.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1055 | surface.secondary.fuel.bed.live.particle.class4.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1056 | surface.secondary.fuel.bed.live.particle.class4.volume | FuelVolume | ft3 |
  | 1057 | surface.secondary.fuel.bed.live.particle.class5.effective.mineralContent | FuelEffectiveMineralContent | ratio |
  | 1058 | surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.heatingNumber | FuelEffectiveHeatingNumber | ratio |
  | 1059 | surface.secondary.fuel.bed.live.particle.class5.effectiveFuel.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1060 | surface.secondary.fuel.bed.live.particle.class5.fiberDensity | FuelParticleFiberDensity | lb/ft3 |
  | 1061 | surface.secondary.fuel.bed.live.particle.class5.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1062 | surface.secondary.fuel.bed.live.particle.class5.heatOfPreignition | FuelHeatOfPreignition | btu/lb |
  | 1063 | surface.secondary.fuel.bed.live.particle.class5.moistureContent | FuelMoistureContent | ratio |
  | 1064 | surface.secondary.fuel.bed.live.particle.class5.net.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1065 | surface.secondary.fuel.bed.live.particle.class5.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1066 | surface.secondary.fuel.bed.live.particle.class5.sizeClass | FuelSizeClassIndex |  |
  | 1067 | surface.secondary.fuel.bed.live.particle.class5.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1068 | surface.secondary.fuel.bed.live.particle.class5.surfaceArea | FuelSurfaceArea | ft2 |
  | 1069 | surface.secondary.fuel.bed.live.particle.class5.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1070 | surface.secondary.fuel.bed.live.particle.class5.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1071 | surface.secondary.fuel.bed.live.particle.class5.total.mineralContent | FuelTotalMineralContent | ratio |
  | 1072 | surface.secondary.fuel.bed.live.particle.class5.volume | FuelVolume | ft3 |
  | 1073 | surface.secondary.fuel.bed.live.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1074 | surface.secondary.fuel.bed.live.reactionIntensityDry | FireReactionIntensity | btu/ft2/min |
  | 1075 | surface.secondary.fuel.bed.live.sizeClass.weightingFactor | WeightingFactor | ratio |
  | 1076 | surface.secondary.fuel.bed.live.surfaceArea | FuelSurfaceArea | ft2 |
  | 1077 | surface.secondary.fuel.bed.live.surfaceArea.weightingFactor | WeightingFactor | ratio |
  | 1078 | surface.secondary.fuel.bed.live.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1079 | surface.secondary.fuel.bed.live.volume | FuelBedDepth | ft |
  | 1080 | surface.secondary.fuel.bed.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 1081 | surface.secondary.fuel.bed.open.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 1082 | surface.secondary.fuel.bed.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1083 | surface.secondary.fuel.bed.packingRatio | FuelBedPackingRatio |  |
  | 1084 | surface.secondary.fuel.bed.packingRatio.optimum | FuelBedPackingRatio |  |
  | 1085 | surface.secondary.fuel.bed.packingRatio.ratio | FuelBedPackingRatio |  |
  | 1086 | surface.secondary.fuel.bed.propagatingFluxRatio | FirePropagatingFluxRatio | ratio |
  | 1087 | surface.secondary.fuel.bed.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1088 | surface.secondary.fuel.bed.reactionVelocityExponent | Factor |  |
  | 1089 | surface.secondary.fuel.bed.reactionVelocityMaximum | FireReactionVelocity | min-1 |
  | 1090 | surface.secondary.fuel.bed.reactionVelocityOptimum | FireReactionVelocity | min-1 |
  | 1091 | surface.secondary.fuel.bed.savr15 | Factor |  |
  | 1092 | surface.secondary.fuel.bed.surfaceArea | FuelSurfaceArea | ft2 |
  | 1093 | surface.secondary.fuel.bed.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1094 | surface.secondary.fuel.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 1095 | surface.secondary.fuel.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 1096 | surface.secondary.fuel.fire.flameLength | FireFlameLength | ft |
  | 1097 | surface.secondary.fuel.fire.flameResidenceTime | FireResidenceTime | min |
  | 1098 | surface.secondary.fuel.fire.heading.fromNorth | CompassAzimuth | deg |
  | 1099 | surface.secondary.fuel.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 1100 | surface.secondary.fuel.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 1101 | surface.secondary.fuel.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 1102 | surface.secondary.fuel.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 1103 | surface.secondary.fuel.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 1104 | surface.secondary.fuel.fire.limit.spreadRate | FireSpreadRate | ft/min |
  | 1105 | surface.secondary.fuel.fire.limit.spreadRate.exceeded | FireSpreadRateLimitIsExceeded |  |
  | 1106 | surface.secondary.fuel.fire.limit.windSlopeSpreadRateCoefficient | Factor |  |
  | 1107 | surface.secondary.fuel.fire.maximumDirection.slope.spreadRate | FireSpreadRate | ft/min |
  | 1108 | surface.secondary.fuel.fire.maximumDirection.spreadRate | FireSpreadRate | ft/min |
  | 1109 | surface.secondary.fuel.fire.maximumDirection.wind.spreadRate | FireSpreadRate | ft/min |
  | 1110 | surface.secondary.fuel.fire.maximumDirection.xComponent | Factor |  |
  | 1111 | surface.secondary.fuel.fire.maximumDirection.yComponent | Factor |  |
  | 1112 | surface.secondary.fuel.fire.noWindNoSlope.spreadRate | FireSpreadRate | ft/min |
  | 1113 | surface.secondary.fuel.fire.phiEffectiveWind | Factor |  |
  | 1114 | surface.secondary.fuel.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1115 | surface.secondary.fuel.fire.scorchHeight | FireScorchHeight | ft |
  | 1116 | surface.secondary.fuel.fire.slope.k | Factor |  |
  | 1117 | surface.secondary.fuel.fire.slope.phi | Factor |  |
  | 1118 | surface.secondary.fuel.fire.slope.ratio | SlopeSteepnessRatio | ratio |
  | 1119 | surface.secondary.fuel.fire.spread.step1.effectiveWindSpeed | WindSpeed | ft/min |
  | 1120 | surface.secondary.fuel.fire.spread.step1.phiEffectiveWind | Factor |  |
  | 1121 | surface.secondary.fuel.fire.spread.step1.spreadRate | FireSpreadRate | ft/min |
  | 1122 | surface.secondary.fuel.fire.spread.step2.effectiveWindSpeed | WindSpeed | ft/min |
  | 1123 | surface.secondary.fuel.fire.spread.step2.phiEffectiveWind | Factor |  |
  | 1124 | surface.secondary.fuel.fire.spread.step2.spreadRate | FireSpreadRate | ft/min |
  | 1125 | surface.secondary.fuel.fire.spread.step3a.effectiveWindSpeed | WindSpeed | ft/min |
  | 1126 | surface.secondary.fuel.fire.spread.step3a.phiEffectiveWind | Factor |  |
  | 1127 | surface.secondary.fuel.fire.spread.step3a.spreadRate | FireSpreadRate | ft/min |
  | 1128 | surface.secondary.fuel.fire.spread.step3b.effectiveWindSpeed | WindSpeed | ft/min |
  | 1129 | surface.secondary.fuel.fire.spread.step3b.phiEffectiveWind | Factor |  |
  | 1130 | surface.secondary.fuel.fire.spread.step3b.spreadRate | FireSpreadRate | ft/min |
  | 1131 | surface.secondary.fuel.fire.spread.step4.effectiveWindSpeed | WindSpeed | ft/min |
  | 1132 | surface.secondary.fuel.fire.spread.step4.phiEffectiveWind | Factor |  |
  | 1133 | surface.secondary.fuel.fire.spread.step4.spreadRate | FireSpreadRate | ft/min |
  | 1134 | surface.secondary.fuel.fire.spreadRate | FireSpreadRate | ft/min |
  | 1135 | surface.secondary.fuel.fire.wind.factor.b | Factor |  |
  | 1136 | surface.secondary.fuel.fire.wind.factor.c | Factor |  |
  | 1137 | surface.secondary.fuel.fire.wind.factor.e | Factor |  |
  | 1138 | surface.secondary.fuel.fire.wind.factor.i | Factor |  |
  | 1139 | surface.secondary.fuel.fire.wind.factor.k | Factor |  |
  | 1140 | surface.secondary.fuel.fire.wind.heading.fromUpslope | CompassAzimuth | deg |
  | 1141 | surface.secondary.fuel.fire.wind.phi | Factor |  |
  | 1142 | surface.secondary.fuel.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 1143 | surface.secondary.fuel.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |
  | 1144 | surface.secondary.fuel.model.behave.derived.dead.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1145 | surface.secondary.fuel.model.behave.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1146 | surface.secondary.fuel.model.behave.domain | FuelModelDomainOption |  |
  | 1147 | surface.secondary.fuel.model.behave.parms.cured.herb.fraction | FuelDeadFraction | ratio |
  | 1148 | surface.secondary.fuel.model.behave.parms.dead.extinction.moistureContent | FuelMoistureContent | ratio |
  | 1149 | surface.secondary.fuel.model.behave.parms.dead.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1150 | surface.secondary.fuel.model.behave.parms.dead.tl100h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1151 | surface.secondary.fuel.model.behave.parms.dead.tl10h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1152 | surface.secondary.fuel.model.behave.parms.dead.tl1h.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1153 | surface.secondary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1154 | surface.secondary.fuel.model.behave.parms.depth | FuelBedDepth | ft |
  | 1155 | surface.secondary.fuel.model.behave.parms.live.heatOfCombustion | FuelHeatOfCombustion | btu/lb |
  | 1156 | surface.secondary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1157 | surface.secondary.fuel.model.behave.parms.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1158 | surface.secondary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio | FuelSurfaceAreaToVolumeRatio | ft2/ft3 |
  | 1159 | surface.secondary.fuel.model.behave.parms.total.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1160 | surface.secondary.fuel.model.catalogKey | FuelModelKeyOption |  |
  | 1161 | surface.secondary.fuel.model.chaparral.derived.age | FuelAge | y |
  | 1162 | surface.secondary.fuel.model.chaparral.derived.averageMortality | MortalityFraction | ratio |
  | 1163 | surface.secondary.fuel.model.chaparral.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1164 | surface.secondary.fuel.model.chaparral.derived.deadLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 1165 | surface.secondary.fuel.model.chaparral.derived.deadLoad | FuelOvendryLoad | lb/ft2 |
  | 1166 | surface.secondary.fuel.model.chaparral.derived.deadMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 1167 | surface.secondary.fuel.model.chaparral.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1168 | surface.secondary.fuel.model.chaparral.derived.depth | FuelBedDepth | ft |
  | 1169 | surface.secondary.fuel.model.chaparral.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1170 | surface.secondary.fuel.model.chaparral.derived.liveLargeLoad | FuelOvendryLoad | lb/ft2 |
  | 1171 | surface.secondary.fuel.model.chaparral.derived.liveLeafLoad | FuelOvendryLoad | lb/ft2 |
  | 1172 | surface.secondary.fuel.model.chaparral.derived.liveLoad | FuelOvendryLoad | lb/ft2 |
  | 1173 | surface.secondary.fuel.model.chaparral.derived.liveMediumLoad | FuelOvendryLoad | lb/ft2 |
  | 1174 | surface.secondary.fuel.model.chaparral.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1175 | surface.secondary.fuel.model.chaparral.derived.severeMortality | MortalityFraction | ratio |
  | 1176 | surface.secondary.fuel.model.chaparral.derived.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1177 | surface.secondary.fuel.model.chaparral.domain | FuelModelDomainOption |  |
  | 1178 | surface.secondary.fuel.model.chaparral.parms.applied.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1179 | surface.secondary.fuel.model.chaparral.parms.chaparralType | ChaparralTypeOption |  |
  | 1180 | surface.secondary.fuel.model.chaparral.parms.observed.deadFuelFraction | FuelDeadFraction | ratio |
  | 1181 | surface.secondary.fuel.model.chaparral.parms.observed.depth | FuelBedDepth | ft |
  | 1182 | surface.secondary.fuel.model.chaparral.parms.observed.totalLoad | FuelOvendryLoad | lb/ft2 |
  | 1183 | surface.secondary.fuel.model.domain | FuelModelDomainOption |  |
  | 1184 | surface.secondary.fuel.model.palmettoGallberry.derived.deadFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1185 | surface.secondary.fuel.model.palmettoGallberry.derived.deadFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 1186 | surface.secondary.fuel.model.palmettoGallberry.derived.deadLitterLoad | FuelOvendryLoad | lb/ft2 |
  | 1187 | surface.secondary.fuel.model.palmettoGallberry.derived.deadSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1188 | surface.secondary.fuel.model.palmettoGallberry.derived.depth | FuelBedDepth | ft |
  | 1189 | surface.secondary.fuel.model.palmettoGallberry.derived.liveFineLoad | FuelOvendryLoad | lb/ft2 |
  | 1190 | surface.secondary.fuel.model.palmettoGallberry.derived.liveFoliageLoad | FuelOvendryLoad | lb/ft2 |
  | 1191 | surface.secondary.fuel.model.palmettoGallberry.derived.liveSmallLoad | FuelOvendryLoad | lb/ft2 |
  | 1192 | surface.secondary.fuel.model.palmettoGallberry.domain | FuelModelDomainOption |  |
  | 1193 | surface.secondary.fuel.model.palmettoGallberry.parms.age | FuelAge | y |
  | 1194 | surface.secondary.fuel.model.palmettoGallberry.parms.basalArea | FuelBasalArea | ft2 |
  | 1195 | surface.secondary.fuel.model.palmettoGallberry.parms.cover | FuelCoverFraction | ratio |
  | 1196 | surface.secondary.fuel.model.palmettoGallberry.parms.height | FuelBedDepth | ft |
  | 1197 | surface.secondary.fuel.model.westernAspen.derived.dead.fine.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1198 | surface.secondary.fuel.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 1199 | surface.secondary.fuel.model.westernAspen.derived.dead.small.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1200 | surface.secondary.fuel.model.westernAspen.derived.depth | FuelBedDepth | ft |
  | 1201 | surface.secondary.fuel.model.westernAspen.derived.live.herb.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1202 | surface.secondary.fuel.model.westernAspen.derived.live.stem.ovendryLoad | FuelOvendryLoad | lb/ft2 |
  | 1203 | surface.secondary.fuel.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio | FuelOvendryLoad | lb/ft2 |
  | 1204 | surface.secondary.fuel.model.westernAspen.domain | FuelModelDomainOption |  |
  | 1205 | surface.secondary.fuel.model.westernAspen.parms.aspenType | WesternAspenTypeOption |  |
  | 1206 | surface.secondary.fuel.model.westernAspen.parms.curingLevel | FuelDeadFraction | ratio |

---

<a id='surface-weighted-variables'></a>

## ![](favicon.png) **surface.weighted**.* Variables

[Back to Top](#top)

| idx | Variable Key (Name) | Variant | Native Units |
|---|---|---|---|
  | 1207 | surface.weighted.fire.arithmeticMean.spreadRate | FireSpreadRate | ft/min |
  | 1208 | surface.weighted.fire.effectiveWindSpeed | WindSpeed | ft/min |
  | 1209 | surface.weighted.fire.expectedValue.spreadRate | FireSpreadRate | ft/min |
  | 1210 | surface.weighted.fire.firelineIntensity | FireFirelineIntensity | btu/ft/s |
  | 1211 | surface.weighted.fire.flameLength | FireFlameLength | ft |
  | 1212 | surface.weighted.fire.harmonicMean.spreadRate | FireSpreadRate | ft/min |
  | 1213 | surface.weighted.fire.heading.fromNorth | CompassAzimuth | deg |
  | 1214 | surface.weighted.fire.heading.fromUpslope | CompassAzimuth | deg |
  | 1215 | surface.weighted.fire.heatPerUnitArea | FireHeatPerUnitArea | btu/ft2 |
  | 1216 | surface.weighted.fire.lengthToWidthRatio | FireLengthToWidthRatio |  |
  | 1217 | surface.weighted.fire.limit.effectiveWindSpeed | WindSpeed | ft/min |
  | 1218 | surface.weighted.fire.limit.effectiveWindSpeed.exceeded | EffectiveWindSpeedLimitIsExceeded |  |
  | 1219 | surface.weighted.fire.primaryCover | FuelCoverFraction | ratio |
  | 1220 | surface.weighted.fire.reactionIntensity | FireReactionIntensity | btu/ft2/min |
  | 1221 | surface.weighted.fire.scorchHeight | FireScorchHeight | ft |
  | 1222 | surface.weighted.fire.spreadRate | FireSpreadRate | ft/min |
  | 1223 | surface.weighted.fire.wind.speed.atMidflame | WindSpeed | ft/min |
  | 1224 | surface.weighted.fire.windSpeedAdjustmentFactor | WindSpeedAdjustmentFactor | ratio |

---

| Prev: [12 Author](./12_Author.md) | Next: [14 Table of Variables](./14_VariableNames.md) | [Back to Top](#top) |  [Table of Contents](../README.md) |
