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
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class Dictionary {
  constructor() {
    this.toStrFn = toString
    this.table = {}
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }
  set(key, value) {
    if (key != null && value != null) {
      this.table[this.toStrFn(key)] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  get(key) {
    let valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
  clear() {
    this.table = {}
  }
  size() {
    return Object.keys(this.table).length
  }
  isEmpty() {
    return this.size === 0
  }
  keys() {
    return this.keyValues().map(item => item.key)
  }
  values() {
    return this.keyValues().map(item => item.value)
  }
  keyValues() {
    return Object.values(this.table)
  }
  forEach(callBackFn) {
    for (let i = 0; i < this.keyValues().length; i++) {
      const result = callBackFn(this.keyValues()[i].key, this.keyValues()[i].value)
      if (result == false) {
        break
      }
    }
  }
  toSting() {
    if (this.isEmpty()) {
      return ''
    }
    let keyValues = this.keyValues()
    let outPut = keyValues[0]
    for (let i = 1; i < keyValues.length; i++) {
      outPut = outPut + ',' + keyValues[i]
    }
    return outPut
  }
}
// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');
// console.log(dictionary.hasKey('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));
// dictionary.remove('John');
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.keyValues());
// dictionary.forEach((k, v) => {
//   console.log('forEach: ', `key: ${k}, value: ${v}`);
// });
