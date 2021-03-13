/**
 * @file Confgis.js defines the fire simulator Config Variants
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Config } from '../variant/index.js'

/**
 * Declares the specialized BehavePlus Config Variants.
 *
 * Note that classes derived from Option() and Config() require an array of options argument.
 */

// Configuration options
export class ConfigModuleActive extends Config {
  constructor () {
    super('ConfigModuleActive', '', ['active', 'inactive'])
  }
}

export class ConfigLinkCrownFire extends Config {
  constructor () {
    super('ConfigLinkCrownFire',
      'This crown spotting module inputs are', [
        ['linkedToCrownFire', 'linked to the Crown Fire Module outputs'],
        ['standAlone', 'entered directly (stand-alone mode)']
      ])
  }
}

export class ConfigLinkFireEllipse extends Config {
  constructor () {
    super('ConfigLinkFireEllipse',
      'The fire containment module inputs are', [
        ['linkedToFireEllipse', 'linked to fire ellipse module outputs'],
        ['standAlone', 'entered separately (stand-alone)']
      ])
  }
}

export class ConfigLinkScorchHeight extends Config {
  constructor () {
    super('ConfigLinkScorchHeight',
      'The tree mortality module inputs (scorch height) are:', [
        ['linkedToScorchHeight', 'linked to the scorch surface or fire ellipse outputs'],
        ['standAlone', 'entered separately (stand-alone mode)']
      ])
  }
}

export class ConfigLinkSurfaceFire extends Config {
  constructor () {
    super('ConfigLinkSurfaceFire',
      'This module\'s inputs are', [
        ['linkedToSurfaceFire', 'linked to Surface Fire outputs'],
        ['standAlone', 'entered directly (stand-alone mode)']
      ])
  }
}

// bp6 #11 Surface > Input  > Chaparral > Total load is: [specified, est]
export class ConfigChaparralTotalLoad extends Config {
  constructor () {
    super('ConfigChaparralTotalLoad',
      'When required as input, chaparral total fuel load is', [
        ['input', 'entered directly'],
        ['estimated', 'estimated from chaparral depth']])
  }
}

// bp6 #2 - Surface > Input  > Moisture > Herb Curing: [est, inp]
export class ConfigCuredHerbFraction extends Config {
  constructor () {
    super('ConfigCuredHerbFraction',
      'The cured herb fraction for BehavePlus fuel models is', [
        ['input', 'entered directly'],
        ['estimated', 'estimated from live fuel moisture']])
  }
}

// bp6 #1 Surface > Input  > Fuel:
// [key, std, exp, harm, arith, pg, wa, ch]
// Bpx splits bp6 config #1 into two configs; primary.fuel and secondary.fuel
export class ConfigPrimaryFuels extends Config {
  constructor () {
    super('ConfigPrimaryFuels',
      'Primary surface fuels are specified by entering', [
        ['catalog', 'a fuel model catalog key'],
        ['behave', 'standard BehavePlus fuel parameters'],
        ['chaparral', 'chaparral dynamic fuel parameters'],
        ['palmettoGallberry', 'palmetto-gallberry dynamic fuel parameters'],
        ['westernAspen', 'western aspen dynamic fuel parameters']])
  }
}

// bp6 #1 Surface > Input  > Fuel:
// [key, std, exp, harm, arith, pg, wa, ch]
// Bpx splits bp6 config #1 into two configs; primary.fuel and secondary.fuel
export class ConfigSecondaryFuels extends Config {
  constructor () {
    super('ConfigSecondaryFuels',
      'Secondary surface fuels are specified by entering', [
        ['none', 'there are no secondary fuels'],
        ['catalog', 'a fuel model catalog key'],
        ['behave', 'standard BehavePlus fuel parameters'],
        ['chaparral', 'chaparral dynamic fuel parameters'],
        ['palmettoGallberry', 'palmetto-gallberry dynamic fuel parameters'],
        ['westernAspen', 'western aspen dynamic fuel parameters']])
  }
}

// bp6 #3 - Surface > Input  > Moisture > Fuel Moisture:
// [ind, cat, mixed, scen]
export class ConfigMoistureContents extends Config {
  constructor () {
    super('ConfigMoistureContents',
      'When required as input, fuel moisture is entered for', [
        ['individual', 'the 3 dead and 2 live fuel moisture classes'],
        ['liveCategory', 'the 3 dead moisture classes and a singe live category moisture'],
        ['category', 'the dead and live category moistures only']])
    // ['catalog' // 'a fuel moisture catalog key']
  }
}

// bp6 #4 Surface > Input  > Wind Speed > Entered at:
// [mid, 20-wafInp, 20-wafEst, 10-wafInp, 10-wafEst]
// Bpx slipts Bp6 config #4 into 2 configs, fuel.waf and wind.speed
export class ConfigWindSpeedAdjustmentFactor extends Config {
  constructor () {
    super('ConfigWindSpeedAdjustmentFactor',
      'When required as input, midflame wind speed adjustment factor is', [
        ['input', 'entered directly'],
        ['estimated', 'estimated from canopy and fuel parameters']])
  }
}

