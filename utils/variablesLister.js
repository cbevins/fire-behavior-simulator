/* eslint-disable no-unused-vars */
/**
 * @file Utility to generate variable documentation files
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 *
 * USAGE: npm run variablesLister
 */

import * as fs from 'fs'
import { createFireEllipseSim } from '../examples/FireEllipseSim.js'

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

function configMarkdownList (fileName) {
  let str = ''
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach((key, idx) => {
    const node = dag.node(key)
    if (node.isConfig()) {
      str += `\n---\n\n##  ![](favicon.png) ${node.key()}\n\n${node.variant().prompt()}:\n`
      node.variant().options().forEach(opt => {
        str += `- '${opt}': ${node.variant().optionText(opt)}\n`
      })
    }
  })
  const header = '# ![](favicon.png) cbevins/fire-behavior-simulator Configuration\n' +
    '[README.md](./README.md)\n'
  write(header + str, fileName)
}

function markdownList (fileName) {
  let lastPart = ''
  let contents = '# ![](favicon.png) Top-level Names\n'
  let str = ''
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach((key, idx) => {
    const parts = key.split('.')
    if (parts[0] !== lastPart) {
      lastPart = parts[0]
      str += `---\n## ![](favicon.png) ${lastPart} Variables\n[top](#top-level-names)\n`
      contents += `- [${lastPart} Variables](#${lastPart}-variables)\n`
    }
    str += `  - ${idx + 1}: ${key}\n`
  })
  const header = '# ![](favicon.png) cbevins/fire-behavior-simulator Variable Names\n' +
    '[README.md](./README.md)\n'
  write(header + contents + str, fileName)
}

function nodeMarkdownTable (fileName) {
  let lastPart = ''
  let contents = '# ![](favicon.png) Top-level Names\n'
  const hdr = '| idx | Variable Key (Name) | Variant | Native Units |\n|---|---|---|---|\n'
  let str = ''
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach((key, idx) => {
    const parts = key.split('.')
    if (parts[0] !== lastPart) {
      lastPart = parts[0]
      str += `---\n## ![](favicon.png) ${lastPart} Variables\n[Table of Contents](../README.md)\n`
      str += hdr
      contents += `- [${lastPart} Variables](#${lastPart}-variables)\n`
    }
    const node = dag.node(key)
    str += `  | ${idx + 1} | ${key} | ${node.variant().key()} | ${node.variant().nativeUnits()} |\n`
  })
  const header = '# ![](favicon.png) cbevins/fire-behavior-simulator Variable Names\n' +
    '[README.md](./README.md)\n'
  write(header + contents + str, fileName)
}

function recurse (obj, name, lvl) {
  const margin = ' '.padStart(2 * lvl)
  const items = Object.keys(obj)
  if (items.length === 0) {
    return margin + `${name}: {},\n`
  }
  let str = margin + `${name}: {\n`
  items.forEach(key => {
    str += recurse(obj[key], key, lvl + 1)
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
      if (!Object.prototype.hasOwnProperty.call(obj, name)) {
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

// alphaOrder('../docs/NodeList_AlphabeticalOrder.js')
// hierarchicalOrder('../docs/NodeList_HierarchicalOrder.js')
// topoOrder('../docs/NodeList_TopologicalOrder.js')
// nodeMarkdownTable('../docs/Variables.md')
configMarkdownList('../docs/ConfigurationVariables.md')
