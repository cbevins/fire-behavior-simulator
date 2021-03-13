import { Sim } from '../index.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'

test('Dag.select() error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)

  expect(() => dag.select()).toThrow()
  expect(() => dag.select('junk')).toThrow()
  expect(() => dag.select(['junk'])).toThrow()
  expect(() => dag.select(node)).toThrow()
  expect(() => dag.select([node])).not.toThrow()

  expect(() => dag.unselect()).toThrow()
  expect(() => dag.unselect('junk')).toThrow()
  expect(() => dag.unselect(['junk'])).toThrow()
  expect(() => dag.unselect(node)).toThrow()
  expect(() => dag.unselect([node])).not.toThrow()
})

test('Dag.select(), Dag.unselect(), Dag.clearSelected()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)

  expect(dag.selectedNodes()).toEqual([])
  expect(node.isSelected()).toEqual(false)

  expect(() => dag.select([node])).not.toThrow()
  expect(dag.selectedNodes()).toEqual([node])
  expect(node.isSelected()).toEqual(true)

  expect(() => dag.unselect([node])).not.toThrow()
  expect(dag.selectedNodes()).toEqual([])
  expect(node.isSelected()).toEqual(false)

  expect(() => dag.select([node])).not.toThrow()
  expect(dag.selectedNodes()).toEqual([node])
  expect(node.isSelected()).toEqual(true)

  expect(() => dag.clearSelected()).not.toThrow()
  expect(dag.selectedNodes()).toEqual([])
  expect(node.isSelected()).toEqual(false)
})

test('Dag.requiredInputNodes(), Dag.requiredConfigNodes(), Dag.requiredNodes()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const node = dag.node(headRosKey)
  dag.select([node])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(11)

  const configNodes = dag.requiredConfigNodes()
  // console.log(configNodes.reduce((str, node) => node.key() +'\n', ''))
  expect(configNodes).toHaveLength(12)
  expect(configNodes).toContain(dag.node('configure.fuel.primary'))
  expect(configNodes).toContain(dag.node('configure.fuel.curedHerbFraction'))
  expect(configNodes).toContain(dag.node('configure.fuel.chaparralTotalLoad'))
  expect(configNodes).toContain(dag.node('configure.fuel.moisture'))
  expect(configNodes).toContain(dag.node('configure.fuel.secondary'))
  expect(configNodes).toContain(dag.node('configure.fuel.windSpeedAdjustmentFactor'))
  expect(configNodes).toContain(dag.node('configure.slope.steepness'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))
  expect(configNodes).toContain(dag.node('configure.wind.direction'))
  expect(configNodes).toContain(dag.node('configure.fire.effectiveWindSpeedLimit'))
  expect(configNodes).toContain(dag.node('link.fireEllipse'))
  expect(configNodes).toContain(dag.node('configure.fire.weightingMethod'))
  const requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(323)

  dag.run()
})
