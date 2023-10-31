import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


import navMenuReducer from "./navMenuReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    navMenu: navMenuReducer,
    auth: authReducer,
    userInfo: userReducer,
    search: searchReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
