#  ![](favicon.png) cbevins/fire-behavior-simulator/src/fire-behavior-genome

This folder contains the Genome for the fire-behavior-simulator package.

Genome is a Singleton that defines a directed acyclical graph (DAG) for creating fire behavior simulators based on BehavePlus models and features.  It is simply an array whose elements define the simulation Variables (Nodes), including the Variable's:
- unique name
- a reference to its shared Variant instance (for input and output processing)
- and one or more methods of updating its value based on available library methods and
other Variable values.
