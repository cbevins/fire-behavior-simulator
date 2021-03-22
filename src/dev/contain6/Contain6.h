//------------------------------------------------------------------------------
/*! \file Contain6.h
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief An implementation of Freid and Fried (\ref friedfried1995)
    wildfire containment model.

    This is a fire containment algorithm based upon the paper
        Fried, Jeremy S. and Fried, Burton D.  199?.
            Simulating wildfire containment with realistic tactics.
    and heavily adapted from the FCAT Fire Containment Algorithm Test Pascal
    program by Jeremy S. Fried (1991).

    Primary assumptions are that the fire is growing under uniform fuel,
    terrain, and weather conditions, resulting in a steadily growing
    elliptical fire (except where contained).

    Containment "tactics" may be either head or tail attack.
    Containment production rates apply to a single flank.
    One flank is simulated and the other is considered to be a mirror image.

    All times (elapsed, resource arrival, containment time, etc)
    are from when the fire was first \b REPORTED.

    Simulation proceeds according to some fixed distance step (to achieve
    the min-max step range) and ends when
    - the fire is contained by 1 or more of the resources,
    - the fire overruns the resources (and there is no retry), or
    - all the resources are exhausted.

    Four 4 classes of objects are used

    1   The ContainResource6 Class describes a single fire containment resource
        unit that can be dispatched to the fire, such as an engine crew,
        line crew, bulldozer, helicopter, airtanker, type I crew, etc.
        Attributes include arrival time at the fire, line production rate,
        and production duration.
        There is also a Flank6 attribute (if the application wishes to use two-
        flank simulation, which hasn't really been tried yet), which can also
        be used to "turn off" a resource by setting it to NeitherFlank6.

    2   The ContainForce 6Class is the collection of all ContainResource6 instances
        available for use on the fire.

    3   The Contain6 Class includes just the core simulation methods needed
        to make a single simulation pass for a single flank ala Fried.
        It includes the initial fire conditions, attack tactics, simulation
        step size, and attack point at the current time step. The fire is
        assumed to grow in an elliptical shape, e.g., under uniform terrain,
        fuels, and weather throughout the attack.

    4   The ContainSim6 Class has all the attributes to control multiple
        simulation passes (to achieve a desired number of perimeter points or
        to retry an attack after an initial failure), and accumulate perimeter
        points at each simulation step.  It also has two Contain objects,
        one each for the left and right flanks.  Currently only the left flank
        object is used and the right flank is presumed to be a mirror image
        of the left flank.
 */

#ifndef _CONTAIN6_H_INCLUDED_
#define _CONTAIN6_H_INCLUDED_

// Qt include files.
#include <qstring.h>

// Custom include files
#include "ContainForce6.h"
#include "ContainResource6.h"

namespace Sem
{

// Forward class references
class ContainSim6;

//------------------------------------------------------------------------------
/*! \class Contain6 Contain6.h
    \brief Fire flank (half-a-fire) containment object.

    Just the bare information to make a single simulation pass for half a fire
    is included.  The fire is assumed to grow in an elliptical shape.
 */

class Contain6
{
// Public enums
public:

//------------------------------------------------------------------------------
/*! \enum ContainTactic6
    \brief Identifies the possible fire containment tactic.
    are assigned.
 */
enum ContainTactic6
{
    HeadAttack6 = 0,     //!< Containment forces attack fire head
    RearAttack6 = 1      //!< Containment forces attack fire rear
};

//------------------------------------------------------------------------------
/*! \enum ContainStatus
    \brief Identifies the current fire containment status.
 */
enum ContainStatus6
{
    Unreported6 = 0,     //!< Fire started but not yet reported (init() not called)
    Reported6   = 1,     //!< Fire reported but not yet attacked (init() called)
    Attacked6   = 2,     //!< Fire attacked but not yet resolved
    Contained6  = 3,     //!< Fire contained by attacking forces
    Overrun6    = 4,     //!< Attacking forces are overrun
    Exhausted6  = 5,     //!< Fire escaped when all resources are exhausted
    Overflow6   = 6,     //!< Simulation max step overflow
 	SizeLimitExceeded6 = 7,      //!< Simulation max fire size exceeded
 	TimeLimitExceeded6 = 8	    //!< Simulation max fire time exceeded
};

static const int containVersion = 1;    //!< Class version

// Public methods
public:
    // Custom constructors
    Contain6(
        double reportSize,
        double reportRate,
        double *diurnalROS,
        int fireStartMinutesStartTime,
        double lwRatio,
        double distStep,
        ContainFlank6 flank,
        ContainForce6 *force,
        double attackTime,
        ContainTactic6 tactic=HeadAttack6,
        double attackDist=0. ) ;
    // Virtual destructor
    virtual ~Contain6( void ) ;

