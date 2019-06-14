function countPrimeSetBits(L, R) {
    let count = 0

    for (let i = L; i <= R; i++) {
        const iBinaryString = i.toString(2)
        const num1s = iBinaryString.split('1').length - 1

        isPrime(num1s)
            ? count++
            : null
    }

    return count
}

function isPrime(n) {
    if (n <= 1) {
        return false
    }

    if (n === 2) {
        return true
    }

    const maxPrime = Math.floor(Math.sqrt(n))

    for (let i = 2; i <= maxPrime; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

const res = countPrimeSetBits(842, 867)
console.log(res)
