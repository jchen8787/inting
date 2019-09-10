package main

import (
    "fmt"
)

func nextPermutation(nums []int)  {
    i := len(nums) - 2
    for i >= 0 && nums[i] >= nums[i+1] {
        i--
    }

    if i == -1 {
        reverse(&nums, 0)
        return
    }

    j := len(nums) - 1
    for nums[j] <= nums[i] {
        j--
    }

    nums[i], nums[j] = nums[j], nums[i]
    reverse(&nums, i+1)
    fmt.Println(nums)
}

func reverse(nums *[]int, start int) {
    i, j := start, len(*nums)-1
    for i < j {
        (*nums)[i], (*nums)[j] = (*nums)[j], (*nums)[i]
        i++
        j--
    }
}

func main() {
    nums := []int{1, 5, 8, 4, 7, 6, 5, 3, 1}
    nextPermutation(nums)
}
