/**
 * @file Exported WFSP math functions.
 * @version 0.1.0
 * @copyright Systems for Environmental Management 2020
 * @author Collin D. Bevins <cbevins@montana.com>
 * @license MIT
 */
export const divide = (...numbers) =>
  numbers.reduce((a, b) => (b === 0 ? 0 : a / b), numbers[0] * numbers[0])

export const fraction = number => Math.max(0, Math.min(1, number))

export const greaterThan = (a, b) => a > b

export const multiply = (...numbers) => numbers.reduce((a, b) => a * b, 1)

export const or = (a, b) => a || b

export const positive = number => Math.max(0, number)

export const subtract = (...numbers) =>
  numbers.reduce((a, b) => a - b, 2 * numbers[0])

export const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0)

export const sumOfProducts = (...numbers) => {
  const mid = Math.floor(numbers.length / 2)
  const a1 = numbers.slice(0, mid)
  return a1.reduce((acc, number, idx) => acc + a1[idx] * numbers[mid + idx], 0)
}
