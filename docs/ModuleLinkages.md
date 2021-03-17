#  ![](favicon.png) Modules and Linkages

##  ![](favicon.png) *fire-behavior-simulator* Module Use Cases

When a *fire-behavior-simulator* DAG is initially created, it is constructed as one large continuous model.  To demonstrate, assume you want a table of tree mortality rates.  At its core, the tree mortality model requires just 5 inputs; a tree species, dbh, crown height, crown base height, and scorch height.

But because the entire DAG is linked together, tree mortality rate will get its scorch height input from the scorch height model. The scorch height model, in turn, requires fireline intensity as an input.  Because the DAG is fully linked, fireline intensity will be provided by the surface fire model, which in turn can require a lot of inputs.  The resulting list of 16 required inputs includes fuel parameters, fuel moistures, slope, wind speed, wind direction, canopy parameters, and air temperature:

```js
import { Sim } from '../src/index.js'

test('1: Tree Mortality Rate required inputs for a fully linked DAG', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Select mortality rate
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(16)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))

  // and a whole bunch of surface fire inputs to calculate scorch height
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.catalogKey'))
  expect(inputNodes).toContain(dag.node('surface.primary.fuel.model.behave.parms.cured.herb.fraction'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl1h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl10h'))
  expect(inputNodes).toContain(dag.node('site.moisture.dead.tl100h'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.herb'))
  expect(inputNodes).toContain(dag.node('site.moisture.live.stem'))
  expect(inputNodes).toContain(dag.node('site.windSpeedAdjustmentFactor'))
  expect(inputNodes).toContain(dag.node('site.slope.steepness.ratio'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.at20ft'))
  expect(inputNodes).toContain(dag.node('site.wind.direction.heading.fromUpslope'))
})
```

But consider the use case where we simply want to examine tree mortality rate over a range of scorch heights.  We want to just enter the desired scorch height values directly rather than try to generate them from a myrad of surface fire module inputs.  That is, we just want to enter the bare minimum 5 inputs.  Tod do so, we *unlink* the Tree Mortality module from the rest of the DAG:

```js
test('2: Tree Mortality Rate required inputs when unlinked', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Unlink the tree mortality model and select mortality rate
  dag.configure([['link.treeMortality', 'standAlone']])
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(5)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))

  // And the scorch height input
  expect(inputNodes).toContain(dag.node('site.fire.observed.scorchHeight'))
})
```

To solve this issue, BehavePlus employs the concept of **modules** to identify subsets of the DAG that can be run as 'stand-alone' models.  As shown above, the 'Tree Mortality Module' in stand-alone mode requires just the 4 tree parameters plus scorch height.  When it is 'linked' to the 'Scorch Height Module', the required scorch height input is calculated from 3 other inputs: air temperature, midflame wind speed, and fireline intensity:

```js
test('3: Tree Mortality Rate required inputs when stand-alone Scorch Hieight - Tree Mortality models', () => {
  const sim = new Sim('dag1')
  const dag = sim.getDag('dag1')

  // Unlink the scorch height model tree mortality model and select mortality rate
  dag.configure([
    ['link.scorchHeight', 'standAlone'],
    ['link.treeMortality', 'linkedToScorchHeight'],
    ['configure.wind.speed', 'atMidflame']])
  dag.select(['mortality.rate'])

  // What inputs are required?
  const inputNodes = dag.requiredInputNodes()
  expect(inputNodes.length).toEqual(7)

  // Requires 4 tree inputs:
  expect(inputNodes).toContain(dag.node('site.canopy.crown.baseHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.crown.totalHeight'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.dbh'))
  expect(inputNodes).toContain(dag.node('site.canopy.tree.species.fofem6.code'))

  // plus 3 inputs to determine scorch height
  expect(inputNodes).toContain(dag.node('site.fire.observed.firelineIntensity'))
  expect(inputNodes).toContain(dag.node('site.temperature.air'))
  expect(inputNodes).toContain(dag.node('site.wind.speed.atMidflame'))
})
```

 When 'Scorch Height Module' is linked to the 'Surface Fire Module', then a lot more inputs are required to determine fireline intensity.

---

##  ![](favicon.png) BehavePlus Modules

The BehavePlus Windows program has a 'Configure' dialog that allows linking some of its 10 Modules as follows:

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

The dialog shows 7 possible linkages where a client Module binds one or more of its required inputs to a provider Module's outputs:
  - Crown Fire (CROWN) may link to Surface Fire (SURFACE),
  - Crown Fire Spotting (CROWN SPOT)may link to Crown Fire (CROWN),
  - Fire Ellipse (SIZE) may link to Surface Fire (SURFACE),
  - Fire Containment (CONTAIN) may link to to Fire Ellipse (SIZE),
  - Surface Spotting (SURF SPOT) may link to Surface Fire (SURFACE),
  - Scorch Height (SCORCH) may link to Surface Fire (SURFACE), and
  - Tree Mortality (MORTALITY) may link to Scorch Height (SCORCH)

The *fire-behavior-simulator* includes 7 corresponding configuration nodes:

| Link Node Key | Allowable Values |
|---|---|
| link.crownFire | 'linkedToSurfaceFire' or 'standAlone' |
| link.crownSpot | 'linkedToCrownFire' or 'standAlone' |
| link.fireEllipse | 'linkedToSurfaceFire or 'standAlone' |
| link.fireContain | 'linkedToFireEllipse' or 'standAlone' |
| link.surfaceSpot | 'linkedToSurfaceFire' or 'standAlone' |
| link.scorchHeight | 'linkedToSurfaceFire' or 'standAlone' |
| link.treeMortality | 'linkedToScorchHeight' |

---

## ![](favicon.png) link.crownFire - Crown Fire Module Bindings

The Crown Fire Module may link to the Surface Fire Module by setting link.crownFire to 'linkedToSurfaceFire' to obtain:
- surface fireline intensity or flame length
- surface fire heat per unit area

<table border>
  <tr><th>WHen link.crownFire</th><th>is 'standAlone'</th><th>is 'linkedToSurfaceFire'</th></tr>
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

---

##  ![](favicon.png) link.crownSpot - Crown Fire Spotting Module Bindings

The Crown Fire Spotting Module may link to the Crown Fire Module by setting link.crownSpot to 'linkedToCrownFire' to obtain:
  - active crown fire fireline intensity

<table border>
  <tr><th>When link.crownSpot</th><th>is 'standAlone'</th><th>is 'linkedToCrownFire'</th></tr>
  <tr><td>spotting.crownFire.firelineIntensity</td>
      <td>firelineIntensityThomas(</br> site.fire.crown.flameLength )</td>
      <td>crown.fire.active.firelineIntensity</td></tr>
</table>

---

##  ![](favicon.png) link.fireEllipse - Fire Ellipse Module Bindings

The Fire Ellipse Module may link to the Surface Fire Module by setting link.fireEllipse to 'linkedToSurfaceFire' to obtain:
  - spread rate at fire head
  - heading direction from upslope
  - fireline intensity (or flame length) at head
  - length-to-width ratio (or effective wind speed)
  - wind speed at midflame height (for scorch height outputs)

<table border>
  <tr><th>When link.fireEllipse</th><th>is 'standAlone'</th><th>is 'linkedToSurfaceFire'</th></tr>
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

---
##  ![](favicon.png) link.fireContain - Fire Containment Module Bindings
The Fire Containment Module my link to the Fire Ellipse Module be stting link.fireContain to 'linkedToFireEllipse' to obtain:
  - spread rate at head
  - length-to-width ratio

---

##  ![](favicon.png) link.surfaceSpot - Surface Spotting Module Bindings

The Surface Spotting Module may link th the Surface Fire Module by setting link.surfaceSpot to 'linkedToSurfaceFire' to obtain:
  - surface fireline intensity (or flame length)

<table border>
  <tr><th>When link.surfaceSpotting</th><th>is 'standAlone'</th><th>is 'linkedToSurfaceFire'</th></tr>
  <tr><td>spotting.surfaceFire.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
</table>

---

##  ![](favicon.png) link.scorchHeight - Scorch Height Module Bindings

The Scorch Height Module may link to the Surface Fire Module by setting link.scorchHeight to 'linkedToSurfaceFire' to obtain:
  - surface fireline intensity (or flame length)
  - wind speed at midflame height

<table border>
  <tr><th>configure.link.scorchHeight</th><th>standAlone</th><th>surfaceFire</th></tr>
  <tr><td>scorch.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td></tr>
  <tr><td>scorch.wind.speed</td>
      <td>site.wind.speed.atMidflame</td>
      <td>surface.weighted.fire.wind.speed.atMidflame</td></tr>
</table>

Note that 3 scorch height variables are always available from the Surface Fire Module whether or not the 'Scorch Height Module' is active or linked:
  - surface.primary.fuel.fire.scorchHeight,
  - surface.secondary.fuel.fire.scorchHeight,
  - surface.weighted.fire.scorchHeight,

Also note that 6 scorch height variables are always available from the Fire Ellipse Module whether or not the 'Scorch Height Module' is active or linked:
  - surface.fire.ellipse.back.scorchHeight
  - surface.fire.ellipse.beta.scorchHeight
  - surface.fire.ellipse.beta5.scorchHeight
  - surface.fire.ellipse.flank.scorchHeight
  - surface.fire.ellipse.head.scorchHeight
  - surface.fire.ellipse.psi.scorchHeight

---

##  ![](favicon.png) link.treeMortality - Tree Mortality Module Bindings

The Tree Mortality Module may link to the Scorch Height Module by setting link.treeMortality to 'linkedToScorchHeight' to obtain:
  - scorch height

<table border>
  <tr><th>When link.treeMortality</th><th>is 'standAlone'</th><th>is 'linkedToScorchHeight'</th></tr>
  <tr><td>mortality.scorchHeight</td>
      <td>site.fire.observed.scorchHeight</td>
      <td>scorch.height</td></tr>
</table>

---

## Summary

Surface Fire can be linked (provide input) to 4 other modules:
  - Crown Fire can use Surface Fire's
    - surface fireline intensity (or flame length)
    - surface fire heat per unit area
  - Surface Spotting can use Surface Fire's
    - surface fireline intensity (or flame length)
  - Fire Ellipse can use Surface Fire's
    - surface fireline intensity (or flame length)
    - surface fire spread rate
    - fire heading direction from upslope
    - surface fire length-to-width-ratio (or effective wind speed)
    - wind speed at midflame height
  - Scorch Height can use Surface Fire's
    - surface fireline intensity (or flame length)
    - wind speed at midflame height
