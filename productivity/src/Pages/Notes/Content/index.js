import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IoAdd } from "react-icons/io5";
import { setModal } from '../../../Action/modalsAction';
import { ModalTypes } from '../../../Constant/modalTypes';
import { dateToPresentableString } from '../../../Helpers/date';
import { NoteCard } from './NoteCard';
import { NoteItem } from './NoteItem';
import {NoNoteFound} from './NoNoteFound';
import {filterTodosByTag } from '../../../Action/todosAction';
import {toISOString} from '../../../Helpers/date';
import {Card, Nav} from 'react-bootstrap';
import './content.css';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';


const filters = [
    { href: '/notes/all', label: 'All'},
    { href: '/notes/active', label: 'In Progress'}, 
    { href: '/notes/completed', label: 'Complete'}

]

export const Content = (props) => {
    const {selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onAddNoteClick = () => {
        dispatch(setModal(ModalTypes.ADD_NOTE))
    }

    const history = useHistory();
    const location = useLocation();

    return (
        <div className={props.className}>
            <div className="d-flex justify-content-between w-100 mb-4">
                <h3>{`Notes for ${dateToPresentableString(selectedDate)}`}</h3>
                <Button onClick={onAddNoteClick} variant="outline-primary">
                    <IoAdd/> Add Note
                </Button>
            </div>

             <Nav fill variant="pills" className="notes-content-card-header">
                 {filters.map((filter) => (
                <Nav.Item>
                    <Nav.Link key={filter.href} 
                            active={location.pathname.startsWith(filter.href)}
                            onClick={() => {history.push(filter.href)}}
                            >
                            {filter.label}
                    </Nav.Link>
            </Nav.Item>
                 ))}
            </Nav>  
            <Switch>
                <Route path="/notes/:type" component={NoteCard}/>
            </Switch>

        </div>
    )
}