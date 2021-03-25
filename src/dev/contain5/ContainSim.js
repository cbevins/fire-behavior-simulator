/* eslint-disable brace-style */
/**
 * ContainSim contains all the information to make a complete simulation run,
 * and when completed, display the fire perimeter in Cartesian coordinates.
 *
 * The following inputs are usually provided by the client:
 * @param {number} reportSize Fire size at time of report (ac)
 * @param {number} reportRate Fire spread rate at time of report (ch/h).
 * @param {number} lwRatio Fire length-to-width ratio.
 * @param {ContainForce} force Reference to the ContainForce applied to the fire.
 * @param {string} tactic One of Tactic.HeadAttack ('HeadAttack') or Tactic.RearAttack ('RearAttack')
 * @param {number} attackDist Forces build fireline this far from the fire edge (ch).
 * @param {number} limitDist Stop simulation after fire travels this distance (ch). BehavePlus uses 1,000,000 ch.
 *
 * The following inputs can usually be fixed parameters:
 * @param {number} minSteps Minimum number of simulation distance steps [200].
 * @param {number} maxSteps Maximum number of simulation distance steps [1000].
 * @param {boolean} retry If TRUE, if forces are overrun, the simulation is re-run
 *   starting with the next later resource attack time.
 */
import { ContainSegment, Tactic, Status, Flank } from './ContainSegment.js'

export class ContainSim {
  constructor (reportSize, reportRate, lwRatio, force, tactic, attackDist = 0,
    limitDist = 1000000, retry = true, minSteps = 200, maxSteps = 1000) {
    this._force = force // ContainForces reference
    this._minSteps = minSteps
    this._maxSteps = Math.max(10, maxSteps)
    this._retry = retry

    // Estimate distance step size for the initial simulation.
    // May be adjusted in subsequent simulations to get the number of
    // simulation steps in the range [this._minSteps..this._maxSteps].
    const distStep = force.exhausted(Flank.Left) * (reportRate / 60) / (this._maxSteps - 2)

    // Try attacking at first resource arrival.
    // If the initial attack forces are overrun, subsequent simulations
    // delay the initial attack until the next arrival of forces.
    let attackTime = this._force.firstArrival(Flank.Left)

    // Create the left flank
    this._left = new ContainSegment(reportSize, reportRate, lwRatio, force, tactic, attackDist,
      attackTime, distStep, limitDist, Flank.Left)

    // Create the right flank (Fried & Fried assume it to be symetrical with Flank.Left)
    attackTime = this._force.firstArrival(Flank.Right)
    this._right = new ContainSegment(reportSize, reportRate, lwRatio, force, tactic, attackDist,
      attackTime, distStep, limitDist, Flank.Right)

    // Results
    this._finalCost = 0
    this._finalLine = 0
    this._finalPerim = 0
    this._finalSize = 0
    this._finalSweep = 0
    this._finalTime = 0
    this._resourcesUsed = 0
    this._xMax = 0
    this._xMin = 0
    this._yMax = 0

    // Simulation step results (should expand for each ContainSegment)
    this._pass = 0
    this._h = [] // Array of free-burning fire head positions (ch) at each simulation step.
    this._u = [] // Array of attack point angles (radians) at each simulation step.
    this._x = [] // Array of attack point x coordinates (ch) at each simulation step.
    this._y = [] // Array of attack point y coordinates (ch) at each simulation step.
    this._a = [] // Array of area under the perimeter curve (ch2) burned at each sim step.
    this._p = [] // Array of fireline perimeter (ch) constructed at each simulation step.
  }

