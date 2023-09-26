import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


import navMenuReducer from "./navMenuReducer";

const rootReducer = combineReducers({
    navMenu: navMenuReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
