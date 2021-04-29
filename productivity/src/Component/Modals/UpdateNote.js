import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal, Dropdown, DropdownButton} from 'react-bootstrap';
import { updateTodo } from '../../Action/todosAction';
import { toISOString } from '../../Helpers/date';
import { GetAction, GetTodosAction, SetAction, SetTodosAction } from '../../Action/updateAction'

export const UpdateNote = (props) => {
    const {selectedDate} = useSelector(state => state.todos);
    const {uid} = useSelector(state => state.user.userInfo);
    const todosUpdate = useSelector(state => state.updateTodos);

    const dispatch = useDispatch();

    const handleUpdate = () => {
       const item = {
            title: todosUpdate.title,
            description: todosUpdate.description,
       }
       console.log(item);
        dispatch(updateTodo(uid, todosUpdate.date, item))
    }

    useEffect(() => {
        dispatch(GetTodosAction())        
    }, [])
    
    console.log(todosUpdate)


    return (
        <Modal show={props.show} onHide={props.onHide}>
             <Modal.Header closeButton>
                <Modal.Title>Update Note</Modal.Title>
            </Modal.Header>
            
                <Modal.Body>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control  
                        required
                        defaultValue={todosUpdate.title} 
                        onChange={(e) => dispatch(SetTodosAction('title', e.target.value))} 
                 /> 
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Description</Form.Label>
                     <Form.Control  
                        className="edit"
                        placeholder="Edit your description"
                        defaultValue={todosUpdate.description} 
                        onChange={(e) => dispatch(SetTodosAction('description', e.target.value))} 
                 /> 
                 </Form.Group>
                <Modal.Footer>
                 <Button variant="primary" onClick={() => handleUpdate()}>Save</Button>
                 <Button variant="secondary" onClick={props.onHide}>Cancel</Button>                 
                </Modal.Footer> 
                </Modal.Body>
                
                </Modal>
    )

}