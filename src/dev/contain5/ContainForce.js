/*! \brief ContainForce constructor.
 */
import { ContainResource } from './ContainResource.js'
import { Flank } from './Contain.js'

export class ContainForce {
  constructor () {
    this._resources = []
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
  addResource (arrival, production, duration, flank, desc, baseCost, hourCost) {
    // Create a new ContainResource record.
    const resource = new ContainResource(arrival, production, duration, flank, desc, baseCost, hourCost)
    this._resources.push(resource)
    return resource
  }

  /*! \brief Determines when all the containment resources will be exhausted.
  *
  *  \param flank One of LeftFlank or RightFlank.
  *
  *  \return Time when all scheduled reources will be exhausted
  *          (minutes since fire report).
  */
  exhausted (/* ContainFlank */ flank) {
    let at = 0
    this._resources.forEach(resource => {
      if (resource._flank === flank || resource._flank === Flank.Both) {
        at = Math.max(at, resource._arrival + resource._duration)
      }
    })
    return at
  }

  /*! \brief Determines first resource arrival time for the specified flank.
  *
  *  \param flank One of LeftFlank or RightFlank.
  *
  *  \return Time of first resource arrival on the specified flank
  *          (minutes since fire report).
  */
  firstArrival (/* ContainFlank */ flank) {
    let at = 99999999
    this._resources.forEach(resource => {
      if ((resource._flank === flank || resource._flank === Flank.Both)) {
        at = Math.min(at, resource._arrival)
      }
    })
    return at
  }

  /*! \brief Determines time of next productivity increase (usually the next
  *  resource arrival time) for the specified flank.  The search is restricted
  *  to the \b after and \b until time range.
  *
  *  \param after Find next resource arrival AFTER this time
  *               (minutes since fire report).
  *  \param until Find next resource arrival BEFORE this time
  *               (minutes since fire report).
  *  \param flank One of LeftFlank or RightFlank.
  *
  *  \return Time of next resource arrival on the specified flank \a after
  *  the specified time (minutes since fire report).
  */
  nextArrival (after, until, /* ContainFlank */ flank) {
    // Get the production rate at the requested time
    const prodRate = this.productionRate(after, flank)
    // Look for next production boost starting at the next minute
    let at = Math.floor(after) + 1
    while (at < until) {
      // Check production rate at the next minute
      if ((this.productionRate(at, flank) - prodRate) > 0) {
        return at
      }
      // Try the next minute
      at += 1
    }
    // There are no productivity boosts after this time
    return 0
  }

  /*! \brief Determines the aggregate fireline production rate along one fire
  *  flank at the specified time by the entire available containment force.
  *  THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS, CALCULATED FROM
  *  HALF THE TOTAL PRODUCTION RATE FOR EACH AVAILABLE RESOURCE.
  *
  *  \param minutesSinceReport The fireline aggregate containment force
  *  production rate is determined for this many minutes since the fire was
  *  reported.
  *
  *  \param flank One of LeftFlank or RightFlank.
  *
  *  \return Aggregate containment force fireline production rate (ch/h).
  */
  productionRate (minSinceReport, flank) {
    let fpm = 0
    this._resources.forEach(resource => {
      if ((resource._flank === flank || resource._flank === Flank.Both) &&
        (resource._arrival <= (minSinceReport + 0.001)) &&
        (resource._arrival + resource._duration) >= minSinceReport) {
        fpm += 0.5 * resource._production
      }
    })
    return fpm
  }

  resources () { return this._resources }

  resourceCost (resource, finalTime) {
    // Was this resource deployed?
    if (finalTime <= resource._arrival) return 0
    // Number of hours at the fire
    const minutes = Math.min((finalTime - resource._arrival), resource._duration)
    return resource._baseCost + resource._hourCost * minutes / 60
  }
}
