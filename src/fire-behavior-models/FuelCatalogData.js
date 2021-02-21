/**
 * @file Fuel catalog accessors.
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */

export const Domains = [
  'behave',
  'chaparral',
  'palmettoGallberry',
  'westernAspen'
]

/**
 * Map of fuel model aliases
 */
export const Alias = new Map([
  ['0', '0'], [0, '0'], ['none', '0'], ['rock', '0'], ['water', '0'],
  ['1', '1'], [1, '1'],
  ['2', '2'], [2, '2'],
  ['3', '3'], [3, '3'],
  ['4', '4'], [4, '4'],
  ['5', '5'], [5, '5'],
  ['6', '6'], [6, '6'],
  ['7', '7'], [7, '7'],
  ['8', '8'], [8, '8'],
  ['9', '9'], [9, '9'],
  ['10', '10'], [10, '10'],
  ['11', '11'], [11, '11'],
  ['12', '12'], [12, '12'],
  ['13', '13'], [13, '13'],
  ['101', '101'], [101, '101'], ['gr1', '101'],
  ['102', '102'], [102, '102'], ['gr2', '102'],
  ['103', '103'], [103, '103'], ['gr3', '103'],
  ['104', '104'], [104, '104'], ['gr4', '104'],
  ['105', '105'], [105, '105'], ['gr5', '105'],
  ['106', '106'], [106, '106'], ['gr6', '106'],
  ['107', '107'], [107, '107'], ['gr7', '107'],
  ['108', '108'], [108, '108'], ['gr8', '108'],
  ['109', '109'], [109, '109'], ['gr9', '109'],
  ['121', '121'], [121, '121'], ['gs1', '121'],
  ['122', '122'], [122, '122'], ['gs2', '122'],
  ['123', '123'], [123, '123'], ['gs3', '123'],
  ['124', '124'], [124, '124'], ['gs4', '124'],
  ['141', '141'], [141, '141'], ['sh1', '141'],
  ['142', '142'], [142, '142'], ['sh2', '142'],
  ['143', '143'], [143, '143'], ['sh3', '143'],
  ['144', '144'], [144, '144'], ['sh4', '144'],
  ['145', '145'], [145, '145'], ['sh5', '145'],
  ['146', '146'], [146, '146'], ['sh6', '146'],
  ['147', '147'], [147, '147'], ['sh7', '147'],
  ['148', '148'], [148, '148'], ['sh8', '148'],
  ['149', '149'], [149, '149'], ['sh9', '149'],
  ['161', '161'], [161, '161'], ['tu1', '161'],
  ['162', '162'], [162, '162'], ['tu2', '162'],
  ['163', '163'], [163, '163'], ['tu3', '163'],
  ['164', '164'], [164, '164'], ['tu4', '164'],
  ['165', '165'], [165, '165'], ['tu5', '165'],
  ['181', '181'], [181, '181'], ['tl1', '181'],
  ['182', '182'], [182, '182'], ['tl2', '182'],
  ['183', '183'], [183, '183'], ['tl3', '183'],
  ['184', '184'], [184, '184'], ['tl4', '184'],
  ['185', '185'], [185, '185'], ['tl5', '185'],
  ['186', '186'], [186, '186'], ['tl6', '186'],
  ['187', '187'], [187, '187'], ['tl7', '187'],
  ['188', '188'], [188, '188'], ['tl8', '188'],
  ['189', '189'], [189, '189'], ['tl9', '189'],
  ['201', '201'], [201, '201'], ['sb1', '201'],
  ['202', '202'], [202, '202'], ['sb2', '202'],
  ['203', '203'], [203, '203'], ['sb3', '203'],
  ['204', '204'], [204, '204'], ['sb4', '204'],
  ['301', '301'], [301, '301'], ['chaparral/type=chamise/depth=6/deadFraction=0.5', '301'],
  ['401', '401'], [401, '401'], ['pg/age=20/basal=120/cover=.8/height=5', '401'],
  ['501', '501'], [501, '501'], ['aspenShrub50', '501']
])

/**
 * Map of standard fuel models
 * where the map key is the model number as a text string
 */
