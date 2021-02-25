/**
 * @file Spotting distance genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.terrain.spotSourceLocation', [['SpottingSourceLocationOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.terrain.ridgeValleyDistance', [['FireSpotDistance'], [
    ['finally', 'Dag.input']
  ]]],
  ['site.terrain.ridgeValleyElevation', [['FireSpreadDistance'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'site.terrain'
  ['spotting.burningPile.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.burningPile.firebrand.height',
      'site.canopy.downwind.appliedHeight'
    ]
  ]]],
  ['spotting.burningPile.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.burningPileFirebrandHeight',
      'spotting.burningPile.flameHeight'
    ]
  ]]],
  ['spotting.burningPile.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  // end 'spotting.burningPile.firebrand'
  ['spotting.burningPile.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain',
      'spotting.burningPile.firebrand.height',
      'spotting.burningPile.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft'
    ]
  ]]],
  ['spotting.burningPile.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift',
      'spotting.burningPile.spotDistance.flatTerrain',
      'spotting.burningPile.firebrand.drift'
    ]
  ]]],
  ['spotting.burningPile.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain',
      'spotting.burningPile.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation'
    ]
  ]]],
  // end 'spotting.burningPile.spotDistance'
  ['spotting.burningPile.flameHeight', [['FireFlameLength'], [
    ['finally', 'Dag.input']
  ]]],
  // end 'spotting.burningPile'
  ['spotting.crownFire.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  ['spotting.crownFire.firebrand.height', [['TreeHeight'], [
    ['finally', 'CrownSpotting.zdrop',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrift',
      'spotting.crownFire.firebrandObject']
  ]]],
  // end 'spotting.crownFire.firebrand'
  ['spotting.crownFire.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xdrop',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'CrownSpotting.xspot',
      'spotting.crownFire.firebrandObject']
  ]]],
  ['spotting.crownFire.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain',
      'spotting.crownFire.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation']
  ]]],
  // end 'spotting.crownFire.spotDistance'
  ['spotting.crownFire.firelineIntensity', [['FireFirelineIntensity'], [
    // If linked to Crown Fire, use active crown fire FLI
    ['when', 'link.crownSpot', 'equals', 'linkedToCrownFire',
      'Dag.bind', 'crown.fire.active.firelineIntensity'],
    // otherwise calculate active crown FLI from crown flame length input
    ['finally', 'CrownSpotting.firelineIntensityThomas',
      'site.fire.crown.flameLength']
  ]]],
  ['spotting.crownFire.firebrandObject', [['SpottingFirebrandObject'], [
    ['finally', 'CrownSpotting.flatDistance',
      'site.canopy.crown.totalHeight',
      'site.wind.speed.at20ft',
      'spotting.crownFire.firelineIntensity']
  ]]],
  // end 'spotting.crownFire'
  ['spotting.surfaceFire.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.surfaceFire.firebrand.height',
      'site.canopy.downwind.appliedHeight']
  ]]],
  ['spotting.surfaceFire.firelineIntensity', [['FireFirelineIntensity'], [
    ['when', 'link.surfaceSpot', 'equals', 'linkedToSurfaceFire',
      'Dag.bind', 'surface.weighted.fire.firelineIntensity'],
    ['finally', 'Dag.bind', 'site.fire.observed.firelineIntensity']
  ]]],
  ['spotting.surfaceFire.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.surfaceFireFirebrandHeight',
      'spotting.surfaceFire.firelineIntensity',
      'site.wind.speed.at20ft']
  ]]],
  ['spotting.surfaceFire.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Spotting.surfaceFireFirebrandDrift',
      'spotting.surfaceFire.firebrand.height',
      'site.wind.speed.at20ft']
  ]]],
  // end 'spotting.surfaceFire.firebrand'
  ['spotting.surfaceFire.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain',
      'spotting.surfaceFire.firebrand.height',
      'spotting.surfaceFire.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft']
  ]]],
  ['spotting.surfaceFire.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift',
      'spotting.surfaceFire.spotDistance.flatTerrain',
      'spotting.surfaceFire.firebrand.drift']
  ]]],
  ['spotting.surfaceFire.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain',
      'spotting.surfaceFire.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation']
  ]]],
  // end 'spotting.surfaceFire.spotDistance'
  // end 'spotting.surfaceFire'
  ['spotting.torchingTrees.firebrand.criticalCoverHeight', [['TreeHeight'], [
    ['finally', 'Spotting.criticalCoverHeight',
      'spotting.torchingTrees.firebrand.height',
      'site.canopy.downwind.appliedHeight']
  ]]],
  ['spotting.torchingTrees.firebrand.height', [['TreeHeight'], [
    ['finally', 'Spotting.torchingTreesFirebrandHeight',
      'spotting.torchingTrees.height',
      'spotting.torchingTrees.flameHeight',
      'spotting.torchingTrees.flameDuration']
  ]]],
  ['spotting.torchingTrees.firebrand.drift', [['FireSpotDistance'], [
    ['finally', 'Dag.fixed', 0]
  ]]],
  // end 'spotting.torchingTrees.firebrand'
  ['spotting.torchingTrees.spotDistance.flatTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrain',
      'spotting.torchingTrees.firebrand.height',
      'spotting.torchingTrees.firebrand.criticalCoverHeight',
      'site.wind.speed.at20ft'
    ]
  ]]],
  ['spotting.torchingTrees.spotDistance.flatTerrainWithDrift', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceFlatTerrainWithDrift',
      'spotting.torchingTrees.spotDistance.flatTerrain',
      'spotting.torchingTrees.firebrand.drift'
    ]
  ]]],
  ['spotting.torchingTrees.spotDistance.mountainTerrain', [['FireSpotDistance'], [
    ['finally', 'Spotting.distanceMountainTerrain',
      'spotting.torchingTrees.spotDistance.flatTerrainWithDrift',
      'site.terrain.spotSourceLocation',
      'site.terrain.ridgeValleyDistance',
      'site.terrain.ridgeValleyElevation'
    ]
  ]]],
  // end 'spotting.torchingTrees.spotDistance'
  ['spotting.torchingTrees.species', [['TorchingTreeSpeciesOption'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.height', [['TreeHeight'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.dbh', [['TreeDbh'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.count', [['TreeCount'], [
    ['finally', 'Dag.input']
  ]]],
  ['spotting.torchingTrees.flameHeight', [['FireFlameLength'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameHeight',
      'spotting.torchingTrees.species',
      'spotting.torchingTrees.dbh',
      'spotting.torchingTrees.count'
    ]
  ]]],
  ['spotting.torchingTrees.flameDuration', [['FireFlameDuration'], [
    ['finally', 'Spotting.torchingTreesSteadyFlameDuration',
      'spotting.torchingTrees.species',
      'spotting.torchingTrees.dbh',
      'spotting.torchingTrees.count'
    ]
  ]]]
  // end 'spotting.torchingTrees'
  // end 'spotting'
]