  // Called before each Pass
  initializePass () {
    this._h = [] // Array of free-burning fire head positions (ch) at each simulation step.
    this._u = [] // Array of attack point angles (radians) at each simulation step.
    this._x = [] // Array of attack point x coordinates (ch) at each simulation step.
    this._y = [] // Array of attack point y coordinates (ch) at each simulation step.
    this._a = [] // Array of area under the perimeter curve (ch2) burned at each sim step.
    this._p = [] // Array of fireline perimeter (ch) constructed at each simulation step.

    this._finalCost = 0
    this._finalLine = 0 // accumulated line constructed during Pass
    this._finalPerim = 0
    this._finalSize = 0
    this._finalSweep = 0 // accumulated fire area during pass
    this._finalTime = 0
    this._resourcesUsed = 0
    this._xMax = 0
    this._xMin = 0
    this._yMax = 0
  }

  /**
   * Runs the simulation to completion, which occurs when
   *  - the containment resources are overrun,
   *  - the fire is contained,
   *  - all containment resources are exhausted, or
   *  - distance or time limits are exceeded.
  */
  run () {
    let at, elapsed, factor
    // Repeat simulation until [this._minSteps::this._maxSteps] steps achieved,
    // or if retry==TRUE, until sufficient resources are able to contain fire
    let area = 0
    let dx = 0
    let dy = 0
    let suma = 0
    let sumb = 0
    let rerun = true
    this._pass = 0

    while (rerun) {
      console.log(`Pass ${this._pass} Begins:\n`)
      this.initializePass()
      // Simulate until forces overrun, fire contained, or maxSteps reached
      let iLeft = 0 // First index of left half values
      this._u.push(this._left._u)
      this._h.push(this._left._h)
      this._x.push(this._left._x)
      this._y.push(this._left._y)
      // int iRight = this._maxSteps;  // First index of right half values
      elapsed = this._left._attackTime
      // console.log(`${iLeft}: u=${this._left._u},  h=${this._left._h},  t=${elapsed}\n`)

      // This is the main simulation loop!
      suma = 0
      sumb = 0

      // Special case when no fire spread
      if (this._left._reportRate < 0.0001) {
        this._left._status = Status.Contained
        rerun = false
        console.log(`Pass ${this._pass} Result 0: Contained\n` +
          `  - reported spread rate ${this._left._reportRate} ch/h at ${elapsed} minutes (%d steps)\n` +
          '  - re-run is FALSE\n' +
          `  - FIRE CONTAINED at ${elapsed}\n`)
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
        // console.log(`${iLeft}: u=${this._u[iLeft]},  h=${this._h[iLeft]},  t=${elapsed}\n`)
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
        area = (suma > sumb) ? (0.5 * (suma - sumb)) : (0.5 * (sumb - suma))
        // Accumulate area for BOTH flanks (convert ch2 to ac for 2 flanks)
        this._a[iLeft - 1] = 2 * (0.1 * area)
      }
      // BEHAVEPLUS FIX: Adjust the last x-coordinate for contained head attacks
      if (this._left._status === Status.Contained &&
          this._left._tactic === Tactic.HeadAttack) {
        this._x[this._left._step] -= 2 * this._left._attackDist
      }

      suma += (this._y[this._left._step] * this._x[0])
      sumb += (this._x[this._left._step] * this._y[0])
      this._finalSweep = (suma > sumb) ? (0.5 * (suma - sumb)) : (0.5 * (sumb - suma))
      this._finalSweep *= 0.2 // convert from ch2 to ac (0.1), for 2 flanks

      // Cases 1-3: forces are overrun by fire...
      if (this._left._status === Status.Overrun) {
        // Case 1: No retry allowed, simulation is complete
        if (!this._retry) {
          rerun = false
          console.log(`Pass ${this._pass} Result 1: Overrun\n` +
            `  - resources overrun at ${elapsed} minutes (${this._left._step} steps)\n` +
            '  - re-run is FALSE\n' +
            `  - FIRE ESCAPES at ${elapsed} minutes\n'`)
        }
        // Case 2: Try initial attack after more forces have arrived
        else if ((at = this._force.nextArrival(this._left._attackTime,
          this._left._exhausted, Flank.Left)) > 0.01) {
          console.log(`Pass ${this._pass} Result 2: Retry\n` +
            `  - resources overrun at ${elapsed} minutes (${this._left._step} steps)\n` +
            `  - Pass ${this._pass + 1} will wait for IA until ${at} minutes\n` +
            `  - when production rate is ${this._force.productionRate(at, Flank.Left)}\n` +
            '  - RE-RUN\n')
          this._pass++
          this._left._attackTime = at
          this._left.reset()
          rerun = true
        }
        // Case 3: All resources exhausted
        else {
          // No more forces available, so we're done
          rerun = false
          console.log(`Pass ${this._pass} Result 3: Exhausted\n` +
            `  - resources exhausted at ${elapsed} minutes (${this._left._step} steps)\n` +
            `  - FIRE ESCAPES at ${elapsed} minutes\n`)
          this._left._status = Status.Exhausted
        }
      }
      // Case 4: maximum number of steps was exceeded
      else if (iLeft >= this._maxSteps) {
        // Make the distance step size bigger and rerun the simulation
        // factor = (double) this._maxSteps / (double) this._minSteps;
        factor = 0.5 * this._maxSteps / this._minSteps
        console.log(`Pass ${this._pass} Result 4: Less Precision\n` +
          `  - fire uncontained at ${elapsed} minutes\n` +
          `  - ${this._left._step} steps exceeds maximum of ${this._maxSteps} steps\n` +
          `  - increasing Eta from ${this._left._distStep} to ${this._left._distStep * factor} chains for next Pass ${this._pass + 1}\n` +
          '  - RE-RUN\n')
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
          console.log(`Pass ${this._pass} Result 5: More Precision\n` +
          `  - fire contained at ${elapsed} minutes\n` +
          `  - ${this._left._step} steps is less than minimum of ${this._minSteps} steps\n` +
          `  - decreasing Eta from ${this._left._distStep} to ${this._left._distStep * factor} chains for next Pass ${this._pass + 1}\n` +
          '  - RE-RUN\n')
          this.finalStats()
          this._left._distStep *= factor
          this._pass++
          this._left.reset()
          rerun = true
        }
        // Case 6: fire contained within the simulation step range
        else {
          rerun = false
          console.log(`Pass ${this._pass} Result 6: Contained\n` +
            `  - FIRE CONTAINED at ${elapsed} minutes (${this._left._step} steps)\n`)
        }
      }
      // Case 7: spread distance exceeded
      else if (this._left._status === Status.LimitDist) {
        rerun = false
        console.log(`Pass ${this._pass} Result 7: LimitDist\n` +
          `  - DISTANCE LIMIT ${this._left._limitDist} exceeded at ${elapsed} minutes (${this._left._step} steps)\n`)
      }
      // Case 8: anything else (should never get here!)...
      else {
        rerun = true
        console.log(`Pass ${this._pass} Result 8: UNKNOWN CONDITION\n` +
          `  - unknown condition at ${elapsed} minutes (${this._left._step} steps)\n` +
          '  - RE-RUN\n')
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
    this._force.resources().forEach(resource => {
      if (resource._arrival < this._finalTime) {
        this._resourcesUsed++
        this._finalCost += this._force.resourceCost(resource, this._finalTime)
      }
    })
    const str = `\n  Pass ${this._pass} Step Size  : ${this._left._distStep} ch\n` +
      `  Tactic            : ${this._left._tactic}\n` +
      `  Simulation Steps  : ${this._left._step + 1}\n` +
      `  Simulation Time   : ${this._finalTime}\n` +
      `  Simulation Result : ${this._left._status}\n` +
      `  Containment Line  : ${this._finalLine} ch\n` +
      `  Containment Size  : ${this._finalSize} ac\n` +
      `  Resources Used    : ${this._resourcesUsed}\n` +
      `  Resource Cost     : ${this._finalCost}\n`
    console.log(str)
  }

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
