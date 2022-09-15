const sum = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const div = (number1, number2) => number1 / number2;
const mult = (number1, number2) => number1 * number2;

export const controlOperations = (operator, firstNumber, secondNumber) => {
  if (operator === '+') {
    return sum(firstNumber, secondNumber)
  }
  if (operator === '-') {
    return sub(firstNumber, secondNumber)
  }
  if (operator === '/') {
    return div(firstNumber, secondNumber)
  }
  if (operator === 'x') {
    return mult(firstNumber, secondNumber)
    
  }
}
