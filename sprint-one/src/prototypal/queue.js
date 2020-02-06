var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.count = 0;  
  
  return queueInstance;

};

var queueMethods = {
  dequeue: function() {
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
  
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  
  size: function() {
    return this.count;
  }


};

