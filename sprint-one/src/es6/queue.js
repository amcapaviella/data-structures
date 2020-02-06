class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  dequeue() {
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
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;

  }

  size() {
    return this.count;
  }

}
