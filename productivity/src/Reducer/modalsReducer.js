import {
    SET_MODAL
} from "../Constant/actionTypes";


<<<<<<< HEAD
const setModal = (state, action) => ({
    ...state,
    modalType: action.modalType
});


export const modalsReducer = (state = defaultState, action) => {
    const reducerMapper = {
        [SET_MODAL]: setModal
    }[action.type];

    return reducerMapper ? reducerMapper(state, action) : state;
=======
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
>>>>>>> 410c5b897f4f0fae9625943882aa52ffa3c572c9
}