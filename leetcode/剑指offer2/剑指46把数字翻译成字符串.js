/**
 * @param {number} num
 * @return {number}
 */

// 类似于走台阶 dp[i] 代表i位数的组合数    
//如果 num[i - 1] + num[i] <= 25 && num[i - 1] != 0 dp[i + 1] = dp[i] + dp[i - 1] 否则dp[i+1] = dp[i]
//由于只需用到前两次的结果，所以空间可以优化
var translateNum = function (num) {
  let dp = new Array(num.toString().length + 1).fill(0);
  dp[0] = 1, dp[1] = 1;
  num = num.toString();
  if (num.length == 1) return 1
  for (let i = 1; i < num.length; i++) {
    if (num[i - 1] + num[i] <= 25 && num[i - 1] != 0) {
      // dp[i + 1] = dp[i] + dp[i - 1];
      dp[2] = dp[1] + dp[0];
    } else {
      // dp[i + 1] = dp[i];
      dp[2] = dp[1];
    }
    dp[0] = dp[1];
    dp[1] = dp[2];
  }
  return dp[2]
};


console.log(translateNum(1))