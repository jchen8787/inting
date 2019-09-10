const getNextMoves = (zeroIndex) => {
    const row = zeroIndex / 3
    const col = zeroIndex % 3

    const result = []

    if (row > 0) {
        result.push({
            direction: 'U',
            newZeroIndex: zeroIndex - 3,
        })
    }

    if (row < 2) {
        result.push({
            direction: 'D',
            newZeroIndex: zeroIndex + 3,
        })
    }

    if (col > 0) {
        result.push({
            direction: 'L',
            newZeroIndex: zeroIndex - 1,
        })
    }

    if (col < 2) {
        result.push({
            direction: 'R',
            newZeroIndex: zeroIndex + 1,
        })
    }

    return result
}

const solveSlidingPuzzle = (initialBoard) => {
    const moveHistory = []
    const visited = [JSON.stringify(initialBoard)]

    const queue = [
        {
            board: initialBoard,
            previousMove: null,
        },
    ]

    while (queue.length > 0) {
        const cur = queue.shift()
        console.log(cur)
        if (cur.previousMove !== null) {
            moveHistory.push(cur.previousMove)
        }

        if (JSON.stringify(cur.board) === "[1,2,3,4,5,6,7,8,0]") {
            return moveHistory
        }

        const zeroIndex = cur.board.findIndex((e) => { return (e === 0) })
        const nextMoves = getNextMoves(zeroIndex)
        nextMoves.forEach((move) => {
            const newBoard = JSON.parse(JSON.stringify(cur.board))
            newBoard[zeroIndex] = newBoard[move.newZeroIndex]
            newBoard[move.newZeroIndex] = 0

            if (!visited.includes(JSON.stringify(newBoard))) {
                visited.push(JSON.stringify(newBoard))
                queue.unshift({
                    board: newBoard,
                    previousMove: move.direction,
                })
            }
        })
    }

    return 'UNSOLVABLE'
}

// const board = [6, 2, 8, 7, 3, 5, 1, 4, 0]
// const board = [1, 2, 3, 4, 5, 6, 7, 0, 8]
// const board = [1, 2, 3, 4, 5, 6, 0, 7, 8]
const board = [1, 2, 3, 0, 5, 6, 4, 7, 8]
const solution = solveSlidingPuzzle(board)
console.log(solution)
