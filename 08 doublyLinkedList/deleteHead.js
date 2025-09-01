// delete the head of the doubly linked list
// ex-> 1->2->3->4->5->null => 2->3->4->5->null

function deleteHead(head){
    if(!head) return head;
    if (!head.next){
        return null;
    }else{
        head = head.next;
        head.prev = null;
        return head;
    }
}