#  ![](favicon.png) Performance Testing

| Prev: [10 Design and Implementation](./10_DesignImplementation.md) | Next: [12 Author](./12_Author.md) | [Table of Contents](../README.md) |

---

The **examples** folder contains 3 programs for testing *fire-behavior-simulator* performance.  Please keep in mind that Javascript engines, whether in a web browser or the Node.js runtime environment, perform automatic garbage collection.  Bear in mind that when and how often garbage collection occurs during a program influences its performance and can introduce variance into performance timing tests.

The example program **oneMillionRuns.js** performs runs for:
 - 10 fuel models
 - 10 live herb fuel moisture contents
 - 10 dead 1-h fuel moisture contents
 - 10 wind speeds
 - 10 wind directions from upslope
 - 10 slope steepnesses
 - all combinations of the above

 while producing 18 common outputs:
 - surface.fire.ellipse.heading.fromNorth
 - surface.fire.ellipse.heading.fromUpslope
 - surface.fire.ellipse.axis.lengthToWidthRatio
 - surface.fire.ellipse.{head|back|flank}.firelineIntensity
 - surface.fire.ellipse.{head|back|flank}.flameLength
 - surface.fire.ellipse.{head|back|flank}.scorchHeight
 - surface.fire.ellipse.{head|back|flank}.spreadDistance
 - surface.fire.ellipse.{head|back|flank}.spreadrate

 On my circa 2015 laptop, the following runs per second were recorded:

 | Description      | Depth | Runs     | Millsec | Run 1 | Run 2 | Run 3 |
 |---------------------|----|----------|---------|-------|-------|-------|
 | Midflame Wind Speed | 2  |  100,000 |   1,592 | 62,814 | 63,131 | 65,189 |
 | Wind Dir Upslope    | 52 |  100,000 |   1,224 | 81,699 | 78,740 | 79,491 |
 | Slope Steep Ratio   | 56 |  100,000 |   1,498 | 66,755 | 63,251 | 65,659 |
 | Live Herb Moisture  | 66 |  100,000 |   9,023 | 11,082 | 11,223 | 11,178 |
 | Dead 1-h Moisture   | 72 |  100,000 |   6,204 | 16,118 | 14,738 | 15,236 |
 | Fuel Model          | 86 |  100,000 |   8,403 | 11,900 | 11,114 | 11,299 |
 | 10 of Each          |    |1,000,000 |  14,553 | 68,714 | 66,885 | 63,637 |

Synopsis:
- As expected, changing just the fuel model key value (which has the greatest DAG topological depth) has the lowest performance at about 11,000 runs per second.
- As expected, changing just the midflame wind speed value (which has the least DAG topological depth) has the greatest performance at about 63,000 runs per second.
- Changing all 6 variables over 1 million runs averages about 65,000 runs per second.

---

The **surfaceFireOptimized.js** demonstrates how the *fire-behavior-simulator* DAG internally optimizes computation order to make 240,000 estimates of surface fire spread rate, flame length, and scorch height under various fuel model, moisture, wind, slope, and temperature input values.

Again, on my circa 2016 laptop running the Node.js runtime environment, 240,000 runs requires from 735 to 1300 millseconds, or 180,000 to 326,000 runs per second.

Compare those results with **surfaceFireDeoptimized.js**, which manually runs each of the surfaceFireOptimized.js input cases, but in the worst case scenario **reverse order** than *fire-behavior-simulator* would otherwise perform.  The 240,000 runs now require about 34,440 milliseconds, or 7400 runs per second.

---

In summary, the *fire-behavior-simulator* can be expected to perform 7,000 to 70,000 DAG updates per second.

---

| Prev: [10 Design and Implementation](./10_DesignImplementation.md) | Next: [12 Author](./12_Author.md) | [Table of Contents](../README.md) |