export const Model = new Map([
  // Example special case dynamic fuel models:
  [
    '301',
    {
      domain: 'chaparral',
      label: 'chaparral, type=chamise, depth=6, deadFraction=0.5',
      number: 301,
      code: 'chaparral/type=chamise/depth=6/deadFraction=0.5',
      depth: 6, // the observed.depth
      totalLoad: 1, // the observed.totalLoad
      deadFraction: 0.5, // the observed.deadFuelFraction
      fuelType: 'chamise'
    }
  ],
  [
    '401',
    {
      domain: 'palmettoGallberry',
      label: 'pg, age=20, basal=120, cover=.8, height=5',
      number: 401,
      code: 'pg/age=20/basal=120/cover=.8/height=5',
      age: 20,
      basalArea: 120,
      cover: 0.8,
      height: 5
    }
  ],
  [
    '501',
    {
      domain: 'westernAspen',
      label: 'Aspen-shrub 50%',
      number: 501,
      code: 'aspenShrub50',
      curingLevel: 0.5,
      fuelType: 'aspenShrub'
    }
  ],
  [
    // Standard BehavePlus Fuel Models
    '0',
    {
      domain: 'behave',
      label: 'No Fuel',
      number: 0,
      code: 'none',
      depth: 0,
      deadMext: 0,
      dead1Load: 0,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 0,
      liveHerbSavr: 0,
      liveStemSavr: 0,
      deadHeat: 0,
      liveHeat: 0
    }
  ],
  [
    '1',
    {
      domain: 'behave',
      label: 'Short grass',
      number: 1,
      code: '1',
      depth: 1,
      deadMext: 0.12,
      dead1Load: 0.034,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 3500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '2',
    {
      domain: 'behave',
      label: 'Timber grass and understory',
      number: 2,
      code: '2',
      depth: 1,
      deadMext: 0.15,
      dead1Load: 0.092,
      dead10Load: 0.046,
      dead100Load: 0.023,
      totalHerbLoad: 0.023,
      liveStemLoad: 0,
      dead1Savr: 3000,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '3',
    {
      domain: 'behave',
      label: 'Tall grass',
      number: 3,
      code: '3',
      depth: 2.5,
      deadMext: 0.25,
      dead1Load: 0.138,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '4',
    {
      domain: 'behave',
      label: 'Chaparral',
      number: 4,
      code: '4',
      depth: 6,
      deadMext: 0.2,
      dead1Load: 0.23,
      dead10Load: 0.184,
      dead100Load: 0.092,
      totalHerbLoad: 0,
      liveStemLoad: 0.23,
      dead1Savr: 2000,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '5',
    {
      domain: 'behave',
      label: 'Brush',
      number: 5,
      code: '5',
      depth: 2,
      deadMext: 0.2,
      dead1Load: 0.046,
      dead10Load: 0.023,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0.092,
      dead1Savr: 2000,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '6',
    {
      domain: 'behave',
      label: 'Dormant brush, hardwood slash',
      number: 6,
      code: '6',
      depth: 2.5,
      deadMext: 0.25,
      dead1Load: 0.069,
      dead10Load: 0.115,
      dead100Load: 0.092,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1750,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '7',
    {
      domain: 'behave',
      label: 'Southern rough',
      number: 7,
      code: '7',
      depth: 2.5,
      deadMext: 0.4,
      dead1Load: 0.052,
      dead10Load: 0.086,
      dead100Load: 0.069,
      totalHerbLoad: 0,
      liveStemLoad: 0.017,
      dead1Savr: 1750,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '8',
    {
      domain: 'behave',
      label: 'Short needle litter',
      number: 8,
      code: '8',
      depth: 0.2,
      deadMext: 0.3,
      dead1Load: 0.069,
      dead10Load: 0.046,
      dead100Load: 0.115,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '9',
    {
      domain: 'behave',
      label: 'Long needle or hardwood litter',
      number: 9,
      code: '9',
      depth: 0.2,
      deadMext: 0.25,
      dead1Load: 0.134,
      dead10Load: 0.019,
      dead100Load: 0.007,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '10',
    {
      domain: 'behave',
      label: 'Timber litter & understory',
      number: 10,
      code: '10',
      depth: 1,
      deadMext: 0.25,
      dead1Load: 0.138,
      dead10Load: 0.092,
      dead100Load: 0.23,
      totalHerbLoad: 0,
      liveStemLoad: 0.092,
      dead1Savr: 2000,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '11',
    {
      domain: 'behave',
      label: 'Light logging slash',
      number: 11,
      code: '11',
      depth: 1,
      deadMext: 0.15,
      dead1Load: 0.069,
      dead10Load: 0.207,
      dead100Load: 0.253,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '12',
    {
      domain: 'behave',
      label: 'Medium logging slash',
      number: 12,
      code: '12',
      depth: 2.3,
      deadMext: 0.2,
      dead1Load: 0.184,
      dead10Load: 0.644,
      dead100Load: 0.759,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '13',
    {
      domain: 'behave',
      label: 'Heavy logging slash',
      number: 13,
      code: '13',
      depth: 3,
      deadMext: 0.25,
      dead1Load: 0.322,
      dead10Load: 1.058,
      dead100Load: 1.288,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1500,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '101',
    {
      domain: 'behave',
      label: 'Short, sparse, dry climate grass',
      number: 101,
      code: 'gr1',
      depth: 0.4,
      deadMext: 0.15,
      dead1Load: 0.004591368227731864,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.013774104683195591,
      liveStemLoad: 0,
      dead1Savr: 2200,
      liveHerbSavr: 2000,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '102',
    {
      domain: 'behave',
      label: 'Low load, dry climate grass',
      number: 102,
      code: 'gr2',
      depth: 1,
      deadMext: 0.15,
      dead1Load: 0.004591368227731864,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.04591368227731864,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '103',
    {
      domain: 'behave',
      label: 'Low load, very coarse, humid climate grass',
      number: 103,
      code: 'gr3',
      depth: 2,
      deadMext: 0.3,
      dead1Load: 0.004591368227731864,
      dead10Load: 0.018365472910927456,
      dead100Load: 0,
      totalHerbLoad: 0.06887052341597796,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1300,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '104',
    {
      domain: 'behave',
      label: 'Moderate load, dry climate grass',
      number: 104,
      code: 'gr4',
      depth: 2,
      deadMext: 0.15,
      dead1Load: 0.01147842056932966,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.0872359963269054,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '105',
    {
      domain: 'behave',
      label: 'Low load, humid climate grass',
      number: 105,
      code: 'gr5',
      depth: 1.5,
      deadMext: 0.4,
      dead1Load: 0.018365472910927456,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.11478420569329659,
      liveStemLoad: 0,
      dead1Savr: 1800,
      liveHerbSavr: 1600,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '106',
    {
      domain: 'behave',
      label: 'Moderate load, humid climate grass',
      number: 106,
      code: 'gr6',
      depth: 1.5,
      deadMext: 0.4,
      dead1Load: 0.004591368227731864,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.15610651974288337,
      liveStemLoad: 0,
      dead1Savr: 2200,
      liveHerbSavr: 2000,
      liveStemSavr: 1500,
      deadHeat: 9000,
      liveHeat: 9000
    }
  ],
  [
    '107',
    {
      domain: 'behave',
      label: 'High load, dry climate grass',
      number: 107,
      code: 'gr7',
      depth: 3,
      deadMext: 0.15,
      dead1Load: 0.04591368227731864,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.24793388429752067,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '108',
    {
      domain: 'behave',
      label: 'High load, very coarse, humid climate grass',
      number: 108,
      code: 'gr8',
      depth: 4,
      deadMext: 0.3,
      dead1Load: 0.02295684113865932,
      dead10Load: 0.0459139,
      dead100Load: 0,
      totalHerbLoad: 0.33516988062442604,
      liveStemLoad: 0,
      dead1Savr: 1500,
      liveHerbSavr: 1300,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '109',
    {
      domain: 'behave',
      label: 'Very high load, humid climate grass',
      number: 109,
      code: 'gr9',
      depth: 5,
      deadMext: 0.4,
      dead1Load: 0.04591368227731864,
      dead10Load: 0.04591368227731864,
      dead100Load: 0,
      totalHerbLoad: 0.4132231404958677,
      liveStemLoad: 0,
      dead1Savr: 1800,
      liveHerbSavr: 1600,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '121',
    {
      domain: 'behave',
      label: 'Low load, dry climate grass-shrub',
      number: 121,
      code: 'gs1',
      depth: 0.9,
      deadMext: 0.15,
      dead1Load: 0.009182736455463728,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0.02295684113865932,
      liveStemLoad: 0.02984403,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1800,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '122',
    {
      domain: 'behave',
      label: 'Moderate load, dry climate grass-shrub',
      number: 122,
      code: 'gs2',
      depth: 1.5,
      deadMext: 0.15,
      dead1Load: 0.02295684113865932,
      dead10Load: 0.02295684113865932,
      dead100Load: 0,
      totalHerbLoad: 0.027548209366391182,
      liveStemLoad: 0.04591368227731864,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1800,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '123',
    {
      domain: 'behave',
      label: 'Moderate load, humid climate grass-shrub',
      number: 123,
      code: 'gs3',
      depth: 1.8,
      deadMext: 0.4,
      dead1Load: 0.013774104683195591,
      dead10Load: 0.01147842056932966,
      dead100Load: 0,
      totalHerbLoad: 0.06657483930211203,
      liveStemLoad: 0.057392102846648294,
      dead1Savr: 1800,
      liveHerbSavr: 1600,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '124',
    {
      domain: 'behave',
      label: 'High load, humid climate grass-shrub',
      number: 124,
      code: 'gs4',
      depth: 2.1,
      deadMext: 0.4,
      dead1Load: 0.0872359963269054,
      dead10Load: 0.013774104683195591,
      dead100Load: 0.004591368227731864,
      totalHerbLoad: 0.15610651974288337,
      liveStemLoad: 0.3259871441689623,
      dead1Savr: 1800,
      liveHerbSavr: 1600,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '141',
    {
      domain: 'behave',
      label: 'Low load, dry climate shrub',
      number: 141,
      code: 'sh1',
      depth: 1,
      deadMext: 0.15,
      dead1Load: 0.01147842056932966,
      dead10Load: 0.01147842056932966,
      dead100Load: 0,
      totalHerbLoad: 0.0068870523415977955,
      liveStemLoad: 0.05968778696051423,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '142',
    {
      domain: 'behave',
      label: 'Moderate load, dry climate shrub',
      number: 142,
      code: 'sh2',
      depth: 1,
      deadMext: 0.15,
      dead1Load: 0.06198347107438017,
      dead10Load: 0.11019283746556473,
      dead100Load: 0.03443526170798898,
      totalHerbLoad: 0,
      liveStemLoad: 0.17676767676767677,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '143',
    {
      domain: 'behave',
      label: 'Moderate load, humid climate shrub',
      number: 143,
      code: 'sh3',
      depth: 2.4,
      deadMext: 0.4,
      dead1Load: 0.02066115702479339,
      dead10Load: 0.13774104683195593,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0.28466483011937554,
      dead1Savr: 1600,
      liveHerbSavr: 1800,
      liveStemSavr: 1400,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '144',
    {
      domain: 'behave',
      label: 'Low load, humid climate timber-shrub',
      number: 144,
      code: 'sh4',
      depth: 3,
      deadMext: 0.3,
      dead1Load: 0.03902662993572084,
      dead10Load: 0.05280073461891643,
      dead100Load: 0.009182736455463728,
      totalHerbLoad: 0,
      liveStemLoad: 0.11707988980716252,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '145',
    {
      domain: 'behave',
      label: 'High load, dry climate shrub',
      number: 145,
      code: 'sh5',
      depth: 6,
      deadMext: 0.15,
      dead1Load: 0.1652892561983471,
      dead10Load: 0.09641873278236915,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0.13314967860422405,
      dead1Savr: 750,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '146',
    {
      domain: 'behave',
      label: 'Low load, humid climate shrub',
      number: 146,
      code: 'sh6',
      depth: 2,
      deadMext: 0.3,
      dead1Load: 0.13314967860422405,
      dead10Load: 0.06657483930211203,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0.06427915518824609,
      dead1Savr: 750,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '147',
    {
      domain: 'behave',
      label: 'Very high load, dry climate shrub',
      number: 147,
      code: 'sh7',
      depth: 6,
      deadMext: 0.15,
      dead1Load: 0.16069788797061524,
      dead10Load: 0.24334251606978877,
      dead100Load: 0.10101010101010101,
      totalHerbLoad: 0,
      liveStemLoad: 0.15610651974288337,
      dead1Savr: 750,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '148',
    {
      domain: 'behave',
      label: 'High load, humid climate shrub',
      number: 148,
      code: 'sh8',
      depth: 3,
      deadMext: 0.4,
      dead1Load: 0.0941230486685032,
      dead10Load: 0.15610651974288337,
      dead100Load: 0.03902662993572084,
      totalHerbLoad: 0,
      liveStemLoad: 0.19972451790633605,
      dead1Savr: 750,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '149',
    {
      domain: 'behave',
      label: 'Very high load, humid climate shrub',
      number: 149,
      code: 'sh9',
      depth: 4.4,
      deadMext: 0.4,
      dead1Load: 0.20661157024793386,
      dead10Load: 0.11248852157943066,
      dead100Load: 0,
      totalHerbLoad: 0.07116620752984389,
      liveStemLoad: 0.3213957759412305,
      dead1Savr: 750,
      liveHerbSavr: 1800,
      liveStemSavr: 1500,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '161',
    {
      domain: 'behave',
      label: 'Light load, dry climate timber-grass-shrub',
      number: 161,
      code: 'tu1',
      depth: 0.6,
      deadMext: 0.2,
      dead1Load: 0.009182736455463728,
      dead10Load: 0.04132231404958678,
      dead100Load: 0.06887052341597796,
      totalHerbLoad: 0.009182736455463728,
      liveStemLoad: 0.04132231404958678,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '162',
    {
      domain: 'behave',
      label: 'Moderate load, humid climate timber-shrub',
      number: 162,
      code: 'tu2',
      depth: 1,
      deadMext: 0.3,
      dead1Load: 0.0436179981634527,
      dead10Load: 0.08264462809917356,
      dead100Load: 0.057392102846648294,
      totalHerbLoad: 0,
      liveStemLoad: 0.009182736455463728,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '163',
    {
      domain: 'behave',
      label: 'Moderate load, humid climate timber-grass-shrub',
      number: 163,
      code: 'tu4',
      depth: 1.3,
      deadMext: 0.3,
      dead1Load: 0.050505050505050504,
      dead10Load: 0.0068870523415977955,
      dead100Load: 0.01147842056932966,
      totalHerbLoad: 0.029843893480257115,
      liveStemLoad: 0.050505050505050504,
      dead1Savr: 1800,
      liveHerbSavr: 1600,
      liveStemSavr: 1400,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '164',
    {
      domain: 'behave',
      label: 'Dwarf conifer understory',
      number: 164,
      code: 'tu4',
      depth: 0.5,
      deadMext: 0.12,
      dead1Load: 0.20661157024793386,
      dead10Load: 0,
      dead100Load: 0,
      totalHerbLoad: 0,
      liveStemLoad: 0.09182736455463728,
      dead1Savr: 2300,
      liveHerbSavr: 1800,
      liveStemSavr: 2000,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '165',
    {
      domain: 'behave',
      label: 'Very high load, dry climate timber-shrub',
      number: 165,
      code: 'tu5',
      depth: 1,
      deadMext: 0.25,
      dead1Load: 0.18365472910927455,
      dead10Load: 0.18365472910927455,
      dead100Load: 0.13774104683195593,
      totalHerbLoad: 0,
      liveStemLoad: 0.13774104683195593,
      dead1Savr: 1500,
      liveHerbSavr: 1800,
      liveStemSavr: 750,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '181',
    {
      domain: 'behave',
      label: 'Low load, compact conifer litter',
      number: 181,
      code: 'tl1',
      depth: 0.2,
      deadMext: 0.3,
      dead1Load: 0.04591368227731864,
      dead10Load: 0.10101010101010101,
      dead100Load: 0.1652892561983471,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '182',
    {
      domain: 'behave',
      label: 'Low load broadleaf litter',
      number: 182,
      code: 'tl2',
      depth: 0.2,
      deadMext: 0.25,
      dead1Load: 0.06427915518824609,
      dead10Load: 0.10560146923783285,
      dead100Load: 0.10101010101010101,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '183',
    {
      domain: 'behave',
      label: 'Moderate load conifer litter',
      number: 183,
      code: 'tl3',
      depth: 0.3,
      deadMext: 0.2,
      dead1Load: 0.02295684113865932,
      dead10Load: 0.10101010101010101,
      dead100Load: 0.12855831037649218,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '184',
    {
      domain: 'behave',
      label: 'Small downed logs',
      number: 184,
      code: 'tl4',
      depth: 0.4,
      deadMext: 0.25,
      dead1Load: 0.02295684113865932,
      dead10Load: 0.06887052341597796,
      dead100Load: 0.1928374655647383,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '185',
    {
      domain: 'behave',
      label: 'High load conifer litter',
      number: 185,
      code: 'tl5',
      depth: 0.6,
      deadMext: 0.25,
      dead1Load: 0.05280073461891643,
      dead10Load: 0.11478420569329659,
      dead100Load: 0.20202020202020202,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '186',
    {
      domain: 'behave',
      label: 'High load broadleaf litter',
      number: 186,
      code: 'tl6',
      depth: 0.3,
      deadMext: 0.25,
      dead1Load: 0.11019283746556473,
      dead10Load: 0.055096418732782364,
      dead100Load: 0.055096418732782364,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '187',
    {
      domain: 'behave',
      label: 'Large downed logs',
      number: 187,
      code: 'tl7',
      depth: 0.4,
      deadMext: 0.25,
      dead1Load: 0.013774104683195591,
      dead10Load: 0.06427915518824609,
      dead100Load: 0.371900826446281,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '188',
    {
      domain: 'behave',
      label: 'Long-needle litter',
      number: 188,
      code: 'tl8',
      depth: 0.3,
      deadMext: 0.35,
      dead1Load: 0.2662993572084481,
      dead10Load: 0.06427915518824609,
      dead100Load: 0.050505050505050504,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1800,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '189',
    {
      domain: 'behave',
      label: 'Very high load broadleaf litter',
      number: 189,
      code: 'tl9',
      depth: 0.6,
      deadMext: 0.35,
      dead1Load: 0.305325987144169,
      dead10Load: 0.1515151515151515,
      dead100Load: 0.19054178145087236,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 1800,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '201',
    {
      domain: 'behave',
      label: 'Low load activity fuel',
      number: 201,
      code: 'sb1',
      depth: 1,
      deadMext: 0.25,
      dead1Load: 0.06887052341597796,
      dead10Load: 0.13774104683195593,
      dead100Load: 0.505050505050505,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '202',
    {
      domain: 'behave',
      label: 'Moderate load activity or low load blowdown',
      number: 202,
      code: 'sb2',
      depth: 1,
      deadMext: 0.25,
      dead1Load: 0.20661157024793386,
      dead10Load: 0.1951331496786042,
      dead100Load: 0.18365472910927455,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '203',
    {
      domain: 'behave',
      label: 'High load activity fuel or moderate load blowdown',
      number: 203,
      code: 'sb3',
      depth: 1.2,
      deadMext: 0.25,
      dead1Load: 0.2525252525252525,
      dead10Load: 0.12626262626262624,
      dead100Load: 0.13774104683195593,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ],
  [
    '204',
    {
      domain: 'behave',
      label: 'High load blowdown',
      number: 204,
      code: 'sb4',
      depth: 2.7,
      deadMext: 0.25,
      dead1Load: 0.24104683195592286,
      dead10Load: 0.16069788797061524,
      dead100Load: 0.24104683195592286,
      totalHerbLoad: 0,
      liveStemLoad: 0,
      dead1Savr: 2000,
      liveHerbSavr: 1800,
      liveStemSavr: 1600,
      deadHeat: 8000,
      liveHeat: 8000
    }
  ]
])
