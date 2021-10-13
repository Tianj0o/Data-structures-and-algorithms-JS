function defaultEquals(a, b) {
  return a === b
}
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkList {
  constructor() {
    this.head = null
    this.count = 0
    this.defaultEquals = defaultEquals
  }
  //在链表尾部添加一个元素
  push(element) {
    let node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  //移除index位置的元素
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined
    } else {
      let current = this.head
      if (index == 0) {
        this.head = current.next
      } else {
        let previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
        // let preivious = this.head
        // for (let i = 0; i < index; i++) {
        //   preivious = current
        //   current = current.next
        // }
        // preivious.next = current.next
      }
      this.count--
      return current.element
    }
  }
  //在index处插入一个元素
  insert(index, element) {
    if (index < 0 || index >= this.count) {
      return false
    } else {
      let node = new Node(element)
      let current = this.head

      if (index == 0) {
        this.head = node
        node.next = current
      } else {
        let previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        node.next = current
      }
      this.count++
    }
    return true
  }
  //获得某一元素的下标
  indexOf(element) {
    if (this.isEmpty()) {
      return -1
    } else {
      let current = this.head
      for (let i = 0; i < this.count; i++) {
        if (this.defaultEquals(current.element, element)) {
          return i
        }
        current = current.next
      }
      return -1
    }
  }
  //移除某一个元素
  remove(element) {
    const index = this.indexOf(element)
    this.removeAt(index)
  }
  toString() {
    if (this.isEmpty()) {
      return 'nothing'
    }
    let outPut = this.head.element
    let current = this.head
    for (let i = 1; i < this.count && current.next != null; i++) {
      outPut = outPut + ',' + current.next.element
      current = current.next
    }
    // console.log(outPut)
    return outPut
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  getElementAt(index) {
    if (index < 0 && index >= this.count) {
      return undefined
    } else {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
  }
}
module.exports = {
  Node,
  LinkList
}
// const linklist = new LinkList()
// linklist.push(1)
// linklist.push(2)
// linklist.push(3)
// linklist.insert(2, 100)
// linklist.remove(100)
// linklist.remove(2)

// linklist.toString()

// console.log(linklist.indexOf(3));