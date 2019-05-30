const memoCache = {}

function isInterleavedMemo(s1, s2, res) {
    if (s1.length === 0 && s2.length === 0 && res.length === 0) {
        return true
    }

    if (res.length === 0 && (s1.length !== 0 || s2.length !== 0)) {
        return false
    }

    const res =
        (s1[0] === res[0] && isInterleaved(s1.slice(1), s2, res.slice(1))) ||
        (s2[0] === res[0] && isInterleaved(s1, s2.slice(1), res.slice(1)))

    memoCache[s1]

    return res
}

console.log(isInterleavedMemo('what', 'iswu', 'iswwhatu'))
