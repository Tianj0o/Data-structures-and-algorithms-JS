/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function dfs(path, target, start) {
    if (target === 0) {
      res.push([...path])
    }
    for (let i = start; i < candidates.length; i++) {
      if (target - candidates[i] < 0) return;
      path.push(candidates[i]);
      dfs(path, target - candidates[i], i);
      path.pop()
    }
  }
  dfs([], target, 0);
  console.log(res)
  return res
};

combinationSum([2, 3, 6, 7], 7)