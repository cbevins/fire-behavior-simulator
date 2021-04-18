// import { Sim } from './Sim.js'
import { CompiledGenome } from '../fire-behavior-genome/index.js'
import { Sim, Dag } from './index.js'
import * as Lib from '../fire-behavior-models/index.js'

const cfgWindDirKey = 'configure.wind.direction'
const cfgWindDirIdx = 24 // NOTE: this will change when the genome changes!!
const windDirUpKey = 'site.wind.direction.heading.fromUpslope'
const windDirUpIdx = 129 // NOTE: this will change when the genome changes!!

test('new Sim()', () => {
  const sim = new Sim()
  expect(sim instanceof Sim).toEqual(true)
  expect(sim._genome).toEqual(CompiledGenome)
  expect(sim.dagKeys()).toEqual([])

  const dag1 = sim.createDag('dag1')
  expect(dag1 instanceof Dag).toEqual(true)
  expect(sim.hasDag('dag1')).toEqual(true)
  expect(sim.hasDag('dag2')).toEqual(false)
  expect(sim.dagKeys()).toEqual(['dag1'])

  const dag2 = sim.createDag('dag2')
  expect(sim._dagMap.has('dag1')).toEqual(true)
  expect(sim._dagMap.has('dag2')).toEqual(true)
  expect(sim.dagKeys()).toEqual(['dag1', 'dag2'])

  expect(sim.getDag('dag1')).toEqual(dag1)
  expect(sim.getDag('dag2')).toEqual(dag2)

  sim.deleteDag('dag1')
  expect(sim.hasDag('dag1')).toEqual(false)
  expect(sim.hasDag('dag2')).toEqual(true)
  expect(sim.dagKeys()).toEqual(['dag2'])
})

test('Sim.geneIndex()', () => {
  const sim = new Sim('dag1')
  expect(sim.geneIndex(cfgWindDirKey)).toEqual(cfgWindDirIdx)
  expect(sim.geneIndex(cfgWindDirIdx)).toEqual(cfgWindDirIdx)
  expect(sim.geneIndex(windDirUpKey)).toEqual(windDirUpIdx)
  expect(sim.geneIndex(windDirUpIdx)).toEqual(windDirUpIdx)
  expect(() => sim.geneIndex('junk')).toThrow()
  expect(() => sim.geneIndex({})).toThrow()
})

test('Sim.method())', () => {
  expect(Lib.Compass.opposite(45)).toEqual(225)

  const op1 = Lib.Compass.opposite
  expect(op1).toEqual(Lib.Compass.opposite)
  expect(typeof op1).toEqual('function')
  expect(op1.name).toEqual('opposite')
  expect(op1(45)).toEqual(225)
})
