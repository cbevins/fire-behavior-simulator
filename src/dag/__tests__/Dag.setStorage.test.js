import { Sim, StorageAbstract, UpdateAbstract } from '../index.js'

test('StorageAbstract() error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => new StorageAbstract()).toThrow()
  expect(() => new StorageAbstract(true)).toThrow()
  expect(() => new StorageAbstract(1)).toThrow()
  expect(() => new StorageAbstract('string')).toThrow()
  expect(() => dag.setStorageClass(new StorageAbstract({}))).toThrow()
  expect(() => new StorageAbstract({})).not.toThrow()
  expect(() => new StorageAbstract(dag)).not.toThrow()

  const dag2 = sim.createDag('dag2')
  expect(() => dag.setStorageClass(new StorageAbstract(dag2))).toThrow()
  expect(() => dag.setStorageClass(new UpdateAbstract(dag2))).toThrow()
  expect(() => dag.setStorageClass(new UpdateAbstract(dag))).toThrow()
})

test('UpdateAbstract() error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => new UpdateAbstract()).toThrow()
  expect(() => new UpdateAbstract(true)).toThrow()
  expect(() => new UpdateAbstract(1)).toThrow()
  expect(() => new UpdateAbstract('string')).toThrow()
  expect(() => new UpdateAbstract({})).not.toThrow()
  expect(() => dag.setUpdateClass(new UpdateAbstract({}))).toThrow()
  expect(() => new UpdateAbstract(dag)).not.toThrow()
  const ua = new UpdateAbstract(dag)
  ua.update()

  const dag2 = sim.createDag('dag2')
  expect(() => dag.setUpdateClass(new UpdateAbstract(dag2))).toThrow()
  expect(() => dag2.setUpdateClass(new UpdateAbstract(dag2))).not.toThrow()
  expect(() => dag.setUpdateClass(new StorageAbstract(dag))).toThrow()
})
