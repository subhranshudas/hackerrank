function camelcase(s) {
    if(!s.trim()) return 0
    
    var isUpperCase = function(str, counter) {
       return str.charCodeAt(counter) > 64 && str.charCodeAt(counter) < 91
    }

    var words = 0;
    var counter = 0;
    while(counter < s.length){
      if(isUpperCase(s, counter)) {
        if(counter === 0) {
            return words;
        }
        ++words;
      }
      ++counter;
    }
    return words + 1;
}

console.log(camelcase('sult'));