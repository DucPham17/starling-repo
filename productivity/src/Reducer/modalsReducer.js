import {
    SET_MODAL
} from "../Constant/actionTypes";

const defaultState = {
    modalType: undefined
};

const setModal = (state, action) => ({
    ...state,
    modalType: action.modalType
});


export const modalsReducer = (state = defaultState, action) => {
    const reducerMapper = {
        [SET_MODAL]: setModal
    }[action.type];

    return reducerMapper ? reducerMapper(state, action) : state;
}