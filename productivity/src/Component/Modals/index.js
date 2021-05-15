import { useDispatch, useSelector } from "react-redux";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { ModalTypes } from "../../Constant/modalTypes";
import { setModal } from "../../Action/modalsAction";
import { AddNote } from "./AddNote";
import { UpdateNote} from "./UpdateNote";
import { Attributions } from "./Attributions";
import { Expense } from "./Expense";
import { Update } from "./Update";
import { SignInError } from "./SignInError";

const modals = {
    [ModalTypes.ADD_NOTE]: AddNote,
    [ModalTypes.ATTRIBUTIONS]: Attributions,
    [ModalTypes.UPDATE_TODOS]: UpdateNote,
    [ModalTypes.SIGN_UP]: SignUp,
    [ModalTypes.SIGN_IN]: SignIn,
    [ModalTypes.SIGN_IN_ERROR]: SignInError,
    [ModalTypes.EXPENSE]: Expense,
    [ModalTypes.UPDATE]: Update,
};

export const Modals = () => {
    
    const {modalType} = useSelector((state) => state.modals);
    console.log({modalType})
    const dispatch = useDispatch();

    return Object.entries(modals).map(([type, Modal]) => 
        <Modal
            show={modalType === type}
            onHide={() => dispatch(setModal(undefined))}
        />
    );
};