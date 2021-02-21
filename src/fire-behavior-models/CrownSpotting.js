/**
 * @file Exported WFSP crown fire spotting distance functions as described by Albini (1998) and
 * as implemented by BehavePlus v6.
  * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

/**
 * \brief Javascript implementation of "Program for predicting spotting distance
 * from an active crown fire in uniformly forested flat terrain", November 1998,
 * by Frank Albini.
 *
 * The following Javascript implementation was adopted from the MS FORTRAN source
 * code cited above and my 'dist2a.for' derivative (which is also the basis of the
 * C++ version in BehavePlus V6).
 */
export function firebrandObjectPrototype () {
  return {
    zdrop: 0,
    xdrop: 0,
    xdrift: 0,
    xspot: 0,
    layer: 0
  }
}

/**
 * Calculates crown firebrand dropout altitude and distance,
 * drift distance, and total flat terrain spot distance.
 *
 * Thin wrapper around dist() that performs input/output
 * units conversions native to BPX.
 *
 * @param {real} canopyHt Average crown top height of forest cover (ft)
 * @param {real} crownFli Fire intensity (Btu/ft/s)
 * @param {real} ws20 Wind speed at canopy top, (ft/min)
 *
 * @return {object}
 *  zdrop: firebrand dropout plume coordinate height (ft)
 *  xdrop: firebrand dropout plume coordinate horizontal distance (ft)
 *  xdrift: firebrand down-wind drift horizontal distance (ft)
 *  xspot:  firebrand down-wind spotting distance on flat terrain (ft)
 *  layer: plume profile layer where dropout occurs
 */
export function flatDistance (canopyHt, ws20, crownFli) {
  const fpm = 3.2808
  const htop = canopyHt / fpm
  const fikwpm = 3.46414 * crownFli
  // Anemometer wind speed must be km/h
  const uan = (1.60934 * ws20) / 88
  // Anemometer height (m)
  const anem = 6.096
  // utop is wind speed in m/s
  const utop = windSpeedAtCanopyTop(htop, uan, anem)
  const diam = 1
  const [z, x, drift, spot, layer] = dist(htop, fikwpm, utop, diam)
  return {
    zdrop: fpm * z,
    xdrop: fpm * x,
    xdrift: fpm * drift,
    xspot: fpm * spot,
    layer: layer
  }
}

/**
 * Simply returns the 'layer' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {int} Plume profile layer where dropout occurs
 */
export function layer (firebrandObj) {
  return firebrandObj.layer
}

/**
 * Simply returns the 'drift' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand down-wind drift horizontal distance (ft)
 */
export function xdrift (firebrandObj) {
  return firebrandObj.xdrift
}

/**
 * Simply returns the 'xdrop' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand dropout plume coordinate horizontal distance (ft)
 */
export function xdrop (firebrandObj) {
  return firebrandObj.xdrop
}

/**
 * Simply returns the 'spot' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand down-wind spotting distance on flat terrain (ft)
 */
export function xspot (firebrandObj) {
  return firebrandObj.xspot
}

/**
 * Simply returns the 'zdrop' property from the 'firebrand' object.
 *
 * @param {real} firebrandObj Object returned by flatDistance().
 * @return {real} Firebrand dropout plume coordinate height (ft)
 */
export function zdrop (firebrandObj) {
  return firebrandObj.zdrop
}

/**
 * Adapted from Albini's MS FORTRAN PROGRAM DIST().
 *
 * @param {real} htop Average crown top height of forest cover (m)
 * @param {real} fikwpm Fire intensity (kW/m) (must be > 1000 kW/m)
 * @param {real} utop Wind speed at canopy top, (m/s)
 * @param {real} diam Firebrand diameter when it reaches the surface (mm)
 *
 * @return {array} [fbHeight, fbDist, fbDrift, flatSpotDist, layer], where
 *  dbHeight is the firebrand dropout plume coordinate height (m)
 *  dbDist is the firebrand dropout plume coordinate distance (m)
 *  dbDrift is the firebrand down-wind drift distance (m)
 *  flatSpotDist is the firebrand down-wind spotting distance on flat terrain (m)
 *  layer is the plume profile layer
 */
