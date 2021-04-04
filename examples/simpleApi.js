/**
 * @file simpleApi.js example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * An example of a simple surface fire API.
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim } from '../src/index.js'
import { header } from './header.js'

class SimpleSurface {
  constructor() {
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
      ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]]
    ])

    // Step 3 - specify the fire behavior variables to be produced
    // (See ./docs/Variables.md for complete list of 1200+ names)
    const selected = [
      'surface.weighted.fire.spreadRate',
      'surface.weighted.fire.flameLength'
    ]
    dag.select(selected)

    // If interested, request and display the active configuration settings
    // console.log('The active configuration options are:',
    //  dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

    // Step 4 - request and display the required inputs
    // console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))
  }

  run() {
    const surface = {
      fuel: {
        model: '10' // fuel model key
      },
      moisture: {
        dead: {
          category: 5, // dead category fuel moisture (%)
        },
        live: {
          category: 50, // live category fuel moisture (%)
        }
      },
      wind: {
        speed: {
          atMidflame: 10 // wind speed at midflame height (mi/h)
        },
      },
      slope: {
        steepness: {
          ratio: 25 // slope rise / reach (%)
        },
      },
      time: {
        sinceIgnition: 60
      }
    }
    // Step 5 - specify the values of the required inputs and run()
    // Note that each input can have multiple vlaues
    dag.input([
    ['surface.primary.fuel.model.catalogKey', [surface.fuel.model]],
    ['site.moisture.dead.category', [0.01 * surface.moisture.dead.category]],
    ['site.moisture.live.category', [0.01 * surface.moisture.live.category]],
    ['site.wind.speed.atMidflame', [88 * surface.wind.speed.atMidflame]],
    ['site.slope.steepness.ratio', [0.01 * surface.slope.steepness.ratio]]
  ]).run()

  let str = header('simpleSurfaceFire.js - fire-behavior-simulator example') + '\n'
  // Step 6 - access and display the results
  selected.forEach(key => {
    const node = dag.get(key)
    str += `${node.label()} = ${node.displayString()}\n`
  })
  console.log(str)

  // Ensure we get the expected results
  expect(dag.node('surface.weighted.fire.spreadRate').value()).toEqual(38.894889923053256)
  expect(dag.node('surface.weighted.fire.flameLength').value()).toEqual(10.43340945465685)
})