/**
 * @file fuelsLister.js generates a list of fuel model keys => labels
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Alias, Model } from '../fire-behavior-models/FuelCatalogData.js'
import * as fs from 'fs'

let str = '  let fuels = [\n'
Array.from(Alias).forEach(alias => {
  const key = alias[0]
  const f = Model.get(alias[1])
  str += `    { key: '${key}', text: '${key}: ${f.label}'},\n`
})
str += '  ]\n'

const fileName = './src/docs/fuelsList.js'
fs.writeFile(fileName, str, function (err) {
  if (err) throw err
  console.log(`Wrote file '${fileName}'`)
})
