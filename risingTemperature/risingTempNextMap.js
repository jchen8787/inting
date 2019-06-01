function risingTempNextMap(temps) {
    const res = []
    const next = []

    const minTemp = 30
    const maxTemp = 100

    for (let i = minTemp; i <= maxTemp; i++) {
        next[i] = Number.MAX_SAFE_INTEGER
    }

    for (let i = temps.length - 1; i >= 0; i--) {
        let warmerIndex = Number.MAX_SAFE_INTEGER

        for (let j = temps[i] + 1; j <= maxTemp; j++) {
            if (next[j] < warmerIndex) {
                warmerIndex = next[j]
            }
        }

        if (warmerIndex !== Number.MAX_SAFE_INTEGER) {
            res[i] = warmerIndex - i
        } else {
            res[i] = 0
        }

        next[temps[i]] = i
    }

    return res
}

console.log(risingTempNextMap([40, 51, 53, 49, 49, 70, 41, 39, 88, 89]))
