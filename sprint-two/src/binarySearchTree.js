var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.right;
  bst.left;
  _.extend(bst, bstMethods);

  return bst;

};

var bstMethods = {};
//inserts the given value at the correct place in the binary search tree
bstMethods.insert = function(value) {
//checks if given value is larger or smaller than the current value
//keeps doing that until it reaches the point .left and .right are empty
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  }
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }

  }
};

//takes a value and returns true if the value is in the tree, false otherwise
bstMethods.contains = function(value) {
//looks at current element and compares value to it,
//if value is larger it moves right if it is larger it moves left until either
//left and right are empty or the value is found
  if (value > this.value) {
    if (this.right !== value) {
      this.right.contains(value);
    } else if (this.right === undefined) {
      return false;
    } else {
      return true;
    }

  }
  if (value < this.value) {
    if (this.left !== value) {
      this.left.contains(value);
    } else if (this.left === undefined) {
      return false;
    } else {
      return true;
    }

  }
};

//takes the callback function and executes it on every value in the tree
bstMethods.depthFirstLog = function(cb) {

};

//new BinarySearchTree(value);

/*
 * Complexity: What is the time complexity of the above functions?
 */
