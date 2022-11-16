/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
  let fast = head ;
    let slow = head ;
    let start = head ;
    let len = 0 ;
    
    while(fast && fast.next)
    {
        len++;
        fast = fast.next.next ;
        slow = slow.next ;
    }
    let mid = reverseLL(slow);
    
    while(len){
        len--;
        if(mid.val!= start.val )
            return false ;
        mid = mid.next ;
        start= start.next ;
    }
    return true ;
};

const reverseLL = head => {
    let curr =head ;
    let prev = null ;
    let next  ;
    while(curr){
        next = curr.next ;
        curr.next = prev;
        prev =curr;
        curr = next ;
        
    }
    return prev ;
}
