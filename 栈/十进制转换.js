const Stack = require('./数组实现.js')
function translateTtoB(number, base) {
  const ctx = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const stack = new Stack()
  number = Math.floor(number)
  let rem
  let out = ''
  if (base < 2 || base > 36) {
    return ''
  }
  while (number != 0) {
    rem = number % base
    number = Math.floor((number - rem) / base)
    rem = ctx[rem]
    stack.push(rem)
  }
  while (!stack.isEmpty()) {
    out += stack.pop()
  }
  console.log(out)
  return out
}

translateTtoB(12312131, 32)
