// delete kth node from the circular linked list
// ex-> 1->2->3->4->5->1... => k=3 => 1->2->4->5->1...

function deleteKthNode(head, k) {
  if (!head) return head;
  if (head.next === head) return null;
  if (k === 1) {
    head.data = head.next.data;
    head.next = head.next.next;
    return head;
  }
  let curr = head;
  for (let i = 0; i < k - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}
