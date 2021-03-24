import { SignalCellularNullSharp } from "@material-ui/icons";
import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import { userReducer } from "./Reducer/userReducer";
const initialState = {user : SignalCellularNullSharp};

// here is where you combine reducers
const reducer = combineReducers({
    user : userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;