import { useDispatch, useSelector } from "react-redux";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { ModalTypes } from "../../Constant/modalTypes";
import { setModal } from "../../Action/modalsAction";
import { AddNote } from "./AddNote";
import { UpdateNote} from "./UpdateNote";

const modals = {
    [ModalTypes.ADD_NOTE]: AddNote,
    [ModalTypes.UPDATE_NOTE]: UpdateNote,
    [ModalTypes.SIGN_UP]: SignUp,
    [ModalTypes.SIGN_IN]: SignIn
};

export const Modals = () => {
    const {modalType} = useSelector((state) => state.modals);
    const dispatch = useDispatch();

    return Object.entries(modals).map(([type, Modal]) => 
        <Modal
            show={modalType === type}
            onHide={() => dispatch(setModal(undefined))}
        />
    );
};