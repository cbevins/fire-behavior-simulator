//------------------------------------------------------------------------------
/*! \file ContainForce6.h
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief Collection of all ContainResources dispatched to the fire.
 */

#ifndef _CONTAINFORCE6_H_INCLUDED_
#define _CONTAINFORCE6_H_INCLUDED_


// Qt include files.
#include <qstring.h>

// Custom include files
#include "Contain6.h"
#include "ContainResource6.h"

namespace Sem
{

// Forward class references
class Contain6;

//------------------------------------------------------------------------------
/*! \class ContainForce6 ContainForce6.h
    \brief Collection of all ContainResource6 instances dispatched to the fire.
 */

class ContainForce6
{
// Class version
    static const int containForceVersion = 6;   //!< Class version

// Public methods
public:
    // Custom constructors
    ContainForce6( int maxResources=250 ) ;
    // Virtual destructor
    virtual ~ContainForce6( void ) ;
    // Add ContainResource into ContainForce
    ContainResource6* addResource( ContainResource6* resource ) ;
    // Construct ContainResource into ContainForce
    ContainResource6 *addResource(
        double arrival,
        double production,
        double duration=480.,
        Sem::ContainFlank6 flank=Sem::LeftFlank6,
        const QString &desc="",
        double baseCost=0.0,
        double hourCost=0.0 );

    // Force-level access methods
    double exhausted( Sem::ContainFlank6 flank ) const ;
    double firstArrival( Sem::ContainFlank6 flank ) const ;
    double nextArrival( double after, double until, Sem::ContainFlank6 flank ) const ;
    double productionRate( double minutesSinceReport, Sem::ContainFlank6 flank ) const ;

    //for debug
    void   logResources( bool debug,const Contain6* ) const ;

    // Public access to individual ContainResources
    int     resources( void ) const ;
    double  resourceArrival( int index ) const ;
    double  resourceBaseCost( int index ) const ;
    double  resourceCost( int index, double finalTime ) const ;
    QString resourceDescription( int index ) const ;
    double  resourceDuration( int index ) const ;
    Sem::ContainFlank6 resourceFlank( int index ) const ;
    double  resourceHourCost( int index ) const ;
    double  resourceProduction( int index ) const ;

// Protected data
protected:
    ContainResource6 **m_cr;    //!< Array of pointers to ContainResource6 instances
    int     m_size;             //!< Size of m_cr
    int     m_count;            //!< Items in m_cr

friend class Contain6;
};

}   // End of namespace Sem

#endif

//------------------------------------------------------------------------------
//  End of ContainForce6.h
//------------------------------------------------------------------------------
