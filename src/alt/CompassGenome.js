/* eslint-disable no-unused-vars */
const ConfigDirectionBasis = ['fromNorth', 'fromUpslope', 'alwaysUpslope']
const ConfigDirectionEllipseVector = ['fromFireHead', 'fromUpslope', 'fromNorth']
const ConfigDirectionFireLink = ['standAlone', 'linkToSurface']
const ConfigDirectionSlope = ['aspect', 'upslope']

/*
  direction.fire.heading.fromNorth
  direction.fire.heading.fromUpslope

  direction.slope.aspect.fromNorth
  direction.slope.aspect.fromNUpslope

  direction.wind.heading.fromUpslope
  direction.wind.source.fromNorth
  direction.wind.source.fromUpslope (never input)
  direction.wind.heading.fromNorth (never input)

  node = ['node.key', ['VariantKey'], [<producers>]]
  producers = [[<condition>],[producer]]
  condition = [<node.key>, <node.value>]
  producer =  ['Dag.input']
              ['Dag.bind', '<bound.node.key']
              ['Dag.fixed', value]
              [<method.key>, ...<args>]
  NOTE: If condition===[] (is empty) it is selected
  NOTE: If no conditions are matched, the producer is Dag.input()
*/

export const directionFireHeadingGenome = [
  ['direction.fire.heading.fromUpslope', ['CompassAzimuth'], [
    [['direction.configure.fire.link', 'linkToSurface'],
      ['Dag.bind', 'surface.fire.weighted.heading.fromUpslope']],
    [['direction.configure.fire.link', 'standAlone'], ['Dag.input']]
  ]],

  ['direction.fire.heading.fromNorth', ['CompassAzimuth'], [
    [[], ['Compass.sum',
      'direction.slope.upslope.fronNorth',
      'direction.fire.heading.fromUpslope']]
  ]]
]

export const genome = [
  ['direction.configure.basis', ['ConfigDirectionBasis'], [[], ['Dag.input']]],
  ['direction.configure.slope', ['ConfigDirectionSlope'], [[], ['Dag.input']]],
  ['direction.configure.vector', ['ConfigDirectionVector'], [[], ['Dag.input']]],

  ['direction.fire.heading.fromNorth', ['CompassAzimuth'], []],
  ['direction.fire.heading.fromUpslope', ['CompassAzimuth'], []],

  ['direction.slope.aspect.fromNorth', ['CompassAzimuth'], [ // slope basis is always fromNorth
    [['direction.configure.basis', 'alwaysUpslope'],
      ['Dag.fixed', 180]],
    [['direction.configure.slope', 'upslope'],
      ['Compass.opposite', 'direction.slope.upslope.fromNorth']],
    [['direction.configure.slope', 'aspect'],
      ['Dag.input']]
  ]],

  ['direction.slope.upslope.fromNorth', ['CompassAzimuth'], [ // slope basis is always fromNorth
    [['direction.configure.basis', 'alwaysUpslope'],
      ['Dag.fixed', 0]],
    [['direction.configure.slope', 'aspect'],
      ['Compass.opposite', 'direction.slope.aspect.fromNorth']],
    [['direction.configure.slope', 'upslope'],
      ['Dag.input']]
  ]],

  // only input if basis is fromUpslope
  ['direction.wind.heading.fromUpslope', ['CompassAzimuth'], [
    [['direction.configure.basis', 'alwaysUpslope'],
      ['Dag.fixed', 0]],
    [['direction.configure.basis', 'fromNorth'],
      ['Compass.windHeadingFromUpslope',
        'direction.slope.upslope.fromNorth',
        'direction.wind.source.fromNorth']],
    [['direction.configure.basis', 'fromUpslope'], ['Dag.input']]
  ]],

  // only input if basis if fromNorth
  ['direction.wind.source.fromNorth', ['CompassAzimuth'], [
    [['direction.configure.basis', 'fromUpslope'],
      ['Compass.windSourcefromNorth',
        'direction.slope.upslope.fromNorth',
        'direction.wind.heading.fromUpslope']],
    [['direction.configure.basis', 'fromNorth'],
      ['Dag.input']]
  ]],

  // never input
  ['direction.wind.source.fromUpslope', ['CompassAzimuth'], [
    [[], ['Compass.opposite', 'direction.wind.heading.fromUpslope']]
  ]],

  // never input
  ['direction.wind.heading.fromNorth', ['CompassAzimuth'], [
    [[], ['Compass.opposite', 'direction.wind.source.fromUpslope']]
  ]],

  ['direction.ellipse.vector.fromHead', [['CompassAzimuth'], [
    [['direction.configure.vector', 'fromHead'], ['Dag.input']],
    [['direction.configure.vector', 'fromUpslope'],
      ['Compass.diff',
        'direction.ellipse.vector.fromUpslope',
        'direction.fire..heading.fromUpslope']],
    [['direction.configure.vector', 'fromNorth'],
      ['Compass.diff',
        'direction.ellipse.vector.fromNorth',
        'direction.fire.heading.fromNorth']]
  ]]],
  ['direction.ellipse.vector.fromNorth', [['CompassAzimuth'], [
    [['direction.configure.vector', 'fromNorth'], ['Dag.input']],
    [['direction.configure.vector', 'fromHead'],
      ['Compass.sum',
        'direction.ellipse.vector.fromHead',
        'direction.fire.heading.fromNorth']],
    [['direction.configure.vector', 'fromUpslope'],
      ['Compass.sum',
        'direction.ellipse.vector.fromUpslope',
        'direction.slope.upslope']]
  ]]],

  ['direction.ellipse.vector.fromUpslope', [['CompassAzimuth'], [
    [['direction.configure.vector', 'fromUpslope'], ['Dag.input']],
    [['direction.configure.vector', 'fromHead'],
      ['Compass.sum',
        'direction.ellipse.vector.fromHead',
        'direction.fire.heading.fromUpslope']],
    [['direction.configure.vector', 'fromNorth'],
      ['Compass.diff',
        'direction.ellipse.vector.fromNorth',
        'direction.slope.upslope.fromNorth']]
  ]]]
]
