/**
 * @file Convenience function to instantiate a new Sim and Dag pair
 * for common fire ellipse modeling use cases using StorageNodeMap.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
// NOTE: Replace import to use the '@cbevins/fire-behavior-simulator' package
import { Sim, UpdateOrthogonalStack, StorageNodeMap } from '../src/dag/index.js'

// single primary fuel type
// fuel moisture is by individual class
// cured herb fraction is estimated
// slope is ratio
// wind direction is source from north
// wind speed is entered at midflame
export const configStandardFireEllipse = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][0]],
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight']
]

// Step 3 - specify the fire behavior variables to be produced
export const selectStandardFireEllipse = [
  'surface.fire.ellipse.heading.fromNorth',
  'surface.fire.ellipse.heading.fromUpslope',
  'surface.fire.ellipse.axis.lengthToWidthRatio',
  'surface.fire.ellipse.head.firelineIntensity',
  'surface.fire.ellipse.head.flameLength',
  'surface.fire.ellipse.head.scorchHeight',
  'surface.fire.ellipse.head.spreadDistance',
  'surface.fire.ellipse.back.firelineIntensity',
  'surface.fire.ellipse.back.flameLength',
  'surface.fire.ellipse.back.scorchHeight',
  'surface.fire.ellipse.back.spreadDistance',
  'surface.fire.ellipse.flank.firelineIntensity',
  'surface.fire.ellipse.flank.flameLength',
  'surface.fire.ellipse.flank.scorchHeight',
  'surface.fire.ellipse.flank.spreadDistance'
]
const inputStandardFireEllipse = [
  ['surface.primary.fuel.model.catalogKey', ['124']],
  ['site.moisture.live.herb', [0.5]],
  ['site.moisture.dead.tl1h', [0.05]],
  ['site.moisture.dead.tl10h', [0.07]],
  ['site.moisture.dead.tl100h', [0.09]],
  ['site.moisture.live.stem', [1.5]],
  ['site.slope.direction.aspect', [180]],
  ['site.slope.steepness.ratio', [0.25]],
  ['site.wind.direction.source.fromNorth', [225]],
  ['site.wind.speed.atMidflame', [880]],
  ['site.temperature.air', [95]],
  ['site.fire.time.sinceIgnition', [60]]
]

export function createFireEllipseSim (dagKey = 'FireEllipseSim') {
  const sim = new Sim()
  const dag = sim.createDag(dagKey)
  const store = new StorageNodeMap(dag)
  const updater = new UpdateOrthogonalStack(dag)
  dag.configure(configStandardFireEllipse)
    .setUpdateClass(updater)
    .setStorageClass(store)
    .setRunLimit(1000000)

  // const inputNodes = dag.requiredInputNodes()
  // let str=''; inputNodes.forEach(n => {str += `${n.key()}\n`}); console.log(str)

  dag.select(selectStandardFireEllipse)
    .input(inputStandardFireEllipse)
    .run()
  return [sim, dag, store]
}
