const { createArr, swap } = require('./utils')
const arr = createArr(20)
// 时间复杂度O(n^2)  排序小型数组时，比选择排序和冒泡排序好
function insertionSort(arr) {
  let temp
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--;
    }
    arr[j] = temp
  }
  return arr
}


console.log(insertionSort(arr));