/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    let cur = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(cur, max)
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max
};


maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])