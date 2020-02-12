'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.getElem = function () {
    if (selector[0].value === '.') {
      let myElem = document.createElement('div');
      myElem.classList.add('block');
      console.log(myElem + 'class')
    } else if (selector[0].value === '#') {
      let myElem = document.createElement('p');
      myElem.setAttribute('id', 'best');
      console.log(myElem + 'id')
    } else {
      return
    }

    myElem.textContent = 'Не понятно что и где писать';

    myElem.style.cssText = 'height: height, width: width, background: bg, font-size: fontSize';

    // myElem.style.cssText = 'height: 200px, width: 300px, background: silver, font-size: 14px';

    document.body.appendChild(myElem);
  }
};

DomElement.getElem;

let block1 = new DomElement('.block', '600px', '600px', 'blue', '18px');
let block2 = new DomElement('#best', '800px', '100px', 'red', '12px');

// block.getElem();

console.log(block1.getElem);
console.log(block2.getElem);
// console.log(block.getElem('200px', '300px', 'silver', '15px'));

