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
// fetch('https://picsum.photos/v2/list?page=1&limit=10')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[3].author);
//   });

// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage.getItem('res'));
const btn = document.querySelectorAll('.j-btn-test');

btn[0].addEventListener('click', () => {
  let icon = document.querySelector('.btn_icon');

  if (document.querySelector('.bi-arrow-down-left-circle')) {
    icon.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
</svg>`;
  } else {
    icon.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.828 5.172a.5.5 0 0 0-.707 0L6.025 9.268V6.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H9.5a.5.5 0 0 0 0-1H6.732l4.096-4.096a.5.5 0 0 0 0-.707z"/>
</svg>`;
  }
});

btn[1].addEventListener('click', () => {
  alert(`Размеры экрана ${window.screen.width} x ${window.screen.height}`);
});

const wsUri = 'wss://echo.websocket.org/';

const output = document.querySelector('.output');

function writeToScreen(message) {
  let pre = document.createElement('p');
  pre.innerHTML = message;
  output.appendChild(pre);
}

let websocket;
websocket = new WebSocket(wsUri);
websocket.onopen = function (evt) {
  writeToScreen('Соединение установленно');
};
websocket.onclose = function (evt) {
  writeToScreen('DISCONNECTED');
};
websocket.onmessage = function (evt) {
  if (evt.data === `[object GeolocationPosition]`);
  else writeToScreen('<span class="response"> ' + evt.data + '</span>');
  // console.log(evt);
};
websocket.onerror = function (evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
};

btn[2].addEventListener('click', () => {
  const message = document.querySelector('.inp').value;
  writeToScreen('<span class="message">' + message + '</span>');
  websocket.send(message);
  document.querySelector('.inp').value = '';
});

btn[3].addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      // console.log(position);
      websocket.send(position);
      writeToScreen(`<a
        href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}"
        target="_blank"
      >
        Геолокация
      </a>`);
    });
  }
});

function revertString(str) {
  let revertedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  }
  return revertedStr;
}

console.log(revertString('cat'));

