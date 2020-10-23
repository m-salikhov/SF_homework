'use strict'

let arr = [3, 4, -6, 10, 'string', 8, 99];
let amNum = 0;
arr.forEach((item, index, array) => {
    if (typeof(item) == 'number') {
        amNum++;
        console.log(`index of item is ${index} in arr`);
    } else {
        console.log(item);
    };
});

console.log(amNum);

let multi2 = arr.map(function(item) {
    if (typeof(item) == 'number' ) {
        item*2;
        return item;
    } else {
        return item;
    }
});
console.log(multi2);

let arr1 = [5, 5,'', 5, 5, 5, 5];

// function equalCheck(item) {
//     return item === arr1[0];
// }
// console.log(arr1.every(equalCheck));

console.log(arr1.every(item => arr1[0] === item));
