import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import ResultsOfSearchPage from "../pages/ResultsOfSearchPage";
import LoginPage from "../pages/LoginPage";
import React from "react";


export const privateRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "results",
                element: <ResultsOfSearchPage />
            },
            {
                path: "*",
                element: <Navigate to="/search" />
            }
        ]
    },
])

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "*",
                element: <Navigate to="/login" />
            }
        ]
    },
])