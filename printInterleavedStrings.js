function printInterleavedStrings(s1, s2) {
    interleavedRecursion(s1, s2, '', s1.length, s2.length, 0)
}

function interleavedRecursion(s1, s2, res, m, n) {
    if (m === 0 && n === 0) {
        console.log(res)
    }

    if (m !== 0) {
        interleavedRecursion(s1.slice(1), s2, res + s1[0], m - 1, n)
    }

    if (n !== 0) {
        interleavedRecursion(s1, s2.slice(1), res + s2[0], m, n - 1)
    }
}

// printInterleavedStrings('what', 'isup')
printInterleavedStrings('ab', 'cd')
