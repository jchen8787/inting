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

const dfs = (node, adjacencyMap, visited, discTimes, lowTimes, parents, bridges) => {
    visited.push(node)
    discTimes[node] = time
    lowTimes[node] = time
    time += 1

    adjacencyMap[node].forEach((child) => {
        if (!visited.includes(child)) {
            parents[child] = node

            dfs(child, adjacencyMap, visited, discTimes, lowTimes, parents, bridges)
            lowTimes[node] = Math.min(lowTimes[node], lowTimes[child])

            if (lowTimes[child] > discTimes[node]) {
                bridges.push([node, child])
            }
        } else if (visited.includes(child) && parents[node] !== child) {
            lowTimes[node] = Math.min(lowTimes[node], discTimes[child])
            return
        }
    })
}

const bridges = (nodes, edges) => {
    // setup data structures
    const adjacencyMap= buildAdjacencyMap(nodes, edges)
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

    const bridges = []

    // find bridges
    nodes.forEach((n) => {
        if (visited.includes(n)) {
            return
        }

        dfs(n, adjacencyMap, visited, discTimes, lowTimes, parents, bridges)
    })

    return bridges
}

console.log(bridges(nodes0, edges0))
console.log(bridges(nodes1, edges1))
