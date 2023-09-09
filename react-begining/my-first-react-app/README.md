# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


> ```npm create vite@latest my-first-react-app -- --template react```
>``` npm install ```
>``` npm run dev ```


## Greeting function

```js
function Greeting() { 
    return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

export default Greeting
``` 
[^1] created seperate function and added it to the *App.jsx* file.
### `< Greeting/>` was used as input in app

---
If you meant to render a React component, start its name with an uppercase letter.

we need **key** element to let React know the identity of each element in the list. React must know this information if you are dealing with a dynamic list where you add or remove elements.

---
```js
export default function ListReturner(props) {
    let boi= Object.keys(props)[0]
    return (
        <ul>
        {console.log(typeof((boi)))}
        {props[boi].map((listItem) => {
            return <li key={listItem}>{listItem}</li>
        })}
        </ul>
    );
}
```

# always remember to refresh!