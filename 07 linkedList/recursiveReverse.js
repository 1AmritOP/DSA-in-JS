// reverse linked list using recursion
// ex-> 1->2->3->4->5 => 5->4->3->2->1

function recRevL(head){
    if(head===null||head.next===null) return head;
    let rest_head=recRevL(head.next);
    let rest_tail=head.next;
    rest_tail.next=head;
    head.next=null;
    return rest_head;
}