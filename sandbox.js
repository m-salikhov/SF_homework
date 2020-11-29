'use strict';

// const myPromise = new Promise((resolve, reject) => {
//   if (1) {
//     resolve('Успешное выполнение promise');
//   } else {
//     reject('Неуспешное выполнение promise');
//   }
// });
// Функция выполнения promise
// function usePromise() {
//   // Создаем promise
//   const myPromise = new Promise((resolve, reject) => {
//     console.log('1');
//     setTimeout(() => {
//       console.log('2');
//       resolve('Успешное выполнение promise');
//     }, 4000);
//     console.log('3');
//   });

//   console.log('4');
//   // Выполняем promise
//   myPromise
//     .then((result) => {
//       console.log('Обрабатываем resolve', result);
//     })
//     .catch((error) => {
//       console.log('Обрабатываем reject', error);
//     })
//     .finally(() => {
//       console.log('Выполняется всегда');
//     });

//   console.log('5');
// }

// console.log('Запускаем функцию с promise');
// usePromise();
// console.log('Функция выполнилась');
fetch('https://picsum.photos/v2/list?page=1&limit=10')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[3].author);
  });

console.log(localStorage);
// localStorage.clear();
// console.log(localStorage.getItem('res'));
