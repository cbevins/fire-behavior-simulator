import { Sim } from '../index.js'
import { configDefault, configMinimalInput } from '../utils/configs.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'

const cfgWindDirKey = 'configure.wind.direction'
const cfgWindDirIdx = 24
const windDirUpKey = 'site.wind.direction.heading.fromUpslope'
const windDirUpIdx = 101
const windDirNoKey = 'site.wind.direction.source.fromNorth'

test('Dag.configure() error handling', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => dag.configure()).toThrow()
  expect(() => dag.configure(true)).toThrow()
  expect(() => dag.configure('string')).toThrow()
  expect(() => dag.configure(1)).toThrow()
  expect(() => dag.configure({})).toThrow()

  expect(() => dag.configure([])).not.toThrow()
  expect(() => dag.configure([['configure.fuel.primary', 'catalog']])).not.toThrow()

  expect(() => dag.configure(['junk', 'catalog'])).toThrow()
  expect(() => dag.configure([['configure.fuel.primary', 'junk']])).toThrow()
  expect(() => dag.configure([[dag.node(headRosKey), 'catalog']])).toThrow()
})

test('Dag.configure() initial configuration)', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  expect(dag.get(cfgWindDirKey).value()).toEqual('headingFromUpslope')
  expect(dag.get(windDirUpKey).isInput()).toEqual(true)
  expect(dag.get(windDirNoKey).isInput()).toEqual(false)
  // console.log(cfgWindDirKey, 'value', dag.get(cfgWindDirKey).value())
  // console.log(windDirUpKey, 'depth', dag.get(windDirUpKey).depth())
  // console.log(windDirNoKey, 'depth', dag.get(windDirNoKey).depth())

  dag.configure([[cfgWindDirKey, 'sourceFromNorth']])
  expect(dag.get(cfgWindDirKey).value()).toEqual('sourceFromNorth')
  expect(dag.get(windDirUpKey).isInput()).toEqual(false)
  expect(dag.get(windDirNoKey).isInput()).toEqual(true)
  // console.log(cfgWindDirKey, 'value', dag.get(cfgWindDirKey).value())
  // console.log(windDirUpKey, 'depth', dag.get(windDirUpKey).depth())
  // console.log(windDirNoKey, 'depth', dag.get(windDirNoKey).depth())
})

test('Dag.configure() default', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => dag.configure(configDefault)).not.toThrow()

  const node = dag.node(headRosKey)
  expect(() => dag.select([node])).not.toThrow()
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(12)
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.behave.parms.cured.herb.fraction'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl1h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl10h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl100h'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.herb'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.stem'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
  expect(inputNodes).toContain(dag.node('site.slope.direction.aspect'))
  expect(inputNodes).toContain(dag.node('site.slope.steepness.ratio'))
  expect(inputNodes).toContain(dag.node('site.wind.direction.source.fromNorth'))
})

test('Dag.configure() minimal input', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')
  expect(() => dag.configure()).toThrow()
  expect(() => dag.configure(configMinimalInput)).not.toThrow()

  const node = dag.node(headRosKey)
  expect(() => dag.select([node])).not.toThrow()
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)
  expect(inputNodes).toContain(dag.node('site.moisture.live.category'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.category'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
  expect(inputNodes).toContain(dag.node('site.slope.steepness.ratio'))
})
