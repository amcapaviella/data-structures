

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add value and edges property to the node, add them to this.storage
  //creates objet with a key of node and a value of empty array, then add it to storage 
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //this.storage hasOwnProperty [node]
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //delete this.storage.node
  delete this.storage[node];
	
	

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //look up fromNode and see if fromNodes array contains toNode's value
  //return boolean
  return this.storage[fromNode].includes(toNode);
	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add the toNode value to fromNode array and fromNode value to toNode array
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log(this.storage[fromNode], toNode);
  //remove toNode value from fromNode array and fromNode from toNode
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      //console.log(this.storage[fromNode], this.storage[fromNode].splice(i, 1));
      this.storage[fromNode] = this.storage[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].length; i++) {
    if (this.storage[fromNode][i] === fromNode) {
      this.storage[froNode] = this.storage[toNode].splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, cb);
	
};

var graphInstance = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


