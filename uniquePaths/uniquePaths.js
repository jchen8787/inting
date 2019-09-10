function uniquePathsTopDown(m, n) {
    const memo = []

    for (let i = 0; i < n; i++) {
        const row = []

        for (let j = 0; j < m; j++) {
            row.push(null)
        }

        memo.push(row)
    }

    function dp(nCols, nRows) {
        if (memo[nRows - 1][nCols-1]) {
            return memo[nRows - 1][nCols-1]
        }

        let ans

        if (nCols === 1 || nRows === 1) {
            ans = 1
        } else {
            ans = dp(nCols - 1, nRows) + dp(nCols, nRows - 1)
        }

        memo[nRows - 1][nCols-1] = ans
        return ans
    }

    const res = dp(m, n)
    console.log(memo)

    return res
}

console.log(uniquePathsTopDown(7, 4))


function uniquePathsBottomUp(m, n) {
    const dp = []

    for (let i = 0; i < n; i++) {
        const row = []

        for (let j = 0; j < m; j++) {
            row.push(null)
        }

        dp.push(row)
    }

    for (let i = 0; i < m; i++) {
        dp[0][i] = 1
    }

    for (let j = 0; j < n; j++) {
        dp[j][0] = 1
    }

    for (let j = 1; j < n; j++) {
        for (i = 1; i < m; i++) {
            dp[j][i] = dp[j - 1][i] + dp[j][i - 1]
        }
    }

    console.log(dp)

    return dp[n - 1][m - 1]
}

console.log(uniquePathsBottomUp(7, 4))
