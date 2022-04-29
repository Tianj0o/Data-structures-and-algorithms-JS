//字符串的排列
/**
 * 
 * @param {String} s 
 */
// dfs 传入三个参数 剩余的选择 当前的str 和 s的长度
var permutation = function (s) {
  if (s.length === 0) {
    return ['']
  } else if (s.length == 1) {
    return [s[0]]
  }
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    let rest = s.slice(0, i) + s.slice(i + 1, s.length)
    dfs(rest, temp, s.length)
  }

  function dfs(s, cur, l) {
    if (cur.length === l) {
      result.push(cur)
    } else {
      for (let i = 0; i < s.length; i++) {
        let temp = s[i];
        let rest = s.slice(0, i) + s.slice(i + 1, s.length)
        dfs(rest, temp + cur, l)
      }
    }
  }
  return [...new Set(result)]
};

console.log(permutation('a'))