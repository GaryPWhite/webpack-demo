import _ from 'lodash';
import printme from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and I s w a g';
  btn.onclick = printme;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());