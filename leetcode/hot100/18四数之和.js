/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 排序 双指针 不能重复 所以每次移动要保证数字不同
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1, right = nums.length - 1;
      while (left < right) {
        let res = nums[i] + nums[j] + nums[left] + nums[right];
        if (res == target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
        }
        if (res - target > 0) {
          right--;
          while (nums[right] == nums[right + 1]) {
            right--;
          }
        }
        else if (res - target <= 0) {
          left++
          while (nums[left] == nums[left - 1]) {
            left++;
          }
        }
      }
    }
  }

  return result
};


console.log(fourSum([-2, -1, -1, 1, 1, 2, 2]
  , 0))