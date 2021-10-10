const { LinkList, Node } = require('./链表')

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = undefined
  }
}

class DoublyLinkedList extends LinkList {
  constructor() {
    super()
    this.tail = undefined
  }
  //添加一个元素
  push(element) {
    const doublyNode = new DoublyNode(element)
    if (this.head == null) {
      this.head = doublyNode
      this.tail = doublyNode
    } else {
      this.tail.next = doublyNode
      doublyNode.prev = this.tail
      this.tail = doublyNode
    }
    this.count++
  }
  //移除某一位置的元素
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined
    } else {
      if (index === 0) {
        this.head = this.head.next
        //如果只有一个元素
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        this.tail = this.tail.prev
        this.tail.next = undefined
      } else {
        let current = this.getElementAt(index)
        current.prev.next = current.next
        current.next.prev = current.prev
      }
      this.count--
    }
  }
  //指定位置前插入一个元素
  insert(index, element) {
    if (index < 0 || index >= this.count) {
      return undefined
    } else {
      const doublyNode = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (this.head == null) {
          this.head = doublyNode
          this.tail = doublyNode
        } else {
          doublyNode.next = this.head
          this.head.prev = doublyNode
          this.head = doublyNode
        }
      } else {
        current = this.getElementAt(index)
        current.prev.next = doublyNode
        doublyNode.next = current
        doublyNode.prev = current.prev
        current.prev = doublyNode
      }
      this.count++
    }

  }
}

const doublyList = new DoublyLinkedList()

doublyList.push(1)
doublyList.push(2)
doublyList.push(3)
doublyList.push(4)
doublyList.push(5)
// doublyList.insert(5, 100)
console.log(doublyList.indexOf(100));
doublyList.toString()
