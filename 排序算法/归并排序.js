const { createArr, swap } = require('./utils')
const array = createArr(21)
// 时间复杂度nlogn
function mergeSort(arr) {
  if (arr.length > 1) {
    let middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle, arr.length))
    arr = merge(left, right)
  }
  return arr
}
function merge(arr1, arr2) {
  let i = 0, j = 0;
  let result = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  if (i < arr1.length) {
    result = result.concat(arr1.slice(i, arr1.length))
  } else {
    result = result.concat(arr2.slice(j, arr2.length))
  }
  return result
}

console.log(mergeSort(array));

// console.log([2, 3, 4].slice(1, 3));