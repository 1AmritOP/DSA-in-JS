// Array implementation of deque

class DequeArrayImple {
    constructor(cap) {
        this.arr = new Array(cap);
        this.front = 0;
        this.size = 0;
        this.cap=cap;
    }

    isEmpty(){
        return this.arr.length===0;
    }
    size(){
        return this.arr.length;
    }
    removeRear(){
        if (!this.isEmpty) {
            let rear=(this.front + this.size -1)%this.cap;
            let r=this.arr[rear];
            this.size-=1;
            return r;
        }
        return null;
    }
    addRear(data){
        if (this.cap === this.size) {
            return;
        }else{
            let rear=(this.front + this.size -1)%this.cap;
            rear=(rear+1)%this.cap
            this.arr[rear]=data;
            this.size++;
        }
    }
    addFront(data){
        if (this.cap === this.size) {
            return;
        }else{
            this.front= (this.front + this.cap -1)%this.cap;
            this.arr[this.front]=data;
            this.size++;
        }
    }
    removeFront(){
        if (!this.isEmpty) {
            let res=this.arr[this.front];
            this.front=(this.front+1)%this.cap;
            this.size--;
            return res;
        }return null;
    }
}