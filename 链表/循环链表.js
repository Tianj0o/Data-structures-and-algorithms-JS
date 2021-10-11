const { Node, LinkList } = require('./链表')



class CircularLinkedList extends LinkList {
  constructor() {
    super()
  }
  //在链表尾部添加一个元素
  push(element) {
    const node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      const current = this.getElementAt(this.count - 1)
      current.next = node
    }
    node.next = this.head
    this.count++
  }
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined
    } else {
      let removed
      if (index == 0) {
        const last = this.getElementAt(this.count - 1)
        removed = this.head
        this.head = this.head.next
        last.next = this.head
      } else {
        let current = this.getElementAt(index - 1)
        removed = current.next
        current.next = current.next.next
      }
      this.count--
      return removed
    }

  }
  insert(index, element) {
    if (index < 0 || index >= this.count) {
      return false
    } else {
      const node = new Node(element)
      if (index === 0) {
        const last = this.getElementAt(this.count - 1)
        node.next = this.head
        this.head = node
        last.next = this.head
      } else {
        const current = this.getElementAt(index - 1)
        node.next = current.next
        current.next = node
      }
      this.count++
      return true
    }
  }
}


const cirList = new CircularLinkedList()

cirList.push(1)
cirList.push(2)
cirList.insert(0, 100)
// console.log(cirList.removeAt(1));
// cirList.removeAt(3)
// cirList.toString()
// let current = cirList.getElementAt(0)

// for (let i = 0; i < 6; i++) {
//   console.log(current)
//   current = current.next
// }