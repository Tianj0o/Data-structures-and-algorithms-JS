/**
 * initialize your data structure here.
 */
// 辅助栈法
var MinStack = function () {
  this.stack = [];
  this.MinStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  if (this.MinStack.length === 0) {
    this.MinStack.push(x)
  } else if (this.MinStack[this.MinStack.length - 1] >= x) {
    this.MinStack.push(x)
  }
  this.stack.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  const popValue = this.stack.pop()
  if (popValue === this.MinStack[this.MinStack.length - 1]) {
    this.MinStack.pop()
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.MinStack[this.MinStack.length - 1]
};