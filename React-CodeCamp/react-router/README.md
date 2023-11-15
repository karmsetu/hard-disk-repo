`D:\hard-disk-repos\React-CodeCamp\react-router`

```js
import { BrowserRouter } from "react-router-dom" //
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## links
```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## routeparams
```js
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## useParams
```js
import React from "react"
import {useParams} from "react-router-dom"
export default function VanDetail() {
    /**
     * Challenge part 1:
     * Re-write what I just wrote and console log the params object
     */
    console.log(useParams())
    return <h1>Van detail page goes here</h1>
}
```

## nested routes
```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```
^ index.js
```js
import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
```
^ layout

## index routes
```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

## NavLink
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

function Layout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }
  
  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink 
          to="/"
          style={({isActive}) => isActive ? activeStyle : null }
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/about"
          style={({isActive}) => isActive ? activeStyle : null }
        >
          About
        </NavLink>
        
        <NavLink 
          to="/contact"
          style={({isActive}) => isActive ? activeStyle : null }
        >
          Contact
        </NavLink>
        
      </nav>
      <Outlet />
    </div>
  )
};

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
```

## URLstring generator 
```js
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }
```

## BrowserRouter 
```js
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route
} from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<HomePage />} />
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)
```