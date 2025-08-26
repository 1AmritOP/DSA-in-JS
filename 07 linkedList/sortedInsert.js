// insert a node at a sorted position in a sorted linked list
// ex-> 1->2->3->7 => insert 6 => 1->2->3->6->7

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function sortedInsert(head, x) {
  let temp = new Node(x);
  if (head == null) {
    return temp;
  }
  if (x < head.data) {
    temp.next = head;
    return temp;
  }
  let curr = head;
  while (curr.next !== null && curr.next.data < x) {
    curr = curr.next;
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}
