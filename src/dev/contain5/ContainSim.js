/* eslint-disable brace-style */
/**
 * ContainSim custom constructor.
 *
 * ContainSim contains all the information to make a complete simulation run,
 * and when completed, display the fire perimeter in Cartesian coordinates.
 *
 * The following inputs are usually provided by the client:
 * @param {number} reportSize Fire size at time of report (ac)
 * @param {number} reportRate Fire spread rate at time of report (ch/h).
 * @param {number} lwRatio Fire length-to-width ratio.
 * @param {ContainForce} force Reference to the ContainForce applied to the fire.
 * @param {string} tactic One of Tactic.Head ('Head') or Tactic.Rear ('Rear)
 * @param {number} attackDist Forces build fireline this far from the fire edge (ch).
 * @param {number} limitDist Stop simulation after fire travels this distance (ch). BehavePlus uses 1,000,000 ch.
 *
 * The following inputs can usually be fixed parameters:
 * @param {number} minSteps Minimum number of simulation distance steps [200].
 * @param {number} maxSteps Maximum number of simulation distance steps [1000].
 * @param {boolean} retry If TRUE, if forces are overrun, the simulation is re-run
 *   starting with the next later resource attack time.
 */
import { Contain, Tactic, Status, Flank } from './Contain.js'

export class ContainSim {
  constructor (reportSize, reportRate, lwRatio, force, tactic, attackDist = 0,
    limitDist = 1000000, retry = true, minSteps = 200, maxSteps = 1000) {
    this._finalCost = 0
    this._finalPerim = 0
    this._finalSize = 0
    this._finalSweep = 0
    this._finalTime = 0
    this._xMax = 0
    this._xMin = 0
    this._yMax = 0
    this._u = 0
    this._h = 0
    this._x = 0
    this._y = 0
    this._a = 0
    this._p = 0
    this._left = 0
    this._right = 0
    this._force = force
    this._minSteps = minSteps
    this._size = 0
    this._pass = 0
    this._used = 0
    this._retry = retry

    // Estimate distance step size for the initial simulation.
    // May be adjusted in subsequent simulations to get the number of
    // simulation steps in the range [this._minSteps..this._maxSteps].
    this._maxSteps = Math.max(10, maxSteps)
    const distStep = force.exhausted(Flank.Left) * (reportRate / 60) /
                    (this._maxSteps - 2)

    // Try attacking at first resource arrival.
    // If the initial attack forces are overrun, subsequent simulations
    // delay the initial attack until the next arrival of forces.
    const attackTime = this._force.firstArrival(Flank.Left)

    // Create the left flank
    this._left = new Contain(reportSize, reportRate, lwRatio, force, tactic, attackDist,
      attackTime, distStep, limitDist, Flank.Left)

    // Create the right flank
    // attackTime = this._force->firstArrival( RightFlank )
    // this._right = new Contain( reportSize, reportRate, lwRatio, distStep,
    //    force, attackTime, tactic, Flank.Right, attackDist )

    // How big do the arrays need to be?
    this._size = (this._right) ? 2 * this._maxSteps : this._maxSteps

    this._u = [] // Array of attack point angles (radians) at each simulation step.
    this._h = [] // Array of free-burning fire head positions (ch) at each simulation step.
    this._x = [] // Array of attack point x coordinates (ch) at each simulation step.
    this._y = [] // Array of attack point y coordinates (ch) at each simulation step.
    this._a = [] // Array of area under the perimeter curve (ch2) burned at each sim step.
    this._p = [] // Array of fireline perimeter (ch) constructed at each simulation step.
  }

