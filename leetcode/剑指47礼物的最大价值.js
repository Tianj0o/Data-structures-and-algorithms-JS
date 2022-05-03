
// dfs 加记忆化dp 防止超时

var maxValue = function (grid) {
  let dp = Array.from({ length: grid.length }, () => {
    return Array.from({ length: grid[0].length }, () => 0)
  });
  function dfs(x, y) {
    if (x < 0 || y < 0 || x > grid.length || y > grid[0].length) return 0;
    if (!dp[x][y]) dp[x][y] = grid[x][y] + Math.max(dfs(x - 1, y), dfs(x, y - 1))
    return dp[x][y]
  }

  return dfs(grid.length - 1, grid[0].length - 1);
};
// 动态规划 可以直接使用grid数组当grid的最大值
// i=0&&j=0 grid[i][j] = grid[i][j]
// i=0 grid[i][j] = grid[i][j] + grid[i][j - 1];
// j=0 grid[i][j] = grid[i][j] + grid[i - 1][j];
// i!=0 j!=0 grid[i][j] = grid[i][j] + Math.max(i == 0 ? 0 : grid[i - 1][j], j == 0 ? 0 : grid[i][j - 1])
var maxValue2 = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] = grid[i][j] + Math.max(i == 0 ? 0 : grid[i - 1][j], j == 0 ? 0 : grid[i][j - 1])
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
}