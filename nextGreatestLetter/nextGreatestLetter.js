/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let minPosDiff = Number.MAX_SAFE_INTEGER
    let maxNegDiff = 0
    
    const targetVal = target.charCodeAt()
    
    for (let i = 0; i < letters.length; i++) {
        const curVal = letters[i].charCodeAt()
        
        const diff = curVal - targetVal
        
        if (diff > 0) {
            if (diff < minPosDiff) {
                minPosDiff = diff
            }
        } else if (diff < 0) {
            if (diff < maxNegDiff) {
                maxNegDiff = diff
            }
        }
    }
    
    if (minPosDiff !== Number.MAX_SAFE_INTEGER) {
        return String.fromCharCode(targetVal + minPosDiff)
    }
    
    return String.fromCharCode(targetVal + maxNegDiff)
};

console.log(nextGreatestLetter(["c","f","j"], 'a'))


const nextGreatLetterBinarySearch = (letters, target) => {
    const targetVal = target.charCodeAt()

    let low = 0
    let high = letters.length

    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2)

        if (letters[middle].charCodeAt() <= targetVal) {
            low = middle + 1
        } else {
            high = middle
        }
    }

    return letters[low % letters.length]
}

console.log(nextGreatLetterBinarySearch(["c","f","j"], 'j'))
