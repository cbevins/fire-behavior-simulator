import { Sim } from '../index.js'
import {  nodeTable } from '../../utils/index.js'

test('Stand-alone Tree Mortality Module', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Tree Mortality')
  dag.configure([['link.treeMortality', 'standAlone']])
  // These are the usual selected nodes
  dag.select([
    'mortality.rate',
    'mortality.crownLengthScorched',
    'mortality.crownVolumeScorched'])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  //console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(1)
  expect(configNodes).toContain(dag.node('link.treeMortality'))

  // Required inputs
  const inputNodes = dag.requiredInputNodes()
  //console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.fire.observed.scorchHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))
})

test('Stand-alone Scorch Height Module #1: (input fireline intensity, midflame wind speed)', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Scorch Height #1')
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.wind.speed', 'atMidflame'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']])
  // These are the usual selected nodes
  dag.select(['scorch.height'])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(3)
  expect(configNodes).toContain(dag.node('link.scorchHeight'))
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  const inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
})

test('Stand-alone Scorch Height Module #2: (input flame length, midflame wind speed)', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Scorch Height #2')
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.wind.speed', 'atMidflame'],
    ['configure.fire.firelineIntensity', 'flameLength']])
  // These are the usual selected nodes
  dag.select(['scorch.height', 'site.fire.observed.firelineIntensity'])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(3)
  expect(configNodes).toContain(dag.node('link.scorchHeight'))
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  const inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.node('site.fire.observed.flameLength'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
})

test('Stand-alone Scorch Height Module #3: (input flame length, wind speed at 20-ft)', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Scorch Height #3')
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['configure.wind.speed', 'at20ft'],
    ['configure.fire.firelineIntensity', 'flameLength'],
    ['configure.fuel.windSpeedAdjustmentFactor', 'estimated'] // HAS NO EFFECT!!!
  ])
  // These are the usual selected nodes
  dag.select([
    'scorch.height',
    'site.fire.observed.firelineIntensity',
    'site.wind.speed.atMidflame'])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(3)
  expect(configNodes).toContain(dag.node('link.scorchHeight'))
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  const inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.node('site.fire.observed.flameLength'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
})

test('Stand-alone Scorch Height with Tree Mortality', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Scorch Height - Tree Mortality')
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['link.treeMortality', 'linkedToScorchHeight'],
    ['configure.wind.speed', 'atMidflame'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']])
  // These are the usual selected nodes
  dag.select(['scorch.height', 'mortality.rate'])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(4)
  expect(configNodes).toContain(dag.node('link.scorchHeight'))
  expect(configNodes).toContain(dag.node('link.treeMortality'))
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  const inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
  // Tree mortality inputs
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))
})

test('Stand-alone Surface Fire Spotting Distance', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Surface Fire Spotting Distance')
  dag.configure([['link.surfaceSpot', 'standAlone']])
  // These are the usual selected nodes
  dag.select([
    'spotting.surfaceFire.firebrand.criticalCoverHeight',
    'spotting.surfaceFire.firebrand.drift',
    'spotting.surfaceFire.firebrand.height',
    'spotting.surfaceFire.spotDistance.flatTerrain',
    'spotting.surfaceFire.spotDistance.flatTerrainWithDrift',
    'spotting.surfaceFire.spotDistance.mountainTerrain',
  ])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(3)
  expect(configNodes).toContain(dag.node('link.surfaceSpot'))
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  let inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.node('site.canopy.downwind.height'))
  expect(inputNodes).toContain(dag.node('site.canopy.downwind.isOpen'))
  expect(inputNodes).toContain(dag.node('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.node('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.node('site.terrain.ridgeValleyElevation'))

  // Works with midflame as well
  dag.configure([['configure.wind.speed', 'atMidflame']])
  inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).not.toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
})

test('Stand-alone Crown Fire Spotting Distance', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const dag = sim.createDag('Stand-alone Crown Fire Spotting Distance')
  dag.configure([
    ['link.crownSpot', 'standAlone'],
    ['configure.wind.speed', 'at20ft']
  ])

  // These are the usual selected nodes
  dag.select([
    'spotting.crownFire.firebrand.criticalCoverHeight',
    'spotting.crownFire.firebrand.drift',
    'spotting.crownFire.firebrand.height',
    'spotting.crownFire.spotDistance.flatTerrain',
    'spotting.crownFire.spotDistance.flatTerrainWithDrift',
    'spotting.crownFire.spotDistance.mountainTerrain',
  ])

  // Active configurations
  const configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Required Config Nodes'))
  expect(configNodes.length).toEqual(2)
  expect(configNodes).toContain(dag.node('link.crownSpot'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))

  // Required inputs
  let inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.fire.crown.flameLength'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.terrain.spotSourceLocation'))
  expect(inputNodes).toContain(dag.node('site.terrain.ridgeValleyDistance'))
  expect(inputNodes).toContain(dag.node('site.terrain.ridgeValleyElevation'))

  // Works with midflame as well
  dag.configure([['configure.wind.speed', 'atMidflame']])
  inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Required Input Nodes'))
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).not.toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
})

