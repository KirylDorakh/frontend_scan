import React from "react";
import {createRoot} from "react-dom/client";

import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";

import {Provider} from "react-redux";
import {store} from "./reducers";

const root = createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
