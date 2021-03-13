/* eslint-disable no-unused-vars */
const ConfigWindSpeed = ['atMidflame', 'at20ft', 'at10m']
const ConfigWindSpeedMidflameRatio = ['input', 'estimated']
const ConfigWindSpeedCanopyLink = ['linked', 'standAlone']

export const genome = [
  ['wind.speed.configure.speed', ['ConfigWindSpeed'], [[], ['Dag.input']]],
  ['wind.speed.configure.midflame', ['ConfigWindSpeedMidflame'], [[], ['Dag.input']]],
  ['wind.speed.configure.link.canopy', ['ConfigWindSpeedCanopyLink'], [[], ['Dag.input']]],

  ['wind.speed.at10m', ['WindSpeed'], [
    [['wind.speed.configure.speed', 'at10m'], ['Dag.input']],
    [['wind.speed.configure.speed', 'at20ft'], ['WindSpeed.at10mFrom20ft', 'wind.speed.at20ft']],
    [['wind.speed.configure.speed', 'atMidflame'], ['WindSpeed.at10mFromMidflame', 'wind.speed.atMidflame']]
  ]],
  ['wind.speed.at20ft', ['WindSpeed'], [
    [['wind.speed.configure.speed', 'at10m'], ['WindSpeed.at20ftFrom10m', 'wind.speed.at10m']],
    [['wind.speed.configure.speed', 'at20ft'], ['Dag.input']],
    [['wind.speed.configure.speed', 'atMidflame'], ['WindSpeed.at20ftFromMidflame', 'wind.speed.atMidflame']]
  ]],
  ['wind.speed.atMidflame', ['WindSpeed'], [
    [['wind.speed.configure.speed', 'at10m'],
      ['WindSpeed.atMidflameFrom10m', 'wind.speed.at10m', 'wind.speed.atMidflame.adjustment']],
    [['wind.speed.configure.speed', 'at20ft'],
      ['WindSpeed.atMidflameFrom20ft', 'wind.speed.at20ft', 'wind.speed.atMidflame.adjustment']],
    [['wind.speed.configure.speed', 'atMidflame'], ['Dag.input']]
  ]],
  ['wind.speed.atMidflame.adjustment', ['WindSpeedRatio'], [
    [['wind.speed.configure.midflame', 'input'], ['Dag.input']],
    [['wind.speed.configure.midflame', 'estimated'],
      ['WindSpeed.midflameTo20ftRatio',
        'wind.speed.atMidflame.isSheltered',
        'wind.speed.atMidflame.adjustment.sheltered',
        'wind.speed.atMidflame.adjustment.unsheltered']]
  ]],
  ['wind.speed.atMidflame.isSheltered', ['FuelIsSheltered'], [
    [[], ['Canopy.sheltersFuelFromWind',
      'wind.speed.canopy.cover',
      'wind.speed.canopy.baseHeight',
      'wind.speed.canopy.totalHeight']]
  ]],
  ['wind.speed.canopy.cover', ['CanopyCoverFraction'], [
    [['wind.speed.configure.link.canopy', 'linked'], ['Dag.bind', 'canopy.cover']],
    [['wind.speed.configure.link.canopy', 'standAlone'], ['Dag.input']]
  ]],
  ['wind.speed.canopy.baseHeight', ['TreeHeight'], [
    [['wind.speed.configure.link.canopy', 'linked'], ['Dag.bind', 'canopy.baseHeight']],
    [['wind.speed.configure.link.canopy', 'standAlone'], ['Dag.input']]
  ]],
  ['wind.speed.canopy.totalHeight', ['TreeHeight'], [
    [['wind.speed.configure.link.canopy', 'linked'], ['Dag.bind', 'canopy.totalHeight']],
    [['wind.speed.configure.link.canopy', 'standAlone'], ['Dag.input']]
  ]]
]
