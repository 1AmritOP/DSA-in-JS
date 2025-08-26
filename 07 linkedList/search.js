//search an element in a linked list, if element is present return index else return -1

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


//iterative approach
function search(head,x){
    let curr=head;
    let idx=0;
    while(curr !== null && curr.data !== x){
        idx++;
        curr=curr.next;
    }
    if (curr === null) {
        return -1;
    }else return ++idx;
}


let head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(4);
head.next.next.next.next=new Node(5);
console.log(search(head,2));