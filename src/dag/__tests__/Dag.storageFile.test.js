/**
 * This is a prototype batch file for use by the Center for Environmental Management of Military Lands
 * at Colorado State University, Fort Collins, CO 80523-1490.
 * This increases the processing time to about 1650 milliseconds, or 145,000 runs per second
 * With Node.displayValue() formatting, its about 4500 milliseconds, or 53,000 runs per second
 */
import { Sim, StorageFile } from '../index.js'
import { Cemml } from '../../../examples/cemml.js'

test('CEMML StorageFile use', () => {
  const cemml = new Cemml()
  const results = cemml.run()
  expect(results.runs).toEqual(9600)
})

test('StorageFile error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  dag.setStorageClass(new StorageFile(dag))
  expect(() => dag.run()).toThrow()
})
