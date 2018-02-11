function staircase(n) {
    var printTrace = '';

    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if(i+j >= n - 1) {
                printTrace += '#'
            } else {
                printTrace += ' '
            }
        }
        printTrace += '\n'
    }
    console.log(printTrace);
}

staircase(7);