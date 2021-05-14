import { SET_LOADING } from "../Constant/actionTypes";

export const setLoading = (loading) => (dispatch, getState) => {
    if (loading) {
        dispatch({
            type: SET_LOADING,
            loadingQueue: getState().pageStatus.loadingQueue + 1
        });
    } else {
        dispatch({
            type: SET_LOADING,
            loadingQueue: Math.max(getState().pageStatus.loadingQueue - 1, 0)
        });
    };
};