const ConfigCanopyHeights = ['baseTotal', 'ratioTotal']

export const genome = [
  ['canopy.configure.heights', ['ConfigCanopyHeights'], [[], 'Dag.input']],

  ['canopy.cover', ['CanopyCoverFraction'], [
    [], ['Dag.input']
  ]],
  ['canopy.baseHeight', ['TreeHeight'], [
    [['canopy.configure.heights', 'ratioTotal'],
      ['Canopy.baseHeight', 'canopy.totalHeight', 'canopy.crown.ratio']],
    [['canopy.configure.heights', 'baseTotal'], [[], 'Dag.input']]
  ]],
  ['canopy.crownRatio', ['CrownRatio'], [
    [['canopy.configure.heights', 'baseTotal'],
      ['Canopy.crownRatio', 'canopy.baseHeight', 'canopy.totalHeight']],
    [['canopy.configure.heights', 'ratioTotal'], [[], 'Dag.input']]
  ]],
  ['canopy.totalHeight', ['TreeHeight'], [
    [], ['Dag.input']
  ]],
]
