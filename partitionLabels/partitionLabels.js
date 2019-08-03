/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const last = {}
    
    for (let i = 0; i < S.length; i++) {
        last[S[i]] = i
    }
    
    const res = []
    
    let [start, end] = [0, 0]
    
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last[S[i]])
        
        if (i === end) {
            res.push(end - start + 1)
            start = end + 1
        }
    }
    
    return res
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))