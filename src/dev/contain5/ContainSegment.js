/*! \file ContainSegment.js Fire containment algorithm.
 *  \version BehavePlus3
 *  \author Copyright (C) 2002-2004 by Collin D. Bevins.  All rights reserved.
 *
 *  This is a fire containment algorithm based upon the paper
 *      Fried, Jeremy S. and Fried, Burton D.  199?.
 *          Simulating wildfire containment with realistic tactics.
 *  and heavily adapted from the FCAT Fire Containment Algorithm Test Pascal
 *  program by Jeremy S. Fried (1991).
 *
 *  Primary assumptions are that the fire is growing under uniform fuel,
 *  terrain, and weather conditions, resulting in a steadily growing
 *  elliptical fire (except where contained).
 *
 *  Containment "tactics" may be either head or rear attack.
 *  Containment resources are evenly divided and applied to each flank.
 *
 *  All times (elapsed, resource arrival, containment time, etc)
 *  are from when the fire was first \b reported.
 */

export const Status = {
  Unreported: 'Unreported', // 0
  Reported: 'Reported', // 1
  Attacked: 'Attacked', // 2
  Contained: 'Contained', // 3
  Overrun: 'Overrun', // 4
  Exhausted: 'Exhausted', // 5
  SimOverflow: 'Sim Overflow', // 6
  LimitDist: 'LimitDist' // 7
}
export const Tactic = { HeadAttack: 'HeadAttack', RearAttack: 'RearAttack' }
export const Flank = { Left: 'Left', Right: 'Right', Both: 'Both' }

/**
 * ContainSegment class
 *
 * @param {number} reportSize Fire size at time of report (ac)
 * @param {number} reportRate Fire spread rate at time of report (ch/h).
 * @param {number} lwRatio    Fire length-to-width ratio.
 * @param {ContainForce} force Reference to the ContainForce applied to the fire.
 * @param {string} tactic One of Tactic.HeadAttack ('HeadAttack') or Tactic.RearAttack ('RearAttack')
 * @param {number} attackDist Forces build fireline this far from the fire edge (ch).
 * @param {number} attackTime Minutes since fire report that ContainForces are first committed
 *  to the fire.  This may be after the arrival of one or more resources.
 * @param {number} distStep Simulation fire head distance step size (ch). (This is estimated by ContainSim as:
 *  distStep = force.exhausted(Flank.Left) * (reportRate / 60) / (maxSteps - 2)
 * @param {number} limitDist Stop simulation after fire travels this distance (ch). BehavePlus uses 1,000,000 ch.
 * @param {string} flank Which flank to simulate. Flank.Left ('Left') or Flank.Right ('Right').
 *  ContainResources are assigned to the Flank.Left ('Left'),  Flank.Right ('Right'),
 *  or Flank.Both ('Both'), in which case half their production rate applied to this flank.
 */

