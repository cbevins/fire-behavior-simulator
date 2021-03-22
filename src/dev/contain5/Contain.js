/*! \file contain.cpp Fire containment algorithm.
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
export const Tactic = { Head: 'Head', Rear: 'Rear' }
export const Flank = { Left: 'Left', Right: 'Right', Both: 'Both' }

// ------------------------------------------------------------------------------
/*! \brief Contain constructor.
 *
 *  \param reportSize Fire size at time of report (ac)
 *  \param reportRate Fire spread rate at time of report (ch/h).
 *  \param lwRatio    Fire length-to-width ratio.
 *  \param distStep   Simulation fire head distance step size (ch).
 *  \param flank      Apply ContainResources assigned to the Left or Right
 *                    flank.  ContainResources assigned to Both flanks have
 *                    half their production rate applied to this flank.
 *  \param force      Pointer to the ContainForce applied to the fire.
 *  \param attackTime Elapsed time since fire report that ContainForces
 *                    are first committed to the fire.  This may be after the
 *                    arrival of one or more resources.
 *  \param tactic     HeadAttack or RearAttack.
 *  \param attackDist Forces build fireline this far from the fire edge (ch).
 *  \param limitDist  Stop simulation after fire travels this distance (ch).
 */

export class Contain {
  constructor (reportSize, reportRate, lwRatio, distStep,
    flank, // ContainFlank
    force, // ContainForce
    attackTime,
    tactic, // ContainTactic
    attackDist,
    limitDist) {
    this._reportSize = reportSize
    this._reportRate = reportRate
    this._lwRatio = lwRatio
    this._attackDist = attackDist
    this._attackTime = attackTime
    this._distStep = 0.01
    this._limitDist = limitDist
    this._flank = flank
    this._tactic = tactic
    this._force = force
    this._eps = 1
    this._eps2 = 1
    this._a = 1
    this._reportHead = 0
    this._reportTime = 0
    this._backRate = 0
    this._reportBack = 0
    this._attackHead = 0
    this._attackBack = 0
    this._initialAttackHead = 0
    this._initialAttackBack = 0
    this._exhausted = 0
    this._time = 0
    this._step = 0
    this._u = 0
    this._u0 = 0
    this._h = 0
    this._h0 = 0
    this._x = 0
    this._y = 0
    this._status = Status.Unreported
    // Set all the input parameters.
    this.setReport(reportSize, reportRate, lwRatio, distStep)
    this.setAttack(flank, force, attackTime, tactic, attackDist)
    // Set all the intermediate parameters.
    this.reset()
    // Store the initial this._attackHead and this._attackBack variables
    this._initialAttackHead = this._attackHead
    this._initialAttackBack = this._attackBack
  }

  // ------------------------------------------------------------------------------
  /*! \brief Determines the next value of the angle from the fire origin to the
 *  point of active fireline construction.
 *
 *  \retval Next value of the angle from the fire origin to the point of
 *              active fireline construction is stored in this._u.
 *  \retval Next value of free-burning head position is stored in this._h.
 *  \retval Current value of this._status may be reset to Overrun upon return!
 */

  calcU () {
    // Store the current u and h as the old u and h.
    this._u0 = this._u
    this._h0 = this._h
    this._status = Status.Attacked
    // Calculate constants used in the 4th order Runga-Kutta approximation.
    const rk = [0, 0, 0, 0]
    const deriv = { du: 0, dh: 0, uh: 0, lastUh: 0 }
    this._rkpr[0] = (this._step) ? this._rkpr[2] : this.productionRatio(this._attackHead)
    this._rkpr[1] = this.productionRatio(this._h0 + (0.5 * this._distStep))
    this._rkpr[2] = this.productionRatio(this._h0 + this._distStep)
    // First constant
    if (!this.calcUh(this._rkpr[0], this._h0, this._u0, /* & */ deriv)) { return }
    rk[0] = this._distStep * deriv.uh
    // Second constant
    if (!this.calcUh(this._rkpr[1], (this._h0 + 0.5 * this._distStep),
      (this._u0 + 0.5 * rk[0]), /* & */ deriv)) { return }
    rk[1] = this._distStep * deriv.uh
    // Third constant
    if (!this.calcUh(this._rkpr[1], (this._h0 + 0.5 * this._distStep),
      (this._u0 + 0.5 * rk[1]), /* & */ deriv)) { return }
    rk[2] = this._distStep * deriv.uh
    // Fourth constant
    if (!this.calcUh(this._rkpr[2], (this._h0 + this._distStep),
      (this._u0 + rk[2]), /* & */ deriv)) { return }
    rk[3] = this._distStep * deriv.uh

    // Calculate 4th order Runga-Kutta approximation of u for next step.
    this._u = this._u0 + (rk[0] + rk[3] + 2.0 * (rk[1] + rk[2])) / 6

    // Calculate next free-burning fire head position (ch from origin)
    this._h = this._attackHead + (this._step + 1) * this._distStep
  }

