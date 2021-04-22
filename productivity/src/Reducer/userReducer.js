import {
    SIGNIN_ACTION_REQUEST,
    SIGNIN_ACTION_SUCCESS,
    SIGNIN_ACTION_FAIL,
    SIGNUP_ACTION_REQUEST,
    SIGNUP_ACTION_SUCCESS,
    SIGNUP_ACTION_FAIL,
    SIGNOUT_ACTION_REQUEST
} from "../Constant/actionTypes";

const initialState = {
    userInfo: {}
};

export const userReducer = (state = initialState ,action) => {
    switch(action.type){
        case SIGNIN_ACTION_REQUEST:
            return {
                ...state,
                loading : true
            }
        case SIGNIN_ACTION_SUCCESS:
            return {
                ...state,
                userInfo : action.payload,
                loading : false
            }
        case SIGNIN_ACTION_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SIGNUP_ACTION_REQUEST:
            return {
                ...state,
                loading : true
            }
        case SIGNUP_ACTION_SUCCESS:
            return {
                ...state,
                userInfo : action.payload,
                loading : false
            }
        case SIGNUP_ACTION_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SIGNOUT_ACTION_REQUEST:
            return initialState;
        default:
            return state;
    }
}