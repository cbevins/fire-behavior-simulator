import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
dag.setStorageClass(new StorageNodeMap(dag))

const lightningResults = {
  ponderosaPineLitter: {
    negative: 0.070636,
    positive: 0.145331,
    unknown: 0.091326
  },
  punkyWoodRottenChunky: {
    negative: 0.018006,
    positive: 0.043878,
    unknown: 0.025172
  },
  punkyWoodPowderDeep: {
    negative: 0.05873,
    positive: 0.233124,
    unknown: 0.107037
  },
  punkyWoodPowderShallow: {
    negative: 0.102,
    positive: 0.342,
    unknown: 0.16848
  },
  lodgepolePineDuff: {
    negative: 0.062348,
    positive: 0.141911,
    unknown: 0.084387
  },
  douglasFirDuff: {
    negative: 0.147088,
    positive: 0.532574,
    unknown: 0.253868
  },
  highAltitudeMixed: {
    negative: 0.104,
    positive: 0.205277,
    unknown: 0.132054
  },
  peatMoss: {
    negative: 0.050601,
    positive: 0.157575,
    unknown: 0.080233
  }
}

test('1: Firebrand ignition, surfaceFire', () => {
  dag.clearSelected()
  dag.select([
    'ignition.firebrand.probability',
    'site.temperature.fuel'
  ])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.moisture.dead.tl1h'))
  expect(inputNodes).toContain(dag.get('site.canopy.fuel.shading'))

  const requiredNodes = dag.requiredNodes()
  expect(requiredNodes).toHaveLength(6)
  // console.log(DagJest.arrayList(requiredNodes, 'Test 1 Required Nodes'))
  // Requires 3 input nodes plus:
  expect(requiredNodes).toContain(dag.get('site.temperature.fuel'))
  expect(requiredNodes).toContain(dag.get('ignition.firebrand.probability'))
  expect(requiredNodes).toContain(dag.get('configure.fuel.moisture'))

  dag.input([
    ['site.temperature.air', [90]],
    ['site.moisture.dead.tl1h', [0.1]],
    ['site.canopy.fuel.shading', [0.5]]
  ]).run()
  expect(dag.get('site.temperature.fuel').value()).toBeCloseTo(105, 5)
  expect(dag.get('ignition.firebrand.probability').value()).toBeCloseTo(0.322588, 5)
})

test('2: Lightning strike ignition, surfaceFire', () => {
  dag.clearSelected()
  const node = dag.get('ignition.lightningStrike.probability')
  dag.select([node])

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(4)
  expect(inputNodes).toContain(dag.get('ignition.lightningStrike.fuel.type'))
  expect(inputNodes).toContain(dag.get('ignition.lightningStrike.fuel.depth'))
  expect(inputNodes).toContain(dag.get('ignition.lightningStrike.charge'))
  expect(inputNodes).toContain(dag.get('site.moisture.dead.tl100h'))

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 3 Required Nodes'))
  expect(requiredNodes).toHaveLength(6)
  // Requires 4 input nodes, 1 output Node, plus:
  expect(requiredNodes).toContain(dag.get('configure.fuel.moisture'))

  // Run all the fuel and charge types
  dag.input([
    ['ignition.lightningStrike.fuel.depth', [2 / 12]],
    ['site.moisture.dead.tl100h', [0.2]]
  ])
  Object.keys(lightningResults).forEach(fuel => {
    dag.input([['ignition.lightningStrike.fuel.type', [fuel]]])
    Object.keys(lightningResults[fuel]).forEach(charge => {
      dag.input([['ignition.lightningStrike.charge', [charge]]]).run()
      expect(node.value()).toBeCloseTo(lightningResults[fuel][charge], 3,
          `Test 2: ${fuel}-${charge}`)
    })
  })
  // Object.keys(lightningResults).forEach(fuel => {
  //   ;['negative', 'positive', 'unknown'].forEach(charge => {
  //     const indices = dag.resultIndices([
  //       ['ignition.lightningStrike.fuel.type', fuel],
  //       ['ignition.lightningStrike.charge', charge]
  //     ])
  //     expect(dag.resultValue(node, indices[0])).toBeCloseTo(lightningResults[fuel][charge], 3,
  //         `Test 2: ${fuel}-${charge}` )
  //   })
  // })

  // Test moisture input limits
  dag.input([
    ['ignition.lightningStrike.fuel.type', ['ponderosaPineLitter']],
    ['ignition.lightningStrike.charge', ['positive']]
  ])
  dag.input([['site.moisture.dead.tl100h', [0.39]]]).run()
  expect(node.value()).toBeCloseTo(0.027827, 4)
  dag.input([['site.moisture.dead.tl100h', [0.4]]]).run()
  expect(node.value()).toBeCloseTo(0.025509, 4)
  dag.input([['site.moisture.dead.tl100h', [0.41]]]).run()
  expect(node.value()).toBeCloseTo(0.025509, 4)

  // Test depth input limits
  dag.input([
    ['ignition.lightningStrike.fuel.type', ['douglasFirDuff']],
    ['ignition.lightningStrike.charge', ['positive']]
  ])
  dag.input([['ignition.lightningStrike.fuel.depth', [3 / 12]]]).run()
  expect(node.value()).toBeCloseTo(0.882175, 5)
  dag.input([['ignition.lightningStrike.fuel.depth', [4 / 12]]]).run()
  expect(node.value()).toBeCloseTo(0.899335, 5)
  dag.input([['ignition.lightningStrike.fuel.depth', [5 / 12]]]).run()
  expect(node.value()).toBeCloseTo(0.899335, 5)
})
