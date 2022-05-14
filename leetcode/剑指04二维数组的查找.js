/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 从右上角开始找有明确的大小关系
var findNumberIn2DArray = function (matrix, target) {
  const n = matrix.length;
  if (n == 0) return false
  const m = matrix[0].length;
  if (m == 0) return false
  let X = 0, Y = m - 1;
  while (X < n && Y >= 0) {
    if (matrix[X][Y] === target) {
      return true
    } else if (matrix[X][Y] > target) {
      Y--
    } else if (matrix[X][Y] < target) {
      X++
    }
  }
  return false
};