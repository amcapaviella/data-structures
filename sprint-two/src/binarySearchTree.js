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
  var isTrue = false;

  if (this.value === value) {
    isTrue = true;
  } else if (this.value < value) {
    if (this.right === undefined) {
      return false;
    }
    isTrue = isTrue || this.right.contains(value);
  } else if (this.value > value) {
    if (this.left === undefined) {
      return false;
    }
    isTrue = isTrue || this.left.contains(value);
  }
  return isTrue;
};







//takes the callback function and executes it on every value in the tree
bstMethods.depthFirstLog = function(cb) {
  //if neither left or right exist

  cb(this.value);

  if (this.right === undefined && this.left === undefined) {
  } else {
    //if (right is not undefined) run cb on right
    if (this.left !== undefined) {
      this.left.depthFirstLog(cb);
    }

    if (this.right !== undefined) {
      this.right.depthFirstLog(cb);
    }
    //run depthfirst on left
  }
  //otherwise, move recursively with CB through the trees

};

//new BinarySearchTree(value);

/*
 * Complexity: What is the time complexity of the above functions?
 */
