import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import {FireEllipse, SurfaceFire } from '@cbevins/fire-behavior-models'
import { configDefault } from '../configs.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure(configDefault)

// Inputs
const spreadRate = 10
const aspect = 225
const fireHeadingFromUpslope = 45
const fireHeadingFromNorth = 90
const fireVectorFromHead = 45
const fireVectorFromUpslope = 90
const fireVectorFromNorth = 135
const firelineIntensity = 5000
const lengthToWidthRatio = 3
const midflameWind = 880
const airTemp = 95

const Inputs = [
  ['site.fire.observed.spreadRate', [10]],
  ['site.slope.direction.aspect', [225]], // upslopeNo=45, fireHeadNo=90, vectorNo=135
  ['site.fire.observed.heading.fromUpslope', [45]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.observed.heading.fromNorth', [90]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.vector.fromHead', [45]], // vectorHd=45, vectorUp=90, vectorNo=135
  ['site.fire.vector.fromUpslope', [90]], // beta and psi vector from fire head
  ['site.fire.vector.fromNorth', [135]], // beta and psi vector from fire head
  ['site.fire.observed.firelineIntensity', [5000]],
  ['site.fire.observed.lengthToWidthRatio', [3]],
  ['site.wind.speed.atMidflame', [880]],
  ['site.temperature.air', [95]]
]

// Nodes
const nodeHeadScorch = dag.get('surface.fire.ellipse.head.scorchHeight')
const nodeBackScorch = dag.get('surface.fire.ellipse.back.scorchHeight')
const nodeFlankScorch = dag.get('surface.fire.ellipse.flank.scorchHeight')
const nodeBetaScorch = dag.get('surface.fire.ellipse.beta.scorchHeight')
const nodeBetaRos = dag.get('surface.fire.ellipse.beta.spreadRate')
const nodeBeta5Scorch = dag.get('surface.fire.ellipse.beta5.scorchHeight')
const nodePsiScorch = dag.get('surface.fire.ellipse.psi.scorchHeight')

// Expected values
const headRos = spreadRate
const headFli = firelineIntensity
const headScorch = SurfaceFire.scorchHeight(headFli, midflameWind, airTemp)

const ecc = FireEllipse.eccentricity(lengthToWidthRatio)

const backRos = FireEllipse.backingSpreadRate(headRos, ecc)
const backFli = FireEllipse.fliAtAzimuth(headFli, headRos, backRos)
const backScorch = SurfaceFire.scorchHeight(backFli, midflameWind, airTemp)

const major = FireEllipse.majorSpreadRate(headRos, backRos)
const minor = FireEllipse.minorSpreadRate(major, lengthToWidthRatio)
const f = FireEllipse.fSpreadRate(major)
const g = FireEllipse.gSpreadRate(major, backRos)
const h = FireEllipse.hSpreadRate(minor)

const flankRos = FireEllipse.flankingSpreadRate(minor)
const flankFli = FireEllipse.fliAtAzimuth(headFli, headRos, flankRos)
const flankScorch = SurfaceFire.scorchHeight(flankFli, midflameWind, airTemp)

const beta5Ros = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const beta5Fli = FireEllipse.fliAtAzimuth(headFli, headRos, beta5Ros)
const beta5Scorch = SurfaceFire.scorchHeight(beta5Fli, midflameWind, airTemp)

const betaRos = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const betaTheta = FireEllipse.thetaFromBeta(fireVectorFromHead, f, g, h)
const betaPsi = FireEllipse.psiFromTheta(betaTheta, f, h)
const betaRosPsi = FireEllipse.psiSpreadRate(betaPsi, f, g, h)
const betaFli = FireEllipse.fliAtAzimuth(headFli, headRos, betaRosPsi)
const betaScorch = SurfaceFire.scorchHeight(betaFli, midflameWind, airTemp)

const psiRos = FireEllipse.psiSpreadRate(fireVectorFromHead, f, g, h)
const psiFli = FireEllipse.fliAtAzimuth(headFli, headRos, psiRos)
const psiScorch = SurfaceFire.scorchHeight(psiFli, midflameWind, airTemp)

