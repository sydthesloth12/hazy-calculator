/* eslint-disable spaced-comment */
const getValues = (array) => {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]

  if (isNaN(currentItem) === false) {
    newArray.push(currentItem)
  } if (currentItem === '+') {
    newArray.push(currentItem)
  } if (currentItem === '-') {
    newArray.push(currentItem)
  } if (currentItem === '*') {
    newArray.push(currentItem)
  } if (currentItem === '/') {
    newArray.push(currentItem)
  } if (currentItem === null) {
    let currentItem = 0
    newArray.push(currentItem)
  } else {
    
  }
}
}

const testArray = ['foo', 3, null, '*']
const test = getValues(testArray)

console.log(test)
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
//   }




