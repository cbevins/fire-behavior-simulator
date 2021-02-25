/**
 * @file Top-level surface genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import * as SurfaceEllipse from './surface.fire.ellipse.js'
import * as SurfaceFuel from './surface.fuel.js'
import * as SurfaceWeighted from './surface.weighted.js'

export const genome = [
  ...SurfaceFuel.genome('surface.primary.fuel'),
  ...SurfaceFuel.genome('surface.secondary.fuel'),
  ...SurfaceWeighted.genome,
  ...SurfaceEllipse.genome
]
