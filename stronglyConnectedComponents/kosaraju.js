const nodes = ['a', 'b', 'c', 'd', 'e']

const edges = [
    ['a', 'c'],
    ['c', 'b'],
    ['b', 'a'],
    ['a', 'd'],
    ['d', 'e'],
]

const buildAdacencyMap = (nodes, edges) => {
    const adjacencyMap = {}

    nodes.forEach((n) => {
        adjacencyMap[n] = []
    })

    edges.forEach((e) => {
        adjacencyMap[e[0]].push(e[1])
    })

    return adjacencyMap
}

const buildTransposeGraph = (edges) => {
    transposeEdges = []

    edges.forEach((e) => {
        transposeEdges.push([e[1], e[0]])
    })

    return transposeEdges
}

const buildStackDfs = (node, adjacencyMap, visitedArray, stack) => {
    visitedArray.push(node)

    adjacencyMap[node].forEach((adjNode) => {
        if (visitedArray.includes(adjNode)) {
            return
        }

        buildStackDfs(adjNode, adjacencyMap, visitedArray, stack)
    })

    stack.push(node)
}

const findSccDFS = (node, adjacencyMap, visitedArray) => {
    visitedArray.push(node)

    curSCC = [node]

    adjacencyMap[node].forEach((adjNode) => {
        if (visitedArray.includes(adjNode)) {
            return
        }
        curSCC = curSCC.concat(findSccDFS(adjNode, adjacencyMap, visitedArray))
    })

    return curSCC
}

const kosaraju = (nodes, edges) => {
    adjacencyMap = buildAdacencyMap(nodes, edges)
    visitedArray = []

    stack = []

    nodes.forEach((n) => {
        if (visitedArray.includes(n)) {
            return
        }

        buildStackDfs(n, adjacencyMap, visitedArray, stack)
    })

    const transposeEdges = buildTransposeGraph(edges)
    const tranposeAdjacencyMap = buildAdacencyMap(nodes, transposeEdges)
    visitedArray = []
    const stronglyConnectedComponents = []

    while (stack.length > 0) {
        curNode = stack.pop()

        if (visitedArray.includes(curNode)) {
            continue
        }
        stronglyConnectedComponents.push(findSccDFS(curNode, tranposeAdjacencyMap, visitedArray))
    }

    return stronglyConnectedComponents
}

console.log(kosaraju(nodes, edges))
