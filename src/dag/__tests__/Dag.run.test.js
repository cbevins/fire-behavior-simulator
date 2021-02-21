import { Sim } from '../index.js'
import { StorageAbstract, StorageNodeMap } from '../index.js'
import { UpdateOrthogonalRecursive, UpdateOrthogonalStack } from '../index.js'
import { configFm010Fm124, inputFm010Fm124 } from '../utils/configs.js'

const headRosKey = 'surface.fire.ellipse.head.spreadRate'

function fill(input, toSize) {
  let ar = input
  while(ar.length < toSize) { ar = ar.concat(input) }
  return ar
}

// Step 2 - configure input choices and computational options
const configItems = [
  // active for this example:
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][1]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  // inactive
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
]

const selectItems = [
  'surface.fire.ellipse.heading.fromNorth',
  'surface.fire.ellipse.heading.fromUpslope',
  'surface.fire.ellipse.axis.lengthToWidthRatio',
  'surface.fire.ellipse.head.firelineIntensity',
  'surface.fire.ellipse.head.flameLength',
  'surface.fire.ellipse.head.scorchHeight',
  'surface.fire.ellipse.head.spreadDistance',
  'surface.fire.ellipse.back.firelineIntensity',
  'surface.fire.ellipse.back.flameLength',
  'surface.fire.ellipse.back.scorchHeight',
  'surface.fire.ellipse.back.spreadDistance',
  'surface.fire.ellipse.flank.firelineIntensity',
  'surface.fire.ellipse.flank.flameLength',
  'surface.fire.ellipse.flank.scorchHeight',
  'surface.fire.ellipse.flank.spreadDistance',
]

const fuel = ['1', '4', '6', '10', 'gr9', 'gs4', 'sh9', 'tu5', 'tl9', 'sb4']
const windSpeed = []; for (let i = 0; i < 10; i++) { windSpeed.push(i * 88 * 2) } // [0, 18, 2] mi/h
const windDir = []; for (let i = 0; i < 10; i++) { windDir.push(i * 30) } // [0, 270, 30] degrees
const tl1h = []; for (let i = 2; i <= 20; i+=2) { tl1h.push(i * 0.01) } // [2, 20, 2] %
const tl10h = [0.07]
const tl100h = [0.09]
const herb = []; for (let i = 50; i <= 140; i += 10) { herb.push(i * 0.01) } // [50, 140, 10] %
const stem = [1.5]
const temp = [100]
const slope = []; for (let i = 0; i <= 180; i += 20) { slope.push(i) } // [0, 180, 20] %
const time = [60]
const aspect = [90]

const inputItems = [
  ['surface.primary.fuel.model.catalogKey', fuel],
  ['site.moisture.live.herb', herb],
  ['site.moisture.dead.tl1h', tl1h],
  ['site.moisture.dead.tl10h', tl10h],
  ['site.moisture.dead.tl100h', tl100h],
  ['site.moisture.live.stem', stem],
  ['site.slope.steepness.ratio', slope],
  ['site.wind.speed.atMidflame', windSpeed],
  ['site.wind.direction.heading.fromUpslope', windDir],
  ['site.temperature.air', temp],
  ['site.fire.time.sinceIgnition', time],
  ['site.slope.direction.aspect', aspect],
  ]

test('Dag.run() with UpdateOrthogonalStack', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  dag.configure(configItems)
    .select(selectItems)
    .setStorageClass(new StorageAbstract(dag))
    .setUpdateClass(new UpdateOrthogonalStack(dag))
    .input(inputItems)
    .setRunLimit(100)

  const result = dag.run()
  expect(result).toEqual({runs: 100, calls: 5960, ok: false, message: 'Run limit of 100 exceeded.'})
})

test('Dag.run() with UpdateOrthogonalRecursive', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  dag.configure(configItems)
    .select(selectItems)
    .setStorageClass(new StorageAbstract(dag))
    .setUpdateClass(new UpdateOrthogonalRecursive(dag))
    .input(inputItems)
    .setRunLimit(100)

  const result = dag.run()
  expect(result).toEqual({runs: 100, calls: 5960, ok: false, message: 'Run limit of 100 exceeded.'})
})
