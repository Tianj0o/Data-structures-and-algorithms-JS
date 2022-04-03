const { g, initializeColor, Color, printVertex } = require('./遍历算法')
// bfs 寻找最短路径


const BFS = (Graph, startVertex) => {
  const vertices = Graph.getVertices();
  const adjList = Graph.getAdjList();
  const queue = []
  const color = initializeColor(vertices)
  const { distances, predecessors } = initializeDistance(vertices)
  queue.push(startVertex)
  while (queue.length !== 0) {
    const currentVertex = queue.shift()
    color[currentVertex] = Color.GRAY
    // printVertex(currentVertex);
    const neighbors = adjList[currentVertex]
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Color.WHITE) {
        color[w] = Color.GRAY
        queue.push(w);
        distances[w] = distances[currentVertex] + 1
        predecessors[w] = currentVertex
      }
    }
    color[currentVertex] = Color.Black
  }
  return {
    distances,
    predecessors
  }
}
const shortestPathA = BFS(g, g.getVertices()[0]);
const vertices = g.getVertices()

const fromVertex = vertices[0];
let str = ''
for (let i = 1; i < vertices.length; i++) {
  const array = [];
  let currentVertex = vertices[i]
  while (currentVertex !== fromVertex) {
    array.push(currentVertex)
    currentVertex = shortestPathA.predecessors[currentVertex];
  }
  array.push(currentVertex)
  str += array.pop()
  while (array.length !== 0) {
    str += ` -> ${array.pop()}`
  }
  str += '\n'
}
// console.log(str)
function initializeDistance(vertices) {
  const distances = {}
  const predecessors = {}
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }
  return {
    distances, predecessors
  }
}



