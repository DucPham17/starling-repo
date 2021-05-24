import React, { useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Form, Modal} from 'react-bootstrap';
import { addTodo } from '../../Action/todosAction';
import { toISOString } from '../../Helpers/date';
import {colourStyles} from './colourStyles';
import Select from 'react-select';
import { CommonButton } from '../Common/CommonButton';


const tags = [
    {label: 'Work', value: 'Work', color: '#5243AA'},
    {label: 'Schoolwork', value: 'Schoolwork', color: '#007bff'},
    {label: 'Errands', value: 'Errands', color: '#FF5630'},
    {label: 'Shopping', value: 'Shopping', color: '#36B37E'},
    {label: 'Personal', value: 'Personal', color: '#FFC400'},
    {label: 'Others', value: 'Others', color: '#e83e8c'},

]

const defaultState = {
    title: '',
    tag: '',
    isCompleted: false,
};

export const AddNote = (props) => {
    const [state, setState] = useState(defaultState);
    const [category, setCategory] = useState(tags[0].value);
    const {uid} = useSelector(state => state.user.userInfo);
    const {selectedDate} = useSelector(state => state.todos);
    const dispatch = useDispatch();   

    let selectedCategory = tags.find((tag => tag.value === category))

    const handleChange = (e) => {
        setCategory(e.value);
    };

    const onChange = (key) => (e) => {
        setState({
            ...state,
            [key]: e.target.value
        });
    };

    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo({
            userId: uid,
            title: state.title,
            isCompleted: false,
            tag: selectedCategory.value,
            date: toISOString(selectedDate),

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
                        <Form.Label>Tag(s)</Form.Label>
                        <Select 
                        placeholder='Select a tag'
                        value={selectedCategory}
                        options={tags}
                        onChange={handleChange}
                        styles={colourStyles}
                        /> 
                         {/* <CreatableSelect 
                            isClearable
                            options={tags}
                            inputValue={tagInputValue}
                            placeholder='Create or select a tag'
                            onInputChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            onChange={handleChange}
                            value={selectedCategory}
                            styles={colourStyles}
                        >
                        </CreatableSelect> */}
                    </Form.Group>
                    <CommonButton type="submit">Add</CommonButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}