  /**
   * Runs the simulation to completion.
   *
   *  The simulation is completed whenever:
   *  - the containment resources are overrun,
   *  - the fire is contained, or
   *  - all containment resources are exhausted.
  */
  run () {
    let at, elapsed, factor

    // Log levels : 0=none, 1=major events, 2=stepwise
    const logLevel = 1
    // Repeat simulation until [this._minSteps::this._maxSteps] steps achieved,
    // or if retry==TRUE, until sufficient resources are able to contain fire
    let area, dx, dy, suma, sumb
    let rerun = true
    this._pass = 0

    while (rerun) {
      this.containLog((logLevel >= 1), '\nPass %d Begins:\n', this._pass)
      // Simulate until forces overrun, fire contained, or maxSteps reached
      let iLeft = 0 // First index of left half values
      this._u.push(this._left._u)
      this._h.push(this._left._h)
      this._x.push(this._left._x)
      this._y.push(this._left._y)
      // int iRight = this._maxSteps;  // First index of right half values
      elapsed = this._left._attackTime
      this.containLog((logLevel === 2),
        '%d: u=%12.10f,  h=%12.10f,  t=%f\n',
        iLeft, this._left._u, this._left._h, elapsed)

      // This is the main simulation loop!
      this._finalSweep = 0
      this._finalLine = 0
      this._finalPerim = 0
      suma = sumb = 0

      // Special case when no fire spread
      if (this._left._reportRate < 0.0001) {
        this._left._status = Status.Contained
        rerun = false
        this.containLog((logLevel >= 1),
          'Pass %d Result 0: Contained\n' +
                '    - reported spread rate %f ch/h at %3.1f minutes (%d steps)\n' +
                '    - re-run is FALSE\n' +
                '    - FIRE CONTAINED at %3.1f minutes\n',
          this._pass, this._left._reportRate, elapsed, this._left._step, elapsed)
        continue
      }
      // This is the main simulation loop!
      while (this._left._status !== Status.Overrun &&
            this._left._status !== Status.Contained &&
            this._left._status !== Status.LimitDist &&
            this._left._step < this._maxSteps) {
        // Store angle and head position in the proper array element
        this._left.step()

        // Store the new angle, head position, and coordinate values
        iLeft++
        this._u.push(this._left._u)
        this._h.push(this._left._h)
        this._x.push(this._left._x)
        this._y.push(this._left._y)
        elapsed = this._left._time
        this.containLog((logLevel === 2),
          '%d: u=%12.10f,  h=%12.10f,  t=%12.10f\n',
          iLeft, this._u[iLeft], this._h[iLeft], elapsed)
        // Update the extent
        this._xMin = Math.min(this._x[iLeft], this._xMin)
        this._xMax = Math.max(this._x[iLeft], this._xMax)
        this._yMax = Math.max(this._y[iLeft], this._yMax)

        // Line constructed and area swept during this simulation step
        dy = Math.abs(this._y[iLeft - 1] - this._y[iLeft])
        dx = Math.abs(this._x[iLeft - 1] - this._x[iLeft])
        this._p[iLeft - 1] = Math.sqrt((dy * dy) + (dx * dx))
        // Accumulate line constructed for BOTH flanks (ch)
        this._finalLine += 2 * this._p[iLeft - 1]
        // Accumulate area of containment (apply trapazoidal rule)
        suma += (this._y[iLeft - 1] * this._x[iLeft])
        sumb += (this._x[iLeft - 1] * this._y[iLeft])
        area = (suma > sumb)
          ? (0.5 * (suma - sumb))
          : (0.5 * (sumb - suma))
            // Accumulate area for BOTH flanks (ac)
        this._a[iLeft - 1] = 0.2 * area
      }
      // BEHAVEPLUS FIX: Adjust the last x-coordinate for contained head attacks
      if (this._left._status === Status.Contained &&
          this._left._tactic === Tactic.HeadAttack) {
        this._x[this._left._step] -= 2 * this._left._attackDist
      }

      suma += (this._y[this._left._step] * this._x[0])
      sumb += (this._x[this._left._step] * this._y[0])
      this._finalSweep = (suma > sumb)
        ? (0.5 * (suma - sumb))
        : (0.5 * (sumb - suma))
      this._finalSweep *= 0.2

      // Cases 1-3: forces are overrun by fire...
      if (this._left._status === Status.Overrun) {
        // Case 1: No retry allowed, simulation is complete
        if (!this._retry) {
          rerun = false
          this.containLog((logLevel >= 1),
            'Pass %d Result 1: Overrun\n' +
                    '    - resources overrun at %3.1f minutes (%d steps)\n' +
                    '    - re-run is FALSE\n' +
                    '    - FIRE ESCAPES at %3.1f minutes\n',
            this._pass, elapsed, this._left._step, elapsed)
        }
        // Case 2: Try initial attack after more forces have arrived
        else if ((at = this._force.nextArrival(this._left._attackTime,
          this._left._exhausted, Flank.Left)) > 0.01) {
          this.containLog((logLevel >= 1),
            'Pass %d Result 2: Retry\n' +
                    '    - resources overrun at %3.1f minutes (%d steps)\n' +
                    '    - Pass %d will wait for IA until %3.1f minutes\n' +
                    '    - when line building rate will be %3.2f ch/h\n' +
                    '    - RE-RUN\n',
            this._pass, elapsed, this._left._step, this._pass + 1,
            at, this._force.productionRate(at, Flank.Left))
          this._pass++
          this._left._attackTime = at
          this._left.reset()
          rerun = true
        }
        // Case 3: All resources exhausted
        else {
          // No more forces available, so we're done
          rerun = false
          this.containLog((logLevel >= 1),
            'Pass %d Result 3: Exhausted\n' +
                    '    - resources exhausted at %3.1f minutes (%d steps)\n' +
                    '    - FIRE ESCAPES at %3.1f minutes\n',
            this._pass, elapsed, this._left._step, elapsed)
          this._left._status = Status.Exhausted
        }
      }
      // Case 4: maximum number of steps was exceeded
      else if (iLeft >= this._maxSteps) {
        // Make the distance step size bigger and rerun the simulation
        // factor = (double) this._maxSteps / (double) this._minSteps;
        factor = 0.5 * this._maxSteps / this._minSteps
        this.containLog((logLevel >= 1),
          'Pass %d Result 4: Less Precision\n' +
                '    - fire uncontained at %f minutes\n' +
                '    - %d steps exceeds maximum of %d steps\n' +
                '    - increasing Eta from %f to %f chains for next Pass %d\n' +
                '    - RE-RUN\n',
          this._pass, elapsed, this._left._step, this._maxSteps,
          this._left._distStep, (this._left._distStep * factor), this._pass + 1)
        this._left._distStep *= factor
        this._pass++
        this._left.reset()
        rerun = true
      }
      // Cases 5-6: fire is contained...
      else if (this._left._status === Status.Contained) {
        // Case 5: there were insufficient simulation steps...
        if (iLeft < this._minSteps) {
          // Make the distance step size smaller and rerun the simulation
          // factor = (double) ( this._left._step + 1 ) / (double) this._maxSteps;
          factor = (this._left._step + 1) / (this._maxSteps - this._minSteps)
          this.containLog((logLevel >= 1),
            'Pass %d Result 5: More Precision\n' +
                    '    - fire contained at %3.1f minutes\n' +
                    '    - %d steps is less than minimum of %d steps\n' +
                    '    - decreasing Eta from %f to %f chains for Pass %d\n' +
                    '    - RE-RUN\n',
            this._pass, elapsed, this._left._step, this._minSteps,
            this._left._distStep, (this._left._distStep * factor), this._pass + 1)
          this._left._distStep *= factor
          this._pass++
          this._left.reset()
          rerun = true
        }
        // Case 6: fire contained within the simulation step range
        else {
          rerun = false
          this.containLog((logLevel >= 1),
            'Pass %d Result 6: Contained\n' +
                    '    - FIRE CONTAINED at %3.1f minutes (%d steps)\n',
            this._pass, elapsed, this._left._step)
        }
      }
      // Case 7: spread distance exceeded
      else if (this._left._status === Status.LimitDist) {
        rerun = false
        this.containLog((logLevel >= 1),
          'Pass %d Result 7: LimitDist\n' +
                '    - DISTANCE LIMIT %3.2f exceeded at %3.1f minutes (%d steps)\n',
          this._pass, this._left._limitDist, elapsed, this._left._step)
      }
      // Case 8: anything else (should never get here!)...
      else {
        rerun = true
        this.containLog((logLevel >= 1),
          'Pass %d Result 8:\n' +
                '    - unknown condition at %3.1f minutes (%d steps)\n' +
                '    - RE-RUN\n',
          this._pass, elapsed, this._left._step)
      }
    }
    // Special case for contained head tactic with non-zero offset
    if (this._left._status === Status.Contained &&
      this._left._tactic === Tactic.HeadAttack &&
      // eslint-disable-next-line no-empty
      this._left._attackDist > 0.01) {
    }
    // Simulation complete: display results
    this.finalStats()
    this.containLog((logLevel > 0),
      '\n    Pass %d Step Size  : %f ch\n', this._pass, this._left._distStep)
    this.containLog((logLevel > 0),
      '    Tactic            : %8s\n', this._left._tactic)
    this.containLog((logLevel > 0),
      '    Simulation Steps  : %8d\n', this._left._step + 1)
    this.containLog((logLevel > 0),
      '    Simulation Time   : %8.2f min\n', this._finalTime)
    this.containLog((logLevel > 0),
      '    Simulation Result : %s\n', this._left._status)
    this.containLog((logLevel > 0),
      '    Containment Line  : %8.4f ch\n', this._finalLine)
    this.containLog((logLevel > 0),
      '    Containment Size  : %8.4f ac\n', this._finalSize)
    this.containLog((logLevel > 0),
      '    Resources Used    : %8d\n', this._used)
    this.containLog((logLevel > 0),
      '    Resource Cost     : %8.0f\n\n', this._finalCost)
  }

