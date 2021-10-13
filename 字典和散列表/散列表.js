function toString(key) {
  if (key === null) {
    return 'null'
  } else if (key === undefined) {
    return 'undefined'
  } else if (typeof key === 'string' || key instanceof String) {
    return `${key}`
  }
  return key.toString()
}
//散列函数
function loseloseHashCode(key) {
  if (typeof key === 'number') {
    return key
  }
  const strKey = toString(key)
  let hash = 0
  for (let i = 0; i < strKey.length; i++) {
    hash += strKey.charCodeAt(i)
  }
  return hash % 37
}
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}
class HashTable {
  constructor() {
    this.toStrFn = toString
    this.table = {}
  }
  hashCode(key) {
    return loseloseHashCode(key)
  }
  put(key, value) {
    if (key != null && value != null) {
      const hashKey = this.hashCode(key)
      this.table[hashKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  remove(key) {
    if (this.get(key)) {
      const hashKey = this.hashCode(key)
      delete this.table[hashKey]
      return true
    }
    return false
  }
  toString() {
    let keys = Object.keys(this.table)
    let outPut = `{ ${keys[0]}-> ${this.table[keys[0]].value}}`
    for (let i = 1; i < keys.length; i++) {
      outPut = `${outPut}\n{ ${keys[i]} -> ${this.table[keys[i]].value} } `
    }
    return outPut
  }
}
// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');
// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// console.log(hash.hashCode('John') + ' - John');
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');
// console.log(hash.get('Gandalf'));
// console.log(hash.get('Loiane'));
// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));

//存在冲突
const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');
console.log(hash.toString());
