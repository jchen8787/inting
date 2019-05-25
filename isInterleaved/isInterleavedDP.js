function isInterleavedDP(s1, s2, res) {
    // initialize memoization table
    const IL = []

    for (i = 0; i < s1.length + 1; i++) {
        const s2memo = []

        for (j = 0; j < s2.length + 1; j++) {
            s2memo.push(false)
        }

        IL.push(s2memo)
    }

    // memoize subproblems
    for (i = 0; i < s1.length + 1; i++) {
        for (j = 0; j < s2.length + 1; j++) {
            if (i === 0 && j === 0) {
                IL[i][j] = true
            } else if (i === 0 && s2[j - 1] === res[i + j - 1]) {
                IL[i][j] = IL[i][j - 1]
            } else if (s1[i - 1] === res[i + j - 1] && j === 0) {
                IL[i][j] = IL[i - 1][j]
            } else if (
                s1[i - 1] === res[i + j - 1] &&
                s2[j - 1] !== res[i + j - 1]
            ) {
                IL[i][j] = IL[i - 1][j]
            } else if (
                s1[i - 1] !== res[i + j - 1] &&
                s2[j - 1] === res[i + j - 1]
            ) {
                IL[i][j] = IL[i][j - 1]
            } else if (
                s1[i - 1] === res[i + j - 1] &&
                s2[j - 1] === res[i + j - 1]
            ) {
                IL[i][j] = IL[i][j - 1] || IL[i - 1][j]
            }
        }
    }

    console.log(IL)

    return IL[s1.length][s2.length]
}

console.log(isInterleavedDP('what', 'iswu', 'iswwhatu'))
