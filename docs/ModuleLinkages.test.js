/* eslint-disable jest/prefer-to-have-length */
import { Sim } from '../src/index.js'

test('1: Tree Mortality Rate required inputs for a fully linked DAG', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Select mortality rate
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(16)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))

  // and a whole bunch of surface fire inputs to calculate scorch height
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.behave.parms.cured.herb.fraction'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl1h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl10h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl100h'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.herb'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.stem'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
  expect(inputNodes).toContain(dag.node('site.slope.steepness.ratio'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.wind.direction.heading.fromUpslope'))
})

test('2: Tree Mortality Rate required inputs when unlinked', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Unlink the tree mortality model and select mortality rate
  dag.configure([['link.treeMortality', 'standAlone']])
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))

  // And the scorch height input
  expect(inputNodes).toContain(dag.node('site.fire.observed.scorchHeight'))
})

test('3: Tree Mortality Rate required inputs when stand-alone Scorch Hieight - Tree Mortality models', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Unlink the scorch height model tree mortality model and select mortality rate
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['link.treeMortality', 'linkedToScorchHeight'],
    ['configure.wind.speed', 'atMidflame']])
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))

  // plus 3 inputs to determine scorch height
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
})
