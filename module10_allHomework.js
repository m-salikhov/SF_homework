'use strict'


// Задание 10.1


// let anyNum = prompt('Введите целое число');

// console.log(typeof(anyNum));

// if (anyNum == '') {
//     console.log('пустая строка');
// } else if (isNaN(anyNum)) {
//     console.log('введено не число');
// } else if (!Number.isInteger(+anyNum)) {
//     console.log('введено дробное число');
// } else if (anyNum == null) {
//     console.log ('отмена');
// } else if (+anyNum % 2 == 0) {
//     console.log (anyNum + ' - четное число');
// } else if (+anyNum % 2 !== 0) {
//     console.log (anyNum + ' - нечетное число');
// }

// Вариант с логическим или

// let anyNum = prompt('Введите целое число');

// if (isNaN(anyNum) || anyNum == null || !Number.isInteger(+anyNum) || anyNum == '') {
//     console.log('целое число не введено');
// } else if (+anyNum % 2 == 0) {
//     console.log (anyNum + ' - четное число');
// } else if (+anyNum % 2 !== 0) {
//     console.log (anyNum + ' - нечетное число');
// }


// Задание 10.2


// let x = '5';

// if (typeof (x) == 'string') {
//     console.log('x - строка');
// } else if (isNaN(x)) {
//     console.log('тип х не определен');
// } else if (typeof (x) == 'number') {
//     console.log('x - число');
// } else if (typeof (x) == 'boolean') {
//     console.log('x - логический тип');
// } else {
//     console.log('тип x не определен');
// }


// Задание 10.3


// let anyStr = 'Hello world!';
// let anyStrSplit = anyStr.split(''); 
// anyStrSplit.reverse();
// let anyStrReverse = anyStrSplit.join('');
// console.log(anyStrReverse);


// Задание 10.4


// let randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);


// задание 10.5


// let userInfo = ['Maksim', 32, 'aquarius', 177, 81];
// console.log(userInfo.length);

// for (let i = 0; i < userInfo.length; i++) {
//     console.log(userInfo[i]);
// }


// задание 10.6


// let arr = [5, 5, 5, 5, 5, 5, 5];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[0] !== arr[i]) {
//         console.log (false);
//         break;
//     } else if (arr[0] === arr[i] && arr.length - 1 == i ) {
//         console.log (true);
//     }
// }  

// Вариант с методом every

// let arr1 = [5, 5, 5, '5'];

// function equalCheck(element) {
//     return element === arr1[0];
// }
// console.log(arr1.every(equalCheck));


// задание 10.7


// let randomArr = [33, -100, 'apple', 0, 3.4, 4, null, 117, true, 1024,'', NaN, [2, 5], 56, 13, -Infinity, 0, false];

// let amountEvenNumber = 0;
// let amountOddNumber = 0;
// let amountZeros = 0;

// for (let i = 0; i < randomArr.length; i++) {
//     if (randomArr[i] === 0) {
//         amountZeros++;
//     } else if (typeof(randomArr[i]) !== 'number' || isNaN(randomArr[i]) || !Number.isInteger(randomArr[i])) {
//     } else if (randomArr[i] % 2 == 0) {
//         amountEvenNumber++;
//     } else if (randomArr[i] % 2 !== 0) {
//         amountOddNumber++;
//     }
// }
// console.log(amountZeros);
// console.log(amountEvenNumber);
// console.log(amountOddNumber);


// Задание 10.8

// let randMap = new Map();

// randMap.set( 1, 'white')
//     .set('2', 2000)
//     .set(true, "boolean");

// randMap.forEach((value, key, map) => {
//     console.log(`Ключ - ${key}, зачение - ${value}`);
// });
