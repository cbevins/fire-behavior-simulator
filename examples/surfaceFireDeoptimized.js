/**
 * @file surfaceFireDeoptimized.js example and performance
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * surfaceFireDeoptimized.js
 *
 * This example manually runs each of the surfaceFireOptimized.js input cases,
 * but in the reverse order than behaveplus-radical would otherwise perform.
 *
 * On my old laptop, the performance difference over 240,000 runs is
 * - optimized: about 850 milliseconds, or 280,000 runs per second.
 * - deoptimized: about 34440 milliseconds, or 7400 runs per second.
 *
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim } from '../src/dag/index.js'
import { header } from './header.js'

console.log(header('surfaceFireDeoptimized - fire-behavior-simulator example'))
// Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
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

// Step 3 - specify the fire behavior variables to be produced
// (See ./utils/BehavePlusAlphabeticalOrder.js for complete list of 1200+ names)
dag.select([
  'surface.weighted.fire.spreadRate',
  'surface.weighted.fire.flameLength',
  'surface.weighted.fire.scorchHeight'
])

// If interested, request and display the active configuration settings
console.log('The active configuration options are:',
  dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

// Step 4 - if interested, request and display the required inputs
console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))
console.log('This may require 30-60 seconds for all runs to complete...\n')

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

// We will forcibly run these in the reverse order than the optimized version
let elapsed = Date.now() // start the elapsed timer
let runs = 0
temp.forEach(t => {
  wind.forEach(w => {
    slope.forEach(s => {
      stem.forEach(ms => {
        tl100h.forEach(m100 => {
          tl10h.forEach(m10 => {
            tl1h.forEach(m1 => {
              herb.forEach(mh => {
                fuel.forEach(f => {
                  runs += 1
                  dag.input([
                    ['surface.primary.fuel.model.catalogKey', [f]],
                    ['site.moisture.live.herb', [mh]],
                    ['site.moisture.dead.tl1h', [m1]],
                    ['site.moisture.dead.tl10h', [m10]],
                    ['site.moisture.dead.tl100h', [m100]],
                    ['site.moisture.live.stem', [ms]],
                    ['site.slope.steepness.ratio', [s]],
                    ['site.wind.speed.atMidflame', [w]],
                    ['site.temperature.air', [t]]
                  ]).run()
                })
              })
            })
          })
        })
      })
    })
  })
})
elapsed = Date.now() - elapsed
let rps = (runs / (0.001 * elapsed)).toFixed(0)
console.log(header(`Reverse optimized: ${runs} runs required ${elapsed} ms (${rps} runs/s)`))
