function lcsDP(s1, s2) {
    // iniialize dp grid
    const dp = []

    for (let i = 0; i < s1.length + 1; i++) {
        dp.push([])
    }

    for (let row of dp) {
        for (let j = 0; j < s2.length + 1; j++) {
            row.push('')
        }
    }

    // if s1 is empty lcs is empty string
    for (let j = 0; j < s2.length + 1; j++) {
        dp[0][j] = ''
    }

    // if s2 is empty lcs is empty string
    for (let i = 0; i < s1.length + 1; i++) {
        dp[i][0] = ''
    }

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            const maxPrevString =
                dp[i][j + 1].length > dp[i + 1][j].length
                    ? dp[i][j + 1]
                    : dp[i + 1][j]

            if (s1[i] === s2[j]) {
                dp[i + 1][j + 1] = maxPrevString + s2[j]
            } else {
                dp[i + 1][j + 1] = maxPrevString
            }
        }
    }

    console.log(dp)

    return dp[s1.length][s2.length]
}

console.log(lcsDP('whatsup', 'zyhatsi'))
