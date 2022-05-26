/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 双指针 排序（解决重复问题）
var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) {
    return result
  }
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++;
        while (nums[left] == nums[left - 1]) {
          left++
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++
      }
    }
  }
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]