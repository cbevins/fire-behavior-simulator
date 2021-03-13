/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import * as DagJest from './matchers.js'
import { Spotting, SurfaceFire } from '../index.js'

const value = DagJest.value
const sig = DagJest.sig
expect.extend({ sig, value })

const booleans = [true, false] //
const locations = [
  'ridgeTop',
  'midslopeWindward',
  'valleyBottom',
  'midslopeLeeward'
]

test('1: Burning pile', () => {
  const coverHt = 100 // ft
  const u20 = 20 * 88 // ft/min
  const flameHt = 10 // ft
  const rvElev = 1000 // ft
  const rvDist = 5280 // mi

  const firebrandHt = Spotting.burningPileFirebrandHeight(flameHt)
  expect(firebrandHt).sig(122, 6, `burningPileFirebrandHeight(${flameHt})`)

  const expectAppliedCoverHt = [50, 100]
  const expectFlatDist = [567.59047, 357.736922]
  const expectMtnDist = [
    [629.03564, 577.412057, 516.727956, 558.399174],
    [397.076131, 361.612138, 325.399883, 354.022081]
  ]

  // open, closed downwind canopy
  booleans.forEach((openCanopy, idx) => {
    const appliedCoverHt = Spotting.appliedDownWindCoverHeight(coverHt, openCanopy)
    expect(appliedCoverHt).sig(expectAppliedCoverHt[idx], 6,
      `appliedDownWindCoverHeight(${coverHt}, ${openCanopy})`)

    const criticalCoverHeight = Spotting.surfaceFirecriticalCoverHeight(
      firebrandHt, appliedCoverHt)
    const flatDist = Spotting.distanceFlatTerrain(
      firebrandHt, criticalCoverHeight, u20)
    expect(flatDist).sig(expectFlatDist[idx], 6,
      `distanceFlatTerrain(${firebrandHt}, ${criticalCoverHeight}, ${u20})`)

    locations.forEach((location, idx2) => {
      const mtnDist = Spotting.distanceMountainTerrain(
        flatDist, location, rvDist, rvElev)
      expect(mtnDist).sig(expectMtnDist[idx][idx2], 6,
        `distanceMountainTerrain(${flatDist}, ${location}, ${rvDist}, ${rvElev})`)
    })
  })
})

test('2: Surface fire', () => {
  const coverHt = 100 // ft
  const u20 = 20 * 88 // ft/min
  const flameLength = 10 // ft
  const rvElev = 1000 // ft
  const rvDist = 5280 // ft

  const fli = SurfaceFire.firelineIntensityFromFlameLength(flameLength)

  const firebrandHt = Spotting.surfaceFireFirebrandHeight(fli, u20)
  expect(firebrandHt).sig(176.925987, 8, `surfaceFireFirebrandHeight(${fli}, ${u20})`)

  const firebrandDrift = Spotting.surfaceFireFirebrandDrift(firebrandHt, u20)
  expect(firebrandDrift).sig(818.537781, 6, `surfaceFireFirebrandDrift(${firebrandHt}, ${u20})`)

  const expectAppliedCoverHt = [50, 100]
  const expectFlatDist = [1649.855439, 1380.720097]
  const expectMtnDist = [
    [1797.232, 1731.426988, 1517.876731, 1580.831658],
    [1512.356295, 1438.622775, 1265.773911, 1330.73289]
  ]

  // open, closed downwind canopy
  booleans.forEach((openCanopy, idx) => {
    const appliedCoverHt = Spotting.appliedDownWindCoverHeight(coverHt, openCanopy)
    expect(appliedCoverHt).sig(expectAppliedCoverHt[idx], 6,
      `appliedDownWindCoverHeight(${coverHt}, ${openCanopy})`)

    const criticalCoverHeight = Spotting.surfaceFirecriticalCoverHeight(
      firebrandHt, appliedCoverHt)

    const flatDist = Spotting.distanceFlatTerrain(
      firebrandHt, criticalCoverHeight, u20)
    const flatDistWithDrift = Spotting.distanceFlatTerrainWithDrift(
      flatDist, firebrandDrift)
    expect(flatDistWithDrift).sig(expectFlatDist[idx], 6,
      `distanceFlatTerrainWithDrift[${flatDist}, ${firebrandDrift})`)

    locations.forEach((location, idx2) => {
      const mtnDist = Spotting.distanceMountainTerrain(
        flatDistWithDrift, location, rvDist, rvElev)
      expect(mtnDist).sig(expectMtnDist[idx][idx2], 6,
        `distanceMountainTerrain(${flatDist}, ${location}, ${rvDist}, ${rvElev})`)
    })
  })
})