test('1: wind.direction - fire.vector combination tests', () => {
  dag.configure([
    // IMPORTANT
    ['link.fireEllipse', 'standAlone'],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
    ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
    ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
  ])

  // Selecting scorch height requires midflame wind and air temp
  dag.select([
    'surface.fire.ellipse.head.scorchHeight',
    'surface.fire.ellipse.back.scorchHeight',
    'surface.fire.ellipse.flank.scorchHeight',
    'surface.fire.ellipse.beta.scorchHeight',
    'surface.fire.ellipse.beta.spreadRate',
    'surface.fire.ellipse.beta5.scorchHeight',
    'surface.fire.ellipse.psi.scorchHeight'
  ]).run()

  // ----------------------------------------------------------------------------
  // 1 of 9: wind.direction==='upslope', fire.vector==='fromHead'
  // So far, the configuration has been: wind Upslope, fireVectorFromHead
  //  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  //  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],

  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))

  dag.input(Inputs).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 2 of 9 wind.direction==='headingFromUpslope', fire.vector==='fromHead'
  // Requires no input changes
  dag.configure([
    ['configure.wind.direction', 'headingFromUpslope'],
    ['configure.fire.vector', 'fromHead']
  ])

  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 1, 2, 3 input site.fire.vector.fromHead
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  dag.input([['site.fire.vector.fromHead', [fireVectorFromHead]]]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 3 of 9: wind.direction==='sourceFromNorth', fire.vector==='fromHead'
  // Requires no changes
  dag.configure([
    ['configure.wind.direction', 'sourceFromNorth'],
    ['configure.fire.vector', 'fromHead']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  dag.input([['site.fire.vector.fromHead', [fireVectorFromHead]]]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 4 of 9: wind.direction==='upslope', fire.vector==='fromUpslope'
  // Changes input from vector.fromHead to vector.fromUpslope
  dag.configure([
    ['configure.wind.direction', 'upslope'],
    ['configure.fire.vector', 'fromUpslope']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 4, 5, 6 input fire.vector.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromUpslope'))
  // Case 4, 5, 7, 8 require fire.observed.heading.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromUpslope'))
  dag.input([
    ['site.fire.vector.fromUpslope', [fireVectorFromUpslope]],
    ['site.fire.observed.heading.fromUpslope', [fireHeadingFromUpslope]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 5 of 9: wind.direction==='headingFromUpslope', fire.vector==='fromUpslope'
  // Requires additional input: fire.observed.heading.fromUpslope
  dag.configure([
    ['configure.wind.direction', 'headingFromUpslope'],
    ['configure.fire.vector', 'fromUpslope']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(7)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 4, 5, 6 input fire.vector.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromUpslope'))
  // Case 4, 5, 7, 8 require observed.heading.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromUpslope'))

  dag.input([
    ['site.fire.vector.fromUpslope', [fireVectorFromUpslope]],
    ['site.fire.observed.heading.fromUpslope', [fireHeadingFromUpslope]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 6 of 9: wind.direction==='sourceFromNorth', fire.vector==='fromUpslope'
  // Requires additional input: site.slope.direction.aspect
  // Instead of observed.heading.fromUpslope, need observed.heading.fromNorth
  dag.configure([
    ['configure.wind.direction', 'sourceFromNorth'],
    ['configure.fire.vector', 'fromUpslope']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 4, 5, 6 input fire.vector.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromUpslope'))
  // Case 6, 9 required observed.heading.fromNorth and slope.direction.aspect
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromNorth'))
  expect(inputNodes).toContain(dag.get('site.slope.direction.aspect'))

  dag.input([
    ['site.fire.vector.fromUpslope', [fireVectorFromUpslope]],
    ['site.fire.observed.heading.fromNorth', [fireHeadingFromNorth]],
    ['site.slope.direction.aspect', [aspect]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 7 of 9: wind.direction==='upslope', fire.vector==='fromNorth'
  // Changes input from vector.fromHead to vector.fromUpslope
  dag.configure([
    ['configure.wind.direction', 'upslope'],
    ['configure.fire.vector', 'fromNorth']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 7, 8, 9 require fire.vector.fromNorth AND slope.direction.aspect
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromNorth'))
  expect(inputNodes).toContain(dag.get('site.slope.direction.aspect'))
  // Case 4, 5, 7, 8 requires fire.observed.heading.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromUpslope'))
  dag.input([
    ['site.fire.vector.fromNorth', [fireVectorFromNorth]],
    ['site.slope.direction.aspect', [aspect]],
    ['site.fire.observed.heading.fromUpslope', [fireHeadingFromUpslope]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 8 of 9: wind.direction==='headingFromUpslope', fire.vector==='fromNorth'
  // Changes input from vector.fromHead to vector.fromUpslope
  dag.configure([
    ['configure.wind.direction', 'headingFromUpslope'],
    ['configure.fire.vector', 'fromNorth']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 7, 8, 9 require fire.vector.fromNorth AND slope.direction.aspect
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromNorth'))
  expect(inputNodes).toContain(dag.get('site.slope.direction.aspect'))
  // Cases 4, 5, 7, 8 require fire.observed.heading.fromUpslope
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromUpslope'))
  dag.input([
    ['site.fire.vector.fromNorth', [fireVectorFromNorth]],
    ['site.slope.direction.aspect', [aspect]],
    ['site.fire.observed.heading.fromUpslope', [fireHeadingFromUpslope]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)

  // ----------------------------------------------------------------------------
  // 9 of 9: wind.direction==='sourceFromNorth', fire.vector==='fromNorth'
  // Changes input from vector.fromHead to vector.fromUpslope
  dag.configure([
    ['configure.wind.direction', 'sourceFromNorth'],
    ['configure.fire.vector', 'fromNorth']
  ])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  // Cases 7, 8, 9 require fire.vector.fromNorth AND slope.direction.aspect
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromNorth'))
  expect(inputNodes).toContain(dag.get('site.slope.direction.aspect'))
  // Cases 6, 9 requires fire.observed.heading.fromNorth
  expect(inputNodes).toContain(dag.get('site.fire.observed.heading.fromNorth'))
  dag.input([
    ['site.fire.vector.fromNorth', [fireVectorFromNorth]],
    ['site.slope.direction.aspect', [aspect]],
    ['site.fire.observed.heading.fromNorth', [fireHeadingFromNorth]]
  ]).run()

  // These should be the same
  expect(nodeHeadScorch.value()).toEqual(headScorch)
  expect(nodeBackScorch.value()).toEqual(backScorch)
  expect(nodeFlankScorch.value()).toEqual(flankScorch)
  expect(nodeBetaRos.value()).toEqual(betaRos)
  expect(nodeBetaScorch.value()).toEqual(betaScorch)
  expect(nodeBeta5Scorch.value()).toEqual(beta5Scorch)
  expect(nodePsiScorch.value()).toEqual(psiScorch)
})
