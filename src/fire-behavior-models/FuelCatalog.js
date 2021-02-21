/**
 * @file Exported BehavePlus fuel catalog accessors.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */

import * as Fuel from './FuelCatalogData.js'
export { Domains } from './FuelCatalogData.js'

/**
 * @return A sorted array of all the fuel model alias Map key strings.
 */
export function aliases () {
  return Array.from(Fuel.Alias.keys()).sort()
}

export function code (alias) {
  return model(alias).code
}

export function domain (alias) {
  return model(alias).domain
}

/**
 * @param {string} alias The Fuel.Alias map key string
 */
export function hasAlias (alias) {
  return Fuel.Alias.has(alias)
}

/**
 * @param {string} key The Fuel.Model map key string
 */
export function hasKey (key) {
  return Fuel.Model.has(key)
}

/**
 * @return A sorted array of all the fuel catalog model Map key strings.
 */
export function keys () {
  return Array.from(Fuel.Alias.keys()).sort()
}

/**
 * @return A sorted array of fuel catalog model [number, code, label]
 */
export function list () {
  return Array.from(Fuel.Model.keys())
    .sort()
    .map(key => [number(key), code(key), label(key)])
}

export function label (alias) {
  return model(alias).label
}

/**
 * @param {string} alias Alias map key string
 * @return Reference to the Fuel.Model with the 'alias',
 * or throws an Error if the alias does not exist.
 */
export function model (alias) {
  if (!Fuel.Alias.has(alias)) {
    throw new Error(
      `Fuel catalog does not have fuel model key or alias '${alias}'`
    )
  }
  return Fuel.Model.get(Fuel.Alias.get(alias))
}

/**
 * @return An array of all the fuel catalog model objects.
 */
export function models () {
  return Array.from(Fuel.Model.values())
}

export function number (alias) {
  return model(alias).number
}

export function behaveDead1Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead1Load : 0
}

export function behaveDead1Savr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead1Savr : 1
}

export function behaveDead10Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead10Load : 0
}

export function behaveDead100Load (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.dead100Load : 0
}

export function behaveDeadHeat (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.deadHeat : 0
}

export function behaveDeadMext (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.deadMext : 0.01
}

export function behaveDepth (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.depth : 0.01
}

export function behaveLiveHeat (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveHeat : 0
}

export function behaveLiveHerbSavr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveHerbSavr : 1
}

export function behaveLiveStemLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveStemLoad : 0
}

export function behaveLiveStemSavr (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.liveStemSavr : 1
}

export function behaveTotalHerbLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'behave' ? fuel.totalHerbLoad : 0
}

export function chaparralDeadFraction (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.deadFraction : 0
}

export function chaparralDepth (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.depth : 0.01
}

export function chaparralFuelType (alias) {
  const fuel = model(alias)
  // return fuel.domain === 'chaparral' ? fuel.fuelType : 'none'
  return fuel.domain === 'chaparral' ? fuel.fuelType : 'chamise'
}

export function chaparralTotalLoad (alias) {
  const fuel = model(alias)
  return fuel.domain === 'chaparral' ? fuel.totalLoad : 0
}

export function palmettoGallberryAge (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.age : 0
}

export function palmettoGallberryBasalArea (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.basalArea : 0
}

export function palmettoGallberryCover (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.cover : 0
}

export function palmettoGallberryHeight (alias) {
  const fuel = model(alias)
  return fuel.domain === 'palmettoGallberry' ? fuel.height : 0
}

export function westernAspenCuringLevel (alias) {
  const fuel = model(alias)
  return fuel.domain === 'westernAspen' ? fuel.curingLevel : 0
}

export function westernAspenFuelType (alias) {
  const fuel = model(alias)
  // return fuel.domain === 'westernAspen' ? fuel.fuelType : 'none'
  return fuel.domain === 'westernAspen' ? fuel.fuelType : 'aspenShrub'
}
