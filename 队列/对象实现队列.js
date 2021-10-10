class Queue {
  constructor() {
    this.items = {}
    this.lowestCount = 0
    this.count = 0
  }
  //末尾加
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  //最前面减
  dequeue() {
    if (this.isEmpty()) {
      return ''
    }
    let res = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return res
  }
  peek() {
    if (this.isEmpty()) {
      return ''
    }
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let out = this.items[this.lowestCount]
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      out = out + ',' + this.items[i]
    }
    return out
  }
}

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.toString())
// console.log(queue.size())
// console.log(queue.isEmpty())


module.exports = Queue