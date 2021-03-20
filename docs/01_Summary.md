#  ![](favicon.png) Summary
| Prev: [Table of Contents](../README.md) | Next: [02 Installation](./02_Installation.md) |

---

The purpose of *fire-behavior-simulator* is to implement all the models, functionality, and configurability of the *BehavePlus Fire Modeling System* in a Javascript package.

The *BehavePlus Fire Modeling System* (Patricia L. Andrews; Collin D. Bevins; Robert C. Seli, 2005)  is a fuel modeling and fire behavior and effects program widely used in the United States, especially by federal and state wildland fire management agencies. More information about BehavePlus can be found [here](https://www.frames.gov/behaveplus/home).

BehavePlus is available only on Windows-based operating systems.  Written in C++, the program has evolved steadily and somewhat organically since the 1990's as new models and capabilities were incorporated.  The most recent release is Version 6 Beta (March 2018).  Throughout this period, the original basic architecture of the program has remained unchanged.

The *fire-behavior-simulator* package is a totally re-engineered implementation of the core BehavePlus models and equations.  Its computational engine employs a directed acyclical graph (DAG) to ensure optimal performance and the flexibility required for developing fire behavior applications in Javascript for use in web browsers and/or Node.js runtime applications.

For more information, read the [Capabilities](./docs/03_Capabilities.md) section.

---
| Prev: [Table of Contents](../README.md) | Next: [02 Installation](./02_Installation.md) |
