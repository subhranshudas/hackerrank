const list = [3,5,7,1,4,9];

function basicSort(list) {
    for(let i = 0; i < list.length; i++) {
        for(let j = i+1; j< list.length - 1; j++) {
            console.log(list);
            if(list[i] > list[j]) {
                var swap = list[j];
                list[j] = list[i];
                list[i] = swap;
            }
        } 
    }

    return list;
}

function mapArgs() {
    return [].map.call(arguments, list => list.split(','))
        .reduce((prevList, currList) => [...prevList, ...currList], []);
}

console.log(mapArgs(
    '1,2,3',
    '5,6,8',
    '9,2,1'
));

// console.log(basicSort(list));