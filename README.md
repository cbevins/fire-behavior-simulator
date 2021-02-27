#  ![](favicon.png) cbevins/fire-behavior-simulator

fire-behavior-simulator is a Javascript package for creating fire behavior predicition, simulation, training, and management applications that operate either with the Node.js runtime environment, or inside any modern web browser.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## ![](favicon.png) Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Example Use with Node.js](#example-use-with-node.js)
- [Live Web Browser Examples](#live-web-browser-examples)
- [Configuration](#configuration)
- [Available Variables](./Variables_AlphabeticalOrder.md)
- [Design and Implementation](#design-and-implementation)
- [Performance and Tests](#performance-and-tests)
- [Author](#author)
- [Release Notes](./RELEASE_NOTES.md)
---

##  ![](favicon.png) Installation

---

##  ![](favicon.png) Capabilities

fire-behavior-simulator implements most of the models, functionality, and configuration options of the BehavePlus Fire Modeling System application (version 6), which was written in C++ for the Windows operating system.  It also exposes all 1200+ variables, which means they may be easily included in outputs as needed.

In the context of BehavePlus, the fire-behavior-simulator Javascript package includes:

- **Surface Module**
  - calculates surface fire spread rate, spread distance, fireline intensity, flame length, scorch height, heat per unit area, direction of maximum spread, and hundreds of other intermediate fuel and fire variables
  - may use either standard fuel models, or entry of custom fuel model properties
  - includes the 13 'original' static standard fuel models (Albini, Rothermel 1972, Anderson) and the 40 static and dynamic fuelmodels developed by Scott & Burgans
  - may use dynamic chaparral fuel models (Rothermel and Philpot, 1973)
  - may use dynamic palmetto-gallberry fuel models (Hough and Albini, 1978)
  - may use dynamic western aspen fuel modles (Brown and Simmerman, 1986)
  - may use either a single fuel model, or two fuel models to produce weighted fire behavior results
  - the two-fuel model option may mix standard fuel models with the dynamic chapparal, palmetto-gallberry, and/or western aspen fuel models [not available in BehavePlus]
  - wind speed adjustment factor may be input or calculated
  - wind speed may be specified at midflame height, 20-ft, or 10-m
  - cured herb fraction may be input or estimated
  - fuel moisture may be input for dea/live category, or for individual fuel classes
  - includes the BehavePlus SCORCH capability

- **Size (Fire Ellipse) Module**
  - calculates elliptical fire length-to-width ratio, length, width, perimeter, and size
  - calculates fire spread rate, spread distance, fireline intensity, flame length, scorch height, and tree mortality at the fire ellipse head, back, flank, or any other vector from either the point of ignition within the ellipse or the ellipse center
  - fire ellipse (SIZE) inputs (spread rate, spread direction, length-to-width ratio) may be entred directly or linked to Surface Module variables

- **Crown Module**
  - calculates Rothermel's (1991) original active crown fire spread rate, surface-to-crown transition probability, crown fireline intensity, crown fire flame length, crown fire heat per unit area, crown fire type (surface fire only, passive crown fire, or active crown fire), and whether the crown fire is wind-driven or plume-dominated
  - calculates Scott & Reinhardt's (2001) extensions to determine critical surface-to-crown initiation conditions, active crown fire ratio, crown fraction burned, crowning index, and a graduated crown fire spread rate between Rothermel's *surface fire* and *active crown* fire states. [New to v6]
  - crown fire inputs may be entered directly or linked to Surface Module variables

- **Spotting Module**
  - calculates firebrand height, drift, and spotting distance from
    - a wind-driven surface fire (may be linked to Surface Module variables)
    - a burning pile
    - torching trees
    - a crown fire (may be linked to Crown Module variables) [New to v6]
  - calculates spotting distances over flat andr mountaineous terrain accounting for firebrand source location (ridgetop, valley bottom, leeward, windward) and elevational difference

- **Tree Mortality**
  - Fire-induced tree mortality for many common US species as described by First Order Fire Effects, (FOFEM version 6)
  - Tree Mortality inputs may be entered directly or linked to the Fire Ellipse (SIZE) or Surface Fire Modules

- **Ignition Probability**
  - calculates the probability of a surface fire ignition resulting from either a surface fire firebrand or a lightning discharge (Latham)

- **Fire Containment**
  - The BehavePlus CONTAIN Module is not yet implemented.

---

##  ![](favicon.png) Basic Usage

--

##  ![](favicon.png) Example Use with Node.js

--

##  ![](favicon.png) Live Web Browser Examples

---

##  ![](favicon.png) Configuration

---

##  ![](favicon.png) Design and Implementation

---

##  ![](favicon.png) Performance and Tests

---

##  ![](favicon.png) Author