  // ------------------------------------------------------------------------------
  /*! \brief Determines du/dh for a particular u, h, and p,
 *  and returns the value in d.
 *
 *  If there is a negative term under the radical,
 *  which is indicative of the ContainResources being overrun by the fire,
 *  this._status is set to Overrun and the function returns FALSE.
 *  Similarly if a sign change occurs in du/dh.
 *
 *  \param p    Fireline production rate (ch/h).
 *  \param h    Current distance of free-burning fire head from the origin (ch).
 *  \param u    Current angle from the fire origin to the point of active
 *              fireline construction.
 *  \param deriv Object where
 *      deriv.dh is the change in fire perimeter distance at point of attack
 *      deriv.du is the change in angle of attack point from fire origin
 *      deriv.uh is  property where the du/dh derivative is returned,
 *      deriv.lastUh is yhe previous derive.uh value
 *
 *  \retval     TRUE if ContainResources are not overrun and d has valid result.
 *  \retval     FALSE if ContainResources are overrun, and this._status is
 *              set to Overrun.
 */

  calcUh (p, h, u, deriv) {
    // lastUh is used to check sign change between previous and current step
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
    this.containLog(false,
      '\nStep %04d: p=%15.13f, h=%15.13f, u=%15.13f, sinU=%15.12f, cosU=%15.13f\n',
      this._step + 1, p, h, u, sinU, cosU)
    this.containLog(false,
      '           x=%15.13f, this._eps=%15.13f, this._a=%15.13f, uh_radical=%15.13f\n',
      x, this._eps, this._a, uhRadical)

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
    this.containLog(false,
      '           sqrt(uh_radical)=%15.13f, du=%12.10f, dh=%12.10f, uh(du/dh)=%12.10f\n',
      Math.sqrt(uhRadical), deriv.du, deriv.dh, deriv.uh)

    // If "angular rotation" has reversed. firefighters may be overrun
    // and cannot even build line making NO rotational progress
    /* THE FOLLOWING CODE WAS REMOVED AT DIRECTION OF M.A.Finney and Fried
    if ( ( this._tactic === RearAttack && lastUh < 0. && uh >= 0. )
       | ( this._tactic === HeadAttack && lastUh > 0. && uh <= 0. ) ) {
        if ( this._step ) {
            this._status = Overrun;
            return( false );
        }
    }
    */
    // Store uh in lastUh and returned value
    deriv.lastUh = deriv.uh
    return true
  }

  // ------------------------------------------------------------------------------
  /*! \brief Determines the x- and y- coordinates ( this._x and this._y)
 *  for the current angle (this._u) and free-burning head position (this._h).
 */

  calcCoordinates () {
    // Determine the x and y coordinate.
    this._y = Math.sin(this._u) * this._h * this._a
    this._x = (Math.cos(this._u) + this._eps) * this._h / (1.0 + this._eps)
    if (this._attackDist > 0.001) {
      const psiVal = this.containPsi(this._u, this._eps2)
      this._y += this._attackDist * Math.sin(psiVal)
      this._x += this._attackDist * Math.cos(psiVal)
    }
  }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the time when all the ContainResources ar exhausted.
 *
 *  \return Time when all the ContainResources are exhausted
 *          (minutes since report).
 */

  exhausted () { return this._exhausted }

  // ------------------------------------------------------------------------------
  /*! \brief Determines the fire head position at the specified time.
 *
 *  \param minutesSinceReport The fire head position is determined for this
 *  many minutes since the fire was reported.
 *
 *  \note This function must be modified to support variable ROS fires.
 *
 *  \return Head position at the specified time (chains from fire origin).
 */

  headPosition (minutesSinceReport) {
    return this._reportHead + this._reportRate * minutesSinceReport / 60
  }

  // ------------------------------------------------------------------------------
  /*! \brief Determines the aggregate fireline production rate of the entire
 *  containment force on the specified flank when the free burning fire head
 *  would have reached the specified position.
 *  THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
 *  AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.
 *
 *  \param fireHeadPosition Position of the free-burning fire head (ch).
 *
 *  \return Aggregate containment force holdable fireline production rate
 *  (ch/h).
 */
  productionRate (fireHeadPosition) {
    const minutesSinceReport = this.timeSinceReport(fireHeadPosition)
    const prod = this._force.productionRate(minutesSinceReport, this._flank)
    return prod
  }

  // ------------------------------------------------------------------------------
  /*! \brief Determines the ratio of the aggregate fireline production rate of
 *  the entire containment force on the specified flank when the free burning
 *  fire head would have reached the specified position,
 *  to the fire head spread rate at that specified time.
 *
 *  THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
 *  AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.
 *
 *  \param fireHeadPosition Position of the free-burning fire head (ch).
 *
 *  \return Ratio of the aggregate containment force holdable fireline
 *  production rate to the fire head spread rate.
 */

