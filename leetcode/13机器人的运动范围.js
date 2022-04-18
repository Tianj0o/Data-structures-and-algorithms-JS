var movingCount = function (m, n, k) {
  let counter = 0;
  const arr = Array.from({ length: m }, (_) => {
    return Array.from({ length: n }, () => {
      return 0
    })
  })
  dfs(0, 0)
  function dfs(i, j) {
    if (arr[i, j] === 1) return
    if (getSum(i) + getSum(j) <= k) {
      counter++;
      arr[i][j] = 1
      dfs(i + 1, j);
      dfs(i, j + 1);
    }
  }
  return counter
}



function getSum(num) {
  let count = 0;
  for (let n of num.toString()) {
    count += Number(n)
  }
  return count
}
console.log(movingCount(2, 3, 1))