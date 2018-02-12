function solve(grades){
    return grades.map(function(grade){
        if((grade >= 38) && (grade % 5) >= 3) {
            return Math.ceil(grade/5) * 5;
        }
        return grade;
    })
}


console.log(solve([43, 81, 74, 37, 42]));