import { createBrowserRouter, useRoutes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";

let routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { path: '/'         ,   element: <Home/>       },
            { path: '/AboutUs'  ,   element: <AboutUs/>    },
            { path: '/ContactUs',   element: <ContactUs /> },
            { path: '/Blog'     ,   element: <Blog/>       },
            { path: '*'         ,   element: <ErrorPage /> },
        ],
    },
])

export default routes