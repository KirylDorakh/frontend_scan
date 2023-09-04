import React from "react";
import {createRoot} from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./routes/App/App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }
])

const root = createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={router} />
)
