/**
 * @file Surface fuel bed particle genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export function derived (prefix, life, idx) {
  const dead = [
    [`${prefix}.bed.${life}.particle.class${idx}.effectiveFuel.waterLoad`,
      [['FuelOvendryLoad'], [
        ['finally', 'FuelParticle.effectiveFuelWaterLoad',
        `${prefix}.bed.${life}.particle.class${idx}.effectiveFuel.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class${idx}.moistureContent`]
      ]]]
  ]

  const both = [
    // [`${prefix}.bed.${life}.particle.class${idx}.cylindricalDiameter`,
    // [[`FuelCylindricalDiameter`], [
    //   [`finally`, `FuelParticle.cylindricalDiameter`,
    //     `${prefix}.bed.${life}.particle.class${idx}.surfaceAreaToVolumeRatio`]
    // ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.effectiveFuel.heatingNumber`,
      [['FuelEffectiveHeatingNumber'], [
        ['finally', 'FuelParticle.effectiveHeatingNumber',
        `${prefix}.bed.${life}.particle.class${idx}.surfaceAreaToVolumeRatio`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.effectiveFuel.ovendryLoad`,
      [['FuelOvendryLoad'], [
        ['finally', 'FuelParticle.effectiveFuelLoad',
        `${prefix}.bed.${life}.particle.class${idx}.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class${idx}.ovendryLoad`,
        `${life}`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.heatOfPreignition`,
      [['FuelHeatOfPreignition'], [
        ['finally', 'FuelParticle.heatOfPreignition',
        `${prefix}.bed.${life}.particle.class${idx}.moistureContent`,
        `${prefix}.bed.${life}.particle.class${idx}.effectiveFuel.heatingNumber`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.net.ovendryLoad`,
      [['FuelOvendryLoad'], [
        ['finally', 'FuelParticle.netOvendryLoad',
        `${prefix}.bed.${life}.particle.class${idx}.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class${idx}.total.mineralContent`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.sizeClass`,
      [['FuelSizeClassIndex'], [
        ['finally', 'FuelParticle.sizeClass',
        `${prefix}.bed.${life}.particle.class${idx}.surfaceAreaToVolumeRatio`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.sizeClass.weightingFactor`,
      [['WeightingFactor'], [
        ['finally', 'FuelParticle.sizeClassWeightingFactor',
        `${prefix}.bed.${life}.particle.class${idx}.sizeClass`,
        `${prefix}.bed.${life}.sizeClass.weightingFactor`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.surfaceArea`,
      [['FuelSurfaceArea'], [
        ['finally', 'FuelParticle.surfaceArea',
        `${prefix}.bed.${life}.particle.class${idx}.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class${idx}.surfaceAreaToVolumeRatio`,
        `${prefix}.bed.${life}.particle.class${idx}.fiberDensity`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.surfaceArea.weightingFactor`,
      [['WeightingFactor'], [
        ['finally', 'FuelParticle.surfaceAreaWeightingFactor',
        `${prefix}.bed.${life}.particle.class${idx}.surfaceArea`,
        `${prefix}.bed.${life}.surfaceArea`]
      ]]],

    [`${prefix}.bed.${life}.particle.class${idx}.volume`,
      [['FuelVolume'], [
        ['finally', 'FuelParticle.volume',
        `${prefix}.bed.${life}.particle.class${idx}.ovendryLoad`,
        `${prefix}.bed.${life}.particle.class${idx}.fiberDensity`]
      ]]]
  ]
  return (life === 'dead') ? [...both, ...dead] : both
}

export function dead1 (prefix) {
  return [
    [`${prefix}.bed.dead.particle.class1.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        30,
        32
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class1.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.heatOfCombustion`,
        8000,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.dead.particle.class1.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Dead 1-h time-lag (0 to 0.25 inch diameter) branch wood`,
    //     `Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood`,
    //     `Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood`,
    //     `Dead 1-h time-lag (0 to 0.25 inch diameter) stem wood`,
    //   ]
    // ]]],
    [`${prefix}.bed.dead.particle.class1.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.tl1h.ovendryLoad`,
        `${prefix}.model.chaparral.derived.deadFineLoad`,
        `${prefix}.model.palmettoGallberry.derived.deadFineLoad`,
        `${prefix}.model.westernAspen.derived.dead.fine.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class1.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.dead.tl1h',
        'site.moisture.dead.tl1h',
        'site.moisture.dead.tl1h',
        'site.moisture.dead.tl1h'
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class1.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio`,
        640,
        350,
        `${prefix}.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class1.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.01,
        0.01
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class1.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function dead2 (prefix) {
  return [
    [`${prefix}.bed.dead.particle.class2.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        30,
        32
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class2.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.heatOfCombustion`,
        8000,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.dead.particle.class2.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Dead 10-h time-lag (0.25 to 1 inch diameter) branch wood`,
    //     `Dead small 10-h time-lag (0.25 to 0.5 inch diameter) stem wood`,
    //     `Dead 10-h time-lag (0.25 to 1 inch diameter) stem wood`,
    //     `Dead 10-h time-lag (0.25 to 1 inch diameter) stem wood`,
    //   ]
    // ]]],
    [`${prefix}.bed.dead.particle.class2.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.tl10h.ovendryLoad`,
        `${prefix}.model.chaparral.derived.deadSmallLoad`,
        `${prefix}.model.palmettoGallberry.derived.deadSmallLoad`,
        `${prefix}.model.westernAspen.derived.dead.small.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class2.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.dead.tl10h',
        'site.moisture.dead.tl10h',
        'site.moisture.dead.tl10h',
        'site.moisture.dead.tl10h'
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class2.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        109,
        127,
        140,
        109
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class2.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.01,
        0.01
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class2.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function dead3 (prefix) {
  return [
    [`${prefix}.bed.dead.particle.class3.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        30,
        32
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class3.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.heatOfCombustion`,
        8000,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.dead.particle.class3.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Dead 100-h time-lag (1 to 3 inch diameter) branch wood`,
    //     `Dead medium 10-h time-lag (0.5 to 1 inch diameter) stem wood`,
    //     `Dead foliage`,
    //     `unused`,
    //   ]
    // ]]],
    [`${prefix}.bed.dead.particle.class3.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.tl100h.ovendryLoad`,
        `${prefix}.model.chaparral.derived.deadMediumLoad`,
        `${prefix}.model.palmettoGallberry.derived.deadFoliageLoad`,
        0
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class3.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.dead.tl100h',
        'site.moisture.dead.tl10h',
        'site.moisture.dead.tl1h',
        5
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class3.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        30,
        61,
        2000,
        1
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class3.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.01,
        0.01
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class3.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function dead4 (prefix) {
  return [
    [`${prefix}.bed.dead.particle.class4.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        30,
        32
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class4.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.dead.heatOfCombustion`,
        8000,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.dead.particle.class4.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Dead herb`,
    //     `Dead 100-h time-lag (1 to 3 inch diameter) stem wood`,
    //     `Litter layer`,
    //     `unused`,
    //   ]
    // ]]],
    [`${prefix}.bed.dead.particle.class4.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.derived.dead.herb.ovendryLoad`,
        `${prefix}.model.chaparral.derived.deadLargeLoad`,
        `${prefix}.model.palmettoGallberry.derived.deadLitterLoad`,
        0
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class4.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.dead.tl1h',
        'site.moisture.dead.tl100h',
        'site.moisture.dead.tl100h',
        5
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class4.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.herb.surfaceAreaToVolumeRatio`,
        27,
        2000,
        1
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class4.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.01,
        0.01
      ]
    ]]],
    [`${prefix}.bed.dead.particle.class4.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function dead5 (prefix) {
  return [
    [`${prefix}.bed.dead.particle.class5.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'Dag.fixed', 32]
    ]]],
    [`${prefix}.bed.dead.particle.class5.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'Dag.fixed', 8000]
    ]]],
    // [`${prefix}.bed.dead.particle.class5.label`, [[`FuelLabelText`], [
    //   [`finally`, `Dag.fixed`, `unused`],
    // ]]],
    [`${prefix}.bed.dead.particle.class5.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.bed.dead.particle.class5.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'Dag.fixed', 5]
    ]]],
    [`${prefix}.bed.dead.particle.class5.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'Dag.fixed', 1]
    ]]],
    [`${prefix}.bed.dead.particle.class5.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    [`${prefix}.bed.dead.particle.class5.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'Dag.fixed', 0.0555]
    ]]]
  ]
}

export function live1 (prefix) {
  return [
    [`${prefix}.bed.live.particle.class1.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        46,
        32
      ]
    ]]],
    [`${prefix}.bed.live.particle.class1.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.heatOfCombustion`,
        10500,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.live.particle.class1.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Live herb`,
    //     `Live fine (0 to 0.25 inch diameter) stem wood`,
    //     `Live 0 to 0.25 inch diameter stem wood`,
    //     `Live herb`,
    //   ]
    // ]]],
    [`${prefix}.bed.live.particle.class1.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.derived.live.herb.ovendryLoad`,
        `${prefix}.model.chaparral.derived.liveFineLoad`,
        `${prefix}.model.palmettoGallberry.derived.liveFineLoad`,
        `${prefix}.model.westernAspen.derived.live.herb.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.live.particle.class1.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.live.herb',
        'site.moisture.live.stem',
        'site.moisture.live.stem',
        'site.moisture.live.herb'
      ]
    ]]],
    [`${prefix}.bed.live.particle.class1.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.herb.surfaceAreaToVolumeRatio`,
        640,
        350,
        2800
      ]
    ]]],
    [`${prefix}.bed.live.particle.class1.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.015,
        0.01
      ]
    ]]],
    [`${prefix}.bed.live.particle.class1.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function live2 (prefix) {
  return [
    [`${prefix}.bed.live.particle.class2.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        46,
        32
      ]
    ]]],
    [`${prefix}.bed.live.particle.class2.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.heatOfCombustion`,
        9550,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.live.particle.class2.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `Live stem wood`,
    //     `Live small (0.25 to 0.5 inch diameter) stem wood`,
    //     `Live 0.25 to 1 inch diameter stem wood`,
    //     `Live woody`,
    //   ]
    // ]]],
    [`${prefix}.bed.live.particle.class2.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.stem.ovendryLoad`,
        `${prefix}.model.chaparral.derived.liveSmallLoad`,
        `${prefix}.model.palmettoGallberry.derived.liveSmallLoad`,
        `${prefix}.model.westernAspen.derived.live.stem.ovendryLoad`
      ]
    ]]],
    [`${prefix}.bed.live.particle.class2.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        'site.moisture.live.stem',
        'site.moisture.live.stem',
        'site.moisture.live.stem',
        'site.moisture.live.stem'
      ]
    ]]],
    [`${prefix}.bed.live.particle.class2.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.stem.surfaceAreaToVolumeRatio`,
        127,
        140,
        `${prefix}.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio`
      ]
    ]]],
    [`${prefix}.bed.live.particle.class2.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.015,
        0.01
      ]
    ]]],
    [`${prefix}.bed.live.particle.class2.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function live3 (prefix) {
  return [
    [`${prefix}.bed.live.particle.class3.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        46,
        32
      ]
    ]]],
    [`${prefix}.bed.live.particle.class3.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.heatOfCombustion`,
        9550,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.live.particle.class3.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `unused`,
    //     `Live medium (0.5 to 1 inch diameter) stem wood`,
    //     `Live foliage`,
    //     `unused`,
    //   ]
    // ]]],
    [`${prefix}.bed.live.particle.class3.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0,
        `${prefix}.model.chaparral.derived.liveMediumLoad`,
        `${prefix}.model.palmettoGallberry.derived.liveFoliageLoad`,
        0
      ]
    ]]],
    [`${prefix}.bed.live.particle.class3.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        5,
        'site.moisture.live.stem',
        'site.moisture.live.stem',
        5
      ]
    ]]],
    [`${prefix}.bed.live.particle.class3.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        1,
        61,
        2000,
        1
      ]
    ]]],
    [`${prefix}.bed.live.particle.class3.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.015,
        0.01
      ]
    ]]],
    [`${prefix}.bed.live.particle.class3.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function live4 (prefix) {
  return [
    [`${prefix}.bed.live.particle.class4.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        46,
        46,
        32
      ]
    ]]],
    [`${prefix}.bed.live.particle.class4.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.heatOfCombustion`,
        9550,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.live.particle.class4.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `unused`,
    //     `Live large (1 to 3 inch diameter) stem wood`,
    //     `unused`,
    //     `unused`,
    //   ]
    // ]]],
    [`${prefix}.bed.live.particle.class4.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0,
        `${prefix}.model.chaparral.derived.liveLargeLoad`,
        0,
        0
      ]
    ]]],
    [`${prefix}.bed.live.particle.class4.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        5,
        'site.moisture.live.stem',
        5,
        5
      ]
    ]]],
    [`${prefix}.bed.live.particle.class4.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        1,
        27,
        1,
        1
      ]
    ]]],
    [`${prefix}.bed.live.particle.class4.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.015,
        0.015,
        0.01
      ]
    ]]],
    [`${prefix}.bed.live.particle.class4.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}

export function live5 (prefix) {
  return [
    [`${prefix}.bed.live.particle.class5.fiberDensity`, [['FuelParticleFiberDensity'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        32,
        32,
        46,
        32
      ]
    ]]],
    [`${prefix}.bed.live.particle.class5.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        `${prefix}.model.behave.parms.live.heatOfCombustion`,
        10500,
        8300,
        8000
      ]
    ]]],
    // [`${prefix}.bed.live.particle.class5.label`, [[`FuelLabelText`], [
    //   [`finally`, `FuelParticle.selectByDomain`,
    //     `${prefix}.model.domain`,
    //     `unused`,
    //     `Live leaves`,
    //     `unused`,
    //     `unused`,
    //   ]
    // ]]],
    [`${prefix}.bed.live.particle.class5.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0,
        `${prefix}.model.chaparral.derived.liveLeafLoad`,
        0,
        0
      ]
    ]]],
    [`${prefix}.bed.live.particle.class5.moistureContent`, [['FuelMoistureContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        5,
        'site.moisture.live.herb',
        5,
        5
      ]
    ]]],
    [`${prefix}.bed.live.particle.class5.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        1,
        2200,
        1,
        1
      ]
    ]]],
    [`${prefix}.bed.live.particle.class5.effective.mineralContent`, [['FuelEffectiveMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.01,
        0.035,
        0.015,
        0.01
      ]
    ]]],
    [`${prefix}.bed.live.particle.class5.total.mineralContent`, [['FuelTotalMineralContent'], [
      ['finally', 'FuelParticle.selectByDomain',
        `${prefix}.model.domain`,
        0.0555,
        0.055,
        0.03,
        0.055
      ]
    ]]]
  ]
}
