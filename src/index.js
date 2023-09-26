import React from "react";
import {createRoot} from "react-dom/client";

import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";


import App from "./App.jsx";
import MainPage from "./pages/MainPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Search from "./pages/Search.jsx";
import ResultsOfSearch from "./pages/ResultsOfSearch";
import Login from "./pages/Login.jsx";
import {Provider} from "react-redux";
import {store} from "./reducers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/results",
                element: <ResultsOfSearch />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    },
])

const root = createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
