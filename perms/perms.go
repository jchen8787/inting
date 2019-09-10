package main

import (
	"fmt"
)

func permutations(prefix, input []int) {
	n := len(input)
	if n == 0 {
		fmt.Println(prefix)
		return
	}

	for i := 0; i < n; i++ {
		prefixCopy := make([]int, len(prefix))
		inputCopy := make([]int, len(input))

		copy(prefixCopy, prefix)
		copy(inputCopy, input)

		newPrefix := append(prefixCopy, inputCopy[i])
		newInput := append(inputCopy[0:i], inputCopy[i+1:n]...)

		permutations(
			newPrefix,
			newInput,
		)
	}
}

func main() {
	input := []int{1, 2, 3, 4}
	permutations([]int{}, input)
}
