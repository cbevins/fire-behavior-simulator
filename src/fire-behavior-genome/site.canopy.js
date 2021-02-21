export const genome = [
  ['site.canopy.cover', [['FuelCoverFraction'], [['finally', 'Dag.input']]]
  ],
  ['site.canopy.crown.baseHeight',
    [['TreeHeight'], [['finally', 'Dag.input']]]
  ],
  ['site.canopy.crown.fill', [['CrownFillFraction'], [
    ['finally', 'Canopy.crownFill',
      'site.canopy.cover',
      'site.canopy.crown.ratio']]]
  ],
  ['site.canopy.crown.length', [['TreeHeight'], [
    ['finally', 'Canopy.crownLength',
      'site.canopy.crown.baseHeight',
      'site.canopy.crown.totalHeight']]]
  ],
  ['site.canopy.crown.ratio', [ ['CrownRatioFraction'], [
    ['finally', 'Canopy.crownRatio',
      'site.canopy.crown.length',
      'site.canopy.crown.totalHeight']]]
  ],
  ['site.canopy.crown.totalHeight', [['TreeHeight'], [
      ['finally', 'Dag.input']]]
  ],
  // end site.canopy.crown
  ['site.canopy.fire.heatPerUnitArea', [ ['FireHeatPerUnitArea'], [
    ['finally', 'Canopy.heatPerUnitArea',
      'site.canopy.fuel.ovendryLoad',
      'site.canopy.fuel.heatOfCombustion' ]]]
  ],
  ['site.canopy.fuel.bulkDensity', [['FuelBedBulkDensity'], [
    ['finally', 'Dag.input']]]
  ],
  ['site.canopy.fuel.foliar.moistureContent', [['FuelMoistureContent'], [
    ['finally', 'Dag.input']]]
  ],
  ['site.canopy.fuel.heatOfCombustion', [['FuelHeatOfCombustion'], [
    ['finally', 'Dag.fixed', 8000]]]
  ],
  ['site.canopy.fuel.isSheltered', [ ['FuelIsSheltered'], [
    ['finally', 'Canopy.sheltersFuelFromWind',
      'site.canopy.cover',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.fill'] ] ]
  ],
  ['site.canopy.fuel.ovendryLoad', [['FuelOvendryLoad'], [
    ['finally', 'Canopy.fuelLoad',
      'site.canopy.fuel.bulkDensity',
      'site.canopy.crown.length']]]
  ],
  ['site.canopy.fuel.shading', [['FuelCoverFraction'], [
    // used by IgnitionProbability
    ['finally', 'Dag.input']]]
  ],
  // end site.canopy.fuel
  ['site.canopy.sheltered.windSpeedAdjustmentFactor', [['WindSpeedAdjustmentFactor'], [
    ['finally', 'Canopy.windSpeedAdjustmentFactor',
      'site.canopy.cover',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.fill' ]]]
  ],
  // end 'site.canopy.sheltered'
  ['site.canopy.downwind.height', [['TreeHeight'], [['finally', 'Dag.input']]]
  ],
  ['site.canopy.downwind.isOpen', [['DownWindCanopyIsOpen'], [['finally', 'Dag.input']]]
  ],
  ['site.canopy.downwind.appliedHeight', [['TreeHeight'], [
    ['finally', 'Spotting.appliedDownWindCoverHeight',
      'site.canopy.downwind.height',
      'site.canopy.downwind.isOpen']]]
  ],
  // end 'site.canopy.downwind'
  ['site.canopy.tree.barkThickness', [['TreeBarkThickness'], [
    ['finally', 'TreeMortality.barkThickness',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh']]]
  ],
  ['site.canopy.tree.dbh', [['TreeDbh'], [['finally', 'Dag.input']]]
  ],
  ['site.canopy.tree.species.fofem6.code',
    [['TreeSpeciesFofem6Option'], [['finally', 'Dag.input']]]
  ]
  // end 'site.canopy.tree'
]
