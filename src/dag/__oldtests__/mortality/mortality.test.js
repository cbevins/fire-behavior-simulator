import { Sim, StorageNodeMap } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { TreeMortality } from '../../../fire-behavior-models'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

// 27 per page, 9 pages
const Results = {
  // page 1 ...
  ABAM: [0.734048],
  ABBA: [0.872273],
  ABCO: [0.431506],
  ABGR: [0.984628],
  ABISPP: [0.695013],
  ABLA: [0.984628],
  ABLO: [0.431506],
  ABMA: [0.248648],
  ABNO: [0.750651],
  ABPR: [0.750651],
  ACBA3: [0.888516],
  ACESPP: [0.7939],
  ACLE: [0.888516],
  ACMA3: [0.92513],
  ACNE2: [0.846757],
  ACNI5: [0.83804],
  ACPE: [0.750651],
  ACRU: [0.896337],
  ACSA2: [0.872273],
  ACSA3: [0.855384],
  ACSP2: [0.888516],
  AEFL: [0.710166],
  AEGL: [0.829257],
  AEOC2: [0.710166],
  AIAL: [0.710166],
  ALRH2: [0.629472],
  ALRU2: [0.911271]
  // page 2 ...
}

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')
const store = new StorageNodeMap(dag)
dag.setStorageClass(store)

dag.configure([
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight'],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
  // NOT AS IMPORTANT
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][2]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]]
])

// Selected Nodes
const mortality = dag.get('mortality.rate')
const mortScorchHt = dag.get('mortality.scorchHeight')
const scorchHt = dag.get('scorch.height')
const treeBark = dag.get('site.canopy.tree.barkThickness')
const lenScorched = dag.get('mortality.crownLengthScorched')
const volScorched = dag.get('mortality.crownVolumeScorched')

// Awlays required
const treeHt = dag.get('site.canopy.crown.totalHeight')
const baseHt = dag.get('site.canopy.crown.baseHeight')
const treeDbh = dag.get('site.canopy.tree.dbh')
const treeSpecies = dag.get('site.canopy.tree.species.fofem6.code')

// Required Nodes when linked to surfaceFire
const deadMois = dag.get('site.moisture.dead.category')
const liveMois = dag.get('site.moisture.live.category')
const slope = dag.get('site.slope.steepness.ratio')
const airTemp = dag.get('site.temperature.air')
const windSpeed = dag.get('site.wind.speed.atMidflame')
const catalogKey = dag.get('surface.primary.fuel.model.catalogKey')
const primaryFli = dag.get('surface.primary.fuel.fire.firelineIntensity')

// Required when linked to fireEllipse or stand-alone
const observedFlame = dag.get('site.fire.observed.flameLength')
const observedFli = dag.get('site.fire.observed.firelineIntensity')
const observedSht = dag.get('site.fire.observed.scorchHeight')

