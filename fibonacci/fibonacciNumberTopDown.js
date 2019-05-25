const fibCache = {}

function fibonacciNumberTopDown(n) {
    if (n === 0 || n === 1) {
        return 1
    }

    if (Object.keys(fibCache).includes(String(n))) {
        // console.log(`n, fib(n): ${n}, ${fibCache[n]}`)
        return fibCache[n]
    }

    const res = fibonacciNumberTopDown(n - 1) + fibonacciNumberTopDown(n - 2)
    fibCache[n] = res

    return res
}

const res = fibonacciNumberTopDown(25)
console.log('fibCache', fibCache)
console.log(res)
