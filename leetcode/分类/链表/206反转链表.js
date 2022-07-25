
// 双指针
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur != null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre
};
const node = new ListNode(1);

const node1 = new ListNode(2);
const node2 = new ListNode(3);
node.next = node1;
node1.next = node2;
console.log(reverseList(node))

// 递归
var reverseList = function (head) {
  return reverse(null, head)
};

function reverse(pre, head) {
  if (!head) return null;
  let temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp)
}


