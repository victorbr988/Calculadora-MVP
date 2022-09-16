const sum = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const div = (number1, number2) => number1 / number2;
const mult = (number1, number2) => number1 * number2;

export const controlOperations = (equation) => {
  const equations = equation.split(' ')
  

  if(equations.length % 2 !== 0) {
    const result = equations.map((data, index) => {
      if (data === '+') {
        return sum(+equations[index - 1], +equations[index + 1]);
      };
      if (data === '-') {
        return sub(+equations[index - 1], +equations[index + 1]);
      }
      if (data === '/') {
        return div(+equations[index - 1], +equations[index + 1]);
      }
      if (data === 'x') {
        return mult(+equations[index - 1], +equations[index + 1]);
      }
    })
    const calculate = result.join('')
    return calculate;
  }
};
