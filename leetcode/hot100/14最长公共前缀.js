// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let res = strs[0];
  let l = strs[0].length, index = 0;
  while (index < l) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== res[index]) {
        res = res.slice(0, index)
        return res
      }
    }
    index++
  }
  return res
};


console.log(longestCommonPrefix([]))