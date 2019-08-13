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

function findClosestUnvisited(visited, distances) {
    let res
    let minDist = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < distances.length; i++) {
        if (!visited.includes(i) && distances[i] < minDist) {
            minDist = distances[i]
            res = i
        }
    }

    return res
}

function dijkstra(graph, src) {
    const numVertices = graph.length

    const distances = []
    const parents = []

    for (let i = 0; i < numVertices; i++) {
        distances.push(Number.MAX_SAFE_INTEGER)
        parents.push(-1)
    }

    distances[src] = 0

    const visited = []

    while (visited.length < numVertices) {
        const cur = findClosestUnvisited(visited, distances)

        visited.push(cur)

        for (let j = 0; j < numVertices; j++) {
            if (
                !visited.includes(j)
                && graph[cur][j]
                && distances[cur] + graph[cur][j] < distances[j]
            ) {
                distances[j] = distances[cur] + graph[cur][j]
                parents[j] = cur
            }
        }
    } 

    return { distances, parents }
}

function printShortestPaths(distances, parents) {
    const getPath = (cur, res) => (
        parents[cur] === -1
            ? [cur, ...res]
            : getPath(parents[cur], [cur, ...res])
    )

    for (let i = 0; i < distances.length; i++) {
        const path = getPath(i, [])

        console.log(
            `Node ${i}'s distance: ${distances[i]}\t`
            + `Path: (${path.join(', ')})`
        )
    }
}

const numVertices = 9

/* [nodeA, nodeB, distance]
   graph img: https://media.geeksforgeeks.org/wp-content/cdn-uploads/Fig-11.jpg */
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
const { distances, parents } = dijkstra(graph, 0)

console.log('graph:\n', graph)
console.log('distances:\n', distances)
console.log('parents:\n', parents)

console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
printShortestPaths(distances, parents)
