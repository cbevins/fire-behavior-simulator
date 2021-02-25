/**
 * @file Surface fuel model western aspen genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export function genome (prefix, fuel) {
  return [
    [`${prefix}.model.westernAspen.domain`, [['FuelModelDomainOption'], [
      ['finally', 'Dag.fixed', 'westernAspen']
    ]]],
    [`${prefix}.model.westernAspen.parms.aspenType`, [['WesternAspenTypeOption'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.westernAspenFuelType',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'westernAspen', 'Dag.input'],
      ['finally', 'Dag.fixed', 'aspenShrub']
    ]]],
    [`${prefix}.model.westernAspen.parms.curingLevel`, [['FuelDeadFraction'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.westernAspenCuringLevel',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'westernAspen', 'Dag.input'],
      ['finally', 'Dag.fixed', 0]
    ]]],
    // end `${prefix}.model.westernAspen.parms`
    [`${prefix}.model.westernAspen.derived.depth`, [['FuelBedDepth'], [
      ['finally', 'WesternAspenFuel.depth',
        `${prefix}.model.westernAspen.parms.aspenType`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.fine.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.deadFineLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.small.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.deadSmallLoad',
        `${prefix}.model.westernAspen.parms.aspenType`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.dead.fine.surfaceAreaToVolumeRatio`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.deadFineSavr',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.herb.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.liveHerbLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.stem.ovendryLoad`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.liveStemLoad',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]],
    [`${prefix}.model.westernAspen.derived.live.stem.surfaceAreaToVolumeRatio`, [['FuelOvendryLoad'], [
      ['finally', 'WesternAspenFuel.liveStemSavr',
        `${prefix}.model.westernAspen.parms.aspenType`,
        `${prefix}.model.westernAspen.parms.curingLevel`
      ]
    ]]]
    // end `${prefix}.model.westernAspen.derived`
  ]
}
