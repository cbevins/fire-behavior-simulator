/**
 * This is a prototype batch file for use by the Center for Environmental Management of Military Lands
 * at Colorado State University, Fort Collins, CO 80523-1490.
 * This increases the processing time to about 1650 milliseconds, or 145,000 runs per second
 * With Node.displayValue() formatting, its about 4500 milliseconds, or 53,000 runs per second
 */
import * as fs from 'fs'
import { Sim, StorageAbstract } from '../dag/index.js'

// Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)
const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

// Step 2 - create a StorageFile class to write run results to a file
// At the end of every run, fire-behavior-simulator calls the store() method
// of a class derived from StorageAbstract.
// The internal default simply stores the results in memory for each variable.
// Here, though, we define a new storage class that will write results to a file
// See Step 2b, where the DAG is instructed to use this as the storage function
class StorageFile extends StorageAbstract {
  constructor(dag, fileName) {
    super(dag)
    this._fileName = fileName
    this._nodeArray = [] // Array of references to all DagNodes to be saved
    this._writer = null
  }
  init() {
    this._nodeArray = [...this._dag.requiredInputNodes(), ...this._dag.selectedNodes()]
    this._writer = fs.createWriteStream(this._fileName, {flags: 'w'})
      .on('error', function (err) { console.log('Received error:', err) })
  }
  store () {
    // Collect the input and output values for this run;
    // either unformatted (node.value()) or formatted (node.displayValue()) values
    const fields = []
    this._nodeArray.forEach(node => { fields.push(node.displayValue()) })
    // Write them in comma-delimited format to the fileName
    this._writer.write(fields.join(', ')+'\n')
  }
  end () {
    this._writer.end()
  }
}

// Step 2b - create a new StorageFile instance and inject it into the dag.
const store = new StorageFile(dag, 'cemmlResults.txt')
dag.setStorageClass(store)

// Step 3 - configure input choices and computational options
dag.configure([
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
dag.select([
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
//   dag.requiredConfigNodes().map(node => `${node.key()} = '${node.value()}'`))

// Step 5 - if interested, request and display the required inputs
console.log('Required inputs are:', dag.requiredInputNodes().map(node => node.key()))

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
for (let i = 0; i < 21;  i+=5) { windAt20Ft.push(i * 88) } // 88 converts mph to fpm
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
dag.setRunLimit(10000000)

// Step 5 - run all the inputs
dag.input([
  ['site.moisture.live.category', moisLive],
  ['surface.primary.fuel.model.catalogKey', fuel],
  ['site.moisture.dead.category', moisDead],
  ['site.canopy.crown.baseHeight', canopyBaseHt],
  ['site.canopy.crown.totalHeight', canopyTotalHt],
  ['site.canopy.cover', canopyCover],
  ['site.slope.steepness.ratio', slopeSteepness],
  ['site.wind.speed.at20ft', windAt20Ft],
  ['site.canopy.fuel.bulkDensity', canopyBulk], // only used if selecting crown fire outputs
  ['site.canopy.fuel.foliar.moistureContent', canopyFoliarMoist],  // only used if selecting crown fire outputs
  ['site.fire.time.sinceIgnition', timeSinceIgnition], // only used if selecting fire area or perimeter outputs
])

// Here we go!
let elapsed = Date.now() // start the elapsed timer
const results = dag.run()
elapsed = Date.now() - elapsed

const runs = results.runs
let rps = (runs / (0.001 * elapsed)).toFixed(0)
console.log(`CEMML: ${runs} runs required ${elapsed} ms (${rps} runs/s): ${results.message}`)

// Document the file fields
let str = 'Output file fields are:\n'
let n = 1
store._nodeArray.forEach(node => {
  str += `${n++}: ${node.key()} (${node.displayUnits()})\n`
})
console.log(str)
