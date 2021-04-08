#  ![](favicon.png) 4 Basic Usage

| Prev: [03 Capabilities](./03_Capabilities.md) | Next: [05 Client API](./05_ClientAPI.md) | [Table of Contents](../README.md) |

---

This first example walks through a basic yet complete Node.js runtime application. Only 8 statements are required to produce a result:

```js
1 import { Sim } from '@cbevins/fire-behavior-simulator' // import the package
2 const sim = new Sim() // create a simulator container
3 const dag = sim.createDag('basicUsage') // add a directed acyclical graph to the Sim container
4 dag.select(['surface.fire.weighted.spreadRate']) // select 1 or more variables of interest
5 dag.configure([array-of-configuration-variables]) // configure DAG computation and input preferences
6 dag.input([input-variable-values]) // set input variable values
7 dag.run() // update all the affected DAG variable values to produce the selected values
8 const ros = dag.node('surface.fire.weighted.spreadRate').value() // get the updated value of the selected variables
```

---

## Step 1: *import* the *fire-behavior-simulator* package from node_modules or source folder

If you have installed *fire-behavior-simulator* as a node_module:

```js
import { Sim, nodeTable } from '@cbevins/fire-behavior-simulator'
```

If you have cloned the *fire-behavior-simulator* repo or are otherwise working directly with the source code, import the **Sim** class from the **index.js** file:

```js
import { Sim, nodeTable } from '../src/index.js'
```

In this example we have also imported the **nodeTable()** utility function for printing node tables to the console.

---

## Step 2 - *create* a fire behavior simulator with 1 directed acyclical graph (DAG)

```js
const sim = new Sim()
const dag = sim.createDag('basicUsage')
```

The **Sim** class contains the blueprint (genome) from which individual fire behavior directed acyclical graphs are generated.  It also serves as the container for the simulation DAGs it has created.  In this example, we create a single DAG named 'basicUsage'.

---

## Step 3 - *select* the fire behavior variables (DagNodes) of interest

In this example we just want to estimate the weighted spread rate (key = 'surface.weighted.fire.spreadRate') and flame length (key = 'surface.weighted.fire.flameLength').  A complete list of all available variables (aka *nodes* or *DagNodes*) is available in [14 Variable Names](./14_VariableNames.md).

```js
const selectedNodes = [
  dag.node('surface.weighted.fire.spreadRate'), // node() returns a DagNode reference for 'key'
  dag.node('surface.weighted.fire.flameLength')
]
dag.select(selectedNodes) // selects weighted spread rate and flame length for computation
```

The **Dag.node()** function takes a variable key name and returns a reference to its **DagNode** instance.
The array of *selected* nodes is then submitted to the **Dag.select()** method.

We also could have accomplished the above with a single statement...

```js
dag.select('surface.weighted.fire.spreadRate', 'surface.weighted.fire.flameLength')
```
...but the first method lets use keep an array of *selected* DagNode references around for later use such as extracting values and printing.

---

## Step 4 - *configure* input choices and computational options

You can request from the DAG an array of the *configuration* DagNodes that are currently applicable to your *selected* variables as follows:

```js
const activeConfigs = dag.requiredConfigNodes() // returns an array of applicable DagNode references
```

and display them in a table to the console:

```js
console.log(nodeTable(activeConfigs, ['index', 'key', 'nativeValue'], 'Active Configuration Nodes'))
```

For this example, we configure for the fewest number of possible inputs:
  - a single primary fuel,
  - dead and live category moisture contents,
  - upslope midflame windspeed, and
  - slope steepness

as follows:

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

See [08 Configuration](./08_Configuration.md) for a complete list of all configuration options.

---
## Step 5 - request the *required input* DagNodes

You will initially need to see exactly which *input* variables are *required* for your currently *selected* variables and configuration settings:

```js
const requiredInputs = dag.requiredInputNodes()  // returns an array of DagNode references
```

... and you can display their names (keys) and units-of-measure in a table to the console:

