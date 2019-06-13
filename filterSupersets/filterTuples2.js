const sampleData = [[4, 3], [7], [6, 2, 1, 2], [2, 2], [8, 9], [5, 4, 6, 3], [1], [7, 9, 8]]

// Given two sets of integer values, selectSuperset will determine if one
// is a superset of the other, and if so it will return that set, else
// it will return null.
function selectSuperset(t1, t2) {
    const tupleOrder = [t1, t2].sort((a, b) => a.length - b.length)

    const smaller = tupleOrder[0].slice(0).sort()
    const bigger = tupleOrder[1].slice(0).sort()

    let len = smaller.length

    for (let i = 0; i < smaller.length; i++)  {
        const index = bigger.indexOf(smaller[i])

        if (index >= 0) {
            bigger[index] = null
            len--
        } else {
            return null
        }
    }

    return tupleOrder[1]
}

function filterSets(input) {
    const outputSupersets = [] // linked-list would be ideal

    input.forEach((inputSet) => {
        if (outputSupersets.length === 0) {
            outputSupersets.push(inputSet)
            return
        }

        let insertIndex = 0
        for (let i = 0; i < outputSupersets.length; i++) {
            if (outputSupersets[i].length >= inputSet.length) {
                insertIndex = i + 1
            }

            const superset = selectSuperset(outputSupersets[i], inputSet)

            if (!superset) continue

            if (superset.length === inputSet.length) {
                outputSupersets.splice(i, 1) // remove
                insertIndex = i
                i--
            } else {
                return
            }
        }
        outputSupersets.splice(insertIndex, 0, inputSet) // insert
    })

    return outputSupersets
}

console.log(filterSets(sampleData)) // Should return [[5, 4, 6, 3], [7, 9, 8], [6, 2, 1, 2]] in some order
