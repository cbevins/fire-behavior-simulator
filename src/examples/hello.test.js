import { Sim } from '../dag/Sim.js'
import { expectedValueSpreadRateMOCK } from '../fire-behavior-models/SurfaceFire.js'
console.log('Hello, World')
test('Hello', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(true).toEqual(true)
})
