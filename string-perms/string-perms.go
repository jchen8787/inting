package main

import (
	"fmt"
)

func stringPerms(prefix, input string) {
	n := len(input)
	if n == 0 {
		fmt.Println(prefix)
		return
	}

	for i := 0; i < n; i++ {
		stringPerms(
			prefix+string(input[i]),
			input[0:i]+input[i+1:n],
		)
	}
}

func main() {
	input := "abcd"
	stringPerms("", input)
}