export function dist (htop, fikwpm, utop, diam) {
  // flame = flame height above the canopy top (m)
  const flame = flameHeightAlbini(fikwpm, utop, htop)
  if (flame <= 0) {
    return [0, 0, 0, 0, 0]
  }
  // if (ido===2) fikwpm = fireIntensityAlbini(flame, utop, htop)

  // hf = normalized flame height above the canopy top (dl)
  const hf = flame / htop

  // uc = normalized wind speed at the crown top
  const g = 9.82 // Acceleration of gravity, m / s^2
  const wn = Math.sqrt(g * htop)
  const uc = utop / wn

  // dlosmm = ember diameter loss from the top of the plume till it hits the surface
  const dlosmm = 0.064 * htop

  // Display inputs and intermediates derived so far:
  // console.log('Mean height of forest (htop)', htop, '(m)')
  // console.log('Mean wind speed at anemometer height', uan, '(km/h)')
  // console.log('Mean height of flame above tops', flame, '(m)')
  // console.log('Fire intensity [input or calculated]', fikwpm, '(kW/m)')
  // console.log('Anemometer height', anem, '(m)')

  // console.log('hf (flame ht / canopy ht)', hf, '(dl)')
  // console.log('utop (wind speed at crown top)', utop, '(dl)')
  // console.log('uc (normalized wind at crown top)', uc, '(dl)')
  // console.log('wn (sqrt( g * htop ))', wn)
  // console.log('Firebrand alighting diameter', diam, '(mm)')
  // console.log('dlosmm (Ember diam loss=0.064 * htop)', dlosmm, '(mm)')

  // dhitmm = ember diameter when it hits the ground (mm)
  const dhitmm = diam

  // dtopmm = ember diameter when it reaches the top of the plume (mm)
  const dtopmm = dhitmm + dlosmm

  // eta = 'safety factor' for firebrand diameter on impact (eta > 1.)
  const eta = dtopmm / dlosmm

  // Determine firebrand dropout location within the plume.  Outputs are:
  //  zdrop = normalized vertical firebrand dropout altitude (dl) (m / htop)
  //  xdrop = corresponding dropout normalized distance down wind (dl) (m / htop)
  //  layer = plume layer where dropout occurs
  const [zdrop, xdrop, layer] = dropout(hf, uc, eta)

  // xdrift = normalized down wind drift distance (dl) (m / htop)
  const xdrift = drift(zdrop, eta, uc)

  // xspot = normalized total spotting distance on flat terrain (m / htop)
  const xspot = xdrop + xdrift

  // Convert normalized distances to m
  const fbHeight = zdrop * htop
  const fbDist = xdrop * htop
  const fbDrift = xdrift * htop
  const flatSpotDist = xspot * htop

  // console.log('Plume Drop-out Layer', layer)
  // console.log('Normalized dropout altitude', zdrop, '(m / htop)')
  // console.log('Normalized dropout distance', xdrop, '(m / htop)')
  // console.log('Normalized drift distance', xdrift, '(m / htop)')
  // console.log('Firebrand Height', fbHeight, '(m)')
  // console.log('Firebrand Distance', fbDist, '(m)')
  // console.log('Firebrand Drift', fbDrift, '(m)')
  // console.log('Flat spot distance',  flatSpotDist, '(m)')
  return [fbHeight, fbDist, fbDrift, flatSpotDist, layer]
}

/**
 * According to Albini:
 * "Calculates normalized down wind drift distance, 'delx',
 * for a firebrand particle injected into log profile wind field at
 * normalized altitude 'zdrop' and entering the canopy with diameter
 * equal to 'eta' times that necessary to reach the surface."
 *
 * Adapted from Frank Albini's 'drift.for' FORTRAN source, SUBROUTINE DRIFT()
 *
 * @param {real} zdrop Normalized firebrand drop-out altitude (dl) (m / htop)
 * @param {real} eta Safety factor (eta>1)
 * @param {real} uc Normalized horizontal wind speed at crown top (dl)
 *
 * @return {real} Normalized down wind firebrand drift distance (m / htop)
 */
