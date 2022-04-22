/**
 * 
 * @param {Array<Number>} pushed 
 * @param {Array<Number>} popped 
 * @returns Boolean
 */
// 使用一个栈 记录每一次push 如果当前push的元素等于popped 的元素 模拟弹出所有元素 如果 最后stack为空则表示可以
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let index = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    while (stack.length > 0 && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++
    }
  }
  return stack.length === 0
};


console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])) // false
