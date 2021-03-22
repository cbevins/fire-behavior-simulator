//------------------------------------------------------------------------------
/*! \file ContainResource6.h
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief A single fire containment resource unit that can be dispatched
    to a fire.  Examples include an engine crew, line crew, bulldozer,
    helicopter, airtanker, etc.
 */

#ifndef _CONTAINRESOURCE6_H_INCLUDED_
#define _CONTAINRESOURCE6_H_INCLUDED_

// Qt include files.
#include <qstring.h>

// Custom files
#include "ContainForce6.h"

namespace Sem
{

// Forward class references
class ContainForce6;

//------------------------------------------------------------------------------
/*! \enum ContainFlank6
    \brief Identifies the fire flank to which ContainResource objects
    are assigned.
 */
enum ContainFlank6
{
    LeftFlank6    = 0,   //!< Attack left (upper) flank only (full production)
    RightFlank6   = 1,   //!< Attack right (lower) flank only (full production)
    BothFlanks6   = 2,   //!< Attack both flanks (half of production per flank)
    NeitherFlank6 = 3    //!< Attack neither flank (inactive)
};

//------------------------------------------------------------------------------
/*! \class ContainResource6 ContainResource6.h
    \brief A single fire containment resource unit that can be dispatched
    to a fire.  Examples include an engine crew, line crew, bulldozer,
    helicopter, airtanker, etc.

    If the resource is assigned to either the LeftFlank6 or RightFlank6,
    its fireline production rate is applied in full to that flank.
    If the resource is assigned to BothFlanks6, then half of its fireline
    production rate is applied to each flank.
    If the resource is assigned to NeitherFlank6, it is not used.
 */

class ContainResource6
{

// Class version
    static const int containResourceVersion = 6;    //!< Class version

// Public interface
public:
    // Default constructor
    ContainResource6( void ) ;
    // Custom constructors
    ContainResource6(
        double arrival,
        double production,
        double duration=480.,
        Sem::ContainFlank6 flank=Sem::LeftFlank6,
        const QString &desc="",
        double baseCost=0.00,
        double hourCost=0.00 );
    // Virtual destructor
    virtual ~ContainResource6( void ) ;

    // Access methods
    double arrival( void ) const ;
    double baseCost( void ) const ;
    QString description( void ) const ;
    double duration( void ) const ;
    Sem::ContainFlank6 flank( void ) const ;
    double hourCost( void ) const ;
    double production( void ) const ;
    void   print(char buf[], int buflen) const;

// Protected properties
protected:
    double  m_arrival;          //!< Time of arrival since fire report (min)
    double  m_duration;         //!< Production rate duration (min)
    double  m_production;       //!< Total fireline production rate on both flanks (ch/h)
    double  m_baseCost;         //!< Base resource cost
    double  m_hourCost;         //!< Hourly resource cost
    Sem::ContainFlank6 m_flank;  //!< Both, Left, or Right flank attack
    QString m_desc;             //!< Resource description

    friend class ContainForce6;
};

}   // End of namespace Sem

#endif

//------------------------------------------------------------------------------
//  End of ContainResource6.h
//------------------------------------------------------------------------------
