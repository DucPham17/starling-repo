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
    const {todos, selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onAddNoteClick = () => {
        dispatch(setModal(ModalTypes.ADD_NOTE))
    }
    console.log(todos)
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
                        />) :
                        <NoNoteFound/>
                }
            </div>
        </div>
    )
}