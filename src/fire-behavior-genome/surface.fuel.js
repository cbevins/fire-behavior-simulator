/**
 * @file Top-level surface fuel genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as SurfaceFuelBed from './surface.fuel.bed.js'
import * as SurfaceFuelFire from './surface.fuel.fire.js'
import * as SurfaceFuelModel from './surface.fuel.model.js'

export function genome (prefix) {
  return [
    ...SurfaceFuelBed.genome(prefix),
    ...SurfaceFuelFire.genome(prefix),
    ...SurfaceFuelModel.genome(prefix)
  ]
}
