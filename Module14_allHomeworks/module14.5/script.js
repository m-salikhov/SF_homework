'use strict';

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let inp1 = +document.querySelector('.inp1').value;
  let inp2 = +document.querySelector('.inp2').value;
  if (
    inp1 < 1 ||
    inp1 > 10 ||
    inp2 < 1 ||
    inp2 > 10 ||
    isNaN(inp1) ||
    isNaN(inp2) ||
    !Number.isInteger(inp1) ||
    !Number.isInteger(inp2)
  ) {
    resultNode.innerHTML = 'Номер страницы и/или лимит вне диапазона от 1 до 10';
    return;
  }
  fetch(`https://picsum.photos/v2/list?page=${inp1}&limit=${inp2}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayResult(data);
      // console.log(data);
      localStorage.setItem('json', JSON.stringify(data));
    })
    .catch(() => {
      console.log('error');
    });
});

let resultNode = document.querySelector('.result');

function displayResult(data) {
  let cards = '';

  data.forEach((item) => {
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

let myJSON = localStorage.getItem('json');
// console.log(myJSON);
if (myJSON) displayResult(JSON.parse(myJSON));
