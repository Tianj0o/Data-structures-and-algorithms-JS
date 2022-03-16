
const { createArr, swap } = require('./utils')
const arr = createArr(20)
const { insertionSort } = require('./插入排序')

/**
 * 
 * @param {Array} arr 
 * @param {Number} bucketSize 
 */


function createBuckets(arr, bucketSize) {
  let minValue = arr[0], maxValue = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }

  return buckets
}

function sortBuckets(buckets) {
  const sortArr = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length > 0) {
      sortArr.push(...insertionSort(buckets[i]))
    }
  }
  return sortArr
}

function bucketSort(array, bucketSize) {
  if (array.leng < 2)
    return
  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}
// console.log(arr)
// console.log(bucketSort(arr, 10))