test('3: Torching trees', () => {
  const coverHt = 100 // ft down wind cover height
  const treeHt = 100 // ft torching tree height
  const dbh = 40 // in torching trees dbh
  const trees = 5 // number of torching trees
  const species = 'PIPO'
  const u20 = 20 * 88 // ft/min
  const rvElev = 1000 // ft
  const rvDist = 5280 // mi

  const flameDur = Spotting.torchingTreesSteadyFlameDuration(
    species, dbh, trees)
  expect(flameDur).sig(3.551806, 6, 'torchingTreesSteadyFlameDuration')

  const flameHt = Spotting.torchingTreesSteadyFlameHeight(species, dbh, trees)
  expect(flameHt).sig(130.590291, 6, 'torchingTreesSteadyFlameHeight')

  const firebrandHt = Spotting.torchingTreesFirebrandHeight(
    treeHt, flameHt, flameDur)
  expect(firebrandHt).sig(830.257413, 6, 'torchingTreesFirebrandHeight')

  const expectAppliedCoverHt = [50, 100]
  const expectFlatDist = [3263.291015, 2586.517357]
  const expectMtnDist = [
    [3413.855366, 3514.95506, 3101.520443, 3054.219688],
    [2754.197157, 2767.302941, 2419.889027, 2438.546989]
  ]

  // open, closed downwind canopy
  booleans.forEach((openCanopy, idx) => {
    const appliedCoverHt = Spotting.appliedDownWindCoverHeight(coverHt, openCanopy)
    expect(appliedCoverHt).sig(expectAppliedCoverHt[idx], 6,
      `appliedDownWindCoverHeight(${coverHt}, ${openCanopy})`)

    const criticalCoverHeight = Spotting.surfaceFirecriticalCoverHeight(
      firebrandHt, appliedCoverHt)

    const flatDist = Spotting.distanceFlatTerrain(
      firebrandHt, criticalCoverHeight, u20)
    expect(flatDist).sig(expectFlatDist[idx], 6,
      `distanceFlatTerrain(${firebrandHt}, ${criticalCoverHeight}, ${u20})`)

    locations.forEach((location, idx2) => {
      const mtnDist = Spotting.distanceMountainTerrain(
        flatDist,
        location,
        rvDist,
        rvElev
      )
      expect(mtnDist).sig(expectMtnDist[idx][idx2], 6,
        `distanceMountainTerrain(${flatDist}, ${location}, ${rvDist}, ${rvElev})`)
    })
  })
})

