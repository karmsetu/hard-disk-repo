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

## protected routes
```js
import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect
} from "react-router-dom"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<h1>Home page</h1>}
    />
    <Route
      path="protected"
      element={<h1>Super secret info here</h1>}
      loader={async () => {
        const isLoggedIn = false
        if (!isLoggedIn) {
          throw redirect("/login")
        }
        return null
      }}
    />
    <Route path="login" element={<h1>Login page goes here</h1>} />

  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
```

## React from data
```js
import React from "react"
import { useNavigate, Form } from "react-router-dom"

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // process this info however I wanted
    // pass the email and password to the loginUser function
    console.log(email, password)
    return null
}

export default function Login() {
    return (
        <Form method="post">
            <input
                type="email"
                name="email"
                placeholder="Email address"
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Password"
            />
            <br />
            <button>Log in</button>
        </Form>
    )
}
```

## defer
```js
import React, { Suspense } from "react"
import { useLoaderData, defer } from "react-router-dom"
import { sleep, getWeather } from "./utils"

/**
 * Challenge: start setting up our deferred data just like we
 * did together. Scrub back for reference if you need to jog
 * your memory :)
 */
export async function loader() {
    const weather = await getWeather()
    return defer({weather:weather})
}

export default function Weather() {
    const loaderData = useLoaderData()
    const iconUrl =
        `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`

    return (
        <section className="weather-container">
            <h1>Weather in Salt Lake City</h1>
            <h3>{loaderData.main.temp}ºF</h3>
            <img src={iconUrl} />
        </section>
    )
}

```

## <Await /> component
```js
import React, { Suspense } from "react"
import { useLoaderData, defer, Await } from "react-router-dom"
import { sleep, getWeather } from "./utils"

export async function loader() {
    const weatherPromise = getWeather()
    return defer({ weather: weatherPromise })
}

export default function Weather() {
    const loaderData = useLoaderData()

    return (
        <section className="weather-container">
            <h1>Weather in Salt Lake City</h1>
            <Await resolve={loaderData.weather}>
                {(loadedWeather) => {
                    const iconUrl =
                        `http://openweathermap.org/img/wn/${loadedWeather.weather[0].icon}@2x.png`
                    return (
                        <>
                            <h3>{loadedWeather.main.temp}ºF</h3>
                            <img src={iconUrl} />
                        </>
                    )
                }}
            </Await>
        </section>
    )
}

```

## <Suspense /> -REact
```js
import React, { Suspense } from "react"
import { useLoaderData, defer, Await } from "react-router-dom"
import { sleep, getWeather } from "./utils"

export async function loader() {
    const weatherPromise = getWeather()
    return defer({ weather: weatherPromise })
}

export default function Weather() {
    const loaderData = useLoaderData()

    return (
        <section className="weather-container">
            <h1>Weather in Salt Lake City</h1>
            <Suspense fallback={}>
                <Await resolve={loaderData.weather}>
                    {(loadedWeather) => {
                        const iconUrl =
                            `http://openweathermap.org/img/wn/${loadedWeather.weather[0].icon}@2x.png`
                        return (
                            <>
                                <h3>{loadedWeather.main.temp}ºF</h3>
                                <img src={iconUrl} />
                            </>
                        )
                    }}
                </Await>
            </Suspense>
        </section>
    )
}

```