export class ContainSegment {
  constructor (reportSize, reportRate, lwRatio, force, tactic, attackDist,
    attackTime, distStep, limitDist, flank) {
    // These are set initially here by constructor, and may be later reset via setReport()
    this._reportSize = reportSize
    this._reportRate = reportRate
    this._lwRatio = lwRatio
    this._distStep = distStep
    this.setReport(reportSize, reportRate, lwRatio, distStep)

    // These are set initially here by constructor, and may be later reset by setAttack()
    this._attackDist = attackDist
    this._attackTime = attackTime
    this._flank = flank
    this._tactic = tactic
    this._force = force
    this._exhausted = force.exhausted(flank)
    this.setAttack(flank, force, attackTime, tactic, attackDist)

    this._limitDist = limitDist

    // The following are calculated by reset()
    this._eps = 1
    this._eps2 = 1
    this._a = 1
    this._reportHead = 0 // Fire head position at time of report (ch)
    this._reportTime = 0 // Estimated elapsed time from fire start to time of report (min)
    this._backRate = 0 // Backing fire rate
    this._reportBack = 0 // Fire back position at first attack (estimated from _reportTime)
    this._attackHead = 0 // fire head position at time of first attack
    this._attackBack = 0 // fire back position at time of first attack (estimated from _reportTime)

    // The following are initialized by reset(), updated by calcU(), calcUh(), and/or step()
    this._time = 0 // Current step time since fire report (min), updated in step()
    this._step = 0 // Incremented by step() after calcU(), updated in step()
    this._u = 0 // attack angle at exit from function calcU()
    this._u0 = 0 // attack angle at entry to function calcU()
    this._h = 0 // head position at exit from function calcU()
    this._h0 = 0 // head position at entry to function calcU()
    this._x = 0 // x-coordinate of constructed line for current free burning head position and angle, with attack offset
    this._y = 0 // y-coordinate of constructed line for current free burning head position and angle, with attack offset
    this._rkpr = [0, 0, 0] // Constants used in the 4th order Runga-Kutta approximation.
    this._status = Status.Unreported
    this.reset()

    // Store the initial this._attackHead and this._attackBack variables in case of delayed IA
    this._initialAttackHead = this._attackHead // NEVER USED ???
    this._initialAttackBack = this._attackBack // NEVER USED ???
  }

  /**
   * Determines the next value of the angle from the fire origin to the
   * point of active fireline construction.
   *
   * The next value of the angle from the fire origin to the point of
   * active fireline construction is stored in this._u.
   *
   * The next value of free-burning head position is stored in this._h.
   *
   * The current value of this._status may be reset to Status.Overrun upon return!
  */
  calcU () {
    // Store the current u and h as the old u and h.
    this._u0 = this._u
    this._h0 = this._h
    this._status = Status.Attacked
    // Calculate constants used in the 4th order Runga-Kutta approximation.
    this._rkpr[0] = (this._step) ? this._rkpr[2] : this.productionRatio(this._attackHead)
    this._rkpr[1] = this.productionRatio(this._h0 + (0.5 * this._distStep))
    this._rkpr[2] = this.productionRatio(this._h0 + this._distStep)

    // Object to hold mutable results of calcUh(), especially deriv.uh and deriv.lastUh
    const deriv = { du: 0, dh: 0, uh: 0, lastUh: 0 }
    // First constant
    if (!this.calcUh(this._rkpr[0], this._h0, this._u0, deriv)) { return }
    const rk1 = this._distStep * deriv.uh
    // Second constant
    if (!this.calcUh(this._rkpr[1], (this._h0 + 0.5 * this._distStep),
      (this._u0 + 0.5 * rk1), deriv)) { return }
    const rk2 = this._distStep * deriv.uh
    // Third constant
    if (!this.calcUh(this._rkpr[1], (this._h0 + 0.5 * this._distStep),
      (this._u0 + 0.5 * rk2), deriv)) { return }
    const rk3 = this._distStep * deriv.uh
    // Fourth constant
    if (!this.calcUh(this._rkpr[2], (this._h0 + this._distStep),
      (this._u0 + rk3), deriv)) { return }
    const rk4 = this._distStep * deriv.uh

    // Calculate 4th order Runga-Kutta approximation of u for next step.
    this._u = this._u0 + (rk1 + rk4 + 2.0 * (rk2 + rk3)) / 6

    // Calculate next free-burning fire head position (ch from origin)
    this._h = this._attackHead + (this._step + 1) * this._distStep
  }

