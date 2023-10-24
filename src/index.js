import React from "react";
import {createRoot} from "react-dom/client";

import {Provider} from "react-redux";
import {store} from "./reducers";
import MyRouter from "./MyRouter";


const root = createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>
)
