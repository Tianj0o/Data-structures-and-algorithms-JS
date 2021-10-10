const items = new WeakMap()

class Stack {
  constructor() {
    items.set(this, [])
  }
  push(value) {
    const s = items.get(this)
    s.push(value)
  }
  size() {
    const s = items.get(this)
    console.log(s.length)
    return s.length
  }
}

const stack = new Stack()
stack.push('hhh')
stack.push('wuliao')
const s = items.get(stack)
s.push(3)
stack.size()

