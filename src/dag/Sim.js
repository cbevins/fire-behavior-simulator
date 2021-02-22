/**
 * @file Sim class
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import { CompiledGenome } from '../fire-behavior-genome/index.js'
import { Dag } from './Dag.js'

export class Sim {
  constructor(dagKey=null) {
    this._genome = CompiledGenome
    // Map of gene key => index into this._genome
    this._geneKeyIdxMap = new Map()
    this._genome.genesArray.forEach(gene => this._geneKeyIdxMap.set(gene[1], gene[0]))
    // Map of independent simulation DAGs based upon this._genome
    this._dagMap = new Map()
    if (dagKey !== null) {
      this.createDag(dagKey)
    }
  }

  _ensureKey (key) {
    if (! this._geneKeyIdxMap.has(key) ) {
      throw new Error(`Genome has no Gene with key '${key}'`)
    }
    return this._geneKeyIdxMap.get(key)
  }

  genes () { return this._genome.genesArray }

  // Returns the gene based on an either a numerical index arg or a string key arg
  gene (arg) {
    const idx = (typeof arg === 'number') ? arg : this._ensureKey(arg)
    return this._genome.genesArray[idx]
  }

  // Returns the *index* of the gene based on an either a numerical index arg or a string key arg
  geneIndex (arg) { return this.gene(arg)[0] }

  literal (literalIdx) { return this._genome.literalArgsArray[literalIdx] }

  method (methodIdx) { return this._genome.methodRefsArray[methodIdx] }

  // Dag methods
  createDag(dagKey) {
    const dag = new Dag(this)
    this._dagMap.set(dagKey, dag)
    return dag
  }

  dagKeys () { return Array.from(this._dagMap.keys()) }

  deleteDag (dagKey) { this._dagMap.delete(dagKey) }

  getDag(dagKey) { return this._dagMap.get(dagKey) }

  hasDag (dagKey) { return this._dagMap.has(dagKey) }
}
