import { Sim } from '../../index.js'
import * as DagJest from './matchers.js'
import * as FuelParticle from '../FuelParticle.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([['configure.fuel.primary', 'catalog']])

const cfgFuel = dag.get('configure.fuel.primary')
// const diam = dag.get('surface.primary.fuel.bed.dead.particle.class1.cylindricalDiameter')
const volm = dag.get('surface.primary.fuel.bed.dead.particle.class1.volume')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')

test('1: sizeClass() tests for full code coverage', () => {
  expect(dag.get('configure.fuel.primary').value()).toEqual('catalog')

  dag.select([volm])
  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Input Nodes'))
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(catalogKey)

  const configNodes = dag.requiredConfigNodes()
  // expect(configNodes.length).toEqual(1)
  expect(configNodes).toContain(cfgFuel)

  dag.input([[catalogKey, '10']]).run()
  let diameter = 4 / 2000
  // expect(diam.value()).toEqual(diameter)
  let volume = 0.138 / 32
  expect(volm.value()).toEqual(volume)

  // FM 10 10-h
  diameter = 4 / 192 // 0.02083333 ft, 0.25 in
  volume = 0.092 / 32 // 0.002875 ft3, 4.968 in3
  const length = FuelParticle.cylindricalLength(diameter, volume) // 8.43393 ft
  expect(length).toEqual(volume / (Math.PI * 0.25 * diameter * diameter))

  expect(FuelParticle.sizeClass(3000)).toEqual(0)
  expect(FuelParticle.sizeClass(1200)).toEqual(0)

  expect(FuelParticle.sizeClass(1199)).toEqual(1)
  expect(FuelParticle.sizeClass(192)).toEqual(1)

  expect(FuelParticle.sizeClass(191)).toEqual(2)
  expect(FuelParticle.sizeClass(96)).toEqual(2)

  expect(FuelParticle.sizeClass(95)).toEqual(3)
  expect(FuelParticle.sizeClass(48)).toEqual(3)

  expect(FuelParticle.sizeClass(47)).toEqual(4)
  expect(FuelParticle.sizeClass(16)).toEqual(4)

  expect(FuelParticle.sizeClass(15)).toEqual(5)
})

test('2: Coverage tests', () => {
  expect(FuelParticle.cylindricalDiameter(1200)).toEqual(4 / 1200)
  expect(() => FuelParticle.selectByDomain('junk', 1, 2, 3, 4)).toThrow()
})
