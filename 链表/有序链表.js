const { Node, LinkList } = require('./链表')
function defaultCompare(a, b) {
  if (a == b) {
    return 0
  } else {
    return a < b ? -1 : 1
  }
}
class SortedLinkedList extends LinkList {
  constructor() {
    super()
    this.compareFn = defaultCompare
  }
  push(element) {
    if (this.head == null) {
      super.push(element)
    } else {
      const index = this.getIndexSortElement(element)
      console.log(index)
      super.insert(index, element)
    }
    this.count++
  }
  insert(element) {
    this.push(element)
  }
  getIndexSortElement(element) {
    let current = this.head
    let i = 0
    while (current && i < this.count) {
      if (this.compareFn(element, current.element) === -1) {
        return i
      } else {
        current = current.next
      }
      i++
    }
    return i
  }
}

const sortList = new SortedLinkedList()

// sortList.push(1)
// sortList.push(2)
// sortList.push(100)
// sortList.push(4)
// sortList.push(3)
// sortList.push(-2)
sortList.insert(33)
sortList.insert(22)
sortList.insert(33)

sortList.toString()