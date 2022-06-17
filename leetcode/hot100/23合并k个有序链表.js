/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 循环一个接一个合并
 var mergeKLists = function(lists) {
  let res= null
  for(let i=0;i<lists.length;i++){
      res = merge(res,lists[i])
  }
  return res
};

function merge(l1,l2){
  if(l1==null){
      return l2
  }else if(l2==null){
      return l1
  }
  if(l1.val<l2.val){
      l1.next = merge(l1.next,l2)
      return l1
  }else{
      l2.next = merge(l1,l2.next)
      return l2
  }
}