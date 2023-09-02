import generateJoke  from "./joke";
import './style.css'

const element = ()=> {
    const hi = document.createElement(`div`)
    hi.innerText = `Yo`
    return hi
}

document.querySelector(`.content`).appendChild(element())
console.log(generateJoke())