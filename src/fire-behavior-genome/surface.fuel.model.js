/**
 * @file Surface fuel model genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as Behave from './surface.fuel.model.behave.js'
import * as Chaparral from './surface.fuel.model.chaparral.js'
import * as PalmettoGallberry from './surface.fuel.model.palmettoGallberry.js'
import * as WesternAspen from './surface.fuel.model.westernAspen.js'

export function FuelModelGenome (prefix, fuel) {
  return [
    [`${prefix}.model.domain`, [['FuelModelDomainOption'], [
      ['when', `configure.fuel.${fuel}`, 'equals', 'catalog', 'FuelCatalog.domain',
        `${prefix}.model.catalogKey`
      ],
      ['when', `configure.fuel.${fuel}`, 'equals', 'behave', 'Dag.fixed', 'behave'],
      ['when', `configure.fuel.${fuel}`, 'equals', 'chaparral', 'Dag.fixed', 'chaparral'],
      ['when', `configure.fuel.${fuel}`, 'equals', 'palmettoGallberry', 'Dag.fixed', 'palmettoGallberry'],
      ['when', `configure.fuel.${fuel}`, 'equals', 'westernAspen', 'Dag.fixed', 'westernAspen'],
      ['finally', 'Dag.fixed', 'none']
    ]]],
    [`${prefix}.model.catalogKey`, [['FuelModelKeyOption'], [
      ['finally', 'Dag.input']
    ]]]
  ]
}

export function genome (prefix) {
  const fuel = (prefix === 'surface.secondary.fuel') ? 'secondary' : 'primary'
  return [
    ...FuelModelGenome(prefix, fuel),
    ...Behave.genome(prefix, fuel),
    ...Chaparral.genome(prefix, fuel),
    ...PalmettoGallberry.genome(prefix, fuel),
    ...WesternAspen.genome(prefix, fuel)
  ]
}
