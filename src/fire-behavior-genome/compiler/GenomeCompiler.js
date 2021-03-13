/**
 * @file GenomeCompiler.js compiles a Genome into a much smaller file.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 *
 * The *uncompiled* Genome arrays (see ../utils/GenomeAlphabeticalOrder.js) are about 322k bytes,
 * while the *compiled* genome is just 96k bytes
*/
import * as fs from 'fs'
import { Genome } from '../genome.js'
import * as Lib from '../../fire-behavior-models/index.js'
import { VariantMap } from '../../fire-behavior-variants/index.js'
import { dict } from './dictionary.js'

const ab = [
  ['spfbdp', 'surface.primary.fuel.bed.dead.particle.class'],
  ['spfblp', 'surface.primary.fuel.bed.live.particle.class'],
  ['ssfbdp', 'surface.secondary.fuel.bed.dead.particle.class'],
  ['ssfblp', 'surface.secondary.fuel.bed.live.particle.class'],
  ['ccfbdp', 'crown.canopy.fuel.bed.dead.particle.class'],
  ['ccfblp', 'crown.canopy.fuel.bed.live.particle.class'],
  ['spfbd', 'surface.primary.fuel.bed.dead'],
  ['spfbl', 'surface.primary.fuel.bed.live'],
  ['spff', 'surface.primary.fuel.fire'],
  ['ssfbd', 'surface.secondary.fuel.bed.dead'],
  ['ssfbl', 'surface.secondary.fuel.bed.live'],
  ['ssff', 'surface.secondary.fuel.fire'],
  ['ccfbd', 'crown.canopy.fuel.bed.dead'],
  ['ccfbl', 'crown.canopy.fuel.bed.live'],
  ['ccff', 'crown.canopy.fuel.fire'],
  ['spfb', 'surface.primary.fuel.bed'],
  ['ssfb', 'surface.secondary.fuel.bed'],
  ['ccfb', 'crown.canopy.fuel.bed'],
  ['cfa', 'crown.fire.active'],
  ['cff', 'crown.fire.final'],
  ['cfi', 'crown.fire.initiation'],
  ['spf', 'surface.primary.fuel'],
  ['ssf', 'surface.secondary.fuel'],
  ['mbd', 'model.behave.derived'],
  ['mbp', 'model.behave.parms'],
  ['mcd', 'model.chaparral.derived'],
  ['mcp', 'model.chaparral.parms'],
  ['mpd', 'model.palmettoGallberry.derived'],
  ['mpp', 'model.palmettoGallberry.parms'],
  ['mwd', 'model.westernAspen.derived'],
  ['mwp', 'model.westernAspen.parms'],
  ['sfe', 'surface.fire.ellipse'],
  ['swf', 'surface.weighted.fire'],
  ['spotb', 'spotting.burningPile'],
  ['spotc', 'spotting.crownFire'],
  ['spots', 'spotting.surfaceFire'],
  ['spott', 'spotting.torchingTrees'],
  ['savr', 'surfaceAreaToVolumeRatio'],
  ['emc', 'effective.mineralContent'],
  ['tmc', 'total.mineralContent'],
  ['heat', 'heatOfCombustion'],
  ['ef', 'effectiveFuel'],
  ['sa', 'surfaceArea'],
  ['sc', 'sizeClass'],
  ['wf', 'weightingFactor'],
  ['qig', 'heatOfPreignition'],
  ['waf', 'windSpeedAdjustmentFactor'],
  ['load', 'ovendryLoad'],
  ['mois', 'moistureContent'],
  ['fli', 'firelineIntensity'],
  ['fl', 'flameLength'],
  ['lwr', 'lengthToWidthRatio'],
  ['ros', 'spreadRate'],
  ['rxi', 'reactionIntensity'],
  ['sh', 'scorchHeight'],
  ['hpua', 'heatPerUnitArea'],
  ['phiew', 'phiEffectiveWind'],
  ['taur', 'flameResidenceTime'],
  ['ews', 'effectiveWindSpeed'],
  ['dens', 'fiberDensity'],
  ['ehn', 'heatingNumber']
]

/**
 * Generates a file that exports a Singleton object CompiledGenome {
 *    literalArgsArray: [<literalStringOrNumber>...]
 *    methodRefArray: [<functionRef>...]
 *    genesArray: [ [<geneIdx>, <geneKey>, <varidantIdx", [<updater>...] ]]
 */
