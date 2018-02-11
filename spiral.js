const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let row = 0
let col = 0
let rows = matrix.length
let cols = matrix[0].length
let traversalMatrix = matrix.map(row => row.map(item => false))
let spiralMatrix = []
let direction = 'right' // default direction to start with

let counter = 0

console.log(`
    INPUTS: 
    matrix: ${JSON.stringify(matrix)}
    rows: ${rows}
    cols: ${cols}
`);


const traversalStillLeft = matrix => {
    const boolReducer = (boolVal, item) => boolVal && item
    return matrix.map(rows => rows.reduce(boolReducer, true))
        .reduce(boolReducer, true)
}

while(!traversalStillLeft(traversalMatrix)) {
    switch(direction) {
        case 'right': 
            if((col < cols) && !traversalMatrix[row][col]) {
                traversalMatrix[row][col] = true
                spiralMatrix.push(matrix[row][col])
                ++col
            } else {
                direction = 'down';
                --col // to offset
                ++row
            }
            break
        case 'down': 
            if((row < rows) && !traversalMatrix[row][col]) {
                traversalMatrix[row][col] = true
                spiralMatrix.push(matrix[row][col])
                ++row
            } else {
                direction = 'left'
                --row // to offset
                --col
            }
            break
        case 'left': 
            if(col >= 0 && !traversalMatrix[row][col]) {
                traversalMatrix[row][col] = true
                spiralMatrix.push(matrix[row][col])
                --col
            } else {
                direction = 'up'
                ++col // to offset
                --row
            }
            break
        case 'up': 
            if(row >= 0 && !traversalMatrix[row][col]) {
                traversalMatrix[row][col] = true
                spiralMatrix.push(matrix[row][col])
                --row
            } else {
                direction = 'right'
                ++row
                ++col
            }
            break
    }
}

console.log(`OUTPUT
    [${spiralMatrix}]
`);
