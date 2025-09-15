// level order traversal of a binary tree

function levelOrderTraversal(root){
    if (!root) return;
    let q= new Queue();
    q.enque(root);

    while (!q.isEmpty()) {
        let curr=q.deque();
        console.log(curr);
        if(curr.left !== null) q.enque(curr.left);
        if(curr.right !== null) q.enque(curr.right);
    }
}