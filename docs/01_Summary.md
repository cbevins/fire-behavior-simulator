#  ![](favicon.png) 1 Summary

| Prev: [Table of Contents](../README.md) | Next: [02 Installation](./02_Installation.md) |

---

The purpose of the *fire-behavior-simulator* package is to implement all the models, functionality, and configurability of the *BehavePlus Fire Modeling System* as a Javascript (ES6) package.  This package is used to create wildland fire applications that run on modern web browsers or within the Node.js runtime environment.

The *BehavePlus Fire Modeling System* (Patricia L. Andrews; Collin D. Bevins; Robert C. Seli, 2005) is a fuel modeling and fire behavior and effects program widely used by federal and state wildland fire management agencies in the United States. More information about BehavePlus can be found [here](https://www.frames.gov/behaveplus/home).

The *BehavePlus Fire Modeling System* is available only as an installable executable program on Windows-based operating systems.  Written in C++, the program has evolved steadily and somewhat organically since the 1990's as new models and capabilities were incorporated.  The most recent release is Version 6 Beta (March 2018).  Throughout this period, the original basic architecture of the program has remained unchanged.

The *fire-behavior-simulator* package is a totally redesigned implementation of the core BehavePlus models and equations.  All the BehavePlus models have been decomposed into their most fundamental variables and equations and arranged into a single directed acyclical graph (DAG).  This granular decomposition into 1200+ variables allows users to select any subset of variables of interest, and the DAG automatically determines their required input dependencies and the optimal topological order of computation for calculating their values.  Furthermore, the user can dynamically reconfigure the DAG to apply alternate equations as edges.  For example, wind speed at midflame height may configured to be supplied directly as client input, or alternately, calculated from an equation using the DAG's 20-ft wind speed and wind speed adjustment factor variables.

The directed acyclical graph design ensures optimal performance when updating slected variables from their required inputs, while the ability to dynamically configure the DAG provides the flexibility required for developing batch and interactive fire behavior applications in Javascript for use in web browsers and/or Node.js runtime applications.

For more information, read the [Capabilities](./docs/03_Capabilities.md) section.

---
| Prev: [Table of Contents](../README.md) | Next: [02 Installation](./02_Installation.md) |
