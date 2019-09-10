const nodes0 = ['a', 'b', 'c', 'd', 'e', 'f']

const edges0 = [
    ['f', 'a'],
    ['a', 'b'],
    ['b', 'd'],
    ['b', 'c'],
    ['c', 'd'],
    ['c', 'e'],
    ['d', 'e'],
]

const nodes1 = ['a', 'b', 'c', 'd', 'e']

const edges1 = [
    ['c', 'a'],
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'd'],
    ['d', 'e'],
]

const buildAdjacencyMap = (nodes, edges) => {
    adjacencyMap = {}

    nodes.forEach((n) => {
        adjacencyMap[n] = []
    })

    edges.forEach((e) => {
        adjacencyMap[e[0]].push(e[1])
        adjacencyMap[e[1]].push(e[0])
    })

    return adjacencyMap
}

let time = 0

const dfs = (node, adjacencyMap, visited, discTimes, lowTimes, parents, aps) => {
    visited.push(node)
    discTimes[node] = time
    lowTimes[node] = time
    time += 1
    let numChildren = 0

    adjacencyMap[node].forEach((child) => {
        if (!visited.includes(child)) {
            parents[child] = node
            numChildren += 1

            dfs(child, adjacencyMap, visited, discTimes, lowTimes, parents, aps)
            lowTimes[node] = Math.min(lowTimes[node], lowTimes[child])

            if (parents[node] === null && numChildren > 1) {
                aps.push(node)
            }
            else if (parents[node] !== null && lowTimes[child] >= discTimes[node]) {
                aps.push(node)
            }
        } else if (visited.includes(child) && parents[node] !== child) {
            lowTimes[node] = Math.min(lowTimes[node], discTimes[child])
            return
        }
    })
}

const articulationPoints = (nodes, edges) => {
    // setup data structures
    const adjacencyMap = buildAdjacencyMap(nodes, edges)
    const visited = []

    const discTimes = {}
    nodes.forEach((n) => {
        discTimes[n] = Number.MAX_VALUE
    })

    const lowTimes = {}
    nodes.forEach((n) => {
        lowTimes[n] = Number.MAX_VALUE
    })

    const parents = {}
    nodes.forEach((n) => {
        parents[n] = null
    })

    aps = []

    // find articulation points
    nodes.forEach((n) => {
        if (visited.includes(n)) {
            return
        }

        dfs(n, adjacencyMap, visited, discTimes, lowTimes, parents, aps)
    })

    return aps
}

console.log(articulationPoints(nodes0, edges0))
console.log(articulationPoints(nodes1, edges1))