  productionRatio (fireHeadPosition) {
    const minutesSinceReport = this.timeSinceReport(fireHeadPosition)
    const prod = this._force.productionRate(minutesSinceReport, this._flank)
    const fire = Math.max(this.spreadRate(minutesSinceReport), 0.0001)
    const ratio = prod / fire
    return ratio
  }

  // ------------------------------------------------------------------------------
  /*! \brief Initializes the Contain state from the current parameter values.
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
    this._rkpr[0] = this._rkpr[1] = this._rkpr[2] = 0
    this._status = Status.Reported // Also means that we're initialized

    // Log it
    this.containLog(false, '\n\nCONTAIN RESET-----------------------------\n\n')
    this.containLog(false, 'Eta   = %12.10f\n', this._distStep)
    this.containLog(false, 'eps   = %12.10f\n', this._eps)
    this.containLog(false, 'EpsSq = %12.10f\n', this._eps2)
    this.containLog(false, 'A     = %12.10f\n', this._a)
    this.containLog(false, 'hr    = %12.10f\n', this._reportHead)
    this.containLog(false, 'ho    = %12.10f\n', this._attackHead)
  }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the number of ContainResources in the containment force.
 *
 *  \return Number of ContainResources in the ContainForce.
 */
  resources () { return this._force._count }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the arrival time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's arrival time (minutes since fire was reported).
 */

  resourceArrival (index) { return this._force.resourceArrival(index) }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the specified ContainmentResouce's description.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's description.
 */
  resourceDescription (index) { return this._force.resourceDescription(index) }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the duration time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's duration time (minutes).
 */
  resourceDuration (index) { return this._force.resourceDuration(index) }

  // ------------------------------------------------------------------------------
  /*! \brief API access to the holdable fireline production rate of the
 *  specified ContainmentResouce ON BOTH FLANKS.  The rate for one flank
 *  is half this amount, since the resource is assumed to be split in two
 *  and working on both flanks simultaneously.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's holdable fireline production rate (ch/h).
 */
  resourceProduction (index) { return this._force.resourceProduction(index) }

  // ------------------------------------------------------------------------------
  /*! \brief Sets the Contain attack parameters.
 *
 *  \param flank      Apply ContainResources assigned to the Left or Right
 *                    flank.  ContainResources assigned to Both flanks have
 *                    half their production rate applied to this flank.
 *  \param force      Pointer to the ContainForce applied to the fire.
 *  \param attackTime Elapsed time since fire report that ContainForces
 *                    are first committed to the fire.  This may be after the
 *                    arrival of one or more resources.
 *  \param tactic     HeadAttack or RearAttack.
 *  \param attackDist Forces build fireline this far from the fire edge (ch).
 */
  setAttack (/* ContainFlank */ flank, /* ContainForce */ force,
    attackTime, /* ContainTactic */ tactic, attackDist) {
    this._flank = flank
    this._force = force
    this._attackTime = attackTime
    this._tactic = tactic
    this._attackDist = attackDist
    this._exhausted = this._force.exhausted(this._flank)
  }

  // ------------------------------------------------------------------------------
  /*! \brief Sets the Contain fire report time parameters.
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

  // ------------------------------------------------------------------------------
  /*! \brief Determines the fire head spread rate at the specified time.
 *
 *  \param minutesSinceReport Minutes since the fire was reported.
 *          Currently UNUSED until support for variable ROS is added.
 *
 *  Note: This function must be modified to support variable ROS fires.
 *
 *  \return Fire head spread rate (ch/h).
 */
  spreadRate (/* minutesSinceReport */) { return this._reportRate }

  // ------------------------------------------------------------------------------
  /*! \brief Performs one containment simulation step by incrementing the head
 *  position by the distance step \a this._distStep.
 *
 *  \retval Current fire status.
 */
  step () {
    // Determine next angle and fire head position.
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
      return (this._status)
    }
    // If the forces contain the fire, interpolate the final u and h.
    if (this._tactic === Tactic.HeadAttack && this._u >= Math.PI) {
      this._status = Status.Contained
      this._h = this._h0 - this._distStep * this._u0 / (this._u0 + Math.abs(this._u))
      this._u = this.PI
    } else if (this._tactic === Tactic.RearAttack && this._u <= 0) {
      this._status = Status.Contained
      this._h = this._h0 + this._distStep * this._u0 / (this._u0 + Math.abs(this._u))
      this._u = 0
    }
    // Determine the x and y coordinate.
    this.calcCoordinates()
    return this._status
  }

  /*! \brief Determines time since fire report at which the free-burning fire
 *  head position reaches the specified distance from the fire origin (min).
 *
 *  \param headPos Free-burning fire head position (chains from origin).
 *
 *  Note: This function must be modified to support variable ROS fires.
 *
 *  \return Time since fire report (min).
 */
  timeSinceReport (headPos) {
    return (this._reportRate > 0) ? 60 * (headPos - this._reportHead) / this._reportRate : 0
  }
}
