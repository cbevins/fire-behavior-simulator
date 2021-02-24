import { CrownFire } from '../index.js'

test('1: CrownFire.activeRatio (rActive, rPrime) edge cases', () => {
  expect(CrownFire.activeRatio(1, 0)).toEqual(0)
  expect(CrownFire.activeRatio(1, -1)).toEqual(0)
})

test('2: CrownFire.flameLengthThomas (fli) edge cases', () => {
  expect(CrownFire.flameLengthThomas(0)).toEqual(0)
  expect(CrownFire.flameLengthThomas(-1)).toEqual(0)
})

test('3: CrownFire.rInit (critSurfFli, surfHpua) edge cases', () => {
  expect(CrownFire.rInit(1000, 0)).toEqual(1.0e12)
  expect(CrownFire.rInit(1000, -1)).toEqual(1.0e12)
})

test('4: CrownFire.rPrimeActive (cpyBulk) edge cases', () => {
  expect(CrownFire.rPrimeActive(0)).toEqual(0)
  expect(CrownFire.rPrimeActive(-1)).toEqual(0)
})

test('5: CrownFire.rSa(oActive, surfRos0, surfWaf, surfWindB, surfWindK, surfPhiS) edge cases', () => {
  expect(CrownFire.rSa(Infinity, 1, 1, 1, 1, 1)).toEqual(Infinity)
})

test('6: CrownFire.oActive (cpyBulk, crownRxi, crownSink, phis) edge cases', () => {
  expect(CrownFire.oActive(0, 1, 1, 1)).toEqual(Infinity)
  expect(CrownFire.oActive(1, 1, 0, 1)).toEqual(Infinity)
})
