/**
 * @file Fraction Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
  */
import { Ratio } from './Ratio.js'

/**
 * Fraction is a Ratio constrained to the range [0..1]
 */
export class Fraction extends Ratio {
 /**
   * @param {string} key Unique key for this Variant (i.e., 'FireLineIntensity' or 'WindSpeed')
   * @param {number} defaultValue  If omitted, set to 0
   * @param {number} stepValue Step value for input sliders
   */
  constructor(key, defaultValue=0, stepValue = 0.01 ) {
    super(key, 1, defaultValue, 0, stepValue)
  }
}