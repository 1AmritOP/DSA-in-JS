// Given the head of a doubly linked list, reverse the linked list, and return the reversed Linked list.

function reverseDLL(head) {
  if (head === null) return head;

  let prev = null;
  let curr = head;

  while (curr !== null) {
    prev = curr;

    [curr.prev, curr.next] = [curr.next, curr.prev];

    curr = curr.prev;
  }
  return prev;
}