test('4: Torching tree species', () => {
  const coverHt = 100 // ft down wind cover height
  const treeHt = 100 // ft torching tree height
  const dbh = 40 // in torching trees dbh
  const trees = 5 // number of torching trees
  const u20 = 20 * 88 // ft/min
  const rvElev = 1000 // ft
  const rvDist = 5280 // mi
  const openCanopy = true
  const location = 'ridgeTop'

  const expected = {
    ABBA: {
      mtn: 3752.199237,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    ABGR: {
      mtn: 3752.199237,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    ABLA: { mtn: 3641.01073, flat: 0, flameDur: 0, flameHt: 0, firebrandHt: 0 },
    PICO: {
      mtn: 3413.855366,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PIEC2: {
      mtn: 3166.589516,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PIEL: {
      mtn: 3397.944877,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PIEN: { mtn: 3887.25522, flat: 0, flameDur: 0, flameHt: 0, firebrandHt: 0 },
    PIMO3: {
      mtn: 3194.211025,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PIPA2: {
      mtn: 3397.944877,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PIPO: {
      mtn: 3413.855366,
      flat: 3263.291015,
      flameDur: 3.551806,
      flameHt: 130.590291,
      firebrandHt: 830.257413
    },
    PISE: {
      mtn: 3166.589516,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PITA: {
      mtn: 2983.360899,
      flat: 0,
      flameDur: 0,
      flameHt: 0,
      firebrandHt: 0
    },
    PSME: { mtn: 3641.01073, flat: 0, flameDur: 0, flameHt: 0, firebrandHt: 0 },
    TSHE: { mtn: 3247.622235, flat: 0, flameDur: 0, flameHt: 0, firebrandHt: 0 }
  }
  const expectAppliedCoverHt = 50

  Object.keys(expected).forEach(species => {
    const flameDur = Spotting.torchingTreesSteadyFlameDuration(
      species, dbh, trees)
    // expect(approx(flameDur, expected[species].flameDur, 6)).toEqual(true)

    const flameHt = Spotting.torchingTreesSteadyFlameHeight(species, dbh, trees)
    // expect(approx(flameHt, expected[species].flameHt, 6)).toEqual(true)

    const firebrandHt = Spotting.torchingTreesFirebrandHeight(
      treeHt, flameHt, flameDur)
    // expect(approx(firebrandHt, expected[species].firebrandHt, 6)).toEqual(true)

    const appliedCoverHt = Spotting.appliedDownWindCoverHeight(coverHt, openCanopy)
    expect(appliedCoverHt).sig(expectAppliedCoverHt, 6,
      `appliedDownWindCoverHeight(${coverHt}, ${openCanopy})`)

    const criticalCoverHeight = Spotting.surfaceFirecriticalCoverHeight(
      firebrandHt, appliedCoverHt)

    const flatDist = Spotting.distanceFlatTerrain(
      firebrandHt, criticalCoverHeight, u20)
    // expect(approx(flatDist, expected[species].flat, 6)).toEqual(true)

    const mtnDist = Spotting.distanceMountainTerrain(
      flatDist, location, rvDist, rvElev)
    expect(mtnDist).sig(expected[species].mtn, 6,
      `distanceMountainTerrain(${flatDist}, ${location}, ${rvDist}, ${rvElev})`)
  })
})

test('5: Coverage', () => {
  expect(Spotting.locations()).toEqual([
    'midslopeWindward',
    'valleyBottom',
    'midslopeLeeward',
    'ridgeTop'
  ])

  const treeHt = 100
  const flameHt = 10
  const flameDur = 5
  const ht = 4.24 * Math.pow(flameDur, 0.332) * flameHt + 0.5 * treeHt
  expect(Spotting.torchingTreesFirebrandHeight(treeHt, flameHt, flameDur)).toEqual(ht)
})

test('6:Spotting.distanceMountainTerrain(flatDistFt, locationKey, rvDistFt, rvElev) edge cases', () => {
  const flatDistFt = 5280
  const locationKey = 'ridgetop'
  const rvDistFt = 0
  const rvElev = 0
  expect(Spotting.distanceMountainTerrain(flatDistFt, locationKey, rvDistFt, rvElev)).toEqual(flatDistFt)
  expect(Spotting.distanceMountainTerrain(flatDistFt, locationKey, 5280, 0)).toEqual(flatDistFt)
  expect(Spotting.distanceMountainTerrain(flatDistFt, locationKey, 5280, -1)).toEqual(flatDistFt)
  expect(Spotting.distanceMountainTerrain(flatDistFt, locationKey, 0, 5280)).toEqual(flatDistFt)
  expect(Spotting.distanceMountainTerrain(flatDistFt, locationKey, -1, 5280)).toEqual(flatDistFt)
})
