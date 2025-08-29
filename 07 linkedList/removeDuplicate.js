// remove duplicate element from sorted linked list
// ex-> 1->2->3->3->4->4->5->5->5->6 => 1->2->3->4->5->6

function removeDuplicate(head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.next.data === curr.data) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}