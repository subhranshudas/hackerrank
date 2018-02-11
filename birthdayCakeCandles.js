function birthdayCakeCandles(n, ar) {
    // Complete this function
    
    var maxHeight = 0;
    var numberOfCandlesWithMaxHeight = 0;
    
    for(var i = 0; i < n; i++) {
       if(ar[i] > maxHeight) {
           maxHeight = ar[i];
       } 
       
    }
    
    for(var i = 0; i < n; i++) {    
        if(ar[i] === maxHeight) {
            ++numberOfCandlesWithMaxHeight;
        }
    }
    
    return numberOfCandlesWithMaxHeight;
    
}


console.log(birthdayCakeCandles(5, [1, 5, 7, 5, 2]));