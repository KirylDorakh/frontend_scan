import React from "react";
import {createRoot} from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App.jsx";
import MainPage from "./pages/MainPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Search from "./pages/Search.jsx";
import ResultsOfSearch from "./pages/ResultsOfSearch";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "main",
                element: <MainPage />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "results",
                element: <ResultsOfSearch />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },
])

const root = createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={router} />
)
