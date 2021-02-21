/* eslint-disable no-unused-vars */
import { Sim } from '../index.js'
import * as DagJest from './matchers.js'
import * as Test from './fm010fm124.data.js'
import { configFm010Fm124, inputFm010Fm124 } from './configs.js'

const value = DagJest.value
expect.extend({ value })

test('1: Fm010, FM124, and Weighted results validated against BP6', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Step 1 - configuration
  dag.configure(configFm010Fm124) // Standard configuration

  // Step 2 - selection
  dag.select(Test.primarySelections())
  dag.select(Test.secondarySelections())
  dag.select(Test.weightedSelections())

  // Get required inputs and ensure they are included in the provided input array
  const requiredInputs = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(requiredInputs, 'Required Inputs:'))
  const testInputs = [...inputFm010Fm124] // Array of [<nodeKey>-<true>] pairs
  const testList = testInputs.map(input => dag.get(input[0])) // Simple array of input Node references
  requiredInputs.forEach(requiredInput => {
    // console.log(requiredInput.node.key)
    expect(testList.includes(requiredInput)).toEqual(true)
  })

  // Ensure the required configuration nodes are as expected
  const configNodes = dag.requiredConfigNodes()
  expect(configNodes.length).toEqual(11)
  // console.log(DagJest.arrayList(configNodes, 'Config Nodes'))

  // Set required input values and ensure results are as expected
  dag.input(testInputs)

  // Validate FM010 primary fuel results
  const primaryResults = Test.primaryResults()
  primaryResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })

  // Validate FM124 secondary fuel results
  const secondaryResults = Test.secondaryResults()
  secondaryResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })

  // Validate weighted fire results
  const weightedResults = Test.weightedResults()
  weightedResults.forEach(result => {
    const [nodeKey, expected, prec] = result
    expect(dag.get(nodeKey)).value(expected, prec)
  })

  dag.clearInputs()
  expect(dag.dna.input.size).toEqual(0)
})
