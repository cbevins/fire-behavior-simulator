export function genome (prefix, fuel) {
  const behave = `${prefix}.model.behave`
  const parms = `${prefix}.model.behave.parms`
  const cfgFuel = `configure.fuel.${fuel}`
  return [
    [`${behave}.domain`, [['FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'behave']
    ]]],
    [`${parms}.cured.herb.fraction`, [['FuelDeadFraction'], [
      ['when', 'configure.fuel.curedHerbFraction', 'equals', 'estimated', 'BehaveFuel.curedHerbFraction',
        'site.moisture.live.herb'],
      ['finally', 'Dag.input']
    ]]],
    [`${parms}.depth`, [['FuelBedDepth'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDepth',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    [`${parms}.dead.extinction.moistureContent`, [['FuelMoistureContent'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDeadMext',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.25]
    ]]],
    [`${parms}.total.herb.ovendryLoad`, [['FuelOvendryLoad'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveTotalHerbLoad',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.dead.tl1h.ovendryLoad`, [['FuelOvendryLoad'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDead1Load',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.dead.tl10h.ovendryLoad`, [['FuelOvendryLoad'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDead10Load',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.dead.tl100h.ovendryLoad`, [['FuelOvendryLoad'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDead100Load',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.live.stem.ovendryLoad`, [['FuelOvendryLoad'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveLiveStemLoad',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.dead.tl1h.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDead1Savr',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${parms}.live.herb.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveLiveHerbSavr',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 1]
    ]]],
    [`${parms}.live.stem.surfaceAreaToVolumeRatio`, [['FuelSurfaceAreaToVolumeRatio'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveLiveStemSavr',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 1]
    ]]],
    [`${parms}.dead.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveDeadHeat',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 8000]
    ]]],
    [`${parms}.live.heatOfCombustion`, [['FuelHeatOfCombustion'], [
      ['when', cfgFuel, 'equals', 'catalog', 'FuelCatalog.behaveLiveHeat',
        `${prefix}.model.catalogKey`],
      ['when', cfgFuel, 'equals', 'behave', 'Dag.input'],
      ['finally', 'Dag.fixed', 8000]
    ]]],
    // end `${parms}`
    [`${behave}.derived.dead.herb.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'BehaveFuel.deadHerbLoad',
        `${parms}.total.herb.ovendryLoad`,
        `${parms}.cured.herb.fraction`]
    ]]],
    [`${behave}.derived.live.herb.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'BehaveFuel.liveHerbLoad',
        `${parms}.total.herb.ovendryLoad`,
        `${parms}.cured.herb.fraction`]
    ]]]
    // end `${behave}.derived`
  ]
}
