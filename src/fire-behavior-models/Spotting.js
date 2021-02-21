/**
 * @file Exported WFSP equations for spotting distance from a burning pile,
 * torching trees, and surface fire as implemented by BehavePlus V6.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins
 * @license MIT
 */

// Spot distance terrain location parameters
export const Location = {
  midslopeWindward: { factor: 0, label: 'Midslope, Windward' },
  valleyBottom: { factor: 1, label: 'Valley Bottom' },
  midslopeLeeward: { factor: 2, label: 'Midslope, Leeward' },
  ridgeTop: { factor: 3, label: 'Ridge Top' }
}

export const locations = () => Object.keys(Location)

/**
 * Torching tree spotting distance supported species parameters
 *
 * The primary key is the 4-5 character FOFEM5 genus-species code.
 * The tree species properties are:
 * - common: common name,
 * - scientific: scientific name,
 * - height: flame height computation parameter,
 * - duration: flame duration computation parameter,
 */
export const TorchingTreeSpecies = [
  'ABBA',
  'ABGR',
  'ABLA',
  'PICO',
  'PIEC2',
  'PIEL',
  'PIEN',
  'PIMO3',
  'PIPA2',
  'PIPO',
  'PISE',
  'PITA',
  'PSME',
  'TSHE',
  'LAOC',
  'THPL'
]

export const TorchingSteadyFlame = {
  ABBA: {
    common: 'balsam fir',
    scientific: 'Abies balsamea',
    height: [16.5, 0.515],
    duration: [10.7, -0.278]
  },
  ABGR: {
    common: 'grand fir',
    scientific: 'Abies grandis',
    height: [16.5, 0.515],
    duration: [10.7, -0.278]
  },
  ABLA: {
    common: 'subalpine fir',
    scientific: 'Abies lasiocarpa',
    height: [15.7, 0.451],
    duration: [10.7, -0.278]
  },
  PICO: {
    common: 'lodgepole pine',
    scientific: 'Pinus contorta',
    height: [12.9, 0.453],
    duration: [12.6, -0.256]
  },
  PIEC2: {
    common: 'shortleaf pine',
    scientific: 'Pinus echinata',
    height: [2.71, 1.0],
    duration: [7.91, -0.344]
  },
  PIEL: {
    common: 'slash pine',
    scientific: 'Pinus elliottii',
    height: [2.71, 1.0],
    duration: [11.9, -0.389]
  },
  PIEN: {
    common: 'Engelmann spruce',
    scientific: 'Picea engelmannii',
    height: [15.7, 0.451],
    duration: [12.6, -0.256]
  },
  PIMO3: {
    common: 'western white pine',
    scientific: 'Pinus monticola',
    height: [12.9, 0.453],
    duration: [10.7, -0.278]
  },
  PIPA2: {
    common: 'longleaf pine',
    scientific: 'Pinus palustrus',
    height: [2.71, 1.0],
    duration: [11.9, -0.389]
  },
  PIPO: {
    common: 'ponderosa pine',
    scientific: 'Pinus ponderosa',
    height: [12.9, 0.453],
    duration: [12.6, -0.256]
  },
  PISE: {
    common: 'pond pine',
    scientific: 'Pinus serotina',
    height: [2.71, 1.0],
    duration: [7.91, -0.344]
  },
  PITA: {
    common: 'loblolly pine',
    scientific: 'Pinus taeda',
    height: [2.71, 1.0],
    duration: [13.5, -0.544]
  },
  PSME: {
    common: 'Douglas-fir',
    scientific: 'Pseudotsuga menziesii',
    height: [15.7, 0.451],
    duration: [10.7, -0.278]
  },
  TSHE: {
    common: 'western hemlock',
    scientific: 'Tsuga heterophylla',
    height: [15.7, 0.451],
    duration: [6.3, -0.249]
  },
  // This is an estimated guess,
  // using the height parms used by PICO, PIPO, and PIMO3
  // and the duration parms used by TSHE
  LAOC: {
    common: 'western larch',
    scientific: '"Larix occidentalis (guess)',
    height: [12.9, 0.453],
    duration: [6.3, -0.249]
  },
  // This is an estimated guess,
  // using the height parms used by ABLA, PIEN, PSME, and TSHE
  // and the duration parms used by PICO, PIEN, and PIPO
  THPL: {
    scientific: 'Thuja plicata',
    common: 'western red cedar (guess)',
    height: [15.7, 0.451],
    duration: [12.6, -0.256]
  }
}

