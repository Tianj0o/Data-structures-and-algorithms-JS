const { createArr, swap } = require('./utils')
const arr = createArr(20)
// 时间复杂度 O(n^2)
function selectionSort(arr) {
  let min
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, min, i)
    }
  }
  return arr
}
console.log(selectionSort(arr));