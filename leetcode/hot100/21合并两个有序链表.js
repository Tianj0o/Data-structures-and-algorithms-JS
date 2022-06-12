
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 遍历 加 前置头节点 可以少很多判断
var mergeTwoLists = function (list1, list2) {
  let left = list1, right = list2;

  let preHead = new ListNode(1);
  let curNode = preHead;
  while (left != null && right != null) {
    if (compare(left, right)) {
      curNode.next = left;
      left = left.next;
    } else {
      curNode.next = right;
      right = right.next;
    }
    curNode = curNode.next
  }
  if (left) {
    curNode.next = left
  } else if (right) {
    curNode.next = right
  }
  return preHead.next
};

function compare(node1, node2) {
  return node1.val <= node2.val
}


// 方法二 递归



var mergeTwoLists2 = function (list1, list2) {
  if (list1 == null) {
    return list2
  } else if (list2 == null) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2
  }
}