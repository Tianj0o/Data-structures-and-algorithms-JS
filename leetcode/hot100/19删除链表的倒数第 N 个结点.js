/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针 加 一个虚拟节点
var removeNthFromEnd = function (head, n) {
  let d = new ListNode()
  d.next = head;
  let fP = d, sP = d;
  let count = 0;
  while (fP != null) {
    if (count > n) {
      sP = sP.next;
    }
    fP = fP.next;
    count++;
  }
  sP.next = sP.next.next;
  return d.next;
};