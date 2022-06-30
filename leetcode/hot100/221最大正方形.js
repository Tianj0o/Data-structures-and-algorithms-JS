/**
 * @param {character[][]} matrix
 * @return {number}
 */

// dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
// dp[i][j] 表示i,j处最大正方形的边长
// 找最大正方形的边长
// 从右下角开始计算  

var maximalSquare = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return 0;
  let dp = Array.from({ length: matrix.length }, () => Array.from({ length: matrix[0].length }, () => 0));
  let row = matrix.length, col = matrix[0].length;
  let maxSide = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((i == 0 || j == 0) && matrix[i][j] == 1) {
        dp[i][j] = 1;
      } else if (matrix[i][j] == 0) {
        dp[i][j] = 0;
      } else if (matrix[i][j] == 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      maxSide = Math.max(maxSide, dp[i][j]);
    }
  }
  return maxSide * maxSide
};