  /**
   * Determines du/dh for a particular u, h, and p, and returns the value in deriv.uh.
   *
   * If there is a negative term under the radical,
   * which is indicative of the ContainResources being overrun by the fire,
   * this._status is set to Status.Overrun and the function returns FALSE.
   * Similarly if a sign change occurs in du/dh.
   *
   * @param {number} p Fireline production rate (ch/h).
   * @param {number} h Current distance of free-burning fire head from the origin (ch).
   * @param {number} u Current angle from the fire origin to the point of active fireline construction.
   * @param {object} deriv Object with following properties:
   *  - dh is the change in fire perimeter distance at point of attack
   *  - du is the change in angle of attack point from fire origin
   *  - uh is the du/dh derivative
   *  - lastUh is the previous uh (du/dh derivative) value
   *
   * @returns TRUE if ContainResources are not overrun and d has valid result.
   *  FALSE if ContainResources are overrun, and this._status is set to Status.Overrun.
  */
  calcUh (p, h, u, deriv) {
    // deriv.lastUh is used to check sign change between previous and current step
    const cosU = Math.cos(u)
    const sinU = Math.sin(u)
    deriv.uh = 0

    // If the expression under the radical sign is negative,
    // must change course to avoid a complex (number) result
    const x = 1 - this._eps * cosU
    const uhRadical = (p * p * x / (1 + this._eps * cosU)) - this._a * this._a

    // The gcc and VC6 compilers yield different results for uh_radical
    // as ros approaches the fireline production rate;
    // uh_radical approaches zero faster under VC6 than under gcc.
    // Enable the following containLog() calls to demonstrate.
    let str = `\nStep ${this._step + 1}: p=${p}, h=${h}, u=${u}, sinU=${sinU}, cosU=${cosU}\n`
    str += `           x=${x}, this._eps=${this._eps}, this._a=${this._a}, uhRadical=${uhRadical}\n`

    if (uhRadical <= 1.0e-10) {
      this._status = Status.Overrun
      return false
    }
    // dh is the change in fire perimeter distance at point of attack
    deriv.dh = x * h
    if (this._attackDist > 0.001) {
      deriv.dh = x * (h + (1 - this._eps) *
           (this._attackDist * Math.sqrt(1 - this._eps2) /
             Math.exp(1.5 * Math.log(1 - (this._eps2 * cosU * cosU)))))
    }
    // du is the change in angle of attack point from fire origin
    if (this._tactic === Tactic.RearAttack) {
      deriv.du = this._eps * sinU - (1 + this._eps) * Math.sqrt(uhRadical)
    } else {
      deriv.du = this._eps * sinU + (1 + this._eps) * Math.sqrt(uhRadical)
    }
    deriv.uh = deriv.du / deriv.dh
    str += `           sqrt(uh_radical)=${Math.sqrt(uhRadical)}, du=${deriv.du}, dh=${deriv.dh}, uh(du/dh)=${deriv.uh}\n`
    this.log(str)

    // If "angular rotation" has reversed. firefighters may be overrun
    // and cannot even build line making NO rotational progress
    /* THE FOLLOWING CODE WAS REMOVED AT DIRECTION OF M.A.Finney and Fried
    if ( ( this._tactic === RearAttack && deriv.lastUh < 0 && deriv.uh >= 0)
      || ( this._tactic === HeadAttack && deriv.lastUh > 0 && deriv.uh <= 0) ) {
        if ( this._step ) {
            this._status = Overrun
            return false
        }
    }
    Store uh in lastUh and returned value
    deriv.lastUh = deriv.uh
    */
    return true
  }

  /**
   * Determines the x- and y- coordinates ( this._x and this._y)
   * for the current angle (this._u) and free-burning head position (this._h).
  */
  calcCoordinates () {
    this._y = Math.sin(this._u) * this._h * this._a
    this._x = (Math.cos(this._u) + this._eps) * this._h / (1.0 + this._eps)
    if (this._attackDist > 0.001) {
      const psiVal = this.containPsi(this._u, this._eps2)
      this._y += this._attackDist * Math.sin(psiVal)
      this._x += this._attackDist * Math.cos(psiVal)
    }
  }

  /**
   * Time (minutes since report) when all the ContainResources will be exhausted.
  */
  exhausted () { return this._exhausted }

  /**
   * Determines the fire head position at the specified time.
   * \TO DO Modify to support variable ROS fires.
   *
   * @param {number} minutesSinceReport The fire head position is determined for this
   *  many minutes since the fire was reported.
   * @returns {number} Head position at the specified time (chains from fire origin).
  */
  headPosition (minutesSinceReport) {
    return this._reportHead + this._reportRate * minutesSinceReport / 60
  }

