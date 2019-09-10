package main

import (
    "fmt"
    "math"
)

func nextPerm(nums *[]int) {
    if len(*nums) < 2 {
        return
    }

    // find first descending number from right to left
    firstDescendingIdx := -1
    for i := len(*nums)-2; i >= 0; i-- {
        if (*nums)[i] < (*nums)[i+1] {
            firstDescendingIdx = i
            break
        }
    }

    // if firstDescendingIdx is still -1, nums is entirely descending which is the max permutation
    // reverse nums to make it entirely ascending, which is the min permutation
    if firstDescendingIdx == -1 {
        reverse(nums, 0, len(*nums)-1)
        return
    }

    // find smallest number that is greater than first descending number
    smallestGreater := math.MaxInt64
    var smallestGreaterIdx int
    for i := len(*nums)-1; i > firstDescendingIdx; i-- {
        if (*nums)[i] > (*nums)[firstDescendingIdx] {
            if (*nums)[i] < smallestGreater {
                smallestGreater = (*nums)[i]
                smallestGreaterIdx = i
            }
        }
    }

    // swap firstDescending and smallestGreater numbers
    (*nums)[firstDescendingIdx], (*nums)[smallestGreaterIdx] = (*nums)[smallestGreaterIdx], (*nums)[firstDescendingIdx]

    // numbers following firstDescending are descending, so reverse them to make ascending
    reverse(nums, firstDescendingIdx+1, len(*nums)-1)

    // nums is now the smallest permutation greater than the input
    return
}

// mutate nums slice
func reverse(nums *[]int, start int, end int) {
    swapLen := end - start + 1
    for i := 0; i < swapLen/2; i++ {
        (*nums)[start + i], (*nums)[end - i] = (*nums)[end - i], (*nums)[start + i]
    }
}

func main() {
    nums := []int{8, 6, 4, 2}
    fmt.Println(nums)

    nextPerm(&nums)
    fmt.Println(nums)
}
