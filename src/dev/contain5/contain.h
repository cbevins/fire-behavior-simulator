//------------------------------------------------------------------------------
/*! \file contain.h
 *  \version BehavePlus3
 *  \author Copyright (C) 2002-2004 by Collin D. Bevins.  All rights reserved.
 *
 *  \brief Fire containment algorithm based upon Freid & Fried (1991).
 *
 *  This is a fire containment algorithm based upon the paper
 *      Fried, Jeremy S. and Fried, Burton D.  199?.
 *          Simulating wildfire containment with realistic tactics.
 *  and heavily adapted from the FCAT Fire Containment Algorithm Test Pascal
 *  program by Jeremy S. Fried (1991).
 *
 *  Primary assumptions are that the fire is growing under uniform fuel,
 *  terrain, and weather conditions, resulting in a steadily growing
 *  elliptical fire (except where contained).
 *
 *  Containment "tactics" may be either head or tail attack.
 *  Containment production rates apply to a single flank.
 *  One flank is simulated and the other is considered to be a mirror image.
 *
 *  All times (elapsed, resource arrival, containment time, etc)
 *  are from when the fire was first \b REPORTED.
 *
 *  Simulation proceeds according to some fixed distance step (to achieve
 *  the min-max step range) and ends when
 *  - the fire is contained by 1 or more of the resources,
 *  - the fire overruns the resources (and there is no retry), or
 *  - all the resources are exhausted.
 *
 *  Four 4 classes of objects are used
 *
 *  1   The ContainResource Class describes a single fire containment resource
 *      unit that can be dispatched to the fire, such as an engine crew,
 *      line crew, bulldozer, helicopter, airtanker, type I crew, etc.
 *      Attributes include arrival time at the fire, line production rate,
 *      and production duration.
 *      There is also a Flank attribute (if the application wishes to use two-
 *      flank simulation, which hasn't really been tried yet), which can also
 *      be used to "turn off" a resource by setting it to NeitherFlank.
 *
 *  2   The ContainForce Class is the collection of all ContainResources
 *      available for use on the fire.
 *
 *  3   The Contain Class includes just the core simulation methods needed
 *      to make a single simulation pass for a single flank ala Fried.
 *      It includes the initial fire conditions, attack tactics, simulation
 *      step size, and attack point at the current time step. The fire is
 *      assumed to grow in an elliptical shape, e.g., under uniform terrain,
 *      fuels, and weather throughout the attack.
 *
 *  4   The ContainSim Class has all the attributes to control multiple
 *      simulation passes (to achieve a desired number of perimeter points or
 *      to retry an attack after an initial failure), and accumulate perimeter
 *      points at each simulation step.  It also has two Contain objects,
 *      one each for the left and right flanks.  Currently only the left flank
 *      object is used and the right flank is presumed to be a mirror image
 *      of the left flank.
 */

/*! \def _CONTAIN_H_
    \brief Prevent redundant includes.
 */
#ifndef _CONTAIN_H_
#define _CONTAIN_H_ 1

// Qt include files.
#include <qstring.h>

// Forward class references
class Contain;
class ContainForce;
class ContainResource;
class ContainSim;

// Flank enumerations
enum ContainFlank
{
    LeftFlank=0,    //!< Attack left (upper) flank only (full production)
    RightFlank=1,   //!< Attack right (lower) flank only (full production)
    BothFlanks=2,   //!< Attack both flanks (half of production per flank)
    NeitherFlank=3  //!< Attack neither flank (inactive)
};

// Tactic enumerations
enum ContainTactic
{
    HeadAttack=0,   //!< Containment forces attack fire head
    RearAttack=1    //!< Containment forces attack fire rear
} ;

// Containment status enumerations
enum ContainStatus
{
    Unreported=0,   //!< Fire started but not yet reported (init() not called)
    Reported=1,     //!< Fire reported but not yet attacked (init() called)
    Attacked=2,     //!< Fire attacked but not yet resolved
    Contained=3,    //!< Fire contained by attacking forces
    Overrun=4,      //!< Attacking forces are overrun
    Exhausted=5,    //!< Fire escaped when all resources are exhausted
    Overflow=6,     //!< Simulation max step overflow
    LimitDist=7     //!< Spread distance limit exceeded
} ;

//------------------------------------------------------------------------------
/*! \class Contain contain.h
 *
 *  \brief Fire flank (half-a-fire) containment object.
 *
 *  Just the bare information to make a single simulation pass for half a fire
 *  is included.  The fire is assumed to grow in an elliptical shape.
 */

