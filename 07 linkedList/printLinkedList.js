// travesing linked list in javascript

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function printLinkedList(headNode) {
  let currentNode = headNode;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

let head= new Node(12);
head.next= new Node(20);
head.next.next= new Node(32);


printLinkedList(head);
