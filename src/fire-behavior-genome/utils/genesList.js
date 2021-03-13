/**
 * @file genesList.js generates full Genome arrays
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as fs from 'fs'
import { Genome } from '../genome.js'

function load (genomeArray) {
  let str = 'export const Genome = [\n'
  genomeArray.forEach((nodeInfo, nodeIdx) => {
    const [nodeKey, otherInfo] = nodeInfo // Each Gene has a nodeKey and an info array
    const [variantInfo, updaterInfo] = otherInfo
    const variantKey = variantInfo[0]
    str += `  ['${nodeKey}', [['${variantKey}'], [\n`
    let configKey, op, value, methodKey, methodParms
    updaterInfo.forEach(updater => {
      const [condition, ...conditionArgs] = updater
      if (condition === 'when') {
        [configKey, op, value, methodKey, ...methodParms] = conditionArgs
        str += `    ['${condition}', '${configKey}', '${op}', '${value}', '${methodKey}'`
      } else { // (condition === 'finally')
        [methodKey, ...methodParms] = conditionArgs
        str += `    ['${condition}', '${methodKey}'`
      }
      methodParms.forEach(parm => { str += `, '${parm}'` })
      str += '],\n'
    })
    str += '  ]]],\n'
  })
  str += ']\n'
  return str
}

function alphabeticalOrder (fileName) {
  const str = load(Genome.sort())
  write(str, fileName)
}

function definitionOrder (fileName) {
  const str = load(Genome)
  write(str, fileName)
}

function write (str, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`Wrote file ${fileName}`)
  })
}

definitionOrder('GenomeInDefinitionOrder.js')
alphabeticalOrder('GenomeInAlphabeticalOrder.js')
