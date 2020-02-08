

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i ++) {
    this._storage[i] = [];

  }


};

//input key and value (key has to be a string)

//takes the key value pair, puts the key into the hash machine
//key is transmogrified into an index within range of this._limit
//it then adds the key and value to a tuplet at the index

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //adding novel elements to an index
  //iterate through bucket array at index checking tuples for k (k should be tuple[0])
  var bucket = this._storage[index];
  if (bucket[0] === undefined) {
    bucket.push([k, v]);
  }
  for (var i = 0; i < bucket.length; i++) {
    //if key matches we replace current value with new value


    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    } else {
      bucket.push([k, v]);
    }
    //otherwise we push [k,v] to the bucket array

  }
    //if it matches we replace current value with new value
    //otherwise we push [k,v] to the bucket array

    console.log(this._storage);
};


/*

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.keys.indexOf(k) >= 0 || this._storage.get(index) === undefined) {
    this._storage.set(index, v);
    this.keys.push(k);
  } else {

    var alreadyThere = [];
    alreadyThere.push(this._storage.get(index));
    alreadyThere.push(v);
    console.log(alreadyThere);
    this._storage.set(index, alreadyThere);
    this.keys.push(k);
  }*/


//input key
//returns value of the input key

//takes a key and retrieves the associated value from the hash table
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket array at index
  var bucket = this._storage[index];

  //iterate through bucket array at index checking tuples for k (k should be tuple[0])
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
    //return v at k
      return bucket[i][1];
    }
  }





  /*var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage.get(index));
  //tries to see which key comes before any other key
  return this._storage.get(index);
  */
};

//input key
//returns the removed value

//finds a specific key and removes the pair
HashTable.prototype.remove = function(k) {
  //search through bucket array to find key value pair, splices bucket array to remove tuple
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if ( bucket[i][0] === k) {
      bucket.splice(i);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


