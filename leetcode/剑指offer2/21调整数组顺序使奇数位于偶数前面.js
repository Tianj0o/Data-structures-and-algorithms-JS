/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    if (check(nums[left])) {
      if (!check(nums[right])) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
      right--;
    } else {
      left++
    }
  }
  return nums
  function check(num) {
    if (num % 2 === 0) {
      return true
    } else {
      return false
    }
  }
};

console.log(exchange([1, 2, 3, 4, 5, 6, 7, 8]))