//create a tree instance with addChild and contains functionality
//input = value to start tree 
//output = tree

//children of each tree are stored in an array
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//adds a child to a tree node array
//input is a value
//effect = uses .children to add it to the child array
treeMethods.addChild = function(value) {
//childTree would be Tree(value)
var childTree = Tree(value);
//add childTree to this.children
this.children.push(childTree);


};

//checks for a particular value among all of the nodes
//input is a target value
//output is a boolean
//looks at first node, looks at children of that node....
treeMethods.contains = function(target) {
	//loop through values, check the value, if not check all the children
	var isThere = false;
	if(this.value === target){
		isThere = true;
	} else {
		for (var i = 0; i < this.children.length; i++) {
		isThere = isThere || this.children[i].contains(target);
			
		} 
	} 
	return isThere;

	//*base case* if tree.children.item === target return true || 
	//we run out of children return false  *base case* 
	
};

//recursive case: if there are children and we havent found it keep going





/*
 * Complexity: What is the time complexity of the above functions?
 */
