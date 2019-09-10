var new21Game = function(N, K, W) {
    const dp = []

    for (let i = 0; i <= N + W; i++) {
        dp.push(0.0)
    }

    for (let i = K; i <= N; i++) {
        dp[i] = 1.0
    }

    S = Math.min(N - K + 1, W)

    for (let i = K-1; i >= 0; i--) {
        dp[i] = (1/W) * S
        S += dp[i] - dp[i + W]
    }

    return dp[0]
};

console.log(new21Game(10, 1, 10))
