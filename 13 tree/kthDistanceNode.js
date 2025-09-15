// print kth distance node from root of a binary tree


function kthDistanceNode(root,k){
    if (!root) {
        return;
    }
    if (k === 0) {
        console.log(root.key);
        return;
    }else{
        kthDistanceNode(root.left,k-1);
        kthDistanceNode(root.right,k-1);
    }
}