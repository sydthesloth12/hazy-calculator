/* eslint-disable spaced-comment */
const getValues = (array) => {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]

    if (isNaN(currentItem) === false && currentItem !== '') {
      let value = Number(currentItem)

      newArray.push(value)
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

  return newArray
}


const calculate = (array) => {
  const newArray = getValues(array)
  
  let firstNumber = newArray[0]
  let secondNumber = newArray[2]
  let operator = newArray[1]
  console.log(operator)
  if (operator === '+') {
    answer = firstNumber + secondNumber
  } else if (operator === '-') {
    answer = firstNumber - secondNumber
  } else if (operator === '/') {
    answer = firstNumber / secondNumber
  } else if (operator === '*') {
    answer = firstNumber * secondNumber
  } else {
    answer = NaN
  }

  return answer
}

module.exports = calculate

