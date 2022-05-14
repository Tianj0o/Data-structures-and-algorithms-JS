//你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
//每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，
//当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。


var cuttingRope = function (n) {
  // 1.动态规划

  // const dp = new Array(n + 1).fill(1)

  // for (let i = 3; i < n + 1; i++) {
  //   for (let j = 2; j < i; j++) {
  //     dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))
  //   }
  // }
  // return dp[n]

  // 2贪心  尽可能多分成3
  if (n < 4) {
    return n - 1
  } else {
    let count = 1;
    while (n > 4) {
      count *= 3;
      n = n - 3
    }
    return count * n
  }
}


console.log(cuttingRope(6))