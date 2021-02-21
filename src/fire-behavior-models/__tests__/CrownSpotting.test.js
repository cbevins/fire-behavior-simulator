/* eslint-disable no-undef, no-unused-vars, no-prototype-builtins */
import * as DagJest from './matchers.js'
import { CrownSpotting } from '../index.js'

const sig = DagJest.sig
const value = DagJest.value
expect.extend({ value, sig })

const booleans = [true, false] //
const locations = [
  'ridgeTop',
  'midslopeWindward',
  'valleyBottom',
  'midslopeLeeward'
]

test('1: Flame length - Fireline Intensity - Flame Height', () => {
  // These are the crown flame LENGTH (m) and corresponding fire intensity (kW/m) inputs
  // used for validation tests against dist(), dist2a(), and BehavePlus6
  const crownFlameLength = [1, 10, 20, 30, 40, 50, 60] // m
  // Active crown fireline intensity
  const crownFireIntensity = [
    230.159,
    7278.267,
    20586.05,
    37818.99,
    58226.14,
    81373.5,
    106968.2
  ]

  crownFireIntensity.forEach((fliKwpm, idx) => {
    const fliBtu = fliKwpm / 3.46414
    const flFt = CrownSpotting.flameLengthThomas(fliBtu)
    const flM = flFt * 0.3048
    expect(flM).sig(crownFlameLength[idx], 5)
  })

  crownFlameLength.forEach((flM, idx) => {
    const flFt = flM / 0.3048
    const fliBtu = CrownSpotting.firelineIntensityThomas(flFt)
    const fliKwpm = fliBtu * 3.46414
    expect(fliKwpm).sig(crownFireIntensity[idx], 5)
  })

  expect(CrownSpotting.firebrandObjectPrototype()).toEqual({
    zdrop: 0,
    xdrop: 0,
    xdrift: 0,
    xspot: 0,
    layer: 0
  })

  expect(
    CrownSpotting.fireIntensityAlbini(
      /* flame= */ 5,
      /* utop= */ 5,
      /* htop= */ 10
    )
  ).toBeCloseTo(14333.3258, 1)
})

test('2: AlbiniDist comparison', () => {
  const anem = 6.096
  const diam = 1
  const htop = 80
  const uan = 10
  const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)

  const flM = 60
  const flFt = flM / 0.3048
  const fibtu = CrownSpotting.firelineIntensityThomas(flFt)
  const fikwpm = fibtu * 3.46414
  expect(fikwpm).sig(106968.2, 4)

  const [z, x, drift, spot, layer] = CrownSpotting.dist(
    htop,
    fikwpm,
    utop,
    diam
  )
  expect(layer).toEqual(94)
  expect(z).sig(1180.664, 5)
  expect(x).sig(957.056, 5)
  expect(drift).sig(1163.905, 4)
  expect(spot).sig(2120.962, 5)
})

test('3: DIST2a & BP6 - BP6 Canopy Ht Series', () => {
  const anem = 6.096
  const diam = 1
  const uan = 20
  const fl = 10
  const fikwpm = 3.46414 * CrownSpotting.firelineIntensityThomas(fl / 0.3048)
  expect(fikwpm).sig(7278.2672, 5)

  const layers = [2, 3, 7, 18, 46]
  const ht = [2.1491, 7.4769, 16.2727, 21.5769, 26.7008]
  const dist = [10.947, 36.3812, 90.89, 135.8976, 177.1389]
  ;[80, 60, 40, 20, 10].forEach((htop, idx) => {
    const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)
    const [z, x, drift, spot, layer] = CrownSpotting.dist(
      htop,
      fikwpm,
      utop,
      diam
    )
    expect(layer).toEqual(layers[idx])
    expect(z).sig(ht[idx], 3)
    expect(spot).sig(dist[idx], 5)
  })
})

test('4: DIST2a & BP6 - Wind Speed Series', () => {
  const anem = 6.096
  const diam = 1
  const htop = 80
  const fl = 60
  const fikwpm = 3.46414 * CrownSpotting.firelineIntensityThomas(fl / 0.3048)
  expect(fikwpm).sig(106968.246, 3)

  const layers = [94, 62, 34, 21, 11, 0]
  const ht = [1180.666, 415.6908, 114.3599, 49.90591, 15.98781, 0]
  const dist = [2120.959, 1860.937, 1119.942, 721.8561, 383.0779, 0]
  ;[10, 20, 40, 60, 100, 0].forEach((uan, idx) => {
    const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)
    const [z, x, drift, spot, layer] = CrownSpotting.dist(
      htop, fikwpm, utop, diam)
    expect(layer).toEqual(layers[idx])
    expect(spot).sig(dist[idx], 5)
    expect(z).sig(ht[idx], 4)
  })
})

