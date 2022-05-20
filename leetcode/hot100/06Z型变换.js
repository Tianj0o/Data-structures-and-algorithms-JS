// 利用一个flag位进行index的改变来将字母放到正确的位置
var convert = function (s, numRows) {
  let arr = new Array(numRows).fill('');
  let flag = -1, index = 0;
  if (numRows < 2) {
    return s
  }
  for (let i = 0; i < s.length; i++) {
    if (index === 0 || index == numRows - 1) {
      flag = -flag
    }
    arr[index] += s[i]
    index += flag
  }
  return arr.join('')
};

