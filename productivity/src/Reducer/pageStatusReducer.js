import {
    SET_LOADING
} from "../Constant/actionTypes";

const defaultState = {
    loading: false
};

const setLoading = (state, action) => ({
    ...state,
    loading: action.loading
});

export const pageStatusReducer = (state = defaultState, action) => {
    const reducerMapper = {
        [SET_LOADING]: setLoading
    }[action.type];

    return reducerMapper ? reducerMapper(state, action) : state;
}