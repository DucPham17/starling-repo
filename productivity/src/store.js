import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import Cookie from "js-cookie";
import { userReducer } from "./Reducer/userReducer";
import { modalsReducer } from "./Reducer/modalsReducer";
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {user : {userInfo}};

// here is where you combine reducers
const reducer = combineReducers({
    modals: modalsReducer,
    user : userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;