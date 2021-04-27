#  ![](favicon.png) 13 cbevins/fire-behavior-simulator Release Notes

| Prev: [12 Author](./12_Author.md) | Next: [14 Variable Names](./14_VariableNames.md) | [Table of Contents](../README.md) |

---

## 0.7.0 April 27, 2021

- Added **fire-behavior-models/TemperatureHumidity.js** to support dead fuel moisture estimates using Fosberg's tables.
- Docs have been updated to reflect added configurations and variables.
- Test coverage is at:
  - statements: 2022 / 2030 (99.61%)
  - branches: 877 / 884 (99.21%)
  - functions 824 / 825 (99.88%)
  - lines: 1929 / 1935 (99.69%)

---

## 0.6.0 April 12, 2021

- Added **fire-behavior-models/FuelMoisture.js**, which includes Fosberg's dead fuel moisture tables.

---

## 0.5.0 April 8, 2021

- This release updates all the documentation.

---

## 0.4.0 Beta

While this is the initial release of the *fire-behavior-simulator* package, it is the next evolution of the experimental *behaveplus-core* and *behaveplus-radical* packages.  It has therefore undergone considerable regression and unit testing, validation testing against *BehavePlus* outputs, and has been used to develop several Node.js and web browser applications.

This release includes all the BehavePlus modeling capabilities with the following exceptions:
 - the fire containment module is currently under development as a separate package and will not not included in the *fire-behavior-simulator*, and
 - the 'expected value' method of estimating spread rate through 2 fuels is not implemented.

---

| Prev: [12 Author](./12_Author.md) | Next: [14 Variable Names](./14_VariableNames.md) | [Table of Contents](../README.md) |
