/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.count = 0;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const value = this.map.get(key);
  if(value===undefined) return -1;
  this.map.delete(key);
  this.map.set(key,value);
  return value
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)){
      this.map.delete(key);

  }else{
      this.count++
  }
  this.map.set(key,value)
  if(this.count>this.capacity){
      const key = [...this.map.keys()][0];
      this.map.delete(key);
      this.count--
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/