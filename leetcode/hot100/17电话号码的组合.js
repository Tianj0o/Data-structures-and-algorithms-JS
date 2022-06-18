/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
  let pre = [''];
  for (let i = 0; i < digits.length; i++) {
    const current = map[digits[i]];
    let temp = [];
    for (let i = 0; i < pre.length; i++) {
      temp = temp.concat(comp(pre[i], current));
    }
    pre = temp;
  }
  return pre
};

function comp(cur, str) {
  let res = []
  for (let i = 0; i < str.length; i++) {
    let temp = cur + str[i]
    res.push(temp)
  }
  return res;
}

letterCombinations('234')