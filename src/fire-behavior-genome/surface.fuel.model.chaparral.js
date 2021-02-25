/**
 * @file Surface fuel model chaparral genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.chaparral.domain`, [['FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'chaparral']
    ]]],
    [`${prefix}.model.chaparral.parms.chaparralType`, [['ChaparralTypeOption'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralFuelType',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 'chamise']
    ]]],
    [`${prefix}.model.chaparral.parms.observed.deadFuelFraction`, [['FuelDeadFraction'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralDeadFraction',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.chaparral.parms.observed.depth`, [['FuelBedDepth'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.chaparralDepth',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0.01]
    ]]],
    [`${prefix}.model.chaparral.parms.observed.totalLoad`, [['FuelOvendryLoad'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog',
        'FuelCatalog.chaparralTotalLoad',
        `${prefix}.model.catalogKey`],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    [`${prefix}.model.chaparral.parms.applied.totalLoad`, [['FuelOvendryLoad'], [
      ['when', 'configure.fuel.chaparralTotalLoad', 'equals', 'estimated',
        'Dag.bind', `${prefix}.model.chaparral.derived.totalLoad`],
      ['finally', 'Dag.bind', `${prefix}.model.chaparral.parms.observed.totalLoad`]
    ]]],
    // end `${prefix}.model.chaparral.parms`
    [`${prefix}.model.chaparral.derived.age`, [['FuelAge'], [
      ['finally', 'ChaparralFuel.age',
        `${prefix}.model.chaparral.parms.observed.depth`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.averageMortality`, [['MortalityFraction'], [
      ['finally', 'ChaparralFuel.deadFractionAverageMortality',
        `${prefix}.model.chaparral.derived.age`]
    ]]],
    [`${prefix}.model.chaparral.derived.severeMortality`, [['MortalityFraction'], [
      ['finally', 'ChaparralFuel.deadFractionSevereMortality',
        `${prefix}.model.chaparral.derived.age`]
    ]]],
    [`${prefix}.model.chaparral.derived.depth`, [['FuelBedDepth'], [
      ['finally', 'ChaparralFuel.fuelDepth',
        `${prefix}.model.chaparral.derived.age`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.totalLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.totalLoad',
        `${prefix}.model.chaparral.derived.age`,
        `${prefix}.model.chaparral.parms.chaparralType`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.deadLoad',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadFineLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.deadClass1Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadSmallLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.deadClass2Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadMediumLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.deadClass3Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.deadLargeLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.deadClass4Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveLoad',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveFineLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveClass1Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveSmallLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveClass2Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveMediumLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveClass3Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLargeLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveClass4Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]],
    [`${prefix}.model.chaparral.derived.liveLeafLoad`, [['FuelOvendryLoad'], [
      ['finally', 'ChaparralFuel.liveClass5Load',
        `${prefix}.model.chaparral.parms.applied.totalLoad`,
        `${prefix}.model.chaparral.parms.observed.deadFuelFraction`]
    ]]]
    // end `${prefix}.model.chaparral.derived`
  ]
}
