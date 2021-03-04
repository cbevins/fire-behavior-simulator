#  ![](favicon.png) Basic Usage
- [Table of Contents](../README.md)
---

This first example walks through the a basic yet complete Node application. Only 8 statements are actually required to produce a result:

```
import { Sim } from '@cbevins/fire-behavior-simulator'
const sim = new Sim('basicUsage') // create a simulator
const dag = sim.getDag('basicUsage') // create a simulator directed acyclical graph
dag.select(['surface.fire.weighted.spreadRate']) // select 1 or more outputs
dag.configure([array-of-configuration-variables]) // set computation and input preferences
dag.input([input-variable-values]) // set input values
dag.run() // update the DAG values
const ros = dag.node('surface.fire.weighted.spreadRate').value() // get the result
```

---

## Step 1: **import** the *fire-behavior-simulator* package from node_modules or source folder

If you have installed *fire-behavior-simulator* as a node_module:

```
import { Sim, nodeTable } from '@cbevins/fire-behavior-simulator'
```

If you have cloned the *fire-behavior-simulator* repo or are otherwise working directly with the source code, import the index.js file:

```
import { Sim, nodeTable } from '../src/index.js'
```

We have also imported the **nodeTable** function for generating some tables.

---

## Step 2 - **create** a fire behavior simulator with 1 directed acyclical graph (DAG)

```
const sim = new Sim('basicUsage')
const dag = sim.getDag('basicUsage')
```

The **Sim** class contains the blueprint (genome) from which the individual fire simulators are generated.  It also serves as the container for one or more simulation DAGs (directed acyclical graphs).  In this example, we create a single DAG named 'basicUsage'.

---

## Step 3 - **select** the fire behavior variables (DagNodes) of interest

In this example we just want to produce the weighted spread rate and flame length.  A complete list of all available variables (aka nodes or DagNodes) is available [here](./Variables.md)

```
const selectedNodes = [
  dag.node('surface.weighted.fire.spreadRate'), // returns a DagNode reference for 'key'
  dag.node('surface.weighted.fire.flameLength')
]
dag.select(selectedNodes) // selects weighted spread rate and flame length for computation
```

The **Dag.node()** takes a variable key name and returns a reference to its DagNode instance.
The array of selected nodes is then submitted to the **Dag.select()** method.

---

## Step 4 - **configure** input choices and computational options

You can request an array of the configurations currently applicable to your selected variables:

```
const activeConfigs = dag.requiredConfigNodes() // returns an array of DagNode references
```

and you can display them in a table to the console:

```
console.log(nodeTable(activeConfigs, ['index', 'key', 'nativeValue'], 'Active Configuration Nodes'))
```

For this example, we configure for the fewest number of posssible inputs:
  - a single primary fuel,
  - dead and live category moisture contents,
  - upslope midflame windspeed, and
  - slope steepness

See [here](./08_Configuration.md) for a complete list of all configuration options.

```
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

---
## Step 5 - determine the required input variables

You will initially need to see exactly which inputs are required for your currently selected variables and confoiguration settings

```
const requiredInputs = dag.requiredInputNodes()  // returns an array of DagNode references
```

... and you can display them in a table to the console:

```
console.log(nodeTable(requiredInputs, ['index', 'key', 'nativeUnits'], 'Required Inputs'))
```

---

## Step 6 - set *input* values for the required input nodes and run()

Now that you know the required input variables, give them each one or more values.  In this example, we give each input a single value.

```
dag.input([
  ['surface.primary.fuel.model.catalogKey', ['10']], // 'Timber litter & understory'
  ['site.moisture.dead.category', [0.05]],  // fraction of fuel ovendry weight
  ['site.moisture.live.category', [0.5]],  // fraction of fuel ovendry weight
  ['site.wind.speed.atMidflame', [10*88]], // feet per minute (1 mpg = 88 ft/min)
  ['site.slope.steepness.ratio', [0.25]], // vertical rise / horizontal reach
]).run()
```

Note that we added the **.run()** method call after the **Dag.input()**.  We could have instead said:

```
dag.input([...]) // as above
dag.run()
```

---

## Step 7 - **access and display** the single result set

You can access the results of individual variables directly from the DAG:

```
selectedNodes.forEach(node => {
  console.log(node.label(), '=', node.displayString())
})
```

... or use nodeTable to display them:

```
console.log(nodeTable(selectedNodes,
  ['label', 'nativeValue', 'nativeUnits', 'displayValue', 'displayUnits'], 'Results'))
```

