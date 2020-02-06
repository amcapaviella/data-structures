var Queue = function() {
  this.storage = {};
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.dequeue = function() {
  var popped = this.storage['0'];
  var position = 0;
  for (var key in this.storage) {
    this.storage[position] = this.storage[position + 1];
    position++;
  } 
  delete this.storage[this.count - 1];

  if (this.count > 0) {
    this.count--;
  }
  return popped;
}, 

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
},

Queue.prototype.size = function() {
  return this.count;
};

var queueInstance = new Queue();


