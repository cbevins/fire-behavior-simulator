//------------------------------------------------------------------------------
/*! \file ContainForce6.cpp
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief Collection of all ContainResources dispatched to the fire.
 */

// Local include files
#include "ContainSim6.h"         // for checkmem()
#include "ContainForce6.h"
#include <math.h>

//include "Logger.h"

//------------------------------------------------------------------------------
/*! \brief ContainForce6 constructor.

    \param[in] maxResources Maximum number of containment resources allowed.
 */

Sem::ContainForce6::ContainForce6( int maxResources ) :
    m_cr(0),
    m_size(maxResources),
    m_count(0)
{
    // Allocate ContainResource pointer array.
    m_cr = new ContainResource6 *[m_size];
    ContainSim6::checkmem( __FILE__, __LINE__, m_cr, "ContainResource", m_size );
    return;
}

//------------------------------------------------------------------------------
/*! \brief ContainForce6 class destructor.
 */

Sem::ContainForce6::~ContainForce6( void )
{
    for ( int i=0; i<m_count; i++ )
    {
        delete m_cr[i];  m_cr[i] = 0;
    }
    delete[] m_cr;      m_cr = 0;
    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines when all the containment resources will  be exhausted.

    \param[in] flank One of LeftFlank6 or RightFlank6.

    \return Time when all scheduled resources will be exhausted
            (minutes since fire report).
 */

double Sem::ContainForce6::exhausted( ContainFlank6 flank ) const
{
    double at = 0.;
    double done;
    for ( int i=0; i<m_count; i++ )
    {
        if ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks6 )
        {
            if ( ( done = m_cr[i]->m_arrival + m_cr[i]->m_duration ) > at )
            {
                at = done;
            }
        }
    }
    return( at );
}

//------------------------------------------------------------------------------
/*! \brief Determines first resource arrival time for the specified flank.

    \param flank One of LeftFlank6 or RightFlank6.

    \return Time of first resource arrival on the specified flank
            (minutes since fire report).
 */

double Sem::ContainForce6::firstArrival( ContainFlank6 flank ) const
{
    double at = 99999999.;
    for ( int i=0; i<m_count; i++ )
    {
        if ( ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks6 )
          && m_cr[i]->m_arrival < at )
        {
            at = m_cr[i]->m_arrival;
        }
    }
    return( at );
}

//------------------------------------------------------------------------------
/*! \brief Determines time of next productivity increase (usually the next
    resource arrival time) for the specified flank.  The search is restricted
    to the \b after and \b until time range.

    \param[in] after Find next resource arrival AFTER this time
                     (minutes since fire report).
    \param[in] until Find next resource arrival BEFORE this time
                     (minutes since fire report).
    \param[in] flank One of LeftFlank or RightFlank.

    \return Time of next resource arrival on the specified flank \a after
    the specified time (minutes since fire report).
 */

double Sem::ContainForce6::nextArrival( double after, double until,
        ContainFlank6 flank ) const
{
    // Get the production rate at the requested time
    double prodRate = productionRate( after, flank );
    // Look for next production boost starting at the next minute
    int it = (int) after;
    after = (double) it + 1.;
    while ( after < until )
    {
        // Check production rate at the next minute
        if ( fabs(( productionRate( after, flank ) - prodRate )) > 0.001 )
        {
            return( after );
        }
		// Try the next minute
        after += 1.;
    }
    // No more productivity boosts after this time
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief Adds a ContainResource6 to the ContainForce6.

    \param[in] resource Pointer to the COntainResource6 to be added.

    \return Pointer to the new ContainResource6 object.
 */

Sem::ContainResource6 *Sem::ContainForce6::addResource(
        Sem::ContainResource6* resource )
{
	#define EXTRA_ALLOCATION 100
    // Check for vector space
    if ( m_count >= m_size )
    {
        //need to reallocate memory - give some amount to grow
        int newsize=m_size+EXTRA_ALLOCATION;
        ContainResource6 ** cr_tmp = new ContainResource6 *[newsize];
        if (cr_tmp) {
        	//copy to new place, and reassign
        	memcpy(cr_tmp,m_cr,sizeof(ContainResource6*)*m_size);

			delete[] m_cr;
        	m_cr=cr_tmp;
        	m_size = newsize;
        } else {
           ContainSim6::checkmem( __FILE__, __LINE__, cr_tmp, "ContainResource", newsize );
           return NULL; //throw Exception("Out of Memory Exception");
        }
    }
    // Add the new record to the vector and return.
    m_cr[m_count++] = resource;
    return( resource );
}

//------------------------------------------------------------------------------
/*! \brief Adds a new ContainResource6 to the ContainForce6.

    \param[in] arrival    Fireline production begins at this elapsed time since
                          the fire was \b reported (min).
    \param[in] production Sustained rate of holdable fireline production (ch/h).
    \param[in] duration   Amount of time during which the fireline production
                          rate is maintained (min).
    \param[in] flank      One of LeftFlank6, RightFlank6, BothFlanks6, or NeitherFlank6.
    \param[in] desc       Resource description or identification (informational
                          only; not used by the program).
    \param[in] baseCost   Resource base (or fixed) cost if deployed to the fire.
    \param[in] hourCost   Resource hourly cost once deployed to the fire.

    \return Pointer to the new ContainResource6 object.
 */

Sem::ContainResource6 *Sem::ContainForce6::addResource(
        double arrival,
        double production,
        double duration,
        ContainFlank6 flank,
        const QString &desc,
        double baseCost,
        double hourCost )
{
    // Create a new ContainResource6 record.
    ContainResource6 *resource = new ContainResource6( arrival, production,
        duration, flank, desc, baseCost, hourCost );
    ContainSim6::checkmem( __FILE__, __LINE__, resource, "ContainResource rec", 1 );
    return( addResource( resource ) );
}

//------------------------------------------------------------------------------
/*! \brief Determines the aggregate fireline production rate along one fire
    flank at the specified time by the entire available containment force.
    THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS, CALCULATED FROM
    HALF THE TOTAL PRODUCTION RATE FOR EACH AVAILABLE RESOURCE.

    \param[in] minSinceReport The fireline aggregate containment force
    production rate is determined for this many minutes since the fire was
    reported.

    \param[in] flank One of LeftFlank6 or RightFlank6.

    \return Aggregate containment force fireline production rate (ch/h).
 */

double Sem::ContainForce6::productionRate( double minSinceReport,
    Sem::ContainFlank6 flank ) const
{
    double fpm = 0.0;
    for ( int i=0; i<m_count; i++ )
    {
        if ( ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks6 )
          && ( m_cr[i]->m_arrival <= ( minSinceReport + 0.001 ) )
          && ( m_cr[i]->m_arrival + m_cr[i]->m_duration ) >= minSinceReport )
        {
            fpm += ( 0.50 * m_cr[i]->m_production );
        }
    }
    return( fpm );
}

