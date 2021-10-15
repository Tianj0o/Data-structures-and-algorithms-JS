function Factorial(number) {
  if (number === 1 || number === 0) {
    return 1
  } else {
    return number * Factorial(number - 1)
  }
}
