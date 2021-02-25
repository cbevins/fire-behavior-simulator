import { Sim } from '../index.js'
import { StorageAbstract, StorageNodeMap } from '../index.js'
import { UpdateOrthogonalRecursive, UpdateOrthogonalStack } from '../index.js'
import { configFm010Fm124, inputFm010Fm124 } from '../utils/configs.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'

// Expected results
const ros1 = 18.551680325448835 // Fm010
const ros2 = 48.47042599399056 // Fm124
const cover1 = 0.6
const harmonicRos = 1 / (cover1 / ros1 + (1 - cover1) / ros2)
const arithmeticRos = cover1 * ros1 + (1-cover1) * ros2

test('UpdateOrthogonalRecursive constructor error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => new UpdateOrthogonalRecursive()).toThrow()
  expect(() => new UpdateOrthogonalRecursive(1)).toThrow()
  expect(() => new UpdateOrthogonalRecursive('string')).toThrow()
  expect(() => new UpdateOrthogonalRecursive(bool)).toThrow()
  expect(() => new UpdateOrthogonalRecursive({})).not.toThrow()
  expect(() => dag.setUpdateClass(new UpdateOrthogonalRecursive({}))).toThrow()
  expect(() => new UpdateOrthogonalRecursive(dag)).not.toThrow()
})

test('UpdateOrthogonalStack constructor error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => new UpdateOrthogonalStack()).toThrow()
  expect(() => new UpdateOrthogonalStack(1)).toThrow()
  expect(() => new UpdateOrthogonalStack('string')).toThrow()
  expect(() => new UpdateOrthogonalStack(bool)).toThrow()
  expect(() => new UpdateOrthogonalStack({})).not.toThrow()
  expect(() => dag.setUpdateClass(new UpdateOrthogonalStack({}))).toThrow()
  expect(() => new UpdateOrthogonalStack(dag)).not.toThrow()
})

test('Dag.run() with UpdateOrthogonalStack', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)

  dag.configure(configFm010Fm124)
    .select([node, dag.node('surface.weighted.fire.arithmeticMean.spreadRate')])
    .setStorageClass(new StorageAbstract(dag))
    .setUpdateClass(new UpdateOrthogonalStack(dag))
    .input(inputFm010Fm124)
    .run()

  expect(dag.get('surface.primary.fuel.fire.spreadRate').value()).toBeCloseTo(18.551680325448835, 9)
  expect(dag.get('surface.secondary.fuel.fire.spreadRate').value()).toBeCloseTo(48.47042599399056, 9)
  expect(dag.get('surface.weighted.fire.arithmeticMean.spreadRate').value()).toBeCloseTo(arithmeticRos, 9)
  expect(dag.get('surface.weighted.fire.harmonicMean.spreadRate').value()).toBeCloseTo(harmonicRos, 9)
  expect(dag.get('surface.weighted.fire.spreadRate').value()).toBeCloseTo(harmonicRos, 9)
})

test('Dag.run() with UpdateOrthogonalRecursive', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)

  dag.configure(configFm010Fm124)
    .select([node, dag.node('surface.weighted.fire.arithmeticMean.spreadRate')])
    .setUpdateClass(new UpdateOrthogonalRecursive(dag))
    .setStorageClass(new StorageNodeMap(dag))
    .input(inputFm010Fm124)
    .setRunLimit(1000)
    .run()

  expect(dag.get('surface.primary.fuel.fire.spreadRate').value()).toBeCloseTo(18.551680325448835, 9)
  expect(dag.get('surface.secondary.fuel.fire.spreadRate').value()).toBeCloseTo(48.47042599399056, 9)
  expect(dag.get('surface.weighted.fire.arithmeticMean.spreadRate').value()).toBeCloseTo(arithmeticRos, 9)
  expect(dag.get('surface.weighted.fire.harmonicMean.spreadRate').value()).toBeCloseTo(harmonicRos, 9)
  expect(dag.get('surface.weighted.fire.spreadRate').value()).toBeCloseTo(harmonicRos, 9)
})


test('DagNode() coverage', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)

  dag.configure(configFm010Fm124)
    .select([node, dag.node('surface.weighted.fire.arithmeticMean.spreadRate')])
    .setUpdateClass(new UpdateOrthogonalRecursive(dag))
    .setStorageClass(new StorageNodeMap(dag))
    .input(inputFm010Fm124)
    .setRunLimit(1000)
    .run()

  const node2 = dag.get('surface.primary.fuel.fire.spreadRate')
  expect(node2.label()).toEqual('Surface Primary Fuel Fire Spread Rate')
  expect(node2.value()).toBeCloseTo(18.551680325448835, 9)
  expect(node2.displayValue()).toEqual('18.55')
  expect(node2.displayString()).toEqual('18.55 ft/min')
  expect(node2.depth()).toEqual(28)
})

