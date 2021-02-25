/**
 * Example use of fire-behavior-simulator to create a simple specialized fire behavior class.
 *
 * From the main project folder:
 * > node ./src/examples/behaveplus.js
 *
 * From the project/src folder:
 * > node ./examples/behaveplus.js
 *
 * From the project/src/examples folder:
 * > node behaveplus.js
 */
import { Sim, StorageAbstract } from '../dag/index.js'

// Step 1 - create a fire behavior simulator with 1 directed acyclical graph (DAG)

// Define a simple BehavePlus runner class
export class BehavePlus {
  constructor () {
    // Create a BehavePlus directed acyclical graph (DAG)
    this.sim = new Sim('dag1')
    this.dag = this.sim.getDag('dag1')

    // Select some outputs
    this.dag.select([
      'surface.weighted.fire.firelineIntensity',
      'surface.weighted.fire.flameLength',
      'surface.weighted.fire.heading.fromNorth',
      'surface.weighted.fire.heading.fromUpslope',
      'surface.weighted.fire.heatPerUnitArea',
      'surface.weighted.fire.lengthToWidthRatio',
      'surface.weighted.fire.reactionIntensity',
      'surface.weighted.fire.scorchHeight',
      'surface.weighted.fire.spreadRate'
    ])

    // Set the DAG configurations
    this.dag.configure([
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
      ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
      ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]]
    ])

    // Get (and maybe display) the required inputs for the selected outputs and configuration
    this.inputs = this.dag.requiredInputNodes()

    // Set the input values
    this.fuelModel = '10'
    this.fm1 = 0.05
    this.fm10 = 0.07
    this.fm100 = 0.09
    this.fmHerb = 0.5
    this.fmStem = 1.5
    this.windSpeed = 10
    this.windSource = 270
    this.slopeRatio = 0.2
    this.aspect = 225
    this.airTemp = 95

    // Make an initial run
    this.run()
  }

  // Generates the selected outputs from the current input vlaues
  run () {
    this.dag.input([
      ['surface.primary.fuel.model.catalogKey', [this.fuelModel]],
      ['site.moisture.live.herb', [this.fmHerb]],
      ['site.moisture.dead.tl10h', [this.fm10]],
      ['site.moisture.dead.tl100h', [this.fm100]],
      ['site.moisture.live.stem', [this.fmStem]],
      ['site.slope.steepness.ratio', [this.slopeRatio]],
      ['site.moisture.dead.tl1h', [this.fm1]],
      ['site.slope.direction.aspect', [this.aspect]],
      ['site.wind.direction.source.fromNorth', [this.windSource]],
      ['site.wind.speed.atMidflame', [88 * this.windSpeed]],
      ['site.temperature.air', [this.airTemp]]
    ]).run()

    // Store the generated output values
    this.firelineIntensity = this.dag.get('surface.weighted.fire.firelineIntensity').value()
    this.flameLength = this.dag.get('surface.weighted.fire.flameLength').value()
    this.fireHeadingFromNorth = this.dag.get('surface.weighted.fire.heading.fromNorth').value()
    this.fireHeadingFromUpslope = this.dag.get('surface.weighted.fire.heading.fromUpslope').value()
    this.heatPerUnitArea = this.dag.get('surface.weighted.fire.heatPerUnitArea').value()
    this.lengthToWidthRatio = this.dag.get('surface.weighted.fire.lengthToWidthRatio').value()
    this.reactionIntensity = this.dag.get('surface.weighted.fire.reactionIntensity').value()
    this.scorchHeight = this.dag.get('surface.weighted.fire.scorchHeight').value()
    this.spreadRate = this.dag.get('surface.weighted.fire.spreadRate').value()
  }
}

// Use our new fire behavior class
const bp = new BehavePlus()
console.log('Wind Speed is 10 mph:')
console.log(`spreadRate = ${bp.spreadRate}`)
console.log(`flameLength = ${bp.flameLength}`)
console.log(`fireHeadingFromUpslope = ${bp.fireHeadingFromUpslope}`)
console.log(`fireHeadingFromNorth = ${bp.fireHeadingFromNorth}`)

bp.windSpeed = 20
bp.run()
console.log('Wind Speed is 20 mph:')
console.log(`spreadRate = ${bp.spreadRate}`)
console.log(`flameLength = ${bp.flameLength}`)
console.log(`fireHeadingFromUpslope = ${bp.fireHeadingFromUpslope}`)
console.log(`fireHeadingFromNorth = ${bp.fireHeadingFromNorth}`)
