import React, { useState}  from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './content.css';
import { IoAdd } from "react-icons/io5";
import { setModal } from '../../../Action/modalsAction';
import { ModalTypes } from '../../../Constant/modalTypes';
import { dateToPresentableString } from '../../../Helpers/date';
import { NoteItem } from './NoteItem';
import { NoNoteFound } from './NoNoteFound';

export const Content = (props) => {
    const {todos, selectedDate, updateTodo} = useSelector((state) => state.todos);
    const [state, setState]= useState({title: '', description: ''});
    const dispatch = useDispatch();
    const {uid} = useSelector((state) => state.user.userInfo);

    const onAddNoteClick = () => {
        dispatch(setModal(ModalTypes.ADD_NOTE))
    }

    const updateTodos = (e) => {
        const value = e.target.value;
        dispatch(updateTodo({
            userId : uid,
            title: setState({
                ...state,
                [e.target.title]: value}),

        }))
    }

    const deleteTodos = () => {
        dispatch(deleteTodos(uid))
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
                        todos.map((todo) => 
                        <NoteItem 
                        note={todo}
                        updateTodos={updateTodos}
                        deleteTodos={deleteTodos}
                        />) :
                        <NoNoteFound/>
                }
            </div>
        </div>
    )
}