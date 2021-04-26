import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal, Dropdown, DropdownButton} from 'react-bootstrap';
import { updateTodo } from '../../Action/todosAction';
import { toISOString } from '../../Helpers/date';
import { GetAction, UpdateAction } from '../../Action/updateAction'

export const UpdateNote = (props) => {
    const {selectedDate} = useSelector(state => state.todos);
    const {uid} = useSelector(state => state.user.userInfo);
    const todosUpdate = useSelector(state => state.updateTodos);

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleUpdate = (title, description) => {
       const item = {
            title: title,
            description: description,
       }

       const date = toISOString(selectedDate);

        dispatch(updateTodo(uid, todosUpdate.date , item))
           
    }

    useEffect(() => {
        dispatch(GetAction())        
    }, [])

    console.log(todosUpdate);
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
                        defaultValue={todosUpdate.title} 
                        onChange={(e) => setTitle(e.target.value)} 
                 /> 
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Tag</Form.Label>
                     <Form.Control  
                        className="edit"
                        placeholder="Add a tag"
                        defaultValue={todosUpdate.description} 
                        onChange={(e) => setDescription(e.target.value)} 
                 /> 
                 </Form.Group>
                <Modal.Footer>
                 <Button variant="primary" onClick={() =>handleUpdate(title, description)}>Save</Button>
                 <Button variant="secondary" onClick={props.onHide}>Cancel</Button>                 
                </Modal.Footer> 
                </Modal.Body>
                
                </Modal>
    )

}