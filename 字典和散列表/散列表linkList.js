/**
 * 通过将每个节点换成链表来解决普通散列表的冲突问题
 */
const { LinkList } = require('../链表/链表.js')

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `${this.key} => ${this.value}`
  }
}
class HashTableSeparateChaining {
  constructor() {
    this.toStrFn = toString
    this.tables = {}
  }
  put(key, value) {
    if (key != null && value != null) {
      const hashKey = this.hashCode(key)
      let valuePair = new ValuePair(key, value)
      if (this.tables[hashKey] == null) {
        const list = new LinkList()
        this.tables[hashKey] = list
      }
      this.tables[hashKey].push(valuePair)
      return true
    }
    return false
  }
  get(key) {
    const hashKey = this.hashCode(key)
    const list = this.tables[hashKey]
    if (list != null && !list.isEmpty()) {
      let current = list.head
      while (current) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      return undefined
    }
  }
  remove(key) {
    const hashKey = this.hashCode(key)
    const list = this.tables[hashKey]
    if (list != null && !list.isEmpty()) {
      let current = list.head
      while (current) {
        if (current.element.key === key) {
          list.remove(current.element)
          if (list.isEmpty()) {
            delete this.tables[hashKey]
          }
          return true
        }
        current = current.next
      }
    }
    return false
  }
  toString() {
    const keys = Object.keys(this.tables)
    let output = []
    for (let i = 0; i < keys.length; i++) {
      output.push(this.tables[keys[i]].toString())
    }
    return output
  }
  hashCode(key) {
    return loseloseHashCode(key)
  }
}



//test
const hash = new HashTableSeparateChaining();
// hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
// hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'asmine@email.com');
// hash.put('Jake', 'jake@email.com');
// hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
// hash.put('Sargeras', 'sargeras@email.com');
hash.remove('Jamie')
hash.remove('Jasmine')
console.log(hash.toString());





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