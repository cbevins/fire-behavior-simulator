/**
 * @file twoFuels example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * An example of a 2-fuel model surface fire run.
 *
 * This example is organized slightly differently from simpleSurfaceFire.js, in that:
 * - configurations, selected variables, and input values are all predefined in arrays, and
 * - these arrays are then submitted for processing to by BehavePlus
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim } from '../src/dag/index.js'
import { header } from './header.js'

// Ensure this example runs as expected with each build and release by wrapping it in a test
test('Example two fuel model run', () => {
  let str = header('twoFuels.js - fire-behavior-simulator example') + '\n'
  // Store some output node keys into more convenient variables (to save typing):
  const ros1Key = 'surface.primary.fuel.fire.spreadRate'
  const ros2Key = 'surface.secondary.fuel.fire.spreadRate'
  const rosWKey = 'surface.weighted.fire.spreadRate'
  const primaryCover = 'surface.weighted.fire.primaryCover'
  const selected = [ros1Key, ros2Key, primaryCover, rosWKey]

  // Define an array of all the DAG configurations
  const config = [
  // Most interesting options are for both primary and secondary fuel models
    ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
    ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][1]],
    ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
    // The following are less interesting for this example
    ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
    ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
    ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][2]],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
    ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
    ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
  ]

  // Define an array of all the required input values
  const input = [
    ['surface.primary.fuel.model.catalogKey', ['10']],
    ['surface.secondary.fuel.model.catalogKey', ['124']],
    ['surface.weighted.fire.primaryCover', [0.6]],
    ['site.moisture.dead.tl1h', [0.05]],
    ['site.moisture.dead.tl10h', [0.07]],
    ['site.moisture.dead.tl100h', [0.09]],
    ['site.moisture.live.herb', [0.5]],
    ['site.moisture.live.stem', [1.5]],
    ['site.slope.direction.aspect', [180]],
    ['site.slope.steepness.ratio', [0.25]],
    ['site.wind.direction.source.fromNorth', [270]],
    ['site.wind.speed.atMidflame', [880]]
  ]

  // Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Step 2 - configure input choices and computational options
  dag.configure(config)

  // Step 3 - specify the fire behavior variables to be produced
  dag.select(selected)

  // Step 4 - uncomment the following line if you need to list all the required inputs:
  // console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key))

  // Step 5 - specify the values of the required inputs
  dag.input(input).run()

  // Step 6 - one way to simply access and display results
  selected.forEach(key => {
    const node = dag.node(key)
    str += `${node.label()} = ${node.displayString()}\n`
  })
  console.log(str)

  // Note: according to BehavePlus, these inputs should produce spread rates of
  expect(dag.node(ros1Key).value()).toBeCloseTo(18.551680325)
  expect(dag.node(ros2Key).value()).toBeCloseTo(48.47042599)
})
