import {
  filterInteger, keyLabel, filterNonNegativeInteger,
  filterNonNegativeNumeric, filterNumeric
} from './index.js'

test('1 filterfilterNumeric() filter', () => {
  expect(filterNumeric('')).toEqual('')
  expect(filterNumeric('x')).toEqual('')
  expect(filterNumeric('1')).toEqual('1')
  expect(filterNumeric('-1')).toEqual('-1')
  expect(filterNumeric('-1.2')).toEqual('-1.2')
  expect(filterNumeric('- 1 . 2')).toEqual('-1.2')
  expect(filterNumeric('+123')).toEqual('123')
  expect(filterNumeric('1x23')).toEqual('123')
  expect(filterNumeric('1.23e')).toEqual('1.23e')
  expect(filterNumeric('1.23e5')).toEqual('1.23e5')
  expect(filterNumeric('1.23e-5')).toEqual('1.23e-5')
  expect(filterNumeric('abc xy1z._2!3eee---5?')).toEqual('1.23e-5')
})

test('2 integer() filter', () => {
  expect(filterInteger('')).toEqual('')
  expect(filterInteger('0')).toEqual('0')
  expect(filterInteger('x')).toEqual('')
  expect(filterInteger('1')).toEqual('1')
  expect(filterInteger('-1')).toEqual('-1')
  expect(filterInteger('-1.2')).toEqual('-1')
  expect(filterInteger('-1...2')).toEqual('-1')
  expect(filterInteger('- 1 . 2')).toEqual('-1')
  expect(filterInteger('+123')).toEqual('123')
  expect(filterInteger('1x23')).toEqual('123')
  expect(filterInteger('1.23e')).toEqual('1')
  expect(filterInteger('1.23e5')).toEqual('1')
  expect(filterInteger('1.23e-5')).toEqual('1')
  expect(filterInteger('abc xy1z._2!3eee---5?')).toEqual('1')
})

test('3 nonNegativeInteger() filter', () => {
  expect(filterNonNegativeInteger('')).toEqual('')
  expect(filterNonNegativeInteger('0')).toEqual('0')
  expect(filterNonNegativeInteger('x')).toEqual('')
  expect(filterNonNegativeInteger('1')).toEqual('1')
  expect(filterNonNegativeInteger('-1')).toEqual('1')
  expect(filterNonNegativeInteger('-1.2')).toEqual('1')
  expect(filterNonNegativeInteger('-1...2')).toEqual('1')
  expect(filterNonNegativeInteger('- 1 . 2')).toEqual('1')
  expect(filterNonNegativeInteger('+123')).toEqual('123')
  expect(filterNonNegativeInteger('1x23')).toEqual('123')
  expect(filterNonNegativeInteger('1.23e')).toEqual('1')
  expect(filterNonNegativeInteger('1.23e5')).toEqual('1')
  expect(filterNonNegativeInteger('1.23e-5')).toEqual('1')
  expect(filterNonNegativeInteger('abc xy1z._2!3eee---5?')).toEqual('1')
})

test('4 nonNegativefilterNumeric() filter', () => {
  expect(filterNonNegativeNumeric('')).toEqual('')
  expect(filterNonNegativeNumeric('x')).toEqual('')
  expect(filterNonNegativeNumeric('1')).toEqual('1')
  expect(filterNonNegativeNumeric('-1')).toEqual('1')
  expect(filterNonNegativeNumeric('-1.2')).toEqual('1.2')
  expect(filterNonNegativeNumeric('- 1 . 2')).toEqual('1.2')
  expect(filterNonNegativeNumeric('+123')).toEqual('123')
  expect(filterNonNegativeNumeric('1x23')).toEqual('123')
  expect(filterNonNegativeNumeric('1.23e')).toEqual('1.23e')
  expect(filterNonNegativeNumeric('1.23e5')).toEqual('1.23e5')
  expect(filterNonNegativeNumeric('1.23e-5')).toEqual('1.23e-5')
  expect(filterNonNegativeNumeric('abc xy1z._2!3eee---5?')).toEqual('1.23e-5')
})

test('5 keyLabel() filter', () => {
  expect(keyLabel('surface.primary.fire.spreadRate'))
    .toEqual('Surface Primary Fire Spread Rate')
  expect(keyLabel('site.moisture.dead.tl1h'))
    .toEqual('Site Moisture Dead Tl 1 H')
  expect(keyLabel('site.moisture.dead.tl100h'))
    .toEqual('Site Moisture Dead Tl 100 H')
  expect(keyLabel('site.moisture.dead.tl100-h'))
    .toEqual('Site Moisture Dead Tl 100-h')
  expect(keyLabel('site.moisture.dead.A_B_C'))
    .toEqual('Site Moisture Dead A B C')
  expect(keyLabel('site.moisture.dead.ABC'))
    .toEqual('Site Moisture Dead A B C')
  expect(keyLabel('site.moisture.dead.a!b#c'))
    .toEqual('Site Moisture Dead A!b#c')
  expect(keyLabel('site.moisture.dead.tl.100h'))
    .toEqual('Site Moisture Dead Tl 100 H')
})