/**
 * Adjusts down-wind canopy height based upon down-wind canopy cover
 * Added in BP6 by Issue #028FAH - Downwind Canopy Open/Closed
 *
 * @param {real} downWindCoverHt (ft+1)
 * @param {real} downWindCanopyIsOpen TRUE if down-wind canopy is open
 */
export function appliedDownWindCoverHeight (downWindCoverHt, downWindCanopyIsOpen) {
  return downWindCanopyIsOpen ? 0.5 * downWindCoverHt : downWindCoverHt
}

/**
 * \brief Calculates maximum firebrand height (ft+1)
 * from a burning pile
 *
 * \param flameHt Flame height (ft+1) from the burning pile
 * \return Maximum firebrand height (ft+1) from a burning pile
 */
export function burningPileFirebrandHeight (flameHt) {
  return Math.max(0.0, 12.2 * flameHt)
}

/**
 * \brief Calculates minimum value of cover height
 * used in calculation of flat terrain spotting distance
 * using logarithmic variation with height.
 *
 * Used for burning pile and surface fire spotting distances.
 *
 * \param firebrandHt Maximum firebrand height (ft+1)
 * \param appliedDownWindCoverHeight Adjusted down-wind canopy height
 *   based upon down-wind canopy cover (ft+1)
 * \return Minimum value of cover ht (ft+1) used in calculation
 * of flat terrain spotting distance.
 */
export function criticalCoverHeight (firebrandHt, appliedDownWindCoverHeight) {
  const criticalHt =
    firebrandHt > 0 ? 2.2 * Math.pow(firebrandHt, 0.337) - 4 : 0
  return Math.max(appliedDownWindCoverHeight, criticalHt)
}

/**
 * \brief Calculates maximum spotting distance over flat terrain
 * for burning piles, torching trees, and surface fires.
 *
 * \param firebrandHt Maximum firebrand height (ft+1)
 * \param criticalCoverHeight Downwind tree/vegetation cover height (ft)
 * \param u20 Wind speed at 20 ft (ft+1 min-1)
 *
 * \return Maximum spotting distance (ft+1) over flat terrain
 */
export function distanceFlatTerrain (firebrandHt, criticalCoverHeight, u20) {
  // Wind speed must be converted to mi/h
  return (criticalCoverHeight <= 0 || firebrandHt <= 0) ? 0
    : 5280 * 0.000718 * (u20 / 88) * Math.sqrt(criticalCoverHeight) *
      (0.362 + (Math.sqrt(firebrandHt / criticalCoverHeight) / 2) *
        Math.log(firebrandHt / criticalCoverHeight))
}

export function distanceFlatTerrainWithDrift (flatDistance, drift) {
  return flatDistance + drift
}

/*
 * \brief Calculates maximum spotting distance adjusted for mountain terrain.
 *
 * \param flatDistFt Maximum spotting distance over flat terrain (ft+1).
 * \param locationKey location property name
 *  ('midslopeWindward', 'valleyBottom', 'midslopeLeeward', 'ridgetop').
 * \param rvDist Horizontal distance from ridge top to valley bottom (ft+1).
 * \param rvElev Vertical distance from ridge top to valley bottom (ft+1).
 *
 * \return Maximum spotting distance (ft+1) over mountainous terrain
 */
export function distanceMountainTerrain (
  flatDistFt,
  locationKey,
  rvDistFt,
  rvElev
) {
  const flatDist = flatDistFt / 5280
  const rvDist = rvDistFt / 5280
  let mtnDist = flatDist
  if (rvElev > 0 && rvDist > 0) {
    const a1 = flatDist / rvDist
    const b1 = rvElev / (10 * Math.PI) / 1000
    const factor = Location[locationKey].factor
    let x = a1
    for (let i = 0; i < 6; i++) {
      x =
        a1 -
        b1 *
          (Math.cos(Math.PI * x - (factor * Math.PI) / 2) -
            Math.cos((factor * Math.PI) / 2))
    }
    mtnDist = x * rvDist
  }
  return mtnDist * 5280
}