class Contain
{
// Public methods
public:
    Contain( double reportSize, double reportRate, double lwRatio,
        double distStep, ContainFlank flank, ContainForce *force,
        double attackTime, ContainTactic tactic=HeadAttack,
        double attackDist=0., double limitDist=9999999. ) ;

    void    calcCoordinates( void ) ;
    double  exhausted( void ) const ;
    double  headPosition( double minutesSinceReport ) const ;
    double  productionRate( double fireHeadPosition ) const ;
    double  productionRatio( double fireHeadPosition ) const ;
    void    reset( void ) ;
    double  spreadRate( double minutesSinceReport ) const ;
    ContainStatus step( void ) ;
    void    setAttack( ContainFlank flank, ContainForce *force,
                double attackTime, ContainTactic tactic, double attackDist ) ;
    void    setReport( double reportSize, double reportRate, double lwRatio,
                double distStep ) ;
    double  timeSinceReport( double headPos ) const ;

    // Containment resource access functions
    int     resources( void ) const ;
    double  resourceArrival( int index ) const ;
    QString resourceDescription( int index ) const ;
    double  resourceDuration( int index ) const ;
    double  resourceProduction( int index ) const ;

private:
    void    calcU( void ) ;
    bool    calcUh( double r, double h, double u, double *d ) ;

// Public data
public:
    // Input variables
    double  m_reportSize;   //!< Fire size at time of report (ac)
    double  m_reportRate;   //!< Fire spread rate at time of report (ch/h)
    double  m_lwRatio;      //!< Fire length-to-width ratio
    double  m_attackDist;   //!< Parallel attack distance from fire (ch)
    double  m_attackTime;   //!< Initial attack time (min since fire report time)
    double  m_distStep;     //!< Simulation fire head distance step (ch)
    double  m_limitDist;    //!< Simulation stops after fire travels this distance (ch).
    ContainFlank m_flank;   //!< Apply ContainResources from this flank
    ContainTactic m_tactic; //!< HeadAttack or RearAttack
    ContainForce *m_force;  //!< Ptr to collection of containment rersources

    // Calculated intermediates
    double  m_eps;          //!< Fire eccentricity
    double  m_eps2;         //!< Fire eccentricity squared
    double  m_a;            //!< sqrt( (1.-m_eps) / (1.+m_eps) )
    double  m_reportHead;   //!< Fire head position at report time (ch)
    double  m_reportTime;   //!< Elapsed time from fire start to fire report (min)
    double  m_backRate;     //!< Fire backing spread rate (ch/h)
    double  m_reportBack;   //!< Fire back position at report time (ch)
    double  m_attackHead;   //!< Fire head position at first attack (ch)
    double  m_attackBack;   //!< Fire back position at first attack (ch)
    double  m_initialAttackHead;   //!< Fire head position at first attack (ch)
    double  m_initialAttackBack;   //!< Fire back position at first attack (ch)
    double  m_rkpr[3];      //!< Runga-Kutta production rates (ch/h)
    double  m_exhausted;    //!< Time after report when all forces are exhausted
    double  m_time;         //!< Simulation time (minutes since report)
    int     m_step;         //!< Simulation step

    // Output variables derived for each time step
    double  m_u;            //!< Angle to point of active line building
    double  m_u0;           //!< Previous angle to point of active line building
    double  m_h;            //!< Distance towards the head at each time step
    double  m_h0;           //!< Previous distance towards the head at each time step
    double  m_x;            //!< Current attack point x-coordinate (ch)
    double  m_y;            //!< Current attack point y-coordinate (ch)
    ContainStatus m_status; //!< Status code.

    friend class ContainSim;
};


//------------------------------------------------------------------------------
/*! \class ContainForce contain.h
 *
 *  \brief Collection of all ContainResources applied to the fire.
 */

class ContainForce
{
// Public methods
public:
    ContainForce( int maxResources=250 ) ;
    ~ContainForce( void ) ;

    ContainResource *addResource(  double arrival, double production,
        double duration=480., ContainFlank flank=LeftFlank,
        const QString &desc="", double baseCost=0.0, double hourCost=0.0 );

    double  exhausted( ContainFlank flank ) const ;
    double  firstArrival( ContainFlank flank ) const ;
    double  nextArrival( double after, double until, ContainFlank flank ) const ;
    double  productionRate( double minutesSinceReport, ContainFlank flank ) const ;

