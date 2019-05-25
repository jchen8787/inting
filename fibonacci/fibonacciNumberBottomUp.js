function fibonacciNumberBottomUp(n) {
    const dp = []
    // fib(0) === 1
    dp.push(1)

    // fib(1) === 1
    dp.push(1)

    while (dp.length < n) {
        dp.push(dp[dp.length - 1] + dp[dp.length - 2])
    }

    console.log('dp', dp)

    return dp[dp.length - 1] + dp[dp.length - 2]
}

const res = fibonacciNumberBottomUp(25)
console.log(res)
