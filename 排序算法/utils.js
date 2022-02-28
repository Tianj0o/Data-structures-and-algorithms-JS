function createArr(n = 100) {
  const arr = new Array(n)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100)
  }
  return arr
}
function swap(arr, n1, n2) {
  [arr[n1], arr[n2]] = [arr[n2], arr[n1]]
}
exports.createArr = createArr
exports.swap = swap
