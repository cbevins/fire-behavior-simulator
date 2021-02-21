/**
 * @file Ratio Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
  */
import { Quantity } from './Quantity.js'

/**
 * Ratio is a Quantity Variant for rational numbers that can be expressed
 * in units-of-measure 'ratio' or '%'
 */
export class Ratio extends Quantity {
 /**
   * @param {string} key Unique key for this Variant (i.e., 'FireLineIntensity' or 'WindSpeed')
   * @param {number} maxValue Maximum allowed *client/user/display input* value
   * @param {number} defaultValue  If omitted, set to 0
   * @param {number} minValue Minimum allowed *client/user/display input* value
   * @param {number} stepValue Step value for input sliders
   */
  constructor(key, maxValue, defaultValue=0, minValue = 0, stepValue = 1 ) {
    const unitsOptions = ['ratio', '%']
    super(key, unitsOptions, maxValue, defaultValue, minValue, stepValue)
  }
}