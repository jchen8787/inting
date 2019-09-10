/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            const x = matrix[i][j]
            const y = matrix[j][n - 1 - i]
            const z = matrix[n - 1 - i][n - 1 - j]
            const w = matrix[n - 1 - j][i]

            matrix[i][j] = w
            matrix[j][n - 1 - i] = x
            matrix[n - 1 - i][n - 1 - j] = y
            matrix[n - 1 - j][i] = z
        }
    }
};

const img1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

rotate(img1)
console.log(img1)

const img2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]

rotate(img2)
console.log(img2)
