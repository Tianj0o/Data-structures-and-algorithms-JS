// 维护三个指针 后面的丑数都是由前面的丑数 乘以 2、3、5 生成的
var nthUglyNumber = function (n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  let first = 1, second = 1, third = 1;
  for (let i = 2; i <= n; i++) {
    const num1 = dp[first] * 2, num2 = dp[second] * 3, num3 = dp[third] * 5;
    dp[i] = Math.min(num1, Math.min(num2, num3));
    if (dp[i] == num1) {
      first++
    }
    if (dp[i] == num2) {
      second++
    }
    if (dp[i] == num3) {
      third++
    }
  }
  return dp[n]
};
