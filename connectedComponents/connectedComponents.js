nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

edges = [
    ['j', 'g'],
    ['i', 'h'],
    ['b', 'd'],
    ['c', 'e'],
    ['b', 'f'],
    ['e', 'g'],
    ['d', 'f'],
    ['a', 'b'],
]

createAdjacencyMap = (nodes, edges) => {
    const adjacencyMap = {}
    nodes.forEach((node) => {
        adjacencyMap[node] = []
    })

    edges.forEach((edge) => {
        adjacencyMap[edge[0]].push(edge[1])
        adjacencyMap[edge[1]].push(edge[0])
    })

    return adjacencyMap
}

connectedComponents = (nodes, edges) => {
    const adjacencyMap = createAdjacencyMap(nodes, edges)
    const visitedArray = []

    const connectedComponents = []

    nodes.forEach((node) => {
        if (visitedArray.includes(node)) {
            return
        }

        connectedComponents.push(dfs(node, adjacencyMap, visitedArray))
    })

    return connectedComponents
}

dfs = (node, adjacencyMap, visitedArray) => {
    visitedArray.push(node)

    res = [node]
    adjacencyMap[node].forEach((adjacentNode) => {
        if (visitedArray.includes(adjacentNode)) {
            return
        }
        res = res.concat(dfs(adjacentNode, adjacencyMap, visitedArray))
    })

    return res
}

console.log(connectedComponents(nodes, edges))
