/**
 * @file Lists all the fire behavior library functions in this folder.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */
import * as fs from 'fs'
import * as Lib from '../index.js'

function listLib() {
  let str = ''
  Object.keys(Lib).forEach(lib => {
    str += `${lib}\n`
    Object.keys(Lib[lib]).forEach(func => {
      const type = typeof Lib[lib][func]
      let p = type
      if (type === 'function') p = `()`
      else if (Array.isArray(Lib[lib][func])) p = '[array]'
      else if (type === 'object') p = '{object}'
      str += `    ${func} ${p}\n`
    })
  })
  return str
}

function write (str, fileName) {
  fs.writeFile(fileName, str, function (err) {
    if (err) throw err
    console.log(`Wrote file ${fileName}`)
  })
}

console.log(listLib())