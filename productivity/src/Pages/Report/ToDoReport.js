import {Button, Row, Col, Modal, Form, Card, Nav} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import './Report.css';
import { getTodos, toggleTodos, deleteTodo } from '../../Action/todosAction';

const ToDoReport = () => {
    const infoUser = useSelector(state => state.user);
    const {todos, selectedDate} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <Row>
                <Col sm={6}> 
                    <p> To-do-Info</p>
                </Col>
                <Col sm={6}>
                    <p> To-do-Graph</p>
                </Col>
            </Row>
        </div> 
    )
}
export default ToDoReport