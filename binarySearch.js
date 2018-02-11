let computatations = 0;
/**
 * our implemenatation of binary search algo
 * @param {*} list 
 * @param {*} target 
 * @param {*} left 
 * @param {*} right 
 */
const binarySearch = (list, target, left, right) => {
    const mid = Math.ceil((left + right)/2);

    computatations++;

    // if(computatations > 8) process.kill();

    const stats = `
    /////////////////////////////////
        list: ${list}
        left: ${left}
        right: ${right}
        mid: ${mid}
        ${target} === ${list[mid]}
        computation: ${computatations}
    `;
    console.log(stats);

    if (left > right) {
        return -1; // doesn't exist
    }

    if (target === list[mid]) {
        console.log('matches');
        return mid;
    } else if (target < list[mid]) {
        console.log('less than');
        return binarySearch(list, target, left, mid - 1);
    } else {
        console.log('more than');
        return binarySearch(list, target, mid + 1, right);
    }
}





/**
 * Public interface to use BS
 * @param {*} arr 
 * @param {*} target 
 */
const findElement = (arr, target) => {
    return binarySearch(arr, target, 0, arr.length - 1);
}


const list = [1, 2, 3, 4, 5, 6];

console.log(findElement(list, 1));