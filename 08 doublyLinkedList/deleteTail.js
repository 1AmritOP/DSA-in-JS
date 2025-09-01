// delete the tail of the doubly linked list
// ex-> 1->2->3->4->5->null => 1->2->3->4->null

function deleteTail(head){
    if(!head) return head;
    if(!head.next) return null;
    let curr=head;
    while(curr.next){
        curr=curr.next;
    }
    curr.prev.next=null;
    return head;
}