// insert a node at the beginning of a circular dubly linked list

function insertAtBegCircularDLL(head, data) {
    let newNode = new Node(data);
    if (!head) {
        newNode.next=newNode;
        newNode.prev=newNode;
        return newNode;
    }
    newNode.next=head;
    newNode.prev=head.prev;
    head.prev.next=newNode;
    head.prev=newNode;
    return newNode;
    //if we return head,
    // then this code work as insertAtEndCircularDLL(head,data);

}