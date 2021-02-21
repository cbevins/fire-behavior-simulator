/**
 * @file Units-of-measure parser
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

// The parser recognizes these characters as letters (part of a word)
const letters = new Set([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '_', '%',
  '\u2126', // ohm
  '\u2109', // oF
  '\u2103', // oC
  '\u212a', // oK
  '\u00B0' // o
])

export class Parser {
  constructor (unitDefs) {
    this._aliasMap = this._createAliasMap(unitDefs)
    this._init()
  }

  _createAliasMap (unitDefs) {
    const map = new Map()
    unitDefs.forEach(def => {
      const [key, , aliases] = def
      map.set(key, key)
      aliases.forEach(alias => { map.set(alias, key) })
    })
    return map
  }

  _init () {
    this._term = ''
    this._tokens = []
    this._inWord = false
    this._inNumber = false
    this._inNumerator = true
    this._lastToken = ''
    this._token = ''
  }

  _isDigit (c) { return (c >= '0' && c <= '9') || c === '-' || c === '+' }
  _isLetter (c) { return letters.has(c) }
  _isSlash (c) { return c === '/' }

  _ensurePower () {
    if (this._lastToken === 'word') {
      const n = this._inNumerator ? 1 : -1
      this._tokens.push(n)
      this._lastToken = 'number'
    }
  }

  _pushNumber () {
    if (this._lastToken === 'number') {
      throw new Error('Units-of-measure expression has back-to-back powers')
    }
    this._tokens.push(parseInt(this._token) * (this._inNumerator ? 1 : -1))
    this._lastToken = 'number'
    this._inNumber = false
  }

  _pushWord () {
    const word = this._aliasMap.get(this._token)
    if (word === undefined) {
      throw new Error(`Units-of-measure expression '${this._term}' has unknown term '${this._token}'`)
    }
    this._tokens.push(word)
    this._lastToken = 'word'
    this._inWord = false
  }

  /**
    * Parses a units-of-measure expression into an array of [coeff, term, power] triplets.
    * @param {string} str The units-of-measure string
    * @returns {array} Array of [number:coeff, string:term, integer:power] triplets
    */
  parse (str) {
    this._init()
    this._term = str
    if (str === '') {
      return [[1, 'dl', 1]]
    }
    for (let idx = 0; idx < str.length; idx += 1) {
      const c = str[idx]
      if (this._isLetter(c)) {
        if (this._inNumber) {
          this._pushNumber()
          this._token = c
        } else if (this._inWord) {
          this._token += c
        } else { // not in word or in number
          this._ensurePower()
          this._token = c
        }
        this._inWord = true
      } else if (this._isDigit(c)) {
        if (this._inWord) {
          this._ensurePower()
          this._pushWord()
          this._token = c
        } else if (this._inNumber) {
          this._token += c
        } else { // not in word or in number
          this._token = c
        }
        this._inNumber = true
      } else if (this._isSlash(c)) {
        if (this._inWord) {
          this._pushWord()
          this._ensurePower()
        } else if (this._inNumber) {
          this._pushNumber()
        } else { // not in word or in number
          this._ensurePower()
        }
        this._inNumber = false
        this._inWord = false
        this._inNumerator = false
        this._lastToken = ''
        this._token = ''
      } else { // is white space
        if (this._inNumber) {
          this._pushNumber()
        } else if (this._inWord) {
          this._ensurePower()
          this._pushWord()
        }
        this._inNumber = false
        this._inWord = false
        this._token = ''
      }
    }
    // End of string
    if (this._inNumber) {
      this._pushNumber()
    } else if (this._inWord) {
      this._pushWord()
      this._ensurePower()
    } else {
      this._ensurePower()
    }
    const pairs = []
    for (let idx = 0; idx < this._tokens.length; idx += 2) {
      pairs.push([1, this._tokens[idx], this._tokens[idx + 1]])
    }
    return pairs
  }
}
