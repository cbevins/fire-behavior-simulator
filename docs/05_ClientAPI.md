#  ![](favicon.png) 5 Client API

| Prev: [04 Basic Usage](./04_BasicUsage.md) | Next: [06 Example Use with Node JS](./06_ExampleUseWithNodeJs.md) | [Table of Contents](../README.md) |

<a id='top'></a>

## Class APIs
- [**Sim** Class](#sim-class)
- [**Dag** Class](#dag-class)
- [**DagNode** Class](#dagnode-class)

---
<a id='sim-class'></a>

## Sim Class

- ### new Sim()
  - Creates and returns a new Sim instance, a container for one or more *fire-behavior-simulator* directed acyclical graphs (DAGs).

- ### Sim.createDag(string: dagKey)
  - Creates a new *fire-behavior-simulator* directed acyclical graph (DAG) and adds it to the Sim instance. If the Sim already has a DAG named **dagKey**, it is replaced with the newer instance.

- ### Sim.deleteDag(string: dagKey)
  - Deletes the DAG with the key **dagKey** from the Sim instance.

- ### Sim.getDag(string: dagKey)
  - Returns a reference to the Sim DAG with the key **dagKey**, or returns **undefined** if there is no DAG with the key.

- ### Sim.hasDag(string: dagKey)
  - Returns TRUE if the Sim instance has a DAG with the key **dagKey**.

### Example Sim Method Usage
```js
import { Sim } from '@cbevins/fire-behavior-simulator'
const sim = new Sim() // returns a new Sim container instance
sim.hasDag('dag1') // returns false since we haven't added any DAGs to the Sim
let dag = sim.createDag('dag1') // returns a reference to the new Dag named 'dag1'
sim.hasDag('dag1') // returns true
dag = sim.createDag('dag2') // returns reference to a new Dag named 'dag2'
dag = sim.getDag('dag1') // returns a reference to the Dag named 'dag1'
sim.deleteDag('dag1') // Deletes the Dag named 'dag1'
```
- [Back to top](#top)

---
<a id='dag-class'></a>

## Dag Class

- ### Dag.clearInputs()
  - Removes all DagNode input values from the *input pool*.
  - Returns a reference to this Dag.

- ### Dag.clearSelected()
  - Removes all *selected* DagNodes from the *selected* list.
  - Returns a reference to this Dag.

- ### Dag.configure(array: cfg-key-value-pairs)
  - Sets the value of one or more *configuration* DagNodes then reconfigures the Dag.
  - *cfg-key-value-pairs* is an array of 2-element arrays where:
    - element 0 is a Config DagNode reference or string key (see  [08 Configuration](./08_Configuration.md))
    - element 1 is the Config option value (see [08 Configuration](./08_Configuration.md))
  - Returns a reference to this Dag.

- ### Dag.input(array: node-key-valueArray-pairs)
  - Adds (or replaces) an array of input values for one or more DagNodes in the *input pool*.
  - When **Dag.run()** is invoked, all required input variables get their (1 or more) input values from the input pool.
  - Note that **Dag.input()** stores the DagNode's input values regardless of whether the DagNode is actually an input node under the current configuration-selection. Its input values remain unchanged until they are reset by the another **input()** or a **clearInputs()**.
  - *node-key-valueArray-pairs* is an array of 2-element arrays where
    - element 0 is a DagNode reference or string key (see [14 Variable Names](./14_VariableNames.md)), and
    - element 1 is the array of one or more input *native* values.
  - Returns a reference to this Dag.

- ### Dag.node(string: nodeKey)
  - *nodeKey* is a DagNode key name (see [14 Variable Names](./14_VariableNames.md))
  - Returns a reference to the DagNode instance named **nodeKey**, or throws an Error() if **nodeKey** doesn't exist.

- ### Dag.requiredConfigNodes()
  - Returns an array of references to all required *configuration* DagNodes (for the set of currently *selected* DagNodes) in topological order.

- ### Dag.requiredNodes()
  - Returns an array of references to all required DagNodes (for the set of currently *selected* DagNodes) in topological order.

- ### Dag.requiredInputNodes()
  - Returns an array of references to all required *input* DagNodes (for the set of currently *selected* DagNodes) in topological order.

- ### Dag.run()
  - Iterates through all the current *input pool* values of all required input variables, updating all DagNode values with each iteration.  At the end of each iteration, the storage class **store()** method is invoked to do something useful with the newly updated values.
  - When **Dag.run()** is invoked, all the required input variables get their (1 or more) input values from the *input pool*.  If the input variable has no entries in the input pool, the variables current value is applied.
  - Returns a reference to this Dag.

- ### Dag.select(array: nodeKeysOrRefs)
  - Adds all DagNodes mentioned in the array to the *selected* list.
  - Array elements may be DagNode references or keys (see [14 Variable Names](./14_VariableNames.md)), or a mixture of both.
  - Returns a reference to this Dag.

- ### Dag.selectedNodes()
  - Returns an array of references to all currently *selected* DagNodes.

- ### Dag.setRunLimit(integer: maxRuns)
  - Sets the maximum number of run iterations allowed for a single **run()** invocation [default is 1,000,000]
  - Returns a reference to this Dag.

- ### Dag.setStorageClass(StorageAbstract: storageClass)
  - Sets a storage class containing a **store()** method that is invoked at the end of each **run()** iteration,  That is, if a **run()** has inputs for 1000 iterations, this class' **store()** method is called 1000 times.
  - **storageClass** is an instance of a class derived from **StorageAbstract** that has a **store()** method.
  - The storage class **store()** method is responsible for accessing DagNode values and storing them as required by the application.

- ### Dag.sortedNodes()
  - Returns an array of references to **all** DagNodes in topological order.

- ### Dag.unselect(array: nodeKeysOrRefs)
  - Removes all DagNodes mentioned in the array from the *selected* list.
  - Array elements may be DagNode references or keys (see [14 Variable Names](./14_VariableNames.md)), or a mixture of both.
  - Returns a reference to this Dag.

- ### Dag.validateDisplayInputs (array: node-key-textValue-pairs)
  - Validates one or more DagNode display text input pairs whose values are strings (usually from a text file or browser input element) that must be translated, cast, and converted into native values, usually prior to calling **Dag.input()**.
  - Each variables value is validated against the variable's **Variant** class validation rules (min value, max value, set membership, etc).
  - *node-key-textValue-pairs* is an array whose elements are 2-element arrays
    - first element is a DagNode reference or a dag key string(see [14 Variable Names](./14_VariableNames.md)),
    - second element is the text string representation of the value to be tested.  For numeric input, the text string would be something like '1.234'.
  - Primarily intended to validate input from an HTML form or text file stream.
  - Returns an array with one ValidationResult object {valid:, value:, message:, node:} for each *raw input text* DagNode value.

- ### Dag.validateNativeInputs  (array: node-key-textValue-pairs)
  - Similar to *Dag.validateDisplayInput()*, but the variable values must be of the appropriate type (number, string, etc), and if the node is a Quantity Variant, its value must be expressed in the native units-of-measure.
  - Each variables value is validated against the variable's **Variant** class validation rules (min value, max value, set membership, etc).
  - *node-key-textValue-pairs* is an array whose elements are 2-element arrays
    - first element is a DagNode reference or a dag key string (see [14 Variable Names](./14_VariableNames.md)),
    - second element is the *native* value to be tested.
  - Returns an array with one ValidationResult object {valid: bool, value: any, message: string, node: DagNode} for each *invalid* DagNode value.

- [Back to top](#top)

---
<a id='dagnode-class'></a>

## DagNode Class

  - DagNode.displayString()
    - Returns the DagNode's current display value as a text string.  If the DagNode is a Quantity Variant, the value is converted into the current display units-of-measure and decimal digits, and is appended with the units-of-measure.

  - Dag.displayUnits()
    - Returns the DagNode's current display units-of-measure as a text string.

  - Dag.displayValue()
      - Returns the DagNode's current display value as a text string.  If the DagNode is a Quantity Variant, it is converted into the current display units-of-measure and decimal digits.

  - Dag.key()
    - Returns the DagNode's key string.

  - Dag.label()
    - Returns the DagNode's label (if assigned), or a prettified key string.

  - Dag.nativeUnits()
    - Returns the native units-of-measure of a Quantity Variant DagNode.

  - Dag.value()
    - Returns the DagNode's current *native* value.

- [Back to top](#top)

---

| Prev: [04 Basic Usage](./04_BasicUsage.md) | Next: [06 Example Use with Node JS](./06_ExampleUseWithNodeJs.md) | [Table of Contents](../README.md) |
