'use strict'

// задание 11.1

let randomArr = [33, -100, 'apple', 0, 3.4, 4, null, 117, true, 1024,'', NaN, [2, 5], 56, 13, -Infinity, 0, false];

function checkEqual(arr) {
    let amountEvenNumber = 0;
    let amountOddNumber = 0;
    let amountZeros = 0;
    for (let i = 0; i < randomArr.length; i++) {
        if (arr[i] === 0) {
            amountZeros++;
        } else if (typeof(arr[i]) !== 'number' || isNaN(arr[i]) || !Number.isInteger(arr[i])) {
        } else if (arr[i] % 2 == 0) {
            amountEvenNumber++;
        } else if (arr[i] % 2 !== 0) {
            amountOddNumber++;
        }
    }
console.log(amountEvenNumber);
console.log(amountOddNumber);
console.log(amountZeros);
}

checkEqual(randomArr);



