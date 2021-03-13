import * as Configs from './configs.js'
import * as Crown from './crown.js'
import * as Docs from './docs.js'
import * as Ignition from './ignition.js'
import * as Mortality from './mortality.js'
import * as Site from './site.js'
import * as Spotting from './spotting.js'
import * as Surface from './surface.js'
import { Genome } from './genome.js'

test('Genome', () => {
  expect(Configs.genome instanceof Array).toEqual(true)
  expect(Crown.genome instanceof Array).toEqual(true)
  expect(Docs.genome instanceof Array).toEqual(true)
  expect(Ignition.genome instanceof Array).toEqual(true)
  expect(Mortality.genome instanceof Array).toEqual(true)
  expect(Site.genome instanceof Array).toEqual(true)
  expect(Spotting.genome instanceof Array).toEqual(true)
  expect(Surface.genome instanceof Array).toEqual(true)
  expect(Genome instanceof Array).toEqual(true)
})

// eslint-disable-next-line no-unused-vars
function listGenome (genome) {
  let str = ''
  genome.forEach(gene => {
    const [nodeKey, nodeInfo] = gene // Each Gene has a nodeKey and an info array
    const [variantInfo, updaterInfo] = nodeInfo
    const variantKey = variantInfo[0]
    str += `${nodeKey}, ${variantKey}\n`
    updaterInfo.forEach(updater => {
      str += `    - ${updater.join(' ')}\n`
    })
  })
  return str
}
//  console.log(listGenome(Site.genome))
