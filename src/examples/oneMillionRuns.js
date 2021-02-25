/**
 * @file fire-behavior-simulator performancer tests under various conditions.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 *
 * USAGE: node oneMillionRuns.js
 */

/**
 * oneMillionRuns.js
 *
 * REULTS for 3 test runs:       Run 1     Run 2     Run 3  Average  Percent  Percent
 * - UpdateOrthogonalStack      41,938    41,033    41,025   41,332 1.000000  0.980245
 * - UpdateOrthogonalRecursive  42,062    41,832    42,115   42.003 1.016234  1.000000
 * CONCLUSION: Recursive is about 2% slower than Stack
 *
 * Demonstrates behaveplus-radical performance for 1 million runs:
 * - 10 fuel models
 * - 10 live herb fuel moisture contents
 * - 10 dead 1-h fuel moisture contents
 * - 10 wind speeds
 * - 10 wind directions from upslope
 * - 10 slope steepnesses
 *
 * while producing 18 common outputs:
 * - surface.fire.ellipse.heading.fromNorth
 * - surface.fire.ellipse.heading.fromUpslope
 * - surface.fire.ellipse.axis.lengthToWidthRatio
 * - surface.fire.ellipse.{head|back|flank}.firelineIntensity
 * - surface.fire.ellipse.{head|back|flank}.flameLength
 * - surface.fire.ellipse.{head|back|flank}.scorchHeight
 * - surface.fire.ellipse.{head|back|flank}.spreadDistance
 * - surface.fire.ellipse.{head|back|flank}.spreadrate
 *
 * On my old laptop, the following results are displayed:
 *
 * Description      Depth      Runs  Millsec   3 Example Runs/Sec
 * Midflame Wind Speed  2   100,000    1,592   62,814 63,131 65,189
 * Wind Dir Upslope    52   100,000    1,224   81,699 78,740 79,491
 * Slope Steep Ratio   56   100,000    1,498   66,755 63,251 65,659
 * Live Herb Moisture  66   100,000    9,023   11,082 11,223 11,178
 * Dead 1-h Moisture   72   100,000    6,204   16,118 14,738 15,236
 * Fuel Model          86   100,000    8,403   11,900 11,114 11,299
 * 10 of Each             1,000,000   14,553   68,714 66,885 63,637
 *
 */
import { Sim, UpdateOrthogonalStack, UpdateOrthogonalRecursive } from '../dag/index.js'

// Step 1 - create a BehavePlus directed acyclical graph (DAG)
const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

// Step 2 - configure input choices and computational options
dag.configure([
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
])

// Step 3 - specify the fire behavior variables to be produced
dag.select([
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
])

// If interested, request and display the active configuration settings
console.log('The active configuration options are:',
  dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

// Step 4 - if interested, request and display the required inputs
console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))

// NOTE: we need to bump up the run limit so we can stress test with a lot of inputs
dag.setRunLimit(2000000)

// Define an array of input values for each input variable
// 5 fuel models x 25 wind speeds x 20 dead moistures x 4 live moistures x 4 temperatures x 6 slopes
// yields 240,000 orthogonal input combinations, and therefore 240,000 sets of run results
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

// Here we go!
// Step 5 - specify the values of the required inputs
function doRun(title, fuel, herb, tl1h, slope, windSpeed, windDir) {
  dag.input([
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
  ])

  const t0 = new Date()
  const result = dag.run()
  const elapsed = new Date() - t0

  const runs = result.runs
  let rps = parseInt((runs / (0.001 * elapsed)))
  console.log(`${title} ${runs.toLocaleString().padStart(9, ' ')} ${(elapsed.toLocaleString()).padStart(8, ' ')} ${(rps.toLocaleString()).padStart(8, ' ')} ${result.message}`)
  return elapsed
}

function fill(input, toSize) {
  let ar = input
  while(ar.length < toSize) { ar = ar.concat(input) }
  return ar
}

function doSet() {
  let n = 100000
  let t = 0
  console.log('Input                Depth      Runs  Millsec  Runs/Sec')
  t += doRun('Midflame Wind Speed     55', 'gs4', 0.5, 0.05, 0.2, fill(windSpeed, n), 90)
  t += doRun('Wind Dir Upslope        52', 'gs4', 0.5, 0.05, 0.2, 880, fill(windDir, n))
  t += doRun('Slope Steep Ratio       55', 'gs4', 0.5, 0.05, fill(slope, n), 880, 90)
  t += doRun('Live Herb Moisture      83', 'gs4', fill(herb, n), 0.05, 0.2, 880, 90)
  t += doRun('Dead 1-h Moisture       71', 'gs4', 0.5, fill(tl1h, n), 0.2, 880, 90)
  t += doRun('Fuel Model              85', fill(fuel, n), 0.5,0.05, 0.2, 880, 90)
  t += doRun('10 of Each                ', fuel, herb, tl1h, slope, windSpeed, windDir)
  console.log('Total Time                            ', t)
}

console.log('UpdateOrthogonalStack')
dag.setUpdateClass(new UpdateOrthogonalStack(dag))
doSet()

console.log('UpdateOrthogonalRecursive')
dag.setUpdateClass(new UpdateOrthogonalRecursive(dag))
doSet()