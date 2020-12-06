'use strict';

document.querySelector('button').onclick = function () {
  let value = +document.querySelector('input').value;
  // console.log(value);
  if (value < 1 || value > 10 || !Number.isInteger(value)) {
    // Сообщение о том, что число вне диапазона, лучше выводить не в консоль, а в документ, т.к. данное приложение уже больше рассчитано на пользователя (у нас есть интерфейс), а обычные пользователи как правило не смотрят в консоль
    resultNode.innerHTML = 'Число вне диапазона';
  } else {
    useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult);
  }
};

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      //   console.log(result);
      callback(result);
    }
  };

  xhr.onerror = function () {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
}

let resultNode = document.querySelector('.result');

function displayResult(apiData) {
  let cards = '';

  apiData.forEach((item) => {
    let cardBlock = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>${item.author}</p>
          </div>
        `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}
