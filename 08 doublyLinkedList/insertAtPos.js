// Given the head of a doubly-linked list, a position p, and an integer x. 
// Add a new node with value x at the position just after pth node in the doubly linked list and 
// return the head of the updated list.
// Note: The position is 0-based indexed.

//ex-> 1->2->3->4->5->null => 6 at position 2 => 1->2->3->6->4->5->null

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function addNode(head, p, x) {

  let newNode = new Node(x);

  let curr = head;
  for (let i = 0; i < p; i++) {
    if (curr === null) return head; 
    curr = curr.next;
  }

  newNode.next = curr.next;
  newNode.prev = curr;

  if (curr.next !== null) {
    curr.next.prev = newNode;
  }
  curr.next = newNode;

  return head;
}
