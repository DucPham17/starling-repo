import Axios from "axios";
import Cookie from "js-cookie";
import { SET_TODOS, TOGGLE_TODOS, UPDATE_TODOS, DELETE_TODOS } from "../Constant/actionTypes";
import { setModal } from "./modalsAction";
import { setLoading } from "./pageStatusAction";

export const getTodos = (userId, date) => async (dispatch) => {
    dispatch(setLoading(true));
    console.log('userId:', userId)
    try {
        const {data: todos} = await Axios.get("/api/tasks/gettasks", {
            params: {
                userId,
                date
            }
        })
        dispatch({
            type: SET_TODOS,
            todos
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
    }
};

export const addTodo = (params) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const {data: todos} = await Axios.post("/api/tasks/addtask", params)
        dispatch({
            type: SET_TODOS,
            todos
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
        dispatch(setModal(undefined));
    }
}

export const toggleTodos = (params) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const {data: todos} = await Axios.post("/api/tasks/toggleTask", params)
        dispatch({
            type: TOGGLE_TODOS,
            todos,
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
        dispatch(setModal(undefined));
    }
}

export const updateTodo = (userId, title, description) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const {data: todos} = await Axios.post("/api/tasks/updatetask", {
            params: {
                userId,
                title,
                description,
                
            }
        })
        dispatch({
            type: UPDATE_TODOS,
            todos
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
        dispatch(setModal(undefined));
    }
}

export const deleteTodo = (uid) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const {data: todos} = await Axios.delete("/api/tasks/deletetask", {
            params: {
                uid
            }
        })
        dispatch({
            type: DELETE_TODOS,
            todos
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
        dispatch(setModal(undefined));
    }
}