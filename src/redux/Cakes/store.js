import { createStore, applyMiddleware, combineReducers } from "redux";
import { CakeReducer } from "./CakeReducer";
import thunk from "redux-thunk";

const appReducer = combineReducers({ Cake: CakeReducer });

let Middleware = [thunk];

const store = createStore(appReducer, applyMiddleware(...Middleware));

export default store;
