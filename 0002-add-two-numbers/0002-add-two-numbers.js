/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Pointer = l1
    let l2Pointer = l2
    let carry = 0
    let sum = 0
    let result = new ListNode(0)
    let resultPointer = result
    while(l1Pointer || l2Pointer || sum > 0){
        if(l1Pointer){
            sum += l1Pointer.val
            l1Pointer = l1Pointer.next
        }
        if(l2Pointer){
            sum += l2Pointer.val
            l2Pointer = l2Pointer.next
        }
        if(sum >= 10){
            carry = 1
            sum -= 10
        }
        resultPointer.next = new ListNode(sum)
        resultPointer = resultPointer.next
        sum = carry
        carry = 0
    }
    return result.next
};