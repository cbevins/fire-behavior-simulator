# ![](favicon.png) @cbevins/fire-behavior-simulator/src/uom

*UOM* is a units-of-measure parser, compiler, and converter.

# ![](favicon.png) Installation

```cmd
> npm install @cbevins/uom
```

# ![](favicon.png) Example Usage

```js
// Import the Uom singleton
import { Uom } from '@cbevins/uom'

// Determine if two units-of-measure terms are convertible
Uom.convertible('m', 'ft') // returns true
Uom.convertible('m', 's') // returns false

// Convert a value from one units-of-measure into another units-of-measure
Uom.convert(1.23, 'm', 'ft') // returns 1.23 / 0.3048
Uom.convert(1.23, 'ft', 'm') // returns 1.23 * 0.3048

// Determine a units-of-measure quantity type
Uom.quantity('ha') // returns 'area'
Uom.quantity('J') // returns 'energy, work, heat OR moment of force'
```

Along with the tables of valid units names recognized by the Uom Parser  (see next section), that's all you need to know to effectively use this package.

---

# ![](favicon.png) Units Names

The Parser recognizes the following unit names and aliases:


## SI Base Units
| Name | Aliases |
| ---- | ---------- |
| dl | ratio, '' |
| m | meter, metre, meters, metres |
| kg | kilogram, kilograms, kgs |
| s | sec, secs, second, seconds |
| oC | Celsius, celsius, centigrade, &#x2103; |
| A | ampere, amp, amperes, amps |
| cd | candela, candelas |
| mol | mole, moles, mols |


## SI derived units with special names and symbols
| Name | Aliases |
| -------------- | ---------- |
| rad | radian, radians, rads |
| sr | steridian, steridians, srs |
| Hz | Hertz, hertz, hz |
| N | Newton, Newtons, newton, newtons |
| Pa | Pascal, Pascals, Pas, pascal, pascals |
| J | Joule, Joules, Js, joule, joules, j |
| W | Watt, Watts, Ws, watt, watts, w |
| C | coulomb, coulombs, Coulomb, Coulombs |
| V | volt, volts, v, Volt, Volts |
| F | farad, farads, Farad, Farads |
| Ohm | ohm, ohms, Ohms, &#x2126; |
| S | siemens, Siemens |
| Wb |weber, webers, Weber, Webers |
| T | tesla, teslas, Tesla, Teslas |
| H | henry, henrys, Henry, Henrys |
| lm | lumen, lumens |
| lx | lux |
| Bq | becquerel, Becquerel, becquerels, Becquerels |
| Gy | gray, grays, Gray, Grays |
| Sv | sievert, sieverts, Sievert, Sieverts |
| kat | katal, katals |


## Non-SI units accepted for use with SI units
| Name | Aliases |
| ---- | ------- |
| **Length** | |
| mm | millimeter, millimeters, millimetre, millimetres |
| cm | centimeter, centimeters, centimetre, centrimetres |
| dm | decimeter, decimeters, decimetre, decimetres |
| km | kms, kilometer, kilometre, kilometers, kilometres |
| au | 'astronomical unit' |
| **Time** | |
| ms | millisec, millisecs, millisecond, milliseconds |
| min | minute, minutes |
| h | hour, hours, hr, hrs |
| day | d, days |
| y | year, years |
| **Temperature** | |
| oK | K, &#x212a; |
| **Plane, Phase Angle** | |
| degree | degrees, deg, degs, o, &deg; |
| ' | |
| " | |
| **Area** | |
| ha | hectare, hectares |
| **Volume** | |
| l | L litre, liter, litres, liters |
| **Mass** | |
| gm | gram, grams, ms, g |
| tonne | t, tonnes |
| **Energy** | |
| eV | electronvolt, eVs |
| MJ | megaJ, mJ, mj, megaJoules |
| **Dimensionless** | |
| percent | %, pct, pph |
| ppt | partsPerThousand |
| ppm | partsPerMillion |