  /**
   * Determines the aggregate fireline production rate of the entire containment force
   * on the specified flank when the free burning fire head would have reached the specified position.
   *
   * NOTE: Forces committed to BOTH flanks half half their production assigned to EACH flank.
   *
   * @param {number} fireHeadPosition Position of the free-burning fire head (ch).
   * @returns {number} Aggregate containment force holdable fireline production rate (ch/h).
  */
  productionRate (fireHeadPosition) {
    const minutesSinceReport = this.timeSinceReport(fireHeadPosition)
    const prod = this._force.productionRate(minutesSinceReport, this._flank)
    return prod
  }

  /**
   * Determines the ratio of the aggregate fireline production rate of the entire containment force
   * on the specified flank when the free burning fire head would have reached the specified position,
   *  to the fire head spread rate at that specified time.
   *
   * @param {number} fireHeadPosition Position of the free-burning fire head (ch).
   * @returns {number} Ratio of the aggregate containment force holdable fireline production rate
   * to the fire head spread rate.
  */
  productionRatio (fireHeadPosition) {
    const minutesSinceReport = this.timeSinceReport(fireHeadPosition)
    const prod = this._force.productionRate(minutesSinceReport, this._flank)
    const fire = Math.max(this.spreadRate(minutesSinceReport), 0.0001)
    const ratio = prod / fire
    return ratio
  }

  /**
   * Initializes the Contain state from the current parameter values.
   *
   *  Should be called after calling either setAttack() or setReport().
   */
  reset () {
    // Eccentricity
    const r = 1 / this._lwRatio
    this._eps2 = 1 - (r * r)
    this._eps = (this._eps2 > 0.00001) ? Math.sqrt(this._eps2) : 0
    this._a = Math.sqrt((1 - this._eps) / (1 + this._eps))

    // Fire head position at time of report (ch)
    const ch2 = 10 * this._reportSize
    this._reportHead = (1 + this._eps) * Math.sqrt(ch2 / (Math.PI * Math.sqrt(1 - this._eps2)))

    // Elapsed time from fire start to time of report (min)
    // Used only to draw ellipses using fire start as origin
    if (this._reportRate > 0.0001) {
      this._reportTime = 60 * this._reportHead / this._reportRate
    }

    // Fire backing spread rate (ch/h)
    // (used only to draw ellipses when using fire start as axis origin)
    this._backRate = this._reportRate * (1 - this._eps) / (1 + this._eps)

    // Fire tail position at time of report (ch)
    // (used only to draw ellipses when using fire start as axis origin)
    this._reportBack = this._backRate * this._reportTime / 60

    // Fire head position at first attack
    this._attackHead = this.headPosition(this._attackTime)

    // Fire back position at first attack
    // (used only to draw ellipses when using fire start as axis origin)
    this._attackBack = this._backRate * (this._reportTime + this._attackTime) / 60

    // Initial angle to attack point depends on whether HeadAttack or RearAttack
    if (this._tactic === Tactic.RearAttack) {
      this._u = this._u0 = Math.PI
      this._x = -this._attackBack - this._attackDist
    } else {
      this._u = this._u0 = 0
      this._x = this._attackHead + this._attackDist
    }
    this._h = this._h0 = this._attackHead
    this._y = 0

    // Initialization
    this._step = 0
    this._time = 0
    this._rkpr = [0, 0, 0]
    this._status = Status.Reported // Also means that we're initialized

    // Log it
    let str = '\n\nCONTAIN RESET-----------------------------\n\n'
    str += `Eta   = ${this._distStep}\n`
    str += `eps   = ${this._eps}\n`
    str += `EpsSq = ${this._eps2}\n`
    str += `A     = ${this._a}\n`
    str += `hr    = ${this._reportHead}\n`
    str += `ho    = ${this._attackHead}\n`
    this.log(str)
  }

