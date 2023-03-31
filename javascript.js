class Node{
    constructor(value){
        this.value = value;
        this.left_child = null;
        this.right_child = null;
    }
}

class Tree{
    constructor(arr){
        const sortedArray= remove_duplicates(arr.sort(compareNumbers));
        this.root = this.buildTree(sortedArray, 0, sortedArray-1);
    }
    //builds a balanced binary tree
    buildTree(data, start, end){
        if (start > end){
            return null;
        }
        var mid = parseInt((start + end) / 2); //get midpoint
        var root = new Node(data[mid]);  //set midpoint as the root

        root.left = buildTree(data, start, mid - 1);        /* Recursively construct the left subtree and make it left child of root */
        root.right = sortedArrayToBST(data, mid + 1, end);     /* Recursively construct the right subtree and make it right child of root */
        return root;
    }
    insert(){
        //inserting a node without children
        //inserting a node that has children
    }
    delete(){
        //relete a node with no children
        //delete a node with children
    }
    find(value){
        //returns the index of the value
    }
    //traverse in breadth first-order
    levelOrder(node){
    /*
    You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list
    */
    
    }

    inorder(node){
    }
    preorder(node){
    if(node ==  null){
        return null;
    }

    }
    postorder(node){

    }

    //takes a given height and returns the height of the node
    height(node){
        //Height is defined as the number of edges in longest path from a given node to a leaf node.
        //returns the height of the node

    }

    //returns the depth of a given node
    depth(node){
    //Depth is defined as the number of edges in path from a given node to the tree’s root node.
    }

    //checks of the tree is balanced
    isBalanced(){
    //a balanced tree will not return a difference in heights of the left and right subtree more than 1
    }

    // rebalances an unbalanced tree
    rebalance(){
    //Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
    }
    prettyPrint(node, prefix = '', isLeft = true){
        if (node === null) {
           return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

}


function compareNumbers(a, b) {
    return a - b;
}

function remove_duplicates(data){
    return[...new Set(data)]
}




var arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//sort data
