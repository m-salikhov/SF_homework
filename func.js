'use strict'

// let arr5 = [3, 4, -6, 10, 'string', 8, 99];
// let amNum = 0;
// arr.forEach((item, index, array) => {
//     if (typeof(item) == 'number') {
//         amNum++;
//         console.log(`index of item is ${index} in arr`);
//     } else {
//         console.log(item);
//     };
// });

// console.log(amNum);

// let multi2 = arr5.map(function(item) {
//     if (typeof(item) == 'number' ) {
//         item*2;
//         return item;
//     } else {
//         return item;
//     }
// });
// console.log(multi2);

// let arr1 = [5, 5,'', 5, 5, 5, 5];

// function equalCheck(item) {
//     return item === arr1[0];
// }
// console.log(arr1.every(equalCheck));

// console.log(arr1.every(item => arr1[0] === item));

// let numbersUnder5 = arr.filter(item => item < 10);
// console.log(numbersUnder5);

// function oddIn (item,index) {
//     if (index % 2 !== 0) {
//         return item;
//     }
// }
// console.log(arr5.filter(oddIn));

// let arr2 = [3, -5, 10, 2];

// let result = arr2.reduce((value,item) => value * item, 2);
// let result2 = arr2.reduce((value,item) => value * item);
// console.log(result);
// console.log(result2);

// Проверка является ли объект массивом
// console.log(Array.isArray(arr5));

// let arr3 = [3, 3, 3, 3];

// function equalCheck(item) {
//     return item === arr3[0];
// }
// console.log(arr3.every(equalCheck));

// console.log(arr3.every(item => arr3[0] === item));

// function mul(a, b) {
//     a === b;
// }
// let c = mul(5,5);
// console.log(c);
// без return эта ф-я выдаст underfined

// function func1 (a,b) {
//     return a + b;
// }

// console.log(func1(5, 10));

// let func1Res = func1(3,5);
// console.log(func1Res);

  // функция, которую будем передавать как аргумент в функцию example
// function argFunc(a, b){
//     return a + b;
// }

// function example(item){
//     // console.log(func);
//     return item * 100;
// }

// console.log(example(argFunc(2, 4)));

// let x = example(argFunc(3, 5));
// console.log(x);

// let sum = function() {
//     console.log(5 + 10);
// }

// sum();


// const arraySparse = [1,3,,7]
// let numCallbackRuns = 0

// arraySparse.forEach((element) => {
//   console.log(element)
//   numCallbackRuns++
// })

// console.log("numCallbackRuns: ", numCallbackRuns)

// console.log(arraySparse);

// function sum1(a, b) {

//     console.log(a + b);
  
//   }
  
  
//    setTimeout(sum1, 3000, 1, 2); // задержка 3 секунда

// const array1 = ['a', 'b', 'c'];

// array1.forEach(function(item, index) {
//   if (index %2 == 0) console.log(item + ' - элемент с чётным индексом');
//   else console.log(item + ' - элемент с нечётным индексом');
// })


// let randomArr = [33, -100, 'apple', 0, 3.4, 4, null, 117, '11', true, 1024,'', NaN, [2, 5], 56, 13, -Infinity, 0, false];

// function getAmountNumbers(arr) {
//     let amountEvenNumber = 0;
//     let amountOddNumber = 0;
//     let amountZeros = 0;
//     for (let i = 0; i < randomArr.length; i++) {
//         if (Number.isInteger(arr[i])) {
//             if (randomArr[i] === 0) amountZeros++;
//             else (arr[i] % 2 == 0) ? amountEvenNumber++ : amountOddNumber++;
//         }
//     }
//     console.log(amountEvenNumber);
//     console.log(amountOddNumber);
//     console.log(amountZeros);
// }

// getAmountNumbers(randomArr);

// function checkPrimeNum (a) {
//     if ( a < 0 || a > 1000 || !Number.isInteger(a)) return console.log('данные не верны');
//     else if (a == 0 || a == 1) return console.log(`${a} - не является простым числом`);
//     for (let i =2; i < a; i++ ) {
//         if (a % i == 0) return console.log(`${a} - составное число`);
//         else return console.log(`${a} - простое число`)
//     }

// }

// checkPrimeNum(1000);
// checkPrimeNum(1.5);
// checkPrimeNum(1);
// checkPrimeNum(37);


// function printNumbers(from, to) {
//     let i = from;

//     let timerId = setInterval(function() {
//     console.log(i);
//     if (i == to) {
//         clearInterval(timerId);
//     }
//     i++;
//     }, 1000);
// }

// printNumbers(5, 15);

// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

// let getNumberDeegree = (x, n) => { 
//     if (x > 0 && n > 0 && Number.isInteger(x) && Number.isInteger(n)) console.log(x ** n)
//     else console.log('данные не верны');
// }

// getNumberDeegree(10.3, 3);