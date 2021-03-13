import { Sim } from '../index.js'
import * as Pathways from './DagPathways.js'
// import * as DagJest from '../utils/matchers.js'

const sim = new Sim('dag1')
const dag = sim.getDag('dag1')

dag.configure([
  ['link.crownFire', 'linkedToSurfaceFire'],
  ['link.crownSpot', 'linkedToCrownFire'],
  ['link.fireContain', 'linkedToFireEllipse'],
  ['link.fireEllipse', 'linkedToSurfaceFire'],
  ['link.scorchHeight', 'linkedToSurfaceFire'],
  ['link.surfaceSpot', 'linkedToSurfaceFire'],
  ['link.treeMortality', 'linkedToScorchHeight']
])
dag.select([
  // 'surface.primary.fuel.model.behave.parms.depth',
  'surface.weighted.fire.spreadRate',
  'surface.weighted.fire.firelineIntensity',
  'surface.weighted.fire.reactionIntensity',
  'surface.fire.ellipse.head.spreadRate',
  'surface.fire.ellipse.head.scorchHeight',
  // 'spotting.torchingTrees.spotDistance.mountainTerrain',
  'spotting.torchingTrees.firebrand.criticalCoverHeight']).run()

test('1: Pathways should detect two paths', () => {
  const keyMap = Pathways.keyMap(dag)
  expect(keyMap.size).toEqual(2)

  expect(keyMap.has('surface.weighted.fire.spreadRate')).toEqual(true)
  const path1 = keyMap.get('surface.weighted.fire.spreadRate')
  expect(path1.selected).toHaveLength(5)
  expect(path1.selected).toContain('surface.weighted.fire.spreadRate')
  expect(path1.selected).toContain('surface.weighted.fire.firelineIntensity')
  expect(path1.selected).toContain('surface.weighted.fire.reactionIntensity')
  expect(path1.selected).toContain('surface.fire.ellipse.head.spreadRate')
  expect(path1.selected).toContain('surface.fire.ellipse.head.scorchHeight')
  // expect(path1.producers.length).toEqual(325)
  expect(path1.producers).toHaveLength(247)
  expect(path1.producers).toContain('surface.primary.fuel.model.catalogKey') // 0
  expect(path1.producers).toContain('surface.primary.fuel.bed.dead.particle.class1.effectiveFuel.ovendryLoad') // 100
  expect(path1.producers).toContain('surface.primary.fuel.bed.dead.particle.class5.heatOfCombustion') // 200
  expect(path1.producers).toContain('surface.primary.fuel.fire.reactionIntensity') // 300

  expect(keyMap.has('spotting.torchingTrees.firebrand.criticalCoverHeight')).toEqual(true)
  const path2 = keyMap.get('spotting.torchingTrees.firebrand.criticalCoverHeight')
  expect(path2.selected).toHaveLength(1)
  expect(path2.selected).toContain('spotting.torchingTrees.firebrand.criticalCoverHeight')
  expect(path2.producers).toHaveLength(11)
  expect(path2.producers).toContain('spotting.torchingTrees.species')
  expect(path2.producers).toContain('spotting.torchingTrees.dbh')
  expect(path2.producers).toContain('spotting.torchingTrees.count')
  expect(path2.producers).toContain('spotting.torchingTrees.flameHeight')
  expect(path2.producers).toContain('spotting.torchingTrees.flameDuration')
  expect(path2.producers).toContain('site.canopy.downwind.height')
  expect(path2.producers).toContain('site.canopy.downwind.isOpen')
  expect(path2.producers).toContain('spotting.torchingTrees.height')
  expect(path2.producers).toContain('site.canopy.downwind.appliedHeight')
  expect(path2.producers).toContain('spotting.torchingTrees.firebrand.height')
  expect(path2.producers).toContain('spotting.torchingTrees.firebrand.criticalCoverHeight')
})
