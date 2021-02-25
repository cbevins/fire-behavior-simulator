/**
 * @file Utility to generate 2 files of node keys:
 * - './src/docs/NodeList_AlphabeticalOrder.js'
 * - './src/docs/NodeList_TopologicalOrder.js'
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 *
 * USAGE: npm run nodeLister
 */

import * as fs from 'fs'
import {createFireEllipseSim} from './FireEllipseSim.js'

// Step 1 - create a BehavePlus directed acyclical graph (DAG)
const [sim, dag, store] = createFireEllipseSim()

function alphaOrder (fileName) {
  let str = 'export const alphabeticalOrder = [\n'
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach((key, idx) => {
    const node = dag.get(key)
    str += `  [${idx}, ${node.depth()}, '${key}'],\n`
  })
  str += ']\n'
  write(str, fileName)
}

function recurse(obj, name, lvl) {
  const margin = ' '.padStart(2*lvl)
  const items = Object.keys(obj)
  if (items.length === 0) {
    return margin + `${name}: {},\n`
  }
  let str = margin + `${name}: {\n`
  items.forEach(key => {
    str += recurse(obj[key], key, lvl+1)
  })
  return str + margin + '},\n'
}

function hierarchicalOrder (fileName) {
  const list = {}
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach(key => {
    let obj = list
    const names = key.split('.')
    names.forEach(name => {
      if (!obj.hasOwnProperty(name)) {
        obj[name] = {}
      }
      obj = obj[name]
    })
  })
  const str = recurse(list, 'root', 0)
  write(str, fileName)
}

function topoOrder (fileName) {
  let str = 'export const topologicalOrder = [\n'
  dag.sortedNodes().forEach((node, idx) => { str += `  [${idx}, ${node.depth()}, '${node.key()}'],\n` })
  str += ']\n'
  write(str, fileName)
}

function write (str, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`Wrote file ${fileName}`)
  })
}

alphaOrder('./src/docs/NodeList_AlphabeticalOrder.js')
hierarchicalOrder('./src/docs/NodeList_HierarchicalOrder.js')
topoOrder('./src/docs/NodeList_TopologicalOrder.js')
