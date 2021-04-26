import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Modal} from 'react-bootstrap';
import { addTodo } from '../../Action/todosAction';
import { toISOString } from '../../Helpers/date';

const defaultState = {
    title: '',
    description: '',
    isComplete: 'false',
};

export const AddNote = (props) => {
    const [state, setState] = useState(defaultState);
    const {uid} = useSelector(state => state.user.userInfo);
    const {selectedDate} = useSelector(state => state.todos);
    const dispatch = useDispatch();


    const onChange = (key) => (e) => {
        setState({
            ...state,
            [key]: e.target.value
        });
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo({
            userId: uid,
            title: state.title,
            description: state.description,
            date: toISOString(selectedDate)
        }));
    }

    return(
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add Note</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={onChange('title')} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' onChange={onChange('description')} required></Form.Control>
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}