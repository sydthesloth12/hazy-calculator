/* eslint-disable spaced-comment */
const getValues = (array) => {
  let newArray = []
  let operation
  let number

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]

    if (currentItem !== NaN) {
      let number = Number(currentItem)

      currentItem.push(newArray)
    } if (currentItem === '+' || '-' || '*' || '/') {
      let currentItem = operation

      operation.push(newArray)
    }
  }
}

const testArray = ['2', '*', 4]

console.log(getValues(testArray))




// const performCalc = (array) => {
//   switch (array) {
//     case '+':
//       return operandOne + operandTwo
//     case '-':
//       return operandOne - operandTwo
//     case '*':
//       return operandOne * operandTwo
//     case '/':
//       return operandOne / operandTwo
//     default:
//       return 'Invalid input'
//  

// const test = ['2', '+', '10']

// console.log(performCalc(test))


//write a function that loops through an array, evaluates each value of that array, and only pulls out
//string of numbers and operators
//takes those values and pushes them into a new array

//calculate function grabs the values from the new array, turns the string value to number,
//uses the operator to perform calculation

//loop through the array that is given
//ignore undefined, empty string values, and non-numeric values
//change NULL value to 0. Null values are absence of object values, reads as falsy
// let NULL = 0 
//find the operand in the array, utilize that later to do the math portion of it 

//grab numeric values, whether string or not, and turn them into numbers to utilize for equations  

module.exports = calculate
