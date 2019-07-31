/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFillDFS = function(image, sr, sc, newColor) {
    const color = image[sr][sc]
    
    if (color === newColor) {
        return image
    }
    
    const numRows = image.length
    const numCols = image[0].length
    
    const dfs = (tr, tc) => {
        if (image[tr][tc] === color) {
            image[tr][tc] = newColor
            
            if (tr + 1 <= numRows - 1) {
                dfs(tr + 1, tc)
            }
            
            if (tr - 1 >= 0) {
                dfs(tr - 1, tc)
            }
            
            if (tc + 1 <= numCols - 1) {
                dfs(tr, tc + 1)
            }
            
            if (tc - 1 >= 0) {
                dfs(tr, tc - 1)
            }
        }
    }
    
    dfs(sr, sc)
    
    return image
};

const floodFillIterative = (image, sr, sc, newColor) => {
    const color = image[sr][sc]
    
    if (color === newColor) {
        return image
    }
    
    const numRows = image.length
    const numCols = image[0].length

    const stack = []
    stack.push([sr, sc])

    while(stack.length > 0) {
        const cur = stack.pop()
        
        if (image[cur[0]][cur[1]] === color) {
            image[cur[0]][cur[1]] = newColor

            if (cur[0] + 1 <= numRows - 1) {
                stack.push([cur[0] + 1, cur[1]])
            }

            if (cur[0] - 1 >= 0) {
                stack.push([cur[0] - 1, cur[1]])
            }

            if (cur[1] + 1 <= numCols - 1) {
                stack.push([cur[0], cur[1] + 1])
            }

            if (cur[1] - 1 >= 0) {
                stack.push([cur[0], cur[1] - 1])
            }
        }
    }

    return image
}

const image = [[1,1,1],[1,1,0],[1,0,1]]

// floodFillDFS(image, 1, 1, 2)
floodFillIterative(image, 1, 1, 2)

console.log(image)