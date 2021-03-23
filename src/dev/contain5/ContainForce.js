import { ContainResource } from './ContainResource.js'
import { Flank } from './Contain.js'

export class ContainForce {
  constructor () {
    this._resources = []
    // Resource map has the resource name as its key, and the entry is an object:
    // {arrival: msr, duration: min, production: cph, flank: flank, baseCost: bc, hourCost: hc}
    this._resourceMap = new Map()
    // Production map has time-since-report as its key, and
    // the entry is an array of plus/minus production rates
    this._productionMap = new Map() // production schedule time => [+10, -20, +40]
  }

  /*! \brief Adds a new ContainResource to the ContainForce.
  *
  *  \param arrival    Fireline production begins at this elapsed time since
  *                    the fire was \b reported (min).
  *  \param production Sustained rate of holdable fireline production (ch/h).
  *  \param duration   Amount of time during which the fireline production
  *                    rate is maintained (min).
  *  \param flank      One of LeftFlank, RightFlank, BothFlanks, or NeitherFlank.
  *  \param desc       Resource description or identification (informational
  *                    only; not used by the program).
  *  \param baseCost   Resource base (or fixed) cost if deployed to the fire.
  *  \param hourCost   Resource hourly cost once deployed to the fire.
  *
  *  \return Pointer to the new ContainResource object.
  */
  addResource (key, arrival, production, duration, flank, baseCost, hourCost) {
    // Create a new ContainResource record.
    const resource = new ContainResource(key, arrival, production, duration, flank, baseCost, hourCost)
    this._resources.push(resource)
    this._resourceMap.set()
    return resource
  }

  /**
   * Determines when all the containment resources will be exhausted.
   *
   * @param {string} atFlank One of Flank.Left or Flank.Right
   * @returns {number} Time when all scheduled reources will be exhausted (minutes since fire report).
   */
  exhausted (atFlank) {
    let at = 0
    this._resources.forEach(resource => {
      if (resource._flank === atFlank || resource._flank === Flank.Both) {
        at = Math.max(at, resource._arrival + resource._duration)
      }
    })
    return at
  }

  /**
   * Determines first resource arrival time for the specified flank.
   *
   * @param {string} atFlank One of Flank.Left or Flank.Right
   * @returns {number} Time of first resource arrival on the specified flank (minutes since fire report).
   */
  firstArrival (atFlank) {
    let at = 99999999
    this._resources.forEach(resource => {
      if ((resource._flank === atFlank || resource._flank === Flank.Both)) {
        at = Math.min(at, resource._arrival)
      }
    })
    return at
  }

  /**
   * Determines time of next productivity increase (usually the next resource arrival time)
   * for the specified flank.  The search is restricted to the \b after and \b until time range.
   *
   * @param {number} after Find next resource arrival AFTER this time (minutes since fire report).
   * @param {number} until Find next resource arrival BEFORE this time (minutes since fire report).
   * @param {string} atFlank One of Flank.Left ('Left') or Flank.Right ('Right')
   *  Defaults to Flank.Left as Fried & Fried only examine 1 flank of a 2-flank attack
   *
   * @returns {number} Time of next resource arrival (minutes since fire report)
   * on the specified flank \a after the specified time.
  */
  nextArrival (after, until, atFlank) {
    // Get the production rate at the requested time
    const prodRate = this.productionRate(after, atFlank)
    // Look for next production boost starting at the next minute
    let at = Math.floor(after) + 1
    while (at < until) {
      // Check production rate at the next minute
      if ((this.productionRate(at, atFlank) - prodRate) > 0) {
        return at
      }
      // Try the next minute
      at += 1
    }
    // There are no productivity boosts after this time
    return 0
  }

  /**
   * Determines the aggregate fireline production by the entire available containement force
   * along one fire flank at the specified minutes since the fire report.
   *
   * @param msr {number} Minutes since fire report
   * @param atFlank One of Flank.Left ('Left') or Flank.Right ('Right')
   *  Defaults to Flank.Left as Fried & Fried only examine 1 flank of a 2-flank attack
   * @return {number} Aggregate containment force fireline production rate (ch/h)
  */
  productionRate (msr, atFlank = Flank.Left) {
    let production = 0
    this._resources.forEach(resource => {
      if (msr >= resource._arrival && msr <= resource._arrival + resource._duration - 0.01) {
        if (resource._flank === atFlank) {
          production += resource._production
        } else if (resource._flank === Flank.Both) {
          production += 0.5 * resource._production
        }
      }
    })
    return production
  }

  resources () { return this._resources }

  resourceCost (resource, finalTime) {
    let cost = 0
    if (finalTime > resource._arrival) {
      const minutes = Math.min((finalTime - resource._arrival), resource._duration)
      cost = resource._baseCost + resource._hourCost * minutes / 60
    }
    return cost
  }
}
