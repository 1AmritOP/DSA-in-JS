// linked list implementation of queue

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear == null;
    this.size = 0;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(x) {
    let temp = new Node(x);
    if (this.front === null) {
      this.front = temp;
    } else {
      this.rear.next = temp;
    }
    this.rear = temp;
    this.size += 1;
  }
  dequeue() {
    if (this.front === null) return null;
    let res = this.front.data;
    this.front = this.front.next;
    this.size -= 1;
    return res;
  }
}
