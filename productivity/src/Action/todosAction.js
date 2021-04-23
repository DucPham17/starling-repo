import Axios from "axios";
import Cookie from "js-cookie";
import { SET_TODOS } from "../Constant/actionTypes";
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