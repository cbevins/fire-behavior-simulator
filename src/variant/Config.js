/**
 * @file Config Variant class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { Option } from './Option.js'

/**
 * Config is a Option used for DAG configuration.
 * Its sole purpose is to check if a DAG Node is a Config via (someObject instanceof Config) === true
 */
export class Config extends Option {
  constructor (key, prompt, optionsArray, defaultOptionIndex = 0) {
    super(key, prompt, optionsArray, defaultOptionIndex)
  }
}
