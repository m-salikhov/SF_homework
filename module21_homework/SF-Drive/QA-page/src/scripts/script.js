'use strict';

let collapsible = document.getElementsByClassName('content__collapsible');
let i;

for (i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

import { hello } from './hw.js';

hello('World');
