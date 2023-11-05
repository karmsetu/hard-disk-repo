declaritive & imparitive
[](https://legacy.reactjs.org/docs/cdn-links.html)
## get started without any lib
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

``` 
## babel
unknown link

##
```js
ReactDOM.render(<What you want to render>,<where do want to render it> )
```

# local
[via Vite](https://vitejs.dev/)
```bash
npm create vite@latest
```

## issue01
`You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/`

## warning'01
`Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`

## quizez
Quiz!

1. What is a React component?
reusable components

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
it needs to be PascalCase: `MyComponent`
3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}
ReactDOM.render(Header(), document.getElementById("root"))
```
use : <Header />


1. What do props help us accomplish?
it stands for proprty attribute, it help in making the component dynamic


2. How do you pass a prop into a component?
`function ComponentName(prop)`


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
nope, it is unique to JSX element


4. How do I receive props in a component?
function Navbar(prop) {
    return (
        <header>
            prop.comp
        </header>
    )
}


5. What data type is `props` when the component receives it?
object

- state
1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.


# error02
```bash
Error: Unknown error (/node_modules/react-dom/cjs/react-dom.development.js:3994)
!The above error occurred in the <Joke> component: at Joke (exe1.bundle.js:73:13) at div at App Consider adding an error boundary to your tree to customize error handling behavior. Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
›Error: A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information. (/node_modules/react-dom/cjs/react-dom.development.js:4005)
```

[array mapping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## bug01
`Warning: Each child in a list should have a unique "key" prop. Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information. at h3 at App`


# conditional rendering
```js
{props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
```
## new css property
```css
text-indent: 5px;
```
## JS events in React

[src](https://legacy.reactjs.org/docs/events.html#mouse-events)
[ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)