## US Customary units
| Name | Aliases |
| ---- | ------- |
| **Length** | |
| ft | foot, feet |
| in | inch, inches |
| rd | rod, rods |
| yd | yard, yards |
| ch | chain, chains |
| mi | mile, miles |
| **Mass** | |
| lb | pound, pounds, lbs |
| oz | ounce, ounces, ozs |
| ton | tons shortton shorttons |
| **Temperature** | |
| oF | &#x2109; |
| **Area** | |
| ac | acre, acres |
| **Energy** | |
| Btu | Btus, btu, btus (mean Btu) |
| Btu_i | btu_i (international table Btu, after 1956) |
| Btu_x | btu_x (mean Btu) |
| Btu_39 | btu_39 (Btu at 39) |
| Btu_59 | btu_59 (Btu at 59) |
| Btu_60 | btu_60 (Btu at 60) |
| Btu_tc | btu_tc (thermochemical Btu) |

---

# ![](favicon.png) How Uom Works

## UOM Parser

The UOM Parser takes a units-of-measure string such as 'lbs/ft2' and decomposes it into an array of [coefficient, unit, power] triplets. Units name aliases are replaced with their canonical keys. For example:

| Parser Input | Parser Output |
| ------------ | -------------- |
| `'pounds/foot2'` | `[[1, 'lb', 1], [1, 'ft', -2]]` |
| `'tons/acre'` | `[[1, 'ton', 1], [1, 'ac', -1]]` |
| `'Joules s-1'` | `[[1, 'J', 1], [1, 's', -1]]` |
| `'W'` | `[[1, 'W', 1]` |

## Unit Strings

Unit strings passed as input into the Parser must be composed of:
- one or more *unit terms* optionally separated by a '/'
- where a *unit term* is
  - a unit name or alias, and
  - an optional power integer that is optionally signed.

In other words, any continuous series of letters or any continuous series of (optionally signed) numbers are parsed into a single token, whether or not they are separated by any whistespace characters.

The following valid unit strings:
- 'lb/ft2'
- 'lb / ft2'
- 'lb1 / ft2'
- 'lb1/ ft2'
- 'lb1 /ft2'
- 'lb+1ft-2'
- 'pound 1 foot -2'
- 'feet-2 pounds+1'
- 'feet-2pounds+1'

all produce equivalent Parser results:
- `[[1, 'lb', 1], [1, 'ft', -2]]`, or
- `[[1, 'ft', -2], [1, 'lb', -1]]`

an array of triplets where:
- the first element is a coefficient,
- the second is a units term, and
- the third element is an exponent

## UOM Compiler

The UOM Compiler takes the Parser output and recursively decomposes each of its triplets into *Systeme International* base units, powers, and coefficients (a sort of *units signature*).  Some examples include:

| Parser Output (Compiler Input) | Compiler Output (Units Signature) |
| ------------- | --------------------------------- |
| `[[1, 'lb', 1], [1, 'ft', -2]]` | `[[0.45359237, 'kg', 1], [0.09290304, 'm', -2]` |
| `[[1, 'ton', 1], [1, 'ac', -2]]` | `[[907.18474, 'kg', 1], [4046.8564224, 'm', -2]` |
| `[[, 'J', 1], [1, 's', -1]]` | `[1, 'J', 1], [1, 's', -1]` |
| `[1, 'W', 1]` | `[1, 'J', 1], [1, 's', -1]` |

## UOM Converter

The UOM Converter uses the Parser and Compiler to convert a quantity amount between units-of-measure

`Converter.convert(amount, fromUnits, intoUnits)`

where `fromUnits` and `intoUnits` are strings composed of 1 or more units terms such as

`convert(1.23, 'Btus/ft/s', 'W')`

The Converter first checks if the term (i.e., `Btu/ft/s`) already exists in its cache of pre-compiled unit signatures.  If not, it parses and compiles the string into its units signature and stores it in the cache.  It then uses the units signature to perform the conversion.
