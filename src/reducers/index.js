import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


import navMenuReducer from "./navMenuReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    navMenu: navMenuReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
