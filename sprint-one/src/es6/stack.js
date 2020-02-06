class Stack {
  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage[this.count];
  }

  pop() {
    var popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if (this.count > 0) {
      this.count--;
    } 
    return popped;
  }

  size() {
    return this.count;
  }

}

var instanceOfStack = new Stack();