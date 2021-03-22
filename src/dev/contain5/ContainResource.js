import { Flank } from './Contain.js'

/*! \brief ContainResource
 *
 *  Describes a single fire containment resource unit that can be dispatched to a fire,
 *  such as an engine crew, line crew, bulldozer, helicopter, airtanker, etc.
 *
 *  \param arrival    Fireline production begins at this elapsed time since
 *                    the fire was \b reported (min).
 *  \param production Sustained rate of holdable fireline production (ch/h).
 *                    THIS IS THE TOTAL RATE FOR BOTH FLANKS.
 *                    THE PRODUCTION RATE WILL BE SPLIT IN HALF AND APPLIED
 *                    TO ONE FLANK FOR SIMULATION.
 *  \param duration   Amount of time during which the fireline production
 *                    rate is maintained (min).
 *  \param flank      One of LeftFlank, RightFlank, BothFlanks, or NeitherFlank.
 *  \param desc       Resource description or identification (informational
 *                    only; not used by the program).
 *  \param baseCost   Base cost of deploying the resource to the fire.
 *  \param hourCost   Hourly cost of the resource while at the fire.
 */
export class ContainResource {
  constructor (arrival, production, duration, flank, desc, baseCost, hourCost) {
    if (flank !== Flank.Left && flank !== Flank.Right && flank !== Flank.Both) {
      throw new Error(`new ContainResource() arg 4 must be 'Left', 'Right', or 'Both', but got '${flank}'`)
    }
    this._arrival = arrival
    this._duration = duration
    this._production = production
    this._baseCost = baseCost
    this._hourCost = hourCost
    this._flank = flank
    this._desc = desc
  }
}
