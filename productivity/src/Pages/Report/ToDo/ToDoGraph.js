import React, {useState, useEffect} from 'react'
import {Nav, Tabs, Tab, Row, Col} from 'react-bootstrap'
import '../Report.css';
import { useParams } from "react-router-dom";
import ToDoInfo from './ToDoInfo'
import Type from './Type'
import Completion from './Completion'
import {filterTodosByDate } from '../../../Action/todosAction';
import { useSelector, useDispatch } from "react-redux"
import {toISOString} from '../../../Helpers/date';

//Graph making
//https://www.freakyjolly.com/react-charts-examples/

const ToDoGraph = () => {
    let {id} = useParams()
    if (id == 'OneWeek'){
        id = 'One Week'  
    } else if (id == 'ComingSoon') {
        id = 'Coming Soon' 
    } else {
        id = '3 Recent Days'
    }

    const {todos} = useSelector((state) => state.todos);
    const {uid} = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(async() => {
        await dispatch(filterTodosByDate(uid, id, toISOString(new Date())))
    }, [id])

    return (
        <div>
            <Row>
                <Col sm={5 }> 
                    <ToDoInfo todos={todos}/>
                </Col>
                {todos.length > 0 ?
                    <Row style={{display:'inlineblock', margin:'2em'}}>
                        <Col sm={6}>
                            <Type todos={todos}/>
                        </Col>
                        <Col sm={6}>
                            <Completion todos={todos}/>
                        </Col>
                    </Row>   
                    :
                    <Row className='graphBox'>
                        <Col>
                        <h5> 
                            You have not made any expense in {id.toLowerCase()}
                        </h5>
                        <p> 
                            Add new to-do to see the data
                        </p>
                        </Col>
                    </Row>
                }   
            </Row>
        </div> 
    )
}

export default ToDoGraph
