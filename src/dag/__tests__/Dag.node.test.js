import { Sim } from '../index.js'

const cfgWindDirKey = 'configure.wind.direction'
const cfgWindDirIdx = 25 // NOTE: this will change when the genome changes!!
const windDirUpKey = 'site.wind.direction.heading.fromUpslope'
const windDirUpIdx = 130 // NOTE: this will change when the genome changes!!
const windDirNoKey = 'site.wind.direction.source.fromNorth'

test('Dag.get()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  expect(dag.get(cfgWindDirKey).value()).toEqual('headingFromUpslope')
  expect(dag.get(cfgWindDirKey).index()).toEqual(cfgWindDirIdx)
  expect(dag.get(cfgWindDirIdx).index()).toEqual(cfgWindDirIdx)
  expect(dag.get(cfgWindDirKey).key()).toEqual(cfgWindDirKey)
  expect(dag.get(cfgWindDirIdx).key()).toEqual(cfgWindDirKey)
  expect(dag.get(cfgWindDirIdx).isConfig()).toEqual(true)
  expect(dag.get(cfgWindDirIdx).isInput()).toEqual(false)
  expect(dag.get(cfgWindDirIdx).isRequired()).toEqual(false)
  expect(dag.get(cfgWindDirIdx).isSelected()).toEqual(false)

  expect(() => dag.get('junk').index()).toThrow()
  expect(() => dag.get({}).index()).toThrow()

  expect(dag.get(windDirUpKey).index()).toEqual(windDirUpIdx)
  expect(dag.get(windDirUpIdx).index()).toEqual(windDirUpIdx)
  expect(dag.get(windDirUpKey).key()).toEqual(windDirUpKey)
  expect(dag.get(windDirUpIdx).key()).toEqual(windDirUpKey)
  expect(dag.get(windDirUpKey).isConfig()).toEqual(false)
  expect(dag.get(windDirUpKey).isRequired()).toEqual(false)
  expect(dag.get(windDirUpKey).isSelected()).toEqual(false)
  expect(dag.get(windDirUpKey).isInput()).toEqual(true)

  expect(dag.get(windDirNoKey).isInput()).toEqual(false)
})

test('Dag.node()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  expect(dag.node(cfgWindDirKey).value()).toEqual('headingFromUpslope')
  expect(dag.node(cfgWindDirKey).index()).toEqual(cfgWindDirIdx)
  expect(dag.node(cfgWindDirIdx).index()).toEqual(cfgWindDirIdx)
  expect(dag.node(cfgWindDirKey).key()).toEqual(cfgWindDirKey)
  expect(dag.node(cfgWindDirIdx).key()).toEqual(cfgWindDirKey)
  expect(dag.node(cfgWindDirIdx).isConfig()).toEqual(true)
  expect(dag.node(cfgWindDirIdx).isInput()).toEqual(false)
  expect(dag.node(cfgWindDirIdx).isRequired()).toEqual(false)
  expect(dag.node(cfgWindDirIdx).isSelected()).toEqual(false)

  expect(() => dag.node('junk').index()).toThrow()
  expect(() => dag.node({}).index()).toThrow()

  expect(dag.node(windDirUpKey).index()).toEqual(windDirUpIdx)
  expect(dag.node(windDirUpIdx).index()).toEqual(windDirUpIdx)
  expect(dag.node(windDirUpKey).key()).toEqual(windDirUpKey)
  expect(dag.node(windDirUpIdx).key()).toEqual(windDirUpKey)
  expect(dag.node(windDirUpKey).isConfig()).toEqual(false)
  expect(dag.node(windDirUpKey).isRequired()).toEqual(false)
  expect(dag.node(windDirUpKey).isSelected()).toEqual(false)
  expect(dag.node(windDirUpKey).isInput()).toEqual(true)

  expect(dag.get(windDirNoKey).isInput()).toEqual(false)
  expect(dag.node(windDirUpKey).variant().key()).toEqual('CompassAzimuth')
})
