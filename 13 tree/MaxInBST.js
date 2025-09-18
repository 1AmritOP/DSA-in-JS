// find maximum element in a binary search tree

function MaxInBST(root){
    if (root === null) return Number.NEGATIVE_INFINITY;
    return (Math.max(MaxInBST(root.left),MaxInBST(root.right),root.key))
}