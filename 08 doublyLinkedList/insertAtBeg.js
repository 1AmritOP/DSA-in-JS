// insert a node at the beginning of a doubly linked list
// ex-> 1->2->3->4->5->null => 6 at beginning => 6->1->2->3->4->5->null

class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
function insertAtBeg(head,x){
    let temp=new Node(x);
    if(!head) return temp;

    temp.next=head;
    head.prev=temp;

    return temp;
}

let head = new Node(1);
let n2 = new Node(2);
head.next = n2;
n2.prev = head;

head = insertAtBeg(head, 0); 

console.log(head.data); 
console.log(head.next.data);
console.log(head.next.prev.data); 