function buildAdjacencyMatrix(numVertices, edges) {
    const matrix = []

    for (let i = 0; i < numVertices; i++) {
        const row = []

        for (let j = 0; j < numVertices; j++) {
            row.push(0)
        }

        matrix.push(row)
    }

    for (const e of edges) {
        const a = e[0]
        const b = e[1]
        const dist = e[2]

        matrix[a][b] = dist
        matrix[b][a] = dist
    }    

    return matrix
}

function findClosestUnvisited(visited, dist, numVertices) {
    let minDist = Number.MAX_SAFE_INTEGER
    let res = -1

    for (let i = 0; i < numVertices; i++) {
        if (!visited.has(i) && dist[i] < minDist) {
            minDist = dist[i]
            res = i
        }
    }

    return res
}

function dijkstra(graph, src) {
    const numVertices = graph.length

    const dist = []

    for (let i = 0; i < numVertices; i++) {
        dist.push(Number.MAX_SAFE_INTEGER)
    }

    dist[src] = 0

    const visited = new Set()

    let count = 0

    while (count < numVertices) {
        count++

        const cur = findClosestUnvisited(visited, dist, numVertices)

        visited.add(cur)

        for (let j = 0; j < numVertices; j++) {
            const edgeDistance = graph[cur][j]

            if (!visited.has(j) && edgeDistance) {
                const newDist = dist[cur] + edgeDistance

                if (newDist < dist[j]) {
                    dist[j] = newDist
                }
            }
        }
    } 

    return dist
}

const numVertices = 9

/* [vertexA, vertexB, distance]
   graph image: https://media.geeksforgeeks.org/wp-content/cdn-uploads/Fig-11.jpg */
const edges = [
    [0, 1, 4],
    [0, 7, 8],
    [1, 2, 8],
    [1, 7, 11],
    [2, 3, 7],
    [2, 5, 4],
    [2, 8, 2],
    [3, 4, 9],
    [3, 5, 14],
    [4, 5, 10],
    [5, 6, 2],
    [6, 7, 1],
    [6, 8, 6],
    [7, 8, 7],
]

const graph = buildAdjacencyMatrix(numVertices, edges)
console.log('graph:\n', graph)

const shortestPaths = dijkstra(graph, 0)
console.log('shortestPaths:\n', shortestPaths)
