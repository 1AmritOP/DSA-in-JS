// get kth node from last
// ex-> 1->2->3->4->5->6->7->8->9->10, k=2 => 9


//1st approach
function getKthFromLast(head, k) {
  let curr = head;
  let len = 0;
  let step;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  if (len >= k) {
    step = len - k;
  } else return -1;

  curr = head;
  for (let i = 1; i <= step; i++) {
    curr = curr.next;
  }

  return curr.data;
}

//2nd approach
function getKthFromLast(head, k) {
  if (!head) return -1;

  let first = head;
  let second = head;

  // Move first pointer k steps ahead
  for (let i = 0; i < k; i++) {
    if (!first) return -1; // agar k > length
    first = first.next;
  }

  // Move both until first reaches end
  while (first) {
    first = first.next;
    second = second.next;
  }

  return second ? second.data : -1;
}
