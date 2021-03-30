import { Status } from './ContainConstants.js'
import { ContainSegment } from './ContainSegment.js'
/**
 * ContainRunner class runs the fire containment simulation for a ContainFire
 * attacked by a ContainForce along a collection of ContainSegments.
 */
export class ContainRunner {
  constructor (fire, force) {
    this._fire = fire
    this._force = force
    this._left = new ContainSegment(fire, force)

    // Accumulators that are mutated during each pass
    this._pass = 0 // Current pass number (base 0)

    // Accumulators that are mutated during each step
    this._h0 = 0 // free-burning fire head position at start of time step
    this._h1 = 0 // free-burning fire head position at end of time step
    this._step = 0 // Current time step number (base 0)
    this._msr0 = 0 // Current time step beginning minutes since report
    this._msr1 = 0 // Current time step ending minutes since report
    this._status = Status.Reported // Also means that we're initialized
    this._timeStep = 1 // minutes

    // Limits
    this._minSteps = 200
    this._maxSteps = 1000
    this._distLimit = 100000
    this._timeLimit = 60 * 24
  }

  initPass () {
    this._step = 0
    this._msr0 = 0
    this._msr1 = this._timeStep
    this._h0 = this._fire.headingDistance(this._msr0) // fire head at start of time step
    this._h1 = this._fire.headingDistance(this._msr1) // fire head at end of time step
    this._distStep = this._h1 - this._h0
    this._status = Status.Reported // Also means that we're initialized
    // Initialize each segment (time-of-initial-attack MUST be set on all resources)
    this._left.init()
  }

  run () {
    let anotherPass = true
    while (anotherPass) {
      this.initPass()
      let anotherStep = true
      while (anotherStep) {
        const status = this._left.step(this._msr0, this._timeStep, this._h0, this._distStep)

        if (status === Status.Overrun) {
          anotherStep = false // done with this pass
          break // maybe do another pass?
        }
        this._step++
        if (this._step > this._maxSteps) {
          anotherStep = false // done with this pass
          this._timeStep *= 2 // increase the time step to get fewer total steps
          anotherPass = true // try another pass
          break
        }
        if (status === Status.Contained && this._step < this._minSteps) {
          anotherStep = false // done with this pass
          this._timeStep *= 0.5 // decrease the time step to get more total steps
          anotherPass = true // try another pass
          break
        }
        // Next time step
        this._step++
        this._msr0 = this._msr1
        this._msr1 += this._timeStep
        this._h0 = this._h1 // fire head at end of this step, start of next time step
        this._h1 = this._fire.headingDistance(this._msr1) // fire head at end of next time step
        this._distStep = this._h1 - this._h0

        if (this._h1 > this._distLimit) {
          this._status = Status.DistLimit
          anotherStep = false
          anotherPass = false
          break
        }
        if (this._msr1 > this._timeLimit) {
          this._status = Status.Escaped
          anotherStep = false
          anotherPass = false
          break
        }
      }
    }
  }
}
