import { Status, Tactic } from './ContainConstants.js'

/**
 * ContainSegment defines the state of a segment of the fire perimeter control line:
 * - the segment's line construction beginning and ending angles
 * - the current time step's line construction beginning and ending angles
 * - the current time step's line construction beginning and ending coordinates
 *
 * Usually a segment is one of the flanks (half) of the fire ellipse perimeter.
 */
export class ContainSegment {
  /**
   *
   * @param {ContainFire} fire
   * @param {ContainForce} force
   * @param {ContainTactic} tactic
   * @param {number} attackDistance Control line construction distance from fire perimeter leading edge (ch)
   */
  constructor (segmentKey, fire, force, tactic, attackDistance) {
    this._key = segmentKey
    this._fire = fire
    this._force = force
    this._tactic = tactic
    this._attackDistance = attackDistance
    this._status = Status.Reported
    this.init()
  }

  init () {
    // Initial angle to attack point depends on whether HeadAttack or RearAttack
    this._uBegin = (this.tactic === Tactic.RearAttack) ? Math.PI : 0
    this._uEnd = (this.uBegin === 0) ? 180 : Math.PI
    this._u0 = this._uBegin
    this._u1 = this._u0

    // Just in case we want to monitor or access step parameters
    this._h0 = this._h1 = this._msr0 = this._msr1 = 0

    // Coordinates of initial point of line construction
    const msr = this._force.initialAttackMsr(this._key)
    this._x0 = (this.tactic === Tactic.RearAttack)
      ? -this._fire.backingDistance(msr) - this._force.attackDistance()
      : this._fire.headingDistance(msr) + this._force.attackDistance()
    this._x1 = this._x0
    this._y0 = 0 // y at start of step
    this._y1 = 0 // y at end of step
    // Cumulative line constructed and area within the line
    this._line = 0 // line constructed during the time step
    this._sumLine = 0 // cumulative line constructed
    this._suma = 0 // cumulative sum of y0 * x1 for calculating area via trapazoidal rule
    this._sumb = 0 // cumulative sum of y1 * x0 for calculating area via trapazoidal rule
    this._area = 0 // cumulative area swept by constructed line
    this._rkpr = [0, 0, this.productionRatio(msr)]
  }

  /**
   * Determines the next value of the angle from the fire origin to the
   * point of active fireline construction (this._u1)
   *
   * @param {number} msr0 Time step's begnning minutes-since-report
   * @param {*} timeStep Time step's duration (minutes)
   * @param {*} h0 Free-burning fire head position at beginning of time step
   * @param {*} distStep Free-burning head spread distance at end of time step
   * @returns TRUE if ContainForce is not overrun and deriv.uh has valid result.
   */
  calcU (msr0, timeStep, h0, distStep) {
    // Store the previous step's ending angle (u1) as this step's starting angle (t0)
    this._u0 = this._u1
    const u0 = this._u0 // save some typing
    // Calculate constants used in the 4th order Runga-Kutta approximation.
    this._rkpr[0] = this._rpk[2]
    this._rkpr[1] = this.productionRatio(msr0 + (0.5 * timeStep))
    this._rkpr[2] = this.productionRatio(msr0 + timeStep)

    // Object to hold mutable results of calcUh(), especially deriv.uh and deriv.lastUh
    const deriv = { du: 0, dh: 0, uh: 0, lastUh: 0 }
    // First constant
    if (!this.calcUh(this._rkpr[0], h0, u0, deriv)) { return false }
    const rk1 = distStep * deriv.uh
    // Second constant
    if (!this.calcUh(this._rkpr[1], (h0 + 0.5 * distStep), (u0 + 0.5 * rk1), deriv)) { return false }
    const rk2 = distStep * deriv.uh
    // Third constant
    if (!this.calcUh(this._rkpr[1], (h0 + 0.5 * distStep), (u0 + 0.5 * rk2), deriv)) { return false }
    const rk3 = distStep * deriv.uh
    // Fourth constant
    if (!this.calcUh(this._rkpr[2], (h0 + distStep), (u0 + rk3), deriv)) { return false }
    const rk4 = distStep * deriv.uh
    // Calculate 4th order Runga-Kutta approximation of u for next step.
    this._u1 = u0 + (rk1 + rk4 + 2 * (rk2 + rk3)) / 6
    return true
  }