test('1: Tree mortality stand-alone', () => {
  dag.clearSelected()
  dag.configure([
    ['link.treeMortality', 'standAlone'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select([mortality])
  let inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 1 Inputs'))
  expect(inputNodes.length).toEqual(5)

  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)
  // Must enter observed scorch height
  expect(inputNodes).toContain(observedSht)

  let requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 1 Required'))
  expect(requiredNodes.length).toEqual(8)
  // In addition to the 5 mortality inputs and 1 selected treeMortality Node:
  // there is 1 configuration Nodes
  // expect(requiredNodes).toContain(dag.get('configure.module'))
  expect(requiredNodes).toContain(dag.get('link.treeMortality'))
  // and the intermediate 'mortality.scorchHeight' linked Node
  expect(requiredNodes).toContain(mortScorchHt) // 'mortality.scorchHeight'

  // These require no new inputs...
  dag.select([
    'site.canopy.tree.barkThickness',
    'mortality.crownLengthScorched',
    'mortality.crownVolumeScorched'
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 1 Inputs'))
  expect(inputNodes.length).toEqual(5)
  // Just themselves as requiredNodes
  requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 1 Required'))
  expect(requiredNodes.length).toEqual(11)

  dag.input([
    [treeSpecies, ['ABBA']],
    [treeDbh, [36]],
    [treeHt, [80]],
    [baseHt, [20]],
    [observedSht, [60]]
  ]).run()
  expect(treeBark.value()).sig(1.116, 5)
  expect(mortality.value()).sig(0.872273, 5)
  expect(volScorched.value()).sig(0.88888888888, 9)
  expect(lenScorched.value()).sig(40 / 60, 6)
})

test('2a: Tree mortality linked to scorchHeight with firelineIntensity input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.treeMortality', 'linkedToScorchHeight'],
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select([mortality])
  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 2a Inputs'))
  expect(inputNodes.length).toEqual(7)
  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)
  // There are 3 scorch height input parameters
  expect(inputNodes).toContain(observedFli)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(airTemp)

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 2a Required'))
  // In addition to the 7 input Nodes and the 1 selected mortality Node:
  // there are 4 required configuration Nodes
  expect(requiredNodes).toContain(dag.get('link.scorchHeight'))
  expect(requiredNodes).toContain(dag.get('link.treeMortality'))
  expect(requiredNodes).toContain(dag.get('configure.fire.firelineIntensity'))
  expect(requiredNodes).toContain(dag.get('configure.wind.speed'))
  expect(requiredNodes.length).toEqual(14)
  // and 2 intermediate Nodes:
  expect(requiredNodes).toContain(dag.get('scorch.height'))
  expect(requiredNodes).toContain(mortScorchHt) // 'mortality.scorchHeight'
})

test('2b: Tree mortality linked to scorchHeight with flameLength input', () => {
  dag.clearSelected()
  dag.configure([
    ['link.treeMortality', 'linkedToScorchHeight'],
    ['link.scorchHeight', 'standAlone'],
    ['configure.fire.firelineIntensity', 'flameLength']
  ])
  dag.select([mortality])
  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 2 Inputs'))
  expect(inputNodes.length).toEqual(7)
  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)
  // There are 3 scorch height input parameters
  expect(inputNodes).toContain(observedFlame)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(airTemp)

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 2 Required'))
  // AN additional requiredNode because input flameLength -> firelineIntensity
  expect(requiredNodes.length).toEqual(15)
  // In addition to the 7 input Nodes and the 1 selected mortality Node:
  // there are 4 required configuration Nodes
  // expect(requiredNodes).toContain(dag.get('configure.module'))
  expect(requiredNodes).toContain(dag.get('link.scorchHeight'))
  expect(requiredNodes).toContain(dag.get('link.treeMortality'))
  expect(requiredNodes).toContain(dag.get('configure.fire.firelineIntensity'))
  expect(requiredNodes).toContain(dag.get('configure.wind.speed'))
  // 2 intermediate Node:
  expect(requiredNodes).toContain(mortScorchHt) // 'mortality.scorchHeight'
  expect(requiredNodes).toContain(scorchHt) // 'scorch.height'
  // because flameLength input is preferred, we also have firelineIntensity
  expect(requiredNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
})

test('3: Tree mortality as an built-in Node of fireEllipse', () => {
  dag.clearSelected()
  dag.configure([
    ['link.fireEllipse', 'standAlone'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select(['surface.fire.ellipse.head.treeMortality'])
  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 3 Inputs'))
  expect(inputNodes.length).toEqual(7)

  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)
  // There are 3 scorch height input parameters
  expect(inputNodes).toContain(observedFli)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(airTemp)

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 3 Required'))
  expect(requiredNodes.length).toEqual(14)
  // In addition to the 7 inputs and 1 selected Node:
  expect(requiredNodes).toContain(dag.get('surface.fire.ellipse.head.treeMortality'))
  // There are 3 required configuration Nodes
  // expect(requiredNodes).toContain(dag.get('configure.module'))
  expect(requiredNodes).toContain(dag.get('link.fireEllipse'))
  expect(requiredNodes).toContain(dag.get('configure.fire.firelineIntensity'))
  expect(requiredNodes).toContain(dag.get('configure.wind.speed'))
  // and 3 intermediate Nodes:
  expect(requiredNodes).toContain(dag.get('surface.fire.ellipse.head.firelineIntensity'))
  expect(requiredNodes).toContain(dag.get('surface.fire.ellipse.wind.speed.atMidflame'))
  expect(requiredNodes).toContain(dag.get('surface.fire.ellipse.head.scorchHeight'))
  expect(requiredNodes).not.toContain(mortScorchHt) // 'mortality.scorchHeight'
})

test('4: Tree mortality as a built-in Node of  fireEllipse linked to surface fire', () => {
  dag.clearSelected()
  dag.configure([
    ['link.fireEllipse', 'linkedToSurfaceFire'],
    ['configure.fire.firelineIntensity', 'firelineIntensity']
  ])
  dag.select(['surface.fire.ellipse.head.treeMortality'])

  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Test 4 Inputs'))
  expect(inputNodes.length).toEqual(10)
  // There are 6 surface fire inputs
  expect(inputNodes).toContain(deadMois)
  expect(inputNodes).toContain(liveMois)
  expect(inputNodes).toContain(slope)
  expect(inputNodes).toContain(airTemp)
  expect(inputNodes).toContain(windSpeed)
  expect(inputNodes).toContain(catalogKey)
  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)

  const requiredNodes = dag.requiredNodes()
  // console.log(DagJest.arrayList(requiredNodes, 'Test 4 Required'))
  expect(requiredNodes.length > 300).toEqual(true)
})

test('5: Tree mortality results validation with BP6', () => {
  dag.clearSelected()
  dag.configure([
    ['link.treeMortality', 'standAlone']
  ])
  dag.select([
    mortality,
    'site.canopy.tree.barkThickness',
    'mortality.crownLengthScorched',
    'mortality.crownVolumeScorched'
  ])
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  // There are always 4 tree input parameters
  expect(inputNodes).toContain(treeSpecies)
  expect(inputNodes).toContain(treeDbh)
  expect(inputNodes).toContain(baseHt)
  expect(inputNodes).toContain(treeHt)
  // Must enter observed scorch height
  expect(inputNodes).toContain(observedSht)

  const requiredNodes = dag.requiredNodes()
  expect(requiredNodes.length).toEqual(11)

  const species = TreeMortality.fofem6Codes()
  dag.input([
    [treeSpecies, species],
    [treeDbh, [36]],
    [treeHt, [80]],
    [baseHt, [20]],
    [observedSht, [60]]
  ]).run()
  for (let idx = 0; idx < species.length; idx++) {
    const spp = species[idx]
    expect(store.get(treeSpecies, idx)).toEqual(spp)
    expect(store.get(volScorched, idx)).sig(0.88888888888, 9)
    expect(store.get(lenScorched, idx)).sig(40 / 60, 6)
    if (Results.hasOwnProperty(spp)) {
      expect(store.get(mortality, idx)).sig(Results[spp][0], 5, `${spp}`)
      // expect(store.get(treeBark, idx)).sig(Results[spp][1], 5, `${spp}`)
    }
  }
})
