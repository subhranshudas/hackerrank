function timeConversion(s) {
    let [hours, mins, secondsWithPeriod ] = s.split(':');
    let seconds = secondsWithPeriod.slice(0, 2);
    let period = secondsWithPeriod.slice(-2);

    hours *= 1;
    
    if(period === 'PM') {
        if(hours !== 12) {
            hours = hours + 12;
        }
    } else {
        if(hours === 12) {
            hours = hours - 12;
        }
    }

    hours = hours >= 12 ? hours : '0' + hours;
   
    return `${hours}:${mins}:${seconds}`;

}


// console.log(timeConversion('07:05:45AM'))
// console.log(timeConversion('07:05:45PM'))
// console.log(timeConversion('12:05:45PM'))
// console.log(timeConversion('12:05:45AM'))

console.log(timeConversion('06:05:45AM'))