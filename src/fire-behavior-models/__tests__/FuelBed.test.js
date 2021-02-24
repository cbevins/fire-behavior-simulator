import * as FB from '../FuelBed.js'

test('1: FuelBed.optimumPackingRatio(savr) edge cases', () => {
  expect(FB.optimumPackingRatio(0)).toEqual(0)
  expect(FB.optimumPackingRatio(-1)).toEqual(0)
})

test('2: FuelBed.propagatingFluxRatio(savr, beta) edge cases', () => {
  expect(FB.propagatingFluxRatio(0, 0.1)).toEqual(0)
  expect(FB.propagatingFluxRatio(-1, 0.1)).toEqual(0)
})

test('3: FuelBed.reactionVelocityExponent(savr) edge cases', () => {
  expect(FB.reactionVelocityExponent(0)).toEqual(0)
  expect(FB.reactionVelocityExponent(-1)).toEqual(0)
})

test('4: FuelBed.reactionVelocityMaximum(savr15) edge cases', () => {
  expect(FB.reactionVelocityMaximum(0)).toEqual(0)
  expect(FB.reactionVelocityMaximum(-1)).toEqual(0)
})

test('5: FuelBed.reactionVelocityOptimum(betaRatio, rvMax, rvExp) edge cases', () => {
  expect(FB.reactionVelocityOptimum(0, 1, 1)).toEqual(0)
  expect(FB.reactionVelocityOptimum(-1, 1, 1)).toEqual(0)
  expect(FB.reactionVelocityOptimum(1, 1, 1)).toEqual(0)
})

test('6: FuelBed.slopeK(beta) edge cases', () => {
  expect(FB.slopeK(0)).toEqual(0)
  expect(FB.slopeK(-1)).toEqual(0)
})

test('7: FuelBed.taur(savr) edge cases', () => {
  expect(FB.taur(0)).toEqual(0)
  expect(FB.taur(-1)).toEqual(0)
})

test('8: FuelBed.windK(betr, wnde, wndc) edge cases', () => {
  expect(FB.windK(0, 1, 1)).toEqual(0)
  expect(FB.windK(-1, 1, 1)).toEqual(0)
})

test('9: FuelBed.windI(betr, wnde, wndc) edge cases', () => {
  expect(FB.windI(0, 1, 1)).toEqual(0)
  expect(FB.windI(-1, 1, 1)).toEqual(0)
})
