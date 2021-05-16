import React, { useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form} from 'react-bootstrap';
import { ModalTypes } from '../../../Constant/modalTypes';
import { setModal } from '../../../Action/modalsAction';
import { toggleTodos, deleteTodo, filterTodosByTag } from '../../../Action/todosAction';
import {UpdateTodosAction} from '../../../Action/updateAction';
import {toISOString} from '../../../Helpers/date';
import './content.css';
import {useParams} from "react-router-dom";
import { LinkButton } from '../../../Component/Common/LinkButton';
import { IoTrashOutline } from "react-icons/io5";

export const NoteItem = ({note}) => {

    const userInfo = useSelector((state) => state.user.userInfo);   

    const dispatch = useDispatch();
    const {selectedDate, selectedTag} = useSelector((state) => state.todos);

    let {type} = useParams();

    const handleCheckboxClick = (title, tag, date, isCompleted) =>{
        dispatch(toggleTodos(userInfo.uid, title, tag, date, isCompleted))
    } 

    useEffect(() => {
        dispatch(filterTodosByTag(userInfo.uid, selectedTag, type, toISOString(selectedDate)))
    }, [type])

    const handleDeleteTask = (e, title, tag, date) => {
        e.preventDefault();
        dispatch(deleteTodo(userInfo.uid, title, tag, date));
    }

    const onDoubleClick = () => {
        dispatch(UpdateTodosAction(note));
        dispatch(setModal(ModalTypes.UPDATE_TODOS));
    };

    const checkLabel = (
        <div className="d-flex flex-row align-items-start">
            <span className="ml-2 mr-5">{note.title}</span>
        </div>
    )

    return (
        <div 
            className="note-item"
            onDoubleClick={onDoubleClick}
        >
            <Form inline className="d-flex justify-content-between py-2">
                <Form.Check
                    className="form-control-lg"
                    style={{ textDecoration: note.isCompleted ? "line-through" : "" }}
                    onClick={() => handleCheckboxClick(note.title, note.tag, note.date, note.isCompleted)}
                    checked={note.isCompleted}
                    type={'checkbox'}
                    label={checkLabel}
                />
                
                <div className="d-flex flex-row align-items-center">
                    <p className="tag">
                        {note.tag}
                    </p>
                    <LinkButton
                        className="ml-5 text-danger delete-btn"
                        onClick={(e) => handleDeleteTask(e, note.title, note.tag, note.date)}
                    >
                        <IoTrashOutline style={{verticalAlign: 'baseline'}}/>
                    </LinkButton>  
                </div>
            </Form>
        </div>
    )
}