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
: Assuming we want to hunt down that one specific item that was changed and NOT re-render the entire list. We need something to track that specific item. We can track down a specific item by using a key.

When the list is updated for whatever reason, (either from a server or a user interaction), React matches the keys of each of the previous list to the updated list. If there were any changes, React will only update the items that have changed.

As long as keys remain consistent and unique, React can handle the DOM effectively and efficiently.

## Using uuid package to generate unique keys

`npm install uuid`

```js
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

more info at [uuid - npm](https://www.npmjs.com/package/uuid)

---
# Using function as prop
```js
export default function HandleClick() {
    window.location.href = "http://www.google.com";
}
```: functionAsProp.jsx
```js
return (
      <button onClick={HandleClick} style={buttonStyle}>{text}</button>
    )
``` 
: buttonProp.jsx
---
# State in react
> State is a component’s memory.


## state rules
1. State should not be mutated
:  In order for us to change state, we should always use the setState function. 


# life cycle rendering
> There are three stages to a component’s life: mounting, updating, and unmounting

## render()
> The render function is the most used lifecycle method, and one that you’ve come across in the last class components lesson. It is the only required lifecycle method in a class component. It runs on mount and update of a component. Render should be pure, meaning it doesn’t modify component state, returns the same thing each time it’s called (given the same inputs), and doesn’t directly interact with the browser.

## componentDidMount()
> This method is run after the component is mounted (inserted in the DOM tree). You should make any calls to fetch data that is needed for the component here. It is also a good place to do anything that is reliant on the component, such as drawing on a canvas element that you just rendered.

## componentDidUpdate()
> This method is run after a component re-renders. Because of this, you have to be careful about what you update in this method, as if you’re updating state indiscriminately, a re-render is caused, and you’ll end up in an endless loop. You can avoid this issue by using conditional statements about the equality of previous and current props when updating state.

In this method you should be updating anything that needs to be changed in response to either the DOM changing, or any states that you might want to act on upon change. For example, you’d want to refetch user data if the user changes.

## componentWillUnmount()
> This is the last lifecycle method, which is called before a component is unmounted and destroyed. In this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers, etc.

# Type Checking
> Type Checking is a process of verifying that a piece of code is using the correct data types for variables, function parameters and return values.
> `npm install --save prop-types`

# The useRef hook
> The useRef hook lets you manage a value that’s not needed for rendering. They are an alternative to state, as when you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use this hook.

They are often used when performing imperative actions or accessing specific elements rendered in the DOM. Refs can also persist values throughout the component’s lifecycle, meaning that the value of the ref will not be destroyed every time a component re-renders. This is very useful when you want to store a value that you want to persist throughout the component’s lifecycle without storing it in a state.

# The useCallback hook
> The useCallback hook provides another way to memoize a value, not just any value like useMemo. It can only memoize a function. Did you see the previous snippet that we have with memoizing a function reference with useMemo?
