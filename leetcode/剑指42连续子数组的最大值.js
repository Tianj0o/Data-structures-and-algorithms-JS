

// 动态规划 dp[i] 为 0到 i 的最大和   dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
var maxSubArray = function (nums) {

  let max = nums[0];
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
    //  dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
    max = Math.max(max, dp[i]);
  }
  return max
};