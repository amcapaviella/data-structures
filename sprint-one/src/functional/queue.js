var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  

  // Implement the methods below
  //add to end of the queue 
  someInstance.enqueue = function(value) {
    //in case we would add one person to the end so all keys 
    //would stay the same and we would add a new key at the end
    storage[count] = value;
    count++;

  };
  //removed from front of the queue
  someInstance.dequeue = function() {
  //in case we would remove person from the 0 position 
  //keys would need to -1 from their position
    var popped = storage['0'];
    var position = 0;
    for (var key in storage) {
      storage[position] = storage[position + 1];
      position++;   
    }
    delete storage[count - 1];

    if (count > 0) {
      count--;
    }
    return popped;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
