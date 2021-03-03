/**
 * @file DagNode class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import {keyLabel} from '../variant/filters.js'

export class DagNode {
  constructor(geneRef, variantRef, initialValue) {
    this._dag = {
      _producers: [], // array of references to producer DagNodes
      _consumers: [], // aray of references to consumer DagNodes
      _depth: 0,
      _order: 0
    }
    this._gene = geneRef
    this._is = {
      _config: variantRef.key().startsWith('Config'),
      // _enabled: true,
      _input: false,
      _required: false,
      _selected: false
    }
    this._update = {
      _config: null, // reference to the Config DagNode that activated this updater pathway
      _configs: [], // array of all Config nodes referenced by this node's genes
      _method: null, // reference to a function that returns the current DagNode value
      _parms: [] // parameters for the arguments to the function that returns the current DagNode value
    }
    this._value = initialValue
    this._variant = variantRef
  }

  // accessors
  // consumers () { return this._dag._consumers }
  depth () { return this._dag._depth }
  displayString () { return this._variant.displayString(this._value) }
  displayUnits () { return this._variant.displayUnits() }
  displayValue () { return this._variant.displayValue(this._value) }
  index () { return this._gene[0] }
  isConfig () { return this._is._config }
  // isEnabled () { return this._is._enabled }
  isInput () { return this._is._input }
  isRequired () { return this._is._required }
  isSelected () { return this._is._selected }
  key () { return this._gene[1] }
  label () { return keyLabel(this.key()) }
  method () { return this._update._method }
  nativeUnits () { return this._variant.nativeUnits() }
  order () { return this._dag._order }
  // parms () { return this._update._parms }
  // producers () { return this._dag._producers }
  updater (idx) { return this._gene[3][idx] }
  updaters () { return this._gene[3] }
  value () { return this._value }
  variant () { return this._variant }

  // isValidValue (value) { return this._variant.isValidValue(value) }

  // mutators
  reset () {
    this._dag = {
      _producers: [], // array of references to producer DagNodes
      _consumers: [], // aray of references to consumer DagNodes
      _depth: 0,
      _order: 0
    }
    this._is._input = false
    this._is._required = false
  }

  // setValue(value) { this._value = value }

  // Updates the Node's value by calling its update._method and storing the result.
  updateValue () {
    const args = []
    // NOTE: This is the most heavily used function in the entire system.
    // DO NOT use this._update._args.map() to iterate over method parms,
    // as it increases execution time time by 50% !!!
    for (let i = 0; i < this._update._parms.length; i++) {
      const [isLiteral, parm] = this._update._parms[i]
      args.push(isLiteral ? parm : parm._value)
    }
    this._value = this._update._method.apply(this, args)
  }
}
