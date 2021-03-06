/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

function ListNode(val) {
 this.val = val;
 this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0);
  var carry = 0;
  var h1 = l1;
  var h2 = l2;
  var r1 = result;
  while(h1 !== null && h2 !== null) {
  
    let sum = h1.val + h2.val + carry;
    carry =0;
    
    r1.next = new ListNode(sum %10);
  
    carry = Math.floor(sum/10);
    
    h1 = h1.next;
    h2 = h2.next;
    r1 = r1.next;
  }
 //console.log(JSON.stringify(result.next)) 
 var max = h1 === null ? h2 : h1;
 //console.log(max)
 while(max !== null) {
   let  sum = max.val + carry;
   carry=0;
   r1.next = new ListNode(sum%10);
   carry = Math.floor(sum/10);
   
   max = max.next;
   r1 = r1.next;
 }
 if(carry !== 0) {
   r1.next = new ListNode(carry);
 }
 return result.next
};


var list = new ListNode(5);
//var list1 = new ListNode(1);
//var list3 = new ListNode(6);

var list4 = new ListNode(5);
//var list5 = new ListNode(9);
//var list6 = new ListNode(2);
//list.next = list1;
//list1.next = list3;
//list3.next = list4;
//list4.next = list5;
//list5.next = list6;
addTwoNumbers(list, list4);