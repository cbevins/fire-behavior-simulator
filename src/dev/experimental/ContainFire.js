
/**
 * Defines the behavior of the fire to be contained.
 *
 * The constructor sets the fire ellipse head and back spread rates and distances
 * for the initial burning period that begins at the time-of-report.
 *
 * Additional fire burning periods may be defined by calling
 * - addPeriod(msr, headRate)
 */
export class ContainFire {
  constructor (reportSize, reportRate, lwRatio) {
    this.init(reportSize, reportRate, lwRatio)
    this.reset()
  }

  init (reportSize, reportRate, lwRatio) {
    // Eccentricity
    this._lwRatio = lwRatio
    const r = 1 / this._lwRatio
    this._eps2 = 1 - (r * r)
    this._eps = (this._eps2 > 0.00001) ? Math.sqrt(this._eps2) : 0
    this._a = Math.sqrt((1 - this._eps) / (1 + this._eps))

    // Free-burning fire head position (ch) at time of report (msr===0)
    this._reportSize = reportSize
    this._period = []
    this.addPeriod(0, reportRate)
  }

  // Re-initializes properties that vary by simulation time step
  reset () {
    // Current and previous free-burning fire head position from origin
    this._h = this._period[0].head.dist
    this._h0 = this._h
  }

  addPeriod (msr, headRate) {
    const backRate = this.calcBackingRate(headRate)
    // Free-burning fire head position (ch) at msr (i.e., at *start* of this period)
    let headDist = 0
    let backDist = 0
    if (msr === 0) { // time-of-report
      const ch2 = 10 * this._reportSize
      headDist = (1 + this._eps) * Math.sqrt(ch2 / (Math.PI * Math.sqrt(1 - this._eps2)))
      // Elapsed time from fire start to time of report (min)
      this._timeAtReport = (headRate > 0) ? 60 * headDist / headRate : 60 * 24
      backDist = backRate * this._timeAtReport / 60
    } else {
      const prev = this._schedule[this._schedule.length - 1]
      headDist = prev.head.dist + (msr - prev.msr) * prev.head.rate / 60
      backDist = prev.back.dist + (msr - prev.msr) * prev.back.rate / 60
    }
    this._period.push({
      msr: msr,
      head: { dist: headDist, rate: headRate },
      back: { dist: backDist, rate: backRate }
    })
  }

  calcBackingRate (headingRate) { return headingRate * (1 - this._eps) / (1 + this._eps) }

  periodOf (msr) {
    let idx = 0
    while (idx < this._period.length && this._period[idx].msr <= msr) { idx++ }
    return this._period[idx - 1]
  }

  backingDistance (msr) {
    const period = this.periodOf(msr)
    return period.back.dist + (msr - period.msr) * period.back.rate / 60
  }

  backingSpreadRate (msr) { return this.periodOf(msr).back.rate }

  headingDistance (msr) {
    const period = this.periodOf(msr)
    return period.head.dist + (msr - period.msr) * period.head.rate / 60
  }

  headingSpreadRate (msr) { return this.periodOf(msr).head.rate }
}
