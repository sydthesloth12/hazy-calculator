/* eslint-disable spaced-comment */
const getValues = (array) => {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]

    if (isNaN(currentItem) === false) {
      let currentItem = Number(currentItem)

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

  return newArray
}


const calculate = (newArray) => {
  switch (newArray) {
    case '+':
      return newArray[0] + newArray[2]
    case '-':
      return newArray[0]  - newArray[2]
    case '*':
      return newArray[0]  * newArray[2]
    case '/':
      return newArray[0]  / newArray[2]
    default:
      return 'Invalid input'
  }
}




