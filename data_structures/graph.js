class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
    }

    removeVertex(v) {
        this.adjacencyList[v].forEach((r) => this.removeEdge(v, r));
        delete this.adjacencyList[v];
    }
}

const dfs = (v, list, path = [], seen = {}) => {
    if (!v) return null;
    seen[v] = true;
    path.push(v);
    list[v].forEach((n) => (!seen[n] ? dfs(n, list, path, seen) : null));
    return path;
};

const bfs = (v, list) => {
    const q = [v];
    const path = [];
    const seen = {};
    let curr;
    while (q.length) {
        curr = q.shift();
        path.push(curr);
        seen[curr] = true
        list[curr].forEach((n) => {
            if (!seen[n]) {
                seen[n] = true;
                q.push(n)
            }
        });
    }
    return path
};

const g = new Graph();

g.addVertex("Juanpa");
g.addVertex("Vale");
g.addVertex("Albert");
g.addVertex("Joaco");
g.addVertex("Jeremias");

g.addEdge("Juanpa", "Vale");
g.addEdge("Juanpa", "Albert");

// g.addEdge("Joaco", "Jeremias");

// console.log(g.dfsr("Juanpa"));
// console.log(dfs("Juanpa", g.adjacencyList));
console.log(bfs("Juanpa", g.adjacencyList));
// g.removeEdge("Juanpa", "Albert")
// g.removeVertex("Juanpa")

// console.log(g.adjacencyList);
