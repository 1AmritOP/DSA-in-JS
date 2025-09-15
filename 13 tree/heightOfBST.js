// find height of a binary tree


class Node{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

function calcHeight(root){
    if (root === null) {
        return 0;
    }
    let lh=calcHeight(root.left);
    let rh=calcHeight(root.right);

    return h=Math.max(lh,rh)+1;
}

let root=new Node(5);
root.left=new Node(3);
root.right=new Node(6);
root.left.left=new Node(2);
root.left.right=new Node(4);
root.right.right=new Node(7);
root.left.left.left=new Node(9);



console.log(calcHeight(root))