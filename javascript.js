class Node{
    constructor(value){
        this.value = value;
        var left_child = null;
        var right_child = null;
    }
}

class Tree{
    constructor(){
        var root = null;
    }
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
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

function insert(){
    //inserting a node without children
    //inserting a node that has children
}
function delete(){
    //relete a node with no children
    //delete a node with children
}

function find(value){
    //returns the index of the value
}

function compareNumbers(a, b) {
    return a - b;
}

function remove_duplicates(data){
    return[...new Set(data)]
}

//traverse in breadth first-order
function levelOrder(){
    /*
    You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list
    */
    
}
function inorder(){
}
function preorder(){

}
function postorder(){

}
//takes a given height and returns the height of the node
function height(node){
    //Height is defined as the number of edges in longest path from a given node to a leaf node.
    //returns the height of the node

}

//returns the depth of a given node
function depth(node){
    //Depth is defined as the number of edges in path from a given node to the tree’s root node.
}

//checks of the tree is balanced
function isBalanced(){
    //a balanced tree will not return a difference in heights of the left and right subtree more than 1
}

// rebalances an unbalanced tree
function rebalance(){
    //Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
}

//builds a balanced binary tree
function buildTree(data, start, end){
    //sort data
    var sorted_data = data.sort(compareNumbers)
    //remove duplicates
    var clean_data  = remove_duplicates(sorted_data);
    /* Base Case */
    if (start > end)
    {
        return null;
    }
    /* Get the middle element and make it root */
    var mid = parseInt((start + end) / 2);
    var node = new Node(arr[mid]);
    /* Recursively construct the left subtree and make it
     left child of root */
    node.left = buildTree(clean_data, start, mid - 1);
    /* Recursively construct the right subtree and make it
     right child of root */
    node.right = sortedArrayToBST(clean_data, mid + 1, end);
    return root;
}

var arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
