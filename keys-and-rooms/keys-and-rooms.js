const rooms0 = [[1], [2], [3], []]
const rooms1 = [[1,3], [3,0,1], [2], [0]]

const keysAndRooms = (rooms) => {
    const visited = [0]
    const keys = [0]

    while (keys.length > 0) {
        const curRoom = keys.pop()

        const newKeys = rooms[curRoom]
        newKeys.forEach((nk) => {
            if (!visited.includes(nk)) {
                visited.push(nk)
                keys.push(nk)
            }

        })
    }

    return visited.length === rooms.length
}

console.log(keysAndRooms(rooms0))
console.log(keysAndRooms(rooms1))
