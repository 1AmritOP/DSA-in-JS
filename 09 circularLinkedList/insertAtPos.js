// insert an element data just after the given position pos.

function insertAtPosition(head, pos, data) {
  if (!head) return null;
  let len = 1;
  let curr = head;
  curr = curr.next;
  while (curr !== head) {
    len++;
    curr = curr.next;
  }

  if (pos > len) return head;

  curr = head;
  for (let i = 1; i < pos; i++) {
    curr = curr.next;
  }
  let newNode = new Node(data);

  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}
