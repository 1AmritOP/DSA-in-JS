// floyd’s cycle detection
// determine whether the list contains a loop. If a loop is present, 
// return the number of nodes in the loop, otherwise return 0.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function countNodesInLoop(head) {
  let slow = head,
    fast = head;

  // Step 1: Detect loop
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Step 2: Count loop length
      return countLoopLength(slow);
    }
  }

  return 0; // No loop
}

function countLoopLength(nodeInLoop) {
  let count = 1;
  let temp = nodeInLoop.next;

  while (temp !== nodeInLoop) {
    count++;
    temp = temp.next;
  }

  return count;
}

// ------------------ Example ------------------

// Creating list: 1 → 2 → 3 → 4 → 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create loop: 5 → 2
head.next.next.next.next.next = head.next;

console.log(countNodesInLoop(head)); // Output: 4
