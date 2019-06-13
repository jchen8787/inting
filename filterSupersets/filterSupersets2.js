const filterSupersets = sets => {
    const sortedSets = sets.slice().sort((a, b) => b.length - a.length)

    const supersets = []

    sortedSets.forEach(set => {
        supersets.length === 0 && supersets.push(set)

        let foundSuperset = false

        for (let i = 0; i < supersets.length; i++) {
            if (isSuperset(supersets[i], set)) {
                foundSuperset = true

                break
            }
        }

        if (!foundSuperset) {
            supersets.push(set)
        }
    })

    return supersets
}

const isSuperset = (superset, set) => {
    const sortedSuperset = superset.slice().sort()
    const sortedSet = set.slice().sort()

    let j = 0

    for (let i = 0; i < sortedSuperset.length; i++) {
        sortedSuperset[i] === sortedSet[j] && j++
    }

    return j === set.length
}

const sampleData = [
    [4, 3],
    [7],
    [6, 2, 1, 2],
    [2, 2],
    [8, 9],
    [5, 4, 6, 3],
    [1],
    [7, 9, 8],
    [1, 2, 3],
    [2, 2, 2],
    [2, 2, 2, 2],
]

const res = filterSupersets(sampleData)
console.log(res)
