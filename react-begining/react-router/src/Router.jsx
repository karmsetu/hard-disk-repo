
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import App from "./App";
import Profile from "./profile";
import About from "./about";
import Chid1 from "./profileChildren1";
import Chid2 from "./profileChildren2";


const Router =()=> {
    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/profile",
        element: <Profile />,
        children: [
        { path: "child1", element: <Chid1 /> },
        { path: "child2", element:  <Chid2 /> },
        ],
    },
    {
        path: "/about",
        element: < About/>
    }
    ]);

    return <RouterProvider router={router} />;
}

export default Router