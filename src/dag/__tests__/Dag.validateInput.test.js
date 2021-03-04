import { Sim } from '../index.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'
const catalogKey = 'surface.primary.fuel.model.catalogKey'
const dead1hKey = 'site.moisture.dead.tl1h'

test('Dag.validateNativeInputs()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const headRosNode = dag.node(headRosKey)
  dag.select([headRosNode])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(11)

  let result = dag.validateNativeInputs([
    [dag.node(catalogKey), ['10', 'gs4']],
    [dag.node(dead1hKey), [0.02, 0.04]],
    [dag.node(dead1hKey), 0.1],
  ])
  expect(result).toEqual([])

  result = dag.validateNativeInputs([
    [dag.node(dead1hKey), [0.02, 5.01]],
    [dag.node(catalogKey), ['10', 'junk']],
    [dag.node(dead1hKey), -1],
  ])
  expect(result.length).toEqual(3)
  expect(result).toEqual([
    {message: 'Greater than maximum value of 500.00 % (5.00 ratio)', valid: false, value: '501.00' },
    {message: 'Invalid option', valid: false, value: 'junk'},
    {message: 'Less than minimum value of 1.00 % (0.01 ratio)', valid: false, value: '-100.00' }
  ])
})

test('Dag.validateDisplayInputs()', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  const headRosNode = dag.node(headRosKey)
  dag.select([headRosNode])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(11)

  let result = dag.validateDisplayInputs([
    [dag.node(catalogKey), ['10', 'gs4']],
    [dag.node(dead1hKey), ['2', '4']], // Must be in display values!
    [dag.node(dead1hKey), '1'],
  ])
  // console.log(result)
  expect(result.length).toEqual(0)

  result = dag.validateDisplayInputs([
    [dag.node(dead1hKey), ['2', '501']],
    [dag.node(catalogKey), ['10', 'junk']],
    [dag.node(dead1hKey), '0.1'],
  ])
  expect(result.length).toEqual(3)
  expect(result).toEqual([
    {message: 'Greater than maximum value of 500.00 % (5.00 ratio)', valid: false, value: '501.00' },
    {message: 'Invalid option', valid: false, value: 'junk'},
    {message: 'Less than minimum value of 1.00 % (0.01 ratio)', valid: false, value: '0.10' }
  ])
})
