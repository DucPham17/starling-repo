import { SET_MODAL } from "../Constant/actionTypes";

export const setModal = (modalType) => ({
    type: SET_MODAL,
    modalType
});