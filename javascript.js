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
        this.root = this.buildTree(sortedArray);
    }
    //builds a balanced binary tree
    buildTree(data){
        if (data.length==0){
            return null;
        }
        var mid = parseInt((data.length) / 2); //get midpoint
        var root = new Node(data[mid]);  //set midpoint as the root

        root.left_child = this.buildTree(data.slice(0,mid));        /* Recursively construct the left subtree and make it left child of root */
        root.right_child = this.buildTree(data.slice(mid+1));     /* Recursively construct the right subtree and make it right child of root */
        return root;
    }
    insert(value, current_node = this.root){ 
        
        //if the current_node is null (a leaf), return the new node
        if(current_node===null){
            //create a newNode
            var newNode = new Node(value);
            //console.log("New node created with value: " + newNode.value)
            //console.log("found a leaf to insert at!!!")
            //current_node = newNode
            //return current_node;
            return newNode;
        }
        // if the given value is already in the tree, ignore it
        if(value === current_node.value){
            console.log("value is already in the tree");
            return; //supposedly this is the same as using break in a while loop
        }
        else{
            //if the value is less than the current node, search the left tree, or else, search the right tree
            if(value < current_node.value){
                console.log("value "+ value + " is less than "+ current_node.value)
                current_node.left_child=this.insert(value, current_node.left_child)
                //return current_node;
            } else {
                console.log("value "+value+" is more than "+current_node.value)
                current_node.right_child = this.insert(value, current_node.right_child)
                //return current_node;
            }
        }

        return current_node;
        
    }


    delete(value, current_node = this.root){
        //if root is empty, nothing to remove
        if(current_node===null){
            return current_node;
        }
                
        //when you find the node in the tree...
        if(value === current_node.value){
            current_node = this.delete_helper(current_node)
                
        }
        else{
            if(value < current_node.value){
                current_node.left_child = this.delete(value, current_node.left_child);
            }
            if(value > current_node.value){
                current_node.right_child =  this.delete(value, current_node.right_child);
            }
        }
        return current_node;
        

    }
    delete_helper(current_node){
        //if there are two children
        if(current_node.left_child && current_node.right_child){
            //on the right tree of the current node, find the left most leaf and set that number to the current leaf
            let minimum = this.find_min(current_node.right_child);
            console.log("minimum found: "+ minimum.value)
            //set value of current node to minimum leaf value
            current_node.value = minimum.value;
            //remove the minimum from right child now
            current_node.right_child = this.delete(minimum.value, current_node.right_child)
        }
        else{
             //if it is a leaf with no children, then the node to null
            if(current_node.left_child === null && current_node.right_child === null){
                current_node = null;
                return current_node;
            }
            if(current_node.left_child ===null || current_node.right_child === null){
                //if the node has one child...
                if(current_node.left_child == null){
                //if there is no left child
                current_node = current_node.right_child;
                }
                if(current_node.right_child == null){
                    current_node = current_node.left_child;
                }
        }
     
        }
        return current_node;
    }


    find_min(current_node = this.root){
        if(current_node.left_child==null){
            return current_node;
        }
        else{
            current_node = this.find_min(current_node.left_child);
        }
        return current_node;
    }


    find(value, current_node = this.root){
        if(value < current_node.value){
            current_node = this.find(value, current_node.left_child)
        }
        else{
            current_node = this.find(value,current_node.right_child)
        }
        return current_node;
    }

    //traverse in breadth first-order
    levelOrder(){
    /*
    You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list
    */
    const queue = [this.root]
    var breadth_first=[];
    while(queue.length!=0){
        //first in, first out
        var current_node = queue.shift();
        breadth_first.push(current_node);
        console.log(current_node.value + " ")
        if(current_node.left_child!=null){
            queue.push(current_node.left_child)
        }
        if(current_node.right_child!=null){
            queue.push(current_node.right_child)
        }
    }
    return breadth_first;
    }

    inorder(current_node = this.root, inorderList=[]){
        if(current_node ==  null){
            return;
        }
        this.inorder(current_node.left_child,inorderList);
        inorderList.push(current_node.value);
        console.log(current_node.value + " ");
        this.inorder(current_node.right_child,inorderList);
        return(inorderList)
    }
    preorder(current_node = this.root, preorderList=[]){
        if(current_node ==  null){
            return null;
        }
        console.log(current_node.value + " ")
        preorderList.push(current_node.value);
        this.preorder(current_node.left_child,preorderList)
        this.preorder(current_node.right_child,preorderList)
        return preorderList;

    }
    postorder(current_node = this.root, postorderList = []){
        if(current_node==null){
            return;
        }
        this.postorder(current_node.left_child, postorderList)
        this.postorder(current_node.right_child, postorderList)
        postorderList.push(current_node.value);
        console.log(current_node.value + " ");
        return(postorderList)
    }

    //takes a given height and returns the height of the node
    height(tree_root = this.root){
        //console.log(current_node)
        //Height is defined as the number of edges in longest path from a given node to a leaf node.
        //returns the height of the node
        if(tree_root == null){
            return 0;
        }
        let leftHeight = this.height(tree_root.left_child);
        let rightHeight = this.height(tree_root.right_child);
        var ans =  Math.max(leftHeight,rightHeight)+1;
        return ans;


    }

    //returns the depth of a given node
    depth(nodeVal, node = this.root, dist = 0){
        //Depth is defined as the number of edges in path from a given node to the tree’s root node.
        if(node === null){
            return dist ;
        }
        if(node.value === nodeVal){
            return dist;
        }
        else{
            if(nodeVal>node.value){
                return this.depth(nodeVal,node.right_child, dist+1)
            }
            else{
                return this.depth(nodeVal,node.left_child, dist+1)
            }
        }
    }

    //checks of the tree is balanced
    isBalanced(node = this.root){
    //a balanced tree will not return a difference in heights of the left and right subtree more than 1
        if(node === null){
            return 0;
        }
        var leftSide = this.height(node.left_child);
        var rightSide = this.height(node.right_child);
        var difference = Math.abs(leftSide-rightSide)
        if(difference > 1){
            console.log("tree is unbalanced")
            return false;
        }
        else{
            console.log("Tree is balanced");
            return true;
        }
        
    }

    // rebalances an unbalanced tree
    rebalance(){
    //Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
        let ordered_list = this.inorder();
        this.root = this.buildTree(ordered_list, 0, ordered_list-1);
    }

    prettyPrint(node = this.root, prefix = '', isLeft = true){
        if (node === null) {
           return;
        }
        if (node.right_child !== null) {
          this.prettyPrint(node.right_child, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left_child !== null) {
          this.prettyPrint(node.left_child, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

}


function compareNumbers(a, b) {
    return a - b;
}

function remove_duplicates(data){
    return[...new Set(data)]
}



//TESTING
var arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//console.log(remove_duplicates(arr.sort(compareNumbers)));
var my_tree = new Tree(arr)

//my_tree.levelOrder(); //  8,4,67,3,7,23,6345,1,5,9,324
//sort data
//my_tree.preorder(); // 8,4,3,1,7,5,67,23,9,6345,324
//console.log(my_tree.preorder())
//my_tree.inorder() // 1,3,4,5,7,9,23,67,324,6345
//my_tree.postorder(); // 1,3,5,7,4,9,23,324,6345,324
//console.log(my_tree.postorder());
//console.log(my_tree.insert(16))
console.log(my_tree.prettyPrint())
//console.log("root of my tree:" + my_tree.root.value)
//console.log("height of my tree is : " + my_tree.height()); // 4
//console.log("depth of my tree is: "+ my_tree.depth(5)) //3
//console.log(my_tree.isBalanced())


var arr_unbalanced = [12,23,16,49,34,42,45]
//var arr_unbalanced=[]
var unbalanced_tree = new Tree(arr_unbalanced)
//console.log(unbalanced_tree.insert(16))
console.log(unbalanced_tree.insert(5))
console.log(unbalanced_tree.insert(3))
console.log(unbalanced_tree.insert(6))
console.log(unbalanced_tree.find_min())
console.log(unbalanced_tree.delete(45))
console.log(unbalanced_tree.delete(42))
console.log(unbalanced_tree.prettyPrint())
console.log(unbalanced_tree.isBalanced())
console.log(unbalanced_tree.rebalance())
console.log(unbalanced_tree.prettyPrint())
