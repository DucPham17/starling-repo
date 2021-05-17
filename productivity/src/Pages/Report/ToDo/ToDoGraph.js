import React, {useEffect, useState} from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import '../Report.css';
import ToDoInfo from './ToDoInfo'
import Type from './Type'
import Completion from './Completion'
import {filterTodosByDate } from '../../../Action/todosAction';
import { useSelector, useDispatch } from "react-redux"
import {toISOString} from '../../../Helpers/date';

//Graph making
//https://www.freakyjolly.com/react-charts-examples/
const periods = [
    '3 Recent Days',
    'One Week',
    'Coming Soon' 
];

const ToDoGraph = () => {
    const [period, setPeriod] = useState('3 Recent Days');

    const {todos} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTodosByDate(uid, period, toISOString(new Date())))
    }, [period])

    return (
        <Row>
            <Col md={12} className="d-flex">
                <Form.Control as='select' required
                    defaultValue = 'Pick one...'
                    onChange={(e) => setPeriod(e.target.value)}
                >
                    {
                        periods.map((value) => (
                            <option>
                                {value}
                            </option>
                        ))
                    }
                </Form.Control>
            </Col>
            <Col md={12} xl={2}> 
                <ToDoInfo todos={todos} period={period}/>
            </Col>
            {todos.length > 0 ?
                <>
                    <Col md={12} xl={5}>
                        <Type todos={todos}/>
                    </Col>
                    <Col md={12} xl={5}>
                        <Completion todos={todos}/>
                    </Col>
                </>
                :
                <Col>
                    <h5> 
                        You have not made any expense in {period.toLowerCase()}
                    </h5>
                    <p> 
                        Add new to-do to see the data
                    </p>
                </Col>
            }   
        </Row>
    )
}

export default ToDoGraph
