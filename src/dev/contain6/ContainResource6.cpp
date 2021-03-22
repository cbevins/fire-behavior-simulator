//------------------------------------------------------------------------------
/*! \file ContainResource6.cpp
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief A single fire containment resource unit that can be dispatched
    to a fire.  Examples include an engine crew, line crew, bulldozer,
    helicopter, airtanker, etc.
 */

#include <stdio.h>

// Local include files
#include "Contain6.h"

//------------------------------------------------------------------------------
/*! \brief ContainResource6 default constructor.
 */

Sem::ContainResource6::ContainResource6( void ) :
    m_arrival(0.0),
    m_duration(0.0),
    m_production(0.0),
    m_baseCost(0.0),
    m_hourCost(0.0),
    m_flank(Sem::LeftFlank6),
    m_desc("")
{
    return;
}

//------------------------------------------------------------------------------
/*! \brief ContainResource6 constructor.

    Describes a single fire containment resource unit that can be dispatched
    to a fire, such as an engine crew, line crew, bulldozer, helicopter,
    airtanker, etc.

    \param[in] arrival    Fireline production begins at this elapsed time since
                          the fire was \b reported (min).
    \param[in] production Sustained rate of holdable fireline production (ch/h).
                          THIS IS THE TOTAL RATE FOR BOTH FLANKS.
                          THE PRODUCTION RATE WILL BE SPLIT IN HALF AND APPLIED
                          TO ONE FLANK FOR SIMULATION.
    \param[in] duration   Amount of time during which the fireline production
                          rate is maintained (min).
    \param[in] flank      One of LeftFlank, RightFlank, BothFlanks, or NeitherFlank.
    \param[in] desc       Resource description or identification (informational
                          only; not used by the program).
    \param[in] baseCost   Base cost of deploying the resource to the fire.
    \param[in] hourCost   Hourly cost of the resource while at the fire.
 */

Sem::ContainResource6::ContainResource6(
        double arrival,
        double production,
        double duration,
        ContainFlank6 flank,
        const QString &desc,
        double baseCost,
        double hourCost ) :
    m_arrival(arrival),
    m_duration(duration),
    m_production(production),
    m_baseCost(baseCost),
    m_hourCost(hourCost),
    m_flank(flank),
    m_desc(desc)
{
    return;
}

//------------------------------------------------------------------------------
/*! \brief ContainResource6 class destructor.
 */

Sem::ContainResource6::~ContainResource6( void )
{
    return;
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 arrival time at the fire.

    \return Resource arrival time at the fire (minutes since fire ignition).
 */

double Sem::ContainResource6::arrival( void ) const
{
    return( m_arrival );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 unit base operating cost.

    \return Resource base operating cost.
 */

double Sem::ContainResource6::baseCost( void ) const
{
    return( m_baseCost );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 description.

    \return Resource description.
 */

QString Sem::ContainResource6::description( void ) const
{
    return( m_desc );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 production duration period.

    \return Resource production duration period (minutes).
 */

double Sem::ContainResource6::duration( void ) const
{
    return( m_duration );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 flank assignment.

    \return Resource ContainFlank6 flank assignment
        - LeftFlank6
        - RightFlank6
        - BothFlanks6
        - NeitherFlank6
 */

Sem::ContainFlank6 Sem::ContainResource6::flank( void ) const
{
    return( m_flank );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 unit hourly operating cost.

    \return Resource hourly operating cost.
 */

double Sem::ContainResource6::hourCost( void ) const
{
    return( m_hourCost );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainResource6 containment line production rate.

    \return Resource containment line production rate (ft/min).
 */

double Sem::ContainResource6::production( void ) const
{
    return( m_production );
}

void Sem::ContainResource6::print(char buf[], int buflen) const {
	char localbuf[100];
	int i=0;
	if (!buf || buflen<1) return;
	memset(buf,0,buflen);
	i=sprintf(localbuf,"arrival=%5.2f production=%5.2f duration=%6.1f ",
		m_arrival, m_production, m_duration);
	i=(i<(buflen-1)? i : (buflen-1));
	memcpy(buf,localbuf,i);
	buf[i]='\0';
}

//------------------------------------------------------------------------------
//  End of ContainResource6.cpp
//------------------------------------------------------------------------------
