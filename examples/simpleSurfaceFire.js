/**
 * @file simpleSurfaceFire.js example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * An example of a simple, yet complete, behaveplus-radical surface fire behavior run.
 *
 * This example estimates maximum fire spread rate and flame length
 * using the fewest number of inputs.  It demonstrates how to:
 * - create the BehavePlus directed acyclical graph;
 * - configure and display the available computational and input options;
 * - select the fire behavior variables to be produced;
 * - determine which inputs are required
 * - set input variable values; and
 * - access and display the results.
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim } from '../src/dag/index.js'
import { header } from './header.js'

// Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

// Step 2 - configure input choices and computational options
// For this example, we configure for the fewest number of posssible inputs:
// a single primary fuel, dead and live category moisture contents, upslope midflame windspeed, and slope steepness
dag.configure([
  // The primary fuel is specified by a fuel model catalog key
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  // There are no secondary fuels
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  // Fuel moistures are entered by dead and live category
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
  // Cured herb fraction is estimated from herb moisture, rather than directly input
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  // Wind speed is at midflame height
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  // Wind direction is assumed to be upslope
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  // Slope steepness is entered as the ratio of vertical rise / horizontal reach
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  // The following is mute since midflame windspeed is being entered directly
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  // The folloiwng is mute since we are using the fuel catalog (and not directly entering chaparral fuels)
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  // The following is mute since there is no secondary fuel type
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
])

// Step 3 - specify the fire behavior variables to be produced
// (See ./src/docs/NodeList_AlphabeticalOrder.js for complete list of 1200+ names)
const selected = [
  'surface.weighted.fire.spreadRate',
  'surface.weighted.fire.flameLength'
]
dag.select(selected)

// If interested, request and display the active configuration settings
console.log('The active configuration options are:',
  dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

// Step 4 - request and display the required inputs
console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))

// Step 5 - specify the values of the required inputs and run()
// Note that each input can have multiple vlaues
dag.input([
  ['surface.primary.fuel.model.catalogKey', ['10']],
  ['site.moisture.dead.category', [0.05]],  // fraction of fuel ovendry weight
  ['site.moisture.live.category', [0.5]],  // fraction of fuel ovendry weight
  ['site.wind.speed.atMidflame', [10*88]], // feet per minute (1 mpg = 88 ft/min)
  ['site.slope.steepness.ratio', [0.25]], // vertical rise / horizontal reach
]).run()

console.log(header('simpleSurfaceFire.js - fire-behavior-simulator example'))
// Step 6 - access and display the results
selected.forEach(key => {
  const node = dag.get(key)
  console.log(node.label(), '=', node.displayString())
})
