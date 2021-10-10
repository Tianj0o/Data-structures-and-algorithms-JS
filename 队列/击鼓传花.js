const Queue = require('./对象实现队列')

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
function Game(names, number) {
  const queue = new Queue()
  const eliminates = []
  names.forEach(name => {
    queue.enqueue(name)
  });
  while (queue.size() > 1) {
    for (let i = 0; i < number; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminates.push(queue.dequeue())
    console.log(queue.toString())
  }
  return {
    eliminates,
    winner: queue.dequeue()
  }
}


const { eliminates, winner } = Game(names, 7)

eliminates.forEach(item => {
  console.log(`${item}被淘汰`)
})

console.log(`winner is ${winner}`)