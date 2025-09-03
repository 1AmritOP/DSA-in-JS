// insert a node at the end of a circular linked list
// ex-> 1->2->3->4->5->1... => 6 at end => 1->2->3->4->5->6->1...

//1st approach O(n) time
function insertAtEnd(head, data) {
  let newNode = new Node(data);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  curr.next = newNode;
  newNode.next = head;
  return head;
}

//2nd approach O(1) time
function insertAtEnd(head, data) {
  let newNode = new Node(data);
  if (!head) {
    newNode.next = newNode;
    return newNode;
  }
  newNode.next=head.next;
  head.next=newNode;
  [head.data,newNode.data]=[newNode.data,head.data];
  return newNode;
}
