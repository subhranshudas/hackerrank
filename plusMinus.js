function plusMinus(arr) {
   var plus = 0;
   var minus = 0;
   var zero = 0;
   var total = arr.length;

    for(var i = 0; i < total; i++){
        
        if(arr[i] > 0) {
            plus = plus + 1;
        } else if(arr[i] < 0) {
            minus = minus + 1;
        } else {
            zero = zero + 1;
        }
    }
    var output = [(plus/total).toFixed(6), (minus/total).toFixed(6), (zero/total).toFixed(6)].join('\n');

    console.log(output)
}

plusMinus([
    1, 5, -2, 0, 7, -3, 0, 1, 0
]);
