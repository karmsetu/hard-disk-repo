# React + Vite

Now it’s time to add the router! There’s a couple of ways of defining our app’s routes, but in React Router v6.7.0 or higher, it is recommended to add routes as objects.

Let us install the React Router package:

``` bash
npm install react-router-dom
```
``` js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```: main.jsx

```js
const Profile = () => {
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
      </div>
    );
  };
  
  export default Profile;
```: profile.jsx

# Links
``` js
    import { Link } from "react-router-dom";
    <Link to="{src}"> {Text content}</Link>
```

# Outlet & child elements
> making 2 new .jsx files (profileChildren1, profileChildren2)

```js
import { Link } from "react-router-dom";
export default function Chid1() {
    return (
        <>
          <p>Hi, I am first Child </p>
          <Link to="/">Click here to go back</Link>
        </>
    );
}```: profileChildren1

```js
import { Link } from "react-router-dom";
export default function Chid2() {
    return (
        <>
          <p>Hi, I am second Child </p>
          <Link to="/">Click here to go back</Link>
        </>
    );
}```: profileChildren2

```js
{
    path: "/profile",
    element: <Profile />,
    children: [
      { path: "child1", element: <Chid1 /> },
      { path: "child2", element:  <Chid2 /> },
    ],
  },
```: changes in main.jsx file

`js
    import { Outlet } from "react-router-dom";
`
> element imported in profile.jsx

```js
{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
```
> error page handling in main.jsx file

```js
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
```
> error page reffered above

# seperating router format by Router.jsx


# < Navigate />
> You will often come across the need to reroute the user to a different URL programmatically. This is where we use the <Navigate />component. The <Navigate /> component reroutes the user to the desired URL when it is rendered. It is a wrapper around the useNavigate hook that lets you navigate programmatically, to URLs, or even go back down the user’s history.