/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = [];
  const l = nums.length;

  function dfs(vistted, arr) {
    if (arr.length === l) {
      res.push([...arr])
      return
    }
    for (let i = 0; i < l; i++) {
      if (!vistted[i]) {
        vistted[i] = true;
        arr.push(nums[i]);
        dfs(vistted, arr);
        arr.pop();
        vistted[i] = false
      }
    }
  }
  dfs([], [])
  return res
};
permute([1, 2])


var permute2 = function (nums) {
  let res = [];
  const l = nums.length;
  for (let i = 0; i < nums.length; i++) {
    dfs([nums[i]], [...nums.slice(0, i), ...nums.slice(i + 1)])
  }
  function dfs(arr, rest) {
    if (arr.length === l) {
      res.push([...arr]);
    }
    for (let i = 0; i < rest.length; i++) {
      arr.push(rest[i]);
      dfs(arr, [...rest.slice(0, i), ...rest.slice(i + 1)]);
      arr.pop()
    }
  }
  return res
};
