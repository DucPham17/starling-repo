import React, { useState, useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, ListGroup, Row, Col, Modal, DropdownButton, Dropdown} from 'react-bootstrap';
import { ModalTypes } from '../../../Constant/modalTypes';
import { setModal } from '../../../Action/modalsAction';
import { getTodos, toggleTodos, deleteTodo, updateTodos} from '../../../Action/todosAction';
import { IoSettingsOutline } from 'react-icons/io5';
import {UpdateTodosAction, UpdateAction} from '../../../Action/updateAction';
import {toISOString} from '../../../Helpers/date'
export const NoteItem = ({note}) => {

    const userInfo = useSelector((state) => state.user.userInfo);   
    const {selectedDate} = useSelector((state) => state.todos); 
    const dispatch = useDispatch();
    
    const handleCheckboxClick = (title, description, date, isCompleted) => {
        dispatch(toggleTodos(userInfo.uid, title, description, date, isCompleted))
    }  

    const handleDeleteTask = (title, description, date) => {
        dispatch(deleteTodo(userInfo.uid, title, description, date));
    }
    
    useEffect(() => {
        dispatch(getTodos(userInfo.uid, toISOString(selectedDate)))
     }, [])

    console.log(note)
    return (
        <div className="note-item">
            <div>
            <ListGroup.Item 
            style={{ textDecoration: note.isCompleted ? "line-through" : "" }} 
            onDoubleClick={() => {dispatch(UpdateTodosAction(note)) ;
                                    dispatch(setModal(ModalTypes.UPDATE_TODOS))
            }}>
             <Form inline>
                <div className="checkbox-holder"
                onClick={() => handleCheckboxClick(note.title, note.description, note.date, note.isCompleted)}
                >
                 {note.isCompleted ?
                 (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                 )
                 : 
                 (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                 )
                 }
            </div>
                {/* <p className="task-status">{value}</p> */}
                {/* <Button variant="danger" type="button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
</svg>                
                {props.note.tag}
                </Button>  */}
                </Form>
                 
            <strong>{note.title}</strong>
            <p>{note.description}</p>

            <Button variant="danger" onClick={() => handleDeleteTask(note.title, note.description, note.date)}>Delete</Button>                 
            </ListGroup.Item>
            </div>
        </div>
    )
}