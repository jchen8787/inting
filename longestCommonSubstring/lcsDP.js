function lcsDP(s1, s2) {
    // iniialize dp grid
    const dp = []

    for (let i = 0; i < s1.length + 1; i++) {
        dp.push([])
    }

    for (let i = 0; i < s1.length + 1; i++) {
        for (let j = 0; j < s2.length + 1; j++) {
            // if one is empty string lcs is empty string
            if (i === 0 || j === 0) {
                dp[i][j] = ''

                continue
            }

            const maxPrevString =
                dp[i-1][j].length > dp[i][j-1].length
                    ? dp[i-1][j]
                    : dp[i][j-1]

            if (s1[i-1] === s2[j-1]) {
                dp[i][j] = maxPrevString + s2[j-1]
            } else {
                dp[i][j] = maxPrevString
            }
        }
    }

    console.log(dp)

    return dp[s1.length][s2.length]
}

console.log(lcsDP('whatsup', 'zywhasi'))
