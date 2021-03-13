/**
 * @file Various input string filters
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */

export function filterInteger (str) {
  if (typeof str !== 'string') return ''
  let filtered = ''
  let decimal = false
  for (let idx = 0; idx <= str.length; idx += 1) {
    const c = str.charAt(idx)
    if (c >= '0' && c <= '9' && !decimal) {
      filtered += c
    } else if (c === '-' && filtered === '' && !decimal) { // first valid char
      filtered += c
    } else if (c === '.') {
      decimal = true
    }
  }
  if (filtered === '-') filtered = ''
  return filtered
}

export function filterNumeric (str) {
  if (typeof str !== 'string') return ''
  let filtered = ''
  let decimal = false
  let exponent = false
  for (let idx = 0; idx <= str.length; idx += 1) {
    const c = str.charAt(idx)
    if (c >= '0' && c <= '9') {
      filtered += c
    } else if (c === '.' && !decimal) {
      filtered += c
      decimal = true
    } else if (c === 'e' && !exponent) {
      filtered += c
      exponent = true
    } else if (c === '-') {
      if (filtered === '') { // first valid char
        filtered += c
      } else if (filtered.substr(filtered.length - 1) === 'e') { // last valid char is 'e'
        filtered += c
      }
    }
  }
  if (filtered.charAt(0) === 'e' || filtered.substr(0, 2) === '-e') {
    filtered = ''
  }
  // console.log(`'${str}' => '${filtered}'`)
  return filtered
}

export function filterNonNegativeInteger (str) {
  let filtered = filterInteger(str)
  if (filtered[0] === '-') {
    filtered = filtered.substring(1)
  }
  return filtered
}

export function filterNonNegativeNumeric (str) {
  let filtered = filterNumeric(str)
  if (filtered[0] === '-') {
    filtered = filtered.substring(1)
  }
  return filtered
}

export function keyLabel (key) {
  let filtered = ''
  let prev = 'separator'
  for (let idx = 0; idx < key.length; idx += 1) {
    const c = key.charAt(idx)
    if (c === '.' || c === '_') {
      filtered += ' ' // replace separator with a space
      prev = 'separator'
    } else if (c >= '0' && c <= '9') {
      if (prev !== 'digit') { // start of a number
        if (prev !== 'separator') filtered += ' ' // insert a space
      }
      filtered += c
      prev = 'digit'
    } else if (c >= 'a' && c <= 'z') {
      if (prev === 'digit') filtered += ' '
      if (prev === 'separator' || prev === 'digit') {
        filtered += c.toUpperCase()
      } else {
        filtered += c
      }
      prev = 'letter'
    } else if (c >= 'A' && c <= 'Z') {
      if (prev !== 'separator') filtered += ' '
      filtered += c
      prev = 'letter'
    } else if (c === '-') {
      filtered += c
      prev = 'letter'
    } else {
      filtered += c
      prev = 'letter'
    }
  }
  return filtered
}
