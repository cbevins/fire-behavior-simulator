/**
 * @file basicUsageMultipleRuns.js example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

// -----------------------------------------------------------------------------
// Step 1: import the fire-behavior-simulator package from node_modules or source folder
// import { Sim } from '@cbevins/fire-behavior-simulator'
import { Sim, StorageNodeMap, nodeTable } from '../src/index.js'

// Ensure this example runs as expected with each build and release by wrapping it in a test
test('Example basic usage with multiple runs', () => {
  // -----------------------------------------------------------------------------
  // Step 2 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
  const sim = new Sim()
  const dag = sim.createDag('BasicUsageMultipleRuns')

  // -----------------------------------------------------------------------------
  // Step 3 - create a StorageNodeMap instance to hold the run results
  const store = new StorageNodeMap(dag)
  dag.setStorageClass(store)

  // -----------------------------------------------------------------------------
  // Step 4 - select the fire behavior variables (DagNodes) of interest
  // (See ./docs/Variables.md for complete list of 1200+ names)
  const selectedNodes = [
    dag.node('surface.weighted.fire.spreadRate'), // returns a DagNode reference for 'key'
    dag.node('surface.weighted.fire.flameLength')
  ]
  dag.select(selectedNodes) // selects weighted spread rate and flame length for computation

  // -----------------------------------------------------------------------------
  // Step 5 - configure input choices and computational options

  // You can request an array of the configurations currently applicable to your selected variables:
  const activeConfigs = dag.requiredConfigNodes() // returns an array of DagNode references

  // .. and you can display them in a table to the console
  console.log(nodeTable(activeConfigs, ['index', 'key', 'nativeValue'], 'Active Configuration Nodes'))

  // For this example, we configure for the fewest number of posssible inputs:
  // a single primary fuel, dead and live category moisture contents, upslope midflame windspeed, and slope steepness
  // See ./docs/08_Configuration.md for a complete list of all configuration options
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
    ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]]
  ])

  // -----------------------------------------------------------------------------
  // Step 6 - determine the required input variables

  // You will initially need to see exactly which inputs are required
  // for your currently selected variables and confoiguration settings
  const requiredInputs = dag.requiredInputNodes() // returns an array of DagNode references

  // ... and you can display them in a table to the console:
  console.log(nodeTable(requiredInputs, ['index', 'key', 'nativeUnits'], 'Required Inputs'))

  // -----------------------------------------------------------------------------
  // Step 7 - specify the values of the required inputs and run()

  // Note that each input can have multiple values
  dag.input([
    ['surface.primary.fuel.model.catalogKey', ['10']], // 'Timber litter & understory'
    ['site.moisture.dead.category', [0.05]], // fraction of fuel ovendry weight
    ['site.moisture.live.category', [0.5]], // fraction of fuel ovendry weight
    ['site.wind.speed.atMidflame', [0, 5 * 88, 10 * 88, 15 * 88, 20 * 88]], // feet per minute (1 mph = 88 ft/min)
    ['site.slope.steepness.ratio', [0.25]] // vertical rise / horizontal reach
  ]).run()

  // -----------------------------------------------------------------------------
  // Step 8 - access and display the results from the StorageNodeMap
  // The native value is stored for each run
  let str = '    Wind      Ros   Flame\n'
  str += '    mi/h   ft/min      ft\n'
  for (let idx = 0; idx < 5; idx++) { // for each of the 5 wind speed input values
    const wind = store.get('site.wind.speed.atMidflame', idx) / 88
    const ros = store.get('surface.weighted.fire.spreadRate', idx)
    const flame = store.get('surface.weighted.fire.flameLength', idx)
    str += `${wind.toFixed(0).padStart(8, ' ')}`
    str += `${ros.toFixed(2).padStart(9, ' ')}`
    str += `${flame.toFixed(2).padStart(8, ' ')}\n`
  }
  console.log(str)

  // Ensure we get the expected results
  expect(store.get('site.wind.speed.atMidflame', 4)).toEqual(20 * 88)
  expect(store.get('surface.weighted.fire.spreadRate', 4)).toEqual(99.95180029450454)
  expect(store.get('surface.weighted.fire.flameLength', 4)).toEqual(16.105691109805242)
})