test('5: DIST2a & BP6 - Flame Length Series', () => {
  const anem = 6.096
  const diam = 1
  const htop = 10
  const uan = 10
  const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)

  const flis = [
    230.159,
    7278.267,
    20586.05,
    37818.99,
    58226.14,
    81373.5,
    106968.2
  ]
  const layers = [0, 89, 224, 371, 529, 698, 876]
  const ht = [0, 100.1404, 295.8681, 541.0152, 822.4026, 1134.227, 1470.54]
  const dist = [0, 302.8342, 725.8957, 1131.922, 1521.261, 1898.83, 2264.084]
  ;[1, 10, 20, 30, 40, 50, 60].forEach((fl, idx) => {
    const fikwpm = 3.46414 * CrownSpotting.firelineIntensityThomas(fl / 0.3048)
    expect(fikwpm).sig(flis[idx], 5)

    const [z, x, drift, spot, layer] = CrownSpotting.dist(
      htop,
      fikwpm,
      utop,
      diam
    )
    expect(layer).toEqual(layers[idx])
    expect(spot).sig(dist[idx], 4)
    expect(z).sig(ht[idx], 3)
  })
})

test('6: DIST2a & BP6 - Diameter Series', () => {
  const anem = 6.096
  const htop = 80
  const uan = 10
  const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)
  const fl = 60
  const fikwpm = 3.46414 * CrownSpotting.firelineIntensityThomas(fl / 0.3048)
  expect(fikwpm).sig(106968.2, 5)

  const layers = [94, 93, 88, 82, 69, 22]
  const ht = [1180.666, 1170.331, 1118.299, 1055.037, 914.597, 353.3379]
  const dist = [2120.959, 2079.295, 1908.454, 1711.678, 1348.209, 321.7401]
  ;[1, 2, 6, 12, 25, 100].forEach((diam, idx) => {
    const [z, x, drift, spot, layer] = CrownSpotting.dist(
      htop,
      fikwpm,
      utop,
      diam
    )
    expect(layer).toEqual(layers[idx])
    expect(spot).sig(dist[idx], 4)
    expect(z).sig(ht[idx], 4)
  })
})

test('7: Units conversion and flatDistance() wrapper', () => {
  const anem = 6.096
  const diam = 1
  const htop = 80
  const uan = 10
  const utop = CrownSpotting.windSpeedAtCanopyTop(htop, uan, anem)

  const flM = 60
  const flFt = flM / 0.3048
  const fibtu = CrownSpotting.firelineIntensityThomas(flFt)
  const fikwpm = fibtu * 3.46414
  expect(fikwpm).sig(106968.2, 4)

  const [z, x, drift, spot, layer] = CrownSpotting.dist(
    htop,
    fikwpm,
    utop,
    diam
  )
  expect(layer).toEqual(94)
  expect(z).sig(1180.664, 5)
  expect(x).sig(957.056, 5)
  expect(drift).sig(1163.905, 4)
  expect(spot).sig(2120.962, 5)

  const ws20 = 88 * (uan / 1.60934) // 20 km/h
  const canopyHt = htop / 0.3048 // ft
  const firebrand = CrownSpotting.flatDistance(canopyHt, ws20, fibtu)
  expect(firebrand.layer).toEqual(94)
  expect(firebrand.zdrop).sig(1180.666 / 0.3048, 4)
  expect(firebrand.xdrop).sig(957.056 / 0.3048, 5)
  expect(firebrand.xdrift).sig(1163.905 / 0.3048, 4)
  expect(firebrand.xspot).sig(2120.959 / 0.3048, 4)

  expect(CrownSpotting.layer(firebrand)).toEqual(94)
  expect(CrownSpotting.zdrop(firebrand)).sig(1180.666 / 0.3048, 4)
  expect(CrownSpotting.xdrop(firebrand)).sig(957.056 / 0.3048, 5)
  expect(CrownSpotting.xdrift(firebrand)).sig(1163.905 / 0.3048, 4)
  expect(CrownSpotting.xspot(firebrand)).sig(2120.959 / 0.3048, 4)
})
