/* eslint-disable spaced-comment */
const zeroValue = (value) => {
  return 0
}

const nothingValue = (value) => {
  return value === null
}

const acceptableOperator = (value) => {
  const operators = ['+', '-', '*', '/']

  return typeof value === Number || operators.includes(value)
}

const calculate = (operandOne, operator, operandTwo) => {
  switch (operator) {
    case '+': 
      return operandOne + operandTwo
    case '-':
      return operandOne - operandTwo
    case '*':
      return operandOne * operandTwo
    case '/': 
      return operandOne / operandTwo
    default: 
      return "Invalid input"

  }
}

//loop through the array that is given
//ignore undefined, empty string values, and non-numeric values
//change NULL value to 0. Null values are absence of object values, reads as falsy
// let NULL = 0 
//find the operand in the array, utilize that later to do the math portion of it 

//grab numeric values, whether string or not, and turn them into numbers to utilize for equations  