    // Access to input properties
    double attackDistance( void ) const ;
    double attackTime( void ) const ;
    double distanceStep( void ) const ;
    double fireBackAtAttack( void ) const ;
    double fireBackAtReport( void ) const ;
    double fireHeadAtAttack( void ) const ;
    double fireHeadAtReport( void ) const ;
    double fireLwRatioAtReport( void ) const ;
    double fireReportTime( void ) const ;
    double fireSizeAtReport( void ) const ;
    double fireSpreadRateAtBack( void ) const ;
    double fireSpreadRateAtReport( void ) const ;
    double setFireStartTimeMinutes(int starttime);     // absolute time of day when fire starts, minutes
    ContainForce6* force( void ) const ;
    ContainTactic6 tactic( void ) const ;

    // Containment resource access methods
    double  exhaustedTime( void ) const ;
    int     resources( void ) const ;
    double  resourceArrival( int index ) const ;
    QString resourceDescription( int index ) const ;
    double  resourceDuration( int index ) const ;
    double  resourceProduction( int index ) const ;
    double  resourceBaseCost( int index ) const ;
    double  resourceHourCost( int index ) const ;

    // Access to current status
    double attackPointX( void ) const ;
    double attackPointY( void ) const ;
    int    simulationStep( void ) const ;
    double simulationTime( void ) const ;
    ContainStatus6 status( void ) const ;
    static char * printStatus( ContainStatus6 );
    bool   setDiurnalSpreadRates(double *rates);         // hourly, added MAF 10/6/2008 WFIPS

    // Computational methods
private:

    void    calcCoordinates( void ) ;
    void    calcU( void ) ;
    bool    calcUh( double r, double h, double u, double *d ) ;
    void    containLog( bool dolog, char *fmt, ... ) const ;
    double  containPsi( double u, double eps2 ) ;
    double  headPosition( double minutesSinceReport ) const ;
    double  productionRate( double fireHeadPosition ) const ;
    double  productionRatio( double fireHeadPosition )  ;
    void    reset( void ) ;
    double  spreadRate( double minutesSinceReport ) const ;
    double  getDiurnalSpreadRate( double minutesSinceReport ) const;    // added MAF, 10/6/2008 WFIPS
    ContainStatus6 step( void ) ;
    void    setAttack( ContainFlank6 flank, ContainForce6 *force,
                double attackTime, ContainTactic6 tactic, double attackDist ) ;
    void    setReport( double reportSize, double reportRate, double lwRatio,
                double distStep ) ;
    double  timeSinceReport( double headPos ) const ;

    double  m_diurnalSpreadRate[24];                    // hourly, added MAF 10/6/2008 WFIPS

// Protected data
//protected:
public:
    // Input variables
    double  m_reportSize;   //!< Fire size at time of report (ac)
    double  m_reportRate;   //!< Fire spread rate at time of report (ch/h)
    double  m_lwRatio;      //!< Fire length-to-width ratio
    double  m_attackDist;   //!< Parallel attack distance from fire (ch)
    double  m_attackTime;   //!< Initial attack time (min since fire report time)
    double  m_distStep;     //!< Simulation fire head distance step (ch)
    ContainFlank6 m_flank;  //!< Apply ContainResources from this flank
    ContainTactic6 m_tactic;//!< HeadAttack or RearAttack
    ContainForce6 *m_force; //!< Ptr to collection of containment rersources

    // Calculated intermediates
    double  m_eps;          //!< Fire eccentricity
    double  m_eps2;         //!< Fire eccentricity squared
    double  m_a;            //!< sqrt( (1.-m_eps) / (1.+m_eps) )
    double  m_reportHead;   //!< Fire head position at report time (ch)
    double  m_reportTime;   //!< Elapsed time from fire start to fire report (min)
    double  m_currentTime;   //!< Total Current Time (add m_attackTime total time, MAF 6/2010
    double  m_backRate;     //!< Fire backing spread rate (ch/h)
    double  m_reportBack;   //!< Fire back position at report time (ch)
    double  m_attackHead;   //!< Fire head position at first attack (ch)
    double  m_attackBack;   //!< Fire back position at first attack (ch)
    double  m_rkpr[3];      //!< Runga-Kutta production rates (ch/h)
    double  m_exhausted;    //!< Time after report when all forces are exhausted
    double  m_time;         //!< Simulation time (minutes since report)
    int     m_step;         //!< Simulation step
    int     m_startTime;    //!< time of day that fire started (minutes)
    //added by MAF, 6/8/2010
    //added time steps (m_currentTimeAtFireHead, m_timeIncrement) for use in determining ROS
    double  m_currentTimeAtFireHead; //!< calculated as the current time at the fire head, without the attack time
    double  m_timeIncrement;

    // Output variables derived for each time step
    double  m_u;            //!< Angle to point of active line building
    double  m_u0;           //!< Previous angle to point of active line building
    double  m_h;            //!< Distance towards the head at each time step
    double  m_h0;           //!< Previous distance towards the head at each time step
    double  m_x;            //!< Current attack point x-coordinate (ch)
    double  m_y;            //!< Current attack point y-coordinate (ch)
    ContainStatus6 m_status; //!< Status code.

    friend class ContainSim6;
    friend class ContainForce6;
};

}   // End of namespace Sem

#endif

//------------------------------------------------------------------------------
//  End of Contain6.h
//------------------------------------------------------------------------------