  // ------------------------------------------------------------------------------
  /*! \brief Prints final fire and containment statistics.
 */
  finalStats () {
    // Final time
    this._finalTime = this._left._time
    // So far we know the containment area and line constructed
    this._finalPerim = this._finalLine
    this._finalSize = 0
    if (this._left._status === Status.Contained) {
      this._finalSize = this._finalSweep
    }
    // Resources used
    this._force.resources().foreach(resource => {
      if (resource._arrival < this._finalTime) {
        this._used++
        this._finalCost += this._force.resourceCost(resource, this._finalTime)
      }
    })
  }

  // ------------------------------------------------------------------------------
  /*! \brief Logs the message to stdout.
 */
  containLog (dolog, fmt, ...rest) {
    if (dolog) {
      console.log(rest)
    }
  }

  // ------------------------------------------------------------------------------
  /*! \brief Used only in the case of parallel attack, this function supplies
 *  values of Psi when translating from u,h to x,y.
 */
  containPsi (u, eps2) {
    // As u gets close to pi/2, accuracy of the arctan becomes problematic,
    // so we check for this and fudge.
    const ro = u - Math.PI / 2
    if (Math.abs(ro) < 0.00001) {
      if (ro > 0) {
        u = (Math.PI / 2) + 0.00001
      } else {
        u = (Math.PI / 2) - 0.00001
      }
    }
    // Since Psi is never negative in our simulation,
    // we need to map into the appropriate quadrant.
    let psiVal = Math.atan((Math.sin(u) / Math.cos(u)) / Math.sqrt(1.0 - eps2))
    if (psiVal < 0) {
      psiVal += Math.PI
    }
    return psiVal
  }
}
