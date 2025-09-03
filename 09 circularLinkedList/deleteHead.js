// delete head of the circular linked list
// ex-> 1->2->3->4->5->1... => 2->3->4->5->2...

//1st approach O(n) time
function deleteHead(head) {
  if (!head || !head.next) return null;
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = head.next;
  head = head.next;
  return head;
}

//2nd approch O(1) time
function deleteHead(head) {
  if (!head || !head.next) return null;
  head.data=head.next.data;
  head.next=head.next.next;
  return head;
}
