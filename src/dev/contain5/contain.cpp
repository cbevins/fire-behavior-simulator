//------------------------------------------------------------------------------
/*! \file contain.cpp Fire containment algorithm.
 *  \version BehavePlus3
 *  \author Copyright (C) 2002-2004 by Collin D. Bevins.  All rights reserved.
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
 *  Containment "tactics" may be either head or rear attack.
 *  Containment resources are evenly divided and applied to each flank.
 *
 *  All times (elapsed, resource arrival, containment time, etc)
 *  are from when the fire was first \b reported.
 */

// Local include files
#include "appmessage.h"
#include "contain.h"

// Standard include files
#include <math.h>
#include <stdarg.h>
#include <stdio.h>

// A well rounded number
#ifndef M_PI
#define M_PI 3.141592654
#endif

//------------------------------------------------------------------------------
/*! \brief Contain constructor.
 *
 *  \param reportSize Fire size at time of report (ac)
 *  \param reportRate Fire spread rate at time of report (ch/h).
 *  \param lwRatio    Fire length-to-width ratio.
 *  \param distStep   Simulation fire head distance step size (ch).
 *  \param flank      Apply ContainResources assigned to the Left or Right
 *                    flank.  ContainResources assigned to Both flanks have
 *                    half their production rate applied to this flank.
 *  \param force      Pointer to the ContainForce applied to the fire.
 *  \param attackTime Elapsed time since fire report that ContainForces
 *                    are first committed to the fire.  This may be after the
 *                    arrival of one or more resources.
 *  \param tactic     HeadAttack or RearAttack.
 *  \param attackDist Forces build fireline this far from the fire edge (ch).
 *  \param limitDist  Stop simulation after fire travels this distance (ch).
 */

