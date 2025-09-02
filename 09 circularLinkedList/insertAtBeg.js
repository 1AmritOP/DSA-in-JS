// insert a node at the beginning of a circular linked list
// ex-> 1->2->3->4->5->1 => 6 at beginning => 6->1->2->3->4->5->6


//1st approach
function insertAtBeg(head,data){
    let newNode=new Node(data);
    if(!head){
        newNode.next=newNode;
        return newNode;
    }
    let curr=head;
    while (curr.next !== head) {
        curr=curr.next;
    }
    curr.next=newNode;
    newNode.next=head;
    return newNode;
}

//2nd approach (constant time)

function insertAtBeg(head,data){
    let newNode= new Node(data);
    if (!head) {
        newNode.next=newNode;
        return newNode;
    }

    newNode.next=head.next;
    head.next=newNode;
    [head.data,newNode.data]=[newNode.data,head.data];
    return head;
}