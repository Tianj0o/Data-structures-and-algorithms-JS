const { createArr, swap } = require('./utils')
const arr = createArr(20)
//时间复杂度O(n^2)
function quickSort(arr) {
  return quick(arr, 0, arr.length - 1)
}
function quick(array, left, right) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}
function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left, j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++;
      j--
    }
  }
  return i
}
console.log(quickSort([3, 1, 5, 2, 6, 12, 3, 9, 6]));