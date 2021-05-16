import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IoAdd } from "react-icons/io5";
import { setModal } from '../../../Action/modalsAction';
import { ModalTypes } from '../../../Constant/modalTypes';
import { dateToPresentableString } from '../../../Helpers/date';
import { NoteCard } from './NoteCard';
import {Card, Nav} from 'react-bootstrap';
import './content.css';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { CommonButton } from '../../../Component/Common/CommonButton';


const filters = [
    { href: '/notes/all', label: 'All'},
    { href: '/notes/active', label: 'In Progress'}, 
    { href: '/notes/completed', label: 'Completed'}

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
                <CommonButton style={{ width: '15rem'}} onClick={onAddNoteClick}>
                    <IoAdd/> Add Note
                </CommonButton>
            </div>

             <Nav fill variant="pills" className="notes-content-card-header">
                 {filters.map((filter) => (
                <Nav.Item className="notes-content-card-header">
                        <Nav.Link key={filter.href} 
                                active={location.pathname.startsWith(filter.href)}
                                onClick={() => {history.push(filter.href)}}
                                className="notes-content-card-header">
                                {filter.label}
                        </Nav.Link>
                </Nav.Item>
                 ))}
            </Nav>  
            <Card className="p-3 m-0">
                <Switch>
                    <Route path="/notes/:type" component={NoteCard}/>
                </Switch>
            </Card>

        </div>
    )
}