export class GenomeCompiler {
  /**
   * @param {Map} dictionary Map of literals
   */
  constructor (dictionary) {
    this.tokens = Object.entries(dictionary).sort((a, b) => {
      if (a[1].length < b[1].length) return 1
      if (a[1].length > b[1].length) return -1
      return 0
    })
    this.literalArray = []
    this.literalIdxMap = new Map()
    this.methodKeyIdxMap = new Map()
    this.methodKeyArray = []
    this.geneKeyIdxMap = new Map()
    this.geneArray = []
    this.variantKeyIdxMap = new Map()
    this.variantKeyArray = []
  }

  compile (genomeArray) {
    // Create a Variant key=>index Map and simple array of Variant keys
    this.variantKeyIdxMap = new VariantMap()
    this.variantKeyArray = []
    this.variantKeyIdxMap.forEach((entry, key) => {
      const vidx = this.variantKeyArray.length
      this.variantKeyIdxMap.set(key, vidx)
      this.variantKeyArray.push(key)
    })

    // Pass 1: create this.geneKeyIdxMap
    this.geneKeyIdxMap = new Map()
    genomeArray.forEach((info, idx) => { this.geneKeyIdxMap.set(info[0], idx) })

    // Pass 2: create this.methodKeyIdxMap and this.literalIdxMap
    this.methodKeyIdxMap = new Map()
    this.literalIdxMap = new Map()
    genomeArray.forEach((geneInfo, geneIdx) => {
      const [geneKey, otherInfo] = geneInfo // Each Gene has a geneKey and an info array
      const [variantInfo, updaterInfo] = otherInfo
      const variantKey = variantInfo[0]
      this.ensureVariantExists(geneKey, variantKey)
      let finals = 0 // number of 'finally' conditions processed for this Gene
      let configKey, op, value, methodKey, methodParms
      updaterInfo.forEach(updater => {
        const [condition, ...conditionArgs] = updater
        if (condition === 'when') {
          [configKey, op, value, methodKey, ...methodParms] = conditionArgs
          if (finals) throw new Error(`Gene ${geneKey} has a 'when' condition after a 'finally' condition`)
          if (op !== 'equals') throw new Error(`'${geneKey}' has config '${configKey}' with unsupported op '${op}'`)
          // Check configKey?
          this.literalIdxMap.set(value, 0) // temporarily assign all literals an index of 0
        } else if (condition === 'finally') {
          [methodKey, ...methodParms] = conditionArgs
          if (finals) throw new Error(`Gene ${geneKey} has more than 1 'finally' condition`)
          finals += 1
        } else {
          throw new Error(`Gene '${geneKey}' updater ${geneIdx} has invalid condition '${condition}'`)
        }
        this.ensureMethodExists(methodKey, geneKey)
        this.methodKeyIdxMap.set(methodKey, 0) // temporarily assign all methods an index of 0
        methodParms.forEach(parm => {
          // If the parm is NOT in the gene map, make sure it is in the literals map
          if (!this.geneKeyIdxMap.has(parm)) this.literalIdxMap.set(parm, 0)
        })
      })
      if (!finals) throw new Error(`Gene ${geneKey} has no 'finally' condition`)
    })

    // Store each literal in this.literalArray and its index as the this.literalIdxMap entry
    this.literalArray = []
    this.literalIdxMap.forEach((value, key) => {
      this.literalIdxMap.set(key, this.literalArray.length)
      this.literalArray.push(key)
    })
    // Store each method reference in this.methodRefArray and its index as the this.literalIdxMap entry
    this.methodKeyArray = []
    this.methodKeyIdxMap.forEach((value, key) => {
      this.methodKeyIdxMap.set(key, this.methodKeyArray.length)
      this.methodKeyArray.push(key)
    })

    // Pass 3: create this.geneArray with each Gene's key idx, Variant idx,
    // and array of method idx and argument indexes
    genomeArray.forEach((geneInfo, geneIdx) => {
      const [geneKey, otherInfo] = geneInfo // Each Gene has a geneKey and an info array
      const [variantInfo, updaterInfo] = otherInfo
      const variantIdx = this.variantKeyIdxMap.get(variantInfo[0])

      const updaters = []
      let configKey, value, methodKey, methodParms, config
      updaterInfo.forEach(option => {
        const [condition, ...conditionArgs] = option
        if (condition === 'when') {
          [configKey, , value, methodKey, ...methodParms] = conditionArgs
          config = [this.geneKeyIdxMap.get(configKey), this.literalIdxMap.get(value)]
        } else if (condition === 'finally') {
          [methodKey, ...methodParms] = conditionArgs
          config = []
        }
        const method = [this.methodKeyIdxMap.get(methodKey)]
        methodParms.forEach(parm => {
          method.push(this.geneKeyIdxMap.has(parm)
            ? [0, this.geneKeyIdxMap.get(parm)] // Element 0 === 0 indicates a Gene index
            : [1, this.literalIdxMap.get(parm)]) // Element 0 === 1 indicates a literal index
        })
        updaters.push([config, method])
      })
      this.geneArray.push([geneIdx, geneKey, variantIdx, updaters])
    })
  }

