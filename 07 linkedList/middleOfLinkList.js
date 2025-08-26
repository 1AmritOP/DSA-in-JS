// find the middle node of a linked list
// ex-> 1->2->3->4->5 => 3
// ex-> 1->2->3->4->5->6 => 4

//1st approach

function findMid(head) {
  if (head === null) return;
  let count = 0;
  for (let curr = head; curr !== null; curr = curr.next) count++;

  let curr=head;
  for(let i= 0; i< Math.floor(count/2);i++){
    curr=curr.next;
  }
  console.log(curr.data);
}


function findMid(head){
    if (head === null) return;
    let slow=head;
    let fast=head;

    while(fast !==null && fast.next !== null){
        slow=slow.next;
        fast=fast.next.next;
    }

    console.log(slow.data);
}