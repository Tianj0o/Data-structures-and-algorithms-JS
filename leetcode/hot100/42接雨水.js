// 双指针 
var trap = function (height) {
  const l = height.length;
  let ans = 0;
  let left = 0, right = l - 1;
  let max_left = 0, max_right = 0;
  while (left < right) {
    max_left = Math.max(max_left, height[left]);
    max_right = Math.max(max_right, height[right]);
    if (max_left < max_right) {
      ans += max_left - height[left];
      left++
    } else {
      ans += max_right - height[right];
      right--;
    }
  }
  return ans
};
// 暴力
var trap2 = (height) => {
  const l = height.length;
  let ans = 0;
  for (let i = 1; i < l - 1; i++) {
    let max_left = 0, max_right = 0;
    for (let j = i; j >= 0; j--) {
      max_left = Math.max(height[j], max_left);
    }
    for (let j = i; j < l; j++) {
      max_right = Math.max(height[j], max_right);
    }
    ans += Math.min(max_left, max_right) - height[i]
  }
  return ans
}


