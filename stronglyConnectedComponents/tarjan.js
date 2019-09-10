// graph 0
const nodes0 = ['a', 'b', 'c', 'd', 'e']
const edges0 = [
    ['c', 'a'],
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'd'],
    ['d', 'e'],
]

// graph 1
const nodes1 = ['a', 'b', 'c', 'd', 'e', 'f']
const edges1 = [
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'a'],
    ['a', 'd'],
    ['d', 'f'],
    ['f', 'e'],
    ['e', 'd'],
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

let time = 0

const dfs = (node, adjacencyMap, stack, discTimes, lowTimes, sccs) => {
    discTimes[node] = time
    lowTimes[node] = time
    time += 1

    stack.push(node)

    adjacencyMap[node].forEach((an) => {
        if (discTimes[an] === null) {
            dfs(an, adjacencyMap, stack, discTimes, lowTimes, sccs)
            lowTimes[node] = Math.min(lowTimes[node], lowTimes[an])
        } else if (stack.includes(an)) {
            lowTimes[node] = Math.min(lowTimes[node], discTimes[an])
        }
    })

    cur = null
    if (lowTimes[node] === discTimes[node]) {
        curSCC = []
        while (cur !== node) {
            cur = stack.pop()
            curSCC.push(cur)
        }
        sccs.push(curSCC)
    }
}

const tarjan = (nodes, edges) => {
    const stack = []
    const adjacencyMap = buildAdacencyMap(nodes, edges)

    const discTimes = {}
    nodes.forEach((n) => {
        discTimes[n] = null
    })

    const lowTimes = {}
    nodes.forEach((n) => {
        lowTimes[n] = null
    })

    sccs = []

    nodes.forEach((n) => {
        if (discTimes[n] === null) {
            dfs(n, adjacencyMap, stack, discTimes, lowTimes, sccs)
        }
    })

    return sccs
}

console.log(tarjan(nodes1, edges1))
