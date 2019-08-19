/**
 * @param {number[]} T
 * @return {number[]}
 */
function dailyTemperaturesNextArray(T) {
    const res = []
    const next = []

    const minTemp = 30
    const maxTemp = 100

    for (let i = minTemp; i <= maxTemp; i++) {
        next[i] = Number.MAX_SAFE_INTEGER
    }

    for (let i = T.length - 1; i >= 0; i--) {
        let warmerIndex = Number.MAX_SAFE_INTEGER

        for (let j = T[i] + 1; j <= maxTemp; j++) {
            if (next[j] < warmerIndex) {
                warmerIndex = next[j]
            }
        }

        if (warmerIndex !== Number.MAX_SAFE_INTEGER) {
            res[i] = warmerIndex - i
        } else {
            res[i] = 0
        }

        next[T[i]] = i
    }

    return res
}

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperaturesStack = function(T) {
    const res = []
    const s = []
    
    for (let i in T) {
        res.push(0)
    }
    
    for (let i = T.length - 1; i >= 0; i--) {
        while (s.length >= 0 && T[i] >= T[s[s.length - 1]]) {
            s.pop()
        }
        
        if (s.length > 0) {
            res[i] = s[s.length - 1] - i
        }

        s.push(i)
    }
    
    return res
};

console.log('dailyTemperaturesNextArray')
console.log(dailyTemperaturesNextArray([40, 51, 53, 49, 49, 70, 41, 39, 88, 89]))
console.log(dailyTemperaturesNextArray([73,74,75,71,69,72,76,73]))

console.log('dailyTemperaturesStack')
console.log(dailyTemperaturesStack([40, 51, 53, 49, 49, 70, 41, 39, 88, 89]))
console.log(dailyTemperaturesStack([73,74,75,71,69,72,76,73]))
