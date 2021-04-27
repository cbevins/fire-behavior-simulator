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
const [, dag] = createFireEllipseSim()

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

const Sections = [
  'configure',
  'crown.canopy',
  'crown.fire',
  'docs',
  'ignition',
  'link',
  'module',
  'mortality',
  'scorch',
  'site',
  'spotting',
  'surface.fire.ellipse',
  'surface.primary',
  'surface.secondary',
  'surface.weighted'
]
function nodeMarkdownTable (fileName) {
  let section = ''
  let top = '# ![](favicon.png) 14 Variable Names\n\n'
  top += '| Prev:  [13 Release Notes](./13_RELEASE_NOTES.md) | Next: [15 Standard Fuel Models](./15_StandardFuelModels.md) |  [Table of Contents](../README.md) |\n\n'
  top += '---\n\n'
  top += "<a id='top'></a>\n\n"
  top += '# ![](favicon.png) Top-level Names\n\n'
  top += 'This section lists all the *fire-behavior-simulator* variable names, also known as *keys*, along with their Variant type and, for Quantity Variants, their native units-of-measure.  This section is divided into the following subsections:\n\n'
  let contents = ''
  const hdr = '| idx | Variable Key (Name) | Variant | Native Units |\n|---|---|---|---|\n'
  let str = ''
  const nodeKeys = dag._node.map(node => node.key())
  nodeKeys.sort().forEach((key, idx) => {
    let keySection = ''
    for (let s = 0; s < Sections.length; s++) {
      if (key.startsWith(Sections[s])) {
        keySection = Sections[s]
        break
      }
    }
    if (keySection !== section) {
      section = keySection
      const slug = section.replace(/\./g, '-') + '-variables'
      str += `\n---\n<a id='${slug}'></a>\n\n`
      str += `## ![](favicon.png) **${section}**.* Variables\n\n`
      str += '[Back to Top](#top)\n\n'
      str += hdr
      contents += `- [**${section}**.* Variables](#${slug})\n`
    }
    const node = dag.node(key)
    str += `  | ${idx + 1} | ${key} | ${node.variant().key()} | ${node.variant().nativeUnits()} |\n`
  })
  write(top + contents + str, fileName)
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
nodeMarkdownTable('Variables.md')
// configMarkdownList('ConfigurationVariables.md')
