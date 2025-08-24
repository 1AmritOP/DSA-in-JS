// write a function to insert a node at the end of a linked list


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function insertAtEnd(listHead, x) {
  if (listHead === null) {
    listHead = new Node(x);
    return listHead;
  }

  let currentNode = listHead;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = new Node(x);
  return listHead;
}

let head =null;
head=insertAtEnd(head,23);
head=insertAtEnd(head,3);
head=insertAtEnd(head,2);

function printLinkedList(headNode) {
  let currentNode = headNode;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

printLinkedList(head)
