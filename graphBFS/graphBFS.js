const numVertices = 9

const edges = [
    [0, 1],
    [0, 7],
    [1, 2],
    [1, 7],
    [2, 3],
    [2, 5],
    [2, 8],
    [3, 4],
    [3, 5],
    [4, 5],
    [5, 6],
    [6, 7],
    [6, 8],
    [7, 8],
]

function buildAdjacencyList(numVertices, edges) {
    const adjacencyList = []

    for (let i = 0; i < numVertices; i++) {
        adjacencyList.push([])
    }

    for (const e of edges) {
        const vertexA = e[0]
        const vertexB = e[1]

        adjacencyList[vertexA].push(vertexB)
        adjacencyList[vertexB].push(vertexA)
    }

    return adjacencyList
}

const graph = buildAdjacencyList(numVertices, edges)

function BFS(graph, start) {
    const queue = []
    const visited = []

    queue.push(start)
    visited.push(start)

    while (queue.length > 0) {
        const cur = queue.shift()

        for (const neighbor of graph[cur]) {
            if (!visited.includes(neighbor)) {
                queue.push(neighbor)
                visited.push(neighbor)
            }
        }
    }

    return visited
}

const res = BFS(graph, 0)
console.log(res)
