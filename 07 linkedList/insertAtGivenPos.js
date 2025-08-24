// insert a node at a given position in a linked list
// ex-> 1->2->3->4->5->null => 6 at position 2 => 1->6->2->3->4->5->null


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtGivenPos(head,pos,x){
    let temp=new Node(x);
    if (pos == 1) {
        temp.next=head;
        return temp;
    }
    let currentNode=head;
    for(let i=1;i<= pos -2 && currentNode != null;i++){
        currentNode=currentNode.next;
    }
    if (currentNode == null) {
        return head;
    }
    temp.next=currentNode.next;
    currentNode.next=temp;
    return head;
}

function printLinkedList(headNode) {
    let currentNode = headNode;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head=insertAtGivenPos(head,1,9);
printLinkedList(head);