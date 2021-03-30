import { Flank } from './ContainConstants.js'

export class ContainResource {
  constructor (resourceKey, segmentKey, arrives, attacks, production, duration, baseCost, hourCost) {
    this._key = resourceKey
    this._segment = segmentKey
    this._arrives = arrives // minutes since report
    this._attacks = attacks // minutes since report
    this._production = production // chains per hour
    this._duration = duration // minutes
    this._baseCost = baseCost // cost to dispatch
    this._hourCost = hourCost // cost while on the line
    if (segmentKey !== Flank.Left && segmentKey !== Flank.Right && segmentKey !== Flank.Both) {
      throw new Error(`new ContainResource() arg 2 must be 'Left', 'Right', or 'Both', but got '${segmentKey}'`)
    }
  }
}

export class ContainForce {
  constructor (attackDist) {
    this._attackDist = attackDist
    this._resources = []
  }

  /**
   * Adds a new ContainResource to the ContainForce.
   *
   * @param {string} resourceKey Unique key to identify this resource
   * @param {string} segmentKey ContainSement key where the resource operates
   *  Flank.Left, Flank.Right, or Flank.Both.
   * @param {number} arrives Resource arrives and is available for IA at this minutes-since-report
   * @param {number} attacks Resource begins containment line construction at this minutes-since-report
   * @param {number} production Sustained rate of holdable containment line construction (ch/h).
   *    Typically 5-20 ch/h for a 20-person crew
   * @param {number} duration Amount of time during which the construction rate is maintained (min).
   * @param {number} baseCost Resource base (or fixed) cost once dispatched to the fire.
   * @param {number} hourCost Resource hourly cost while at the fire.
   * @returns Reference to the new ContainResource object.
  */
  addResource (resourceKey, segmentKey, arrives, attacks, production, duration, baseCost, hourCost) {
    // Create a new ContainResource record.
    const r = new ContainResource(resourceKey, segmentKey, arrives, attacks, production, duration, baseCost, hourCost)
    this._resources.push(r)
    return r
  }

  /**
   * Determines minutes-since-report of the first resource arrival time for the specified segment.
   *
   * @param {string} segmentKey One of Flank.Left or Flank.Right
   * @returns {number} Minutes-since-report of first resource arrival at the fire segment
   */
  firstArrivalMsr (segmentKey) {
    let msr = 99999999
    this._resources.forEach(resource => {
      if ((resource._segment === segmentKey || resource._segment === Flank.Both)) {
        msr = Math.min(msr, resource._arrives)
      }
    })
    return msr
  }

  /**
   * Determines minutes-since-report when line construction begins on the segment
   *
   * @param {string} segmentKey One of Flank.Left or Flank.Right
   * @returns {number} Minutes-since-report when line construction begins on the segment
   */
  initialAttackMsr (segmentKey) {
    let msr = 60 * 24 * 365
    this._resources.forEach(resource => {
      if ((resource._segment === segmentKey || resource._segment === Flank.Both)) {
        msr = Math.min(msr, resource._attacks)
      }
    })
    return msr
  }

  /**
   * Determines time of next line construction productivity increase (usually the next resource
   * attack time) for the specified segment.  The search is restricted to the *after* and *until* time range.
   *
   * @param {number} after Find next resource attack AFTER this minutes-since-report
   * @param {number} until Find next resource attack BEFORE this minutes-since-report
   * @param {string} segmentKey One of Flank.Left ('Left') or Flank.Right ('Right')
   *  Defaults to Flank.Left as Fried & Fried only examine 1 flank of a 2-flank attack
   *
   * @returns {number} Time of next resource attack (minutes since fire report)
   * on the specified flank \a after the specified time.
  */
  nextBoost (after, until, segmentKey) {
    // Get the production rate at the requested time
    const baseRate = this.productionRate(after, segmentKey)
    let idx = 0
    while (idx < this._resources.length) {
      const resource = this._resources[idx]
      if ((resource._segment === segmentKey || resource._segment === Flank.Both)) {
        if (resource._attacks > after && resource._attacks <= until) {
          if (this.productionRate(resource._attacks + 1, segmentKey) > baseRate) {
            return resource._attacks
          }
        }
      }
      idx++
    }
    return 0
  }

  /**
   * Determines the line construction rate on the segment at minutes-since-report
   *
   * @param {number} msr Minutes-since report
   * @param {string} segmentKey Fire segment key (Flank.Left, Flank.Right, Flank.Both)
   * @returns {number} The line construction rate on the segment at minutes-since-report
   */
  productionRate (msr, segmentKey) {
    let production = 0
    this._resources.forEach(resource => {
      if (msr >= resource._attacks && msr <= resource._attacks + resource._duration) {
        if (resource._segment === segmentKey) {
          production += resource._production
        } else if (resource._segment === Flank.Both) {
          production += 0.5 * resource._production
        }
      }
    })
    return production
  }

  resources () { return this._resources }
}
