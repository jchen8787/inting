/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let k = 0
    
    let posTarget = Math.abs(target)
    
    while(posTarget > 0) {
        k++
        posTarget -= k
    }
    
    if (posTarget % 2 === 0) {
        return k
    }

    return k % 2 === 0 ? k + 1 : k + 2
};

console.log(reachNumber(8888))