// find number of node in a binary search tree (size of BST)
function sizeOfBST(root) {
    if (root === null) return 0;
    return 1 + sizeOfBST(root.left) + sizeOfBST(root.right);
}