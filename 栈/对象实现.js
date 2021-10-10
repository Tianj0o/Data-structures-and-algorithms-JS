class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(item) {
    this.items[this.count++] = item
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  size() {
    return this.count
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = this.items[0]
    for (let i = 1; i < this.count; i++) {
      objString = objString + ',' + this.items[i]
    }
    return objString
  }
}

const stack = new Stack()

stack.push('hhhh')
stack.push('无聊')
stack.push('youdian')
stack.push('youdian')
stack.push('youdian')

// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.isEmpty())
console.log(stack.toString())


