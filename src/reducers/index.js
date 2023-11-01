import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


import navMenuReducer from "./navMenuReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({
    navMenu: navMenuReducer,
    auth: authReducer,
    userInfo: userReducer,
    search: searchReducer,
    results: resultsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
