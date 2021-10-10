class Deque {
  constructor() {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      this.lowestCount--
      this.items[this.lowestCount] = element
    }
  }
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront() {
    if (this.isEmpty()) {
      return ''
    }
    const res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return res
  }
  removeBack() {
    if (this.isEmpty()) {
      return ''
    }
    const res = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return res
  }
  peekFront() {
    if (this.isEmpty()) {
      return ''
    }
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty()) {
      return ''
    }
    return this.items[this.count - 1]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let outPut = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      outPut = outPut + ',' + this.items[i]
    }
    return outPut
  }
  size() {
    return this.count - this.lowestCount
  }
}

module.exports = Deque
// const deque = new Deque()

// deque.addFront(1)
// deque.addFront(2)
// deque.addBack(3)

// // console.log(deque.peekFront())
// // console.log(deque.peekBack())
// console.log(deque.toString())

// console.log(deque.removeBack())
// console.log(deque.removeFront())
// console.log(deque.removeBack())
// console.log(deque.removeBack())
// deque.addBack(2)
// console.log(deque.toString())

// const deque = new Deque();
// console.log(deque.isEmpty()); // 输出 true 
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString()); // John, Jack 
// deque.addBack('Camila');
// console.log(deque.toString()); // John, Jack, Camila 
// console.log(deque.size()); // 输出 3 
// console.log(deque.isEmpty()); // 输出 false 
// deque.removeFront(); // 移除 John 
// console.log(deque.toString()); // Jack, Camila 
// deque.removeBack(); // Camila 决定离开
// console.log(deque.toString()); // Jack 
// deque.addFront('John'); // John 回来询问一些信息
// console.log(deque.toString()); // John, Jack 