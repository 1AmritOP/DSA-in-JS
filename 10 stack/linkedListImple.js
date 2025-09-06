// linkedList implementation of stack


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
        this.size=0;
    }
    size(){
        return this.size;
    }
    isEmpty(){
        return this.head === null;
    }
    push(x){
        let newNode= new Node(x);
        newNode.next=this.head;
        this.head=newNode;
        this.size +=1;
    }
    pop(){
        if (this.head === null) return null;
        let res=this.head.data;
        this.head=this.head.next;
        this.size -=1;
        return res;
    }
    peek(){
        if (this.head === null) return null;
        return this.head.data;
    }
}