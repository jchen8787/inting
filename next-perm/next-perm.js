const swap = (i, j, array) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const reverse = (start, end, array) => {
    let i = start
    let j = end

    while (i < j) {
        swap(i, j, array)
        i++
        j--
    }
}

const nextPermutation = (num) => {
    const digitArray = num.toString().split("").map((digit) => +digit)

    let swapIndex = null

    for (let i = digitArray.length - 2; i > 0; i--) {
        if (digitArray[i] < digitArray[i+1]) {
            swapIndex = i
            break
        }
    }

    for (let i = digitArray.length - 1; i > 0; i--) {
        if (digitArray[i] > digitArray[swapIndex]) {
            swap(i, swapIndex, digitArray)
            break
        }
    }

    reverse(swapIndex + 1, digitArray.length - 1, digitArray)

    console.log(digitArray)
}

nextPermutation(123)
nextPermutation(947521)
