import _ from 'lodash';
import printMe from './print.js';
//note that any css is auto-reloaded

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and I sweg';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}