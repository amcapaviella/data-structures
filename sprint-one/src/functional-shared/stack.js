//JUSTIFICATION- create a function that creates stack instance and gives it methods using FUNCTIONAL-SHARED
//we wll extend the stack so it has the ability to add remove items from itself as well as check its own size 
//input = nothing, processing = ??, effects = none,  output = stack instance

//Explanation - this function will output a stack instance with the abilities listed 
//above using extend adding the stackMethods


var Stack = function() {
  //create an instance of stack
  var stackInstance = {};
  //create an object to store stacks items
  stackInstance.storage = {};
  //create a counter to check the position
  stackInstance.count = 0;
  //extends some instance
  extend(stackInstance, stackMethods);
  
  return stackInstance;

};
//extend function
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



//This object will hold all of our methods and we will extend them to the instance created by Stack
var stackMethods = {
  //create a push function
    //add the elements to the top of storage
    //increase the counter by 1 
    //returns the sto
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage[this.count];
  }, 
  //create a pop function
    //creates a variable to store removed value
    //finds storages most recently added element at counter using the counter and removes it from storage
    //decreases the counter by 1 if counter is greater than 0
    //return the popped element 
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) {
      this.count--;
    } 
    return popped;
  },
   //create a size function 
   //returns the current counter value;
  size: function() {
    return this.count;
  }
};

  
   




