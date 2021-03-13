# ![](favicon.png) cbevins/fire-behavior-simulator Configuration
[README.md](./README.md)

---

##  ![](favicon.png) configure.fire.effectiveWindSpeedLimit

The fire spread rate effective wind speed limit is:
- 'applied': applied
- 'ignored': ignored

---

##  ![](favicon.png) configure.fire.firelineIntensity

When required as an input, fireline intensity is:
- 'firelineIntensity': entered directly
- 'flameLength': estimated from the flame length input

---

##  ![](favicon.png) configure.fire.lengthToWidthRatio

When required as an input, fire ellipse length-to-width ratio is:
- 'lengthToWidthRatio': entered directly
- 'effectiveWindSpeed': estimated from the effective wind speed input

---

##  ![](favicon.png) configure.fire.vector

When required as input, fire vector direction inputs are:
- 'fromHead': degrees clockwise from direction of maximum spread
- 'fromUpslope': degrees clockwise from upslope
- 'fromNorth': degrees clockwise from north

---

##  ![](favicon.png) configure.fire.weightingMethod

Weighted fire spread rate of 2 surface fuel types is based on:
- 'arithmetic': arithmetic mean spread rate
- 'harmonic': harmonic mean spread rate

---

##  ![](favicon.png) configure.fuel.chaparralTotalLoad

When required as input, chaparral total fuel load is:
- 'input': entered directly
- 'estimated': estimated from chaparral depth

---

##  ![](favicon.png) configure.fuel.curedHerbFraction

The cured herb fraction for BehavePlus fuel models is:
- 'input': entered directly
- 'estimated': estimated from live fuel moisture

---

##  ![](favicon.png) configure.fuel.moisture

When required as input, fuel moisture is entered for:
- 'individual': the 3 dead and 2 live fuel moisture classes
- 'liveCategory': the 3 dead moisture classes and a singe live category moisture
- 'category': the dead and live category moistures only

---

##  ![](favicon.png) configure.fuel.primary

Primary surface fuels are specified by entering:
- 'catalog': a fuel model catalog key
- 'behave': standard BehavePlus fuel parameters
- 'chaparral': chaparral dynamic fuel parameters
- 'palmettoGallberry': palmetto-gallberry dynamic fuel parameters
- 'westernAspen': western aspen dynamic fuel parameters

---

##  ![](favicon.png) configure.fuel.secondary

Secondary surface fuels are specified by entering:
- 'none': there are no secondary fuels
- 'catalog': a fuel model catalog key
- 'behave': standard BehavePlus fuel parameters
- 'chaparral': chaparral dynamic fuel parameters
- 'palmettoGallberry': palmetto-gallberry dynamic fuel parameters
- 'westernAspen': western aspen dynamic fuel parameters

---

##  ![](favicon.png) configure.fuel.windSpeedAdjustmentFactor

When required as input, midflame wind speed adjustment factor is:
- 'input': entered directly
- 'estimated': estimated from canopy and fuel parameters

---

##  ![](favicon.png) configure.slope.steepness

When required as input, slope steepness is:
- 'ratio': entered as ratio of vertical rise to horizontal reach
- 'degrees': entered as degrees of angle above the horizontal plane
- 'map': estimated from map measurements

---

##  ![](favicon.png) configure.wind.direction

When required as input, wind direction is:
- 'sourceFromNorth': the direction FROM which the wind is blowing (degrees from NORTH)
- 'headingFromUpslope': the direcion TOWARDS which the wind is blowing (degrees from UPSLOPE)
- 'upslope': assumed to be blowing upslope

---

##  ![](favicon.png) configure.wind.speed

When required as an input, wind speed is entered for:
- 'at10m': 10-m height
- 'at20ft': 20-ft height
- 'atMidflame': midflame height

---

##  ![](favicon.png) link.crownFire

This module's inputs are:
- 'linkedToSurfaceFire': linked to Surface Fire outputs
- 'standAlone': entered directly (stand-alone mode)

---

##  ![](favicon.png) link.crownSpot

This crown spotting module inputs are:
- 'linkedToCrownFire': linked to the Crown Fire Module outputs
- 'standAlone': entered directly (stand-alone mode)

---

##  ![](favicon.png) link.fireContain

The fire containment module inputs are:
- 'linkedToFireEllipse': linked to fire ellipse module outputs
- 'standAlone': entered separately (stand-alone)

---

##  ![](favicon.png) link.fireEllipse

This module's inputs are:
- 'linkedToSurfaceFire': linked to Surface Fire outputs
- 'standAlone': entered directly (stand-alone mode)

---

##  ![](favicon.png) link.scorchHeight

This module's inputs are:
- 'linkedToSurfaceFire': linked to Surface Fire outputs
- 'standAlone': entered directly (stand-alone mode)

---

##  ![](favicon.png) link.surfaceSpot

This module's inputs are:
- 'linkedToSurfaceFire': linked to Surface Fire outputs
- 'standAlone': entered directly (stand-alone mode)

---

##  ![](favicon.png) link.treeMortality

The tree mortality module inputs (scorch height) are::
- 'linkedToScorchHeight': linked to the scorch surface or fire ellipse outputs
- 'standAlone': entered separately (stand-alone mode)

---

##  ![](favicon.png) module.crownFire

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.crownSpot

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.fireContain

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.fireEllipse

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.ignitionProbability

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.scorchHeight

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.spotting

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.surfaceFire

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.surfaceSpot

:
- 'active': active
- 'inactive': inactive

---

##  ![](favicon.png) module.treeMortality

:
- 'active': active
- 'inactive': inactive
