import Axios from "axios";
import Cookie from "js-cookie";
import { setModal } from "./modalsAction";

export const getData = (userId) => async (dispatch) => {
    dispatch({
        type: 'GET',
        payload: {loading: true}
    });
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
        dispatch(setModal(undefined));
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'ADD_FAIL',
            payload : error
        })
        dispatch(setModal(undefined));
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

export const updateData = (userId, date, item) => async (dispatch) => {
    dispatch({
        type: 'UPDATE',
        payload: {loading: true}
    });

    try {
        console.log('update')
        const {data} = await Axios.post("/api/expenses/updateexpense", {userId, date, item})
        console.log(data)
        dispatch({
            type: 'UPDATE_SUCCESS',
            payload : data
        })
        dispatch(setModal(undefined));
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'UPDATE_FAIL',
            payload : error
        })
        dispatch(setModal(undefined));
    }
}

export const filterData = (userId, choiceDate, choiceType) => async (dispatch) => {
    dispatch({
        type: 'FILTER',
        payload: {loading: true}
    });
    try {
        const {data} = await Axios.get("/api/expenses/filterexpenses", {
            params: {
                userId,
                choiceDate, 
                choiceType
            }
        })
        dispatch({
            type: 'FILTER_SUCCESS',
            payload : data
        })
        Cookie.set('expense', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: 'FILTER_FAIL',
            payload : error
        })
    }
}