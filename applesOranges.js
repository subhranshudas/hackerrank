function countApplesAndOranges(s, t, a, b, apples, oranges) {
    function calculateTotal(fruit, origin) {
        return fruit.reduce(function(total, distance){
            if((origin + distance) >= s && (origin + distance) <= t ) {
                total += 1;
            }
            return total;
        }, 0)
    }

    console.log(calculateTotal(apples, a));
    console.log(calculateTotal(oranges, b));
}


countApplesAndOranges(
    7, 11,
    5, 15,
    // 3, 2,
    [-2, 2, 1],
    [5, 6]
);