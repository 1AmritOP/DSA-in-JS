// delete the first node of the linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function deleteFirstNode(head){
    if (head === null) {
        return head;
    }
    return head.next;
}


function printLinkedList(headNode) {
  let currentNode = headNode;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
