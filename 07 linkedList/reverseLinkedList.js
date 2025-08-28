// reverse linked list
// ex-> 1->2->3->4->5 => 5->4->3->2->1


//1st approach
function reverseLinkedList(head) {
  let arr = [];
  if (!head) return head;

  let curr = head;
  while (curr !== null) {
    arr.push(curr.data);
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    curr.data = arr.pop();
    curr = curr.next;
  }

  return head;
}

//2nd approach

function reverseLinkedList(head){
    let curr=head;
    let prev=null;

    while(curr !== null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }

    return prev;
}
