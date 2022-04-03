
const { Graph } = require('./图')
const Color = {
  WHITE: 0,
  GRAY: 1,
  Black: 2
}
// bfs 广度优先搜索
function breadthFirstSearch(Graph, startVertex, callback) {
  const vertices = Graph.getVertices();
  const adjList = Graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = []
  queue.push(startVertex)
  while (queue.length !== 0) {
    let currentVertex = queue.shift()
    const neighbors = adjList[currentVertex]
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Color.WHITE) {
        color[w] = Color.GRAY
        queue.push(w)
      }
    }
    color[currentVertex] = Color.Black
    if (callback) {
      callback(currentVertex)
    }
  }
}


const printVertex = (value) => console.log('Visted: ' + value)

const g = new Graph()
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')

const vertices = g.getVertices()
// breadthFirstSearch(g, vertices[0], printVertex)



function depthFirstSearch(Graph, callback) {
  const vertices = Graph.getVertices()
  const adjList = Graph.getAdjList()
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    const currentVertex = vertices[i]
    if (color[currentVertex] === Color.WHITE) {

      depthFirstSearchVisit(currentVertex, color, adjList, callback)
    }
  }
}

function depthFirstSearchVisit(u, color, adjList, callback) {
  color[u] = Color.GRAY;
  if (callback) {
    callback(u)
  }
  const neighbors = adjList[u];
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    if (color[w] === Color.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Color.Black
}
function initializeColor(vertices) {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Color.WHITE
  }
  return color
}

// depthFirstSearch(g, printVertex)

module.exports = {
  depthFirstSearch,
  breadthFirstSearch,
  g,
  initializeColor,
  Color,
  printVertex
}