export function drift (zdrop, eta, uc) {
  const f0 = 1 + 2.94 * zdrop
  const f1 = Math.sqrt(eta / (eta + zdrop))
  const f2 = eta > 0.34 ? Math.sqrt(eta / (eta - 0.34)) : 0
  const f3 = f1 > 0 ? f2 / f1 : 0
  const f2log = f2 > 1 ? Math.log((f2 + 1) / (f2 - 1)) : 0
  const f3log = f3 > 1 ? Math.log((f3 + 1) / (f3 - 1)) : 0
  const F = f3 > 0 ? 1 + Math.log(f0) - f1 + (f3log - f2log) / f3 : 0
  const xdrift = 10.9 * F * uc * Math.sqrt(zdrop + eta)
  return xdrift
}

/**
 * Calculates firebrand drop-out altitude and distance
 *
 * @param {real} hf  Normalized flame height above the canopy top (dl)
 * @param {real} uc Normalized horizontal wind speed at crown top (dl)
 * @param {real} eta Safety factor (eta>1)
 *
 * @returns {array} [zdrop, xdrop, layer], where
 *  zdrop = normalized vertical firebrand dropout altitude (dl) (m / htop)
 *  xdrop = corresponding dropout normalized distance down wind (dl) (m / htop)
 *  layer = plume layer where dropout occurs
 */
export function dropout (hf, uc, eta) {
  // Delta x-z iteration factor
  const ds = 0.2

  // qfac = constant used to determine sufficient qreq at each layer
  const qfac = uc > 0 ? 0.00838 / (uc * uc) : 0

  // Albini's tip()
  const rfc = 1 + 2.94 * hf
  let fm = 0.468 * rfc * Math.log(rfc)
  const fmuf = 1.3765 * (hf + rfc * Math.log(rfc) ** 2)
  const uf = fmuf / fm
  const ctn2f = rfc - 1 + rfc * Math.log(rfc) ** 2
  const tang = (1.4 * hf) / (uc * Math.sqrt(ctn2f))
  const ang = Math.atan(tang)
  const wf = tang * uf
  const vf = Math.sqrt(uf * uf + wf * wf)
  const rhof = 0.6
  const bf = fm / (rhof * vf)
  // end tip()

  let sing = Math.sin(ang)
  let cosg = Math.cos(ang)
  let delx = 0.5 * bf * sing
  let delz = 0.5 * bf * cosg

  const zc2 = hf
  const xc2 = hf / Math.tan(ang)
  const fmf = fm
  const tratf = (2 * fmf) / 3
  const fmadd = fm > 0 ? 0.2735 * fm : 0
  const hfarg = 1 + 2.94 * hf
  const fmuadd = 0.3765 * (hf + hfarg * Math.log(hfarg) ** 2)
  let fmw = fm * wf
  const dmwfac = uc > 0 ? (2 * fmf) / (3 * uc * uc) : 0
  let w = wf
  let V = vf
  let z = hf
  let x = xc2

  // Level 1
  let q = 0.5 * rhof * wf * wf
  let xb = delx
  let zb = 0

  // Level 2
  q = 0.5 * rhof * wf * wf
  xb = xc2 + delx
  zb = zc2 - delz
  let zp = zb
  let xp = xb

  let layer = 2
  let qreq = qfac * (zb + eta)
  if (q <= qreq) {
    // console.log('plume cannot lift a particle large enough to provide the "eta" saftey factor')
    return [0, 0, 0]
  }
  while (true) {
    layer += 1
    const dx = ds * cosg
    const dz = ds * sing
    x = x + dx
    z = z + dz
    const zarg = 1 + 2.94 * z
    fm = 0.34 * zarg * Math.log(zarg) + fmadd
    const fmu = z + 0.34 * zarg * Math.log(zarg) ** 2 + fmuadd
    const trat = 1 + tratf / fm
    const u = fmu / fm
    fmw = fmw + (dmwfac / V) * dz
    w = fmw / fm
    V = Math.sqrt(u * u + w * w)
    const b = (fm * trat) / V
    sing = w / V
    cosg = u / V
    delx = 0.5 * b * sing
    delz = 0.5 * b * cosg
    xb = x + delx
    zb = z - delz
    q = (0.5 * w * w) / trat
    qreq = qfac * (zb + eta)
    // Compare with dist2a_plume.csv
    // console.log(k, q[k], xb[k], zb[k], ang, dx, dz, x, z, zarg)
    // fm, fmu, trat, u, fmw, w, V, b, sing, cosg, delx, delz)
    if (q < qreq) {
      return [zp, xp, layer - 1]
    }
    zp = zb // store as previous layer value
    xp = xb // store as previous layer value
    if (layer > 50000) {
      throw new Error('dropout() exceeded 50000 layers')
    }
  }
}

