import {
    SET_LOADING
} from "../Constant/actionTypes";


export const pageStatusReducer = (state = {loading: false}, action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading:action.loading
            }
        default:
            return state;
    }
}