/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const N = s.length
    const palindromes = []
    
    for (let i = 0; i < 2 * N - 1; i++) {
        let left = Math.trunc(i / 2)
        let right = left + i % 2
    
        while (
            left >= 0
            && right < N
            && s[left] === s[right]
        ) {
            palindromes.push(s.substring(left, right + 1))
            
            left--
            right++
        }
    }
    
    return palindromes
};

const res = countSubstrings('racecar')
console.log(res)