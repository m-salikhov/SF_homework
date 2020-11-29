'use strict';

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let inp1 = +document.querySelector('.inp1').value;
  let inp2 = +document.querySelector('.inp2').value;
  if (
    inp1 < 100 ||
    inp1 > 300 ||
    inp2 < 100 ||
    inp2 > 300 ||
    isNaN(inp1) ||
    isNaN(inp2)
  ) {
    return console.log('Одно из чисел вне диапазона');
  }
  fetch(`https://picsum.photos/${inp1}/${inp2}`)
    .then((response) => {
      let resultNode = document.querySelector('.result');

      resultNode.innerHTML = `
      <div class="card">
        <img
          src="${response.url}"
        />
      </div>
    `;
    })
    .catch(() => {
      console.log('error');
    });
});
