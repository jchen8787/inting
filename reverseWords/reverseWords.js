function reverseWords(s) {
    let start = 0
    let end = 0

    let resArray = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            end++
        } else {
            end > start && resArray.unshift(s.slice(start, end))

            start = i + 1
            end = i + 1
        }
    }

    end > start && resArray.unshift(s.slice(start, end))

    return resArray.join(' ')
}

console.log(reverseWords('hello what is up'))
console.log(
    reverseWords(
        '  The   join() method creates and returns a  new string by concatenating all of the elements... ',
    ),
)
