var Stack = function() {
  this.count = 0;
  this.storage = {};
};

//create a prototype functions for push, pop, size
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.storage[this.count];

};

Stack.prototype.pop = function() {
  var popped = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  if (this.count > 0) {
    this.count--;
  } 
  return popped;

};

Stack.prototype.size = function() {
  return this.count;

};

var instanceOfStack = new Stack();