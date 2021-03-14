/**
 * @file CEMML example
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * This is a prototype batch file for use by the Center for Environmental Management of Military Lands
 * at Colorado State University, Fort Collins, CO 80523-1490.
 * This increases the processing time to about 1650 milliseconds, or 145,000 runs per second
 * With Node.displayValue() formatting, its about 4500 milliseconds, or 53,000 runs per second
 */

// NOTE: Replace import to use '@cbevins/fire-behavior-simulator'
import { Sim, StorageFile } from '../src/dag/index.js'
import { header } from './header.js'

/**
 * Class wrapper for CEMML runs
 */
export class Cemml {
  constructor () {
    // Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
    this.sim = new Sim('dag1')
    this.dag = this.sim.getDag('dag1')

    // Step 2 - create a new StorageFile instance and inject it into the dag.
    this.store = new StorageFile(this.dag, 'cemmlResults.txt')
    this.dag.setStorageClass(this.store)

    // Step 3 - configure input choices and computational options
    this.dag.configure([
      // We use a single primary fuel model from the Burgan & Scott catalog
      ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
      // There is no secondary fuel model
      ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
      // Cured herb fraction is estimated from the live herb fuel moisture
      ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
      // Because these are primarily grass fuels, fuel moistures are entered by category
      ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
      // Slope steepness will be entered as vertical rise / horizontal reach
      ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
      // Wind direction is assumed to be upslope (so no need to enter wind source or aspect)
      ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
      // CEMML preferes to enter wind speed at 20-ft
      ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][1]],
      // Follow Pat Andrews' (2020) recommendation to remove limit spread rate
      ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][1]],
      // Prefer to estimate the wind reduction factor
      ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][1]],

      // The following configuration options are not active for this run,
      // but are included here for reference/completeness

      // If not linked to a surface fire, prefder to input fireline intensity or flame length?
      ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
      // If not linked to a surface fire, prefder to input length-to-width ratio or effective wind speed?
      ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
      // If two-fuel models are entered, which weighting method should be applied?
      ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
      // If requesting fire behavior in a specific direction, it is with respect to:
      ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
      // If performing chaparral fuel modeling, prefer to enter or estimate total fuel load?
      ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]]
    ])

    // Step 4 - specify the fire behavior variables to be produced
    // (See ./docs/NodeList_AlphabeticalOrder.js for complete list of 1200+ names)
    this.dag.select([
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.flameLength',
      'surface.fire.ellipse.size.area',
      'surface.fire.ellipse.size.perimeter',
      'surface.fire.ellipse.wind.speed.atMidflame',
      'surface.primary.fuel.fire.windSpeedAdjustmentFactor',
      // crown fire
      'crown.fire.active.firelineIntensity',
      'crown.fire.active.flameLength',
      'crown.fire.active.spreadRate',
      'crown.fire.initiation.type'
    ])

    // If interested, uncomment the following statement to request and display the active configuration settings
    // console.log('The active configuration options are:',
    // this.dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

    // Define the input values:
    // Some possible fuel models appropriate to dry climate grass, grass-shrub, grass-timber
    // Please see Scott & Burgan for full list and key
    // gr1: 'Short, sparse, dry climate grass'
    // gr2: 'Low load, dry climate grass'
    // gr4: 'Moderate load, dry climate grass'
    // gr7: 'High load, dry climate grass'
    // gs1: 'Low load, dry climate grass-shrub'
    // gs2: 'Moderate load, dry climate grass-shrub'
    // sh1: 'Low load, dry climate shrub'
    // sh2: Moderate load, dry climate shrub'
    // sh5: 'High load, dry climate shrub'
    // sh7:  'Very high load, dry climate shrub'
    // tu1: 'Light load, dry climate timber-grass-shrub'
    // tu5: 'Very high load, dry climate timber-shrub'
    const fuel = ['gr1', 'gs1', 'sh1', 'tu1']
    // Wind at 20-ft
    const windAt20Ft = []
    for (let i = 0; i < 21; i += 5) { windAt20Ft.push(i * 88) } // 88 converts mph to fpm
    // Dead fuel moisture content
    const moisDead = []
    for (let i = 1; i <= 20; i++) { moisDead.push(i * 0.01) }
    // Live fuel moisture content
    const moisLive = [0.5, 1, 1.5, 2]
    // Slope steepness ratio
    const slopeSteepness = [0, 0.25, 0.5, 0.75, 1, 2]
    // Canopy
    const canopyBaseHt = [0]
    const canopyBulk = [0.01] // only required if selecting crown fire outputs
    const canopyTotalHt = [0]
    const canopyCover = [0]
    const canopyFoliarMoist = [1]
    // Elapsed time since since ignition
    const timeSinceIgnition = [60]

    // Bump up the run limit so we can stress test with a lot of inputs
    this.dag.setRunLimit(10000000)

    // Step 5 - run all the inputs
    this.dag.input([
      ['site.moisture.live.category', moisLive],
      ['surface.primary.fuel.model.catalogKey', fuel],
      ['site.moisture.dead.category', moisDead],
      ['site.canopy.crown.baseHeight', canopyBaseHt],
      ['site.canopy.crown.totalHeight', canopyTotalHt],
      ['site.canopy.cover', canopyCover],
      ['site.slope.steepness.ratio', slopeSteepness],
      ['site.wind.speed.at20ft', windAt20Ft],
      ['site.canopy.fuel.bulkDensity', canopyBulk], // only used if selecting crown fire outputs
      ['site.canopy.fuel.foliar.moistureContent', canopyFoliarMoist], // only used if selecting crown fire outputs
      ['site.fire.time.sinceIgnition', timeSinceIgnition] // only used if selecting fire area or perimeter outputs
    ])
  }

  run () {
    // Here we go!
    const elapsed = Date.now() // start the elapsed timer
    const results = this.dag.run()
    results.elapsed = Date.now() - elapsed
    return results
  }

  // Document the file fields
  documentOutputFile () {
    let str = 'Output file fields are:\n'
    let n = 1
    this.store._nodeArray.forEach(node => {
      str += `${n++}: ${node.key()} (${node.displayUnits()})\n`
    })
    return str
  }

  showInputs () {
    let str = 'Required inputs are:\n'
    this.dag.requiredInputNodes().forEach(node => { str += `${node.key()}\n` })
    return str
  }
}

console.log(header('cemml.js - fire-behavior-simulator example'))
const cemml = new Cemml()
console.log(cemml.showInputs())
const results = cemml.run()
console.log(cemml.documentOutputFile())

const rps = (results.runs / (0.001 * results.elapsed)).toFixed(0)
console.log(header(`${results.runs} runs required ${results.elapsed} ms (${rps} runs/sec): ${results.message}`))
