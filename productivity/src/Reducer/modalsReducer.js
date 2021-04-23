import {
    SET_MODAL
} from "../Constant/actionTypes";


export const modalsReducer = (state = {modalType: undefined}, action) => {
    switch(action.type){
        case SET_MODAL:
            return{
                ...state,
                modalType : action.modalType
            }
        default:
            return state
    }
}