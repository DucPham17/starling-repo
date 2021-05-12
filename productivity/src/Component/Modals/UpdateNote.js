import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal, Dropdown, DropdownButton} from 'react-bootstrap';
import { updateTodo } from '../../Action/todosAction';
import { toISOString } from '../../Helpers/date';
import { GetAction, GetTodosAction, SetAction, SetTodosAction } from '../../Action/updateAction'
import CreatableSelect from 'react-select/creatable';
import {colourStyles} from './colourStyles';


import Select from 'react-select';

const tags = [
    {label: 'Work', value: 'Work', color: '#5243AA'},
    {label: 'Schoolwork', value: 'Schoolwork', color: '#007bff'},
    {label: 'Errands', value: 'Errands', color: '#FF5630'},
    {label: 'Shopping', value: 'Shopping', color: '#36B37E'},
    {label: 'Personal', value: 'Personal', color: '#FFC400'},
    {label: 'Others', value: 'Others', color: '#e83e8c'},
]

export const UpdateNote = (props) => {
    const {selectedDate} = useSelector(state => state.todos);
    const {uid} = useSelector(state => state.user.userInfo);
    const todosUpdate = useSelector(state => state.updateTodos);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        const item = {
                title: todosUpdate.title,
                tag: todosUpdate.tag,
        }
        dispatch(updateTodo(uid, todosUpdate.date, item))
    }

    useEffect(() => {
        dispatch(GetAction())        
    }, [])

    let selectedCategory = tags.find((tag => tag.value === todosUpdate.tag))


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
                        placeholder="Edit your title"
                        defaultValue={todosUpdate.title} 
                        onChange={(e) => dispatch(SetTodosAction('title', e.target.value))} 
                 /> 
                 </Form.Group>
                 <Form.Group>
                     <Form.Label>Tag</Form.Label>
                        <Select 
                        placeholder="Edit your tag"
                        value={selectedCategory}
                        options={tags}
                        onChange={(e) => dispatch(SetTodosAction('tag', e.value))}
                        styles={colourStyles}>
                        </Select>
                 </Form.Group>
                <Modal.Footer>
                 <Button variant="primary" onClick={() => handleUpdate()}>Save</Button>
                 <Button variant="secondary" onClick={props.onHide}>Cancel</Button>                 
                </Modal.Footer> 
                </Modal.Body>
                
                </Modal>
    )

}