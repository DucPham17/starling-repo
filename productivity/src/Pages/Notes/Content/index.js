import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './content.css';
import { IoAdd } from "react-icons/io5";
import { setModal } from '../../../Action/modalsAction';
import { ModalTypes } from '../../../Constant/modalTypes';
import { dateToPresentableString } from '../../../Helpers/date';
import { NoteItem } from './NoteItem';

export const Content = (props) => {
    const {todos, selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onAddNoteClick = () => {
        dispatch(setModal(ModalTypes.ADD_NOTE))
    }

    return (
        <div className={props.className}>
            <div className="d-flex justify-content-between w-100 mb-4">
                <h3>{`Notes for ${dateToPresentableString(selectedDate)}`}</h3>
                <Button onClick={onAddNoteClick} variant="outline-primary">
                    <IoAdd/> Add Note
                </Button>
            </div>
            <div className='notes-content-card'>
                {
                    todos.length > 0 ?
                        todos.map((todo) => <NoteItem note={todo}/>) :
                        <span>Nothing for today. Click add note to add more notes</span>
                }
            </div>
        </div>
    )
}