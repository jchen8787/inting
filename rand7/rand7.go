package main

import (
    "fmt"
    "math/rand"
    "time"
)

// random int from 1 to 5
func rand5() int {
    s1 := rand.NewSource(time.Now().UnixNano())
    r1 := rand.New(s1)

    rPercentage := r1.Float64()
    return int(rPercentage*5) + 1
}

func rand7() int {
    // random int from 1 to 25
    i := rand5()*5 + rand5() - 5

    if i >= 22 {
        return rand7()
    }

    // random int from 1 to 7
    return i%7 + 1
}

func main() {
    for i := 0; i < 20; i++ {
        fmt.Println(rand7())
    }
}