test('Stand-alone Crown Fire', () => {
  const sim = new Sim()
  // Convenience function to create the DAG
  const label = 'Stand-alone Crown Fire'
  const dag = sim.createDag(label)
  dag.configure([
    ['link.crownFire', 'standAlone'],
    ['configure.wind.speed', 'at20ft'],
    ['configure.fuel.moisture', 'individual'],
    ['configure.fire.effectiveWindSpeedLimit', 'applied']
  ])

  //----------------------------------------------------------------------------
  // LEVEL 1 - Rothermel active crown fire variables
  //----------------------------------------------------------------------------
  dag.select([
    'crown.fire.active.spreadRate',
    'crown.fire.active.firelineIntensity',
    'crown.fire.active.flameLength',
    'crown.fire.active.heatPerUnitArea',
    'crown.fire.active.lengthToWidthRatio',
    'crown.fire.active.isPlumeDominated',
    'crown.fire.active.isWindDriven',
    'crown.fire.active.powerOfTheFire',
    'crown.fire.active.powerOfTheWind',
    'crown.fire.active.powerRatio',
  ])

  // Active configurations
  let configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Level 1 '+label+' Required Config Nodes'))
  expect(configNodes.length).toEqual(4)
  expect(configNodes).toContain(dag.node('link.crownFire'))
  expect(configNodes).toContain(dag.node('configure.wind.speed'))
  expect(configNodes).toContain(dag.node('configure.fuel.moisture'))
  expect(configNodes).toContain(dag.node('configure.fire.effectiveWindSpeedLimit'))

  // Required inputs
  let inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Level 1'+label+' Required Input Nodes'))
  expect(inputNodes.length).toEqual(10)
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl1h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl10h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl100h'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.herb'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.stem'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.fuel.bulkDensity'))
  expect(inputNodes).toContain(dag.node('site.fire.observed.heatPerUnitArea'))

  //----------------------------------------------------------------------------
  // LEVEL 2 - Rothermel crown fire transition variables
  //----------------------------------------------------------------------------
  dag.select([
    'crown.fire.initiation.activeRatio',
    'crown.fire.initiation.canTransition',
    'crown.fire.initiation.crowningIndex',
    'crown.fire.initiation.firelineIntensity',
    'crown.fire.initiation.flameLength',
    'crown.fire.initiation.isActiveCrownFire',
    'crown.fire.initiation.isConditionalCrownFire',
    'crown.fire.initiation.isCrownFire',
    'crown.fire.initiation.isPassiveCrownFire',
    'crown.fire.initiation.isSurfaceFire',
    'crown.fire.initiation.oActive',
    'crown.fire.initiation.rPrime',
    'crown.fire.initiation.spreadRate',
    'crown.fire.initiation.transitionRatio',
    'crown.fire.initiation.type',
  ])

  configNodes = dag.requiredConfigNodes()
  // console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Level 2 '+label+' Required Config Nodes'))
  expect(configNodes.length).toEqual(5)
  expect(configNodes).toContain(dag.node('configure.fire.firelineIntensity'))

  inputNodes = dag.requiredInputNodes()
  // console.log(nodeTable(inputNodes, ['index', 'key'], 'Level 2 '+label+' Required Input Nodes'))
  expect(inputNodes.length).toEqual(12)
  expect(inputNodes).toContain(dag.node('site.canopy.fuel.foliar.moistureContent'))
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))

  //----------------------------------------------------------------------------
  // LEVEL 3 - Scott & Reinhardt final variables
  //----------------------------------------------------------------------------
  dag.select([
    'crown.fire.final.spreadRate',
    'crown.fire.final.firelineIntensity',
    'crown.fire.final.flameLength',
    'crown.fire.final.crownFractionBurned',
    'crown.fire.final.rSa',
  ])
  configNodes = dag.requiredConfigNodes()
  console.log(nodeTable(configNodes, ['index', 'key', 'nativeValue'], 'Level 3 '+label+' Required Config Nodes'))
  inputNodes = dag.requiredInputNodes()
  console.log(nodeTable(inputNodes, ['index', 'key'], 'Level 3 '+label+' Required Input Nodes'))

  expect(configNodes.length).toEqual(11)
  expect(configNodes).toContain(dag.node('configure.fuel.primary'))
  expect(configNodes).toContain(dag.node('configure.fuel.curedHerbFraction'))
  expect(configNodes).toContain(dag.node('configure.fuel.chaparralTotalLoad'))
  expect(configNodes).toContain(dag.node('configure.slope.steepness'))
  expect(configNodes).toContain(dag.node('configure.fuel.windSpeedAdjustmentFactor'))
  expect(configNodes).toContain(dag.node('configure.wind.direction'))

  // Require complete surface fire behavior inputs,
  expect(inputNodes.length).toEqual(17)
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.behave.parms.cured.herb.fraction'))
  expect(inputNodes).toContain(dag.node('site.slope.steepness.ratio'))
  expect(inputNodes).toContain(dag.node('site.wind.direction.heading.fromUpslope'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
})
