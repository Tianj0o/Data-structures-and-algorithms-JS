/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 双指针
var hasCycle = function (head) {
  if (head === null) return false
  let slow = head;
  let fast = head.next;
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
    if (!fast) return false;
    fast = fast.next;
    if (slow === fast) {
      return true
    }
  }
  return false
};
// 哈希表法
var hasCycle = function (head) {
  let map = new Map();
  while (head != null) {
    let cur = head;
    if (map.has(cur)) {
      return true
    }
    map.set(cur, 1)
    head = head.next;
  }
  return false
};