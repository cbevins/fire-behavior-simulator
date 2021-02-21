export const genome = [
  ['scorch.height', [['FireScorchHeight'], [
    // If stand-alone scorch height, calculate scorchHeight
    ['when', 'link.scorchHeight', 'equals', 'standAlone',
      'SurfaceFire.scorchHeight',
      'site.fire.observed.firelineIntensity',
      'site.wind.speed.atMidflame',
      'site.temperature.air'],
    // otherwise link to surfaceFire (or fireEllipse)
    ['finally', 'Dag.bind', 'surface.weighted.fire.scorchHeight']
  ]]],
  ['mortality.scorchHeight', [['FireScorchHeight'], [
    // If stand-alone treeMortality, input the observed scorch height
    ['when', 'link.treeMortality', 'equals', 'standAlone',
      'Dag.bind', 'site.fire.observed.scorchHeight'],
    // otherwise link to standAlone scorchHeight (and input flame length or firelineIntensity)
    ['finally', 'Dag.bind', 'scorch.height']
  ]]],
  ['mortality.rate', [['MortalityFraction'], [
    ['finally', 'TreeMortality.mortalityRate',
      'site.canopy.tree.species.fofem6.code',
      'site.canopy.tree.dbh',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]],
  ['mortality.crownLengthScorched', [['MortalityFraction'], [
    ['finally', 'TreeMortality.crownLengthScorched',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]],
  ['mortality.crownVolumeScorched', [['MortalityFraction'], [
    ['finally', 'TreeMortality.crownVolumeScorched',
      'site.canopy.crown.totalHeight',
      'site.canopy.crown.baseHeight',
      'mortality.scorchHeight']
  ]]]
]
