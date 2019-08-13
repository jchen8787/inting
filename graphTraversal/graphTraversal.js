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

function bfsIterative(graph, start) {
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

function dfsIterative(graph, start) {
    const stack = []
    const visited = []
    const order = []

    stack.push(start)
    visited.push(start)

    while (stack.length > 0) {
        const cur = stack.pop()
        order.push(cur)

        for (const neighbor of graph[cur]) {
            if (!visited.includes(neighbor)) {
                stack.push(neighbor)
                visited.push(neighbor)
            }
        }
    }

    return order
}


function dfsRecursive(graph, cur, visited) {
    visited.push(cur)

    for (const neighbor of graph[cur]) {
        if (!visited.includes(neighbor)) {
            dfsRecursive(graph, neighbor, visited)
        }
    }

    return visited
}

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

const graph = buildAdjacencyList(numVertices, edges)
console.log('graph', graph)

const bfsOrder = bfsIterative(graph, 0)
console.log('bfsOrder', bfsOrder)

const dfsIterativeOrder = dfsIterative(graph, 0)
console.log('dfsIterativeOrder', dfsIterativeOrder)

const dfsRecursiveOrder = dfsRecursive(graph, 0, [])
console.log('dfsRecursiveOrder', dfsRecursiveOrder)