/**
 * \brief Calculates critical down-wind cover height (ft+1)
 * for a surface fire.
 *
 * \param firebrandHt Maximum firebrand height (ft+1)
 * \param appliedDownWindCoverHeight Adjusted down-wind canopy height
 *   based upon down-wind canopy cover (ft+1)
 * \return Critical down-wind cover height (ft+1)
 */
export function surfaceFirecriticalCoverHeight (
  firebrandHt,
  appliedDownWindCoverHeight
) {
  return criticalCoverHeight(firebrandHt, appliedDownWindCoverHeight)
}

/**
 * Calculates surface fire firebrand down-wind drift distance (ft+1).
 * @param {real} firebrandHt  Firebrand loft hight (ft+1)
 * @param {real} u20 Wind speed at 20-ft (ft+1 min-1).
 */
export function surfaceFireFirebrandDrift (firebrandHt, u20) {
  return firebrandHt <= 0
    ? 0
    : 5280 * 0.000278 * (u20 / 88) * Math.pow(firebrandHt, 0.643)
}

/**
 * \brief Calculates maximum firebrand height (ft+1) from a surface fire
 *
 * \param firelineIntensity Surface fireline intensity (btu+1 ft-1 s-1)
 * \param u20 Wind speed at 20-ft (ft+1 min-1)
 *
 * \return Maximum firebrand height (ft+1)
 */
export function surfaceFireFirebrandHeight (firelineIntensity, u20) {
  if (u20 > 0 && firelineIntensity > 0) {
    // f is a function relating thermal energy to windspeed.
    const f = 322 * Math.pow(0.474 * (u20 / 88), -1.01)

    // Initial firebrand height (ft).
    return 1.055 * Math.sqrt(f * firelineIntensity)
  }
  return 0
}

/**
 * Torching trees firebrand ht (ft+1)
 *
 * \param treeHt Tree height (ft+1) of the torching trees
 * \param flameHt Steady flame height (ft+1) of the toching trees
 *  as calculated by torchingTreesSteadyFlameHeight()
 * \param flameDur Steady flame duration (min+1) of the toching trees
 *  as calculated by torchingTreesSteadyFlameDuration()
 *
 * \return Maximum firebrand height (ft+1)
 */
export function torchingTreesFirebrandHeight (treeHt, flameHt, flameDur) {
  const parms = [
    { a: 4.24, b: 0.332 },
    { a: 3.64, b: 0.391 },
    { a: 2.78, b: 0.418 },
    { a: 4.7, b: 0.0 }
  ]
  const ratio = flameHt <= 0 ? 0 : treeHt / flameHt
  let idx = 3
  if (ratio >= 1) {
    idx = 0
  } else if (ratio >= 0.5) {
    idx = 1
  } else if (flameDur < 3.5) {
    idx = 2
  }
  return (
    parms[idx].a * Math.pow(flameDur, parms[idx].b) * flameHt + 0.5 * treeHt
  )
}

/**
 * \brief Calculates steady state flame duration (min+1) of the toching trees
 *
 * \param species Species label of the torching trees
 * \param dbh Dbh of the torching trees (in+1)
 * \param trees Number of torching trees
 *
 * \return Flame duration (min+1) of torching trees
 */
export function torchingTreesSteadyFlameDuration (species, dbh, trees) {
  return (
    TorchingSteadyFlame[species].duration[0] *
    Math.pow(dbh, TorchingSteadyFlame[species].duration[1]) *
    Math.pow(trees, -0.2)
  )
}

/**
 * \brief Calculates steady state flame height (ft+1) of the torching trees
 *
 * \param species Species label of the torching trees
 * \param dbh Dbh (in+1) of the torching trees
 * \param trees Number of torching trees
 * \return Steady state flame height (ft+1) of the torching trees
 */
export function torchingTreesSteadyFlameHeight (species, dbh, trees) {
  return (
    TorchingSteadyFlame[species].height[0] *
    Math.pow(dbh, TorchingSteadyFlame[species].height[1]) *
    Math.pow(trees, 0.4)
  )
}
