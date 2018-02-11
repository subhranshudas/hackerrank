function diagonalDifference(a) {
    var rows = cols = a.length;
    var sum1 = 0;
    var sum2 = 0;
    
    for(var i = 0; i < rows; i++){
        sum1 = sum1 + a[i][i];
        sum2 = sum2 + a[rows-i-1][i];
    }
    
    return Math.abs(sum1 - sum2)   
}

console.log(diagonalDifference([
    [1, 9, 2],
    [0, 10, 8],
    [0, 0, -10]
]));