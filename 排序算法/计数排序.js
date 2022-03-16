const { createArr, swap } = require('./utils')
const arr = createArr(20)

function countingSort(arr) {
  if (arr.length < 2)
    return
  const countArr = []
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = countArr[arr[i]] === undefined ? 1 : countArr[arr[i]] + 1
  }
  let count = 0
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arr[count++] = i
      countArr[i]--
    }
  }
  return arr
}
console.log(arr)
console.log(countingSort(arr))