// print all node of a circular linked list
// ex-> 1->2->3->4->5->1 => 1,2,3,4,5

function traversal(head) {
  if (!head) return;
  console.log(head.data);
  for (let curr = head.next; curr !== head; curr = curr.next) {
    console.log(curr.data);
  }
}
function traversal(head) {
  if (!head) return;
  let curr = head;
  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr !== head);
}
