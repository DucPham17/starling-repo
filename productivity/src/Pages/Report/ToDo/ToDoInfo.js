import {Button, Row, Col, Modal, Form, Card, Nav} from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import '../Report.css';
import { getTodos, toggleTodos, deleteTodo } from '../../../Action/todosAction';
import {filterTodosByDate } from '../../../Action/todosAction';
import {toISOString} from '../../../Helpers/date';
import { useParams } from "react-router-dom";

const ToDoInfo = (props) => {
    const [completed, setCompleted] = useState(0)
    const [uncompleted, setUncompleted] = useState(0)
    
    useEffect(()=> {
        let completedAmount = 0
        let uncompletedAmount = 0

        if (props.todos.length > 0) {
            props.todos.map((id) => {
                if (id.isCompleted === false) {
                    completedAmount = completedAmount + 1
                } else {
                    uncompletedAmount = uncompletedAmount + 1
                }      
        })
        setCompleted(completedAmount)
        setUncompleted(uncompletedAmount) 
        }
    })

    return (
        <div>
            <Card>
                <Card.Header>
                    Info
                </Card.Header>
                <Card.Body>
                    <p>Amount of Completed tasks: {completed}</p>
                    <p>Amount of Uncompleted tasks: {uncompleted}</p>
                </Card.Body>
            </Card>
        </div> 
    )
}

export default ToDoInfo