/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let j = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      j = i - 1;
      break;
    }
    if (i == 0) {
      nums = nums.reverse();
      return
    }
  }
  for (let i = nums.length - 1; i >= j; i--) {
    if (nums[i] > nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      break;
    }
  }
  for (let i = j + 1, k = nums.length - 1; i <= k; i++, k--) {
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
};


nextPermutation([1, 2])