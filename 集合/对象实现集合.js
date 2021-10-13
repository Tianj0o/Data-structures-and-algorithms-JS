class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    if (Object.prototype.hasOwnProperty.call(this.items, element)) {
      return true
    }
    return false
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  clear() {
    this.items = {}
  }
  size() {
    let count = 0
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++
      }
    }
    return count
  }
  values() {
    const values = []
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }
  //并集
  union(otherSet) {
    const newSet = new Set()
    this.values().forEach((item) => newSet.add(item))
    otherSet.values().forEach((item) => newSet.add(item))
    return newSet
  }
  //交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    //优化一下 通过循环小的set 减少次数
    let bigSet = this, smallSet = otherSet
    if (this.size() < otherSet.size()) {
      bigSet = otherSet
      smallSet = this
    }
    for (let i = 0; i < smallSet.values().length; i++) {
      if (bigSet.has(i)) {
        intersectionSet.add(i)
      }
    }
    return intersectionSet
  }
  //差集
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })
    return differenceSet
  }
  //判断是否是子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSub = true
    this.values().every(item => {
      if (!otherSet.has(item)) {
        isSub = false
        return false
      }
      return true
    })
    return isSub
  }
  toString() {
    if (this.size() !== 0) {
      let output = ''
      this.values().forEach(item => {
        output += item + ','
      })
      return output.slice(0, output.length - 1)
    }
  }
}

// const set = new Set()
// set.add(1)
// set.add(3)
// set.add(5)
// set.add(7)
// set.add(9)
// const set2 = new Set()
// set2.add(1)
// set2.add(-2)
// set2.add(-3)

// const set3 = set.union(set2)
// const set4 = set.intersection(set2)
// const set5 = set2.difference(set)
// console.log(set3.values());
// console.log(set4.values());
// console.log(set5.values());


// const set7 = new Set()
// set7.add(1)
// set7.add(2)
// set7.add(3)
// set7.add(4)

// const set8 = new Set()
// set8.add(1)
// set8.add(2)
// set8.add(3)

// console.log(set8.isSubsetOf(set7));
// console.log(set8.toString())