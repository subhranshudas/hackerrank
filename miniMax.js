function miniMaxSum(arr) {

   let sequences = []

   for(let i = 0; i < arr.length; i++) {
    let sequence = arr.slice();
    sequence.splice(i, 1);
    sequences.push(sequence);   
   }
   
   let sums = sequences.map(function(sequence){
        return sequence.reduce(function(total, current){
            return total + current;
        }, 0)
   }).sort();

   return sums[0] + ' ' + sums[sums.length - 1];
}

console.log(miniMaxSum([1, 5, 7, 3, 9]))