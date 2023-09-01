import _ from 'lodash'
import './style.css'
import Icon from './React-icon.svg.png'
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js'

// import Icon from `./`
import myName from './myName';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, now imported via script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName(`Shourya`)
    element.classList.add(`hello`)
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    console.log(Data);
    console.log(Notes);
    element.appendChild(myIcon);
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());