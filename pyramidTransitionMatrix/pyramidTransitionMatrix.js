/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const transitions = {}

    for (let i = 0; i < allowed.length; i++) {
        const key = allowed[i][0] + ':' + allowed[i][1]

        if (!transitions[key]) {
            transitions[key] = [allowed[i][2]]
        } else {
            transitions[key].push(allowed[i][2])
        }
    }

    // console.log(transitions)

    function solve(row) {
        if (row.length === 1) {
            return true
        }

        for (let nextRow of build(row, [])) {
            if (solve(nextRow)) {
                return true
            }
        }

        return false
    }

    function* build(row, result, i = 0) {
        if (i + 1 === row.length) {
            yield result.join('')
        } else {
            const key = row[i] + ':' + row[i + 1]

            if (transitions[key]) {
                for (let char of transitions[key]) {
                    result.push(char)
    
                    for (let next of build(row, result, i + 1)) {
                        yield next
                    }
    
                    result.pop()
                }
            }
        }
    }

    // for (let nextRow of build(bottom, [])) {
    //     console.log(nextRow)
    // }

    return solve(bottom)
};

// console.log(pyramidTransition('ABC', ["ABD","BCE","DEF","FFF"]))
console.log(pyramidTransition('AABA', ["AAA","AAB","ABA","ABB","BAC"]))