  ensureMethodExists (methodKey, geneKey) {
    const [file, func] = methodKey.split('.')
    if (file === 'Math') return
    if (typeof Lib[file] === 'undefined') {
      throw new Error(`Gene '${geneKey}' has unknown method library '${file}'`)
    } else if (typeof Lib[file][func] === 'undefined') {
      // console.log(Lib[file])
      throw new Error(`Gene '${geneKey}' has unknown method function '${file}.${func}'`)
    }
  }

  // Returns the this.variantKeyArray index for the variantKey
  ensureVariantExists (geneKey, variantKey) {
    if (!this.variantKeyIdxMap.has(variantKey)) {
      throw new Error(`Gene '${geneKey}' has unknown Variant class '${variantKey}'`)
    }
    return this.variantKeyIdxMap.get(variantKey)
  }

  assemble () {
    return this.imports() + this.abbreviations() +
      'export const CompiledGenome = {\n' +
      this.literals() + this.methods() + this.genes() +
      '}\n'
  }

  abbreviations () {
    let str = '// Gene key abbreviations\n'
    ab.forEach(pair => { str += `const ${pair[0]} = '${pair[1]}'\n` })
    return str + '\n'
  }

  imports () {
    return '// autogenerated by GenomeCompiler.js on ' + new Date().toLocaleString() + '\n'
  }

  literals () {
    let str = '// Array of literals used by Gene updater config conditions and method parameters\n'
    str += 'literalArgsArray: [\n'
    this.literalArray.forEach((literal, idx) => {
      const sep = (typeof literal === 'string') ? "'" : ''
      str += `${sep}${literal}${sep}, // ${idx}\n`
    })
    return str + '],\n'
  }

  methods () {
    let str = '// Simple array of updater method <file>.<function> names\n'
    str += 'methodRefsArray: [\n'
    this.methodKeyArray.forEach((method, idx) => {
      const [file, func] = method.split('.')
      const m = (file === 'Math') ? `'Math.${func}'` : `'${file}.${func}'`
      str += `${m}, // ${idx}\n`
    })
    return str + '],\n'
  }

  genes () {
    let str = '// Array of Genes where each Gene is:\n' +
    '// [<geneIdx>, <geneKey>, <variantIdx>, [<valueUpdaters>]], where each valueUpdater is:\n' +
    '// [[<configIdx>, <configValue>], [methodIdx, ...<methodArgs>]], and where each methodArg is:\n' +
    '// [<0|1>, <geneIdx|literalIdx>]\n' +
    'genesArray: [\n'
    this.geneArray.forEach(gene => {
      ab.forEach(pair => { gene[1] = gene[1].replace(pair[1], '${' + pair[0] + '}') })
      str += '[' + gene[0] + ',`' + gene[1] + '`,' + gene[2] + ',' + JSON.stringify(gene[3]) + '],\n'
    })
    return str + ']\n'
  }

  writeFile (fileName, str) {
    fs.writeFile(fileName, str, function (err) {
      if (err) throw err
      console.log(`'Wrote compiled Genome file '${fileName}'`)
    })
  }

  run (genomeArray, fileName = null) {
    this.compile(genomeArray)
    const str = this.assemble()
    if (fileName != null) this.writeFile(fileName, str)
    return str
  }
}

const compiler = new GenomeCompiler(dict)
compiler.run(Genome, './src/fire-behavior-genome/compiler/CompiledGenome.js')
