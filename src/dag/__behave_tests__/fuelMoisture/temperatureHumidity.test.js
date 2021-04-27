import { Sim } from '../../index.js'
import * as DagJest from '../../utils/matchers.js'

const value = DagJest.value
expect.extend({ value })

const sim = new Sim('temperature-humidity')
const dag = sim.getDag('temperature-humidity')
// 1 configuration node
const cfg = dag.node('configure.temperature.humidity')
// 6 selected nodes
const at = dag.node('site.temperature.air')
const db = dag.node('site.temperature.dryBulb')
const dp = dag.node('site.temperature.dewPoint')
const rh = dag.node('site.temperature.relativeHumidity')
const wb = dag.node('site.temperature.wetBulb')
const wbd = dag.node('site.temperature.wetBulbDepression')
// 1 non-selected node
const el = dag.node('site.location.elevation')
dag.select([at, db, dp, rh, wb, wbd])

test('1: config.temperature.humidity === humidity', () => {
  dag.clearInputs()
  dag.configure([[cfg, 'humidity']])
  expect(cfg.value()).toEqual('humidity')

  // Get required inputs
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(3)
  expect(requiredInputs).toContain(at) // at => db
  expect(requiredInputs).toContain(rh) // rh, db => dp
  expect(requiredInputs).toContain(wb) // wb, dp => wbd

  dag.input([
    [at, [90]],
    [wb, [60]],
    [rh, [0.1]]
  ]).run()
  // inputs
  expect(at.value()).toEqual(90)
  expect(wb.value()).toEqual(60)
  expect(rh.value()).toEqual(0.1)
  // outputs
  expect(el.value()).toEqual(0)
  expect(db.value()).toEqual(90)
  expect(wbd.value()).toEqual(30)
  expect(dp.value()).toEqual(26.18432695711639)
})

test('2: config.temperature.humidity === wetBulb', () => {
  dag.clearInputs()
  dag.configure([[cfg, 'wetBulb']])
  expect(cfg.value()).toEqual('wetBulb')

  // Get required inputs
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(3)
  expect(requiredInputs).toContain(at) // at => db
  expect(requiredInputs).toContain(wb) // wb, dp => wbd
  expect(requiredInputs).toContain(el) // db, wb, el => rh

  dag.input([
    [at, [90]],
    [wb, [60]],
    [el, [0]]
  ]).run()
  // inputs
  expect(at.value()).toEqual(90)
  expect(wb.value()).toEqual(60)
  expect(el.value()).toEqual(0)
  // outputs
  expect(db.value()).toEqual(90)
  expect(dp.value()).toEqual(32.840736794428075)
  expect(rh.value()).toEqual(0.13126403584785518)
  expect(wbd.value()).toEqual(30)
})

test('3: config.temperature.humidity === dewPoint', () => {
  dag.clearInputs()
  dag.configure([[cfg, 'dewPoint']])
  expect(cfg.value()).toEqual('dewPoint')

  // Get required inputs
  const requiredInputs = dag.requiredInputNodes()
  expect(requiredInputs).toHaveLength(3)
  expect(requiredInputs).toContain(at) // at => db
  expect(requiredInputs).toContain(dp) // db, wb, el => rh
  expect(requiredInputs).toContain(wb) // wb, dp => wbd

  dag.input([
    [at, [90]],
    [dp, [30]],
    [wb, [60]]
  ]).run()
  // inputs
  expect(at.value()).toEqual(90)
  expect(dp.value()).toEqual(30)
  expect(wb.value()).toEqual(60)
  // outputs
  expect(db.value()).toEqual(90)
  expect(rh.value()).toEqual(0.11699703216855946)
  expect(wbd.value()).toEqual(30)
  // unused
  expect(el.value()).toEqual(0)
})
