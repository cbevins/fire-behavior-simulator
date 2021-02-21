import * as DagJest from './matchers.js'
import * as FuelCatalog from '../FuelCatalog.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

test('1: FuelCatalog', () => {
  expect(FuelCatalog.hasAlias(10)).toEqual(true)
  expect(FuelCatalog.hasKey(10)).toEqual(false)
  expect(FuelCatalog.hasKey('10')).toEqual(true)

  expect(FuelCatalog.hasKey('junk')).toEqual(false)
  expect(() => FuelCatalog.behaveDepth('junk')).toThrow()
  expect(FuelCatalog.behaveDepth('aspenShrub50')).toEqual(0.01)
  expect(FuelCatalog.behaveDead1Load('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveDead1Savr('aspenShrub50')).toEqual(1)
  expect(FuelCatalog.behaveDead10Load('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveDead100Load('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveDeadHeat('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveDeadMext('aspenShrub50')).toEqual(0.01)
  expect(FuelCatalog.behaveLiveHeat('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveLiveStemLoad('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.behaveLiveStemSavr('aspenShrub50')).toEqual(1)
  expect(FuelCatalog.behaveLiveHerbSavr('aspenShrub50')).toEqual(1)
  expect(FuelCatalog.behaveTotalHerbLoad('aspenShrub50')).toEqual(0)
  expect(FuelCatalog.label('10')).toEqual('Timber litter & understory')

  const keys = FuelCatalog.keys()
  expect(keys.length).toEqual(160)
  expect(keys.includes('10')).toEqual(true)
  expect(keys.includes('junk')).toEqual(false)

  const list = FuelCatalog.list()
  // console.log(list)
  expect(list[2]).toEqual([10, '10', 'Timber litter & understory'])
})

test('2: Ensure all aliases and keys are correct', () => {
  const aliases = FuelCatalog.aliases()
  expect(aliases.length).toEqual(160)
  aliases.forEach(alias => {
    expect(FuelCatalog.hasAlias(alias)).toEqual(true)
  })

  const models = FuelCatalog.models()
  models.forEach(model => {
    const key = model.number.toString()
    expect(FuelCatalog.hasKey(key)).toEqual(true)
  })

  const keys = FuelCatalog.keys()
  keys.forEach(key => {
    expect(FuelCatalog.hasAlias(key)).toEqual(true)
    if (!isNaN(parseInt(key))) {
      expect(FuelCatalog.hasAlias(parseInt(key))).toEqual(true)
    }
  })
})
