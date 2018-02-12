function kangaroo(x1, v1, x2, v2) {
    var decision = null;

    if(x2 > x1 && v2 >= v1) {
        decision = "NO";
    }

    var jump1 = x1;
    var jump2 = x2;

    while(!decision) {
        jump1 +=  v1;
        jump2 +=  v2;

        if(jump1 === jump2) {
            decision = "YES";
        } else {
            if(v2 > v1) {
                if(jump2 > jump1) {
                    decision = "NO";
                } else {
                    continue;
                }
            } else {
                if(jump1 > jump2) {
                    decision = "NO";
                } else {
                    continue;
                }
            }
        }
        
    }
    return decision;

}

console.log(kangaroo(
    0, 17, 2, 6
    // 0, 4, 0, 2
));