Contain::Contain( double reportSize, double reportRate, double lwRatio,
        double distStep, ContainFlank flank, ContainForce *force,
        double attackTime, ContainTactic tactic, double attackDist,
        double limitDist ) :
    m_reportSize(reportSize),
    m_reportRate(reportRate),
    m_lwRatio(lwRatio),
    m_attackDist(attackDist),
    m_attackTime(attackTime),
    m_distStep(0.01),
    m_limitDist(limitDist),
    m_flank(flank),
    m_tactic(tactic),
    m_force(force),
    m_eps(1.),
    m_eps2(1.),
    m_a(1.),
    m_reportHead(0.),
    m_reportTime(0.),
    m_backRate(0.),
    m_reportBack(0.),
    m_attackHead(0.),
    m_attackBack(0.),
    m_initialAttackHead(0.),
    m_initialAttackBack(0.),
    m_exhausted(0.),
    m_time(0.),
    m_step(0),
    m_u(0.),
    m_u0(0.),
    m_h(0.),
    m_h0(0.),
    m_x(0.),
    m_y(0.),
    m_status(Unreported)
{
    // Set all the input parameters.
    setReport( reportSize, reportRate, lwRatio, distStep );
    setAttack( flank, force, attackTime, tactic, attackDist );
    // Set all the intermediate parameters.
    reset();
    // Store the initial m_attackHead and m_attackBack variables
    m_initialAttackHead = m_attackHead;
    m_initialAttackBack = m_attackBack;
    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines the next value of the angle from the fire origin to the
 *  point of active fireline construction.
 *
 *  \retval Next value of the angle from the fire origin to the point of
 *              active fireline construction is stored in m_u.
 *  \retval Next value of free-burning head position is stored in m_h.
 *  \retval Current value of m_status may be reset to Overrun upon return!
 */

void Contain::calcU( void )
{
    // Store the current u and h as the old u and h.
    m_u0 = m_u;
    m_h0 = m_h;
    m_status = Attacked;
    // Calculate constants used in the 4th order Runga-Kutta approximation.
    double rk[4], deriv;
    m_rkpr[0] = ( m_step ) ? m_rkpr[2] : productionRatio( m_attackHead );
    m_rkpr[1] = productionRatio( m_h0 + ( 0.5 * m_distStep ) );
    m_rkpr[2] = productionRatio( m_h0 + m_distStep );
    // First constant
    if ( ! calcUh( m_rkpr[0], m_h0, m_u0, &deriv ) )
    {
        return;
    }
    rk[0] = m_distStep * deriv;
    // Second constant
    if ( ! calcUh( m_rkpr[1], ( m_h0 + 0.5 * m_distStep ),
            ( m_u0 + 0.5 * rk[0] ), &deriv ) )
    {
        return;
    }
    rk[1] = m_distStep * deriv;
    // Third constant
    if ( ! calcUh( m_rkpr[1], ( m_h0 + 0.5 * m_distStep ),
            ( m_u0 + 0.5 * rk[1] ), &deriv ) )
    {
        return;
    }
    rk[2] = m_distStep * deriv;
    // Fourth constant
    if ( ! calcUh( m_rkpr[2], ( m_h0 + m_distStep ),
            ( m_u0 + rk[2] ), &deriv ) )
    {
        return;
    }
    rk[3] = m_distStep * deriv;

    // Calculate 4th order Runga-Kutta approximation of u for next step.
    m_u = m_u0 + ( rk[0] + rk[3] + 2. * ( rk[1] + rk[2] ) ) / 6.;

    // Calculate next free-burning fire head position (ch from origin)
    m_h = m_attackHead + ( m_step + 1 ) * m_distStep;
    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines du/dh for a particular u, h, and p,
 *  and returns the value in d.
 *
 *  If there is a negative term under the radical,
 *  which is indicative of the ContainResources being overrun by the fire,
 *  m_status is set to Overrun and the function returns FALSE.
 *  Similarly if a sign change occurs in du/dh.
 *
 *  \param p    Fireline production rate (ch/h).
 *  \param h    Current distance of free-burning fire head from the origin (ch).
 *  \param u    Current angle from the fire origin to the point of active
 *              fireline construction.
 *  \param d    Address where the du/dh derivative is returned.
 *
 *  \retval     TRUE if ContainResources are not overrun and d has valid result.
 *  \retval     FALSE if ContainResources are overrun, and m_status is
 *              set to Overrun.
 */

bool Contain::calcUh( double p, double h, double u, double *d )
{
    // lastUh is used to check sign change between previous and current step
    static double lastUh = 0.0;
    double cosU = cos(u);
    double sinU = sin(u);
    *d = 0;

    // If the expression under the radical sign is negative,
    // must change course to avoid a complex (number) result
    double x = 1. - m_eps * cosU;
    double uh_radical = ( p * p * x / ( 1. + m_eps * cosU ) ) - m_a * m_a;

    // The gcc and VC6 compilers yield different results for uh_radical
    // as ros approaches the fireline production rate;
    // uh_radical approaches zero faster under VC6 than under gcc.
    // Enable the following containLog() calls to demonstrate.
    containLog( false,
        "\nStep %04d: p=%15.13f, h=%15.13f, u=%15.13f, sinU=%15.12f, cosU=%15.13f\n",
        m_step+1, p, h, u, sinU, cosU );
    containLog( false,
        "           x=%15.13f, m_eps=%15.13f, m_a=%15.13f, uh_radical=%15.13f\n",
        x, m_eps, m_a, uh_radical );

    if ( uh_radical <= 1.0e-10 )
    {
        m_status = Overrun;
        return( false );
    }
    // dh is the change in fire perimeter distance at point of attack
    double dh = x * h;
    if ( m_attackDist > 0.001 )
    {
        dh = x * ( h + ( 1. - m_eps ) *
           ( m_attackDist * sqrt( 1. - m_eps2 )
             / exp( 1.5 * log( 1. - ( m_eps2 * cosU * cosU ) ) ) ) );
    }
    // du is the change in angle of attack point from fire origin
    double du;
    if ( m_tactic == RearAttack )
    {
        du = m_eps * sinU - ( 1. + m_eps ) * sqrt( uh_radical );
    }
    else
    {
        du = m_eps * sinU + ( 1. + m_eps ) * sqrt( uh_radical );
    }
    double uh = du / dh;
    containLog( false,
        "           sqrt(uh_radical)=%15.13f, du=%12.10f, dh=%12.10f, uh(du/dh)=%12.10f\n",
        sqrt(uh_radical), du, dh, uh );

    // If "angular rotation" has reversed. firefighters may be overrun
    // and cannot even build line making NO rotational progress
	/* THE FOLLOWING CODE WAS REMOVED AT DIRECTION OF M.A.Finney and Fried
	if ( ( m_tactic == RearAttack && lastUh < 0. && uh >= 0. )
       | ( m_tactic == HeadAttack && lastUh > 0. && uh <= 0. ) )
    {
        if ( m_step )
        {
            m_status = Overrun;
            return( false );
        }
    }
	*/
    // Store uh in lastUh and returned value
    lastUh = uh;
    *d = uh;
    return( true );
}

//------------------------------------------------------------------------------
/*! \brief Determines the x- and y- coordinates ( m_x and m_y)
 *  for the current angle (m_u) and free-burning head position (m_h).
 */

void Contain::calcCoordinates( void )
{
    // Determine the x and y coordinate.
    m_y = sin( m_u ) * m_h * m_a;
    m_x = ( cos( m_u ) + m_eps ) * m_h / ( 1. + m_eps );
    if ( m_attackDist > 0.001 )
    {
        double psiVal = containPsi( m_u, m_eps2 );
        m_y += m_attackDist * sin( psiVal );
        m_x += m_attackDist * cos( psiVal );
    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief API access to the time when all the ContainResources ar exhausted.
 *
 *  \return Time when all the ContainResources are exhausted
 *          (minutes since report).
 */

double Contain::exhausted( void ) const
{
    return( m_exhausted );
}

//------------------------------------------------------------------------------
/*! \brief Determines the fire head position at the specified time.
 *
 *  \param minutesSinceReport The fire head position is determined for this
 *  many minutes since the fire was reported.
 *
 *  \note This function must be modified to support variable ROS fires.
 *
 *  \return Head position at the specified time (chains from fire origin).
 */

double Contain::headPosition( double minutesSinceReport ) const
{
    return( m_reportHead + m_reportRate * minutesSinceReport / 60. );
}

//------------------------------------------------------------------------------
/*! \brief Determines the aggregate fireline production rate of the entire
 *  containment force on the specified flank when the free burning fire head
 *  would have reached the specified position.
 *  THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
 *  AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.
 *
 *  \param fireHeadPosition Position of the free-burning fire head (ch).
 *
 *  \return Aggregate containment force holdable fireline production rate
 *  (ch/h).
 */

double Contain::productionRate( double fireHeadPosition ) const
{
    double minutesSinceReport = timeSinceReport( fireHeadPosition );
    double prod = m_force->productionRate( minutesSinceReport, m_flank );
    return( prod );
}

//------------------------------------------------------------------------------
/*! \brief Determines the ratio of the aggregate fireline production rate of
 *  the entire containment force on the specified flank when the free burning
 *  fire head would have reached the specified position,
 *  to the fire head spread rate at that specified time.
 *
 *  THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
 *  AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.
 *
 *  \param fireHeadPosition Position of the free-burning fire head (ch).
 *
 *  \return Ratio of the aggregate containment force holdable fireline
 *  production rate to the fire head spread rate.
 */

double Contain::productionRatio( double fireHeadPosition ) const
{
    double minutesSinceReport = timeSinceReport( fireHeadPosition );
    double prod = m_force->productionRate( minutesSinceReport, m_flank );
    double fire = spreadRate( minutesSinceReport );
    if ( fire < 0.0001 )
    {
        fire = 0.0001;
    }
    double ratio = prod / fire;
    return( ratio );
}

//------------------------------------------------------------------------------
/*! \brief Initializes the Contain state from the current parameter values.
 *
 *  Should be called after calling either setAttack() or setReport().
 */

void Contain::reset( void )
{
    // Eccentricity
    double r = 1. / m_lwRatio;
    m_eps2 = 1. - (r * r);
    m_eps = ( m_eps2 > 0.00001 ) ? sqrt( m_eps2 ) : 0.0;
    m_a = sqrt( (1. - m_eps) / (1. + m_eps) );

    // Fire head position at time of report (ch)
    double ch2 = 10. * m_reportSize;
    m_reportHead = (1. + m_eps ) * sqrt( ch2 / ( M_PI * sqrt(1. - m_eps2) ) );

    // Elapsed time from fire start to time of report (min)
    // Used only to draw ellipses using fire start as origin
    if ( m_reportRate > 0.0001 )
    {
        m_reportTime = 60. * m_reportHead / m_reportRate;
    }

    // Fire backing spread rate (ch/h)
    // (used only to draw ellipses when using fire start as axis origin)
    m_backRate = m_reportRate * (1. - m_eps) / (1. + m_eps);

    // Fire tail position at time of report (ch)
    // (used only to draw ellipses when using fire start as axis origin)
    m_reportBack = m_backRate * m_reportTime / 60.;

    // Fire head position at first attack
    m_attackHead = headPosition( m_attackTime );

    // Fire back position at first attack
    // (used only to draw ellipses when using fire start as axis origin)
    m_attackBack = m_backRate * ( m_reportTime + m_attackTime ) /60.;

    // Initial angle to attack point depends on whether HeadAttack or RearAttack
    if ( m_tactic == RearAttack )
    {
        m_u = m_u0 = M_PI;
        m_x = -m_attackBack - m_attackDist;
    }
    else
    {
        m_u = m_u0 = 0.;
        m_x = m_attackHead + m_attackDist;
    }
    m_h = m_h0 = m_attackHead;
    m_y = 0.;

    // Initialization
    m_step = 0;
    m_time = 0.0;
    m_rkpr[0] = m_rkpr[1] = m_rkpr[2] = 0.;
    m_status = Reported;        // Also means that we're initialized

    // Log it
    containLog( false, "\n\nCONTAIN RESET-----------------------------\n\n" );
    containLog( false, "Eta   = %12.10f\n", m_distStep );
    containLog( false, "eps   = %12.10f\n", m_eps );
    containLog( false, "EpsSq = %12.10f\n", m_eps2 );
    containLog( false, "A     = %12.10f\n", m_a );
    containLog( false, "hr    = %12.10f\n", m_reportHead );
    containLog( false, "ho    = %12.10f\n", m_attackHead );
    return;
}

//------------------------------------------------------------------------------
/*! \brief API access to the number of ContainResources in the
 *  containment force.
 *
 *  \return Number of ContainResources in the ContainForce.
 */

int Contain::resources( void ) const
{
    return( m_force->m_count );
}

//------------------------------------------------------------------------------
/*! \brief API access to the arrival time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's arrival time (minutes since fire was
 *  reported).
 */

double Contain::resourceArrival( int index ) const
{
    return( m_force->resourceArrival( index ) );
}

//------------------------------------------------------------------------------
/*! \brief API access to the specified ContainmentResouce's description.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's description.
 */

QString Contain::resourceDescription( int index ) const
{
    return( m_force->resourceDescription( index ) );
}

//------------------------------------------------------------------------------
/*! \brief API access to the duration time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's duration time (minutes).
 */

double Contain::resourceDuration( int index ) const
{
    return( m_force->resourceDuration( index ) );
}

//------------------------------------------------------------------------------
/*! \brief API access to the holdable fireline production rate of the
 *  specified ContainmentResouce ON BOTH FLANKS.  The rate for one flank
 *  is half this amount, since the resource is assumed to be split in two
 *  and working on both flanks simultaneously.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's holdable fireline production rate (ch/h).
 */

double Contain::resourceProduction( int index ) const
{
    return( m_force->resourceProduction( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Sets the Contain attack parameters.
 *
 *  \param flank      Apply ContainResources assigned to the Left or Right
 *                    flank.  ContainResources assigned to Both flanks have
 *                    half their production rate applied to this flank.
 *  \param force      Pointer to the ContainForce applied to the fire.
 *  \param attackTime Elapsed time since fire report that ContainForces
 *                    are first committed to the fire.  This may be after the
 *                    arrival of one or more resources.
 *  \param tactic     HeadAttack or RearAttack.
 *  \param attackDist Forces build fireline this far from the fire edge (ch).
 */

void Contain::setAttack( ContainFlank flank, ContainForce *force,
        double attackTime, ContainTactic tactic, double attackDist )
{
    m_flank      = flank;
    m_force      = force;
    m_attackTime = attackTime;
    m_tactic     = tactic;
    m_attackDist = attackDist;
    m_exhausted  = m_force->exhausted( m_flank );
    return;
}

//------------------------------------------------------------------------------
/*! \brief Sets the Contain fire report time parameters.
 *
 *  \param reportSize Fire size at time of report (ac)
 *  \param reportRate Fire spread rate at time of report (ch/h).
 *  \param lwRatio    Fire length-to-width ratio
 *  \param distStep   Simulation fire head distance step size (ch).
 */

void Contain::setReport( double reportSize, double reportRate, double lwRatio,
        double distStep )
{
    m_reportSize = reportSize;
    m_reportRate = reportRate;
    m_distStep   = distStep;
    if ( ( m_lwRatio = lwRatio ) < 1.0 )
    {
        m_lwRatio = 1.0;
    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines the fire head spread rate at the specified time.
 *
 *  \param minutesSinceReport Minutes since the fire was reported.
 *          Currently UNUSED until support for variable ROS is added.
 *
 *  Note: This function must be modified to support variable ROS fires.
 *
 *  \return Fire head spread rate (ch/h).
 */

double Contain::spreadRate( double /* minutesSinceReport */ ) const
{
    return( m_reportRate );
}

//------------------------------------------------------------------------------
/*! \brief Performs one containment simulation step by incrementing the head
 *  position by the distance step \a m_distStep.
 *
 *  \retval Current fire status.
 */

ContainStatus Contain::step( void )
{
    // Determine next angle and fire head position.
    calcU();

    // Increment step counter
    m_step++;

    // Determine the elapsed time since the fire was reported.
    m_time = timeSinceReport( m_h );

    // Determine if spread distance limit has been exceeded
    if ( m_h > m_limitDist )
    {
        m_status = LimitDist;
    }
    // If forces were overrun, simply return false
    if ( m_status == Overrun || m_status == LimitDist )
    {
        return( m_status );
    }
    // If the forces contain the fire, interpolate the final u and h.
    if ( m_tactic == HeadAttack && m_u >= M_PI )
    {
        m_status = Contained;
        m_h = m_h0 - m_distStep * m_u0 / ( m_u0 + fabs( m_u ) );
        m_u = M_PI;
    }
    else if ( m_tactic == RearAttack && m_u <= 0.0 )
    {
        m_status = Contained;
        m_h = m_h0 + m_distStep * m_u0 / ( m_u0 + fabs( m_u ) );
        m_u = 0.;
    }
    // Determine the x and y coordinate.
    calcCoordinates();
    return( m_status );
}

//------------------------------------------------------------------------------
/*! \brief Determines time since fire report at which the free-burning fire
 *  head position reaches the specified distance from the fire origin (min).
 *
 *  \param headPos Free-burning fire head position (chains from origin).
 *
 *  Note: This function must be modified to support variable ROS fires.
 *
 *  \return Time since fire report (min).
 */

double Contain::timeSinceReport( double headPos ) const
{
    if ( m_reportRate > 0.00001 )
    {
        return( 60. * ( headPos - m_reportHead ) / m_reportRate );
    }
    return( 0. );
}

//------------------------------------------------------------------------------
/*! \brief ContainForce constructor.
 */

ContainForce::ContainForce( int maxResources ) :
    m_cr(0),
    m_size(maxResources),
    m_count(0)
{
    // Allocate ContainResource pointer array.
    m_cr = new ContainResource *[m_size];
    checkmem( __FILE__, __LINE__, m_cr, "ContainResource *m_cr", m_size );
    return;
}

//------------------------------------------------------------------------------
/*! \brief ContainForce class destructor.
 */

ContainForce::~ContainForce( void )
{
    for ( int i=0; i<m_count; i++ )
    {
        delete m_cr[i];  m_cr[i] = 0;
    }
    delete[] m_cr;      m_cr = 0;
    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines when all the containment resources will be exhausted.
 *
 *  \param flank One of LeftFlank or RightFlank.
 *
 *  \return Time when all scheduled reources will be exhausted
 *          (minutes since fire report).
 */

double ContainForce::exhausted( ContainFlank flank ) const
{
    double at = 0.;
    double done;
    for ( int i=0; i<m_count; i++ )
    {
        if ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks )
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
 *
 *  \param flank One of LeftFlank or RightFlank.
 *
 *  \return Time of first resource arrival on the specified flank
 *          (minutes since fire report).
 */

double ContainForce::firstArrival( ContainFlank flank ) const
{
    double at = 99999999.;
    for ( int i=0; i<m_count; i++ )
    {
        if ( ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks )
          && m_cr[i]->m_arrival < at )
        {
            at = m_cr[i]->m_arrival;
        }
    }
    return( at );
}

//------------------------------------------------------------------------------
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

double ContainForce::nextArrival( double after, double until,
        ContainFlank flank ) const
{
    // Get the production rate at the requested time
    double prodRate = productionRate( after, flank );
    // Look for next production boost starting at the next minute
    int it = (int) after;
    after = (double) it + 1.;
    while ( after < until )
    {
        // Check production rate at the next minute
        if ( ( productionRate( after, flank ) - prodRate ) > 0.001 )
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

ContainResource *ContainForce::addResource(
        double arrival, double production, double duration,
        ContainFlank flank, const QString &desc,
        double baseCost, double hourCost )
{
    // Create a new ContainResource record.
    ContainResource *rec = new ContainResource( arrival, production,
        duration, flank, desc, baseCost, hourCost );
    checkmem( __FILE__, __LINE__, rec, "ContainResource rec", 1 );
    // Check for vector space
    if ( m_count == m_size )
    {
        bomb( QString( "ContainForce::addResource() -- "
            "ContainForce::m_cr[%d] is full.\n" ).arg( m_size ) );
    }
    // Add the new record to the vector and return.
    m_cr[m_count++] = rec;
    return( rec );
}

//------------------------------------------------------------------------------
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

double ContainForce::productionRate( double minSinceReport,
    ContainFlank flank ) const
{
    double fpm = 0.0;
    for ( int i=0; i<m_count; i++ )
    {
        if ( ( m_cr[i]->m_flank == flank || m_cr[i]->m_flank == BothFlanks )
          && ( m_cr[i]->m_arrival <= ( minSinceReport + 0.001 ) )
          && ( m_cr[i]->m_arrival + m_cr[i]->m_duration ) >= minSinceReport )
        {
            fpm += ( 0.50 * m_cr[i]->m_production );
        }
    }
    return( fpm );
}

//------------------------------------------------------------------------------
/*! \brief API access to the number of ContainResources in the
 *  containment force.
 *
 *  \return Number of ContainResources in the ContainForce.
 */

int ContainForce::resources( void ) const
{
    return( m_count );
}

//------------------------------------------------------------------------------
/*! \brief API access to the arrival time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's arrival time (minutes since fire was
 *  reported).
 */

double ContainForce::resourceArrival( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_arrival );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief API access to the base cost of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's base cost (cost units).
 */

double ContainForce::resourceBaseCost( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_baseCost );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief API access to the specified ContainmentResouce's cost.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's total cost on the fire from its scheduled
 *          arrival time until end of shift or end of fire.
 */

double ContainForce::resourceCost( int index, double finalTime ) const
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
/*! \brief API access to the specified ContainmentResouce's description.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's description.
 */

QString ContainForce::resourceDescription( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_desc );
    }
    return( "" );
}

//------------------------------------------------------------------------------
/*! \brief API access to the duration time of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's duration time (minutes).
 */

double ContainForce::resourceDuration( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_duration );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief API access to the flank (Left, Right, or Both) of the
 *  specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's flank: Active or Inactive.
 */

ContainFlank ContainForce::resourceFlank( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_flank );
    }
    return( NeitherFlank );
}

//------------------------------------------------------------------------------
/*! \brief API access to the hourly cost of the specified ContainmentResouce.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's hourly cost (cost units).
 */

double ContainForce::resourceHourCost( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_hourCost );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief API access to the total holdable fireline production rate of the
 *  specified ContainmentResouce ON BOTH FLANKS.  The rate for one flank
 *  is half this amount, since the resource is assumed to be split in two
 *  and working on both flanks simultaneously.
 *
 *  \param index Index (base 0) of the ContainResource.  Indices are
 *  assigned in the order that the ContainResources are added to the
 *  ContainForce.
 *
 *  \return ContainResource's holdable fireline production rate (ch/h).
 */

double ContainForce::resourceProduction( int index ) const
{
    if ( index >= 0 && index < m_count )
    {
        return( m_cr[index]->m_production );
    }
    return( 0.0 );
}

//------------------------------------------------------------------------------
/*! \brief ContainResource constructor.
 *
 *  Describes a single fire containment resource unit that can be dispatched
 *  to a fire, such as an engine crew, line crew, bulldozer, helicopter,
 *  airtanker, etc.
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

ContainResource::ContainResource( double arrival, double production,
        double duration, ContainFlank flank, const QString &desc,
        double baseCost, double hourCost ) :
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
/*! \brief ContainSim custom constructor.
 *
 *  ContainSim contains all the information to make a complete simulation run,
 *  and when completed, display the fire perimeter in Cartesian coordinates.
 *
 *  The following inputs are usually provided by the user:
 *  \param reportSize Fire size at time of report (ac)
 *  \param reportRate Fire spread rate at time of report (ch/h).
 *  \param lwRatio    Fire length-to-width ratio.
 *  \param force      Pointer to the ContainForce applied to the fire.
 *  \param tactic     HeadAttack or RearAttack.
 *  \param attackDist Forces build fireline this far from the fire edge (ch).
 *  \param limitDist  Stop simulation after fire travels this distance (ch).
 *
 *  The following inputs can usually be fixed parameters:
 *  \param minSteps   Minimum number of simulation distance steps.
 *  \param maxSteps   Maximum number of simulation distance steps.
 *  \param retry      If TRUE, if forces are overrun, the simulation is re-run
 *                    starting with the next later attack time.
 */

ContainSim::ContainSim( double reportSize, double reportRate, double lwRatio,
        ContainForce *force, ContainTactic tactic, double attackDist,
        double limitDist, bool retry, int minSteps, int maxSteps ) :
    m_finalCost(0.),
    m_finalPerim(0.),
    m_finalSize(0.),
    m_finalSweep(0.),
    m_finalTime(0.),
    m_xMax(0.),
    m_xMin(0.),
    m_yMax(0.),
    m_u(0),
    m_h(0),
    m_x(0),
    m_y(0),
    m_a(0),
    m_p(0),
    m_left(0),
    m_right(0),
    m_force(force),
    m_minSteps(minSteps),
    m_maxSteps(maxSteps),
    m_size(0),
    m_pass(0),
    m_used(0),
    m_retry(retry)
{
    // Estimate distance step size for the initial simulation.
    // May be adjusted in subsequent simulations to get the number of
    // simulation steps in the range [m_minSteps..m_maxSteps].
    if ( m_maxSteps < 10 )
    {
        m_maxSteps = 10;
    }
    double distStep = force->exhausted( LeftFlank ) * ( reportRate / 60. )
                    / (double) ( m_maxSteps - 2. );

    // Try attacking at first resource arrival.
    // If the initial attack forces are overrun, subsequent simulations
    // delay the initial attack until the next arrival of forces.
    double attackTime = m_force->firstArrival( LeftFlank );

    // Create the left flank
    m_left = new Contain( reportSize, reportRate, lwRatio,  distStep,
        LeftFlank, force, attackTime, tactic, attackDist, limitDist );

    // Create the right flank
    //attackTime = m_force->firstArrival( RightFlank );
    //m_right = new Contain( reportSize, reportRate, lwRatio,  distStep,
    //    RightFlank, force, attackTime, tactic, attackDist );

    // How big do the arrays need to be?
    m_size = ( m_right ) ? 2 * m_maxSteps : m_maxSteps;

    // Array of attack point angles (radians) at each simulation step.
    m_u = new double[m_size];
    checkmem( __FILE__, __LINE__, m_u, "double m_u", m_size );
    // Array of free-burning fire head positions (ch) at each simulation step.
    m_h = new double[m_size];
    checkmem( __FILE__, __LINE__, m_h, "double m_h", m_size );
    // Array of attack point x coordinates (ch) at each simulation step.
    m_x = new double[m_size];
    checkmem( __FILE__, __LINE__, m_x, "double m_x", m_size );
    // Array of attack point y coordinates (ch) at each simulation step.
    m_y = new double[m_size];
    checkmem( __FILE__, __LINE__, m_y, "double m_y", m_size );
    // Array of area under the perimeter curve (ch2) burned at each sim step.
    m_a = new double[m_size];
    checkmem( __FILE__, __LINE__, m_a, "double m_a", m_size );
    // Array of fireline perimeter (ch) constructed at each simulation step.
    m_p = new double[m_size];
    checkmem( __FILE__, __LINE__, m_p, "double m_p", m_size );
    return;
}

//------------------------------------------------------------------------------
/*! \brief ContainSim destructor.
 */

ContainSim::~ContainSim( void )
{
    if ( m_u )      { delete[] m_u;     m_u = 0; }
    if ( m_h )      { delete[] m_h;     m_h = 0; }
    if ( m_x )      { delete[] m_x;     m_x = 0; }
    if ( m_y )      { delete[] m_y;     m_y = 0; }
    if ( m_a )      { delete[] m_a;     m_a = 0; }
    if ( m_p )      { delete[] m_p;     m_p = 0; }
    if ( m_left )   { delete   m_left;  m_left = 0; }
    if ( m_right )  { delete   m_right; m_right = 0; }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Runs the simulation to completion.
 *
 *  The simulation is completed whenever:
 *  - the containment resources are overrun,
 *  - the fire is contained, or
 *  - all containment resources are exhausted.
 */

void ContainSim::run( void )
{
    // Status names
    const char *StatusName[] =
    {
        "Unreported",   // 0
        "Reported",     // 1
        "Attacked",     // 2
        "Contained",    // 3
        "Overrun",      // 4
        "Exhausted",    // 5
        "Sim Overflow", // 6
        "LimitDist"     // 7
    };
    const char *TacticName[] =
    {
        "Head",
        "Rear"
    };
    double at, elapsed, factor;

    // Log levels : 0=none, 1=major events, 2=stepwise
    int logLevel = 1;
    // Repeat simulation until [m_minSteps::m_maxSteps] steps achieved,
    // or if retry==TRUE, until sufficient resources are able to contain fire
    double area, dx, dy, suma, sumb;
    bool rerun = true;
    m_pass = 0;

    while ( rerun )
    {
        containLog( ( logLevel >= 1 ), "\nPass %d Begins:\n", m_pass );
        // Simulate until forces overrun, fire contained, or maxSteps reached
        int iLeft = 0;              // First index of left half values
        m_u[iLeft] = m_left->m_u;
        m_h[iLeft] = m_left->m_h;
        m_x[iLeft] = m_left->m_x;
        m_y[iLeft] = m_left->m_y;
        //int iRight = m_maxSteps;  // First index of right half values
        elapsed = m_left->m_attackTime;
        containLog( ( logLevel == 2 ),
            "%d: u=%12.10f,  h=%12.10f,  t=%f\n",
            iLeft, m_left->m_u, m_left->m_h, elapsed );

        // This is the main simulation loop!
        m_finalSweep = m_finalLine = m_finalPerim = 0.0;
        suma = sumb = 0.0;

        // Special case when no fire spread
        if ( m_left->m_reportRate < 0.0001 )
        {
            m_left->m_status = Contained;
            rerun = false;
            containLog( ( logLevel >= 1 ),
                "Pass %d Result 0: Contained\n"
                "    - reported spread rate %f ch/h at %3.1f minutes (%d steps)\n"
                "    - re-run is FALSE\n"
                "    - FIRE CONTAINED at %3.1f minutes\n",
                m_pass, m_left->m_reportRate, elapsed, m_left->m_step, elapsed );
            continue;
        }
        // This is the main simulation loop!
        while ( m_left->m_status != Overrun
             && m_left->m_status != Contained
             && m_left->m_status != LimitDist
             && m_left->m_step    < m_maxSteps )
        {
            // Store angle and head position in the proper array element
            m_left->step();

            // Store the new angle, head position, and coordinate values
            iLeft++;
            m_u[iLeft] = m_left->m_u;
            m_h[iLeft] = m_left->m_h;
            m_x[iLeft] = m_left->m_x;
            m_y[iLeft] = m_left->m_y;
            elapsed = m_left->m_time;
            containLog( (logLevel == 2 ),
                "%d: u=%12.10f,  h=%12.10f,  t=%12.10f\n",
                iLeft, m_u[iLeft], m_h[iLeft], elapsed );
            // Update the extent
            m_xMin = ( m_x[iLeft] < m_xMin ) ? m_x[iLeft] : m_xMin;
            m_xMax = ( m_x[iLeft] > m_xMax ) ? m_x[iLeft] : m_xMax;
            m_yMax = ( m_y[iLeft] > m_yMax ) ? m_y[iLeft] : m_yMax;

            // Line constructed and area swept during this simulation step
            dy = fabs( m_y[iLeft-1] - m_y[iLeft] );
            dx = fabs( m_x[iLeft-1] - m_x[iLeft] );
            m_p[iLeft-1] = sqrt( ( dy * dy ) + ( dx * dx ) );
            // Accumulate line constructed for BOTH flanks (ch)
            m_finalLine += 2.0 * m_p[iLeft-1];
            // Accumulate area of containment (apply trapazoidal rule)
            suma += ( m_y[iLeft-1] * m_x[iLeft] );
            sumb += ( m_x[iLeft-1] * m_y[iLeft] );
            area = ( suma > sumb )
                 ? ( 0.5 * ( suma - sumb ) )
                 : ( 0.5 * ( sumb - suma ) );
            // Accumulate area for BOTH flanks (ac)
            m_a[iLeft-1] = 0.2 * area;
        }
        // BEHAVEPLUS FIX: Adjust the last x-coordinate for contained head attacks
        if ( m_left->m_status == Contained
          && m_left->m_tactic == HeadAttack )
        {
            m_x[m_left->m_step] -= 2. * m_left->m_attackDist;
        }

        suma += ( m_y[m_left->m_step] * m_x[0] );
        sumb += ( m_x[m_left->m_step] * m_y[0] );
        m_finalSweep = ( suma > sumb )
                     ? ( 0.5 * ( suma - sumb ) )
                     : ( 0.5 * ( sumb - suma ) );
        m_finalSweep *= 0.20;

        // Cases 1-3: forces are overrun by fire...
        if ( m_left->m_status == Overrun )
        {
            // Case 1: No retry allowed, simulation is complete
            if ( ! m_retry )
            {
                rerun = false;
                containLog( ( logLevel >= 1 ),
                    "Pass %d Result 1: Overrun\n"
                    "    - resources overrun at %3.1f minutes (%d steps)\n"
                    "    - re-run is FALSE\n"
                    "    - FIRE ESCAPES at %3.1f minutes\n",
                    m_pass, elapsed, m_left->m_step, elapsed );
            }
            // Case 2: Try initial attack after more forces have arrived
            else if ( ( at = m_force->nextArrival( m_left->m_attackTime,
                m_left->m_exhausted, LeftFlank ) ) > 0.01 )
            {
                containLog( ( logLevel >= 1 ),
                    "Pass %d Result 2: Retry\n"
                    "    - resources overrun at %3.1f minutes (%d steps)\n"
                    "    - Pass %d will wait for IA until %3.1f minutes\n"
                    "    - when line building rate will be %3.2f ch/h\n"
                    "    - RE-RUN\n",
                    m_pass, elapsed, m_left->m_step, m_pass+1,
                    at, m_force->productionRate( at, LeftFlank ) );
                m_pass++;
                m_left->m_attackTime = at;
                m_left->reset();
                rerun = true;
            }
            // Case 3: All resources exhausted
            else
            {
                // No more forces available, so we're done
                rerun = false;
                containLog( ( logLevel >= 1 ),
                    "Pass %d Result 3: Exhausted\n"
                    "    - resources exhausted at %3.1f minutes (%d steps)\n"
                    "    - FIRE ESCAPES at %3.1f minutes\n",
                    m_pass, elapsed, m_left->m_step, elapsed );
                m_left->m_status = Exhausted;
            }
        }
        // Case 4: maximum number of steps was exceeded
        else if ( iLeft >= m_maxSteps )
        {
            // Make the distance step size bigger and rerun the simulation
            //factor = (double) m_maxSteps / (double) m_minSteps;
            factor = 0.5 * (double) m_maxSteps / (double) m_minSteps;
            containLog( ( logLevel >= 1 ),
                "Pass %d Result 4: Less Precision\n"
                "    - fire uncontained at %f minutes\n"
                "    - %d steps exceeds maximum of %d steps\n"
                "    - increasing Eta from %f to %f chains for next Pass %d\n"
                "    - RE-RUN\n",
                m_pass, elapsed, m_left->m_step, m_maxSteps,
                m_left->m_distStep, (m_left->m_distStep*factor), m_pass+1 );
            m_left->m_distStep *= factor;
            m_pass++;
            m_left->reset();
            rerun = true;
        }
        // Cases 5-6: fire is contained...
        else if ( m_left->m_status == Contained )
        {
            // Case 5: there were insufficient simulation steps...
            if (  iLeft < m_minSteps )
            {
                // Make the distance step size smaller and rerun the simulation
                //factor = (double) ( m_left->m_step + 1 ) / (double) m_maxSteps;
                factor = (double) ( m_left->m_step + 1 )
                       / (double) ( m_maxSteps - m_minSteps );
                containLog( ( logLevel >= 1 ),
                    "Pass %d Result 5: More Precision\n"
                    "    - fire contained at %3.1f minutes\n"
                    "    - %d steps is less than minimum of %d steps\n"
                    "    - decreasing Eta from %f to %f chains for Pass %d\n"
                    "    - RE-RUN\n",
                    m_pass, elapsed, m_left->m_step, m_minSteps,
                    m_left->m_distStep, (m_left->m_distStep * factor), m_pass+1 );
                m_left->m_distStep *= factor;
                m_pass++;
                m_left->reset();
                rerun = true;
            }
            // Case 6: fire contained within the simulation step range
            else
            {
                rerun = false;
                containLog( ( logLevel >= 1 ),
                    "Pass %d Result 6: Contained\n"
                    "    - FIRE CONTAINED at %3.1f minutes (%d steps)\n",
                    m_pass, elapsed, m_left->m_step );
            }
        }
        // Case 7: spread distance exceeded
        else if ( m_left->m_status == LimitDist )
        {
            rerun = false;
            containLog( ( logLevel >= 1 ),
                "Pass %d Result 7: LimitDist\n"
                "    - DISTANCE LIMIT %3.2f exceeded at %3.1f minutes (%d steps)\n",
                m_pass, m_left->m_limitDist, elapsed, m_left->m_step );
        }
        // Case 8: anything else (should never get here!)...
        else
        {
            rerun = true;
            containLog( ( logLevel >= 1 ),
                "Pass %d Result 8:\n"
                "    - unknown condition at %3.1f minutes (%d steps)\n"
                "    - RE-RUN\n",
                m_pass, elapsed, m_left->m_step );
        }
    }
    // Special case for contained head tactic with non-zero offset
    if ( m_left->m_status == Contained
      && m_left->m_tactic == HeadAttack
      && m_left->m_attackDist > 0.01 )
    {
    }
    // Simulation complete: display results
    finalStats();
    containLog( ( logLevel > 0 ),
        "\n    Pass %d Step Size  : %f ch\n", m_pass, m_left->m_distStep );
    containLog( ( logLevel > 0 ),
        "    Tactic            : %8s\n", TacticName[m_left->m_tactic] );
    containLog( ( logLevel > 0 ),
        "    Simulation Steps  : %8d\n", m_left->m_step+1 );
    containLog( ( logLevel > 0 ),
        "    Simulation Time   : %8.2f min\n", m_finalTime );
    containLog( ( logLevel > 0 ),
        "    Simulation Result : %s\n", StatusName[m_left->m_status] );
    containLog( ( logLevel > 0 ),
        "    Containment Line  : %8.4f ch\n", m_finalLine );
    containLog( ( logLevel > 0 ),
        "    Containment Size  : %8.4f ac\n", m_finalSize );
    containLog( ( logLevel > 0 ),
        "    Resources Used    : %8d\n", m_used );
    containLog( ( logLevel > 0 ),
        "    Resource Cost     : %8.0f\n\n", m_finalCost );
    return;
}

//------------------------------------------------------------------------------
/*! \brief Prints final fire and containment statistics.
 */

void ContainSim::finalStats( void )
{
    // Final time
    m_finalTime = m_left->m_time;
    // So far we know the containment area and line constructed
    m_finalPerim = m_finalLine;
    m_finalSize = 0.;
    if ( m_left->m_status == Contained )
    {
        m_finalSize = m_finalSweep;
    }
    // Resources used
    for ( int res=0; res<m_force->resources(); res++ )
    {
        if ( m_force->resourceArrival( res ) < m_finalTime )
        {
            m_used++;
            m_finalCost += m_force->resourceCost( res, m_finalTime ) ;
        }
    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Logs the message to stdout.
 */

void containLog( bool dolog, char *fmt, ... )
{
    static FILE *fptr = 0;
    if ( dolog )
    {
        // Open log file on first call.
        if ( ! fptr )
        {
            fptr = fopen( "contain.log", "w" );
        }
        // Write formatted output
        va_list ap;
        va_start( ap, fmt );
        vfprintf( fptr, fmt, ap );
        va_end( ap );
    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Used only in the case of parallel attack, this function supplies
 *  values of Psi when translating from u,h to x,y.
 */

double containPsi( double u, double eps2 )
{
    // As u gets close to pi/2, accuracy of the arctan becomes problematic,
    // so we check for this and fudge.
    double ro = ( u - ( M_PI / 2. ) );
    if ( fabs( ro ) < 0.00001 )
    {
        if ( ro > 0. )
        {
            u = ( M_PI / 2. ) + 0.00001;
        }
        else
        {
            u = ( M_PI / 2. ) - 0.00001;
        }
    }
    // Since Psi is never negative in our simulation,
    // we need to map into the appropriate quadrant.
    double psiVal = atan( ( sin( u ) / cos( u ) ) / sqrt(1. - eps2) );
    if ( psiVal < 0. )
    {
        psiVal += M_PI;
    }
    return( psiVal );
}

//------------------------------------------------------------------------------
//  End of contain.cpp
//------------------------------------------------------------------------------

