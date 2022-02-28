const { createArr, swap } = require('./utils')
const arr = createArr(20)
// 优化 第二次循环中减去已经排序好的数字
// 时间复杂的O(n^2)
// 空间复杂度O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));