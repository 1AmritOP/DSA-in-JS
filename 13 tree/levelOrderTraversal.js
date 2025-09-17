// level order traversal of a binary tree

function levelOrderTraversal(root) {
  if (!root) return;
  let q = new Queue();
  q.enque(root);

  while (!q.isEmpty()) {
    let curr = q.deque();
    console.log(curr.key);
    if (curr.left !== null) q.enque(curr.left);
    if (curr.right !== null) q.enque(curr.right);
  }
}

// Level Order Traversal - Line by Line

function levelOrderTraversal(root) {
  let ans = "";
  if (!root) return;
  let q = new Queue();
  q.enque(root);
  q.enque(null);
  while (q.size() > 1) {
    let curr = q.deque();
    if (curr === null) {
      ans += "\n";
      q.enque(null);
      continue;
    }
      ans += curr.key + " ";
      if (curr.left !== null) q.enque(curr.left);
      if (curr.right !== null) q.enque(curr.right);
  }

  return ans;
}
