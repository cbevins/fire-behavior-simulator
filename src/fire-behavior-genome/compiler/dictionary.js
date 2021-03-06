/**
 * @file dictionary.js helper file for GenomeCompiler.js
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/

const surf = 'surface'
const c = 'crown'

export const dict = {}
dict.sf = `${surf}.fire`
dict.sfe = `${dict.sf}.ellipse`
dict.sfea = `${dict.sfe}.axis`
dict.sfeb = `${dict.sfe}.back`
dict.sfef = `${dict.sfe}.flank`
dict.sfeh = `${dict.sfe}.head`
dict.sfehdg = `${dict.sfe}.heading`
dict.sfep = `${dict.sfe}.psi`
dict.sfe5 = `${dict.sfe}.beta5`
dict.sfe6 = `${dict.sfe}.beta`
dict.sfem = `${dict.sfe}.map`
dict.sfes = `${dict.sfe}.size`
dict.sfev = `${dict.sfe}.vector`

dict.spf = `${surf}.primary.fuel`
dict.spfb = `${dict.spf}.bed`
dict.spfbd = `${dict.spfb}.dead`
dict.spfbdpc = `${dict.spfbd}.particle.class`
dict.spfbl = `${dict.spfb}.live`
dict.spfblpc = `${dict.spfbl}.particle.class`
dict.spff = `${dict.spf}.fire`
dict.spffs = `${dict.spff}.spread`
dict.spffss = `${dict.spffs}.step`
dict.spfm = `${dict.spf}.model`
dict.spfmb = `${dict.spfm}.behave`
dict.spfmbd = `${dict.spfmb}.derived`
dict.spfmbp = `${dict.spfmb}.parms`
dict.spfmc = `${dict.spfm}.chaparral`
dict.spfmcd = `${dict.spfmc}.derived`
dict.spfmcp = `${dict.spfmc}.parms`
dict.spfmp = `${dict.spfm}.palmettoGallberry`
dict.spfmpd = `${dict.spfmp}.derived`
dict.spfmpp = `${dict.spfmp}.parms`
dict.spfmw = `${dict.spfm}.westernAspen`
dict.spfmwd = `${dict.spfmw}.derived`
dict.spfmwp = `${dict.spfmw}.parms`

dict.ssf = `${surf}.secondary.fuel`
dict.ssfb = `${dict.ssf}.bed`
dict.ssfbd = `${dict.ssfb}.dead`
dict.ssfbdpc = `${dict.ssfbd}.particle.class`
dict.ssfbl = `${dict.ssfb}.live`
dict.ssfblpc = `${dict.ssfbl}.particle.class`
dict.ssff = `${dict.ssf}.fire`
dict.ssffs = `${dict.ssff}.spread`
dict.ssffss = `${dict.ssffs}.step`
dict.ssfm = `${dict.ssf}.model`
dict.ssfmb = `${dict.ssfm}.behave`
dict.ssfmbd = `${dict.ssfmb}.derived`
dict.ssfmbp = `${dict.ssfmb}.parms`
dict.ssfmc = `${dict.ssfm}.chaparral`
dict.ssfmcd = `${dict.ssfmc}.derived`
dict.ssfmcp = `${dict.ssfmc}.parms`

dict.ssfmp = `${dict.ssfm}.palmettoGallberry`
dict.ssfmpd = `${dict.ssfmp}.derived`
dict.ssfmpp = `${dict.ssfmp}.parms`

dict.ssfmw = `${dict.ssfm}.westernAspen`
dict.ssfmwd = `${dict.ssfmw}.derived`
dict.ssfmwp = `${dict.ssfmw}.parms`

dict.swf = `${surf}.weighted.fire`

dict.beta = 'packingRatio'
dict.cc = `${c}.canopy`
dict.ccf = `${dict.cc}.fuel`
dict.ccfb = `${dict.ccf}.bed`
dict.ccfbd = `${dict.ccfb}.dead`
dict.ccfbdpc = `${dict.ccfbd}.particle.class`
dict.ccfbl = `${dict.ccfb}.live`
dict.ccfblpc = `${dict.ccfbl}.particle.class`
dict.ccff = `${dict.ccf}.fire`
dict.ccffs = `${dict.ccff}.spread`
dict.ccffss = `${dict.ccffs}.step`

dict.cf = `${c}.fire`
dict.cfa = `${dict.cf}.active`
dict.cfam = `${dict.cfa}.map`
dict.cfas = `${dict.cfa}.size`
dict.cff = `${dict.cf}.final`
dict.cffm = `${dict.cff}.map`
dict.cffs = `${dict.cff}.size`
dict.cfi = `${dict.cf}.initiation`
dict.cfs = `${dict.cf}.surface`

dict.cfg = 'configure'
dict.chf = 'cured.herb.fraction'
dict.cls = 'crownLengthScorched'
dict.cvs = 'crownVolumeScorched'
dict.dp = 'bed.dead.particle.class'
dict.dfl = 'deadFineLoad'
dict.dsl = 'deadSmallLoad'
dict.dml = 'deadMediumLoad'
dict.dll = 'deadLargeLoad'
dict.dfol = 'deadFoliageLoad'
dict.dlit = 'deadLitterLoad'
dict.dr = 'docs.run'
dict.ef = 'effectiveFuel'
dict.emc = 'effective.mineralContent'
dict.etam = 'moistureDamping'
dict.etas = 'mineralDamping'
dict.ew = 'effectiveWindSpeed'
dict.ext = 'extinction'
dict.fd = 'fiberDensity'
dict.fl = 'flameLength'
dict.fli = 'firelineIntensity'
dict.ft = 'spotDistance.flatTerrain'
dict.ftd = 'spotDistance.flatTerrainWithDrift'
dict.ig = 'ignition'
dict.mt = 'spotDistance.mountainTerrain'
dict.fbc = 'firebrand.criticalCoverHeight'
dict.fbd = 'firebrand.drift'
dict.fbh = 'firebrand.height'
dict.gamma = 'propagatingFluxRatio'
dict.hc = 'heatOfCombustion'
dict.hn = 'heatingNumber'
dict.hp = 'heatOfPreignition'
dict.hpa = 'heatPerUnitArea'
dict.hno = 'heading.fromNorth'
dict.hup = 'heading.fromUpslope'
dict.ils = 'ignition.lightningStrike'
dict.lfl = 'liveFineLoad'
dict.lsl = 'liveSmallLoad'
dict.lml = 'liveMediumLoad'
dict.lll = 'liveLargeLoad'
dict.lfol = 'liveFoliageLoad'
dict.lp = 'bed.live.particle.class'
dict.lwr = 'lengthToWidthRatio'
dict.maxDir = 'maximumDirection'
dict.mc = 'moistureContent'
dict.md = 'mapDistance'
dict.nol = 'net.ovendryLoad'
dict.obs = 'observed'
dict.ol = 'ovendryLoad'
dict.phi = 'windSlopeSpreadRateCoefficient'
dict.phis = 'slope.phi'
dict.phiw = 'wind.phi'
dict.phiew = 'phiEffectiveWind'
dict.pr = 'probability'
dict.ros = 'spreadRate'
dict.rxi = 'reactionIntensity'
dict.rxv = 'reactionVelocity'
dict.sa = 'surfaceArea'
dict.savr = 'surfaceAreaToVolumeRatio'
dict.sc = 'sizeClass'
dict.sd = 'spreadDistance'
dict.sh = 'scorchHeight'
dict.spb = 'spotting.burningPile'
dict.spc = 'spotting.crownFire'
dict.sps = 'spotting.surfaceFire'
dict.spt = 'spotting.torchingTrees'
dict.taur = 'flameResidenceTime'
dict.tm = 'treeMortality'
dict.tmc = 'total.mineralContent'
dict.vol = 'volume'
dict.waf = 'windSpeedAdjustmentFactor'
dict.wb = 'wind.factor.b'
dict.wc = 'wind.factor.c'
dict.we = 'wind.factor.e'
dict.wf = 'weightingFactor'
dict.wi = 'wind.factor.i'
dict.wk = 'wind.factor.k'
dict.wl = 'waterLoad'
dict.wsm = 'wind.speed.atMidflame'

dict.x = 'site'
dict.xc = `${dict.x}.canopy`
dict.xf = `${dict.x}.fire`
dict.xfo = `${dict.xf}.observed`
dict.xm = `${dict.x}.moisture`
dict.xs = `${dict.x}.slope`
dict.xt = `${dict.x}.temperature`
dict.xtr = `${dict.x}.terrain`
dict.xtrvd = `${dict.xtr}.ridgeValleyDistance`
dict.xtrve = `${dict.xtr}.ridgeValleyElevation`
dict.xtsrc = `${dict.xtr}.spotSourceLocation`
dict.xw = `${dict.x}.wind`
dict.xwd = `${dict.xw}.direction`
dict.xws = `${dict.xw}.speed`
dict.sm = `${dict.x}.map`
