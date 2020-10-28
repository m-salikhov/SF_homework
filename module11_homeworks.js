'use strict'

// задание 11.1

let randomArr = [33, -100, 'apple', 0, 3.4, 4, null, 117, '11', true, 1024,'', NaN, [2, 5], 56, 13, -Infinity, 0, false];

function printAmountNumbers(arr) {
    let amountZeros = 0;
    let amountEvenNumber = 0;
    let amountOddNumber = 0;
    for (let i = 0; i < randomArr.length; i++) {
        if (Number.isInteger(arr[i])) {
            if (randomArr[i] === 0) amountZeros++;
            else (arr[i] % 2 == 0) ? amountEvenNumber++ : amountOddNumber++;
        }
    }
    console.log(amountZeros);
    console.log(amountEvenNumber);
    console.log(amountOddNumber);
}

printAmountNumbers(randomArr);


// задание 11.2

function checkPrimeNum (a) {
    if ( a < 0 || a > 1000 || !Number.isInteger(a)) return console.log('данные не верны');
    else if (a == 0 || a == 1) return console.log(`${a} - не является простым числом`);
    for (let i = 2; i < a; i++ ) {
        if (a % i == 0) return console.log(`${a} - составное число`);
        else return console.log(`${a} - простое число`);
    }
}

checkPrimeNum(444);
checkPrimeNum(1.5);
checkPrimeNum(1);
checkPrimeNum(37);


// задание 11.3

function getSumFunc (a) {
    return function getSum(a, b) {
        return a + b;
    }
}
let getSumRes = getSumFunc();

console.log(getSumRes(15, 20));


// Задание 11.4

function printNumbersInt(from, to) {
    let i = from;

    let timerId = setInterval(function() {
    console.log(i);
    if (i == to) {
        clearInterval(timerId);
    }
    i++;
    }, 1000);
}

printNumbersInt(5, 15);

// задание 11.5

let getNumberDeegree = (x, n) => { 
    if (x > 0 && n > 0 && Number.isInteger(x) && Number.isInteger(n)) return x ** n;
    else console.log('данные не верны');
}

console.log(getNumberDeegree(11, 3));