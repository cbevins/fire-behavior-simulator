/**
 * @file Site Date and Time genome
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
export const genome = [
  ['site.date.dayOfMonth', [['DateDayOfMonth'], [['finally', 'Dag.input']]]],
  ['site.date.dayOfYear', [['DateDayOfYear'], [['finally', 'Dag.input']]]],
  ['site.date.julian', [['DateJulian'], [['finally', 'Dag.input']]]],
  ['site.date.month', [['DateMonth'], [['finally', 'Dag.input']]]],
  ['site.date.year', [['DateYear'], [['finally', 'Dag.input']]]],
  ['site.time.hour', [['TimeHour'], [['finally', 'Dag.input']]]],
  ['site.time.minute', [['TimeMinute'], [['finally', 'Dag.input']]]],
  ['site.time.second', [['TimeSecond'], [['finally', 'Dag.input']]]],
  ['site.time.sunrise', [['TimeStamp'], [['finally', 'Dag.input']]]],
  ['site.time.sunset', [['TimeStamp'], [['finally', 'Dag.input']]]]
]
