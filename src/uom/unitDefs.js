/**
 * @file Converter units-of-measure definitions
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
 */

// Defines the set of units signature fields
export const baseSet = new Set([
  '_d', // distance, length (m)
  '_m', // mass (kg)
  '_t', // time (s)
  '_T', // thermodynamic temperature (oK)
  '_r', // ratio, dimensionless
  '_e', // electric current (A)
  '_i', // luminous intensity (cd)
  '_s' // amount of substance (mole)
])

// Prototype units signature
export const protoSignature = { coeff: 1, _d: 0, _m: 0, _t: 0, _T: 0, _r: 0, _e: 0, _i: 0, _s: 0 }

// Array of [string:unitsKey, array:triplet, array:aliases] elements,
// where triplet is [number:coeff, string|array:base, number:power]
export const unitDefs = [
  // base units (IMPORTANT: power MUST BE 0 for base units!!)
  ['dl', [1, '_r', 0], ['ratio', '']],
  ['m', [1, '_d', 0], ['meter', 'metre', 'meters', 'metres']],
  ['kg', [1, '_m', 0], ['kilogram', 'kilograms', 'kgs']],
  ['s', [1, '_t', 0], ['sec', 'secs', 'second', 'seconds']],
  ['oC', [1, '_T', 0], ['Celsius', 'celsius', 'centigrade', '\u2103']],
  ['A', [1, '_e', 0], ['ampere', 'amp', 'amperes', 'amps']],
  ['cd', [1, '_i', 0], ['candela', 'candelas']],
  ['mol', [1, '_s', 0], ['mole', 'moles', 'mols']],

  // SI derived units with special names and symbols
  ['rad', [1, [[1, 'm', 1], [1, 'm', -1]], 1],
    ['radian', 'radians', 'rads']],
  ['sr', [1, [[1, 'm', 2], [1, 'm', -2]], 1],
    ['steridian', 'steridians', 'srs']],
  ['Hz', [1, 's', -1],
    ['Hertz', 'hertz', 'hz']],
  ['N', [1, [[1, 'kg', 1], [1, 'm', 1], [1, 's', -2]], 1],
    ['Newton', 'Newtons', 'newton', 'newtons']],
  ['Pa', [1, [[1, 'kg', 1], [1, 'm', -1], [1, 's', -2]], 1],
    ['Pascal', 'Pascals', 'Pas', 'pascal', 'pascals']],
  ['J', [1, [[1, 'kg', 1], [1, 'm', 2], [1, 's', -2]], 1],
    ['Joule', 'Joules', 'Js', 'joule', 'joules', 'j']],
  ['W', [1, [[1, 'J', 1], [1, 's', -1]], 1],
    ['Watt', 'Watts', 'Ws', 'watt', 'watts', 'w']],
  ['C', [1, [[1, 's', 1], [1, 'A', 1]], 1],
    ['coulomb', 'coulombs', 'Coulomb', 'Coulombs']],
  ['V', [1, [[1, 'kg', 1], [1, 'm', 2], [1, 's', -3], [1, 'A', -1]], 1],
    ['volt', 'volts', 'v', 'Volt', 'Volts']],
  ['F', [1, [[1, 'kg', -1], [1, 'm', -2], [1, 's', 4], [1, 'A', 2]], 1],
    ['farad', 'farads', 'Farad', 'Farads']],
  ['Ohm', [1, [[1, 'kg', 1], [1, 'm', 2], [1, 's', -3], [1, 'A', -2]], 1],
    ['ohm', 'ohms', 'Ohms', '\u2126']],
  ['S', [1, [[1, 'kg', -1], [1, 'm', -2], [1, 's', 3], [1, 'A', 2]], 1],
    ['siemens', 'Siemens']],
  ['Wb', [1, [[1, 'kg', 1], [1, 'm', 2], [1, 's', -2], [1, 'A', -1]], 1],
    ['weber', 'webers', 'Weber', 'Webers']],
  ['T', [1, [[1, 'kg', 1], [1, 's', -2], [1, 'A', -1]], 1],
    ['tesla', 'teslas', 'Tesla', 'Teslas']],
  ['H', [1, [[1, 'kg', 1], [1, 'm', 2], [1, 's', -2], [1, 'A', -2]], 1],
    ['henry', 'henrys', 'Henry', 'Henrys']],
  ['lm', [1, [[1, 'cd', 1], [1, 'sr', 2]], 1],
    ['lumen', 'lumens']],
  ['lx', [1, [[1, 'cd', 1], [1, 'sr', 2], [1, 'm', -2]], 1],
    ['lux']],
  ['Bq', [1, [[1, 's', -1]], 1],
    ['becquerel', 'Becquerel', 'becquerels', 'Becquerels']],
  ['Gy', [1, [[1, 'm', 2], [1, 's', -2]], 1],
    ['gray', 'grays', 'Gray', 'Grays']],
  ['Sv', [1, [[1, 'm', 2], [1, 's', -2]], 1],
    ['sievert', 'sieverts', 'Sievert', 'Sieverts']],
  ['kat', [1, [[1, 'mol', 1], [1, 's', -1]], 1],
    ['katal', 'katals']],

  // Non-SI units accepted for use with SI units
  // length
  ['mm', [0.001, 'm', 1], ['millimeter', 'millimeters', 'millimetre', 'millimetres']],
  ['cm', [0.01, 'm', 1], ['centimeter', 'centimeters', 'centimetre', 'centrimetres']],
  ['dm', [0.1, 'm', 1], ['decimeter', 'decimeters', 'decimetre', 'decimetres']],
  ['km', [1000, 'm', 1], ['kms', 'kilometer', 'kilometre', 'kilometers', 'kilometres']],
  ['au', [149597870700, 'm', 1], ['astronomical unit']],

  // time
  ['ms', [0.001, 's', 1], ['millisec', 'millisecs', 'millisecond', 'milliseconds']],
  ['min', [60, 's', 1], ['minute', 'minutes']],
  ['h', [60 * 60, 's', 1], ['hour', 'hours', 'hr', 'hrs']],
  ['day', [24 * 60 * 60, 's', 1], ['d', 'days']],
  ['y', [365 * 24 * 60 * 60, 's', 1], ['year', 'years', 'yr']],

  // temperature
  ['oK', [1, 'oC', 1], ['K', '\u212a']],

  // plane and phase angle
  ['degree', [Math.PI / 180, 'rad', 1], ['degrees', 'deg', 'degs', 'o', '\u00b0']],
  ["'", [Math.PI / 10800, 'rad', 1], []],
  ['"', [Math.PI / 648000, 'rad', 1], []],

  // area
  ['ha', [10000, 'm', 2], ['hectare', 'hectares']],

  // volume
  ['l', [1000, 'cm', 3],
    ['litre', 'liter', 'litres', 'liters', 'L']],

  // mass
  ['gm', [0.001, 'kg', 1], ['gram', 'grams', 'ms', 'g']],
  ['tonne', [1000, 'kg', 1], ['t', 'tonnes']],

  // energy
  ['eV', [1.602176634e-19, 'J', 1], ['electronvolt', 'eVs']],
  ['MJ', [1000000, 'J', 1], ['megaJ', 'mJ', 'mj', 'megaJoules']],

  // dimensionless
  ['percent', [0.01, 'dl', 1], ['%', 'pct', 'pph']],
  ['ppt', [0.001, 'dl', 1], ['partsPerThousand']],
  ['ppm', [0.000001, 'dl', 1], ['partsPerMillion']],

  // US Customary units

  // length  // derived distance units
  ['ft', [0.3048, 'm', 1], ['foot', 'feet']],
  ['in', [1 / 12, 'ft', 1], ['inch', 'inches']],
  ['yd', [3, 'ft', 1], ['yard', 'yards']],
  ['rd', [16.5, 'ft', 1], ['rod', 'rods']],
  ['ch', [66, 'ft', 1], ['chain', 'chains']],
  ['mi', [5280, 'ft', 1], ['mile', 'miles']],

  // mass
  ['lb', [1 / 2.20462262184878, 'kg', 1], ['pound', 'pounds', 'lbs']],
  ['oz', [1 / 16, 'lb', 1], ['ounce', 'ounces', 'ozs']],
  ['ton', [2000, 'lb', 1], ['tons', 'shortton', 'shorttons']],

  // temperature
  ['oF', [5 / 9, 'oC', 1], ['\u2109', 'Fahrenheit', 'fahrenheit']],

  // area
  ['ac', [10, 'ch', 2], ['acre', 'acres']],

  // energy
  ['Btu', [1.055870000000e+03, 'J', 1], ['Btus', 'btu', 'btus']],
  ['Btu_x', [1.055870000000e+03, 'J', 1], ['btu_x']], // mean BTU
  ['Btu_i', [1.055056000000e+03, 'J', 1], ['btu_i']], // international table BTU (after 1956)
  ['Btu_39', [1.059670000000e+03, 'J', 1], ['btu_39']], // BTU at 39 oF
  ['Btu_59', [1.054800000000e+03, 'J', 1], ['btu_59']], // BTU at 59 oF
  ['Btu_60', [1.054680000000e+03, 'J', 1], ['btu_60']], // BTU at 60 oF
  ['Btu_tc', [1.054350000000e+03, 'J', 1], ['btu_tc']] // thermochemical BTU
]

