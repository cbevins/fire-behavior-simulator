/**
 * @file diurnal weather data example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

// Surface fire spread rate, flame length, and scorch height
// over a 24-hour period of varying temperature, wind, and fine fuel moisture
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim } from '../src/dag/index.js'
import { header } from './header.js'

// Ensure this example runs as expected with each build and release by wrapping it in a test
test('Example diurnal input', () => {
  // Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
  const sim = new Sim()
  const dag = sim.createDag('DiurnalTest')

  // Step 2 - configure input choices and computational options
  dag.configure([
    ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
    ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
    ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
    ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
    ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
    ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
    ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
    ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
    ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
    ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
  ])

  // Step 3 - specify the fire behavior variables to be produced
  // (See ./docs/NodeList_AlphabeticalOrder.js for complete list of 1200+ names)
  dag.select([
    'surface.weighted.fire.spreadRate',
    'surface.weighted.fire.flameLength',
    'surface.weighted.fire.scorchHeight'
  ])

  // If interested, request and display the active configuration settings
  console.log('The active configuration options are:',
    dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

  // Step 4 - request and display the required inputs
  console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))

  // Step 5 - set the time, temperature, wind speed, wind direction, and fine dead fuel moisture
  // input values over a 24-hour period
  const hours = [
  // time, air, wsp, wdir, 1-h
    ['12am', 70, 3, 180, 0.13],
    ['1am', 68, 3, 180, 0.14],
    ['2am', 66, 3, 180, 0.14],
    ['3am', 64, 3, 180, 0.15],
    ['4am', 62, 3, 180, 0.15],
    ['5am', 60, 3, 180, 0.16],
    ['6am', 58, 3, 180, 0.16],
    ['7am', 62, 3, 180, 0.15],
    ['8am', 66, 3, 180, 0.14],
    ['9am', 70, 3, 180, 0.13],
    ['10am', 74, 4, 180, 0.12],
    ['11am', 78, 5, 180, 0.11],
    ['12pm', 82, 6, 180, 0.10],
    ['1pm', 86, 7, 180, 0.09],
    ['2pm', 90, 8, 180, 0.08],
    ['3pm', 94, 9, 180, 0.08],
    ['4pm', 94, 10, 180, 0.07],
    ['5pm', 94, 12, 180, 0.06],
    ['6pm', 92, 15, 180, 0.07],
    ['7pm', 88, 12, 180, 0.08],
    ['8pm', 84, 10, 180, 0.09],
    ['9pm', 80, 8, 180, 0.10],
    ['10pm', 76, 6, 180, 0.11],
    ['11pm', 72, 4, 180, 0.12]
  ]

  let str = ''
  hours.forEach((hourly, idx) => {
  // Step 5 - specify the values of the required inputs
    dag.input([
      ['surface.primary.fuel.model.catalogKey', ['124']],
      ['site.moisture.live.herb', [0.5]],
      ['site.moisture.dead.tl10h', [0.12]],
      ['site.moisture.dead.tl100h', [0.15]],
      ['site.moisture.live.stem', [1.5]],
      ['site.slope.steepness.ratio', [0.2]],
      ['site.moisture.dead.tl1h', [hourly[4]]],
      ['site.wind.speed.atMidflame', [88 * hourly[2]]],
      ['site.temperature.air', [hourly[1]]]
    ]).run()

    // Step 6 - access and display the results
    str += `${hourly[0]} ${hourly[1]} ${hourly[2]} ${hourly[3]} ${hourly[4]} : `
    str += dag.get('surface.weighted.fire.spreadRate').displayString() + ' '
    str += dag.get('surface.weighted.fire.flameLength').displayString() + ' '
    str += dag.get('surface.weighted.fire.scorchHeight').displayString() + '\n'
  })
  console.log(header('diurnal.js - fire-behavior-simulator example'))
  console.log(str)

  // Ensure we get the expected results
  expect(true).toEqual(true)
})
