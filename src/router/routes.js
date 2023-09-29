import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import ResultsOfSearchPage from "../pages/ResultsOfSearchPage";
import LoginPage from "../pages/LoginPage";
import React from "react";

export const router = createBrowserRouter([
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
                element: <SearchPage />
            },
            {
                path: "/results",
                element: <ResultsOfSearchPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "*",
                element: <Navigate to="/" />
            }
        ]
    },
])