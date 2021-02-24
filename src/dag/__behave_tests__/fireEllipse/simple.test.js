/* eslint-disable no-unused-vars */
import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import * as Test from './fireEllipse.bp6.results.js'
import { FireEllipse } from '../../../fire-behavior-models/index.js'

const value = DagJest.value
expect.extend({ value })

test('1: Bpx FireEllipse', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Step 1 - configuration
  dag.configure(Test.Configs) // Standard configuration

  // Step 2 - selection
  dag.select(Test.fireEllipseSelections())

  // Get required inputs and ensure they are included in the provided input array
  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs:'))
  const testInputs = Test.Inputs // Array of [<nodeKey>-<true>] pairs
  const testList = testInputs.map(input => dag.get(input[0])) // Simple array of input Node references
  requiredInputs.forEach(requiredInput => {
    // console.log(requiredInput.node.key)
    expect(testList.includes(requiredInput)).toEqual(true)
  })

  // Ensure the required configuration nodes are as expected
  const configNodes = dag.requiredConfigNodes()
  // console.log(DagJest.arrayList(configNodes, 'Config Nodes'))
  expect(configNodes.length).toEqual(12)

  // Set required input values and ensure results are as expected
  dag.input(testInputs).run()
  Test.fireEllipseResults('fm010').forEach(result => {
    const [nodeKey, value, prec] = result
    expect(dag.get(nodeKey)).value(value, prec)
  })

  dag.input([['surface.primary.fuel.model.catalogKey', ['124']]]).run()
  Test.fireEllipseResults('fm124').forEach(result => {
    const [nodeKey, value, prec] = result
    expect(dag.get(nodeKey)).value(value, prec)
  })
})

test('2: FireEllipse equations coverage', () => {
  const rosF = 1
  const rosG = 1
  const rosH = 1
  for (let thetaFromHead = 0; thetaFromHead < 360; thetaFromHead += 1) {
    expect(FireEllipse.psiFromTheta(thetaFromHead, rosF, rosH))
      .toBeCloseTo(thetaFromHead, 2)
  }
})
