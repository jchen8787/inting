function printFibonacci(n) {
    if (n === 0 || n === 1) {
        console.log(1)
    }

    console.log(printFibonacci(n - 1) + printFibonacci(n - 2))
}

printFibonacci(5)
