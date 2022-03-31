// 邻接表 法表示图
// A -> B C D
// B -> A E F
// C -> A D
// D -> A C
// E -> B 
// F -> B

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = {};
  }
  // 添加新的顶点
  addVerticex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList[v] = []
    }
  }
  // 给两点建立联系
  addEdge(v, w) {
    if (!this.vertices.includes(v)) {
      this.addVerticex(v);
    }
    if (!this.vertices.includes(w)) {
      this.addVerticex(w);
    }
    if (!this.isExist(v, w)) {
      this.adjList[v].push(w);
    }
    if (!this.isDirected) {
      if (!this.isExist(w, v))
        this.adjList[w].push(v);
    }
  }
  // 返回顶点数组
  getVertices() {
    return this.vertices;
  }
  // 返回邻接表
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let str = ''
    for (let i = 0; i < this.vertices.length; i++) {
      const v = this.vertices[i]
      const vList = this.adjList[v]
      str += `${v} ->`
      for (let j = 0; j < vList.length; j++) {
        str += ` ${vList[j]}`
      }
      str += '\n'
    }

    return str
  }
  isExist(v, w) {
    return this.adjList[v].includes(w)
  }
}
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
console.log(g.toString());

module.exports = {
  Graph
}
