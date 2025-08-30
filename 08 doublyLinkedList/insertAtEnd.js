// insert a node at the end of a doubly linked list
// ex-> 1->2->3->4->5->null => 6 at end => 1->2->3->4->5->6->null

function insertAtEnd(head,x){
    let temp= new Node(x);
    if(!head) return temp;

    let curr = head;
    while(curr.next !== null){
        curr = curr.next;
    }

    curr.next=temp;
    temp.prev=curr;

    return head;
}