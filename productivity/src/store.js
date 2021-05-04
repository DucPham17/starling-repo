import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import Cookie from "js-cookie";
import { userReducer } from "./Reducer/userReducer";
import { modalsReducer } from "./Reducer/modalsReducer";
import { expenseReducer } from "./Reducer/expenseReducer";
import { pageStatusReducer } from "./Reducer/pageStatusReducer";
import { todoReducer } from "./Reducer/todoReducer";
import { updateReducer } from "./Reducer/updateReducer";
import { filterReducer } from "./Reducer/filterReducer"
import { updateTodoReducer} from './Reducer/updateTodoReducer';
import { dashboardReducer } from "./Reducer/dashboardReducer";

const userInfo = Cookie.getJSON("userInfo") || {};
const initialState = {user : {userInfo}};

// here is where you combine reducers
const reducer = combineReducers({
    dashboard: dashboardReducer,
    modals: modalsReducer,
    user : userReducer, 
    expense: expenseReducer,
    todos: todoReducer,
    pageStatus: pageStatusReducer,
    update: updateReducer,
    filter: filterReducer,
    updateTodos: updateTodoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;