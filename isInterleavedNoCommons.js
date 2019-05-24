function isInterleaved(s1, s2, res) {
    let i = 0
    let j = 0
    let k = 0

    while (k < res.length) {
        if (res[k] === s1[i]) {
            i++
        } else if (res[k] === s2[j]) {
            j++
        } else {
            return false
        }

        k++
    }

    if (i !== s1.length || j !== s2.length) {
        return false
    }

    return true
}

console.log(isInterleaved('what', 'isup', 'iswhupat'))
