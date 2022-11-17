/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head ;
    let flag = false ;
    
    if(head ==null)
        return head

    
    while(cur.next!=null){        
        if(cur.next.val ==val){
            
            cur.next = cur.next.next
        }
        else{
            cur=cur.next
        }
    }
    if(head.val ==val)
        return head.next
    return head
};