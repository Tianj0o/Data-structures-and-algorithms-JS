/**
 * @param {number[]} nums
 * @return {boolean}
 */
// k代表 从0到i时 能够走的最多的距离
var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    //k<i 到达不了i false
    if (k < i) return false;
    k = Math.max(k, i + nums[i]);
    if (k >= nums.length - 1) {
      return true
    }
  }
};
