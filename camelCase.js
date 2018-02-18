function camelcase(s) {
    if(!s.trim()) return 0
 
    var words = 0;
    var counter = 0;
    while(counter < s.length){
      if(s.charCodeAt(counter) > 64 && s.charCodeAt(counter) < 91) {
        ++words;
      }
      ++counter;
    }
    return words + 1;
}

console.log(camelcase('checkResult'));