// bp6 #7 Surface > Input  > Slope > Slope is [percent, degrees]
// bp6 #8 Surface > Input  > Slope > Slope is [input, map]
// BPX combined Bp6 configs #7 and #8
export class ConfigSlopeSteepness extends Config {
  constructor () {
    super('ConfigSlopeSteepness',
      'When required as input, slope steepness is', [
        ['ratio', 'entered as ratio of vertical rise to horizontal reach'],
        ['degrees', 'entered as degrees of angle above the horizontal plane'],
        ['map', 'estimated from map measurements']])
  }
}

// bp6 #5 Surface > Input  > Wind Speed > Wind is:
// [always upslope, specified]
export class ConfigWindDirection extends Config {
  constructor () {
    super('ConfigWindDirection',
      'When required as input, wind direction is', [
        ['sourceFromNorth', 'the direction FROM which the wind is blowing (degrees from NORTH)'],
        ['headingFromUpslope', 'the direcion TOWARDS which the wind is blowing (degrees from UPSLOPE)'],
        ['upslope', 'assumed to be blowing upslope']], 1)
  }
}

// bp6 #4 Surface > Input  > Wind Speed > Entered at:
// [mid, 20-wafInp, 20-wafEst, 10-wafInp, 10-wafEst]
// Bpx slipts Bp6 config #4 into 2 configs, fuel.waf and wind.speed
export class ConfigWindSpeed extends Config {
  constructor () {
    super('ConfigWindSpeed',
      'When required as an input, wind speed is entered for', [
        ['at10m', '10-m height'],
        ['at20ft', '20-ft height'],
        ['atMidflame', 'midflame height']], 1)
  }
}

export class ConfigFirelineIntensity extends Config {
  constructor () {
    super('ConfigFirelineIntensity',
      'When required as an input, fireline intensity is', [
        ['firelineIntensity', 'entered directly'],
        ['flameLength', 'estimated from the flame length input']])
  }
}

export class ConfigFireLengthToWidthRatio extends Config {
  constructor () {
    super('ConfigFireLengthToWidthRatio',
      'When required as an input, fire ellipse length-to-width ratio is', [
        ['lengthToWidthRatio', 'entered directly'],
        ['effectiveWindSpeed', 'estimated from the effective wind speed input']])
  }
}

// bp6 #6 Surface > Input  > Wind Speed > Impose max wind speed limit?
export class ConfigEffectiveWindSpeedLimit extends Config {
  constructor () {
    super('ConfigEffectiveWindSpeedLimit',
      'The fire spread rate effective wind speed limit is', [
        ['applied', 'applied'],
        ['ignored', 'ignored']])
  }
}

// New to BPX
export class ConfigFireWeightingMethod extends Config {
  constructor () {
    super('ConfigFireWeightingMethod',
      'Weighted fire spread rate of 2 surface fuel types is based on', [
        ['arithmetic', 'arithmetic mean spread rate'],
        // ['expected', 'expected value spread rate'],
        ['harmonic', 'harmonic mean spread rate']], 1)
  }
}

// bp6 #10 Surface > Input  > Directions > Wind & Fire Dir: [wrt upslope, wrt north]
export class ConfigFireVector extends Config {
  constructor () {
    super('ConfigFireVector',
      'When required as input, fire vector direction inputs are', [
        ['fromHead', 'degrees clockwise from direction of maximum spread'],
        ['fromUpslope', 'degrees clockwise from upslope'],
        ['fromNorth', 'degrees clockwise from north']])
  }
}

// bp6 #9 Surface > Input  > Directions > Spread is [head, back, flank, psi, beta]
// BPX implements all spread direction options at any time instead of selecting just one

// bp6 #12 - Crown > Input  > Use [roth, s&r]
// BPX - May not be necessary: S&R is applied only if passive ouputs requested
// export class ConfigCrownFireMethod extends Config {
//   constructor () {
//     super('ConfigCrownFireMethod',
//       'Crown fire is estimated via', [
//         ['rothermel', 'Rothermel'],
//         ['scottReinhardt', 'Scott and Reinhardt (wind must blow upslope)']], 1)
//   }
// }

// bp6 #13 - Crown > Input  > FLI [fl, fli]
// BPX- Required only in STANDALONE mode
// export class ConfigCrownFli extends Config {
//   constructor () {
//     super('ConfigCrownFireFli',
//       'The Crown Module is', [
//         ['surface', 'linked to the Surface Module'],
//         ['flameLength', 'run stand-alone using flame length input'],
//         ['firelineIntensity', 'run stand-alone using fireline intensity input']])
//   }
// }

// bp6 # 14 - Contain > Input  > resources [single, multiple]
// export class ConfigContainResources extends Config {
//   constructor () {
//     super('ConfigContainResources',
//       'Contain Module allows', [
//         ['singleResource', 'a single firefighting resource'],
//         ['multipleResources', 'multiple firefighting resources']], 1)
//   }
// }