/**
 * Calculates crown fire intensity from average flame HEIGHT above canopy top
 * as per Albini's MS FORTRAN FUNCTION FINT().
 *
 * @param {real} flame  Average flame height above canopy top (m)
 * @param {real} utop Mean wind speed at canopy top height (m/s)
 * @param {real} htop Canopy top height (m)
 * @return {real} fint Fire intensity (kW/m)
 */
export function fireIntensityAlbini (flame, utop, htop) {
  const y = htop > 0 ? 1 + (2.94 * flame) / htop : 0
  const con = y > 0 ? (y * Math.log(y)) : 0
  return (con * utop * htop) / 7.791e-3
}

/**
 * Calculates crown fire intensity from crown fire flame length
 * using Thomas equation.
 *
 * @param {real} flameLength Crown fire flame length (ft)
 * @return {real} Crown fire intensity (btu/ft/s)
 *  (multiply by 3.46414 to obtain kW/m)
 */
export function firelineIntensityThomas (flameLength) {
  return flameLength <= 0 ? 0 : Math.pow(5 * flameLength, 3 / 2)
}

/**
 * Estimates crown fire average flame HEIGHT (not length) above canopy top (m)
 *
 * Adapted from Albini's MS FORTRAN FUNCTION HEIGHT().
 *
 * @param {real} fikwpm Fire intensity (kW/m) (must be > 1000 kW/m)
 * @param {real} utop  Mean wind speed at canopy top (m/s)
 * @param {real} htop Average crown top height of forest cover (m)
 * @return {real} Average height of flame above canopy top (m)
 */
export function flameHeightAlbini (fikwpm, utop, htop) {
  if (htop * utop <= 0 || fikwpm < 1000) return 0
  const con = (7.791e-3 * fikwpm) / (utop * htop)
  let ylow = 1
  let yhigh = Math.exp(con)
  // As 'con' approaches 780, 'yhigh' approaches Infinity,
  // which causes endless binary seach loop.  So cap it...
  // console.log(`Start flameHeightAlbini(): con=${con}, yhigh=${yhigh}`)
  if (yhigh === Infinity) {
    yhigh = Number.MAX_VALUE
    // console.log(` RESET: con=${con}, yhigh=${yhigh}`)
  }
  let loop = 1
  while (true) {
    const y = 0.5 * (ylow + yhigh)
    const test = y * Math.log(y)
    if (Math.abs(test - con) <= 1e-6) {
      const height = (htop * (y - 1)) / 2.94
      // console.log(`Loop ${loop} ylow=${ylow}, yhigh=${yhigh}`)
      return height
    }
    loop = loop + 1
    if (loop > 10000) {
      // The following statement should never be executed, but still...
      throw new Error('flameHeightAlbini() binary search endless loop detected')
    }
    if (test >= con) yhigh = y
    if (test < con) ylow = y
  }
}

/**
 * Calculate crown fire flame length from crown fire intensity
 * using Thomas' equation.
 *
 * @param {real} fli Crown fire intensity (btu/ft/s)
 * @result {real} Crown fire flame length (ft)
 */
export function flameLengthThomas (fli) {
  return fli <= 0 ? 0 : 0.2 * Math.pow(fli, 2 / 3)
}

/**
 * Estimates the mean wind speed at canopy top (m/s)
 *
 * Adapted from Albini's MS FORTRAN PROGRAM DIST() around statements 45 to 50
 *
 * @param {real} htop Average crown top height of forest cover (m)
 * @param {real} uan Measured wind speed at anemometer height (km/h)
 * @param {real} anem Height of measured wind speed (m)
 * @return {real} utop Mean wind speed at canopy top (m/s)
 */
export function windSpeedAtCanopyTop (htop, uan, anem) {
  const zonh = htop > 0 ? anem / htop : 0
  const fact = 1 + Math.log(1 + 2.94 * zonh)
  const utop = uan / (3.6 * fact)
  return utop
}
