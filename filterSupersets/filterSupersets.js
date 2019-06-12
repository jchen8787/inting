const filterSupersets = tuples => {
    let supersets = []

    tuples.forEach(tuple => {
        if (supersets.length === 0) {
            supersets.push(tuple)

            return
        }

        for (let i = 0; i < supersets.length; i++) {
            const trueSuperset = findSuperset(tuple, supersets[i])

            if (trueSuperset) {
                supersets[i] = trueSuperset

                return
            }
        }

        supersets.push(tuple)
    })

    return supersets
}

const findSuperset = (t1, t2) => {
    let tupleOrder = [t1, t2].sort((a, b) => a.length - b.length)

    let smaller = tupleOrder[0].slice()
    let bigger = tupleOrder[1].slice()

    for (let i = 0; i < smaller.length; i++) {
        const j = bigger.indexOf(smaller[i])

        if (j !== -1) {
            smaller[i] = null
            bigger[j] = null
        }
    }

    smaller = smaller.filter(n => n !== null)
    bigger = bigger.filter(n => n !== null)

    return smaller.length === 0 ? tupleOrder[1] : null
}

const sampleData = [[4, 3], [7], [6, 2, 1, 2], [2, 2], [5, 4, 6, 3], [1]]

const res = filterSupersets(sampleData)
console.log(res)
