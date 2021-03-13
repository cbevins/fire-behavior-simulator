/* eslint-disable no-unused-vars */
import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]]
])

const testData = [
  // asp, Hup, Hno, Vhd, Vup, Vno
  [180, 0, 0, 0, 0, 0],
  [225, 45, 90, 0, 45, 90],
  [225, 45, 90, 285, 330, 15],
  [225, 45, 90, 330, 15, 60],
  [225, 45, 90, 45, 90, 135],
  [225, 45, 90, 315, 0, 45]
]

const cfgVector = dag.get('configure.fire.vector')
const aspect = dag.get('site.slope.direction.aspect')

const ellipseVectorFromHead = dag.get('surface.fire.ellipse.vector.fromHead')
const ellipseVectorFromUpslope = dag.get('surface.fire.ellipse.vector.fromUpslope')
const ellipseVectorFromNorth = dag.get('surface.fire.ellipse.vector.fromNorth')
const siteVectorFromHead = dag.get('site.fire.vector.fromHead')
const siteVectorFromUpslope = dag.get('site.fire.vector.fromUpslope')
const siteVectorFromNorth = dag.get('site.fire.vector.fromNorth')

const siteFireHeadingFromUpslope = dag.get('site.fire.observed.heading.fromUpslope')
const siteFireHeadingFromNorth = dag.get('site.fire.observed.heading.fromNorth')

test('1: Stand-alone fire ellipse: input fire vector from head', () => {
  dag.clearSelected()
  dag.configure([
    ['link.fireEllipse', 'standAlone'],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]]
  ])

  dag.select([
    ellipseVectorFromHead,
    ellipseVectorFromUpslope,
    ellipseVectorFromNorth
  ]).run()

  // Ensure vector from fire head is an input
  expect(cfgVector.value()).toEqual('fromHead')

  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes).toHaveLength(3)
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toContain(siteVectorFromHead)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(siteFireHeadingFromUpslope)

  testData.forEach(data => {
    const [asp, hup, hno, vhd, vup, vno] = data
    dag.input([
      [aspect, [asp]],
      [siteFireHeadingFromUpslope, [hup]],
      [siteVectorFromHead, [vhd]]
    ]).run()

    expect(ellipseVectorFromHead.value()).toEqual(vhd)
    expect(ellipseVectorFromUpslope.value()).toEqual(vup)
    expect(ellipseVectorFromNorth.value()).toEqual(vno)
  })
})

test('2: Stand-alone fire ellipse: input fire vector from upslope', () => {
  dag.clearSelected()
  dag.configure([
    ['link.fireEllipse', 'standAlone'],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][1]],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]]
  ])

  dag.select([
    ellipseVectorFromHead,
    ellipseVectorFromUpslope,
    ellipseVectorFromNorth
  ]).run()

  // Next test when vector from upslope is an input
  expect(cfgVector.value()).toEqual('fromUpslope')

  let inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(siteVectorFromUpslope)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(siteFireHeadingFromUpslope)

  testData.forEach(data => {
    const [asp, hup, hno, vhd, vup, vno] = data
    dag.input([
      [aspect, [asp]],
      [siteFireHeadingFromUpslope, [hup]],
      [siteVectorFromUpslope, [vup]]
    ]).run()

    expect(ellipseVectorFromHead.value()).toEqual(vhd)
    expect(ellipseVectorFromUpslope.value()).toEqual(vup)
    expect(ellipseVectorFromNorth.value()).toEqual(vno)
  })

  dag.configure([['configure.wind.direction', 'sourceFromNorth']])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(siteVectorFromUpslope)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(siteFireHeadingFromNorth)

  dag.configure([['configure.wind.direction', 'upslope']])
  inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(siteVectorFromUpslope)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(siteFireHeadingFromUpslope)
})

test('3: Stand-alone fire ellipse: input fire vector from north', () => {
  dag.clearSelected()
  dag.configure([
    ['link.fireEllipse', 'standAlone'],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][2]],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]]
  ])

  dag.select([
    ellipseVectorFromHead,
    ellipseVectorFromUpslope,
    ellipseVectorFromNorth
  ]).run()

  // Ensure preferred input is fire vector from north
  expect(cfgVector.value()).toEqual('fromNorth')

  const inputNodes = dag.requiredInputNodes()
  // console.log(DagJest.arrayList(inputNodes, 'Inputs'))
  expect(inputNodes).toHaveLength(3)
  expect(inputNodes).toContain(siteVectorFromNorth)
  expect(inputNodes).toContain(aspect)
  expect(inputNodes).toContain(siteFireHeadingFromUpslope) // fails

  testData.forEach(data => {
    const [asp, hup, hno, vhd, vup, vno] = data
    dag.input([
      [aspect, [asp]],
      [siteFireHeadingFromUpslope, [hup]],
      [siteVectorFromNorth, [vno]]
    ]).run()

    expect(ellipseVectorFromHead.value()).toEqual(vhd)
    expect(ellipseVectorFromUpslope.value()).toEqual(vup)
    expect(ellipseVectorFromNorth.value()).toEqual(vno)
  })
})
