console.log(`cidalvban`)
import _ from 'lodash';

import nav from   './nav.js';
import home from  './home.js';
import about from './about.js';
import info from  './info.js';

function component() {
    const element = document.querySelector('.content');
    // Lodash, now imported via script
    element.innerHTML = 'Hello Shourya';
    const elementabout = document.createElement('div');
    elementabout.innerText = about()
    
    const elementinfo = document.createElement('div');
    elementinfo.innerText = info()

    console.log(typeof(nav))
    console.log(typeof(home))
    console.log(typeof(about))
    console.log(typeof(info))

    element.appendChild(elementabout)
    element.appendChild(home())
    element.appendChild(elementinfo)
    element.appendChild(nav())
    return element;
  }
  
  
  document.body.appendChild(component());
  console.log(document.querySelectorAll(`.nav-button`))
    document.querySelectorAll(`.nav-button`).forEach(e => {
    // console.log(e)
        e.addEventListener(`click`, function(){
        const some = document.querySelector(`.${e.dataset.id}-button`)
        console.log({e, some})
        // component().appendChild(eval(some))
        })
    })