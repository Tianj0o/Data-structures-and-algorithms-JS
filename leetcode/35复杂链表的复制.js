/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 利用 map 将原Node和新Node 连接起来 然后再次遍历 设置next 和 random
var copyRandomList = function (head) {
  if (head == null) return null;
  let cur = head;
  let map = new Map()
  while (cur != null) {
    map.set(cur, new Node(cur.val))
    cur = cur.next;
  }
  cur = head;
  while (cur != null) {
    map.get(cur).next = map.get(cur.next) === undefined ? null : map.get(cur.next);
    map.get(cur).random = map.get(cur.random) === undefined ? null : map.get(cur.random);
    cur = cur.next;
  }
  return map.get(head);
};

console.log(undefined || null)