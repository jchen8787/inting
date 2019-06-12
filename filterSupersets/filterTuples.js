// author: ted

const sampleData = [[4, 3], [7], [6, 2, 1, 2], [2, 2], [5, 4, 6, 3], [1]]

// Given two tuples of integer values, selectSuperset will determine if one
// is a superset of the other, and if so it will return that tuple, else
// it will return null.
function selectSuperset(t1, t2) {
    // put the smaller input array first
    const inputs = [t1, t2].sort((a, b) => a.length - b.length)

    // copy input arrays
    const s1 = inputs[0].slice().sort()
    const s2 = inputs[1].slice().sort()

    // remove shared entries until we run out of items or an array becomes
    // empty
    for (let i = 0; i < s1.length && s2.length; i++) {
        const item = s1[i]
        const index = s2.indexOf(item)
        if (index >= 0) {
            s2.splice(index, 1)
            s1.splice(i, 1)
            i-- // decrement because we deleted an item from s1
        }
    }

    // If only one tuple still has any values left, that one must be
    // the superset. If neither have values left, they are matching
    // so it doesn't matter which one we return.
    if (s1.length && s2.length) return null
    if (s2.length) return inputs[1]
    return inputs[0]
}

function filterTuples(input) {
    const output = []
    input.forEach(tuple => {
        // Special case for first item
        if (output.length === 0) {
            output.push(tuple)
            return
        }
        // Search existing tuples. If the incoming tuple is a subset or superset
        // of an existing tuple, the existing tuple will be replaced with the superset
        // between the two.
        for (let i = 0; i < output.length; i++) {
            const reduced = selectSuperset(output[i], tuple)
            if (reduced) {
                output[i] = reduced
                return
            }
        }
        // If no subset/superset touples were found for the incoming tuple, add it to
        // the output list as a new superset
        output.push(tuple)
    })

    return output
}

const res = filterTuples(sampleData) // Should return [[5, 4, 6, 3], [7], [6, 2, 1, 2]] in some order
console.log(res)
