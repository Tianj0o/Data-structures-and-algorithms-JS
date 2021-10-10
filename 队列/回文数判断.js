const Deque = require('./对象实现双端队列')

function palindromeChecker(aString) {

  if (aString === null || aString === undefined || aString.length === 0) {
    return false
  }
  const deque = new Deque()
  const newString = aString.toLocaleLowerCase().split(' ').join('')
  for (let i of newString) {
    deque.addBack(i)
  }
  // console.log(deque.toString())
  let checker = true
  let first, last
  while (deque.size() > 1) {
    first = deque.removeFront()
    last = deque.removeBack()
    if (first !== last) {
      checker = false
      break
    }
  }
  // console.log(checker)

  return checker
}


console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));