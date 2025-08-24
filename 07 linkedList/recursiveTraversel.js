// write a recursive function to print all nodes of a linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function recursiveTraversel(head){
    if(head === null){
        return;
    }
    console.log(head.data);
     recursiveTraversel(head.next)
}

let head=new Node(23);
head.next= new Node(34);
head.next.next= new Node(42);

recursiveTraversel(head)