```js
console.log(nodeTable(requiredInputs, ['index', 'key', 'nativeUnits'], 'Required Inputs'))
```

... which looks like this:

```
+--------------------------------------------------------------+
|                         Required Inputs                      |
|-------|---------------------------------------|--------------|
| Index | Key                                   | Native Units |
|-------|---------------------------------------|--------------|
| 0     | site.moisture.live.category           | ratio        |
| 1     | surface.primary.fuel.model.catalogKey |              |
| 2     | site.moisture.dead.category           | ratio        |
| 3     | site.slope.steepness.ratio            | ratio        |
| 4     | site.wind.speed.atMidflame            | ft/min       |
|-------|---------------------------------------|--------------|
```
---

## Step 6 - set *input* values for the *required input* DagNodes

Now that you know the keys (names) of the *required input* variables, give each of them one or more values:

```js
dag.input([
  ['surface.primary.fuel.model.catalogKey', ['10']], // 'Timber litter & understory'
  ['site.moisture.dead.category', [0.05, 0.1]],  // fraction of fuel ovendry weight
  ['site.moisture.live.category', [0.5, 1, 2]],  // fraction of fuel ovendry weight
  ['site.wind.speed.atMidflame', [0, 5*88, 10*88, 20*88]], // feet per minute (1 mph = 88 ft/min)
  ['site.slope.steepness.ratio', [0, 0.25, 0.5, 1, 5]], // vertical rise / horizontal reach
])
```

**Dag.input()** adds input values for *any* specified variable into an *input pool*, so you can call **Dag.input()** on any variable, even if it is not a current *input* variable.

---

## Step 7 - *run* the simulation for all the current input values

```js
dag.run()
```

**Dag.run()** determines all the *required input* DagNodes based upon the currently *selected* (output) DagNodes and the current configuration.  For each *required input* DagNode, it looks in the *input pool* for that node's input value (or values).  If the *input pool* has no entry for the node, its current value is applied.

In our example, the two *selected* variables (spread rate and flame length) and current configuration settings result in 5 *input* variables.  **Dag.run()** therefore iterates over
  - 1 value of 'surface.primary.fuel.model.catalogKey',
  - 2 values of 'site.moisture.dead.category',
  - 3 values of 'site.moisture.live.category',
  - 4 values of 'site.wind.speed.atMidflame', and
  - 5 values 'site.slope.steepness.ratio'.

**Dag.run()** will therefore make 120 iterations in the most optimal manner possible.

Subsequently, you only have to specify the *changed* input values between runs.  For example...

```js
dag.input([['surface.primary.fuel.model.catalogKey', ['gs4']]) // Grass-shrub 124
dag.run()
```

... makes another 120 iterations, but using fuel model 'gs4' instead of fuel model '10'.

---

## Step 8 - **access and display** the single result set

You can loop through the array of *selected* variables to access their updated values directly from the DAG:

```js
selectedNodes.forEach(node => {
  console.log(node.label(), '=', node.displayString())
})
```

... or use the **nodeTable()** utility function to display them:

```js
console.log(nodeTable(selectedNodes,
  ['label', 'nativeValue', 'nativeUnits', 'displayValue', 'displayUnits'], 'Results'))
```

which looks like this for the first iteration:

```
+--------------------------------------------------------------------------------------------------------+
|                                                  Results                                               |
|------------------------------------|--------------------|--------------|---------------|---------------|
| Label                              | Native Value       | Native Units | Display Value | Display Units |
|------------------------------------|--------------------|--------------|---------------|---------------|
| Surface Weighted Fire Spread Rate  | 38.894889923053256 | ft/min       | 38.89         | ft/min        |
| Surface Weighted Fire Flame Length | 10.43340945465685  | ft           | 10.43         | ft            |
|------------------------------------|--------------------|--------------|---------------|---------------|
```

---

| Prev: [03 Capabilities](./03_Capabilities.md) | Next: [05 Client API](./05_ClientAPI.md) | [Table of Contents](../README.md) |
