import { Parser, unitDefs } from './index.js'

test('1: UomParser.parse()', () => {
  const p = new Parser(unitDefs)
  expect(p.parse('ft')).toEqual([[1, 'ft', 1]])
  expect(p.parse('foot minute')).toEqual([[1, 'ft', 1], [1, 'min', 1]])
  expect(p.parse('ft/min')).toEqual([[1, 'ft', 1], [1, 'min', -1]])
  expect(() => p.parse(' ft / __min__')).toThrow()
  expect(p.parse('feet')).toEqual([[1, 'ft', 1]])
  expect(p.parse('foot 1')).toEqual([[1, 'ft', 1]])
  expect(p.parse('feet 2')).toEqual([[1, 'ft', 2]])
  expect(p.parse('feet2')).toEqual([[1, 'ft', 2]])
  expect(p.parse('feet-2')).toEqual([[1, 'ft', -2]])
  expect(p.parse('feet   -2')).toEqual([[1, 'ft', -2]])
  expect(p.parse('pound1 foot-2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs/foot2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs foot-2')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs / foot2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs / feet 2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs // feet 2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('pounds / / feet 2 ')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('pounds / / feet -2 ')).toEqual([[1, 'lb', 1], [1, 'ft', 2]])
  expect(p.parse('lbs+1 feet-2')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs+1feet-2')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('lbs+1/ft2')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(p.parse('pounds +1 ft -2')).toEqual([[1, 'lb', 1], [1, 'ft', -2]])
  expect(() => p.parse(' pounds + 1 feet -2 ')).toThrow()
  expect(() => p.parse(' lbs 1 2 1 feet -2 ')).toThrow()
  expect(p.parse('ft/ft')).toEqual([[1, 'ft', 1], [1, 'ft', -1]])
  expect(p.parse('dl')).toEqual([[1, 'dl', 1]])
  expect(p.parse('')).toEqual([[1, 'dl', 1]])
})

test('2: README units examples', () => {
  const p = new Parser(unitDefs)
  const terms = [
    'lb/ft2',
    'lb / ft2',
    'lb1 / ft2',
    'lb1/ ft2',
    'lb1 /ft2',
    'lb+1ft-2',
    'pound 1 foot -2',
    'feet-2 pounds+1',
    'feet-2pounds+1']
  terms.forEach(term => {
    const result = p.parse(term)
    expect(result).toContainEqual([1, 'lb', 1])
    expect(result).toContainEqual([1, 'ft', -2])
  })
})
