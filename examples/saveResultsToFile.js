/**
 * @file saveToFile example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * This expands the surfaceFireOptimized.js example to write all results to a text file.
 *
 * This increases the processing time to about 1650 milliseconds, or 145,000 runs per second
 *                       Milliseconds  Runs/second
 * No file output        750            335,000
 * Node.value()          3500            68,000
 * Node.displayValue()   3500            67,000
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim, StorageFile } from '../src/dag/index.js'
import { header } from './header.js'

const fileName = 'surfaceFireOptimizedResults.txt'

// Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

// Step 2 - create a new StorageFile instance and inject it into the dag.
const store = new StorageFile(dag, fileName)
dag.setStorageClass(store)

// Step 3 - configure input choices and computational options
dag.configure([
  // active for this example:
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
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

// Step 4 - specify the fire behavior variables to be produced
// (See ./docs/NodeList_AlphabeticalOrder.js for complete list of 1200+ names)
dag.select([
  'surface.weighted.fire.spreadRate',
  'surface.weighted.fire.flameLength',
  'surface.weighted.fire.scorchHeight'
])

// If interested, request and display the active configuration settings
// console.log('The active configuration options are:',
//   dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

// If interested, request and display the required inputs
// console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))

// Bump up the run limit so we can stress test with a lot of inputs
dag.setRunLimit(10000000)

// Define an array of input values for each input variable
// 5 fuel models x 25 wind speeds x 20 dead moistures x 4 live moistures x 4 temperatures x 6 slopes
// yields 240,000 orthogonal input combinations, and therefore 240,000 sets of run results
const fuel = ['1', '6', '10', 'gs1', '124']
const wind = []; for (let i = 0; i < 25; i++) { wind.push(i * 88) }
const tl1h = []; for (let i = 1; i <= 20; i++) { tl1h.push(i * 0.01) }
const tl10h = [0.07]
const tl100h = [0.09]
const herb = [0.5, 1, 1.5, 2]
const stem = [1.5]
const temp = []; for (let i = 70; i <= 101; i += 10) { temp.push(i) }
const slope = []; for (let i = 0; i <= 101; i += 20) { slope.push(i) }

// Step 5 - specify the values of the required inputs
dag.input([
  ['surface.primary.fuel.model.catalogKey', fuel],
  ['site.moisture.live.herb', herb],
  ['site.moisture.dead.tl1h', tl1h],
  ['site.moisture.dead.tl10h', tl10h],
  ['site.moisture.dead.tl100h', tl100h],
  ['site.moisture.live.stem', stem],
  ['site.slope.steepness.ratio', slope],
  ['site.wind.speed.atMidflame', wind],
  ['site.temperature.air', temp]
])

// Here we go!
console.log(header('saveResultsToFile.js - fire-behavior-simulator example'))
let elapsed = Date.now() // start the elapsed timer
const results = dag.run()
elapsed = Date.now() - elapsed

const runs = results.runs
const rps = (runs / (0.001 * elapsed)).toFixed(0)
console.log(`Results were written to file '${fileName}'`)
console.log(header(`Optimized: ${runs} runs with file output required ${elapsed} ms (${rps} runs/s) ${results.message}`))
