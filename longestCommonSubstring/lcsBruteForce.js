function lcsBruteForce(s1, s2) {
    let longestCommonSubstring = ''

    for (let i = 0; i < s1.length; i++) {
        for (let j = i + 1; j < s1.length + 1; j++) {
            const s1Sub = s1.slice(i, j)

            for (let k = 0; k < s2.length; k++) {
                const s2Sub = s2.slice(k, k + s1Sub.length)

                if (s2Sub === s1Sub) {
                    if (s2Sub.length > longestCommonSubstring.length) {
                        longestCommonSubstring = s2Sub
                    }
                }
            }
        }
    }

    return longestCommonSubstring
}

console.log(lcsBruteForce('hellowhatisupyo', 'asdoivweatisufbfgbf'))
