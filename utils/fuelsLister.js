/**
 * @file fuelsLister.js generates a list of fuel model keys => labels
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Alias, Model } from '../src/fire-behavior-models/FuelCatalogData.js'
import * as fs from 'fs'

function fuelsKeyLabelObject() {
  let str = '  export const fuelModels = [\n'
  Array.from(Alias).forEach(alias => {
    // alias[0] may be a text string ('gs4'), a number string ('124'), or a number (124)
    const key = alias[0]
    // alias[1] is always a number string ('124')
    const f = Model.get(alias[1])
    // don't list number aliases, as they are redudant (124 and '124')
    if (typeof alias[0] !== 'number') { str += `    { key: '${key}', text: '${key}: ${f.label}'},\n` }
  })
  str += '  ]\n'
  return str
}

const fileName = './docs/fuelsList.js'
fs.writeFile(fileName, fuelsKeyLabelObject(), function (err) {
  if (err) throw err
  console.log(`Wrote fuel model key-text object code to file '${fileName}'`)
})