// From https://en.wikipedia.org/wiki/International_System_of_Units
export const quantity = [
  // SI base units
  ['dimensionless', ['']],
  ['distance', ['m']],
  ['length', ['m']],
  ['mass', ['kg']],
  ['time', ['s']],
  ['thermodynamic temperature', ['oC']],
  ['electric current', ['A']],
  ['luminous intensity', ['cd']],
  ['amount of substance', ['mol']],

  // Fire behavior
  ['fireline intensity', ['m kg s-3', 'W/m']],
  ['fire heat per unit area', ['kg s-2', 'N/m']],
  ['fire reaction intensity', ['kg s-3', 'W/m2']],
  ['surface area-to-volume ratio', ['m-1']],

  // SI derived units woth special names and symbols
  ['plane angle', ['m m-1', 'rad']],
  ['solid angle', ['m2 m-2', 'sr']],
  ['frequency', ['s-1', 'Hz']],
  ['force', ['kg m s-2', 'N']],
  ['weight', ['kg m s-2', 'N']],
  ['pressure', ['kg m-1 s-2', 'Pa', 'N/m2']],
  ['stress', ['kg m-1 s-2', 'Pa', 'N/m2']],
  ['energy', ['kg m2 s-2', 'J', 'N m', 'Pa m3']],
  ['work', ['kg m2 s-2', 'J', 'N m', 'Pa m3']],
  ['heat', ['kg m2 s-2', 'J', 'N m', 'Pa m3']],
  ['power', ['kg m2 s-3', 'W', 'J/s']],
  ['radiant flux', ['kg m2 s-3', 'W', 'J/s']],
  ['electric charge', ['s A', 'C']],
  ['electric potential difference (voltage)', ['kg m2 s-3 A-1', 'V', 'W/A', 'J/C']],
  ['voltage', ['kg m2 s-3 A-1', 'V', 'W/A', 'J/C']],
  ['emf', ['kg m2 s-3 A-1', 'V', 'W/A', 'J/C']],
  ['capacitance', ['kg-1 m-2 s4 A2', 'F', 'C/V']],
  ['resistance', ['kg m2 s-3 A-2', 'ohm', 'V/A']],
  ['impedance', ['kg m2 s-3 A-2', 'ohm', 'V/A']],
  ['reactance', ['kg m2 s-3 A-2', 'ohm', 'V/A']],
  ['electrical conductance', ['kg-1 m-2 s3 A2', 'S', 'ohm-1']],
  ['magnetic flux', ['kg m2 s-2 A-1', 'Wb', 'V s']],
  ['magnetic flux density', ['kg s-2 A-1', 'T', 'Wb/m2']],
  ['inductance', ['kg m2 s-2 A-2', 'H', 'Wb/A']],
  ['luminous flux', ['cd sr', 'lm']],
  ['illuminance', ['cd sr m-2', 'lx', 'lm/m2']],
  ['radioactivity (decays per unit time)', ['s-1', 'Bq']],
  ['absorbed dose (of ionising radiation)', ['m2 s-2', 'Gy', 'J/kg']],
  ['equivalent dose (of ionising radiation)', ['m2 s-2', 'Sv', 'J/kg']],
  ['catalytic activity', ['mol s-1', 'kat']],
  // examples of coherent derived units
  ['area', ['m2']],
  ['volume', ['m3']],
  ['speed', ['m s-1']],
  ['velocity', ['m s-1']],
  ['acceleration', ['m s-2']],
  ['wavenumber', ['m-1']],
  ['vergence (optics)', ['m-1']],
  ['density', ['kg m-3']],
  ['load', ['kg m-2']],
  ['surface density', ['kg m-2']],
  ['specific volume', ['m3 kg-1']],
  ['current density', ['A m-2']],
  ['magnetic field strength', ['A m-1']],
  ['concentration', ['mol m-3']],
  ['mass concentration', ['kg m-3']],
  ['luminance', ['cd m-2']],
  // Examples of derived units that include units with special name
  ['dynamic viscosity', ['m-1 kg s-1', 'Pa s']],
  ['moment of force', ['m2 kg s-2', 'N m']],
  ['surface tension', ['kg s-2', 'N/m']],
  ['angular velocity', ['s-1', 'rad/s']],
  ['angular frequency', ['s-1', 'rad/s']],
  ['angular acceleration', ['s-2', 'rad/s2']],
  ['heat flux density', ['kg s-3', 'W/m2']],
  ['irradiance', ['kg s-3', 'W/m2']],
  ['entropy', ['m2 kg s-2 oC-1', 'J/oC']],
  ['heat capacity', ['m2 kg s-2 oC-1', 'J/oC']],
  ['specific heat capacity', ['m2 s-2 oC-1', 'J/kg oC']],
  ['specific entropy', ['m2 s-2 oC-1', 'J/kg oC']],
  ['specific energy', ['m2 s-2', 'J/kg']],
  ['thermal conductivity', ['m kg s-3 oC-1', 'W/m oC']],
  ['energy density', ['m-1 kg s-2', 'J/m3']],
  ['electric field strength', ['m kg s-3 A-1', 'V/m']],
  ['electric charge density', ['m-3 s A', 'C/m3']],
  ['surface charge density', ['m-2 s A', 'C/m2']],
  ['electric flux density', ['m-2 s A', 'C/m2']],
  ['electric displacement', ['m-2 s A', 'C/m2']],
  ['permittivity', ['m-3 kg-1 s4 A2', 'F/m']],
  ['molar energy', ['m2 kg s-2 mol-1', 'J/mol']],
  ['molar entropy', ['m2 kg s-2 oC-1 mol-1', 'J/mol oC']],
  ['molar heat capacity', ['m2 kg s-2 oC-1 mol-1', 'J/mol oC']],
  ['exposure (x- and y-rays)', ['kg-1 s A', 'C/kg']],
  ['absorbed dose rate', ['m2 s-3', 'Gy/s']],
  ['radiant intensity', ['m2 kg s-3', 'W/sr']],
  ['radiance', ['kg s-3', 'W/m2 sr']],
  ['catalytic activity concentration', ['m-2 s-1 mol', 'kat/m3']]
]

/**
 * Btu definitions
    - International Table British thermal unit (after 1956)
        1.055056000000e+03,
    - thermochemical British thermal unit
        1.054350000000e+03,
    - mean British thermal unit [Btu]
        1.055870000000e+03,
    - British thermal unit (39 F)
        1.059670000000e+03,
    - British thermal unit (59 F)
        1.054800000000e+03,
    - British thermal unit (60 F)
        1.054680000000e+03,
 */
