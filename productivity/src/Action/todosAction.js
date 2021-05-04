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
            todos,
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
    }
};

export const addTodo = (params) => async (dispatch) => {
    // dispatch(setLoading(true));
    try {
        console.log('add')
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
    }
}

export const toggleTodos = (userId, title, tag, date, isCompleted) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        console.log('toggle')

        const {data: todos} = await Axios.post("/api/tasks/toggleTask", {
                userId,
                title,
                tag,
                date,
                isCompleted
            }
        )
        dispatch({
            type: TOGGLE_TODOS,
            todos,
        })
        Cookie.set('todos', JSON.stringify(todos))
    } catch (e) {
        console.log(e)
    } finally {  
        dispatch(setLoading(false));
    }
}

export const updateTodo = (userId, date, item) => async (dispatch) => {
    // dispatch(setLoading(true));
    try {
        console.log('update')
        console.log(item.title)
        const {data: todos} = await Axios.post("/api/tasks/updatetask", {userId, date, item})
        dispatch({
            type: UPDATE_TODOS,
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

export const deleteTodo = (userId, title, tag, date) => async (dispatch) => {
    // dispatch(setLoading(true));
    try {
        console.log('delete')
        const {data: todos} = await Axios.delete("/api/tasks/deletetask", {
            params: {
                title, 
                tag,
                userId,
                date
            }
        })
        dispatch({
            type: DELETE_TODOS,
            todos,
        })
        console.log(todos)
        Cookie.set('todos', JSON.stringify(todos))
    } catch (error) {
        console.log(error)
    } finally {  
        dispatch(setLoading(false));
    }
}