  // resources () { return this._force._resources.length }
  // resourceArrival (index) { return this._force.resourceArrival(index) }
  // resourceDescription (index) { return this._force.resourceDescription(index) }
  // resourceDuration (index) { return this._force.resourceDuration(index) }
  // resourceProduction (index) { return this._force.resourceProduction(index) }

  /**
   * Sets the Contain attack parameters.
   *
   * @param {string} flank Apply ContainResources assigned to the Left or Right flank.
   *  ContainResources assigned to Both flanks have half their production rate applied to this flank.
   * @param {ContainForce} force Reference to the ContainForce applied to the fire.
   * @param {number} attackTime Elapsed time since fire report that ContainForces
   *  are first committed to the fire.  This may be after the arrival of one or more resources.
   * @param {string} tactic One of Tactic.HeadAttack ('HeadAttack') or Tactic.RearAttack ('RearAttack')
   *  \param attackDist Forces build fireline this far from the fire edge (ch).
  */
  setAttack (flank, force, attackTime, tactic, attackDist) {
    this._flank = flank
    this._force = force
    this._attackTime = attackTime
    this._tactic = tactic
    this._attackDist = attackDist
    this._exhausted = this._force.exhausted(this._flank)
  }

  /**
   * Sets the Contain fire report time parameters.
   *
   *  \param reportSize Fire size at time of report (ac)
   *  \param reportRate Fire spread rate at time of report (ch/h).
   *  \param lwRatio    Fire length-to-width ratio
   *  \param distStep   Simulation fire head distance step size (ch).
  */
  setReport (reportSize, reportRate, lwRatio, distStep) {
    this._reportSize = reportSize
    this._reportRate = reportRate
    this._distStep = distStep
    this._lwRatio = Math.max(lwRatio, 1)
  }

  /**
   * Determines the fire head spread rate at the specified time.
   *
   * \TODO Modify to support variable spread rate over time
   *
   *  \param minutesSinceReport Minutes since the fire was reported.
   *          Currently UNUSED until support for variable ROS is added.
   *  \return Fire head spread rate (ch/h).
   */
  spreadRate (/* minutesSinceReport */) { return this._reportRate }

  /**
   * Performs one containment simulation step by incrementing the fire head position
   * by this._distStep.
   *
   * @returns Current fire status.
   */
  step () {
    // Determine next angle (u) and fire head position (h)
    this.calcU()
    // Increment step counter
    this._step++
    // Determine the elapsed time since the fire was reported.
    this._time = this.timeSinceReport(this._h)
    // Determine if spread distance limit has been exceeded
    if (this._h > this._limitDist) {
      this._status = Status.LimitDist
    }
    // If forces were overrun, simply return false
    if (this._status === Status.Overrun || this._status === Status.LimitDist) {
      console.log(this._status, 'at step', this._step)
      return (this._status)
    }
    // If the forces contain the fire, interpolate the final u and h.
    if (this._tactic === Tactic.HeadAttack && this._u >= Math.PI) {
      this._status = Status.Contained
      this._h = this._h0 - this._distStep * this._u0 / (this._u0 + Math.abs(this._u))
      this._u = Math.PI
    } else if (this._tactic === Tactic.RearAttack && this._u <= 0) {
      this._status = Status.Contained
      this._h = this._h0 + this._distStep * this._u0 / (this._u0 + Math.abs(this._u))
      this._u = 0
    }
    // Determine the x and y coordinate.
    this.calcCoordinates()
    // console.log(this._status, 'at step', this._step)
    return this._status
  }

  /**
   * Determines time since fire report at which the free-burning fire
   * head position reaches the specified distance from the fire origin (min).
   * \TODO Modify this function to support variable ROS fires.
   *
   * @param {number} headPos Free-burning fire head position (chains from origin).
   * @returns {number} Minutes since fire report the fire head reachs the position.
  */
  timeSinceReport (headPos) {
    return (this._reportRate > 0) ? 60 * (headPos - this._reportHead) / this._reportRate : 0
  }

  log (str, doLog = false) {
    if (doLog) console.log(str)
  }
}
