import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'
import { FireEllipse, SurfaceFire } from '../../../fire-behavior-models'
import { configDefault } from '../configs.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure(configDefault)

// Inputs
const spreadRate = 10
const elapsedTime = 60
const fireVectorFromHead = 45
const firelineIntensity = 5000
const lengthToWidthRatio = 3
const mapScale = 24000
const midflameWind = 880
const airTemp = 95

const Inputs = [
  ['site.fire.observed.spreadRate', [10]],
  ['site.fire.time.sinceIgnition', [60]],
  ['site.slope.direction.aspect', [225]], // upslopeNo=45, fireHeadNo=90, vectorNo=135
  ['site.fire.observed.heading.fromUpslope', [45]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.observed.heading.fromNorth', [90]], // fireHeadUp=45, upslope=45, fireHeadNo=90
  ['site.fire.vector.fromHead', [45]], // vectorHd=45, vectorUp=90, vectorNo=135
  ['site.fire.vector.fromUpslope', [90]], // beta and psi vector from fire head
  ['site.fire.vector.fromNorth', [135]], // beta and psi vector from fire head
  ['site.fire.observed.firelineIntensity', [5000]],
  ['site.fire.observed.lengthToWidthRatio', [3]],
  ['site.map.scale', [24000]],
  ['site.wind.speed.atMidflame', [880]],
  ['site.temperature.air', [95]]
]

// Expected values
const headRos = spreadRate
const headDist = headRos * elapsedTime
const headMap = headDist / mapScale
const headFli = firelineIntensity
const headFlame = SurfaceFire.flameLength(headFli)
const headScorch = SurfaceFire.scorchHeight(headFli, midflameWind, airTemp)

const ecc = FireEllipse.eccentricity(lengthToWidthRatio)

const backRos = FireEllipse.backingSpreadRate(headRos, ecc)
const backDist = backRos * elapsedTime
const backMap = backDist / mapScale
const backFli = FireEllipse.fliAtAzimuth(headFli, headRos, backRos)
const backFlame = SurfaceFire.flameLength(backFli)
const backScorch = SurfaceFire.scorchHeight(backFli, midflameWind, airTemp)

const major = FireEllipse.majorSpreadRate(headRos, backRos)
const minor = FireEllipse.minorSpreadRate(major, lengthToWidthRatio)
const f = FireEllipse.fSpreadRate(major)
const g = FireEllipse.gSpreadRate(major, backRos)
const h = FireEllipse.hSpreadRate(minor)

const flankRos = FireEllipse.flankingSpreadRate(minor)
const flankDist = flankRos * elapsedTime
const flankMap = flankDist / mapScale
const flankFli = FireEllipse.fliAtAzimuth(headFli, headRos, flankRos)
const flankFlame = SurfaceFire.flameLength(flankFli)
const flankScorch = SurfaceFire.scorchHeight(flankFli, midflameWind, airTemp)

const length = FireEllipse.spreadDistance(major, elapsedTime)
const lengthMap = length / mapScale
const width = FireEllipse.spreadDistance(minor, elapsedTime)
const widthMap = width / mapScale
const perimeter = FireEllipse.perimeter(length, width)
const perimeterMap = perimeter / mapScale
const area = FireEllipse.area(length, lengthToWidthRatio)
const areaMap = area / mapScale / mapScale

const beta5Ros = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const beta5Dist = beta5Ros * elapsedTime
const beta5Map = beta5Dist / mapScale
const beta5Fli = FireEllipse.fliAtAzimuth(headFli, headRos, beta5Ros)
const beta5Flame = SurfaceFire.flameLength(beta5Fli)
const beta5Scorch = SurfaceFire.scorchHeight(beta5Fli, midflameWind, airTemp)

const betaRos = FireEllipse.betaSpreadRate(fireVectorFromHead, headRos, ecc)
const betaDist = betaRos * elapsedTime
const betaMap = betaDist / mapScale
const betaTheta = FireEllipse.thetaFromBeta(fireVectorFromHead, f, g, h)
const betaPsi = FireEllipse.psiFromTheta(betaTheta, f, h)
const betaRosPsi = FireEllipse.psiSpreadRate(betaPsi, f, g, h)
const betaFli = FireEllipse.fliAtAzimuth(headFli, headRos, betaRosPsi)
const betaFlame = SurfaceFire.flameLength(betaFli)
const betaScorch = SurfaceFire.scorchHeight(betaFli, midflameWind, airTemp)

const psiRos = FireEllipse.psiSpreadRate(fireVectorFromHead, f, g, h)
const psiDist = psiRos * elapsedTime
const psiMap = psiDist / mapScale
const psiFli = FireEllipse.fliAtAzimuth(headFli, headRos, psiRos)
const psiFlame = SurfaceFire.flameLength(psiFli)
const psiScorch = SurfaceFire.scorchHeight(psiFli, midflameWind, airTemp)

test('1: Stand-alone fire ellipse', () => {
  dag.configure([
    // IMPORTANT
    ['link.fireEllipse', 'standAlone'],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
    ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][0]],
    ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
  ])
  dag.input(Inputs).run()

  // Start with just the head fire ros as output
  dag.select(['surface.fire.ellipse.head.spreadRate']).run()
  let inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(1)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  dag.input([['site.fire.observed.spreadRate', [spreadRate]]]).run()
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value()).toEqual(spreadRate)
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value()).toEqual(headRos)
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value()).toEqual(
    dag.get('site.fire.observed.spreadRate').value())

  // Add head.spreadDistance
  dag.select(['surface.fire.ellipse.head.spreadDistance']).run()
  inputNodes = dag.requiredInputNodes()
  // Now requires 'site.fire.observed.spreadRate' and 'site.fire.time.sinceIgnition'
  expect(inputNodes.length).toEqual(2)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  dag.input([['site.fire.time.sinceIgnition', [60]]]).run()
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value()).toEqual(headRos)
  expect(dag.get('surface.fire.ellipse.head.spreadDistance').value()).toEqual(headDist)

  // Selecting axis, size, back, flank requires LWR input
  dag.select([
    'surface.fire.ellipse.axis.eccentricity',
    'surface.fire.ellipse.axis.major.spreadRate',
    'surface.fire.ellipse.axis.minor.spreadRate',
    'surface.fire.ellipse.axis.f.spreadRate',
    'surface.fire.ellipse.axis.g.spreadRate',
    'surface.fire.ellipse.axis.h.spreadRate',
    'surface.fire.ellipse.back.spreadRate',
    'surface.fire.ellipse.back.spreadDistance',
    'surface.fire.ellipse.flank.spreadRate',
    'surface.fire.ellipse.flank.spreadDistance',
    'surface.fire.ellipse.size.length',
    'surface.fire.ellipse.size.width',
    'surface.fire.ellipse.size.perimeter',
    'surface.fire.ellipse.size.area'
  ]).run()
  inputNodes = dag.requiredInputNodes()
  // Now requires ros, elapsed time, and length-to-width ratio as inputs
  expect(inputNodes.length).toEqual(3)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  dag.input([['site.fire.observed.lengthToWidthRatio', lengthToWidthRatio]]).run()

  expect(dag.get('surface.fire.ellipse.axis.eccentricity').value()).toEqual(ecc)
  expect(dag.get('surface.fire.ellipse.axis.major.spreadRate').value()).toEqual(major)
  expect(dag.get('surface.fire.ellipse.axis.minor.spreadRate').value()).toEqual(minor)
  expect(dag.get('surface.fire.ellipse.axis.f.spreadRate').value()).toEqual(f)
  expect(dag.get('surface.fire.ellipse.axis.g.spreadRate').value()).toEqual(g)
  expect(dag.get('surface.fire.ellipse.axis.h.spreadRate').value()).toEqual(h)
  expect(dag.get('surface.fire.ellipse.head.spreadRate').value()).toEqual(headRos)
  expect(dag.get('surface.fire.ellipse.head.spreadDistance').value()).toEqual(headDist)
  expect(dag.get('surface.fire.ellipse.back.spreadRate').value()).toEqual(backRos)
  expect(dag.get('surface.fire.ellipse.back.spreadDistance').value()).toEqual(backDist)
  expect(dag.get('surface.fire.ellipse.flank.spreadRate').value()).toEqual(flankRos)
  expect(dag.get('surface.fire.ellipse.flank.spreadDistance').value()).toEqual(flankDist)
  expect(dag.get('surface.fire.ellipse.size.length').value()).toEqual(length)
  expect(dag.get('surface.fire.ellipse.size.width').value()).toEqual(width)
  expect(dag.get('surface.fire.ellipse.size.perimeter').value()).toEqual(perimeter)
  expect(dag.get('surface.fire.ellipse.size.area').value()).toEqual(area)

  // Selecting beta or psi requires vector from fire head
  dag.select([
    'surface.fire.ellipse.beta.spreadRate',
    'surface.fire.ellipse.beta.spreadDistance',
    'surface.fire.ellipse.beta5.spreadRate',
    'surface.fire.ellipse.beta5.spreadDistance',
    'surface.fire.ellipse.psi.spreadRate',
    'surface.fire.ellipse.psi.spreadDistance'
  ]).run()

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(4)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))

  dag.input([['site.fire.vector.fromHead', [fireVectorFromHead]]]).run()
  expect(dag.get('site.fire.vector.fromHead').value()).toEqual(fireVectorFromHead)
  expect(dag.get('surface.fire.ellipse.beta.spreadRate').value()).toEqual(betaRos)
  expect(dag.get('surface.fire.ellipse.beta.spreadDistance').value()).toEqual(betaDist)
  expect(dag.get('surface.fire.ellipse.beta5.spreadRate').value()).toEqual(beta5Ros)
  expect(dag.get('surface.fire.ellipse.beta5.spreadDistance').value()).toEqual(beta5Dist)
  expect(dag.get('surface.fire.ellipse.psi.spreadRate').value()).toEqual(psiRos)
  expect(dag.get('surface.fire.ellipse.psi.spreadDistance').value()).toEqual(psiDist)

  // Selecting map distances requires map scale
  dag.select([
    'surface.fire.ellipse.head.mapDistance',
    'surface.fire.ellipse.back.mapDistance',
    'surface.fire.ellipse.flank.mapDistance',
    'surface.fire.ellipse.beta.mapDistance',
    'surface.fire.ellipse.beta5.mapDistance',
    'surface.fire.ellipse.psi.mapDistance',
    'surface.fire.ellipse.map.area',
    'surface.fire.ellipse.map.perimeter',
    'surface.fire.ellipse.map.length',
    'surface.fire.ellipse.map.width'
  ]).run()

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))

  dag.input([['site.map.scale', [mapScale]]]).run()
  expect(dag.get('surface.fire.ellipse.head.mapDistance').value()).toEqual(headMap)
  expect(dag.get('surface.fire.ellipse.back.mapDistance').value()).toEqual(backMap)
  expect(dag.get('surface.fire.ellipse.flank.mapDistance').value()).toBeCloseTo(flankMap, 12)
  expect(dag.get('surface.fire.ellipse.beta.mapDistance').value()).toEqual(betaMap)
  expect(dag.get('surface.fire.ellipse.beta5.mapDistance').value()).toEqual(beta5Map)
  expect(dag.get('surface.fire.ellipse.psi.mapDistance').value()).toEqual(psiMap)
  expect(dag.get('surface.fire.ellipse.map.area').value()).toEqual(areaMap)
  expect(dag.get('surface.fire.ellipse.map.perimeter').value()).toEqual(perimeterMap)
  expect(dag.get('surface.fire.ellipse.map.length').value()).toEqual(lengthMap)
  expect(dag.get('surface.fire.ellipse.map.width').value()).toBeCloseTo(widthMap, 12)

  // Selecting fireline intensity and flame length requires fireline intensity input
  dag.select([
    'surface.fire.ellipse.head.firelineIntensity',
    'surface.fire.ellipse.head.flameLength',
    'surface.fire.ellipse.back.firelineIntensity',
    'surface.fire.ellipse.back.flameLength',
    'surface.fire.ellipse.flank.firelineIntensity',
    'surface.fire.ellipse.flank.flameLength',
    'surface.fire.ellipse.beta.firelineIntensity',
    'surface.fire.ellipse.beta.flameLength',
    'surface.fire.ellipse.beta5.firelineIntensity',
    'surface.fire.ellipse.beta5.flameLength',
    'surface.fire.ellipse.psi.firelineIntensity',
    'surface.fire.ellipse.psi.flameLength'
  ]).run()

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(6)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))

  dag.input([['site.fire.observed.firelineIntensity', [firelineIntensity]]]).run()
  expect(dag.get('surface.fire.ellipse.head.firelineIntensity').value()).toEqual(headFli)
  expect(dag.get('surface.fire.ellipse.head.flameLength').value()).toEqual(headFlame)
  expect(dag.get('surface.fire.ellipse.back.firelineIntensity').value()).toEqual(backFli)
  expect(dag.get('surface.fire.ellipse.back.flameLength').value()).toEqual(backFlame)
  expect(dag.get('surface.fire.ellipse.flank.firelineIntensity').value()).toEqual(flankFli)
  expect(dag.get('surface.fire.ellipse.flank.flameLength').value()).toEqual(flankFlame)
  expect(dag.get('surface.fire.ellipse.beta.firelineIntensity').value()).toEqual(betaFli)
  expect(dag.get('surface.fire.ellipse.beta.flameLength').value()).toEqual(betaFlame)
  expect(dag.get('surface.fire.ellipse.beta5.firelineIntensity').value()).toEqual(beta5Fli)
  expect(dag.get('surface.fire.ellipse.beta5.flameLength').value()).toEqual(beta5Flame)
  expect(dag.get('surface.fire.ellipse.psi.firelineIntensity').value()).toEqual(psiFli)
  expect(dag.get('surface.fire.ellipse.psi.flameLength').value()).toEqual(psiFlame)

  // Selecting scorch height requires midflame wind and air temp
  dag.select([
    'surface.fire.ellipse.head.scorchHeight',
    'surface.fire.ellipse.back.scorchHeight',
    'surface.fire.ellipse.flank.scorchHeight',
    'surface.fire.ellipse.beta.scorchHeight',
    'surface.fire.ellipse.beta5.scorchHeight',
    'surface.fire.ellipse.psi.scorchHeight'
  ]).run()

  inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(8)
  expect(inputNodes).toContain(dag.get('site.fire.observed.spreadRate'))
  expect(inputNodes).toContain(dag.get('site.fire.time.sinceIgnition'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.lengthToWidthRatio'))
  expect(inputNodes).toContain(dag.get('site.map.scale'))
  expect(inputNodes).toContain(dag.get('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.get('site.temperature.air'))
  expect(inputNodes).toContain(dag.get('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.get('site.fire.vector.fromHead'))

  dag.input([
    ['site.temperature.air', [airTemp]],
    ['site.wind.speed.atMidflame', midflameWind]
  ]).run()
  expect(dag.get('surface.fire.ellipse.head.scorchHeight').value()).toEqual(headScorch)
  expect(dag.get('surface.fire.ellipse.back.scorchHeight').value()).toEqual(backScorch)
  expect(dag.get('surface.fire.ellipse.flank.scorchHeight').value()).toEqual(flankScorch)
  expect(dag.get('surface.fire.ellipse.beta.scorchHeight').value()).toEqual(betaScorch)
  expect(dag.get('surface.fire.ellipse.beta5.scorchHeight').value()).toEqual(beta5Scorch)
  expect(dag.get('surface.fire.ellipse.psi.scorchHeight').value()).toEqual(psiScorch)
})