//------------------------------------------------------------------------------
/*! \brief API access to the number of ContainResources6 in the
    containment force.

    \return Number of ContainResource6 instances in the ContainForce6.
 */

int Sem::ContainForce6::resources( void ) const
{
    return( m_count );
}

//------------------------------------------------------------------------------
/*! \brief Access to the arrival time of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource insatnces are added to the
    ContainForce6.

    \return ContainResource6's arrival time (minutes since fire was
    reported).
 */

double Sem::ContainForce6::resourceArrival( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_arrival );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief Access to the base cost of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 insatnces are added to the
    ContainForce6.

    \return ContainResource6's base cost (cost units).
 */

double Sem::ContainForce6::resourceBaseCost( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_baseCost );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief Access to the specified ContainmentResouce6's cost.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 instances are added to the
    ContainForce6.

    \param[in] finalTime  Final fire time.

    \return ContainResource6's total cost on the fire from its scheduled
            arrival time until end of shift or end of fire.
 */

double Sem::ContainForce6::resourceCost( int index, double finalTime ) const
{
    if ( index >= 0 && index < m_count )
    {
        // Was this resource deployed?
        if ( finalTime <= m_cr[index]->m_arrival )
        {
            return( 0.0 );
        }
        // Number of hours at the fire
        double minutes = finalTime - m_cr[index]->m_arrival;
        if ( minutes > m_cr[index]->m_duration )
        {
            minutes = m_cr[index]->m_duration;
        }
        return( m_cr[index]->m_baseCost
            + ( m_cr[index]->m_hourCost * minutes / 60. ) );
    }
    return( 0. );
}

//------------------------------------------------------------------------------
/*! \brief Access to the specified ContainmentResouce6's description.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 instances are added to the
    ContainForce6.

    \return ContainResource6's description.
 */

QString Sem::ContainForce6::resourceDescription( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_desc );
    }
    return( "" );
}

//------------------------------------------------------------------------------
/*! \brief Access to the duration time of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 instances are added to the
    ContainForce6.

    \return ContainResource6's duration time (minutes).
 */

double Sem::ContainForce6::resourceDuration( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_duration );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief Access to the flank (Left, Right, or Both) of the
    specified ContainmentResouce.

    \param[in] index Index (base 0) of the ContainResource.  Indices are
    assigned in the order that the ContainResources are added to the
    ContainForce6.

    \return ContainResource's flank:
 */

Sem::ContainFlank6 Sem::ContainForce6::resourceFlank( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_flank );
    }
    return( NeitherFlank6 );
}

//------------------------------------------------------------------------------
/*! \brief Access to the hourly cost of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 instances are added to the
    ContainForce6.

    \return ContainResource6's hourly cost (cost units).
 */

double Sem::ContainForce6::resourceHourCost( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_hourCost );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief Access to the total holdable fireline production rate of the
    specified ContainmentResouce6 ON BOTH FLANKS.  The rate for one flank
    is half this amount, since the resource is assumed to be split in two
    and working on both flanks simultaneously.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6 instances are added to the
    ContainForce6.

    \return ContainResource6's holdable fireline production rate (ch/h).
 */

double Sem::ContainForce6::resourceProduction( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_production );
    }
    return( 0.0 );
}

/*
 * Print all available resources into the log file
 * For debugging purposes
 */
void Sem::ContainForce6::logResources(bool debug, const Contain6* contain) const
{
	char buf[70];
	if (!debug) return;
	for ( int i=0; i<m_count; i++ )
    {
       m_cr[i]->print(buf, 65);
       contain->containLog(true, "resource %d: %s\n",i+1,buf);
    }
}

//------------------------------------------------------------------------------
//  End of ContainForce6.cpp
//------------------------------------------------------------------------------
