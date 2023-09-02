import generateJoke  from "./joke";
import './style.css'
import add from './add'
import list from './list'
import form from "./form";
import formInput from "./formInput";

const element = ()=> {
    const hi = document.createElement(`div`)
    // hi.innerText = `Yo`
    hi.appendChild(add())
    return hi
}

document.querySelector(`.content`).appendChild(element())
console.log(generateJoke())
document.querySelectorAll(`.add`).forEach(e=> {
    e.addEventListener(`click`, function () {
        console.log(formInput(e.dataset.type))
    })
})