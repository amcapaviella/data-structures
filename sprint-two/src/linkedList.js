//LinkedList outpits an instance of a linkedlist.
//linked list has nodes that contain a value and a next property
//it gives it head and tail property as well as 3 methods 
//(add tail, remove head and search) in the process


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
 
  //input = value you want to add to list
  //process/effects = uses Node to create a node and add it to the linked list instance
  //output  = no return value

  //valid inputs = any real number

  //adds a newly created node (using Node) with the input value to the TAIL 
  //of the list instance the node has both a value and a next property

  list.addToTail = function(value) {
  
    //create new node with Node 
    var insertNode = Node(value);
    // if the list is empty we point head and tail at the same place
    if (list.tail === null && list.head === null) {
      list.tail = insertNode;
      list.head = insertNode;
    } else {
      previousTail = list.tail;
      previousTail.next = insertNode;
      list.tail = insertNode;
    }
    //stores the last node before insertion
    //sets the last nodes next value to the inserted nodes value
    //set tail pointer to value
  };

  //input = N/A
  //process/effect = removes the node from the head of the linked list instance
  //output = return the removed value
  //edge case = remove from a list with 0

  //valid output = a node that was removed

  //removes a node from the head of the list instance and retuns the removed node object
  list.removeHead = function() {
    var removed = list.head.value; 
    list.head = list.head.next;
    return removed;
    
  };

  //inputs number you are looking for 
  //process = moves through each node linearly checking if the value is present
  //effects = N/A
  //outputs = return a boolean if the target was present or not
  
  //valid inputs = any value, outputs == boolean
  //searches the list instance for the target and returns true if the target is present
  //if list is empty return false;
  list.contains = function(target) {
    //iterate through each value searching for the target
    //if target is there, return true
    //if loop ends without returning true, return false;
    //while(next != null)
    var currentNode = list.head;
    var currentValue = list.head.value;
    while (currentNode.next !== null) {
      if (currentValue === target) {
        return true;
      }
      currentNode = currentNode.next;
      currentValue = currentNode.value;
    }
    if (list.tail.value === target) {
      return true;
    }
    return false; 

  };

  return list;
};

//input = value to add to list
//process = creates nodes a node with a value and a next property
//effects = N/A
//output = returns the created node to be added to the linked list

//inputs = any real number
//creates a new node with value and next properties and returns that node 
//which is then added to the list
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
insertion and removal are constant
search is linear
 */
