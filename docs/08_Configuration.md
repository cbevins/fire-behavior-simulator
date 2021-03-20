#  ![](favicon.png) Configuration

| Prev: [07 Live Web Browser Examples](./07_LiveWebBrowserExamples.md) | Next: [09 Modules and Linkages](./09_ModuleLinkages.md) | [Table of Contents](../README.md) |

---

- cured herb options = ['input', 'estimated']
- effective wind speed limit options
- fire intensity options = ['firelineIntensity', 'flameLength']
- fire vector options
- fire weighting options
- fuel moisture options = ['individual', 'liveCategory', 'category']
- length-to-width options = ['input', 'estimated']
- primary fuel options = []
- secondary fuel options = []
- chaparral fuel options = []
- slope options = ['ratio', 'degrees', 'map']
- wind speed options = ['midflame', 'at20ft', 'at10m']
- wind speed adjustment options = ['input', 'fuelDepth', 'fuelKey']

#1 Surface Fire with Surface Spotting, Crown Fire (S&R), Crown Spotting, Fire Ellipse, Scorch Height, Tree Mortality, Fire Containment
  - disabled: none
  - input primary fuel options
  - input secondary fuel options
  - input cured herb options
  - input fuel moisture options
  - input slope options
  - wind speed options
  - wind speed adjustment options

#2  Stand-alone Crown Fire with Crown Fire Spotting (omits Scott & Reinhardt)
  - disabled: Surface Fire, Fire Ellipse, Tree Mortality
  - input spread rate at head
  - input fire intensity option at head

#3 Stand-alone Fire Ellipse with Surface Spotting, Scorch Height, Tree Mortality, Containment, Crown Fire, Crown Fire Spotting
  - disabled Surface Fire
  - input length-to-width ratio option
  - input spread rate at head
  - input fire intensity option at head
  - input direction of maximum spread (?)

#4 Stand-alone Scorch Height with Tree Mortality
  - input fire intensity option
  - wind speed option
  - wind speed adjustment option
  - input air temperature

#5 Stand-alone Tree Mortality
  - input scorch height
  - input tree species

#6 Stand-alone Fire Containment
  - input length-to-width option
  - input head fire spread rate
  - input fire intenbsity option (to estimate crew hazard)
  - input containment resources

#7 Stand-alone Spotting
  - input surface fire parameters
  - input crown fire parameters
  - input pile parameters
  - input torching tree parameters

#8 Ignition Probability (always stand-alone)

---

| Prev: [07 Live Web Browser Examples](./07_LiveWebBrowserExamples.md) | Next: [09 Modules and Linkages](./09_ModuleLinkages.md) | [Table of Contents](../README.md) |
