//Given the head of a singly linked list and an integer k. Swap the kth node (1-based index) from the beginning and the kth node from the end of the linked list. Return the head of the final formed list and if it's not possible to swap the nodes return the original list.

function swapKth(head, k) {
  let len = 0;
  if (!head) return;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  if (k > len || 2 * k - 1 === len) return head;

  let beg = head;

  for (let i = 1; i < k; i++) {
    beg = beg.next;
  }
  let last = head;

  for (let i = 1; i < len - k + 1; i++) {
    last = last.next;
  }

  let temp = beg.data;
  beg.data = last.data;
  last.data = temp;

  return head;
}
