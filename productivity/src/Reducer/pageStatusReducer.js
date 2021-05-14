import {
    SET_LOADING
} from "../Constant/actionTypes";


export const pageStatusReducer = (state = {loadingQueue: 0}, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loadingQueue: action.loadingQueue
            }
        default:
            return state;
    }
}