

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.keys = [];
  //console.log(this._storage);
};

//input key and value (key has to be a string)

//takes the key value pair, puts the key into the hash machine
//key is transmogrified into an index within range of this._limit
//it then adds the key and value to a tuplet at the index

HashTable.prototype.insert = function(k, v) {
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
  }

};
//input key
//returns value of the input key

//takes a key and retrieves the associated value from the hash table
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage.get(index));
  //tries to see which key comes before any other key
  return this._storage.get(index);
};

//input key
//returns the removed value

//finds a specific key and removes the pair
HashTable.prototype.remove = function(k) {
  this._storage.keys.splice(indexOf(k))
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


