//JUSTIFICATION- create a function that creates stack instance and gives it methods using PROTOTYPAL


var Stack = function() {
  //create a stack instance using Object.create
  var stackInstance = Object.create(stackMethods);

  //create a storage object for the stack
  stackInstance.storage = {};
  stackInstance.count = 0;

  //return the instance
  return stackInstance;

  
};

var stackMethods = {

  //push function
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage[this.count];
  },

  //pull function
  pop: function() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) {
      this.count--;
    }
    return popped;
  },
  
  //size function
  size: function() {
    return this.count;
  }
};


