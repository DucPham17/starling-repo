import React, { useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button, ListGroup, Row, Col, Modal, DropdownButton, Dropdown} from 'react-bootstrap';
import { ModalTypes } from '../../../Constant/modalTypes';
import { setModal } from '../../../Action/modalsAction';
import { toggleTodos, updateTodo, deleteTodo } from '../../../Action/todosAction';
export const NoteItem = (props) => {

    const [showModal, setShow] = useState(false);
    const {uid} = useSelector((state) => state.user.userInfo);
    const [state, setState]= useState({title: '', description: ''});
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleTodos(uid))
    }

    const handleClose = () => 
    setShow(false);
  

    function editText() {
        setShow(true);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
          }
    } 

    const updateText = (e) => {
        const value = e.target.value;

        dispatch(updateTodo({
            userId : uid,
            title: setState({
                ...state,
                [e.target.title]: value}),

        }))
        
    }


    const deleteTask = (uid) => {
        dispatch(deleteTodo(uid));
    }

    return (
        <div className="note-item">
            <div>
            <ListGroup.Item style={{ textDecoration: props.note.isCompleted ? "line-through" : "" }} onDoubleClick={editText}>
             <Form inline>
                <div className="checkbox-holder"
                onClick={handleCheckboxClick}
                >
                 {props.note.isCompleted ?
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
                <Modal show={showModal} onHide={handleClose}>
             <Modal.Header closeButton>
                <Modal.Title>Update Note</Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control  
                        className="edit"
                        placeholder="Edit your task.."
                        value={props.note.title}
                        onChange={updateText} 
                        onKeyDown={onKeyDown}
                 /> 
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Description</Form.Label>
                     <Form.Control  
                        className="edit"
                        placeholder="Edit your task.."
                        value={props.note.description}
                        onChange={updateText} 
                        onKeyDown={onKeyDown}
                 /> 
                 </Form.Group>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button variant="primary" onClick={() => {
                     updateTodo(state);
                     setState({title: ''})
                 }}>Save</Button>
                 <Button variant="danger" onClick={deleteTask(uid)}>Delete</Button>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                 </Modal.Footer>
                 </Modal>
                 
            <strong>{props.note.title}</strong>
            <p>{props.note.description}</p>
            </ListGroup.Item>
            </div>
        </div>
    )
}