  /**
   * Determines du/dh for a particular u, h, and p, and returns the value in deriv.uh.
   *
   * If there is a negative term under the radical,
   * which is indicative of the ContainResources being overrun by the fire,
   * this._status is set to Status.Overrun and the function returns FALSE.
   * Similarly if a sign change occurs in du/dh.
   *
   * @param {number} p Fireline production ratio (line rate / spread rate)
   * @param {number} h Current distance of free-burning fire head from the origin (ch).
   * @param {number} u Current angle from the fire origin to the point of active fireline construction.
   * @param {object} deriv Object with following properties:
   *  - dh is the change in fire perimeter distance at point of attack
   *  - du is the change in angle of attack point from fire origin
   *  - uh is the du/dh derivative
   *
   * @returns TRUE if ContainResources are not overrun and deriv.uh has valid result.
  */
  calcUh (p, h, u, deriv) {
    const cosU = Math.cos(u)
    const sinU = Math.sin(u)
    deriv.uh = 0

    // If the expression under the radical sign is negative,
    // must change course to avoid a complex (number) result
    const x = 1 - this._fire._eps * cosU
    const uhRadical = (p * p * x / (1 + this._fire._eps * cosU)) - this._fire._a * this._fire._a

    // The gcc and VC6 compilers yield different results for uhRadical
    // as ros approaches the fireline production rate;
    // uhRadical approaches zero faster under VC6 than under gcc.
    // Enable the following containLog() calls to demonstrate.
    // let str = `\nStep ${this._step + 1}: p=${p}, h=${h}, u=${u}, sinU=${sinU}, cosU=${cosU}\n`
    // str += `           x=${x}, this._fire._eps=${this._fire._eps}, this._a=${this._fire._a}, uhRadical=${uhRadical}\n`
    deriv.uhRadical = uhRadical
    if (uhRadical <= 1.0e-10) {
      this._status = Status.Overrun
      return false
    }
    // dh is the change in *fire perimeter* distance at point of attack
    deriv.dh = x * h
    if (this._attackDistance > 0.001) {
      deriv.dh = x * (h + (1 - this._eps) *
        (this._attackDistance * Math.sqrt(1 - this._fire._eps2) /
        Math.exp(1.5 * Math.log(1 - (this._fire._eps2 * cosU * cosU)))))
    }
    // du is the change in angle of attack point from fire origin
    const term1 = this._fire._eps * sinU
    const term2 = (1 + this._fire._eps) * Math.sqrt(uhRadical)
    deriv.du = (this._tactic === Tactic.RearAttack) ? term1 - term2 : term1 + term2
    deriv.uh = deriv.du / deriv.dh
    // str += `           sqrt(uhRadical)=${Math.sqrt(uhRadical)}, du=${deriv.du}, dh=${deriv.dh}, uh(du/dh)=${deriv.uh}\n`
    // this.log(str)
    return true
  }

  /*! \brief Determines the x- and y- coordinates ( m_x and m_y)
 *  for the current angle (m_u) and free-burning head position (m_h).
 */

  /**
   * Determines coordinates of current point of active line construction.
   * @param {number} u Current angle of active line construction
   * @param {number} h Free-burning fire head position
   * @returns Modifies instance properties this._x and this._y
   */
  calcCoordinates (u, h) {
    this._x0 = this._x1
    this._y0 = this._y1
    // Determine the x and y coordinate.
    this._x1 = (Math.cos(u) + this._fire._eps) * h / (1 + this._fire._eps)
    this._y1 = Math.sin(u) * h * this._fire._a
    if (this._attackDistance > 0) {
      const psiVal = this.containPsi(u, this._fire._eps2)
      this._x1 += this._attackDistance * Math.cos(psiVal)
      this._y1 += this._attackDistance * Math.sin(psiVal)
    }
    // Line constructed and area swept during this simulation step
    const dx = Math.abs(this._x0 - this._x1)
    const dy = Math.abs(this._y0 - this._y1)
    this._line = Math.sqrt((dy * dy) + (dx * dx))
    this._sumLine += this._line
    // Accumulate area of containment (apply trapazoidal rule)
    this._suma += (this._y0 * this._x1)
    this._sumb += (this._x0 * this._y1)
    this._area = (this._suma > this._sumb)
      ? 0.5 * (this._suma - this._sumb)
      : 0.5 * (this._sumb - this._suma)
  }

  /**
   * Used only in the case of parallel attack, this function supplies
   * values of Psi when translating from u,h to x,y.
   */
  containPsi (u, eps2) {
    // As u gets close to pi/2, accuracy of the arctan becomes problematic,
    // so we check for this and fudge.
    const ro = u - (Math.PI / 2)
    let uo = u
    if (Math.abs(ro) < 0.00001) {
      uo = (Math.PI / 2) + (ro > 0) ? 0.00001 : -0.00001
    }
    // Since Psi is never negative in our simulation,
    // we need to map into the appropriate quadrant.
    const psiVal = Math.atan((Math.sin(uo) / Math.cos(uo)) / Math.sqrt(1 - eps2))
    return (psiVal < 0) ? psiVal + Math.PI : psiVal
  }

  /**
   * Determines the ratio of the line construction rate on this segment
   * to the fire heading spread rate at minutes-since-report
   *
   * @param {number} msr Minutes since report
   * @returns {number} Ratio of the line construction rate on this segment
   * to the fire heading spread rate at minutes-since-report
   */
  productionRatio (msr) {
    const line = this._force.productionRate(msr, this._key)
    const fire = Math.max(this._fire._headingSpreadRate(msr), 0.0001)
    return line / fire
  }

  /**
   * Determines the fireline segment constructed during a single time step, inclduing
   * - the angle from the fire origin to the point of active fireline construction (this._u1)
   * - the coordinates of the point of active fireline construction (relative to fire origin)
   *
   * @param {number} msr0 Time step's begnning minutes-since-report
   * @param {*} timeStep Time step's duration (minutes)
   * @param {*} h0 Free-burning fire head position at beginning of time step
   * @param {*} distStep Free-burning head spread distance at end of time step
   * @returns Status code
   */
  step (msr0, timeStep, h0, distStep) {
    this._status = Status.Attacked
    this._msr0 = msr0
    this._msr1 = msr0 + timeStep
    this._h0 = h0
    this._h1 = h0 + distStep // save so ContainRunner can access interpolated result

    const ok = this.calcU(msr0, timeStep, h0, distStep)
    if (ok) {
      // If the forces contain the fire, interpolate the final u and h.
      if (this._tactic === Tactic.HeadAttack && this._u1 >= Math.PI) {
        this._status = Status.Contained
        this._h1 = h0 - distStep * this._u0 / (this._u0 + Math.abs(this._u1))
        this._u1 = Math.PI
      } else if (this._tactic === Tactic.RearAttack && this._u1 <= 0) {
        this._status = Status.Contained
        this._h1 = h0 + distStep * this._u0 / (this._u0 + Math.abs(this._u1))
        this._u1 = 0
      }
      this.calcCoordinates(this._u1, this._h1)
    } else {
      this._status = Status.Overrun
    }
    return this._status
  }
}
