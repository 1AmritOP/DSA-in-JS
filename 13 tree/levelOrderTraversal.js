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


// Level Order Traversal - Line by Line

function levelOrderTraversal(root){
    if (!root) return;
    let q= new Queue();
    q.enque(root);
    q.enque(null);
    while(!q.isEmpty()){
        let res=q.deque();
        if (res) {
            console.log(res.data);
            if(res.left !== null) q.enque(res.left);
            if(res.right !== null) q.enque(res.right);
        }else{
            console.log("\n");
        }
    }
}