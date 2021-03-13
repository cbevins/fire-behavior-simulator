# BehavePlus Style Linkages

BehavePlus v6 has 10 Modules that can be linked as follows:

- &#9745; Surface Fire
    - &#9745; Crown Fire
        - &#9745; Crown Fire Spotting
    - &#9745; Fire Ellipse
        - &#9744; Fire Containment
    - &#9745; Surface Fire Spotting
    - &#9745; Scorch Height
        - &#9745; Tree Mortality
- &#9745; Spotting from Burning Pile or Torching Trees
- &#9745; Ignition Probability

There are 7 possible linkages where a client Module binds one or more of its inputs to a provider Module's outputs:

  - Crown Fire binds to Surface Fire (`configure.link.crownFire = 'linkedToSurfaceFire'`)) to obtain:
    - surface fireline intensity (or flame length)
    - surface fire heat per unit area

  - Crown Fire Spotting binds to Crown Fire (`configure.link.crownSpot = 'linkedToCrownFire'`) to obtain:
    - active crown fire fireline intensity

  - Fire Ellipse binds to Surface Fire (`configure.link.fireEllipse = 'linkedToSurfaceFire'`) to obtain:
    - spread rate at fire head
    - heading direction from upslope
    - fireline intensity (or flame length) at head
    - length-to-width ratio (or effective wind speed)
    - wind speed at midflame height (for scorch height outputs)

  - Fire Containment binds to Fire Ellipse (`configure.link.fireContain = 'linkedToFireEllipse'`) to obtain:
    - spread rate at head
    - length-to-width ratio

  - Surface Spotting binds to Surface Fire (`configure.link.surfaceSpot = 'linkedToSurfaceFire'`) to obtain:
    - surface fireline intensity (or flame length)

  - Scorch Height binds to Surface Fire (`configure.link.scorchHeight = linkedToSurfaceFire'`) to obtain:
    - surface fireline intensity (or flame length)
    - wind speed at midflame height

  - Tree Mortality binds to Scorch Height (`configure.link.treeMortality = 'linkedToScorchHeight'`) to obtain:
    - scorch height

Surface Fire can be linked (provide input) to 4 other modules:
  - Crown Fire can use Surface Fire
    - surface fireline intensity (or flame length)
    - surface fire heat per unit area
  - Surface Spotting can use Surface Fire
    - surface fireline intensity (or flame length)
  - Fire Ellipse can use Surface Fire
    - surface fireline intensity (or flame length)
    - surface fire spread rate
    - fire heading direction from upslope
    - surface fire length-to-width-ratio (or effective wind speed)
    - wind speed at midflame height
  - Scorch Height can use Surface Fire
    - surface fireline intensity (or flame length)
    - wind speed at midflame height

## Stand Alone Models

  - Crown Fire - Crown Spotting stand-alone mode requires input:
    - surface fire flame length
    - surface fire heat per unit area

  - Crown Spotting stand-alone mode requires input:
    - crown fire flame length

  - Surface Spotting stand-alone mode requires input:
    - surface flame length

  - Scorch Height - Tree Mortality stand-alone mode requires input:
    - surface fire flame length,
    - air temp,
    - wind speed at midflame height

  - Tree Mortality stand-alone mode requires input:
    - scorch height

## Crown Fire Linkages

<table border>
  <tr><th>configure.link.crownFire</th><th>standAlone</th><th>surfaceFire</th></tr>
  <tr><td>crown.fire.surface.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
  <tr><td>crown.fire.surface.flameLength</td>
      <td>site.fire.observed.flameLength</td>
      <td>surface.weighted.fire.flameLength</td></tr>
  <tr><td>crown.fire.surface.heatPerUnitArea</td>
      <td>site.fire.observed.heatPerUnitArea</td>
      <td>surface.weighted.fire.heatPerUnitArea</td></tr>
</table>

## Crown Spotting Linkages

<table border>
  <tr><th>configure.link.crownSpot</th><th>standAlone</th><th>crownFire</th></tr>
  <tr><td>spotting.crownFire.firelineIntensity</td>
      <td>firelineIntensityThomas( site.fire.crown.flameLength )</td>
      <td>crown.fire.active.firelineIntensity</td></tr>
</table>

## Fire Ellipse Linkages

<table border>
  <tr><th>configure.link.fireEllipse</th><th>standAlone</th><th>surfaceFire</th></tr>
  <tr><td>surface.fire.ellipse.axis.effectiveWindSpeed</td>
      <td>site.fire.observed.effectiveWindSpeed</td>
      <td>surface.weighted.fire.effectiveWindSpeed</td></tr>
  <tr><td>surface.fire.ellipse.axis.lengthToWidthRatio</td>
      <td>site.fire.observed.lengthToWidthRatio</td>
      <td>surface.weighted.fire.lengthToWidthRatio</td></tr>
  <tr><td>surface.fire.ellipse.head.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
  <tr><td>surface.fire.ellipse.head.flameLength</td>
      <td>site.fire.observed.flameLength</td>
      <td>surface.weighted.fire.flameLength</td></tr>
  <tr><td>surface.fire.ellipse.head.spreadRate</td>
      <td>site.fire.observed.spreadRate</td>
      <td>surface.weighted.fire.spreadRate</td></tr>
  <tr><td>surface.fire.ellipse.heading.fromUpslope</td>
      <td>site.fire.observed.heading.fromUpslope</td>
      <td>surface.weighted.fire.heading.fromUpslope</td></tr>
  <tr><td>surface.fire.ellipse.wind.speed.atMidflame</td>
      <td>site.wind.speed.atMidflame</td>
      <td>surface.weighted.fire.wind.speed.atMidflame</td></tr>
</table>

## Scorch Height Fire Linkages

Scorch height is available as 3 built-in Nodes of the Surface Fire Module:
  - surface.primary.fuel.fire.scorchHeight,
  - surface.secondary.fuel.fire.scorchHeight,
  - surface.weighted.fire.scorchHeight,

as 6 built-in Nodes of the Fire Ellipse Module:
  - surface.fire.ellipse.back.scorchHeight
  - surface.fire.ellipse.beta.scorchHeight
  - surface.fire.ellipse.beta5.scorchHeight
  - surface.fire.ellipse.flank.scorchHeight
  - surface.fire.ellipse.head.scorchHeight
  - surface.fire.ellipse.psi.scorchHeight

and as a built-in Node of the Crown Fire Module:
  - crown.canopy.fuel.fire.scorchHeight

But it may also be interesting to examine scorch height's dependence on fireline intensity (or flame length), wind speed, and air temperature by specifying their input values directly (rather than having Surface Fire estimate them for you).  A separate Scorch Height Module is provided for this purpose.

  - mortality.scorchHeight
  - site.fire.observed.scorchHeight

<table border>
  <tr><th>configure.link.scorchHeight</th><th>standAlone</th><th>surfaceFire</th></tr>
  <tr><td>scorch.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
  <tr><td>scorch.wind.speed</td>
      <td>site.wind.speed.atMidflame</td>
      <td>surface.weighted.fire.wind.speed.atMidflame</td></tr>
</table>

## Tree Mortality Linkages

<table border>
  <tr><th>configure.link.treeMortality</th><th>standAlone</th><th>scorchHeight</th></tr>
  <tr><td>mortality.scorchHeight</td>
      <td>site.fire.observed.scorchHeight</td>
      <td>scorch.height</td></tr>
</table>

## Surface Spotting Linkages

<table border>
  <tr><th>configure.link.surfaceSpotting</th><th>standAlone</th><th>surfaceFire</th></tr>
  <tr><td>spotting.surfaceFire.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
</table>

