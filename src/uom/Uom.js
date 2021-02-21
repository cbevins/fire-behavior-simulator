/**
 * @file Units-of-measure singleton
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { Converter } from './Converter.js'

// Uom is a Singleton instance of Converter
export const Uom = new Converter()
