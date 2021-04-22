import Axios from "axios";
import Cookie from "js-cookie";

export const getData = (userId) => async (dispatch) => {
    dispatch({
        type: 'GET',
        payload: {loading: true}
    });
    console.log('userId:', userId)
    try {
        const {data} = await Axios.get("/api/expenses/getexpenses", {
            params: {
                userId
            }
        })
        dispatch({
            type: 'GET_SUCCESS',
            payload : data
        })
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'GET_FAIL',
            payload : error
        })
    }
}

export const addData = (userId, name, amount, expenseType, date) => async (dispatch) => {
    dispatch({
        type: 'ADD',
        payload: {loading: true}
    });

    try {
        console.log('add')
        const {data} = await Axios.post("/api/expenses/addexpense", {userId, name, amount, expenseType, date})
        console.log(data)
        dispatch({
            type: 'ADD_SUCCESS',
            payload : data
        })
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'ADD_FAIL',
            payload : error
        })
    }
}

export const deleteData = (userId, date) => async (dispatch) => {
    dispatch({
        type: 'DELETE',
        payload: {loading: true}
    });

    try {
        console.log('delete')
        const {data} = await Axios.delete("/api/expenses/deleteexpense", {
            params: {
                userId,
                date
            }
        })
        console.log(data)
        dispatch({
            type: 'DELETE_SUCCESS',
            payload : data
        })
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'DELETE_FAIL',
            payload : error
        })
    }
}