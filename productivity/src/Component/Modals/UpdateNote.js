import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal, Dropdown, DropdownButton} from 'react-bootstrap';
import { updateTodo, deleteTodo } from '../../Action/todosAction';


export const UpdateNote = (props) => {
    const [note, setNote]=useState('');
    const {selectedDate} = useSelector(state => state.todos);
    const {uid} = useSelector(state => state.user.userInfo);
    const {todo} = useSelector(state => state.todos);
    const dispatch = useDispatch();


    function onKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
          }
    } 

    const updateContent = (key) => (e) => {
        setNote({
            ...todo,
            [key]: e.target.value
        });

        dispatch(updateTodo({
            userId: uid,
            title: todo.title,
            description: todo.description,
        }));
    }

    const deleteTask = (uid) => {
        dispatch(deleteTodo(uid));
    }


    return (
        <Modal show={props.show} onHide={props.onHide}>
             <Modal.Header closeButton>
                <Modal.Title>Update Note</Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control  
                        className="edit"
                        placeholder="Edit your task.."
                        value={props.title} 
                        onChange={updateContent('title')} 
                        onKeyDown={onKeyDown}
                 /> 
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Description</Form.Label>
                     <Form.Control  
                        className="edit"
                        placeholder="Edit your task.."
                        value={props.description} 
                        onChange={updateContent('description')} 
                        onKeyDown={onKeyDown}
                 /> 
                 </Form.Group>
                <Modal.Footer>
                {/* <Form.Control  
                        className="edit"
                        placeholder="Add tag.."
                        value={todo.tag} 
                        onChange={handleTags} 
                        onKeyDown={onKeyDown}
                 />  */}
                {/* <DropdownButton title="Schedule" variant="outline-dark" onSelect={handleSelectSchedule}>
                <Dropdown.Item eventKey="Today">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                 <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>{' '}
            
                Today</Dropdown.Item>
                <Dropdown.Item eventKey="Upcoming">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                Upcoming</Dropdown.Item>
                </DropdownButton>{' '}  */}
                <Button variant="danger" onClick={deleteTask}>Delete</Button>
                {/* <Button variant="secondary" onClick={handleClose}>Cancel</Button> */}
                </Modal.Footer> 
                </Modal.Body>
                
                </Modal>
    )

}