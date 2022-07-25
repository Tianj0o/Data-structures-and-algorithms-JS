function Node(value) {
  this.val = value;
  this.next = null;
}
var MyLinkedList = function () {
  this.vhead = new Node(0);
  this.count = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.count - 1) return - 1;
  let cur = this.vhead;
  let count = 0;
  while (count <= index) {
    cur = cur.next;
    count++
  }
  return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  const nextNode = this.vhead.next;

  this.vhead.next = node;
  node.next = nextNode
  this.count++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  let cur = this.vhead;
  while (cur.next != null) {
    cur = cur.next
  }
  cur.next = node
  this.count++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const node = new Node(val);
  if (index <= 0) {
    this.addAtHead(val)
  } else if (index > this.count) {
    return
  } else {
    let count = 0;
    let cur = this.vhead;
    while (count < index) {
      count++
      cur = cur.next;
    }
    const nextNode = cur.next;
    cur.next = node;
    node.next = nextNode;
    this.count++
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.count - 1) return

  if (index === 0) {
    let nextNode = this.vhead.next;
    this.vhead.next = nextNode
  } else if (index === this.count - 1) {
    let preNode = new Node(0)
    preNode.next = this.vhead;
    let cur = this.vhead;
    while (cur.next != null) {
      cur = cur.next;
      preNode = preNode.next;
    }
    preNode.next = null
  } else {
    let count = 0;
    let cur = this.vhead;
    while (count < index) {
      cur = cur.next;
      count++
    }
    let nextValue = cur.next;
    cur.next = nextValue.next;
  }
  this.count--
};

// ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
// const linkedList = new MyLinkedList();
// linkedList.addAtHead(7);
// linkedList.addAtHead(2)
// linkedList.addAtHead(1);
// linkedList.addAtIndex(3, 0);
// linkedList.deleteAtIndex(2);
// linkedList.addAtHead(6);
// linkedList.addAtTail(4);
// linkedList.get(4);
// linkedList.addAtHead(4);
// linkedList.addAtIndex(5, 0);
// linkedList.addAtHead(6);

