/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let curr = head ;
    let prev = null ; 
    let next ;
    while(curr){
        next = curr.next ;
        curr.next = prev;
        prev =curr;
        curr = next ;
    }
    return prev ;
    
    /*
    // base case
    if (head == null || head.next == null){
        return head;
    }
    
    
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
    */
};