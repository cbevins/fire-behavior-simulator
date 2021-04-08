#  ![](favicon.png) 8 Configuration

| Prev: [07 Live Web Browser Examples](./07_LiveWebBrowserExamples.md) | Next: [09 Modules and Linkages](./09_ModuleLinkages.md) | [Table of Contents](../README.md) |

---
<a id='top'></a>

## ![](favicon.png) Contents

- [**Dag.configure()**](#dag-configure)
- [**Configuration Variables**](#configure-variables)
- [**Module Linkage Variables**](#module-linkage-variables)

---
<a id='dag-configure'></a>

## ![](favicon.png) Dag.configure()

[Back to Top](#top)

The **Dag.configure()** method is used to *configure* the directed acyclical graph; that is, to change the method or equation associated with one or more the edges of the graph.

The following code demonstrates the verbose way of invoking Dag.configure(); all allowable options are listed in an array for documentary purposes, and one of the array elements is selected by the treiling index:

```js
dag.configure([
  // The primary fuel is specified by a fuel model catalog key
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  // There are no secondary fuels
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  // Fuel moistures are entered by dead and live category
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
  // Cured herb fraction is estimated from herb moisture, rather than directly input
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  // Wind speed is at midflame height
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  // Wind direction is assumed to be upslope
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
  // Slope steepness is entered as the ratio of vertical rise / horizontal reach
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  // The following is mute since midflame windspeed is being entered directly
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
  // The folloiwng is mute since we are using the fuel catalog (and not directly entering chaparral fuels)
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  // The following is mute since there is no secondary fuel type
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
])
```
The following, more terse version, has the same effect:

```js
dag.configure([
  // The primary fuel is specified by a fuel model catalog key
  ['configure.fuel.primary', 'catalog'],
  // There are no secondary fuels
  ['configure.fuel.secondary', 'none'],
  // Fuel moistures are entered by dead and live category
  ['configure.fuel.moisture', 'category'],
  // Cured herb fraction is estimated from herb moisture, rather than directly input
  ['configure.fuel.curedHerbFraction', 'estimated'],
  // Wind speed is at midflame height
  ['configure.wind.speed', 'atMidflame'],
  // Wind direction is assumed to be upslope
  ['configure.wind.direction', 'upslope'],
  // Slope steepness is entered as the ratio of vertical rise / horizontal reach
  ['configure.slope.steepness', ['ratio']
])
```

---
<a id='configure-variables'></a>

## ![](favicon.png) Configuration Variables

[Back to Top](#top)

The following lists the keys (names) of the DAG configuration variables and their allowable values:

  - 'configure.fire.effectiveWindSpeedLimit': The fire spread rate effective wind speed limit (see Rothermel 1972) is
    - 'applied'
    - 'ignored'

  - 'configure.fire.firelineIntensity': When required as an input, fireline intensity is
    - 'firelineIntensity': entered directly
    - 'flameLength': estimated from the flame length input

  - 'configure.fire.lengthToWidthRatio': When required as an input, fire ellipse length-to-width ratio is
    - 'lengthToWidthRatio': entered directly
    - 'effectiveWindSpeed': estimated from the effective wind speed input

  - 'configure.fire.weightingMethod': Weighted fire spread rate of 2 surface fuel types is based on
    - 'arithmetic': arithmetic mean spread rate
    - 'expected' **NOT IMPLEMENTED**
    - 'harmonic': harmonic mean spread rate

  - 'configure.fire.vector': When required as input, fire vector direction inputs are
    - 'fromHead': degrees clockwise from direction of maximum spread
    - 'fromUpslope': degrees clockwise from upslope
    - 'fromNorth': degrees clockwise from north

  - 'configure.fuel.windSpeedAdjustmentFactor': When required as input, midflame wind speed adjustment factor is
    - 'input': entered directly
    - 'estimated': estimated from canopy and fuel parameters

  - 'configure.fuel.chaparralTotalLoad': When required as input, chaparral total fuel load is
    - 'input': entered directly
    - 'estimated': estimated from chaparral depth

  - 'configure.fuel.curedHerbFraction': The cured herb fraction for BehavePlus fuel models is
    - 'input': entered directly
    - 'estimated': estimated from live fuel moisture

  - 'configure.fuel.moisture': When required as input, fuel moisture is entered for
    - 'individual': the 3 dead and 2 live fuel moisture classes
    - 'liveCategory': the 3 dead moisture classes and a singe live category moisture
    - 'category': the dead and live category moistures only
    - 'catalog' **NOT IMPLEMENTED**

  - 'configure.fuel.primary': Primary surface fuels are specified by entering
    - 'catalog': a fuel model catalog key
    - 'behave': standard BehavePlus fuel parameters
    - 'chaparral': chaparral dynamic fuel parameters
    - 'palmettoGallberry': palmetto-gallberry dynamic fuel parameters
    - 'westernAspen': western aspen dynamic fuel parameters

  - 'configure.fuel.secondary': Secondary surface fuels are specified by entering
    - 'none': there are no secondary fuels
    - 'catalog': a fuel model catalog key
    - 'behave': standard BehavePlus fuel parameters
    - 'chaparral': chaparral dynamic fuel parameters
    - 'palmettoGallberry': palmetto-gallberry dynamic fuel parameters
    - 'westernAspen': western aspen dynamic fuel parameters

  - 'configure.slope.steepness': When required as input, slope steepness is
    - 'ratio': entered as ratio of vertical rise to horizontal reach
    - 'degrees': entered as degrees of angle above the horizontal plane
    - 'map': estimated from map measurements

  - 'configure.wind.direction': 'When required as input, wind direction is
    - 'sourceFromNorth': the direction FROM which the wind is blowing (degrees from NORTH)
    - 'headingFromUpslope': the direcion TOWARDS which the wind is blowing (degrees from UPSLOPE)
    - 'upslope': assumed to be blowing upslope

  - 'configure.wind.speed': When required as an input, wind speed is entered for
    - 'at10m': 10-m height
    - 'at20ft': 20-ft height
    - 'atMidflame': midflame height

---
<a id='module-linkage-variables'></a>

## ![](favicon.png) Module Linkage Variables

[Back to Top](#top)

The following are more advanced configuration variables used to implement the BehavePlus notion of *modules* and *linkages*.  If your use case requires this, you may which to look at the *fire-simple-api* which implements many of the module-linkage use cases for you.  You may be able to invoke its classes and functions directly, or use them as example implementations of your user case.

For a detailed, **TLDR;** discussion of how *fore-behavior-simulator* implements the BehavePlus *modules* and *links* concepts, see [09 Modules and Linkages](./09_ModuleLinkages.md).

  - 'link.crownFire': Surface fire variables required by the Crown Module are
    - 'linkedToSurfaceFire': linked to the corresponding Surface Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.crownSpot': Crown fire variables required by the Crown Spotting Module are
    - 'linkedToCrownFire': linked to the corresponding Crown Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.fireContain': **NOT IMPLEMENTED**
    - 'linkedToFireEllipse': linked to the corresponding Size (Ellipse) Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.fireEllipse': Surface fire variables required by the Size (Ellipse) Module are
    - 'linkedToSurfaceFire':  linked to the corresponding Surface Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.scorchHeight': Surface fire variables required by the Scorch Module are
    - 'linkedToSurfaceFire': linked to the corresponding Surface Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.surfaceSpot': Surface fire variables required by the Surface Spot Module are
    - 'linkedToSurfaceFire': linked to the corresponding Surface Module variables
    - 'standAlone': entered directly (stand-alone mode)

  - 'link.treeMortality': Scorch height variables required by the Mortality Module are
    - 'linkedToScorchHeight': linked to the corresponding Scorch Module variables
    - 'standAlone': entered directly (stand-alone mode)

---

| Prev: [07 Live Web Browser Examples](./07_LiveWebBrowserExamples.md) | Next: [09 Modules and Linkages](./09_ModuleLinkages.md) | [Table of Contents](../README.md) |
