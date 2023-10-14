// import { createRoot } from 'react-dom/client';
// import { createElement } from 'react';
// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
// const hello = h1
const list = <ul><li>some1</li><li>some2</li></ul>
ReactDOM.render(list, document.getElementById('root'))
ReactDOM.render(<h1>hello</h1>, document.getElementById('root'))