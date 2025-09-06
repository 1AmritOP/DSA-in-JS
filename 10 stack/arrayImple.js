// array implementation of stack

class Stack {
  constructor() {
    this.stack = [];
    this.capacity = 100000;
  }
  // Function to push data at the top of stack
  push(data) {
    if (this.stack.length >= this.capacity) {
      console.log("Stack Full");
    } else {
      this.stack.push(data);
    }
  }

  // Function to pop the topmost data
  pop() {
    if (this.stack.length === 0) {
      console.log("Stack Empty");
    } else {
      this.stack.pop();
    }
  }

  // Function to display the stack from index 0

  display() {
    if (this.stack.length === 0) {
      console.log("-1");
    } else {
      console.log(this.stack.join(" "));
    }
  }
}
