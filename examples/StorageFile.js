/**
 * @file StorageFile class writes input and selected DagNode results to a file.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as fs from 'fs'
import { StorageAbstract } from '../src/dag/StorageAbstract.js'

export class StorageFile extends StorageAbstract {
  constructor (dag, fileName) {
    super(dag)
    this._fileName = fileName
    this._nodeArray = [] // Array of references to all DagNodes to be saved
    this._writer = null
  }

  init () {
    this._nodeArray = [...this._dag.requiredInputNodes(), ...this._dag.selectedNodes()]
    this._writer = fs.createWriteStream(this._fileName, { flags: 'w' })
      .on('error', function (err) {
        throw new Error(`Unable to create output file: ${err}`)
      })
  }

  store () {
    // Collect the input and output values for this run;
    // either unformatted (node.value()) or formatted (node.displayValue()) values
    const fields = []
    this._nodeArray.forEach(node => { fields.push(node.displayValue()) })
    // Write them in comma-delimited format to the fileName
    this._writer.write(fields.join(', ') + '\n')
  }

  end () {
    this._writer.end()
  }
}
