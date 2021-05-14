import { SIGNIN_ACTION_REQUEST, SIGNIN_ACTION_SUCCESS, SIGNIN_ACTION_FAIL, 
    SIGNUP_ACTION_REQUEST, SIGNUP_ACTION_SUCCESS, SIGNUP_ACTION_FAIL, SIGNOUT_ACTION_REQUEST } from "../Constant/actionTypes";
import Axios from "axios";
import Cookie from "js-cookie";
import { setModal } from "./modalsAction";
import { setLoading } from "./pageStatusAction";

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: SIGNIN_ACTION_REQUEST,
        payload: {loading: true}
    });
        
    try {
        const {data} = await Axios.post("/api/users/signin",{email,password})
        
        dispatch({
            type: SIGNIN_ACTION_SUCCESS,
            payload : data
        })
        dispatch(setModal(undefined));
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: SIGNIN_ACTION_FAIL,
            payload : error
        })
    }
}

export const signup = (email, password,name) => async (dispatch) => {
    dispatch({
        type: SIGNUP_ACTION_REQUEST,
        payload: {loading: true}
    });
        
    try {
        console.log(email);
        const {data} = await Axios.post("/api/users/signup",{email,password,name})
        
        dispatch({
            type: SIGNUP_ACTION_SUCCESS,
            payload : data
        })
        dispatch(setModal(undefined));
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: SIGNUP_ACTION_FAIL,
            payload : error
        })
    }
}

export const signout = () => async (dispatch) => {
    await Axios.get("/api/users/signout");
    dispatch({
        type : SIGNOUT_ACTION_REQUEST,
        payload : null
    })
    Cookie.set('userInfo', JSON.stringify(null))
}
 
export const signInWithIdToken = (idToken) => async (dispatch) => {
    dispatch(setLoading(true));
        
    try {
        const {data} = await Axios.post('/api/users/google-signin', {
            idToken
        });
        
        dispatch({
            type: SIGNIN_ACTION_SUCCESS,
            payload: data
        })
        dispatch(setModal(undefined));
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: SIGNIN_ACTION_FAIL,
            payload: error
        })
    } finally {
        dispatch(setLoading(false));
    }
};

export const signInFacebookWithAccessToken = (accessToken) => async (dispatch) => {
    dispatch(setLoading(true));
        
    try {
        const {data} = await Axios.post('/api/users/facebook-signin', {
            accessToken
        });
        
        dispatch({
            type: SIGNIN_ACTION_SUCCESS,
            payload: data
        })
        dispatch(setModal(undefined));
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({
            type: SIGNIN_ACTION_FAIL,
            payload: error
        })
    } finally {
        dispatch(setLoading(false));
    }
};