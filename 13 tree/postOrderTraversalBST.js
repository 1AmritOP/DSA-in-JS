// implement postOrder traversal of a binary search tree


class Node{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

let root=new Node(5);
root.left=new Node(3);
root.right=new Node(6);
root.left.left=new Node(2);
root.left.right=new Node(4);
root.right.right=new Node(7);

function postOrder(root){
    if(root!==null){
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.key);
    }
}

postOrder(root);