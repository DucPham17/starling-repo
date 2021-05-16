import { NoNoteFound } from "./NoNoteFound"
import { NoteItem } from "./NoteItem"
import {Card, Nav} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import './content.css';
import {filterTodosByTag } from '../../../Action/todosAction';
import {toISOString} from '../../../Helpers/date';

export const NoteCard = () => {

    const {todos, selectedDate, selectedTag} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    let {type} = useParams();


    useEffect(() => {
        dispatch(filterTodosByTag(uid, selectedTag, type, toISOString(selectedDate)))
    }, [type])

    return (

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
    )
}