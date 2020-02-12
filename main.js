'use strict';

let selector1 = prompt('Введите символ: . или #')
let text1 = prompt('Введите текст')

function DomElement(selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;

  this.getElem = function () {
    let myElem;
    if (this.selector[0] === '.') {
      myElem = document.createElement('div');
      myElem.setAttribute('class', 'block');
    } else if (this.selector[0] === '#') {
      myElem = document.createElement('p');
      myElem.setAttribute('id', 'best');
    }

    myElem.textContent = text;

    myElem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px;`;

    document.body.appendChild(myElem);
  }
};

let block = new DomElement(selector1, 300, 200, 'silver', 18, text1);

block.getElem();

