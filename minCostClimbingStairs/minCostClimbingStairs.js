/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {    
    let prevTotalCost = 0
    let prevPrevTotalCost = 0
    
    for (let i = 0; i < cost.length; i++) {
        const curTotalCost = cost[i] + Math.min(prevTotalCost, prevPrevTotalCost)

        prevPrevTotalCost = prevTotalCost
        prevTotalCost = curTotalCost
    }
    
    return Math.min(prevTotalCost, prevPrevTotalCost)
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

const minCostFinishingOnEachStair = (cost) => {
    const totalCost = []

    let prevTotalCost = 0
    let prevPrevTotalCost = 0
    
    for (let i = 0; i < cost.length; i++) {
        const curTotalCost = cost[i] + Math.min(prevTotalCost, prevPrevTotalCost)
        totalCost.push(curTotalCost)

        prevPrevTotalCost = prevTotalCost
        prevTotalCost = curTotalCost
    }
    
    console.log(totalCost)

    return Math.min(prevTotalCost, prevPrevTotalCost)    
}

console.log(minCostFinishingOnEachStair([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
