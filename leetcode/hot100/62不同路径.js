/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
var uniquePaths = function (m, n) {
  const arr = Array.from({ length: m }, () => Array.from({ length: n }, () => 1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
    }
  }
  return arr[m - 1][n - 1]
};

uniquePaths(3, 7)

// 数学方法 机器人要到达m,n 一共要 向右走n-1步 向下走m-1步 C(n-1 n+m-2);



var uniquePaths2 = function (m, n) {
  return fac(m + n - 2) / (fac(n - 1) * fac(m - 1))
}
console.log(uniquePaths2(3, 7))

// 递归求 溢出
function fac2(n) {
  if (n == 1) return 1;
  return n * fac(n - 1)
}

// 迭代
function fac(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res
}