    // Public access to individual ContainResources
    int     resources( void ) const ;
    double  resourceArrival( int index ) const ;
    double  resourceBaseCost( int index ) const ;
    double  resourceCost( int index, double finalTime ) const ;
    QString resourceDescription( int index ) const ;
    double  resourceDuration( int index ) const ;
    ContainFlank resourceFlank( int index ) const ;
    double  resourceHourCost( int index ) const ;
    double  resourceProduction( int index ) const ;

// Private data
private:
    ContainResource **m_cr;     //!< Array of pointers to ContainResources
    int     m_size;             //!< Size of m_cr
    int     m_count;            //!< Items in m_cr

friend class Contain;
};

//------------------------------------------------------------------------------
/*! \class ContainResource contain.h
 *
 *  \brief Describes a single fire containment resource unit that can be
 *  dispatched to the fire, such as an engine crew, line crew, bulldozer,
 *  helicopter, airtanker, etc.
 *
 *  If the resource is assigned to either the LeftFlank or RightFlank,
 *  its fireline production rate is applied in full to that flank.
 *  If the resource is assigned to BothFlanks, then half of its fireline
 *  production rate is applied to each flank.
 *  If the resource is assigned to NeitherFlank, it is not used.
 */

class ContainResource
{
// Public methods
public:
    ContainResource( double arrival, double production, double duration=480.,
        ContainFlank flank=LeftFlank, const QString &desc="",
        double baseCost=0.00, double hourCost=0.00 );

// Public data
private:
    double  m_arrival;          //!< Time of arrival since fire report (min)
    double  m_duration;         //!< Production rate duration (min)
    double  m_production;       //!< Total fireline production rate on both flanks (ch/h)
    double  m_baseCost;         //!< Base resource cost
    double  m_hourCost;         //!< Hourly resource cost
    ContainFlank m_flank;       //!< Both, Left, or Right flank attack
    QString m_desc;             //!< Resource description

friend class ContainForce;
};

//------------------------------------------------------------------------------
/*! \class ContainSim contain.h
 *
 *  \brief Fire containment simulation object.
 *
 *  Contains all the information to make a complete simulation run,
 *  and when completed, display the fire perimeter in Cartesian coordinates.
 */

class ContainSim
{
// Public methods
public:
    ContainSim( double reportSize, double reportRate, double lwRatio=1.,
        ContainForce *force=0, ContainTactic tactic=HeadAttack,
        double attackDist=0., double limitDist=99999999.,
        bool retry=true, int minSteps=250, int maxSteps=1000 ) ;
    ~ContainSim( void ) ;

    void finalStats( void ) ;
    void run( void );

// Public data
public:
    double   m_finalCost;   //!< Final total cost of all resources used
    double   m_finalLine;   //!< Final fire line at containment or escape (ch)
    double   m_finalPerim;  //!< Final line plus fire perimeter at containment or escape (ch)
    double   m_finalSize;   //!< Final fire size at containment or escape (ac)
    double   m_finalSweep;  //!< Final containment area at containment or escape (ac)
    double   m_finalTime;   //!< Containment or escape time since report (min)
    double   m_xMax;        //!< Maximum X coordinate of constructed line (ch)
    double   m_xMin;        //!< Minimum X coordinate of constructed line (ch)
    double   m_yMax;        //!< Maximum Y coordinate of constructed line (ch)
    double  *m_u;           //!< Array of attack point angles at each distance step
    double  *m_h;           //!< Array of free burning head positions (radians)
    double  *m_x;           //!< Array of perimeter x coordinates (ch)
    double  *m_y;           //!< Array of perimeter y coordinates (ch)
    double  *m_a;           //!< Array of flank area segments (ch2)
    double  *m_p;           //!< Array of flank perimeter segments (ch)
    Contain *m_left;        //!< Left flank Contain object.
    Contain *m_right;       //!< Right flank Contain object.
    ContainForce *m_force;  //!< Containment forces for both flanks
    int      m_minSteps;    //!< Minimum number of simulation distance steps
    int      m_maxSteps;    //!< Maximum number of simulation distance steps
    int      m_size;        //!< Size of the arrays (m_maxSteps or 2*m_maxSteps)
    int      m_pass;        //!< Pass number
    int      m_used;        //!< Number of containment resources deployed
    bool     m_retry;       //!< Retry with later attack time if forces overrun
};

//------------------------------------------------------------------------------
// Utility functions

void containLog( bool dolog, char *fmt, ... ) ;

double containPsi( double u, double eps2 ) ;

#endif

//------------------------------------------------------------------------------
//  End of contain.h
//------------------------------------------------------------------------------

