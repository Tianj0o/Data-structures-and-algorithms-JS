/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 排序加双指针
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2] - target;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let temp = nums[i] + nums[left] + nums[right];
      Math.abs(res - target) > Math.abs(temp - target) ? res = temp : "";
      if (temp == target) return temp;
      else if (temp > target) right--;
      else left++;
    }
  }
  return res
};