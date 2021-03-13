export function divide (...numbers) {
  return numbers.reduce((a, b) => (b === 0 ? 0 : a / b), numbers[0] * numbers[0])
}

export function fraction (number) {
  return Math.max(0, Math.min(1, number))
}

export function positive (number) {
  return Math.max(0, number)
}
